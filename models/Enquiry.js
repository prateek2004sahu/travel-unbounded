import mongoose from "mongoose";

const EnquirySchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true,
  },
  countryCode: {
    type: String,
    required: true,
    trim: true,
  },
  contactNumber: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  dateOfTravel: {
    type: Date,
    required: true,
  },
  numberOfPeople: {
    type: Number,
    required: true,
    min: 1,
  },
  hotelCategory: {
    type: String,
    required: true,
    enum: ["Standard", "Deluxe", "Luxury"],
  },
  numberOfChildren: {
    type: Number,
    default: 0,
    min: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Reuse the existing compiled model if it already exists (avoids the
// "OverwriteModelError" that Next.js hot-reload / serverless re-invocation
// can trigger when the module is re-evaluated).
export default mongoose.models.Enquiry ||
  mongoose.model("Enquiry", EnquirySchema);
