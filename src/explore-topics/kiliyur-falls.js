import React from "react";
import { Link } from "react-router-dom";

export default function KiliyurFalls() {
  return (
    <div className="bg-[#f8f6ef] text-[#111b16]">

      {/* ================= HERO IMAGE ================= */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">

        <img
          src="/images/home/kiliyur.png"
          alt="Kiliyur Falls"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45"></div>

        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">

            {/* Category */}
            <span className="inline-block rounded-full bg-[#d9a441] px-4 py-2 text-sm font-semibold text-white">
              Nature
            </span>

            {/* Title */}
            <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-7xl">
              Kiliyur Falls
            </h1>

            {/* Location */}
            <div className="mt-6 flex flex-wrap gap-5 text-sm text-white sm:text-base">

              <span className="flex items-center gap-2">
                📍 Yercaud, Salem
              </span>

              <span className="flex items-center gap-2">
                ⏱ 2–3 Hours
              </span>

              <span className="flex items-center gap-2">
                ⭐ 4.7
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
              Discover Kiliyur Falls
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              A Scenic Waterfall in the Shevaroy Hills
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-600">
              Kiliyur Falls is a scenic waterfall located in the Yercaud hills
              of Salem district. Surrounded by greenery and rocky landscapes,
              the waterfall is a beautiful destination for visitors who enjoy
              nature and outdoor experiences.
            </p>

            <p className="mt-4 text-base leading-8 text-gray-600">
              The waterfall becomes especially attractive during and after the
              monsoon season, when the flow of water increases and the
              surrounding landscape becomes greener.
            </p>

            <p className="mt-4 text-base leading-8 text-gray-600">
              The natural surroundings provide opportunities for photography,
              sightseeing and enjoying the peaceful atmosphere of the hills.
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
                  September – January
                </p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <p className="text-sm text-gray-500">
                  Suggested Duration
                </p>

                <p className="mt-1 font-semibold">
                  2–3 Hours
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Category
                </p>

                <p className="mt-1 font-semibold">
                  Nature & Waterfall
                </p>
              </div>

            </div>

          </div>

        </div>


        {/* ================= THINGS TO DO ================= */}
        <div className="mt-20">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b85b32]">
            Experience Kiliyur Falls
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Things to Do
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {/* Card 1 */}
            <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="text-3xl">
                💧
              </div>

              <h3 className="mt-4 text-xl font-bold">
                Enjoy the Waterfall
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Enjoy the natural beauty of the waterfall and its surrounding
                rocky landscape.
              </p>

            </div>


            {/* Card 2 */}
            <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="text-3xl">
                🌿
              </div>

              <h3 className="mt-4 text-xl font-bold">
                Nature Walk
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Explore the greenery and natural surroundings around the
                waterfall.
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
                Capture the waterfall, rocks, greenery and beautiful hill
                scenery.
              </p>

            </div>


            {/* Card 4 */}
            <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="text-3xl">
                🏞️
              </div>

              <h3 className="mt-4 text-xl font-bold">
                Scenic Views
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Take in the peaceful views of the hills and surrounding
                landscapes.
              </p>

            </div>


            {/* Card 5 */}
            <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="text-3xl">
                🚶
              </div>

              <h3 className="mt-4 text-xl font-bold">
                Outdoor Exploration
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Explore the natural surroundings and enjoy an outdoor
                adventure.
              </p>

            </div>


            {/* Card 6 */}
            <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="text-3xl">
                😌
              </div>

              <h3 className="mt-4 text-xl font-bold">
                Relax in Nature
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Spend some peaceful time away from the busy city environment.
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
                Wear comfortable footwear suitable for outdoor and uneven
                terrain.
              </p>
            </div>


            <div className="flex gap-3">
              <span className="text-[#d9a441]">
                ✓
              </span>

              <p className="text-sm leading-6 text-gray-300">
                Be careful around wet and slippery rocks near the waterfall.
              </p>
            </div>


            <div className="flex gap-3">
              <span className="text-[#d9a441]">
                ✓
              </span>

              <p className="text-sm leading-6 text-gray-300">
                Carry drinking water and basic travel essentials.
              </p>
            </div>


            <div className="flex gap-3">
              <span className="text-[#d9a441]">
                ✓
              </span>

              <p className="text-sm leading-6 text-gray-300">
                Avoid littering and help keep the waterfall and surrounding
                environment clean.
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