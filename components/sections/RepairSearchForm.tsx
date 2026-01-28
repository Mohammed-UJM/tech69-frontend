"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import SelectCustom from "@/components/SelectCustom";

/* ================= TYPES ================= */

type DeviceType = "smartphone" | "tablette" | "ordinateur";

type RepairData = {
  [key in DeviceType]: {
    [brand: string]: string[];
  };
};

/* ================= DATA ================= */

const data: RepairData = {
  smartphone: {
    Apple: [
      "iPhone 14",
      "iPhone 13",
      "iPhone 12",
      "iPhone 11",
      "iPhone X",
      "iPhone XR",
      "iPhone XS",
      "iPhone 8",
      "iPhone 7",
      "iPhone SE",
      "iPhone 6S",
      "iPhone 6",
      "iPhone 5S",
      "iPhone 5",
      "iPhone 4S",
      "iPhone 4",
      "iPhone 3GS",
      "iPhone 3G",
      "iPhone 2G",
    ],
    Samsung: [
      "Galaxy S23",
      "Galaxy S22",
      "Galaxy S21",
      "Galaxy S20",
      "Galaxy S10",
      "Galaxy S9",
      "Galaxy S8",
      "Galaxy Note 20",
      "Galaxy Note 10",
      "Galaxy Note 9",
      "Galaxy A72",
      "Galaxy A71",
      "Galaxy A51",
      "Galaxy A50",
      "Galaxy A40",
      "Galaxy A30",
      "Galaxy A20",
      "Galaxy A10",
    ],
    Xiaomi: [
      "Mi 13",
      "Mi 12",
      "Mi 11",
      "Redmi Note 12",
      "Redmi Note 11",
      "Redmi Note 10",
      "Redmi 10",
      "Redmi 9",
      "Redmi 8",
      "Redmi 7",
    ],
    OnePlus: [
      "OnePlus 11",
      "OnePlus 10",
      "OnePlus 9",
      "OnePlus 8",
      "OnePlus 7T",
      "OnePlus 7",
    ],
  },
  tablette: {
    Apple: ["iPad Air", "iPad Pro", "iPad Mini", "iPad 10ème Gen"],
  },
  ordinateur: {
    Dell: ["XPS 13", "XPS 15", "Inspiron 15", "Latitude 7420"],
    HP: ["Pavilion", "Envy", "Spectre", "Omen"],
  },
};

/* ================= COMPONENT ================= */

export default function RepairSearchForm() {
  const router = useRouter();

  const [device, setDevice] = useState<DeviceType | "">("");
  const [brand, setBrand] = useState<string>("");
  const [model, setModel] = useState<string>("");

  const brands: string[] = device ? Object.keys(data[device]) : [];
  const models: string[] = device && brand ? (data[device][brand] ?? []) : [];

  const canSubmit = Boolean(device && brand && model);

  const handleSubmit = () => {
    if (!canSubmit) return;

    router.push(`/reparation?device=${device}&brand=${brand}&model=${model}`);
  };

  const selectClass = `
    border
    border-gray-300
    rounded
    px-4
    py-3
    text-gray-800
    bg-white
    focus:outline-none
    focus:ring-0
    focus:border-primary
    disabled:bg-gray-100
    disabled:text-gray-400
    appearance-none
  `;

  return (
    <div className="bg-white shadow-lg rounded p-4 max-w-7xl mx-auto -mt-10 relative z-10 border border-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
        {/* Appareil */}
        <SelectCustom
          value={device}
          onChange={(v) => {
            setDevice(v as DeviceType);
            setBrand("");
            setModel("");
          }}
          options={["smartphone", "tablette", "ordinateur"]}
          placeholder="Quel appareil ?"
          searchable={true}
        />

        {/* Marque */}
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

        {/* Modèle */}
        <SelectCustom
          value={model}
          onChange={setModel}
          options={models}
          placeholder="Quel modèle ?"
          disabled={!brand}
          searchable={true}
        />

        {/* Bouton */}
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
