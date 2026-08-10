"use client";

import { useMemo, useState } from "react";
import {
  formatAppointmentDate,
  formatDateInput,
  getNextWorkingDays,
  isWorkingDay,
} from "@/utils/appointmentDates";

type Repair = {
  id: string;
  name: string;
  price: number;
};

type Service = {
  id: string;
  name: string;
  price: number;
};

type AppointmentBookingProps = {
  deviceType: string | null;
  brand: string | null;
  modelName: string | null;
  selectedRepairs: Repair[];
  selectedServices: Service[];
  subtotal: number;
  bonus: number;
  total: number;
};

export default function AppointmentBooking({
  deviceType,
  brand,
  modelName,
  selectedRepairs,
  selectedServices,
  subtotal,
  bonus,
  total,
}: Readonly<AppointmentBookingProps>) {
  const suggestedDates = useMemo(() => getNextWorkingDays(3), []);

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [showCalendar, setShowCalendar] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const times = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"];

  const handleSuggestedDate = (date: Date) => {
    setSelectedDate(formatDateInput(date));
    setSelectedTime("10:00");
    setShowCalendar(false);
  };

  const handleDateChange = (value: string) => {
    if (!value) return;

    const date = new Date(`${value}T12:00:00`);

    if (!isWorkingDay(date)) {
      setError(
        "Veuillez sélectionner un jour ouvré. Les week-ends et jours fériés ne sont pas disponibles.",
      );
      return;
    }

    setError("");
    setSelectedDate(value);
  };

  const canSubmit =
    selectedDate &&
    selectedTime &&
    firstName.trim() &&
    lastName.trim() &&
    phone.trim() &&
    email.trim();

  const handleSubmit = async () => {
    if (!canSubmit) return;

    setSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          phone,
          email,
          date: selectedDate,
          time: selectedTime,
          deviceType,
          brand,
          modelName,
          repairs: selectedRepairs,
          services: selectedServices,
          subtotal,
          bonus,
          total,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Une erreur est survenue.");
      }

      setSuccess(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Impossible de confirmer le rendez-vous.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <section className="max-w-3xl mx-auto my-16">
        <div className="bg-white border rounded-2xl shadow-sm p-10 text-center">
          <div className="text-5xl mb-5">✓</div>

          <h2 className="text-3xl font-bold mb-4">Rendez-vous confirmé !</h2>

          <p className="text-gray-600 mb-3">Votre rendez-vous est prévu le :</p>

          <p className="text-xl font-bold text-primary">
            {selectedDate} à {selectedTime}
          </p>

          <p className="text-gray-500 mt-6">
            Un email de confirmation vous a été envoyé à{" "}
            <strong>{email}</strong>.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-4xl mx-auto my-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Prenez rendez-vous</h2>

        <p className="text-gray-500 mt-3">
          Choisissez le créneau qui vous convient le mieux.
        </p>
      </div>

      {/* CRÉNEAUX RAPIDES */}

      <div className="grid md:grid-cols-3 gap-4">
        {suggestedDates.map((date) => {
          const dateValue = formatDateInput(date);
          const selected =
            selectedDate === dateValue && selectedTime === "10:00";

          return (
            <button
              key={dateValue}
              type="button"
              onClick={() => handleSuggestedDate(date)}
              className={`border rounded-xl p-5 text-left transition ${
                selected
                  ? "border-primary bg-primary/5"
                  : "border-gray-200 hover:border-primary"
              }`}
            >
              <p className="font-semibold capitalize">
                {date.toLocaleDateString("fr-FR", {
                  weekday: "long",
                })}
              </p>

              <p className="text-gray-500 capitalize">
                {date.toLocaleDateString("fr-FR", {
                  day: "numeric",
                  month: "long",
                })}
              </p>

              <p className="text-primary font-bold mt-2">10:00</p>
            </button>
          );
        })}
      </div>

      {/* AUTRE CRÉNEAU */}

      <div className="text-center mt-6">
        <button
          type="button"
          onClick={() => setShowCalendar(!showCalendar)}
          className="text-primary font-semibold hover:underline"
        >
          Je veux choisir un autre créneau
        </button>
      </div>

      {showCalendar && (
        <div className="mt-8 bg-gray-50 rounded-xl p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block font-semibold mb-2">Date</label>

              <input
                type="date"
                value={selectedDate}
                min={formatDateInput(new Date())}
                onChange={(e) => handleDateChange(e.target.value)}
                className="w-full border rounded-lg px-4 py-3 bg-white"
              />

              <p className="text-sm text-gray-500 mt-2">
                Les week-ends et jours fériés ne sont pas disponibles.
              </p>
            </div>

            <div>
              <label className="block font-semibold mb-2">Heure</label>

              <select
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                disabled={!selectedDate}
                className="w-full border rounded-lg px-4 py-3 bg-white disabled:opacity-50"
              >
                <option value="">Choisir une heure</option>

                {times.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      )}

      {/* RÉCAPITULATIF DU RDV */}

      {selectedDate && selectedTime && (
        <div className="mt-8 border border-primary/20 bg-primary/5 rounded-xl p-5">
          <p className="text-sm text-gray-500">Votre rendez-vous</p>

          <p className="text-lg font-bold capitalize mt-1">
            {formatAppointmentDate(new Date(`${selectedDate}T12:00:00`))} à{" "}
            {selectedTime}
          </p>
        </div>
      )}

      {/* INFORMATIONS CLIENT */}

      {selectedDate && selectedTime && (
        <div className="mt-8 space-y-5">
          <h3 className="text-xl font-bold">Vos coordonnées</h3>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Prénom"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="border rounded-lg px-4 py-3"
            />

            <input
              type="text"
              placeholder="Nom"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="border rounded-lg px-4 py-3"
            />

            <input
              type="tel"
              placeholder="Téléphone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="border rounded-lg px-4 py-3"
            />

            <input
              type="email"
              placeholder="Adresse email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded-lg px-4 py-3"
            />
          </div>

          {error && <p className="text-red-600 text-sm">{error}</p>}

          <button
            type="button"
            onClick={handleSubmit}
            disabled={!canSubmit || submitting}
            className="w-full bg-primary text-white font-semibold py-4 rounded-lg text-lg hover:bg-primary/90 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitting
              ? "Confirmation en cours..."
              : "Confirmer mon rendez-vous"}
          </button>
        </div>
      )}
    </section>
  );
}
