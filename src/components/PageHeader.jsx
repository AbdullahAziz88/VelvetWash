export default function PageHeader({ eyebrow, title, blurb }) {
  return (
    <section className="wash-swipe bg-ink text-foam pt-16 pb-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {eyebrow && <p className="text-sm text-hose/80 mb-2">{eyebrow}</p>}
        <h1 className="font-display text-4xl sm:text-5xl font-semibold max-w-2xl">
          {title}
        </h1>
        {blurb && <p className="mt-4 text-foam/70 max-w-xl leading-relaxed"></p>}
      </div>
    </section>
  );
}
