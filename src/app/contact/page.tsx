export default function Page() {
  return (
    <main className="container mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-2xl font-semibold mb-4">Contact</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-lg border p-6 bg-white">
          <h2 className="font-medium mb-2">Get in touch</h2>
          <p className="text-sm text-muted-foreground">Email: contact@avcelectronics.com</p>
          <p className="text-sm text-muted-foreground">Phone: +1 (714) 555-0100</p>
          <p className="text-sm text-muted-foreground">Address: 16600 Harbor Blvd. Suite F, Fountain Valley, CA 92708</p>
        </div>
        <div className="rounded-lg border p-6 bg-white">
          <h2 className="font-medium mb-2">Send a message</h2>
          <p className="text-sm text-muted-foreground">A simple contact form will appear here.</p>
        </div>
      </div>
    </main>
  );
}
