import { NavLink } from "react-router-dom";
import photo1 from "../assets/1.png";

const packages = [
  { name: "Quick Rinse", price: "Rs 800", desc: "Foam wash, rinse, dry — 15 minutes." },
  { name: "Signature Wash", price: "Rs 1,500", desc: "Touchless wash, tyre shine, interior wipe-down." },
  { name: "Velvet Detail", price: "Rs 3,200", desc: "Full detail wax, interior deep clean, engine bay." },
];

const steps = [
  { n: "1", t: "Book online", d: "Pick a slot that suits you, in under a minute." },
  { n: "2", t: "Drive in", d: "Pull up at the bay no queues, no waiting." },
  { n: "3", t: "We wash", d: "High-pressure foam and water, zero brush contact." },
  { n: "4", t: "Drive out", d: "Dry, streak-free, ready in 15–25 minutes." },
];

export default function Home() {
  return (
    <>
      <section className="wash-swipe bg-ink text-foam pt-20 pb-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm text-hose/80 mb-3">Touchless car care, Lahore</p>
            <h1 className="font-display text-5xl sm:text-6xl font-semibold leading-[1.05]">
              Clean car,<br />untouched paint.
            </h1>
            <p className="mt-5 text-foam/70 max-w-md leading-relaxed">
              Velvet Wash uses high pressure water and foam instead of brushes,
              so your car gets clean without a single swirl mark.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <NavLink to="/booking" className="rounded-md bg-wax px-5 py-3 text-sm font-medium text-ink hover:bg-wax-deep transition-colors">
                Book a wash
              </NavLink>
              <NavLink to="/services" className="rounded-md border border-foam/30 px-5 py-3 text-sm font-medium text-foam hover:bg-foam/10 transition-colors">
                See services
              </NavLink>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden border border-foam/10 aspect-4/3">
  <img
    src={photo1}
    alt="Velvet Wash"
    className="w-full h-full object-cover"
  />
</div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-20">
        <h2 className="font-display text-2xl font-semibold mb-10">How it works</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s) => (
            <div key={s.n}>
              <p className="font-display text-hose text-2xl mb-2">{s.n}</p>
              <p className="font-medium">{s.t}</p>
              <p className="text-sm text-ink/60 mt-1">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-foam-dim py-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex items-end justify-between mb-10">
            <h2 className="font-display text-2xl font-semibold">Popular packages</h2>
            <NavLink to="/pricing" className="text-sm text-hose-deep font-medium">Full pricing</NavLink>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {packages.map((p) => (
              <div key={p.name} className="bg-foam rounded-lg border border-chrome p-6">
                <p className="font-medium">{p.name}</p>
                <p className="font-display text-2xl text-hose-deep mt-2">{p.price}</p>
                <p className="text-sm text-ink/60 mt-3 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-20 text-center">
        <h2 className="font-display text-3xl font-semibold max-w-lg mx-auto">
          Your car deserves better than a brush.
        </h2>
        <NavLink to="/booking" className="mt-6 inline-flex rounded-md bg-hose px-6 py-3 text-sm font-medium text-foam hover:bg-hose-deep transition-colors">
          Book your slot
        </NavLink>
      </section>
    </>
  );
}
