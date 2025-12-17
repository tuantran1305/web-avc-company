"use client";

import { useImageFallback } from "../hooks/useImageFallback";

function ProductCard({
  title,
  description,
  primaryImage,
  placeholder,
  secondaryImage,
  secondaryPlaceholder,
  specs,
}: {
  title: string;
  description: string;
  primaryImage: string;
  placeholder: string;
  secondaryImage?: string;
  secondaryPlaceholder?: string;
  specs: string[];
}) {
  const primary = useImageFallback([primaryImage, primaryImage.replace(/\.jpg$/i, ".jpeg"), placeholder]);
  const secondaryCandidates = [
    secondaryImage,
    secondaryImage?.replace(/\.jpg$/i, ".jpeg"),
    secondaryPlaceholder || placeholder,
  ];
  const secondary = useImageFallback(secondaryCandidates.filter(Boolean) as string[]);
  return (
    <div className="rounded-xl border bg-white p-4 md:p-6 shadow-sm">
      <img
        src={primary.src}
        alt={title}
        onError={primary.onError}
        className="w-full h-60 object-contain mb-4 select-none"
      />
      {secondaryImage && (
        <img
          src={secondary.src}
          alt={`${title} schematic`}
          onError={secondary.onError}
          className="w-full h-52 object-contain mb-3 select-none"
        />
      )}
      <h3 className="text-xl font-semibold mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground mb-3">{description}</p>
      <ul className="list-disc list-inside text-sm space-y-1">
        {specs.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </div>
  );
}

export function ProductGallery() {
  return (
    <section id="products" className="container mx-auto max-w-6xl px-4 py-12 lg:py-16">
      <div className="mb-8 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold">Products</h2>
        <p className="text-muted-foreground mt-2">Two product lines: NB‑IoT and LoRaWAN.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProductCard
          title="NB‑IoT Ultrasonic Meter"
          description="NB‑IoT cellular connectivity for dense urban coverage."
          primaryImage="/images/NBIoT.jpg"
          placeholder="/images/nbiot-placeholder.svg"
          specs={["NB‑IoT", "IP68", "Class 2 accuracy", "R250"]}
        />
        <ProductCard
          title="LoRaWAN Ultrasonic Meter"
          description="Long‑range LoRaWAN connectivity with ultra‑low power consumption."
          primaryImage="/images/LoRaWAN.jpg"
          placeholder="/images/lorawan-placeholder.svg"
          specs={["LoRaWAN", "IP68", "Class 2 accuracy", "R250"]}
        />
      </div>
      {false && (
        <p className="text-xs text-muted-foreground mt-4">
          Place images as <code>public/images/NBIoT.jpg</code> and <code>public/images/LoRaWAN.jpg</code>.
        </p>
      )}
    </section>
  );
}
