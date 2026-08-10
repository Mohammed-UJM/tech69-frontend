import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function formatDate(dateString: string): string {
  const date = new Date(`${dateString}T12:00:00`);

  return new Intl.DateTimeFormat("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

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

function emailLayout(content: string) {
  return `
<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width">
</head>

<body style="
  margin:0;
  padding:0;
  background:#f5f7fa;
  font-family:Arial,Helvetica,sans-serif;
  color:#111827;
">

<div style="
  max-width:650px;
  margin:40px auto;
  background:#ffffff;
  border-radius:18px;
  overflow:hidden;
  border:1px solid #e5e7eb;
">

  <div style="
    padding:28px 32px;
    border-bottom:1px solid #e5e7eb;
  ">
    <div style="
      font-size:22px;
      font-weight:700;
      color:#111827;
    ">
      Votre entreprise
    </div>

    <div style="
      margin-top:5px;
      color:#6b7280;
      font-size:14px;
    ">
      Réparation & services
    </div>
  </div>

  <div style="padding:32px;">
    ${content}
  </div>

  <div style="
    padding:22px 32px;
    background:#f9fafb;
    color:#6b7280;
    font-size:12px;
    text-align:center;
  ">
    Cet email a été envoyé automatiquement depuis votre site.
  </div>

</div>

</body>
</html>
`;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

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
    } = body;

    if (!firstName || !lastName || !phone || !email || !date || !time) {
      return NextResponse.json(
        { error: "Informations manquantes." },
        { status: 400 },
      );
    }

    const appointmentDate = formatDate(date);

    const rows = quoteRows(repairs, services);

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
            ${Number(subtotal).toFixed(2)} €
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
            -${Number(bonus).toFixed(2)} €
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
            ${Number(total).toFixed(2)} €
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
          <td style="padding:8px 0;text-align:right;font-weight:600;">
            ${escapeHtml(lastName)}
          </td>
        </tr>

        <tr>
          <td style="padding:8px 0;color:#6b7280;">
            Prénom
          </td>
          <td style="padding:8px 0;text-align:right;font-weight:600;">
            ${escapeHtml(firstName)}
          </td>
        </tr>

        <tr>
          <td style="padding:8px 0;color:#6b7280;">
            Téléphone
          </td>
          <td style="padding:8px 0;text-align:right;font-weight:600;">
            ${escapeHtml(phone)}
          </td>
        </tr>

        <tr>
          <td style="padding:8px 0;color:#6b7280;">
            Email
          </td>
          <td style="padding:8px 0;text-align:right;font-weight:600;">
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
            ${Number(subtotal).toFixed(2)} €
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
            -${Number(bonus).toFixed(2)} €
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
            ${Number(total).toFixed(2)} €
          </td>
        </tr>
      </table>
    `);

    const from = process.env.EMAIL_FROM;
    const contactEmail = process.env.CONTACT_EMAIL;

    if (!from || !contactEmail) {
      throw new Error("Configuration email manquante.");
    }

    await resend.emails.send({
      from,
      to: email,
      subject: "Votre rendez-vous est confirmé",
      html: customerEmail,
      replyTo: contactEmail,
    });

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
