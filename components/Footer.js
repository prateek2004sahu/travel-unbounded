import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-forest-900 text-forest-100">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <h3 className="font-display text-lg font-bold text-white">
            Travel Unbounded
          </h3>
          <p className="mt-3 text-sm text-forest-200">
            India&apos;s most trusted experiential travel experts. Journeys
            built around the people taking them.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-sand-300">
            Quick Links
          </h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-white">Plan Your Trip</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-sand-300">
            Our Offices
          </h4>
          <ul className="mt-3 space-y-1 text-sm text-forest-200">
            <li>Bengaluru — HQ</li>
            <li>Kochi — Kerala Office</li>
            <li>Nairobi — Kenya Office</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-forest-800 py-4 text-center text-xs text-forest-300">
        © {new Date().getFullYear()} Travel Unbounded. All rights reserved.
      </div>
    </footer>
  );
}
