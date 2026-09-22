import PageHeader from "../components/PageHeader";

const services = [
  { t: "Exterior touchless wash", d: "High pressure foam wash with zero brush contact, safe on every paint finish." },
  { t: "Interior detailing", d: "Vacuum, dashboard and seat wipe down, window cleaning inside and out." },
  { t: "Wax and polish", d: "Hand-applied carnauba wax for a deep shine that lasts two to three weeks." },
  { t: "Tyre and rim shine", d: "Degreased, cleaned and dressed for a fresh off the lot look." },
  { t: "Engine bay cleaning", d: "Careful low-pressure clean that keeps electronics safe and dry." },
  { t: "Ceramic coating add on", d: "Optional long-term paint protection, booked separately in advance." },
];

export default function Services() {
  return (
    <>
      <PageHeader eyebrow="Services" title="Everything your car needs, nothing that damages it." />
      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-20 grid sm:grid-cols-2 gap-8">
        {services.map((s) => (
          <div key={s.t} className="border-b border-chrome pb-8">
            <p className="font-display text-lg font-medium">{s.t}</p>
            <p className="text-sm text-ink/60 mt-2 leading-relaxed">{s.d}</p>
          </div>
        ))}
      </section>
    </>
  );
}
