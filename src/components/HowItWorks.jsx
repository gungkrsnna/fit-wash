import {
  CalendarDays,
  Truck,
  Sparkles,
  PackageCheck,
} from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: <CalendarDays size={28} />,
      title: "Book a Service",
      description:
        "Schedule your laundry pickup through our contact channels.",
    },
    {
      number: "02",
      icon: <Truck size={28} />,
      title: "Pickup Collection",
      description:
        "Our team collects your garments at your preferred location.",
    },
    {
      number: "03",
      icon: <Sparkles size={28} />,
      title: "Cleaning & Care",
      description:
        "Each item is professionally cleaned and carefully inspected.",
    },
    {
      number: "04",
      icon: <PackageCheck size={28} />,
      title: "Delivered Back",
      description:
        "Fresh, clean garments are delivered back on schedule.",
    },
  ];

  return (
    <section
      id="process"
      className="scroll-mt-28 py-20 lg:py-28 bg-white"
    >
      <div className="container mx-auto px-5 lg:px-8">

        <div className="text-center max-w-3xl mx-auto">

          <span className="text-yellow-500 font-semibold uppercase tracking-widest">
            How It Works
          </span>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-gray-900">
            Laundry Made Simple
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            Enjoy a seamless laundry experience with
            our easy pickup, professional cleaning,
            and reliable delivery service.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {steps.map((step) => (
            <div
              key={step.number}
              className="
                relative
                bg-[#FFFDF5]
                border border-yellow-100
                rounded-3xl
                p-8
                text-center
              "
            >
              <div className="absolute top-6 right-6 text-4xl font-bold text-yellow-100">
                {step.number}
              </div>

              <div className="w-16 h-16 mx-auto rounded-2xl bg-yellow-400 flex items-center justify-center text-gray-900">
                {step.icon}
              </div>

              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                {step.title}
              </h3>

              <p className="mt-3 text-gray-600">
                {step.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}