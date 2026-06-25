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
          {/* Map */}
{/* Google Maps */}
<div>
  <div
    className="
      overflow-hidden
      rounded-[32px]
      border
      border-yellow-100
      shadow-xl
    "
  >
    <iframe
      title="Fit Wash Laundry Bali"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1971.9566574982077!2d115.22165978479464!3d-8.699782031444258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2411084ba7c05%3A0x701c234d88601f43!2sJl.%20Sidakarya%20No.14%2C%20Sesetan%2C%20Denpasar%20Selatan%2C%20Kota%20Denpasar%2C%20Bali%2080223!5e0!3m2!1sid!2sid!4v1782391050596!5m2!1sid!2sid"
      className="w-full h-[350px] lg:h-[550px]"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="strict-origin-when-cross-origin"
    />
  </div>

  <a
    href="https://maps.app.goo.gl/MfxMb5KuDMCUAX9YA"
    target="_blank"
    rel="noopener noreferrer"
    className="
      mt-6
      inline-flex
      items-center
      justify-center
      w-full
      rounded-xl
      bg-yellow-400
      px-6
      py-3
      font-semibold
      text-gray-900
      transition
      hover:bg-yellow-500
    "
  >
    Open in Google Maps
  </a>
</div>

        </div>

      </div>
    </section>
  );
}