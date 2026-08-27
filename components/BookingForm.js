"use client";

import { useState } from "react";
import { hotelCategories, countryCodes } from "@/data/destinations";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[0-9]{7,15}$/;

const initialFormState = {
  fullName: "",
  countryCode: "+91",
  contactNumber: "",
  email: "",
  dateOfTravel: "",
  numberOfPeople: 1,
  hotelCategory: "Standard",
  numberOfChildren: 0,
};

// Today's date in yyyy-mm-dd, used as the min attribute on the date input
// so the browser's own picker already blocks past dates.
function todayISO() {
  const d = new Date();
  const offset = d.getTimezoneOffset();
  const local = new Date(d.getTime() - offset * 60 * 1000);
  return local.toISOString().split("T")[0];
}

function validate(formData) {
  const errors = {};

  if (!formData.fullName.trim()) {
    errors.fullName = "Full name is required.";
  }

  if (!PHONE_REGEX.test(formData.contactNumber.trim())) {
    errors.contactNumber = "Enter a valid number (digits only, 7-15 digits).";
  }

  if (!EMAIL_REGEX.test(formData.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (!formData.dateOfTravel) {
    errors.dateOfTravel = "Please pick a date of travel.";
  } else {
    const chosen = new Date(formData.dateOfTravel);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (chosen < today) {
      errors.dateOfTravel = "Date of travel cannot be in the past.";
    }
  }

  if (!formData.numberOfPeople || Number(formData.numberOfPeople) < 1) {
    errors.numberOfPeople = "At least 1 traveller is required.";
  }

  if (formData.numberOfChildren !== "" && Number(formData.numberOfChildren) < 0) {
    errors.numberOfChildren = "Number of children cannot be negative.";
  }

  return errors;
}

export default function BookingForm() {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [serverMessage, setServerMessage] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear the field-level error as soon as the user edits it again.
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setStatus("loading");
    setServerMessage("");

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          numberOfPeople: Number(formData.numberOfPeople),
          numberOfChildren: Number(formData.numberOfChildren || 0),
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setStatus("error");
        setServerMessage(
          data.message || "Something went wrong while submitting your enquiry."
        );
        return;
      }

      setStatus("success");
      setFormData(initialFormState);
    } catch (err) {
      setStatus("error");
      setServerMessage(
        "We couldn't reach the server. Please check your connection and try again."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-forest-200 bg-forest-50 p-8 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-forest-600 text-white">
          ✓
        </div>
        <h3 className="text-xl font-bold text-forest-900">
          Enquiry submitted successfully!
        </h3>
        <p className="mt-2 text-forest-700">
          Thank you! Our travel expert will contact you within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 rounded-full bg-forest-700 px-5 py-2 text-sm font-semibold text-white hover:bg-forest-800"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {status === "error" && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {serverMessage}
        </div>
      )}

      {/* Full Name */}
      <div>
        <label htmlFor="fullName" className="mb-1 block text-sm font-medium text-forest-800">
          Full Name
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full rounded-lg border border-forest-200 px-3 py-2 text-sm outline-none focus:border-forest-500 focus:ring-1 focus:ring-forest-500"
          placeholder="e.g. Aditi Sharma"
        />
        {errors.fullName && <p className="mt-1 text-xs text-red-600">{errors.fullName}</p>}
      </div>

      {/* Contact Number */}
      <div>
        <label htmlFor="contactNumber" className="mb-1 block text-sm font-medium text-forest-800">
          Contact Number
        </label>
        <div className="flex gap-2">
          <select
            id="countryCode"
            name="countryCode"
            value={formData.countryCode}
            onChange={handleChange}
            className="rounded-lg border border-forest-200 px-2 py-2 text-sm outline-none focus:border-forest-500 focus:ring-1 focus:ring-forest-500"
          >
            {countryCodes.map((c) => (
              <option key={c.code} value={c.code}>
                {c.label}
              </option>
            ))}
          </select>
          <input
            id="contactNumber"
            name="contactNumber"
            type="tel"
            value={formData.contactNumber}
            onChange={handleChange}
            className="w-full rounded-lg border border-forest-200 px-3 py-2 text-sm outline-none focus:border-forest-500 focus:ring-1 focus:ring-forest-500"
            placeholder="9876543210"
          />
        </div>
        {errors.contactNumber && <p className="mt-1 text-xs text-red-600">{errors.contactNumber}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-forest-800">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full rounded-lg border border-forest-200 px-3 py-2 text-sm outline-none focus:border-forest-500 focus:ring-1 focus:ring-forest-500"
          placeholder="you@example.com"
        />
        {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
      </div>

      {/* Date of Travel */}
      <div>
        <label htmlFor="dateOfTravel" className="mb-1 block text-sm font-medium text-forest-800">
          Date of Travel
        </label>
        <input
          id="dateOfTravel"
          name="dateOfTravel"
          type="date"
          min={todayISO()}
          value={formData.dateOfTravel}
          onChange={handleChange}
          className="w-full rounded-lg border border-forest-200 px-3 py-2 text-sm outline-none focus:border-forest-500 focus:ring-1 focus:ring-forest-500"
        />
        {errors.dateOfTravel && <p className="mt-1 text-xs text-red-600">{errors.dateOfTravel}</p>}
      </div>

      <div className="grid grid-cols-2 gap-4">
        {/* Number of People */}
        <div>
          <label htmlFor="numberOfPeople" className="mb-1 block text-sm font-medium text-forest-800">
            Number of People
          </label>
          <input
            id="numberOfPeople"
            name="numberOfPeople"
            type="number"
            min={1}
            value={formData.numberOfPeople}
            onChange={handleChange}
            className="w-full rounded-lg border border-forest-200 px-3 py-2 text-sm outline-none focus:border-forest-500 focus:ring-1 focus:ring-forest-500"
          />
          {errors.numberOfPeople && <p className="mt-1 text-xs text-red-600">{errors.numberOfPeople}</p>}
        </div>

        {/* Number of Children */}
        <div>
          <label htmlFor="numberOfChildren" className="mb-1 block text-sm font-medium text-forest-800">
            Children (optional)
          </label>
          <input
            id="numberOfChildren"
            name="numberOfChildren"
            type="number"
            min={0}
            value={formData.numberOfChildren}
            onChange={handleChange}
            className="w-full rounded-lg border border-forest-200 px-3 py-2 text-sm outline-none focus:border-forest-500 focus:ring-1 focus:ring-forest-500"
          />
          {errors.numberOfChildren && <p className="mt-1 text-xs text-red-600">{errors.numberOfChildren}</p>}
        </div>
      </div>

      {/* Hotel Category */}
      <div>
        <label htmlFor="hotelCategory" className="mb-1 block text-sm font-medium text-forest-800">
          Hotel Category
        </label>
        <select
          id="hotelCategory"
          name="hotelCategory"
          value={formData.hotelCategory}
          onChange={handleChange}
          className="w-full rounded-lg border border-forest-200 px-3 py-2 text-sm outline-none focus:border-forest-500 focus:ring-1 focus:ring-forest-500"
        >
          {hotelCategories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-full bg-forest-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-forest-800 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "Submitting…" : "Submit Enquiry"}
      </button>
    </form>
  );
}
