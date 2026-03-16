"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import SelectCustom from "@/components/SelectCustom";
import { devices } from "@/app/data/data";

type DeviceType = "smartphone" | "tablette" | "ordinateur";

export default function RepairSearchForm() {
  const router = useRouter();

  const [device, setDevice] = useState<DeviceType | "">("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");

  /* ================= DATA FROM data.ts ================= */

  const deviceData = devices.find((d) => d.type === device);

  const brands = deviceData?.brands.map((b) => b.name) ?? [];

  const brandData = deviceData?.brands.find((b) => b.name === brand);

  const models = brandData?.models.map((m) => m.name) ?? [];

  /* ================= SUBMIT ================= */

  const canSubmit = Boolean(device && brand && model);

  const handleSubmit = () => {
    if (!canSubmit) return;

    router.push(`/reparations?device=${device}&brand=${brand}&model=${model}`);
  };

  return (
    <div className="bg-white shadow-lg rounded p-4 max-w-7xl mx-auto -mt-10 relative z-10 border border-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
        {/* APPAREIL */}

        <SelectCustom
          value={device}
          onChange={(v) => {
            setDevice(v as DeviceType);
            setBrand("");
            setModel("");
          }}
          options={devices.map((d) => d.type)}
          placeholder="Quel appareil ?"
          searchable={true}
        />

        {/* MARQUE */}

        <SelectCustom
          value={brand}
          onChange={(v) => {
            setBrand(v);
            setModel("");
          }}
          options={brands}
          placeholder="Quelle marque ?"
          disabled={!device}
          searchable={true}
        />

        {/* MODELE */}

        <SelectCustom
          value={model}
          onChange={setModel}
          options={models}
          placeholder="Quel modèle ?"
          disabled={!brand}
          searchable={true}
        />

        {/* BOUTON */}

        <button
          onClick={handleSubmit}
          disabled={!canSubmit}
          className="
            bg-primary
            hover:bg-primary/90
            text-white
            font-semibold
            py-2
            text-lg
            rounded
            transition
            disabled:opacity-50
            disabled:cursor-not-allowed
          "
        >
          Commencer la réparation
        </button>
      </div>
    </div>
  );
}
