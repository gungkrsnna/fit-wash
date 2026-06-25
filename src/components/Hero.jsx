export default function Hero() {
  return (
    <section
      id="home"
      className="hero-section relative overflow-hidden"
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FFFDF5] via-[#FFFDF5]/80 to-transparent" />

      <div className="relative mx-auto max-w-[1440px] min-h-[720px] flex items-center px-6 lg:px-20">

        {/* Content */}
        <div className="max-w-[560px]">

          <span className="inline-flex items-center rounded-full bg-yellow-100 px-5 py-2 text-sm font-semibold text-yellow-700">
            FIT WASH
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight text-gray-900 md:text-6xl lg:text-7xl">
            Laundry Express
            <br />
            in
            <span className="text-yellow-500"> Bali</span>
          </h1>

          <p className="mt-8 text-lg leading-9 text-gray-700">
            FIT Wash Laundry Express Bali provides premium laundry services
            that prioritize speed and quality. We're ready to meet all your
            laundry needs with free pick-up and delivery so you can spend more
            time doing what matters most.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            <a
              href="https://wa.me/6285142910505?text=Hello%20Fit%20Wash,%20I%20would%20like%20to%20schedule%20a%20laundry%20pickup."
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                justify-center
                rounded-xl
                bg-yellow-400
                px-8
                py-4
                font-semibold
                text-gray-900
                shadow-lg
                transition
                hover:bg-yellow-500
              "
            >
              Whatsapp
            </a>

            <button
              href="https://wa.me/6285142910505?text=Hello%20Fit%20Wash,%20I%20would%20like%20to%20schedule%20a%20laundry%20pickup."
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-xl
                border
                border-white/80
                bg-white/80
                px-8
                py-4
                font-semibold
                text-gray-900
                backdrop-blur-md
                transition
                hover:bg-white
              "
            >
              Book Now
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}