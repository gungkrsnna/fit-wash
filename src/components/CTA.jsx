export default function CTA() {
  return (
    <section className="scroll-mt-28 py-20 bg-yellow-400">
      <div className="container mx-auto px-5 lg:px-8">

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Ready for Fresh, Clean Laundry?
          </h2>

          <p className="mt-6 text-lg text-gray-800">
            Let Fit Wash Laundry Bali take care of
            your laundry while you focus on what
            matters most.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">

            <button
              className="
                bg-gray-900
                text-white
                px-8 py-4
                rounded-xl
                font-semibold
                hover:opacity-90
                transition
              "
            >
              Book Pickup
            </button>

            <button
              className="
                bg-white
                text-gray-900
                px-8 py-4
                rounded-xl
                font-semibold
              "
            >
              Contact Us
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}