"use client";
import { useEffect, useRef, useState } from "react";

type SelectCustomProps = {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder: string;
  disabled?: boolean;
  searchable?: boolean;
};

export default function SelectCustom({
  value,
  onChange,
  options,
  placeholder,
  disabled = false,
  searchable = false,
}: Readonly<SelectCustomProps>) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
        setSearch("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filtrage des options selon la recherche
  const filteredOptions = options.filter((opt) =>
    opt.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div ref={ref} className="relative w-full">
      {/* Trigger */}
      <button
        type="button"
        disabled={disabled}
        onClick={() => setOpen((o) => !o)}
        className={`
          w-full
          flex
          justify-between
          items-center
          px-4
          py-2
          rounded
          border
          text-left
          bg-white
          transition
          ${
            disabled
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "border-gray-300 text-gray-800 hover:border-primary"
          }
        `}
      >
        <span className={value ? "text-gray-800" : "text-gray-500"}>
          {value || placeholder}
        </span>

        <svg
          className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown */}
      {open && !disabled && (
        <div className="absolute mt-2 w-full bg-white border border-gray-200 rounded shadow-lg z-50 max-h-60 overflow-y-auto">
          {/* Input recherche */}
          {searchable && (
            <div className="p-2">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Rechercher..."
                className="w-full px-3 py-1 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
          )}

          {/* Options */}
          {filteredOptions.length === 0 && (
            <div className="px-4 py-1 text-gray-400 text-sm">Aucune option</div>
          )}

          {filteredOptions.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => {
                onChange(option);
                setOpen(false);
                setSearch("");
              }}
              className="w-full py-1 flex justify-center"
            >
              <span
                className={`
                  w-[90%]
                  text-left
                  px-4
                  py-1
                  rounded
                  transition
                  text-gray-800
                  hover:bg-primary hover:text-white
                `}
              >
                {option}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
