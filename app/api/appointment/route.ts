import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// ============================================================
// PROTECTION ANTI-SPAM SIMPLE
// ============================================================

const requests = new Map<string, { count: number; resetAt: number }>();

const RATE_LIMIT = 5; // maximum 5 demandes
const RATE_WINDOW = 10 * 60 * 1000; // toutes les 10 minutes

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const current = requests.get(ip);

  if (!current || now > current.resetAt) {
    requests.set(ip, {
      count: 1,
      resetAt: now + RATE_WINDOW,
    });

    return true;
  }

  if (current.count >= RATE_LIMIT) {
    return false;
  }

  current.count++;

  return true;
}

// ============================================================
// SECURITE HTML
// ============================================================

function escapeHtml(value: string | undefined | null): string {
  return (value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

// ============================================================
// VALIDATION
// ============================================================

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@.]+\.[^\s@]+$/.test(email);
}

function isValidDate(date: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return false;
  }

  const parsed = new Date(`${date}T12:00:00`);

  return !Number.isNaN(parsed.getTime());
}

function isValidTime(time: string): boolean {
  return /^([01]\d|2[0-3]):[0-5]\d$/.test(time);
}

function isValidText(
  value: unknown,
  minLength = 1,
  maxLength = 100,
): value is string {
  return (
    typeof value === "string" &&
    value.trim().length >= minLength &&
    value.trim().length <= maxLength
  );
}

function isValidPhone(phone: string): boolean {
  return /^[0-9+\s().-]{6,25}$/.test(phone);
}

function isValidItems(
  items: unknown,
): items is { name: string; price: number }[] {
  if (!Array.isArray(items)) {
    return false;
  }

  return items.every(
    (item) =>
      item &&
      typeof item === "object" &&
      typeof item.name === "string" &&
      item.name.length <= 150 &&
      typeof item.price === "number" &&
      Number.isFinite(item.price) &&
      item.price >= 0 &&
      item.price <= 10000,
  );
}

// ============================================================
// DATE
// ============================================================

function formatDate(dateString: string): string {
  const date = new Date(`${dateString}T12:00:00`);

  return new Intl.DateTimeFormat("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

// ============================================================
// DEVIS
// ============================================================

function quoteRows(
  repairs: { name: string; price: number }[],
  services: { name: string; price: number }[],
) {
  return `
    ${repairs
      .map(
        (item) => `
      <tr>
        <td style="padding:10px 0;color:#374151;">
          ${escapeHtml(item.name)}
        </td>
        <td style="padding:10px 0;text-align:right;font-weight:600;">
          ${item.price.toFixed(2)} €
        </td>
      </tr>
    `,
      )
      .join("")}

    ${services
      .map(
        (item) => `
      <tr>
        <td style="padding:10px 0;color:#374151;">
          ${escapeHtml(item.name)}
        </td>
        <td style="padding:10px 0;text-align:right;font-weight:600;">
          ${item.price.toFixed(2)} €
        </td>
      </tr>
    `,
      )
      .join("")}
  `;
}

// ============================================================
// EMAIL LAYOUT
// ============================================================

function emailLayout(content: string) {
  return `
    <div style="
      max-width:650px;
      margin:0 auto;
      padding:40px 24px;
      font-family:Arial,Helvetica,sans-serif;
      color:#111827;
      background:#ffffff;
    ">

      <div style="
        margin-bottom:30px;
        border-bottom:1px solid #e5e7eb;
        padding-bottom:20px;
      ">
        <div style="
          font-size:24px;
          font-weight:700;
          color:#111827;
        ">
          Tech69
        </div>

        <div style="
          margin-top:5px;
          color:#6b7280;
          font-size:14px;
        ">
          Réparation & services
        </div>
      </div>

      ${content}

      <div style="
        margin-top:40px;
        padding-top:20px;
        border-top:1px solid #e5e7eb;
        color:#9ca3af;
        font-size:12px;
        line-height:1.5;
      ">
        Ce message a été envoyé automatiquement depuis le site Tech69.
      </div>

    </div>
  `;
}

// ============================================================
// POST
// ============================================================

export async function POST(request: Request) {
  try {
    // ========================================================
    // RATE LIMIT
    // ========================================================

    const forwardedFor = request.headers.get("x-forwarded-for");

    const ip =
      forwardedFor?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        {
          error:
            "Trop de demandes ont été envoyées. Veuillez patienter quelques minutes.",
        },
        { status: 429 },
      );
    }

    // ========================================================
    // JSON
    // ========================================================

    let body: unknown;

    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: "Données invalides." },
        { status: 400 },
      );
    }

    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { error: "Données invalides." },
        { status: 400 },
      );
    }

    const data = body as Record<string, unknown>;

    // ========================================================
    // DONNEES
    // ========================================================

    const {
      firstName,
      lastName,
      phone,
      email,
      date,
      time,
      deviceType,
      brand,
      modelName,
      repairs = [],
      services = [],
      subtotal,
      bonus,
      total,
    } = data;

    // ========================================================
    // VALIDATION CLIENT
    // ========================================================

    if (
      !isValidText(firstName, 2, 50) ||
      !isValidText(lastName, 2, 50) ||
      typeof phone !== "string" ||
      !isValidPhone(phone) ||
      typeof email !== "string" ||
      !isValidEmail(email) ||
      typeof date !== "string" ||
      !isValidDate(date) ||
      typeof time !== "string" ||
      !isValidTime(time)
    ) {
      return NextResponse.json(
        {
          error: "Veuillez vérifier les informations saisies.",
        },
        { status: 400 },
      );
    }

    // ========================================================
    // VALIDATION APPAREIL
    // ========================================================

    if (
      !isValidText(deviceType, 1, 50) ||
      !isValidText(brand, 1, 100) ||
      !isValidText(modelName, 1, 150)
    ) {
      return NextResponse.json(
        {
          error: "Les informations concernant l'appareil sont invalides.",
        },
        { status: 400 },
      );
    }

    // ========================================================
    // VALIDATION REPARATIONS / SERVICES
    // ========================================================

    if (!isValidItems(repairs) || !isValidItems(services)) {
      return NextResponse.json(
        {
          error: "Les informations du devis sont invalides.",
        },
        { status: 400 },
      );
    }

    // Limite raisonnable pour éviter de recevoir un énorme payload
    if (repairs.length > 50 || services.length > 50) {
      return NextResponse.json(
        {
          error: "Le devis contient trop d'éléments.",
        },
        { status: 400 },
      );
    }

    // ========================================================
    // VALIDATION MONTANTS
    // ========================================================

    if (
      typeof subtotal !== "number" ||
      !Number.isFinite(subtotal) ||
      subtotal < 0 ||
      subtotal > 100000 ||
      typeof bonus !== "number" ||
      !Number.isFinite(bonus) ||
      bonus < 0 ||
      bonus > 100000 ||
      typeof total !== "number" ||
      !Number.isFinite(total) ||
      total < 0 ||
      total > 100000
    ) {
      return NextResponse.json(
        {
          error: "Les montants du devis sont invalides.",
        },
        { status: 400 },
      );
    }

    // ========================================================
    // EMAIL
    // ========================================================

    const appointmentDate = formatDate(date);

    const rows = quoteRows(repairs, services);

    // ========================================================
    // EMAIL CLIENT
    // ========================================================

    const customerEmail = emailLayout(`
      <h1 style="
        margin:0 0 12px;
        font-size:28px;
      ">
        Rendez-vous confirmé
      </h1>

      <p style="
        color:#6b7280;
        font-size:16px;
        line-height:1.6;
      ">
        Bonjour ${escapeHtml(firstName)},
      </p>

      <p style="
        color:#374151;
        line-height:1.6;
      ">
        Votre rendez-vous a bien été enregistré.
      </p>

      <div style="
        margin:28px 0;
        padding:22px;
        border-radius:14px;
        background:#f3f4f6;
      ">
        <div style="
          font-size:13px;
          color:#6b7280;
        ">
          RENDEZ-VOUS
        </div>

        <div style="
          margin-top:8px;
          font-size:20px;
          font-weight:700;
        ">
          ${escapeHtml(appointmentDate)}
        </div>

        <div style="
          margin-top:4px;
          font-size:18px;
          font-weight:600;
        ">
          à ${escapeHtml(time)}
        </div>
      </div>

      <h2 style="font-size:18px;">
        Votre appareil
      </h2>

      <p style="color:#374151;">
        ${escapeHtml(brand)} ${escapeHtml(modelName)}
      </p>

      <h2 style="
        margin-top:30px;
        font-size:18px;
      ">
        Votre devis
      </h2>

      <table width="100%" style="border-collapse:collapse;">
        ${rows}

        <tr>
          <td style="
            padding:14px 0;
            border-top:1px solid #e5e7eb;
            font-weight:600;
          ">
            Sous-total
          </td>

          <td style="
            padding:14px 0;
            border-top:1px solid #e5e7eb;
            text-align:right;
            font-weight:600;
          ">
            ${subtotal.toFixed(2)} €
          </td>
        </tr>

        <tr>
          <td style="
            padding:10px 0;
            color:#16a34a;
            font-weight:600;
          ">
            Bonus réparation
          </td>

          <td style="
            padding:10px 0;
            text-align:right;
            color:#16a34a;
            font-weight:600;
          ">
            -${bonus.toFixed(2)} €
          </td>
        </tr>

        <tr>
          <td style="
            padding:18px 0 0;
            border-top:1px solid #e5e7eb;
            font-size:20px;
            font-weight:700;
          ">
            Total
          </td>

          <td style="
            padding:18px 0 0;
            border-top:1px solid #e5e7eb;
            text-align:right;
            font-size:20px;
            font-weight:700;
          ">
            ${total.toFixed(2)} €
          </td>
        </tr>
      </table>

      <p style="
        margin-top:30px;
        color:#6b7280;
        font-size:13px;
        line-height:1.6;
      ">
        Ce devis est indicatif et pourra être ajusté en boutique
        après vérification de votre appareil.
      </p>
    `);

    // ========================================================
    // EMAIL ENTREPRISE
    // ========================================================

    const companyEmail = emailLayout(`
      <h1 style="
        margin:0 0 8px;
        font-size:28px;
      ">
        Nouveau rendez-vous
      </h1>

      <p style="
        color:#6b7280;
        margin-bottom:30px;
      ">
        Un nouveau rendez-vous vient d'être pris depuis le site.
      </p>

      <div style="
        padding:22px;
        background:#f3f4f6;
        border-radius:14px;
        margin-bottom:30px;
      ">
        <div style="
          font-size:13px;
          color:#6b7280;
        ">
          RENDEZ-VOUS
        </div>

        <div style="
          margin-top:8px;
          font-size:20px;
          font-weight:700;
        ">
          ${escapeHtml(appointmentDate)}
        </div>

        <div style="
          margin-top:4px;
          font-size:18px;
          font-weight:600;
        ">
          ${escapeHtml(time)}
        </div>
      </div>

      <h2 style="font-size:18px;">
        Informations client
      </h2>

      <table width="100%" style="border-collapse:collapse;">
        <tr>
          <td style="padding:8px 0;color:#6b7280;">
            Nom
          </td>

          <td style="
            padding:8px 0;
            text-align:right;
            font-weight:600;
          ">
            ${escapeHtml(lastName)}
          </td>
        </tr>

        <tr>
          <td style="padding:8px 0;color:#6b7280;">
            Prénom
          </td>

          <td style="
            padding:8px 0;
            text-align:right;
            font-weight:600;
          ">
            ${escapeHtml(firstName)}
          </td>
        </tr>

        <tr>
          <td style="padding:8px 0;color:#6b7280;">
            Téléphone
          </td>

          <td style="
            padding:8px 0;
            text-align:right;
            font-weight:600;
          ">
            ${escapeHtml(phone)}
          </td>
        </tr>

        <tr>
          <td style="padding:8px 0;color:#6b7280;">
            Email
          </td>

          <td style="
            padding:8px 0;
            text-align:right;
            font-weight:600;
          ">
            ${escapeHtml(email)}
          </td>
        </tr>
      </table>

      <h2 style="
        margin-top:30px;
        font-size:18px;
      ">
        Appareil
      </h2>

      <p style="color:#374151;">
        ${escapeHtml(brand)} ${escapeHtml(modelName)}
      </p>

      <h2 style="
        margin-top:30px;
        font-size:18px;
      ">
        Détail du devis
      </h2>

      <table width="100%" style="border-collapse:collapse;">
        ${rows}

        <tr>
          <td style="
            padding:14px 0;
            border-top:1px solid #e5e7eb;
            font-weight:600;
          ">
            Sous-total
          </td>

          <td style="
            padding:14px 0;
            border-top:1px solid #e5e7eb;
            text-align:right;
            font-weight:600;
          ">
            ${subtotal.toFixed(2)} €
          </td>
        </tr>

        <tr>
          <td style="
            padding:10px 0;
            color:#16a34a;
            font-weight:600;
          ">
            Bonus réparation
          </td>

          <td style="
            padding:10px 0;
            text-align:right;
            color:#16a34a;
            font-weight:600;
          ">
            -${bonus.toFixed(2)} €
          </td>
        </tr>

        <tr>
          <td style="
            padding:18px 0 0;
            border-top:1px solid #e5e7eb;
            font-size:20px;
            font-weight:700;
          ">
            Total
          </td>

          <td style="
            padding:18px 0 0;
            border-top:1px solid #e5e7eb;
            text-align:right;
            font-size:20px;
            font-weight:700;
          ">
            ${total.toFixed(2)} €
          </td>
        </tr>
      </table>
    `);

    // ========================================================
    // CONFIGURATION EMAIL
    // ========================================================

    const from = process.env.EMAIL_FROM;
    const contactEmail = process.env.CONTACT_EMAIL;

    if (!from || !contactEmail) {
      throw new Error("Configuration email manquante.");
    }

    // ========================================================
    // ENVOI CLIENT
    // ========================================================

    await resend.emails.send({
      from,
      to: email,
      subject: "Votre rendez-vous est confirmé",
      html: customerEmail,
      replyTo: contactEmail,
    });

    // ========================================================
    // ENVOI ENTREPRISE
    // ========================================================

    await resend.emails.send({
      from,
      to: contactEmail,
      subject: `Nouveau rendez-vous - ${firstName} ${lastName}`,
      html: companyEmail,
      replyTo: email,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Impossible d'envoyer les emails.",
      },
      {
        status: 500,
      },
    );
  }
}
