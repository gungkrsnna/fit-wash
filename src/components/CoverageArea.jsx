import { CheckCircle2 } from "lucide-react";

export default function CoverageArea() {
  const areas = [
    "Denpasar",
    "Sanur",
    "Kuta",
    "Seminyak",
    "Kerobokan",
    "Batu Belig",
    "Uma Alas",
    "Dalung",
  ];

  return (
    <section
      id="coverage"
      className="scroll-mt-28 py-20 lg:py-28 bg-[#FFFDF5]"
    >
      <div className="container mx-auto px-5 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Content */}
          <div>

            <span className="text-yellow-500 font-semibold uppercase tracking-widest">
              Coverage Area
            </span>

            <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-gray-900">
              Serving Across Bali
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Fit Wash provides professional laundry
              pickup and delivery services across
              Bali's most popular residential,
              tourism, and business districts.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-10">

              {areas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    size={20}
                    className="text-yellow-500"
                  />

                  <span className="text-gray-700">
                    {area}
                  </span>
                </div>
              ))}

            </div>

          </div>

          {/* Image */}
          <div>

            <img
              src="/images/bali-service-area.jpg"
              alt="Laundry Service Bali"
              className="
                w-full
                h-[350px]
                lg:h-[550px]
                object-cover
                rounded-[32px]
                shadow-xl
              "
            />

          </div>

        </div>

      </div>
    </section>
  );
}