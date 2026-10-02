import React from "react";
import { Link } from "react-router-dom";

export default function ParavasaUlagam() {
  return (
    <div className="bg-[#f8f6ef] text-[#111b16]">

      {/* ================= HERO IMAGE ================= */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">

        <img
          src="/images/home/paravasa-ulagam.jpg"
          alt="Paravasa Ulagam Water Theme Park"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45"></div>

        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">

            {/* Category */}
            <span className="inline-block rounded-full bg-[#d9a441] px-4 py-2 text-sm font-semibold text-white">
              Entertainment
            </span>

            {/* Title */}
            <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-7xl">
              Paravasa Ulagam
            </h1>

            {/* Location */}
            <div className="mt-6 flex flex-wrap gap-5 text-sm text-white sm:text-base">

              <span className="flex items-center gap-2">
                📍 Mallur, Salem
              </span>

              <span className="flex items-center gap-2">
                ⏱ Full Day
              </span>

              <span className="flex items-center gap-2">
                ⭐ 4.3
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
              Discover Paravasa Ulagam
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Fun, Adventure & Family Entertainment
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-600">
              Paravasa Ulagam is a popular entertainment destination near Salem,
              offering a fun-filled experience for families, friends and
              visitors looking for a refreshing day out.
            </p>

            <p className="mt-4 text-base leading-8 text-gray-600">
              The destination combines water-based entertainment with outdoor
              activities, making it an enjoyable place to spend a full day
              with family and friends.
            </p>

            <p className="mt-4 text-base leading-8 text-gray-600">
              With its recreational atmosphere and variety of activities,
              Paravasa Ulagam can be a lively addition to a Salem travel
              itinerary.
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
                  Full Day
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Category
                </p>

                <p className="mt-1 font-semibold">
                  Entertainment & Water Park
                </p>
              </div>

            </div>

          </div>

        </div>


        {/* ================= THINGS TO DO ================= */}
        <div className="mt-20">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b85b32]">
            Experience Paravasa Ulagam
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Things to Do
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {/* Card 1 */}
            <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="text-3xl">
                💦
              </div>

              <h3 className="mt-4 text-xl font-bold">
                Enjoy Water Rides
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Have fun with water-based activities and enjoy a refreshing
                experience.
              </p>

            </div>


            {/* Card 2 */}
            <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="text-3xl">
                🛝
              </div>

              <h3 className="mt-4 text-xl font-bold">
                Adventure Activities
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Enjoy recreational and adventure activities available at the
                park.
              </p>

            </div>


            {/* Card 3 */}
            <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="text-3xl">
                🏊
              </div>

              <h3 className="mt-4 text-xl font-bold">
                Swimming & Relaxation
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Spend time in the water and enjoy a relaxing break from
                everyday life.
              </p>

            </div>


            {/* Card 4 */}
            <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="text-3xl">
                👨‍👩‍👧‍👦
              </div>

              <h3 className="mt-4 text-xl font-bold">
                Family Fun
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Enjoy a fun-filled outing with family and create memorable
                moments together.
              </p>

            </div>


            {/* Card 5 */}
            <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="text-3xl">
                📸
              </div>

              <h3 className="mt-4 text-xl font-bold">
                Capture Memories
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Capture memorable moments with friends and family during your
                visit.
              </p>

            </div>


            {/* Card 6 */}
            <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="text-3xl">
                ☀️
              </div>

              <h3 className="mt-4 text-xl font-bold">
                Full-Day Outing
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Spend a complete day enjoying entertainment, activities and
                quality time with your loved ones.
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
                Carry comfortable clothes and an extra set of clothes for
                water activities.
              </p>
            </div>


            <div className="flex gap-3">
              <span className="text-[#d9a441]">
                ✓
              </span>

              <p className="text-sm leading-6 text-gray-300">
                Follow all safety instructions and park rules.
              </p>
            </div>


            <div className="flex gap-3">
              <span className="text-[#d9a441]">
                ✓
              </span>

              <p className="text-sm leading-6 text-gray-300">
                Carry sunscreen, drinking water and other personal essentials.
              </p>
            </div>


            <div className="flex gap-3">
              <span className="text-[#d9a441]">
                ✓
              </span>

              <p className="text-sm leading-6 text-gray-300">
                Check the park's opening hours, ticket prices and activity
                availability before visiting.
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