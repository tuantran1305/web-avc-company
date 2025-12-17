"use client";

import { useImageFallback } from "../hooks/useImageFallback";

export function SmartMeterBenefits() {
  const img = useImageFallback([
    "/images/value_meter.jpg",
    "/images/value_meter.jpeg",
    "/images/lorawan-placeholder.svg",
  ]);

  const benefits = [
    { title: "Reduce Consumption", desc: "Daily/weekly insights help households and utilities cut waste." },
    { title: "Leak Detection", desc: "Instant alerts for unusual usage and continuous flow events." },
    { title: "Remote Readings", desc: "No manual reads; data via NB‑IoT or LoRaWAN." },
    { title: "Edge Analytics", desc: "On‑device processing for alarms and tamper detection." },
  ];

  return (
    <section className="bg-sky-50/60">
      <div className="container mx-auto max-w-6xl px-4 py-12 lg:py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold">Smart Meter Benefits</h2>
          <p className="text-muted-foreground mt-2">
            Smart ultrasonic meters deliver actionable data to improve water
            efficiency, reduce losses and enhance customer experience.
          </p>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((b) => (
              <li key={b.title} className="rounded-lg border bg-white p-4">
                <div className="font-medium">{b.title}</div>
                <div className="text-sm text-muted-foreground mt-1">{b.desc}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full">
          <img
            src={img.src}
            onError={img.onError}
            alt="Smart meter value illustration"
            className="w-full h-80 object-cover rounded-xl border shadow-sm"
          />
        </div>
      </div>
    </section>
  );
}
