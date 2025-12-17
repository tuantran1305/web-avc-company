export function AboutCompany() {
  return (
    <section id="about" className="container mx-auto max-w-6xl px-4 py-10">
      <div className="prose lg:prose-lg">
        <h2>About AVC Electronics Inc.</h2>
        <p>
          AVC Electronics Inc. designs and supplies ultrasonic water meters
          with modern LPWAN connectivity for smart water networks. Our focus is
          on reliability, long battery life, and high measurement accuracy.
        </p>
        <div className="not-prose grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
          <div className="rounded-lg border bg-white p-4">
            <div className="text-sm text-muted-foreground">Headquarters</div>
            <div className="mt-1 text-sm">
              16600 Harbor Blvd. Suite F
              <br /> Fountain Valley, CA 92708
            </div>
          </div>
          <div className="rounded-lg border bg-white p-4">
            <div className="text-sm text-muted-foreground">Founded</div>
            <div className="mt-1 text-sm">2020</div>
          </div>
          <div className="rounded-lg border bg-white p-4">
            <div className="text-sm text-muted-foreground">Product Lines</div>
            <div className="mt-1 text-sm">NB‑IoT Ultrasonic Meter, LoRaWAN Ultrasonic Meter</div>
          </div>
        </div>
        <h3>Key Specifications</h3>
        <ul>
          <li>Ingress protection: IP68</li>
          <li>Accuracy class: Class 2</li>
          <li>Dynamic range: R250</li>
        </ul>
        <p>
          Our solutions are engineered for scalable deployments and seamless
          integration with modern AMI/AMR systems.
        </p>
      </div>
    </section>
  );
}
