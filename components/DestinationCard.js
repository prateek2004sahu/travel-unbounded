import Image from "next/image";
import Link from "next/link";

export default function DestinationCard({ destination }) {
  const { name, country, description, price, image } = destination;

  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-forest-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image}
          alt={`${name}, ${country}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-bold text-forest-900">
          {name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-forest-600">
          {description}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm font-semibold text-sand-600">
            Starting from ₹{price.toLocaleString("en-IN")}
          </span>
          <Link
            href="/contact"
            className="rounded-full bg-forest-700 px-4 py-1.5 text-xs font-semibold text-white transition hover:bg-forest-800"
          >
            Enquire
          </Link>
        </div>
      </div>
    </div>
  );
}
