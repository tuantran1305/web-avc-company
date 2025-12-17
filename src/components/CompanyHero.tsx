"use client";

import Image from "next/image";
import Link from "next/link";
import { useImageFallback } from "../hooks/useImageFallback";

export function CompanyHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50" />
      <div className="relative container mx-auto max-w-6xl px-4 py-16 lg:py-24">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
          <div className="w-full lg:w-7/12">
            <div className="flex items-center gap-3 mb-6">
              <Image src="/logo.svg" alt="AVC logo" width={56} height={56} />
              <h1 className="text-3xl lg:text-5xl font-semibold tracking-tight">
                AVC Electronics Inc.
              </h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Ultrasonic water meters with NB‑IoT & LoRaWAN connectivity,
              rugged IP68 design and high accuracy.
            </p>
            <div className="mt-6 space-y-1 text-sm">
              <p>
                <span className="font-medium">Address:</span> 16600 Harbor Blvd. Suite F, Fountain Valley, CA 92708
              </p>
              <p>
                <span className="font-medium">Founded:</span> 2020
              </p>
            </div>
            <div className="mt-6 flex gap-3">
              <Link
                href="/#products"
                className="inline-flex items-center rounded-md bg-blue-600 text-white px-4 py-2 hover:bg-blue-700"
              >
                Products
              </Link>
              <Link
                href="/#about"
                className="inline-flex items-center rounded-md border px-4 py-2"
              >
                Learn more
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-5/12 flex justify-center">
            <HeroImage />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroImage() {
  const { src, onError } = useImageFallback([
    "/images/smart_meter.jpg",
    "/images/smart_meter.jpeg",
    "/images/lorawan-placeholder.svg",
  ]);
  return (
    <img
      src={src}
      onError={onError}
      alt="AVC LoRaWAN ultrasonic water meter"
      className="w-[420px] h-[420px] object-contain drop-shadow-sm"
    />
  );
}
