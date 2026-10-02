import React from "react";
import { Link } from "react-router-dom";

export default function Yercaud() {
  return (
    <div className="bg-[#f8f6ef] text-[#111b16]">

      {/* ================= HERO IMAGE ================= */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">

        <img
          src="/images/home/yercaud_rd.png"
          alt="Yercaud Hills"
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
              Yercaud
            </h1>

            <p className="mt-3 text-xl font-medium text-white sm:text-2xl">
              The Jewel of Salem
            </p>

            {/* Location */}
            <div className="mt-6 flex flex-wrap gap-5 text-sm text-white sm:text-base">

              <span className="flex items-center gap-2">
                📍 Shevaroy Hills, Salem
              </span>

              <span className="flex items-center gap-2">
                ⏱ Full Day
              </span>

              <span className="flex items-center gap-2">
                ⭐ 4.8
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
              Discover Yercaud
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              A Beautiful Hill Station in Salem
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-600">
              Yercaud is a scenic hill station situated in the Shevaroy Hills
              of Salem district. Surrounded by lush greenery, coffee
              plantations and beautiful mountain landscapes, it is a popular
              destination for travellers looking for a peaceful escape.
            </p>

            <p className="mt-4 text-base leading-8 text-gray-600">
              The cool climate, winding hill roads and natural attractions
              make Yercaud an ideal destination for nature lovers,
              photographers and families. The hill station offers a
              refreshing combination of nature, viewpoints and local culture.
            </p>

            <p className="mt-4 text-base leading-8 text-gray-600">
              From peaceful lakes and viewpoints to waterfalls and forested
              landscapes, Yercaud provides plenty of opportunities to relax,
              explore and enjoy the beauty of Salem's hill country.
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
                  October – June
                </p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <p className="text-sm text-gray-500">
                  Suggested Duration
                </p>

                <p className="mt-1 font-semibold">
                  Full Day
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Category
                </p>

                <p className="mt-1 font-semibold">
                  Nature & Hill Station
                </p>
              </div>

            </div>

          </div>

        </div>


        {/* ================= THINGS TO DO ================= */}
        <div className="mt-20">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b85b32]">
            Experience Yercaud
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Things to Do
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {/* Card 1 */}
            <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="text-3xl">
                🌊
              </div>

              <h3 className="mt-4 text-xl font-bold">
                Visit Yercaud Lake
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Enjoy the peaceful surroundings of the lake and spend
                relaxing time near the water.
              </p>

            </div>


            {/* Card 2 */}
            <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="text-3xl">
                🌄
              </div>

              <h3 className="mt-4 text-xl font-bold">
                Explore Viewpoints
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Enjoy beautiful hill and valley views from Yercaud's scenic
                viewpoints.
              </p>

            </div>


            {/* Card 3 */}
            <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="text-3xl">
                ☕
              </div>

              <h3 className="mt-4 text-xl font-bold">
                Coffee Plantations
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Discover the greenery of coffee-growing areas and enjoy the
                refreshing hill environment.
              </p>

            </div>


            {/* Card 4 */}
            <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="text-3xl">
                💧
              </div>

              <h3 className="mt-4 text-xl font-bold">
                Kiliyur Falls
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Explore the scenic waterfall and enjoy the natural beauty of
                the surrounding hills.
              </p>

            </div>


            {/* Card 5 */}
            <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="text-3xl">
                🛕
              </div>

              <h3 className="mt-4 text-xl font-bold">
                Shevaroy Temple
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Visit the temple and experience the spiritual atmosphere of
                the hill station.
              </p>

            </div>


            {/* Card 6 */}
            <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="text-3xl">
                📸
              </div>

              <h3 className="mt-4 text-xl font-bold">
                Photography
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Capture the beautiful hills, forests, plantations and scenic
                landscapes of Yercaud.
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
                Carry a light jacket because temperatures can be cooler in
                the hills.
              </p>
            </div>


            <div className="flex gap-3">
              <span className="text-[#d9a441]">
                ✓
              </span>

              <p className="text-sm leading-6 text-gray-300">
                Wear comfortable footwear when exploring viewpoints and
                outdoor attractions.
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
                Keep the hills and natural surroundings clean and avoid
                littering.
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