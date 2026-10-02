import handicrafts from "./handicrafts.json";
import Footer from "../home/footer";
import { Link } from "react-router-dom";

function Hand() {
  return (
    <div className="min-h-screen">

      {/* ================= HERO SECTION ================= */}

      <section className="relative h-[600px] w-full overflow-hidden sm:h-[650px] lg:h-[720px]">

        {/* Hero Image */}
        <img
          src={handicrafts[0].imghero}
          alt="Salem Handicrafts"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
          <div className="max-w-4xl text-white">

            {/* Small Heading */}
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[#f6b51b] sm:text-base">
              {handicrafts[0].festext1}
            </p>

            {/* Main Heading */}
            <h1 className="font-serif text-4xl font-bold italic leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
              {handicrafts[0].festext2}
            </h1>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/90 sm:text-lg md:text-xl">
              {handicrafts[0].festext3}
            </p>

          </div>
        </div>

      </section>


      {/* ================= HANDICRAFT SECTION ================= */}

      <section className="bg-[#FAF7F0] px-5 py-16 sm:px-8 md:px-12 lg:px-20">

        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-4xl text-center">

          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#B85B32] sm:text-sm">
            Salem's Traditional Crafts
          </p>

          <h2 className="font-serif text-3xl font-bold text-[#171916] sm:text-4xl md:text-5xl">
            Discover the Art of Salem
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            Explore the traditional craftsmanship and artistic heritage
            passed down through generations across Salem.
          </p>

        </div>


        {/* ================= CARDS ================= */}

        <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">


          {/* ================= CARD 1 ================= */}

          <div className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

            {/* Image */}
            <div className="h-[280px] overflow-hidden sm:h-[300px]">

              <img
                src="/images/home/thammampatti_Wood.jpg"
                alt="Thammampatti Wood Carving"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-6">

              <h3 className="font-serif text-2xl font-bold leading-snug text-gray-900">
                Thammampatti Wood Carving
              </h3>

              <p className="mt-4 text-base leading-7 text-gray-600">
                Intricate temple sculptures, decorative panels and
                figurines carved by fifth-generation master artisans.
              </p>

              <div className="mt-5 text-sm text-gray-600">
                📍 Thammampatti, Salem District
              </div>

              {/* Button */}
              <Link
                to="/handcraft-topics/thammampatti"
                className="mt-auto pt-6 text-left"
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-[#B85B32] px-5 py-2.5 text-sm font-semibold text-[#B85B32] transition-all duration-300 hover:bg-[#B85B32] hover:text-white">
                  View Details
                  <span className="text-base">→</span>
                </span>
              </Link>

            </div>
          </div>


          {/* ================= CARD 2 ================= */}

          <div className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

            {/* Image */}
            <div className="h-[280px] overflow-hidden sm:h-[300px]">

              <img
                src="/images/home/vinayagar.jpeg"
                alt="Sirpa Kadal Vinayagar Craft"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-6">

              <h3 className="font-serif text-2xl font-bold leading-snug text-gray-900">
                Sirpa Kadal – Vinayagar Craft
              </h3>

              <p className="mt-4 text-base leading-7 text-gray-600">
                Devotional stone and teak sculptures of Lord Ganesha
                crafted following ancient Agamic traditions.
              </p>

              <div className="mt-5 text-sm text-gray-600">
                📍 Chettipatti, Idappadi Road, Salem
              </div>

              {/* Button */}
              <Link
                to="/handcraft-topics/sirpakadal"
                className="mt-auto pt-6 text-left"
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-[#B85B32] px-5 py-2.5 text-sm font-semibold text-[#B85B32] transition-all duration-300 hover:bg-[#B85B32] hover:text-white">
                  View Details
                  <span className="text-base">→</span>
                </span>
              </Link>

            </div>
          </div>


          {/* ================= CARD 3 ================= */}

          <div className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

            {/* Image */}
            <div className="h-[280px] overflow-hidden sm:h-[300px]">

              <img
                src="/images/home/salem venpattu.png"
                alt="Salem Silk Weaving and Handlooms"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-6">

              <h3 className="font-serif text-2xl font-bold leading-snug text-gray-900">
                Salem Silk Weaving and Handlooms
              </h3>

              <p className="mt-4 text-base leading-7 text-gray-600">
                Salem is a historic center for handloom weaving in Tamil
                Nadu, famous for its traditional white silk goods
                (Salem Venpattu) and soft silk sarees.
              </p>

              <div className="mt-5 text-sm text-gray-600">
                📍 Salem
              </div>

              {/* Button */}
              <Link
                to="/handcraft-topics/salemsilk"
                className="mt-auto pt-6 text-left"
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-[#B85B32] px-5 py-2.5 text-sm font-semibold text-[#B85B32] transition-all duration-300 hover:bg-[#B85B32] hover:text-white">
                  View Details
                  <span className="text-base">→</span>
                </span>
              </Link>

            </div>
          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <Footer />

    </div>
  );
}

export default Hand;