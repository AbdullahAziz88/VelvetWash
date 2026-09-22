import PageHeader from "../components/PageHeader";

const packageOptions = ["Quick Rinse — Rs 800", "Signature Wash — Rs 1,500", "Velvet Detail — Rs 3,200"];

export default function Booking() {
  function handleSubmit(e) {
    e.preventDefault();
    alert("Booking received — we'll text you a confirmation shortly.");
    e.target.reset();
  }

  return (
    <>
      <PageHeader eyebrow="Booking" title="Reserve your slot." blurb="Pick a package and time — we'll confirm by SMS." />
      <section className="max-w-xl mx-auto px-5 sm:px-8 py-20">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1.5">Full name</label>
            <input required type="text" className="w-full rounded-md border border-chrome bg-foam px-3.5 py-2.5 text-sm focus:outline-hose" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5">Phone number</label>
            <input required type="tel" className="w-full rounded-md border border-chrome bg-foam px-3.5 py-2.5 text-sm focus:outline-hose" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5">Package</label>
            <select required className="w-full rounded-md border border-chrome bg-foam px-3.5 py-2.5 text-sm focus:outline-hose">
              {packageOptions.map((p) => <option key={p}>{p}</option>)}
            </select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1.5">Date</label>
              <input required type="date" className="w-full rounded-md border border-chrome bg-foam px-3.5 py-2.5 text-sm focus:outline-hose" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Time</label>
              <input required type="time" className="w-full rounded-md border border-chrome bg-foam px-3.5 py-2.5 text-sm focus:outline-hose" />
            </div>
          </div>
          <button type="submit" className="w-full rounded-md bg-wax px-4 py-3 text-sm font-medium text-ink hover:bg-wax-deep transition-colors">
            Confirm booking
          </button>
        </form>
      </section>
    </>
  );
}