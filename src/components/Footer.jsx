import {
  MapPin,
  Phone,
  Clock3,
} from "lucide-react";

import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-gray-900 text-white"
    >
      <div className="container mx-auto px-5 lg:px-8 py-16">

        <div className="grid lg:grid-cols-4 gap-12">

          {/* Company */}
          <div>

            <div className="flex items-center gap-3">

            <img
            src="/images/logo-fitwash.jpg"
            alt="Fit Wash Laundry Bali"
            className="h-16 w-auto"
            />

              <span className="font-bold text-xl">
                Fit Wash
              </span>

            </div>

            <p className="mt-5 text-gray-400 leading-relaxed">
              Professional laundry and garment care
              services with convenient pickup and
              delivery across Bali.
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="font-semibold text-lg">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3 text-gray-400">

              <li>
                <a href="#services">
                  Services
                </a>
              </li>

              <li>
                <a href="#why-us">
                  Why Choose Us
                </a>
              </li>

              <li>
                <a href="#process">
                  How It Works
                </a>
              </li>

              <li>
                <a href="#coverage">
                  Coverage Area
                </a>
              </li>

            </ul>

          </div>

          {/* Services */}
          <div>

            <h3 className="font-semibold text-lg">
              Services
            </h3>

            <ul className="mt-5 space-y-3 text-gray-400">

              <li>Wash & Fold</li>
              <li>Dry Cleaning</li>
              <li>Express Service</li>
              <li>Pickup & Delivery</li>

            </ul>

          </div>

          {/* Contact */}
          {/* Contact */}
<div>

  <h3 className="font-semibold text-lg">
    Contact
  </h3>

  <div className="mt-5 space-y-4 text-gray-400">

    <div className="flex gap-3">
      <MapPin
        size={18}
        className="mt-1 flex-shrink-0"
      />
      <span>Bali, Indonesia</span>
    </div>

    <a
      href="https://wa.me/6285142910505"
      target="_blank"
      rel="noopener noreferrer"
      className="flex gap-3 hover:text-yellow-400 transition"
    >
      <Phone
        size={18}
        className="mt-1 flex-shrink-0"
      />
      <span>+62 851 4291 0505</span>
    </a>

    <a
  href="https://www.instagram.com/fitwash.laundrybali"
  target="_blank"
  rel="noopener noreferrer"
  className="flex gap-3 hover:text-yellow-400 transition"
>
  <FaInstagram
    size={18}
    className="mt-1 flex-shrink-0"
  />
  <span>@fitwash.laundrybali</span>
</a>

          <div className="flex gap-3">
            <Clock3
              size={18}
              className="mt-1 flex-shrink-0"
            />
            <span>Open Daily 24 Hours</span>
          </div>

        </div>

      </div>

        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">

          © {new Date().getFullYear()} Fit Wash Laundry Bali.
          All rights reserved.

        </div>

      </div>
    </footer>
  );
}