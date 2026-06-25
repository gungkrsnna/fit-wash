export default function Hero() {
  return (
    <section  id="home" className="scroll-mt-28 bg-[#FFFDF5] py-16 lg:py-24">
      <div className="container mx-auto px-5 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Content */}
          <div className="order-2 lg:order-1">

            <span className="inline-flex items-center bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-medium">
              FIT WASH
            </span>

            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Laundry Express
              <br />
              in
              <span className="text-yellow-500"> Bali</span>
            </h1>

            <p className="mt-6 text-base md:text-lg text-gray-600 max-w-xl leading-relaxed">
              FIT Wash Laundry Express Bali, provides premium laundry services that prioritize speed and quality. We're ready to meet all your laundry needs with a free pick-up and drop-off service. Enjoy your free time with your family and leave your laundry to us. Your laundry is guaranteed to be clean and fragrant all day long. 
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">

              <button className="bg-yellow-400 hover:bg-yellow-500 transition px-6 py-3 rounded-xl font-semibold">
                Whatsapp
              </button>

              <button className="border border-gray-300 hover:bg-gray-50 transition px-6 py-3 rounded-xl">
                Book Now
              </button>

            </div>

          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">

            <img
              src="/images/background-hero.PNG"
              alt="Laundry Service"
              className="
                w-full
                h-[280px]
                md:h-[450px]
                lg:h-[600px]
                object-cover
                rounded-3xl
                shadow-xl
              "
            />

          </div>

        </div>

      </div>
    </section>
  );
}