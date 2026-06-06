export default function Stats() {
  const stats = [
    {
      value: "10+",
      label: "Years Experience",
    },
    {
      value: "5K+",
      label: "Satisfied Customers",
    },
    {
      value: "98%",
      label: "Customer Satisfaction",
    },
    {
      value: "24h",
      label: "Express Service Available",
    },
  ];

  return (
    <section className="scroll-mt-28 relative -mt-10 lg:-mt-16 z-20">
      <div className="container mx-auto px-5 lg:px-8">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

          {stats.map((item, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-3xl
                p-6
                lg:p-8
                shadow-lg
                border border-gray-100
                text-center
                hover:-translate-y-1
                transition
              "
            >
              <h3 className="text-3xl lg:text-4xl font-bold text-yellow-500">
                {item.value}
              </h3>

              <p className="mt-2 text-sm lg:text-base text-gray-600">
                {item.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}