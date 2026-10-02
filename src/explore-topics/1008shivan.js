import React from "react";
import { Link } from "react-router-dom";

export default function ShivaTemple() {
  return (
    <div className="bg-[#f8f6ef] text-[#111b16]">

      {/* ================= HERO IMAGE ================= */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">

        <img
          src="/images/home/1008_shivan.jpg"
          alt="1008 Shiva Temple"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45"></div>

        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">

            {/* Category */}
            <span className="inline-block rounded-full bg-[#d9a441] px-4 py-2 text-sm font-semibold text-white">
              Temple
            </span>

            {/* Title */}
            <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-7xl">
              1008 Shiva Temple
            </h1>

            {/* Location */}
            <div className="mt-6 flex flex-wrap gap-5 text-sm text-white sm:text-base">

              <span className="flex items-center gap-2">
                📍 Salem, Tamil Nadu
              </span>

              <span className="flex items-center gap-2">
                ⏱ 1–2 Hours
              </span>

              <span className="flex items-center gap-2">
                ⭐ 4.6
              </span>

            </div>

          </div>
        </div>
      </section>


      {/* ================= MAIN CONTENT ================= */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        {/* Back Button */}
        <Link
          to="/explore"
          className="mb-10 inline-flex items-center gap-2 rounded-full border border-[#d8d0bd] bg-white px-5 py-3 text-sm font-bold transition hover:bg-[#111b16] hover:text-white"
        >
          ← Back to Explore
        </Link>


        {/* ================= ABOUT ================= */}
        <div className="grid gap-12 lg:grid-cols-3">

          <div className="lg:col-span-2">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b85b32]">
              Discover 1008 Shiva Temple
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              A Peaceful Spiritual Destination
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-600">
              1008 Shiva Temple is a spiritual destination for visitors who
              want to experience a peaceful temple atmosphere. The temple
              provides a calm environment for prayer, reflection and spending
              meaningful time with family.
            </p>

            <p className="mt-4 text-base leading-8 text-gray-600">
              The temple's traditional surroundings and spiritual atmosphere
              make it an interesting place to include in a Salem travel
              itinerary, especially for visitors interested in temples and
              local culture.
            </p>

            <p className="mt-4 text-base leading-8 text-gray-600">
              Visitors can take time to explore the temple surroundings,
              appreciate its architecture and experience the peaceful
              atmosphere.
            </p>

          </div>


          {/* ================= QUICK INFO ================= */}
          <div className="rounded-3xl bg-white p-7 shadow-sm">

            <h3 className="text-xl font-bold">
              Quick Information
            </h3>

            <div className="mt-6 space-y-5">

              <div className="border-b border-gray-200 pb-4">
                <p className="text-sm text-gray-500">
                  Best Time
                </p>

                <p className="mt-1 font-semibold">
                  October – February
                </p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <p className="text-sm text-gray-500">
                  Suggested Duration
                </p>

                <p className="mt-1 font-semibold">
                  1–2 Hours
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Category
                </p>

                <p className="mt-1 font-semibold">
                  Temple & Spiritual
                </p>
              </div>

            </div>

          </div>

        </div>


        {/* ================= THINGS TO DO ================= */}
        <div className="mt-20">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b85b32]">
            Experience the Temple
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Things to Do
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {/* Card 1 */}
            <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="text-3xl">
                🛕
              </div>

              <h3 className="mt-4 text-xl font-bold">
                Temple Visit
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Spend peaceful time inside the temple and experience its
                spiritual atmosphere.
              </p>

            </div>


            {/* Card 2 */}
            <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="text-3xl">
                🙏
              </div>

              <h3 className="mt-4 text-xl font-bold">
                Prayer & Reflection
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Take a quiet moment for prayer, reflection and spiritual
                relaxation.
              </p>

            </div>


            {/* Card 3 */}
            <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="text-3xl">
                📸
              </div>

              <h3 className="mt-4 text-xl font-bold">
                Photography
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Capture suitable views of the temple architecture and
                surroundings while following temple rules.
              </p>

            </div>


            {/* Card 4 */}
            <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="text-3xl">
                🪔
              </div>

              <h3 className="mt-4 text-xl font-bold">
                Experience Culture
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Experience local traditions and the cultural importance of
                temple spaces.
              </p>

            </div>


            {/* Card 5 */}
            <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="text-3xl">
                👨‍👩‍👧‍👦
              </div>

              <h3 className="mt-4 text-xl font-bold">
                Family Visit
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Visit the temple with family and enjoy a peaceful spiritual
                experience together.
              </p>

            </div>


            {/* Card 6 */}
            <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="text-3xl">
                🌿
              </div>

              <h3 className="mt-4 text-xl font-bold">
                Peaceful Atmosphere
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Enjoy a calm environment away from the busy pace of everyday
                life.
              </p>

            </div>

          </div>

        </div>


        {/* ================= TRAVEL TIPS ================= */}
        <div className="mt-20 rounded-3xl bg-[#111b16] p-8 text-white sm:p-10">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d9a441]">
            Travel Tips
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Before You Visit
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">

            <div className="flex gap-3">
              <span className="text-[#d9a441]">
                ✓
              </span>

              <p className="text-sm leading-6 text-gray-300">
                Wear appropriate and respectful clothing when visiting the
                temple.
              </p>
            </div>


            <div className="flex gap-3">
              <span className="text-[#d9a441]">
                ✓
              </span>

              <p className="text-sm leading-6 text-gray-300">
                Follow the temple's rules and maintain a peaceful environment.
              </p>
            </div>


            <div className="flex gap-3">
              <span className="text-[#d9a441]">
                ✓
              </span>

              <p className="text-sm leading-6 text-gray-300">
                Check local temple timings before planning your visit.
              </p>
            </div>


            <div className="flex gap-3">
              <span className="text-[#d9a441]">
                ✓
              </span>

              <p className="text-sm leading-6 text-gray-300">
                Photography may be restricted in certain areas, so follow
                temple guidelines.
              </p>
            </div>

          </div>

        </div>


        {/* ================= BOTTOM BACK BUTTON ================= */}
        <div className="mt-12 text-center">

          <Link
            to="/explore"
            className="inline-flex items-center gap-2 rounded-full bg-[#d9a441] px-7 py-3 font-semibold text-white transition hover:bg-[#b85b32]"
          >
            ← Back to Explore
          </Link>

        </div>

      </section>

    </div>
  );
}