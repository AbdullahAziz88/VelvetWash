import { NavLink } from "react-router-dom";
import PageHeader from "../components/PageHeader";

const tiers = [
  {
    name: "Quick Rinse",
    price: "Rs 800",
    features: ["Foam wash & rinse", "Air dry", "15 minutes", "No interior clean"],
  },
  {
    name: "Signature Wash",
    price: "Rs 1,500",
    features: ["Touchless full wash", "Tyre shine", "Interior wipe-down", "25 minutes"],
    highlight: true,
  },
  {
    name: "Velvet Detail",
    price: "Rs 3,200",
    features: ["Everything in Signature", "Hand wax", "Interior deep clean", "Engine bay clean"],
  },
];

export default function Pricing() {
  return (
    <>
      <PageHeader eyebrow="Pricing" title="Simple pricing, no hidden add-ons." />
      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-20 grid sm:grid-cols-3 gap-6">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`rounded-lg p-6 border ${t.highlight ? "border-hose bg-foam-dim" : "border-chrome"}`}
          >
            <p className="font-medium">{t.name}</p>
            <p className="font-display text-3xl text-hose-deep mt-2">{t.price}</p>
            <ul className="mt-5 space-y-2 text-sm text-ink/70">
              {t.features.map((f) => <li key={f}>{f}</li>)}
            </ul>
            <NavLink
              to="/booking"
              className="mt-6 inline-flex w-full justify-center rounded-md bg-hose px-4 py-2.5 text-sm font-medium text-foam hover:bg-hose-deep transition-colors"
            >
              Book this
            </NavLink>
          </div>
        ))}
      </section>
    </>
  );
}
