import {
  CheckCircle2,
  Truck,
  ShieldCheck,
  Sparkles,
  Clock3,
  Headphones,
} from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Sparkles size={22} />,
      title: "Premium Garment Care",
      description:
        "Every item is treated with attention and professional care.",
    },
    {
      icon: <Truck size={22} />,
      title: "Pickup & Delivery",
      description:
        "Convenient collection and delivery that fits your schedule.",
    },
    {
      icon: <ShieldCheck size={22} />,
      title: "Quality Assurance",
      description:
        "Each order is carefully inspected before delivery.",
    },
    {
      icon: <Clock3 size={22} />,
      title: "Reliable Turnaround",
      description:
        "Fast and dependable service with clear delivery times.",
    },
    {
      icon: <CheckCircle2 size={22} />,
      title: "Eco-Friendly Products",
      description:
        "Gentle cleaning solutions that are safe for fabrics.",
    },
    {
      icon: <Headphones size={22} />,
      title: "Dedicated Support",
      description:
        "Responsive customer service whenever you need assistance.",
    },
  ];

  return (
    <section
      id="why-us"
      className="scroll-mt-28 py-20 lg:py-28 bg-[#FFFDF5]"
    >
      <div className="container mx-auto px-5 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side Image */}
          <div>

            <img
              src="/images/why-choose-us.jpg"
              alt="Professional Laundry Team"
              className="
                w-full
                h-[400px]
                lg:h-[650px]
                object-cover
                rounded-[32px]
                shadow-xl
              "
            />

          </div>

          {/* Right Side Content */}
          <div>

            <span className="text-yellow-500 font-semibold uppercase tracking-widest">
              Why Choose Us
            </span>

            <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Laundry Service Built Around
              Convenience & Quality
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              We combine professional garment care,
              modern equipment, and reliable service
              to deliver a seamless laundry experience
              for individuals, families, and businesses.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 mt-10">

              {features.map((item, index) => (
                <div
                  key={index}
                  className="
                    bg-white
                    p-5
                    rounded-2xl
                    border border-gray-100
                    shadow-sm
                  "
                >
                  <div className="w-11 h-11 rounded-xl bg-yellow-100 flex items-center justify-center text-yellow-600">
                    {item.icon}
                  </div>

                  <h3 className="mt-4 font-semibold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm text-gray-600">
                    {item.description}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}