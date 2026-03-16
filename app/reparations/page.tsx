"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import { devices } from "@/app/data/data";
import SelectableCard from "@/components/SelectableCard";

export default function ReparationPage() {
  const router = useRouter();
  const params = useSearchParams();

  const deviceType = params.get("device"); // smartphone / tablette / ordinateur
  const brand = params.get("brand");
  const modelName = params.get("model");

  // 🔎 récupération du modèle depuis data.ts

  const device = devices.find((d) => d.type === deviceType);

  const brandData = device?.brands.find((b) => b.name === brand);

  const model = brandData?.models.find((m) => m.name === modelName);

  const repairs = model?.repairs || [];
  const services = model?.services || [];

  // -------------------------
  // REPAIRS
  // -------------------------

  const [selectedRepairs, setSelectedRepairs] = useState<string[]>([]);

  const toggleRepair = (id: string) => {
    setSelectedRepairs((prev) =>
      prev.includes(id) ? prev.filter((r) => r !== id) : [...prev, id],
    );
  };

  const [showAllRepairs, setShowAllRepairs] = useState(false);

  const visibleRepairs = showAllRepairs ? repairs : repairs.slice(0, 3);

  // -------------------------
  // SERVICES
  // -------------------------

  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((r) => r !== id) : [...prev, id],
    );
  };

  const [showAllServices, setShowAllServices] = useState(false);

  const visibleServices = showAllServices ? services : services.slice(0, 3);

  // -------------------------
  // NAVIGATION
  // -------------------------

  const goToDevis = () => {
    const repairsQuery = selectedRepairs.join(",");
    const servicesQuery = selectedServices.join(",");

    router.push(
      `/reparations/devis?device=${deviceType}&brand=${brand}&model=${modelName}&repairs=${repairsQuery}&services=${servicesQuery}`,
    );
  };

  // -------------------------
  // UI
  // -------------------------

  return (
    <div className="max-w-5xl mx-auto px-4 py-16 text-black">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-16">
        Que voulez-vous réparer sur votre
        <br />
        <span className="text-primary">
          {brand} {modelName}
        </span>{" "}
        ?
      </h1>

      {/* PANNES  */}

      <h2 className="text-2xl font-bold mb-6">Vos pannes</h2>

      {selectedRepairs.length > 0 && (
        <p className="text-gray-500 mb-8">
          {selectedRepairs.length} panne
          {selectedRepairs.length > 1 ? "s" : ""} sélectionnée
          {selectedRepairs.length > 1 ? "s" : ""}
        </p>
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {visibleRepairs.map((repair) => (
          <SelectableCard
            key={repair.id}
            title={repair.name}
            icon={repair.icon}
            selected={selectedRepairs.includes(repair.id)}
            onClick={() => toggleRepair(repair.id)}
          />
        ))}

        {repairs.length > 3 && (
          <SelectableCard
            title={showAllRepairs ? "Voir moins" : "Voir plus"}
            icon={showAllRepairs ? "/icons/moins.png" : "/icons/plus.png"}
            selected={false}
            onClick={() => setShowAllRepairs(!showAllRepairs)}
          />
        )}
      </div>

      <br />

      {/* SERVICES */}

      <h2 className="text-2xl font-bold mb-6">Nos services</h2>

      {selectedServices.length > 0 && (
        <p className="text-gray-500 mb-8">
          {selectedServices.length} service
          {selectedServices.length > 1 ? "s" : ""} sélectionné
          {selectedServices.length > 1 ? "s" : ""}
        </p>
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {visibleServices.map((service) => (
          <SelectableCard
            key={service.id}
            title={service.name}
            icon={service.icon}
            selected={selectedServices.includes(service.id)}
            onClick={() => toggleService(service.id)}
          />
        ))}

        {services.length > 3 && (
          <SelectableCard
            title={showAllServices ? "Voir moins" : "Voir plus"}
            icon={showAllServices ? "/icons/moins.png" : "/icons/plus.png"}
            selected={false}
            onClick={() => setShowAllServices(!showAllServices)}
          />
        )}
      </div>

      {(selectedRepairs.length > 0 || selectedServices.length > 0) && (
        <button
          onClick={goToDevis}
          className="
            mt-16
            bg-primary
            text-white
            font-semibold
            px-12
            py-4
            rounded
            text-lg
            hover:bg-primary/90

            transition
            duration-500
            ease-out
            transform
            opacity-0
            translate-y-6
            animate-slide-up
          "
        >
          Obtenir mon devis
        </button>
      )}
    </div>
  );
}
