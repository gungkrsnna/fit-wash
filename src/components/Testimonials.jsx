import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      location: "Canggu",
      review:
        "Excellent service and always on time. The pickup and delivery process makes laundry completely hassle-free.",
    },
    {
      name: "Michael Thompson",
      location: "Seminyak",
      review:
        "Professional team, fresh results, and very convenient for busy schedules. Highly recommended.",
    },
    {
      name: "Emma Wilson",
      location: "Sanur",
      review:
        "Fit Wash consistently delivers great quality. My clothes always come back clean, fresh, and well cared for.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="scroll-mt-28 py-20 lg:py-28 bg-white"
    >
      <div className="container mx-auto px-5 lg:px-8">

        <div className="text-center max-w-3xl mx-auto">

          <span className="text-yellow-500 font-semibold uppercase tracking-widest">
            Testimonials
          </span>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-gray-900">
            Trusted by Customers Across Bali
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            See what our customers say about their
            experience with Fit Wash Laundry Bali.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="
                bg-[#FFFDF5]
                border border-yellow-100
                rounded-3xl
                p-8
              "
            >
              <div className="flex gap-1 text-yellow-500">

                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill="currentColor"
                  />
                ))}

              </div>

              <p className="mt-5 text-gray-600 leading-relaxed">
                "{item.review}"
              </p>

              <div className="mt-6">

                <h4 className="font-semibold text-gray-900">
                  {item.name}
                </h4>

                <span className="text-sm text-gray-500">
                  {item.location}
                </span>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}