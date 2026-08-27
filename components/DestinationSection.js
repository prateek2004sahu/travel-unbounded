import DestinationCard from "./DestinationCard";

export default function DestinationSection({ title, subtitle, destinations }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-forest-900 sm:text-3xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2 text-forest-600">{subtitle}</p>
        )}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {destinations.map((destination) => (
          <DestinationCard key={destination.id} destination={destination} />
        ))}
      </div>
    </section>
  );
}
