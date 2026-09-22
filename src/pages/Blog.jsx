import PageHeader from "../components/PageHeader";

const posts = [
  { title: "Why brushes cause swirl marks", date: "Aug 2026", excerpt: "The physics behind why even a soft looking brush can leave fine scratches in clear coat." },
  { title: "How often should you wash your car?", date: "Jul 2026", excerpt: "It depends more on your parking spot than your driving habits here's why." },
  { title: "Wax vs ceramic coating", date: "Jun 2026", excerpt: "Two ways to protect your paint, and how to decide which one is worth it for you." },
];

export default function Blog() {
  return (
    <>
      <PageHeader eyebrow="Blog" title="Notes on car care." />
      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-20 grid sm:grid-cols-3 gap-8">
        {posts.map((p) => (
          <article key={p.title}>
            <p className="text-xs text-ink/40">{p.date}</p>
            <p className="font-display text-lg font-medium mt-1.5">{p.title}</p>
            <p className="text-sm text-ink/60 mt-2 leading-relaxed">{p.excerpt}</p>
          </article>
        ))}
      </section>
    </>
  );
}
