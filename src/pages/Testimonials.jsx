import PageHeader from "../components/PageHeader";

const reviews = [
  { name: "Ahmed R.", text: "First wash that didn't leave a single scratch on my black paint. I check every time now, still clean.", car: "Honda Civic" },
  { name: "Sana K.", text: "Booked online, was in and out in twenty minutes. The interior wipe-down was better than I expected.", car: "Suzuki Alto" },
  { name: "Bilal M.", text: "The Velvet Detail package is worth it before a long drive. Car looked showroom fresh.", car: "Toyota Corolla" },
];

export default function Testimonials() {
  return (
    <>
      <PageHeader eyebrow="Testimonials" title="What customers say after their first wash." />
      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-20 grid sm:grid-cols-3 gap-6">
        {reviews.map((r) => (
          <div key={r.name} className="border border-chrome rounded-lg p-6">
            <p className="text-sm leading-relaxed text-ink/80">"{r.text}"</p>
            <p className="mt-4 text-sm font-medium">{r.name}</p>
            <p className="text-xs text-ink/50">{r.car}</p>
          </div>
        ))}
      </section>
    </>
  );
}
