"use client";

import { useSearchParams } from "next/navigation";
import { devices } from "@/app/data/data";
import Image from "next/image";
import Contact from "@/components/sections/Contact";
import { useState, useEffect } from "react";
import LoaderProgress from "@/components/LoaderProgress";

export default function DevisPage() {
  const params = useSearchParams();

  const [loading, setLoading] = useState(true);

  const deviceType = params.get("device");
  const brand = params.get("brand");
  const modelName = params.get("model");

  const repairsParam = params.get("repairs");
  const servicesParam = params.get("services");

  const selectedRepairIds = repairsParam?.split(",") ?? [];
  const selectedServiceIds = servicesParam?.split(",") ?? [];

  const device = devices.find((d) => d.type === deviceType);

  const brandData = device?.brands.find((b) => b.name === brand);

  const model = brandData?.models.find((m) => m.name === modelName);

  const repairs = model?.repairs ?? [];
  const services = model?.services ?? [];

  // récupérer uniquement les éléments sélectionnés dans les choix de réparations et services

  const selectedRepairs = repairs.filter((r) =>
    selectedRepairIds.includes(r.id),
  );

  const selectedServices = services.filter((s) =>
    selectedServiceIds.includes(s.id),
  );

  const subtotalRepairs = selectedRepairs.reduce(
    (acc, repair) => acc + repair.price,
    0,
  );

  const subtotalServices = selectedServices.reduce(
    (acc, service) => acc + service.price,
    0,
  );

  const subtotal = subtotalRepairs + subtotalServices;

  const bonus = subtotalRepairs * 0.1;

  const total = subtotal - bonus;

  useEffect(() => {
    if (!loading) {
      globalThis.gtag?.("event", "conversion", {
        send_to: "AW-17909751880/5nd-CP25r_YbEMjAhNxC",
      });
    }
  }, [loading]);

  if (loading) {
    return (
      <LoaderProgress
        duration={5000}
        messages={[
          "Analyse de votre appareil ...",
          "Identification des réparations ...",
          "Calcul du coût des pièces ...",
          "Application des remises ...",
          "Préparation de votre devis ...",
        ]}
        onComplete={() => setLoading(false)}
      />
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-16 px-4 text-black">
      <h1 className="text-3xl font-bold mb-10">
        Votre récapitulatif pour{" "}
        <span className="text-primary">
          {brand} {modelName}
        </span>
      </h1>

      <div className="border rounded-xl p-8 space-y-6">
        {/* PANNES */}

        {selectedRepairs.map((repair) => (
          <div
            key={repair.id}
            className="flex justify-between items-center mb-3"
          >
            <div className="flex items-center gap-4">
              <Image
                src={repair.icon}
                alt={repair.name}
                width={30}
                height={30}
              />
              <p>{repair.name}</p>
            </div>
            <p>{repair.price.toFixed(2)} €</p>
          </div>
        ))}

        {/* SERVICES */}

        {selectedServices.map((service) => (
          <div
            key={service.id}
            className="flex justify-between items-center mb-3"
          >
            <div className="flex items-center gap-4">
              <Image
                src={service.icon}
                alt={service.name}
                width={30}
                height={30}
              />
              <p>{service.name}</p>
            </div>
            <p>{service.price.toFixed(2)} €</p>
          </div>
        ))}

        <hr />

        <div className="flex justify-between font-bold">
          <p>Sous-total :</p>
          <p>{subtotal.toFixed(2)} €</p>
        </div>

        <div className="flex justify-between text-green-600 font-bold">
          <p>Bonus réparation</p>
          <p>-{bonus.toFixed(2)} €</p>
        </div>

        <hr />

        <div className="flex justify-between text-2xl font-bold">
          <p>Total :</p>
          <p className="text-primary">{total.toFixed(2)} €</p>
        </div>
      </div>

      {/* Bonus avec icône animée */}
      <div className="flex justify-center m-10 items-center">
        <div className="flex items-center gap-3 animate-bounce">
          <Image
            src="/icons/congrat.png"
            alt="Félicitations !"
            width={30}
            height={30}
          />
          <p className="text-green-600 font-semibold text-lg">
            Grâce aux remises, vous économisez {bonus.toFixed(2)} € !
          </p>
        </div>
      </div>

      {/* Encadré warning */}
      <div className="flex items-start gap-4 border border-dashed border-primary rounded p-6 max-w-2xl mb-10 mx-auto">
        <Image
          src="/icons/warning.png"
          alt="Message d'alerte !"
          width={50}
          height={50}
          className="flex-shrink-0"
        />
        <p className="leading-relaxed font-bold">
          Votre devis est à titre indicatif et pourra être ajusté en boutique
          lors de votre rendez-vous avec nos techniciens
        </p>
      </div>

      <Contact />
    </div>
  );
}
