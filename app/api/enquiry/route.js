import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Enquiry from "@/models/Enquiry";

const ALLOWED_HOTEL_CATEGORIES = ["Standard", "Deluxe", "Luxury"];
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Accepts digits only, 7-15 digits long (E.164-ish, without the country code)
const PHONE_REGEX = /^[0-9]{7,15}$/;

// Never trust the client. Every field is re-validated here even though the
// frontend already checks these — a request can always be sent directly to
// this endpoint (curl/Postman) bypassing the UI entirely.
function validateEnquiry(body) {
  const errors = {};

  if (!body.fullName || typeof body.fullName !== "string" || !body.fullName.trim()) {
    errors.fullName = "Full name is required.";
  }

  if (!body.countryCode || typeof body.countryCode !== "string") {
    errors.countryCode = "Country code is required.";
  }

  if (!body.contactNumber || !PHONE_REGEX.test(String(body.contactNumber).trim())) {
    errors.contactNumber = "Enter a valid contact number (digits only, 7-15 digits).";
  }

  if (!body.email || !EMAIL_REGEX.test(String(body.email).trim())) {
    errors.email = "Enter a valid email address.";
  }

  const travelDate = body.dateOfTravel ? new Date(body.dateOfTravel) : null;
  if (!travelDate || isNaN(travelDate.getTime())) {
    errors.dateOfTravel = "A valid date of travel is required.";
  } else {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (travelDate < today) {
      errors.dateOfTravel = "Date of travel must be today or in the future.";
    }
  }

  const numberOfPeople = Number(body.numberOfPeople);
  if (!Number.isInteger(numberOfPeople) || numberOfPeople < 1) {
    errors.numberOfPeople = "Number of people must be at least 1.";
  }

  if (!ALLOWED_HOTEL_CATEGORIES.includes(body.hotelCategory)) {
    errors.hotelCategory = "Hotel category must be Standard, Deluxe or Luxury.";
  }

  const numberOfChildren =
    body.numberOfChildren === undefined || body.numberOfChildren === ""
      ? 0
      : Number(body.numberOfChildren);
  if (!Number.isInteger(numberOfChildren) || numberOfChildren < 0) {
    errors.numberOfChildren = "Number of children cannot be negative.";
  }

  return { errors, numberOfPeople, numberOfChildren, travelDate };
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid JSON payload." },
      { status: 400 }
    );
  }

  const { errors, numberOfPeople, numberOfChildren, travelDate } =
    validateEnquiry(body);

  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { success: false, message: "Invalid enquiry data.", errors },
      { status: 400 }
    );
  }

  try {
    await connectToDatabase();

    const enquiry = await Enquiry.create({
      fullName: body.fullName.trim(),
      countryCode: body.countryCode,
      contactNumber: String(body.contactNumber).trim(),
      email: body.email.trim().toLowerCase(),
      dateOfTravel: travelDate,
      numberOfPeople,
      hotelCategory: body.hotelCategory,
      numberOfChildren,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Enquiry submitted successfully.",
        id: enquiry._id,
      },
      { status: 201 }
    );
  } catch (err) {
    console.error("Failed to save enquiry:", err);
    return NextResponse.json(
      {
        success: false,
        message:
          "Something went wrong while submitting your enquiry. Please try again.",
      },
      { status: 500 }
    );
  }
}

// Bonus/optional: list all enquiries. Could power a simple /admin page later.
export async function GET() {
  try {
    await connectToDatabase();
    const enquiries = await Enquiry.find().sort({ createdAt: -1 }).lean();
    return NextResponse.json({ success: true, data: enquiries }, { status: 200 });
  } catch (err) {
    console.error("Failed to fetch enquiries:", err);
    return NextResponse.json(
      { success: false, message: "Could not fetch enquiries." },
      { status: 500 }
    );
  }
}
