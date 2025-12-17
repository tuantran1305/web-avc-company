export function CompanyInfo() {
  return (
    <section className="container mx-auto max-w-6xl px-4 py-10">
      <div className="rounded-xl border p-6 bg-white">
        <h2 className="text-xl md:text-2xl font-semibold mb-3">Company Info</h2>
        <div className="text-sm leading-6">
          <p><span className="font-medium">Company:</span> AVC Electronics Inc.</p>
          <p>
            <span className="font-medium">Address:</span> 16600 Harbor Blvd. Suite F,
            Fountain Valley, CA 92708
          </p>
          <p><span className="font-medium">Founded:</span> 2020</p>
        </div>
      </div>
    </section>
  );
}
