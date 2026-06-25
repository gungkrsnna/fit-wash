import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Package,
  Truck,
} from "lucide-react";

export default function Packages() {
  const packages = [
    {
      title: "Express 12 Hours",
      subtitle: "Perfect for your everyday laundry needs.",
      price: "Rp24.900",
      unit: "/Kg",
      featured: false,
      badge: "",
      features: [
        "12 Hours Express Service",
        "Pickup & Delivery Service",
        "Clothes Already Ironed",
        "One Machine One Customer",
      ],
    },
    {
      title: "Express 6 Hours",
      subtitle: "Our most popular express service.",
      price: "Rp39.900",
      unit: "/Kg",
      featured: true,
      badge: "Most Popular",
      features: [
        "6 Hours Express Service",
        "Pickup & Delivery Service",
        "Clothes Already Ironed",
        "One Machine One Customer",
      ],
    },
    {
      title: "Express 3 Hours",
      subtitle: "Fast turnaround for busy schedules.",
      price: "Rp49.900",
      unit: "/Kg",
      featured: false,
      badge: "Best Seller",
      features: [
        "3 Hours Express Service",
        "Pickup & Delivery Service",
        "Clothes Already Ironed",
        "One Machine One Customer",
      ],
    },
    {
      title: "Express 2 Hours",
      subtitle: "Our quickest premium package.",
      price: "Rp59.900",
      unit: "/Kg",
      featured: false,
      badge: "Quickest",
      features: [
        "2 Hours Express Service",
        "Pickup & Delivery Service",
        "Clothes Already Ironed",
        "One Machine One Customer",
      ],
    },
  ];

  return (
    <section
      id="packages"
      className="py-24 bg-gradient-to-b from-[#FFFDF7] to-yellow-50"
    >
      <div className="container mx-auto px-5 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-yellow-500 uppercase tracking-[4px] font-semibold">
            Our Packages
          </span>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-gray-900">
            Find The Perfect{" "}
            <span className="text-yellow-500">Laundry Package</span>
          </h2>

          <p className="mt-5 text-gray-600 leading-7">
            Choose the package that best fits your schedule. Every package
            includes premium garment care with professional handling.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mt-16">
          {packages.map((item, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-3xl border bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                item.featured
                  ? "border-yellow-300 shadow-xl"
                  : "border-yellow-100 shadow-sm"
              }`}
            >
              {item.badge && (
                <div className="absolute right-6 top-6 rounded-full bg-yellow-100 px-4 py-2 text-xs font-semibold text-yellow-700">
                  {item.badge}
                </div>
              )}

              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-yellow-100 text-yellow-600 transition-transform duration-300 group-hover:scale-110">
                <Package size={30} />
              </div>

              <h3 className="mt-8 text-3xl font-bold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-2 text-gray-500">
                {item.subtitle}
              </p>

              <div className="mt-8 flex items-end gap-1">
                <span className="text-4xl font-bold text-yellow-500">
                  {item.price}
                </span>
                <span className="pb-1 text-gray-500">
                  {item.unit}
                </span>
              </div>

              <div className="my-8 h-px bg-gray-100" />

              <ul className="space-y-4">
                {item.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <CheckCircle2
                      size={20}
                      className="text-yellow-500 flex-shrink-0"
                    />
                    <span>{feature}</span>
                  </li>
                ))}

                <li className="flex items-center gap-3 text-gray-700">
                  <Clock3
                    size={20}
                    className="text-yellow-500"
                  />
                  <span>Fast & Reliable Processing</span>
                </li>

                <li className="flex items-center gap-3 text-gray-700">
                  <Truck
                    size={20}
                    className="text-yellow-500"
                  />
                  <span>Free Pickup & Delivery*</span>
                </li>
              </ul>

<a
  href={`https://wa.me/6285142910505?text=${encodeURIComponent(
    `Hello Fit Wash,

I would like to book the ${item.title} package.

Could you please provide more information regarding the pickup schedule?

Thank you.`
  )}`}
  target="_blank"
  rel="noopener noreferrer"
  className={`mt-10 flex w-full items-center justify-center gap-2 rounded-2xl border py-4 font-semibold transition-all duration-300 ${
    item.featured
      ? "border-yellow-500 bg-yellow-400 text-gray-900 hover:bg-yellow-500"
      : "border-yellow-200 bg-white hover:bg-yellow-400 hover:border-yellow-400"
  }`}
>
  Book This Package
  <ArrowRight
    size={18}
    className="transition-transform duration-300 group-hover:translate-x-1"
  />
</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
