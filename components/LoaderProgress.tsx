"use client";

import { useState, useEffect } from "react";

type LoaderProgressProps = {
  duration?: number; // durée totale en ms
  messages: string[]; // messages dynamiques passés en props
  onComplete?: () => void;
};

export default function LoaderProgress({
  duration = 1800,
  messages,
  onComplete,
}: Readonly<LoaderProgressProps>) {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  const radius = 56;
  const circumference = 2 * Math.PI * radius;

  // Progression du cercle
  useEffect(() => {
    const stepTime = duration / 100;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, stepTime);

    return () => clearInterval(interval);
  }, [duration]);

  // Messages dynamiques avec durée égale
  useEffect(() => {
    if (!messages || messages.length === 0) return;

    const stepDuration = duration / messages.length;

    const messageInterval = setInterval(() => {
      setMessageIndex((prev) => (prev < messages.length - 1 ? prev + 1 : prev));
    }, stepDuration);

    return () => clearInterval(messageInterval);
  }, [duration, messages]);

  // Appel onComplete à la fin
  useEffect(() => {
    if (progress === 100 && onComplete) {
      const timeout = setTimeout(() => {
        onComplete();
      }, 300);

      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  const offset = circumference - (circumference * progress) / 100;

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-8">
      <div className="relative w-36 h-36">
        {/* cercle background */}
        <svg className="w-full h-full -rotate-90 drop-shadow-md">
          <circle
            cx="72"
            cy="72"
            r={radius}
            stroke="#e5e7eb"
            strokeWidth="10"
            fill="transparent"
          />

          {/* cercle progress gradient */}
          <defs>
            <linearGradient id="gradient">
              <stop offset="0%" stopColor="#ff6427" />
              <stop offset="100%" stopColor="#ff9a3c" />
            </linearGradient>
          </defs>

          <circle
            cx="72"
            cy="72"
            r={radius}
            stroke="url(#gradient)"
            strokeWidth="10"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-200"
          />
        </svg>

        {/* pourcentage */}
        <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-primary">
          {progress}%
        </div>
      </div>

      {/* message dynamique */}
      <p className="text-gray-500 text-lg animate-pulse">
        {messages[messageIndex]}
      </p>
    </div>
  );
}
