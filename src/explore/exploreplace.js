import React, { useState } from "react";
import { Link } from "react-router-dom";

function Exploreplace() {
  const [activeCategory, setActiveCategory] = useState("All");

  // ================= CATEGORIES =================

  const categories = [
    "All",
    "Nature",
    "Heritage",
    "Temples",
    "Entertainment",
    "Wildlife",
  ];

  // ================= DESTINATIONS =================

  const destinations = [
    {
      name: "Yercaud",
      category: "Nature",
      image: "/images/home/yercaud_rd.png",
      description:
        "A serene hill station in the Shevaroy Hills, draped in coffee plantations, orange groves and misty mornings.",
      location: "Shevaroy Hills",
      duration: "Full Day",
      rating: "4.8",
      path: "/yercaud",
    },

    {
      name: "Kiliyur Falls",
      category: "Nature",
      image: "/images/home/kiliyur.png",
      description:
        "A magnificent waterfall cascading through dense tropical forest — one of Yercaud's most breathtaking destinations.",
      location: "Yercaud",
      duration: "2–3 Hours",
      rating: "4.7",
      path: "/kiliyur-falls",
    },

    {
      name: "Sangagiri Fort",
      category: "Heritage",
      image: "/images/home/sangagiri.png",
      description:
        "A historic hilltop fort with sweeping panoramic views, once a stronghold of Hyder Ali and later the British.",
      location: "Sangagiri",
      duration: "2–3 Hours",
      rating: "4.6",
      path: "/sangagiri-fort",
    },

    {
      name: "Mettur Dam",
      category: "Heritage",
      image: "/images/home/mettur.png",
      description:
        "One of India's major dams built across the Kaveri River, offering beautiful views and a remarkable engineering legacy.",
      location: "Mettur",
      duration: "3–4 Hours",
      rating: "4.5",
      path: "/mettur-dam",
    },

    {
      name: "Kurumbapatti Zoo",
      category: "Wildlife",
      image: "/images/home/kurumbapatti.avif",
      description:
        "A scenic wildlife sanctuary surrounded by natural terrain and lush greenery near the Shevaroy Hills.",
      location: "Namakkal Road",
      duration: "3–4 Hours",
      rating: "4.2",
      path: "/kurumbapatti-zoo",
    },

    {
      name: "Muttal – Nature's Lap",
      category: "Nature",
      image: "/images/home/muttal.jpg",
      description:
        "A tranquil forest retreat nestled in the Yercaud hills, perfect for nature walks, birdwatching and quiet moments.",
      location: "Yercaud Hills",
      duration: "Half Day",
      rating: "4.4",
      path: "/muttal",
    },

    {
      name: "1008 Shiva Temple",
      category: "Temples",
      image: "/images/home/1008_shivan.jpg",
      description:
        "A sacred temple complex housing 1008 Shiva lingams — a unique and spiritually significant landmark.",
      location: "Ariyanur",
      duration: "1–2 Hours",
      rating: "4.7",
      path: "/1008-shiva-temple",
    },

    {
      name: "Kanjamalai Siddhar Kovil",
      category: "Temples",
      image: "/images/home/kanjamalai.jpeg",
      description:
        "The 1,000-year-old Siddhar Peedam and burial shrine (Jeeva Samadhi) of the ancient mystic Siddhar Kalangi Nathar.",
      location: "Salem, near Elampillai",
      duration: "1 Hour",
      rating: "4.6",
      path: "/kanjamalai-siddhar-kovil",
    },

    {
      name: "Paravasa Ulagam",
      category: "Entertainment",
      image: "/images/home/paravasa-ulagam.jpg",
      description:
        "A popular water theme park with thrilling rides, wave pools and family attractions set along Salem's landscape.",
      location: "Salem City",
      duration: "Full Day",
      rating: "4.1",
      path: "/paravasa-ulagam",
    },
  ];

  // ================= FILTER =================

  const filteredDestinations =
    activeCategory === "All"
      ? destinations
      : destinations.filter(
          (place) => place.category === activeCategory
        );

  return (
    <section className="min-h-screen bg-[#FAF7F0] px-5 py-16 sm:px-8 md:py-20 lg:px-12 xl:px-20">

      {/* ================= HEADING ================= */}

      <div className="mx-auto max-w-4xl text-center">

        <p className="mb-4 text-xs font-semibold uppercase tracking-[4px] text-[#b85b32]">
          Destinations
        </p>

        <h1 className="font-serif text-5xl font-bold leading-tight text-[#111b16] sm:text-6xl">
          Explore Salem
        </h1>

        <p className="mt-3 text-lg text-[#63806f] sm:text-xl">
          Find places that match your journey.
        </p>

      </div>

      {/* ================= CATEGORY BUTTONS ================= */}

      <div className="mx-auto mt-12 max-w-7xl">

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">

          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300 sm:text-base ${
                activeCategory === category
                  ? "border-[#123d2d] bg-[#123d2d] text-white shadow-md"
                  : "border-[#d7d4cc] bg-transparent text-[#173f2d] hover:border-[#123d2d] hover:bg-[#123d2d] hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}

        </div>

      </div>

      {/* ================= DESTINATION CARDS ================= */}

      <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">

        {filteredDestinations.map((place) => (
          <article
            key={place.name}
            className="group overflow-hidden rounded-[22px] border border-[#e1e5e1] bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
          >

            {/* ================= IMAGE ================= */}

            <div className="relative h-[255px] overflow-hidden">

              <img
                src={place.image}
                alt={place.name}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              {/* Image Overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              {/* Category */}

              <span className="absolute bottom-4 left-4 rounded-full bg-[#123d2d] px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow-md">
                {place.category}
              </span>

            </div>

            {/* ================= CONTENT ================= */}

            <div className="p-6">

              <h2 className="font-serif text-2xl font-bold text-[#111b16]">
                {place.name}
              </h2>

              <p className="mt-2 line-clamp-2 text-base leading-7 text-[#63806f]">
                {place.description}
              </p>

              {/* ================= LOCATION + DURATION ================= */}

              <div className="mt-5 flex flex-wrap gap-4 text-sm text-[#63806f]">

                {/* LOCATION */}

                <span className="flex items-center gap-1.5">

                  <svg
                    className="h-4 w-4 shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>

                  <span>{place.location}</span>

                </span>

                {/* DURATION */}

                <span className="flex items-center gap-1.5">

                  <svg
                    className="h-4 w-4 shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>

                  <span>{place.duration}</span>

                </span>

              </div>

              {/* ================= BOTTOM ================= */}

              <div className="mt-5 flex items-center justify-between border-t border-[#edf0ed] pt-5">

                {/* RATING */}

                <div className="flex items-center gap-2">

                  <div className="flex gap-0.5 text-[#f6a51b]">

                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span className="text-[#d8ddd8]">★</span>

                  </div>

                  <span className="font-semibold text-[#63806f]">
                    {place.rating}
                  </span>

                </div>

                {/* DETAILS */}

                <Link
                  to={place.path}
                  className="flex items-center gap-2 text-sm font-bold text-[#111b16] transition-colors duration-300 hover:text-[#b85b32]"
                >
                  Details

                  <svg
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <line
                      x1="5"
                      y1="12"
                      x2="19"
                      y2="12"
                    />

                    <polyline points="13 6 19 12 13 18" />
                  </svg>

                </Link>

              </div>

            </div>

          </article>
        ))}

      </div>

      {/* ================= NO RESULTS ================= */}

      {filteredDestinations.length === 0 && (
        <div className="py-20 text-center">

          <p className="font-serif text-2xl font-bold text-[#111b16]">
            No destinations found
          </p>

          <p className="mt-2 text-[#63806f]">
            Try another category.
          </p>

        </div>
      )}

    </section>
  );
}

export default Exploreplace;