import BookingForm from "@/components/BookingForm";

export const metadata = {
  title: "Plan Your Trip | Travel Unbounded",
  description:
    "Tell us about your dream trip and our travel experts will get back to you within 24 hours with a custom itinerary.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-14 sm:px-6">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-forest-900">Plan Your Trip</h1>
        <p className="mt-2 text-forest-600">
          Share a few details and our travel expert will reach out within 24
          hours with a custom itinerary.
        </p>
      </div>

      <div className="rounded-2xl border border-forest-100 bg-white p-6 shadow-sm sm:p-8">
        <BookingForm />
      </div>
    </div>
  );
}
