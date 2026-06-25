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
      title: "Free Pickup & Delivery",
      description:
        "Convenient collection and delivery that fits your schedule.",
    },
    {
      icon: <ShieldCheck size={22} />,
      title: "Quality Assurance",
      description:
        "Every order is carefully inspected before delivery.",
    },
    {
      icon: <Clock3 size={22} />,
      title: "Fast Turnaround",
      description:
        "Reliable express laundry with clear delivery times.",
    },
    {
      icon: <CheckCircle2 size={22} />,
      title: "Premium Detergent",
      description:
        "High-quality detergent that is safe for fabrics and colors.",
    },
    {
      icon: <Headphones size={22} />,
      title: "Friendly Support",
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

        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center">

          <span className="text-yellow-500 font-semibold uppercase tracking-widest">
            Why Choose Us
          </span>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-gray-900">
            Laundry Service Built Around
            <span className="text-yellow-500">
              {" "}Quality & Convenience
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            We combine professional garment care, modern equipment,
            and reliable service to deliver the best laundry experience
            for individuals, families, villas, and businesses.
          </p>

        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mt-16">

          {features.map((item, index) => (
            <div
              key={index}
              className="
                group
                bg-white
                rounded-3xl
                border
                border-yellow-100
                p-8
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
              "
            >

              <div
                className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-yellow-100
                  flex
                  items-center
                  justify-center
                  text-yellow-600
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
              >
                {item.icon}
              </div>

              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}