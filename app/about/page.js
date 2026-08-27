export const metadata = {
  title: "About Travel Unbounded",
  description:
    "Learn about Travel Unbounded's story, our offices in Bengaluru, Kochi and Nairobi, and why travellers trust us to design their journeys.",
};

const offices = [
  {
    city: "Bengaluru — Headquarters",
    lines: ["541, 7th Main Rd, HAL 2nd Stage", "Indiranagar, Bengaluru – 560008", "India"],
  },
  {
    city: "Kochi — Kerala Office",
    lines: ["LR Towers, S Janatha Road", "Palavivatton, Kochi – 682025", "India"],
  },
  {
    city: "Nairobi — Kenya Office",
    lines: ["Westpark Towers, Muthithi Road", "Nairobi, P.O. Box 6950", "Postal Code 00100, Kenya"],
  },
];

const whyChooseUs = [
  {
    title: "Personally-Vetted Experiences",
    description:
      "Every hotel, guide and activity on our itineraries has been scouted and stayed in by our own team before we recommend it to you.",
  },
  {
    title: "Local Guides, Real Stories",
    description:
      "We work with local experts who know the hidden trails, the best-timed sunsets and the stories a guidebook never tells you.",
  },
  {
    title: "Custom Itineraries",
    description:
      "No fixed packages. We build every trip around your pace, budget and interests — whether that's slow travel or a packed adventure.",
  },
  {
    title: "24x7 Support",
    description:
      "From the moment you land to the moment you're home, our travel desk is one call away, day or night.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <section className="bg-forest-800 py-16 text-center text-white">
        <h1 className="text-3xl font-bold sm:text-4xl">About Travel Unbounded</h1>
        <p className="mx-auto mt-3 max-w-2xl px-4 text-forest-100">
          India&apos;s Most Trusted Experiential Travel Experts
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <p className="text-lg leading-relaxed text-forest-800">
          Travel Unbounded was born from a simple belief — that the best
          journeys aren&apos;t sold from a catalogue. They&apos;re built
          around the people taking them.
        </p>
        <p className="mt-4 leading-relaxed text-forest-700">
          Headquartered in Bangalore with offices in Kerala and Nairobi, we
          design trips that blend comfort, culture and raw nature. Every
          destination, resort and activity we recommend has been personally
          experienced by our team.
        </p>
        <p className="mt-4 leading-relaxed text-forest-700">
          From spotting the Big Five at dawn in the Masai Mara to cruising Ha
          Long Bay at sunset — we go where real stories are written, and we
          bring you along.
        </p>
      </section>

      {/* Why choose us */}
      <section className="bg-forest-50 py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-2xl font-bold text-forest-900 sm:text-3xl">
            Why Choose Us
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-forest-100 bg-white p-6 shadow-sm"
              >
                <h3 className="font-display text-lg font-bold text-forest-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-forest-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="text-center text-2xl font-bold text-forest-900 sm:text-3xl">
          Our Offices
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {offices.map((office) => (
            <div
              key={office.city}
              className="rounded-xl border border-forest-100 p-6 text-center"
            >
              <h3 className="font-semibold text-forest-900">{office.city}</h3>
              <div className="mt-2 space-y-0.5 text-sm text-forest-600">
                {office.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
