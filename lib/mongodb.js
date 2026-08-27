import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

// In serverless environments (Vercel), API routes can be invoked many times
// and each invocation would otherwise open a brand-new MongoDB connection.
// We cache the connection promise on the global object so repeated calls
// reuse the same connection instead of exhausting the connection pool.
let cached = global._mongooseConnection;

if (!cached) {
  cached = global._mongooseConnection = { conn: null, promise: null };
}

export async function connectToDatabase() {
  if (!MONGODB_URI) {
    throw new Error(
      "MONGODB_URI is not set. Add it to .env.local (see .env.example)."
    );
  }

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, {
        bufferCommands: false,
      })
      .then((mongooseInstance) => mongooseInstance);
  }

  try {
    cached.conn = await cached.promise;
  } catch (err) {
    cached.promise = null;
    throw err;
  }

  return cached.conn;
}
