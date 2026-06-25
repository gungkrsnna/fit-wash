import {
  Award,
  HeartHandshake,
  PiggyBank,
  TimerReset,
} from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Award size={42} />,
      title: "Professional",
      description:
        "Experienced laundry specialists providing premium garment care.",
    },
    {
      icon: <HeartHandshake size={42} />,
      title: "Friendly",
      description:
        "Warm and responsive customer service ready to assist you.",
    },
    {
      icon: <PiggyBank size={42} />,
      title: "Affordable",
      description:
        "Premium quality laundry service at competitive prices.",
    },
    {
      icon: <TimerReset size={42} />,
      title: "Fast",
      description:
        "Quick turnaround with reliable pickup and delivery.",
    },
  ];

  return (
    <section
      id="advantages"
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-5 lg:px-8">

        <div className="grid grid-cols-2 lg:grid-cols-4">

          {features.map((item, index) => (
            <div
              key={item.title}
              className={`
                px-8 py-6 text-center
                ${
                  index !== features.length - 1
                    ? "lg:border-r border-gray-200"
                    : ""
                }
              `}
            >
              <div className="flex justify-center text-yellow-500">
                {item.icon}
              </div>

              <h3 className="mt-5 text-2xl font-semibold text-gray-900">
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