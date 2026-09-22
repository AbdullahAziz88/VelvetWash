import PageHeader from "../components/PageHeader";
import photo1 from "../assets/1.png";
import photo2 from "../assets/2.png";
import photo3 from "../assets/3.png";

const items = [photo1, photo2, photo3];

export default function Gallery() {
  return (
    <>
      <PageHeader eyebrow="Gallery" title="A look inside the bay." />
      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-20 grid grid-cols-2 sm:grid-cols-3 gap-4">
        {items.map((photo, index) => (
  <div
    key={index}
    className="aspect-square rounded-lg overflow-hidden border border-chrome"
  >
    <img
      src={photo}
      alt={`Velvet Wash ${index + 1}`}
      className="w-full h-full object-cover"
    />
  </div>
))}
      </section>
    </>
  );
}
