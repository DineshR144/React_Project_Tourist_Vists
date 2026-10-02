import React, { useState } from "react";
import { Link } from "react-router-dom";

function Festival() {
  const [activeCategory, setActiveCategory] = useState("All");

  // ================= FESTIVAL DATA =================

  const festivals = [
    {
      title: "Kottai Mariamman Temple Festival",
      category: "Religious",
      date: "Jul - Aug",
      location: "Salem",
      image: "/images/home/kottai-mariamman.avif",
      path: "/fest-topics/kottai-mariamman",
      description:
        "The grand annual festival of Kottai Mariamman temple, celebrated with colourful processions, traditional music and devotional activities.",
    },

    {
      title: "Tiruchengode Ther Thiruvizha",
      category: "Religious",
      date: "May",
      location: "Tiruchengode",
      image: "/images/home/tiruchengode.jpg",
      path: "/fest-topics/tiruchengode",
      description:
        "The Tiruchengode Ther Thiruvizha is the famous annual chariot festival of the Arthanareeswarar Temple held during the Tamil month of Vaikasi.",
    },

    {
      title: "Adiperukku Festival",
      category: "Cultural",
      date: "Jul - Aug",
      location: "River Kaveri",
      image: "/images/home/adiperukku.png",
      path: "/fest-topics/adiperukku",
      description:
        "A Tamil water festival celebrating the annual flooding of rivers, marked with colourful offerings, folk music and traditional celebrations.",
    },

    {
      title: "Yercaud Summer Festival",
      category: "Seasonal",
      date: "May",
      location: "Yercaud Hill Station",
      image: "/images/home/yercaud-summer.png",
      path: "/fest-topics/summer",
      description:
        "An annual summer celebration featuring flower shows, cultural performances, hill boating and adventure activities.",
    },
  ];

  // ================= CATEGORIES =================

  const categories = [
    "All",
    "Religious",
    "Cultural",
    "Seasonal",
  ];

  // ================= FILTER =================

  const filteredFestivals =
    activeCategory === "All"
      ? festivals
      : festivals.filter(
          (festival) => festival.category === activeCategory
        );

  return (
    <div className="min-h-screen bg-[#FAF7F0] px-5 py-16 sm:px-8 md:px-12 lg:px-20">

      {/* ================= HEADER ================= */}

      <div className="mx-auto max-w-5xl text-center">

        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#B85B32] sm:text-sm">
          Culture & Events
        </p>

        <h1 className="font-serif text-4xl font-bold leading-tight text-[#171916] sm:text-5xl md:text-6xl">
          Experience Salem's Festivals
        </h1>


        {/* ================= CATEGORY BUTTONS ================= */}

        <div className="mt-8 flex flex-wrap justify-center gap-3">

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "border-[#B85B32] bg-[#B85B32] text-white"
                  : "border-[#E5CDBD] bg-transparent text-[#B85B32] hover:bg-[#B85B32] hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}

        </div>

      </div>


      {/* ================= FESTIVAL CARDS ================= */}

      <div className="mx-auto mt-12 grid max-w-[1200px] grid-cols-1 gap-8 md:grid-cols-2">

        {filteredFestivals.map((festival) => (

          <div
            key={festival.title}
            className="overflow-hidden rounded-[20px] border border-[#E7E2D9] bg-white shadow-[0_5px_20px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.10)]"
          >

            {/* ================= IMAGE ================= */}

            <div className="relative h-[260px] overflow-hidden">

              <img
                src={festival.image}
                alt={festival.title}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

              <span className="absolute bottom-4 left-4 rounded-full bg-[#B85B32] px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white">
                {festival.category}
              </span>

            </div>


            {/* ================= CARD CONTENT ================= */}

            <div className="p-6">

              <h2 className="font-serif text-2xl font-bold leading-snug text-[#171916]">
                {festival.title}
              </h2>


              {/* ================= DATE + LOCATION ================= */}

              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[#5D8171]">

                <span className="flex items-center gap-2">
                  <span>📅</span>
                  {festival.date}
                </span>

                <span className="flex items-center gap-2">
                  <span>📍</span>
                  {festival.location}
                </span>

              </div>


              {/* ================= DESCRIPTION ================= */}

              <p className="mt-5 line-clamp-2 text-[16px] leading-7 text-[#527466]">
                {festival.description}
              </p>


              {/* ================= VIEW EVENT ================= */}

              <Link
                to={festival.path}
                className="mt-6 flex items-center gap-2 text-base font-semibold text-[#B85B32] transition-all duration-300 hover:gap-3"
              >
                View Event
                <span className="text-lg">→</span>
              </Link>

            </div>

          </div>

        ))}

      </div>


      {/* ================= NO RESULTS ================= */}

      {filteredFestivals.length === 0 && (
        <div className="py-20 text-center">
          <p className="text-lg text-gray-500">
            No festivals found.
          </p>
        </div>
      )}

    </div>
  );
}

export default Festival;