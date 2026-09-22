import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-ink text-foam/80">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14 grid gap-10 sm:grid-cols-3">
        <div>
          <p className="font-display text-lg font-semibold text-foam">Velvet Wash</p>
          <p className="mt-3 text-sm leading-relaxed max-w-xs">
            Touchless car care that treats your paint the way a good detailer
            would no brushes, no swirl marks, just water, foam and time.
          </p>
        </div>

        

        <div>
          <p className="text-sm font-medium text-foam mb-3">Visit us</p>
          <p className="text-sm leading-relaxed">
            DHA Phase 6, Lahore, Punjab<br />
            Open daily, 8am – 10pm<br />
            +92 300 1234567
          </p>
        </div>
      </div>

      <div className="border-t border-foam/10 py-5 text-center text-xs text-foam/50">
        © {new Date().getFullYear()} Velvet Wash
      </div>
    </footer>
  );
}
