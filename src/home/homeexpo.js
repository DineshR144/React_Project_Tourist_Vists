import React, { useState } from "react";
import { Link } from "react-router-dom";

function Explore() {
  // Destination data
  const destinations = [
    {
      id: 1,
      name: "Kiliyur Falls",
      category: "Nature",
      image: "/images/home/kiliyur.png",
      description:
        "A beautiful waterfall surrounded by the natural greenery of the Yercaud hills.",
      location: "Yercaud",
      duration: "2–3 Hours",
      rating: 4.7,
      path: "/kiliyur-falls",
    },

    {
      id: 2,
      name: "Yercaud",
      category: "Nature",
      image: "/images/home/yercaud_rd.png",
      description:
        "A serene hill station in the Shevaroy Hills, surrounded by coffee plantations and misty mornings.",
      location: "Shevaroy Hills",
      duration: "Full Day",
      rating: 4.8,
      path: "/yercaud",
    },

    {
      id: 3,
      name: "Sangagiri Fort",
      category: "Heritage",
      image: "/images/home/sangagiri.png",
      description:
        "A historic hilltop fort with beautiful panoramic views and rich heritage.",
      location: "Sangagiri",
      duration: "2–3 Hours",
      rating: 4.6,
      path: "/sangagiri-fort",
    },

    {
      id: 4,
      name: "Mettur Dam",
      category: "Heritage",
      image: "/images/home/mettur.png",
      description:
        "A remarkable engineering landmark built across the Kaveri River.",
      location: "Mettur",
      duration: "3–4 Hours",
      rating: 4.5,
      path: "/mettur-dam",
    },

    {
      id: 5,
      name: "Kurumbapatti Zoo",
      category: "Wildlife",
      image: "/images/home/kurumbapatti.avif",
      description:
        "A scenic wildlife destination surrounded by natural greenery.",
      location: "Yercaud Road",
      duration: "3–4 Hours",
      rating: 4.2,
      path: "/kurumbapatti-zoo",
    },

    {
      id: 6,
      name: "Muttal – Nature's Lap",
      category: "Nature",
      image: "/images/home/muttal.jpg",
      description:
        "A peaceful forest destination perfect for nature walks and relaxation.",
      location: "Yercaud Hills",
      duration: "Half Day",
      rating: 4.4,
      path: "/muttal",
    },

    {
      id: 7,
      name: "1008 Sivan Temple",
      category: "Temples",
      image: "/images/home/1008_shivan.jpg",
      description:
        "A beautiful spiritual destination known for its peaceful atmosphere.",
      location: "Salem",
      duration: "2–3 Hours",
      rating: 4.5,
      path: "/1008-shiva-temple",
    },

    {
      id: 8,
      name: "Paravasa Ulagam",
      category: "Entertainment",
      image: "/images/home/paravasa-ulagam.jpg",
      description:
        "A popular water theme park offering fun activities for visitors.",
      location: "Mallur",
      duration: "Full Day",
      rating: 4.4,
      path: "/paravasa-ulagam",
    },

    {
      id: 9,
      name: "Kanjamalai Siddhar Kovil",
      category: "Temples",
      image: "/images/home/kanjamalai.jpeg",
      description:
        "A spiritual destination known for the Siddhar Peedam and the shrine of Siddhar Kalangi Nathar.",
      location: "Salem, near Elampillai",
      duration: "1 Hour",
      rating: 4.6,
      path: "/kanjamalai-siddhar-kovil",
    },
  ];

  // Active category
  const [activeCategory, setActiveCategory] = useState("All");

  // Categories
  const categories = [
    "All",
    "Nature",
    "Heritage",
    "Temples",
    "Entertainment",
    "Wildlife",
  ];

  // Filter destinations
  const filteredDestinations = destinations.filter((place) => {
    return (
      activeCategory === "All" ||
      place.category === activeCategory
    );
  });

  // Show only first 6 destinations
  const displayedDestinations = filteredDestinations.slice(0, 6);

  return (
    <section className="min-h-screen bg-[#FAF7F0] px-5 py-16">
      <div className="mx-auto max-w-7xl">

        {/* ================= CATEGORY BUTTONS ================= */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3">

            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-6 py-3 font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? "border-[#12372A] bg-[#12372A] text-white shadow-md"
                    : "border-gray-300 bg-transparent text-[#12372A] hover:bg-[#12372A] hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}

          </div>
        </div>


        {/* ================= DESTINATION CARDS ================= */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {displayedDestinations.map((place) => (
            <div
              key={place.id}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            >

              {/* IMAGE */}
              <div className="relative h-[260px] overflow-hidden">

                <img
                  src={place.image}
                  alt={place.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/10"></div>

                {/* Category */}
                <span className="absolute bottom-4 left-4 rounded-full bg-[#12372A] px-4 py-2 text-xs font-bold uppercase tracking-wide text-white">
                  {place.category}
                </span>

              </div>


              {/* ================= CARD CONTENT ================= */}
              <div className="p-6">

                {/* TITLE */}
                <h3 className="mb-2 font-serif text-2xl font-bold text-gray-900">
                  {place.name}
                </h3>


                {/* DESCRIPTION */}
                <p className="mb-5 line-clamp-2 text-[16px] leading-7 text-gray-600">
                  {place.description}
                </p>


                {/* LOCATION + DURATION */}
                <div className="mb-6 flex flex-wrap gap-4 text-sm text-gray-600">

                  <span>
                    📍 {place.location}
                  </span>

                  <span>
                    ◷ {place.duration}
                  </span>

                </div>


                {/* ================= BOTTOM SECTION ================= */}
                <div className="flex items-center justify-between">

                  {/* RATING */}
                  <div className="flex items-center gap-1">

                    <span className="text-yellow-500">
                      ★★★★
                    </span>

                    <span className="text-gray-300">
                      ★
                    </span>

                    <span className="ml-1 font-medium text-gray-700">
                      {place.rating}
                    </span>

                  </div>


                  {/* DETAILS */}
                  <Link
                    to={place.path}
                    className="font-semibold text-[#12372A] transition hover:text-[#D99A00]"
                  >
                    Details →
                  </Link>

                </div>

              </div>

            </div>
          ))}

        </div>


        {/* ================= NO RESULTS ================= */}
        {displayedDestinations.length === 0 && (
          <div className="py-20 text-center">

            <div className="mb-4 text-5xl">
              📍
            </div>

            <h3 className="text-2xl font-bold text-gray-800">
              No destinations found
            </h3>

            <p className="mt-2 text-gray-500">
              Try another category.
            </p>

            <button
              onClick={() => setActiveCategory("All")}
              className="mt-6 rounded-full bg-[#12372A] px-6 py-3 font-semibold text-white transition hover:bg-[#0d291f]"
            >
              Show All
            </button>

          </div>
        )}


        {/* ================= VIEW ALL ================= */}
        <div className="mt-14 text-center">

          <Link
            to="/explore"
            className="inline-block rounded-full border-2 border-[#12372A] px-10 py-4 font-semibold text-[#12372A] transition-all duration-300 hover:bg-[#12372A] hover:text-white"
          >
            View All Destinations →
          </Link>

        </div>

      </div>
    </section>
  );
}

export default Explore;