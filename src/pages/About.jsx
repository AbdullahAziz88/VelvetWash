import PageHeader from "../components/PageHeader";

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="We started Velvet Wash because brushes shouldn't touch paint."
        blurb="A small team of car owners in Lahore who got tired of scratched paint from roadside washes."
      />
      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-20 grid lg:grid-cols-2 gap-12">
        <div className="space-y-5 leading-relaxed text-ink/80">
          <p>
            Velvet Wash began as a university entrepreneurship project, born
            from a simple complaint: every roadside wash in the city used the
            same worn rag on every car, leaving fine scratches behind.
          </p>
          <p>
            We built a touchless system instead high-pressure water and
            pH neutral foam do the work that brushes used to, and your paint
            never meets anything but water.
          </p>
          <p>
            Today we run one bay in DHA Phase 6, with plans to open two more
            across Lahore over the next year.
          </p>
        </div>
        
      </section>
    </>
  );
}
