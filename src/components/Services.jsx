import {
  Shirt,
  Sparkles,
  Clock3,
  Truck,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Shirt size={28} />,
      title: "Wash & Fold",
      description:
        "Everyday laundry handled with care and attention to detail.",
    },
    {
      icon: <Sparkles size={28} />,
      title: "Dry Cleaning",
      description:
        "Professional care for delicate fabrics and premium garments.",
    },
    {
      icon: <Clock3 size={28} />,
      title: "Express Service",
      description:
        "Fast turnaround options when you need your clothes quickly.",
    },
    {
      icon: <Truck size={28} />,
      title: "Pickup & Delivery",
      description:
        "Convenient collection and delivery directly to your doorstep.",
    },
  ];

  return (
    <section
      id="services"
      className="scroll-mt-28 py-20 lg:py-28 bg-white"
    >
      <div className="container mx-auto px-5 lg:px-8">

        <div className="text-center max-w-3xl mx-auto">

          <span className="text-yellow-500 font-semibold uppercase tracking-wider">
            Our Services
          </span>

          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            Complete Laundry Solutions
          </h2>

          <p className="mt-4 text-gray-600">
            Professional garment care services tailored
            for individuals, families, and businesses.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">

          {services.map((service, index) => (
            <div
              key={index}
              className="
                bg-[#FFFDF5]
                p-8
                rounded-3xl
                border border-yellow-100
                hover:shadow-lg
                transition
              "
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-yellow-400 text-gray-900">
                {service.icon}
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                {service.title}
              </h3>

              <p className="mt-3 text-gray-600">
                {service.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}