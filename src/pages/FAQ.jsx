import { useState } from "react";
import PageHeader from "../components/PageHeader";

const faqs = [
  { q: "Is touchless washing safe for all paint types?", a: "Yes,since nothing but water and foam touches the car, it's safe for matte, glossy, and wrapped finishes alike." },
  { q: "How long does a wash take?", a: "Between 15 and 25 minutes depending on the package you choose." },
  { q: "Do I need to book in advance?", a: "It's recommended, especially on weekends, but walk ins are welcome if a bay is free." },
  { q: "What payment methods do you accept?", a: "Cash, card, and JazzCash / Easypaisa at the bay." },
  { q: "Can I cancel or reschedule a booking?", a: "Yes, up to two hours before your slot, free of charge." },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <>
      <PageHeader eyebrow="FAQ" title="Questions, answered." />
      <section className="max-w-3xl mx-auto px-5 sm:px-8 py-20 divide-y divide-chrome">
        {faqs.map((f, i) => {
          const open = openIdx === i;
          return (
            <div key={f.q} className="py-5">
              <button
                onClick={() => setOpenIdx(open ? null : i)}
                aria-expanded={open}
                className="w-full flex items-center justify-between text-left"
              >
                <span className="font-medium">{f.q}</span>
                <span className="text-hose text-xl leading-none">{open ? "–" : ">"}</span>
              </button>
              {open && <p className="mt-3 text-sm text-ink/60 leading-relaxed">{f.a}</p>}
            </div>
          );
        })}
      </section>
    </>
  );
}
