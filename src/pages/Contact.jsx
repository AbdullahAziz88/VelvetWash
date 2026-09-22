import PageHeader from "../components/PageHeader";

export default function Contact() {
  return (
    <>
      <PageHeader eyebrow="Contact" title="Come say hi, or send us a message." />
      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-20 grid lg:grid-cols-2 gap-12">
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1.5">Name</label>
            <input type="text" className="w-full rounded-md border border-chrome bg-foam px-3.5 py-2.5 text-sm focus:outline-hose" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5">Email</label>
            <input type="email" className="w-full rounded-md border border-chrome bg-foam px-3.5 py-2.5 text-sm focus:outline-hose" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5">Message</label>
            <textarea rows={4} className="w-full rounded-md border border-chrome bg-foam px-3.5 py-2.5 text-sm focus:outline-hose" />
          </div>
          <button type="submit" className="rounded-md bg-hose px-5 py-3 text-sm font-medium text-foam hover:bg-hose-deep transition-colors">
            Send message
          </button>
        </form>

        <div className="space-y-6">
          <div>
            <p className="text-sm font-medium">Address</p>
            <p className="text-sm text-ink/60 mt-1">DHA Phase 6, Lahore, Punjab</p>
          </div>
          <div>
            <p className="text-sm font-medium">Phone</p>
            <p className="text-sm text-ink/60 mt-1">+92 300 1234567</p>
          </div>
          <div>
            <p className="text-sm font-medium">Hours</p>
            <p className="text-sm text-ink/60 mt-1">Daily, 8am - 10pm</p>
          </div>
        </div>
      </section>
    </>
  );
}
