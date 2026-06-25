import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-5 lg:px-8">

        <div className="flex items-center justify-between h-24">

          {/* Logo */}
          <div className="flex items-center gap-3">

            <img
                src="/images/logo-fitwash.jpg"
                alt="Fit Wash Laundry Bali"
                className="h-12 w-auto"
            />

            <div className="hidden sm:block">
                <h1 className="font-bold text-lg text-gray-900">
                Fit Wash
                </h1>

                <p className="text-xs text-gray-500">
                Laundry Bali
                </p>
            </div>

            </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">

            <a href="#home" className="hover:text-yellow-500 transition">
              Home
            </a>

            <a href="#services" className="hover:text-yellow-500 transition">
              Services
            </a>

            <a href="#process" className="hover:text-yellow-500 transition">
              How It Works
            </a>

            <a href="#coverage" className="hover:text-yellow-500 transition">
              Coverage
            </a>

            <a href="#contact" className="hover:text-yellow-500 transition">
              Contact
            </a>

          </div>

{/* Desktop CTA */}
<a
  href="https://wa.me/6285142910505"
  target="_blank"
  rel="noopener noreferrer"
  className="hidden lg:inline-flex items-center justify-center bg-yellow-400 hover:bg-yellow-500 px-5 py-3 rounded-xl font-semibold transition"
>
  Schedule Pickup
</a>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden border-t border-gray-100 bg-white">

          <div className="flex flex-col p-5 gap-5">

             <a href="#home">Home</a>

            <a href="#services">Services</a>

            <a href="#process">How It Works</a>

            <a href="#coverage">Coverage</a>

            <a href="#contact">Contact</a>

            <button
              onClick={() =>
                window.open(
                  "https://wa.me/6285142910505",
                  "_blank"
                )
              }
              className="bg-yellow-400 hover:bg-yellow-500 transition px-6 py-3 rounded-xl font-semibold"
            >
              Schedule Pickup
            </button>

          </div>

        </div>
      )}
    </nav>
  );
}