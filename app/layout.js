import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: {
    default: "Travel Unbounded | Experiential Travel Experts",
    template: "%s | Travel Unbounded",
  },
  description:
    "India's most trusted experiential travel experts. Custom itineraries across India and the world, personally vetted by our team.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
