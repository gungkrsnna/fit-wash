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

  <a
    href={`https://wa.me/6285142910505?text=${encodeURIComponent(`Hello Fit Wash,

    I would like to schedule a laundry pickup.

    Could you please let me know the available pickup times?

    Thank you.`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex
            items-center
            justify-center
            bg-gray-900
            text-white
            px-8
            py-4
            rounded-xl
            font-semibold
            hover:opacity-90
            transition
          "
        >
          Book Pickup
        </a>

        <a
          href={`https://wa.me/6285142910505?text=${encodeURIComponent(`Hello Fit Wash,

        I would like to know more about your laundry services.

        Thank you.`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex
            items-center
            justify-center
            bg-white
            text-gray-900
            px-8
            py-4
            rounded-xl
            font-semibold
            hover:bg-gray-100
            transition
          "
        >
          Contact Us
        </a>

      </div>

        </div>

      </div>
    </section>
  );
}