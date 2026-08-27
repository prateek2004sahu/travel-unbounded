import Link from "next/link";
import Image from "next/image";
import DestinationSection from "@/components/DestinationSection";
import { indiaDestinations, internationalDestinations } from "@/data/destinations";

export const metadata = {
  title: "Travel Unbounded | Experiential Travel Experts",
  description:
    "Discover journeys built around people, culture and unforgettable experiences — across India and beyond, personally vetted by our team.",
};

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-[75vh] items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1600&q=80"
          alt="Mountain landscape at sunrise"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-forest-900/60" />

        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center text-white sm:px-6">
          <h1 className="text-3xl font-bold leading-tight sm:text-5xl">
            India&apos;s Most Trusted Experiential Travel Experts
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-forest-50 sm:text-lg">
            Discover journeys built around people, culture and unforgettable
            experiences — every destination personally scouted by our team.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-sand-500 px-8 py-3 text-sm font-semibold text-forest-900 transition hover:bg-sand-400"
          >
            Plan Your Trip
          </Link>
        </div>
      </section>

      <DestinationSection
        title="India Destinations"
        subtitle="Handpicked escapes across incredible India"
        destinations={indiaDestinations}
      />

      <DestinationSection
        title="International Destinations"
        subtitle="Go further — journeys beyond the border"
        destinations={internationalDestinations}
      />

      {/* Bottom CTA */}
      <section className="bg-forest-800 py-16 text-center text-white">
        <h2 className="text-2xl font-bold sm:text-3xl">
          Ready to write your next story?
        </h2>
        <p className="mx-auto mt-3 max-w-xl px-4 text-forest-100">
          Tell us where you dream of going and we&apos;ll build a trip around
          you — not a catalogue.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-block rounded-full bg-sand-500 px-8 py-3 text-sm font-semibold text-forest-900 transition hover:bg-sand-400"
        >
          Start Planning
        </Link>
      </section>
    </div>
  );
}
