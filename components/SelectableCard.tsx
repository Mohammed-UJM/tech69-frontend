"use client";

import Image from "next/image";

type SelectableCardProps = {
  title: string;
  icon: string;
  selected?: boolean;
  price?: number;
  onClick?: () => void;
};

export default function SelectableCard({
  title,
  icon,
  selected = false,
  price,
  onClick,
}: Readonly<SelectableCardProps>) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        border rounded p-5 w-full text-center
        transition
        hover:shadow-lg
        hover:border-primary
        focus:outline-none
        ${selected ? "border-primary bg-primary/10" : "border-gray-200"}
      `}
    >
      <Image
        src={icon}
        alt={title}
        width={40}
        height={40}
        className="mx-auto mb-4"
      />

      <p className="font-semibold">{title}</p>

      {price !== undefined && (
        <p className="text-sm text-gray-500 mt-1">{price.toFixed(2)} €</p>
      )}
    </button>
  );
}
