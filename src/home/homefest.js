import React, { useState } from "react";
import { Link } from "react-router-dom";

function Festivals({ onAllFestivals }) {
  const festivals = [
    {
      id: 1,
      title: "Kottai Mariamman Temple Festival",
      category: "Religious",
      image: "/images/home/kottai-mariamman.avif",
      date: "Jul - Aug",
      location: "Salem",
      description:
        "The grand annual festival of Kottai Mariamman Temple, celebrated with colourful processions, traditional music and devotion.",
      path: "/fest-topics/kottai-mariamman",
    },

    {
      id: 2,
      title: "Tiruchengode Ther Thiruvizha",
      category: "Religious",
      image: "/images/home/tiruchengode.jpg",
      date: "May",
      location: "Tiruchengode",
      description:
        "A traditional religious festival celebrated with colourful rituals, processions and cultural activities.",
      path: "/fest-topics/tiruchengode",
    },

    {
      id: 3,
      title: "Adiperukku Festival",
      category: "Cultural",
      image: "/images/home/adiperukku.png",
      date: "Jul - Aug",
      location: "River Kaveri",
      description:
        "A Tamil water festival celebrating the annual flooding of rivers, marked with colourful offerings, folk music and traditions.",
      path: "/fest-topics/adiperukku",
    },

    {
      id: 4,
      title: "Yercaud Summer Festival",
      category: "Seasonal",
      image: "/images/home/yercaud-summer.png",
      date: "May",
      location: "Yercaud Hill Station",
      description:
        "A vibrant summer celebration featuring flowers, cultural programs, exhibitions and the natural beauty of Yercaud.",
      path: "/fest-topics/summer",
    },
  ];

  const categories = [
    "All",
    "Religious",
    "Cultural",
    "Seasonal",
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  // Filter festivals
  const filteredFestivals =
    activeCategory === "All"
      ? festivals
      : festivals.filter(
          (festival) => festival.category === activeCategory
        );

  return (
    <section className="min-h-screen bg-[#e8f0e9] px-5 py-16 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* SECTION HEADER */}

        <div className="mb-12 text-center">
          <p
            className="
              mb-3
              text-sm
              font-semibold
              uppercase
              tracking-[0.25em]
              text-[#52716b]
            "
          >
            Culture & Events
          </p>

          <h1
            className="
              font-serif
              text-4xl
              font-bold
              text-[#1D211F]
              md:text-5xl
            "
          >
            Experience Salem's Festivals
          </h1>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-base
              leading-7
              text-[#607C6D]
              md:text-lg
            "
          >
            Celebrate the traditions, devotion and vibrant culture of Salem.
          </p>
        </div>

        {/* CATEGORY FILTER */}

        <div className="mb-12 flex justify-center">
          <div className="flex max-w-full gap-2 overflow-x-auto px-2 pb-2">

            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`
                  whitespace-nowrap
                  rounded-full
                  border
                  px-5
                  py-2.5
                  text-sm
                  font-semibold
                  transition-all
                  duration-300
                  ${
                    activeCategory === category
                      ? "border-[#B2613C] bg-[#B2613C] text-white shadow-md"
                      : "border-[#E6CDBE] bg-transparent text-[#A85F3C] hover:bg-[#B2613C] hover:text-white"
                  }
                `}
              >
                {category}
              </button>
            ))}

          </div>
        </div>

        {/* FESTIVAL CARDS */}

        <div
          className="
            grid
            grid-cols-1
            gap-8
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {filteredFestivals.slice(0, 3).map((festival) => (
            <article
              key={festival.id}
              className="
                group
                overflow-hidden
                rounded-3xl
                border
                border-[#E8E2D9]
                bg-white
                shadow-sm
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-xl
              "
            >

              {/* IMAGE */}

              <div
                className="
                  relative
                  h-[240px]
                  overflow-hidden
                  sm:h-[260px]
                "
              >
                <img
                  src={festival.image}
                  alt={festival.title}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

                {/* IMAGE OVERLAY */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/40
                    via-transparent
                    to-transparent
                  "
                />

                {/* CATEGORY */}

                <span
                  className="
                    absolute
                    bottom-4
                    left-4
                    rounded-full
                    bg-[#B2613C]
                    px-4
                    py-2
                    text-xs
                    font-bold
                    uppercase
                    tracking-wide
                    text-white
                  "
                >
                  {festival.category}
                </span>
              </div>

              {/* CARD CONTENT */}

              <div className="p-6">

                {/* TITLE */}

                <h2
                  className="
                    font-serif
                    text-xl
                    font-bold
                    leading-tight
                    text-[#252525]
                    md:text-2xl
                  "
                >
                  {festival.title}
                </h2>

                {/* DATE + LOCATION */}

                <div
                  className="
                    mt-4
                    flex
                    flex-wrap
                    gap-x-4
                    gap-y-2
                    text-sm
                    text-[#607C6D]
                  "
                >
                  <span>
                    🗓️ {festival.date}
                  </span>

                  <span>
                    📍 {festival.location}
                  </span>
                </div>

                {/* DESCRIPTION */}

                <p
                  className="
                    mt-5
                    line-clamp-2
                    text-[15px]
                    leading-7
                    text-[#607C6D]
                  "
                >
                  {festival.description}
                </p>

                {/* VIEW EVENT */}

                <Link
                  to={festival.path}
                  className="
                    mt-6
                    inline-flex
                    items-center
                    gap-2
                    font-semibold
                    text-[#B2613C]
                    transition-all
                    duration-300
                    hover:gap-3
                  "
                >
                  View Event
                  <span>→</span>
                </Link>

              </div>
            </article>
          ))}
        </div>

        {/* ALL FESTIVALS BUTTON */}

        <div className="mt-12 flex justify-center">
          <Link
            to="/festivals"
            onClick={onAllFestivals}
            className="
              inline-flex
              items-center
              gap-3
              rounded-full
              border-2
              border-[#B2613C]
              px-8
              py-3.5
              font-semibold
              text-[#B2613C]
              transition-all
              duration-300
              hover:bg-[#B2613C]
              hover:text-white
            "
          >
            All Festivals
            <span className="text-lg">→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}

export default Festivals;