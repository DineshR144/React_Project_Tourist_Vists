import React from "react";
import { Link } from "react-router-dom";

export default function SankagiriFort() {
  return (
    <div className="bg-[#f8f6ef] text-[#111b16]">

      {/* ================= HERO IMAGE ================= */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">

        <img
          src="/images/home/sangagiri.png"
          alt="Sangagiri Fort"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45"></div>

        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">

            {/* Category */}
            <span className="inline-block rounded-full bg-[#d9a441] px-4 py-2 text-sm font-semibold text-white">
              Heritage
            </span>

            {/* Title */}
            <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-7xl">
              Sangagiri Fort
            </h1>

            {/* Location */}
            <div className="mt-6 flex flex-wrap gap-5 text-sm text-white sm:text-base">

              <span className="flex items-center gap-2">
                📍 Sankagiri, Salem
              </span>

              <span className="flex items-center gap-2">
                ⏱ 2–3 Hours
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
              Discover Sangagiri Fort
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              A Historic Fort Among the Hills
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-600">
              Sangagiri Fort is a historic hill fort located in Sankagiri,
              Salem district. Built across a hill, the fort offers visitors
              an opportunity to explore historic structures while enjoying
              views of the surrounding landscape.
            </p>

            <p className="mt-4 text-base leading-8 text-gray-600">
              The fort is known for its strategic location and historical
              importance. Its stone structures, fortifications and elevated
              setting make it an interesting destination for history and
              heritage enthusiasts.
            </p>

            <p className="mt-4 text-base leading-8 text-gray-600">
              A visit to Sangagiri Fort combines heritage exploration with
              scenic surroundings, making it a memorable stop for travellers
              exploring Salem district.
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
                  2–3 Hours
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Category
                </p>

                <p className="mt-1 font-semibold">
                  Heritage & History
                </p>
              </div>

            </div>

          </div>

        </div>


        {/* ================= THINGS TO DO ================= */}
        <div className="mt-20">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b85b32]">
            Experience Sangagiri
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Things to Do
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {/* Card 1 */}
            <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="text-3xl">
                🏰
              </div>

              <h3 className="mt-4 text-xl font-bold">
                Explore the Fort
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Walk around the historic fort and explore its stone structures
                and old fortifications.
              </p>

            </div>


            {/* Card 2 */}
            <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="text-3xl">
                📜
              </div>

              <h3 className="mt-4 text-xl font-bold">
                Discover History
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Learn about the historical importance of the fort and its
                strategic hilltop location.
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
                Capture the fort's architecture, stone structures and scenic
                surroundings.
              </p>

            </div>


            {/* Card 4 */}
            <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="text-3xl">
                🌄
              </div>

              <h3 className="mt-4 text-xl font-bold">
                Scenic Views
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Enjoy panoramic views of the surrounding landscape from the
                elevated areas of the fort.
              </p>

            </div>


            {/* Card 5 */}
            <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="text-3xl">
                🚶
              </div>

              <h3 className="mt-4 text-xl font-bold">
                Hill Walk
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Explore the hill and fort surroundings through a refreshing
                outdoor walk.
              </p>

            </div>


            {/* Card 6 */}
            <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="text-3xl">
                👨‍👩‍👧‍👦
              </div>

              <h3 className="mt-4 text-xl font-bold">
                Heritage Visit
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Enjoy a cultural and historical outing with family and
                friends.
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
                Wear comfortable footwear because exploring the fort may
                involve walking on uneven surfaces.
              </p>
            </div>


            <div className="flex gap-3">
              <span className="text-[#d9a441]">
                ✓
              </span>

              <p className="text-sm leading-6 text-gray-300">
                Carry drinking water, especially when visiting during warmer
                weather.
              </p>
            </div>


            <div className="flex gap-3">
              <span className="text-[#d9a441]">
                ✓
              </span>

              <p className="text-sm leading-6 text-gray-300">
                Be careful around steep or uneven sections of the hill and
                fort.
              </p>
            </div>


            <div className="flex gap-3">
              <span className="text-[#d9a441]">
                ✓
              </span>

              <p className="text-sm leading-6 text-gray-300">
                Avoid damaging historic structures and keep the heritage site
                clean.
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