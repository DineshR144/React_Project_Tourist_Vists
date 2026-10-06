import React from "react";
import { Link } from "react-router-dom";

function Crafts({ onDiscoverCrafts }) {

  const crafts = [
    {
      id: 1,
      title: "Thammampatti Wood Carving",
      description:
        "Intricate temple sculptures, decorative panels and figurines — carved by fifth-generation master craftsmen.",
      location: "Thammampatti, Salem District",
      image: "/images/home/Thammampatti_Wood.jpg",
    },

    {
      id: 2,
      title: "Sirpa Kadal – Vinayagar Craft",
      description:
        "Devotional stone and teak sculptures of Lord Ganesha crafted following ancient Agamic traditions.",
      location: "Chettipatti, Idappadi Road, Salem",
      image: "/images/home/vinayagar.jpeg",
    },

    {
      id: 3,
      title: "Salem Silk Weaving and Handlooms",
      description:
        "Salem is a historic center for handloom weaving in Tamil Nadu, famous for its traditional white silk goods (Salem Venpattu) and soft silk sarees.",
      location: "Salem",
      image: "/images/home/salem venpattu.png",
    },
  ];


  return (
    <section
      className="bg-[#FAF8F2] px-5 py-16 sm:px-8 md:py-20 lg:px-12 lg:py-24">

      <div className="mx-auto max-w-7xl">


        {/* =========================================
            SECTION HEADER
        ========================================= */}

        <div className="mb-12 md:mb-16">

          <p
            className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#B45F3C] sm:text-sm text-center">
            Artisan Traditions
          </p>

          <h2
            className="font-serif text-5xl font-bold leading-none tracking-tight text-[#171A18] sm:text-6xl md:text-7xl text-center">
            Crafted by Salem
          </h2>

        </div>


        {/* =========================================
            CRAFT CARDS
        ========================================= */}

        <div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

          {crafts.map((craft) => (

            <article
              key={craft.id}
              className="group relative h-[450px] overflow-hidden rounded-3xl bg-[#12372A] shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl sm:h-[470px] lg:h-[450px]">

              {/* =====================================
                  IMAGE
              ===================================== */}

              <img
                src={craft.image}
                alt={craft.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"/>


              {/* =====================================
                  GRADIENT OVERLAY
              ===================================== */}

              <div
                className="absolute inset-0 bg-gradient-to-t from-[#cc702d] via-[#f5c07a]/10 to-black/5 opacity-95"/>


              {/* =====================================
                  CARD CONTENT
              ===================================== */}

              <div
                className="absolute inset-x-0 bottom-0 p-6 sm:p-7">

                {/* CRAFT NUMBER */}

                <p
                  className="mb-4 text-sm font-bold tracking-wide text-[#F2B72B]">
                  {craft.number}
                </p>


                {/* TITLE */}

                <h3
                  className="font-serif text-2xl font-bold leading-tight text-white sm:text-[26px]">
                  {craft.title}
                </h3>


                {/* DESCRIPTION */}

                <p
                  className="mt-3 line-clamp-2 text-sm leading-7 text-white/80 sm:text-[15px]">
                  {craft.description}
                </p>


                {/* LOCATION */}

                <div
                  className="mt-4 flex items-center gap-2 text-sm text-white/60">

                  <span className="text-base">
                    📍
                  </span>

                  <span>
                    {craft.location}
                  </span>

                </div>

              </div>

            </article>

          ))}

        </div>


        {/* =========================================
            DISCOVER BUTTON
        ========================================= */}

        <div className="mt-14 flex justify-center">

          <button
            onClick={onDiscoverCrafts}
            className="group inline-flex items-center gap-3 font-semibold text-[#12372A] transition-all duration-300 hover:text-[#B45F3C]">

          <Link
            to="/handicrafts"
            className="inline-block rounded-full border-2 border-[#12372A] px-10 py-4 font-semibold text-[#12372A] transition-all duration-300 hover:bg-[#12372A] hover:text-white">
            View All →
          </Link>

          </button>

        </div>

      </div>

    </section>
  );
}

export default Crafts;
