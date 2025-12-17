import Link from "next/link";

export function CompanyResources() {
  return (
    <section className="bg-sky-50 border-t">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/#about" className="hover:underline">About AVC</Link></li>
              <li><Link href="/#products" className="hover:underline">Products</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Products</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/#products" className="hover:underline">NB‑IoT Ultrasonic Meter</Link></li>
              <li><Link href="/#products" className="hover:underline">LoRaWAN Ultrasonic Meter</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Specifications</h3>
            <ul className="space-y-2 text-sm">
              <li>IP68 enclosure</li>
              <li>Accuracy Class 2</li>
              <li>Dynamic range R250</li>
              <li>Operating temp: T30</li>
              <li>Pressure rating: MAP16</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: support@avcelectronics.com</li>
              <li>Phone: +1 (714) 555‑0101</li>
              <li>Hours: Mon–Fri 9:00–17:00 (PT)</li>
              <li><Link className="hover:underline" href="/contact">Contact form</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>AVC Electronics Inc.</li>
              <li>16600 Harbor Blvd. Suite F</li>
              <li>Fountain Valley, CA 92708</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
