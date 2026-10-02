import React from "react";
import { Link } from "react-router-dom";

function MetturDam() {
  return (
    <div className="bg-[#f7f4ec] text-[#111b16]">

      {/* ================= HERO IMAGE ================= */}
      <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">

        <img
          src="/images/home/mettur.png"
          alt="Mettur Dam"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 flex h-full items-end">
          <div className="mx-auto w-full max-w-7xl px-5 pb-14 sm:px-8 lg:px-12">

            <span className="mb-4 inline-block rounded-full bg-[#e8a928] px-4 py-2 text-sm font-bold text-[#111b16]">
              HERITAGE & NATURE
            </span>

            <h1 className="max-w-4xl text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
              Mettur Dam
            </h1>

            <p className="mt-3 max-w-2xl text-lg text-white/90 sm:text-xl">
              One of Tamil Nadu's iconic dams surrounded by scenic landscapes
              and the beautiful Cauvery River.
            </p>

            <div className="mt-6 flex flex-wrap gap-5 text-sm font-medium text-white">
              <div className="flex items-center gap-2">
                <span>📍</span>
                <span>Mettur, Salem</span>
              </div>

              <div className="flex items-center gap-2">
                <span>⏱</span>
                <span>3–4 Hours</span>
              </div>

              <div className="flex items-center gap-2">
                <span>★</span>
                <span>4.5 / 5</span>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ================= MAIN CONTENT ================= */}
      <main className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12">

        {/* Back Button */}
        <Link
          to="/explore"
          className="mb-10 inline-flex items-center gap-2 rounded-full border border-[#d8d0bd] bg-white px-5 py-3 text-sm font-bold transition hover:bg-[#111b16] hover:text-white"
        >
          ← Back to Explore
        </Link>


        {/* ================= ABOUT + QUICK INFO ================= */}
        <section className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">

          {/* About */}
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#b85b32]">
              Discover Mettur
            </p>

            <h2 className="text-3xl font-extrabold sm:text-4xl">
              About Mettur Dam
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              Mettur Dam is one of the important landmarks of Salem district
              and is built across the Cauvery River. The dam and its
              surroundings attract visitors with their combination of
              engineering, water landscapes and natural beauty.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              The area around Mettur is especially attractive when the
              reservoir has good water levels. Visitors can enjoy the scenic
              surroundings, peaceful atmosphere and views of the river and
              surrounding hills.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              Mettur is a good destination for travellers who want to
              experience Salem's natural landscapes while also seeing an
              important engineering landmark.
            </p>
          </div>


          {/* Quick Information */}
          <div className="rounded-3xl bg-white p-7 shadow-sm">

            <h3 className="text-xl font-extrabold">
              Quick Information
            </h3>

            <div className="mt-6 space-y-5">

              <div className="border-b border-gray-100 pb-5">
                <p className="text-sm text-gray-500">
                  Best Time to Visit
                </p>

                <p className="mt-1 font-bold">
                  October – February
                </p>
              </div>

              <div className="border-b border-gray-100 pb-5">
                <p className="text-sm text-gray-500">
                  Recommended Duration
                </p>

                <p className="mt-1 font-bold">
                  3 – 4 Hours
                </p>
              </div>

                    
              <div>
                <p className="text-sm text-gray-500">
                  Category
                </p>

                <p className="mt-1 font-bold">
                  Heritage & Nature
                </p>
              </div>

            </div>
          </div>

        </section>


        {/* ================= THINGS TO DO ================= */}
        <section className="mt-20">

          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b85b32]">
              Explore
            </p>

            <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
              Things to Do
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Enjoy the peaceful surroundings and discover the natural and
              cultural attractions around Mettur.
            </p>
          </div>


          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {/* Card 1 */}
            <div className="rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="text-3xl">🌊</div>

              <h3 className="mt-5 text-xl font-extrabold">
                Enjoy the Reservoir
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Spend some peaceful time enjoying the wide water landscape
                around the Mettur reservoir.
              </p>
            </div>


            {/* Card 2 */}
            <div className="rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="text-3xl">📸</div>

              <h3 className="mt-5 text-xl font-extrabold">
                Photography
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Capture beautiful views of the dam, reservoir, river and
                surrounding landscapes.
              </p>
            </div>


            {/* Card 3 */}
            <div className="rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="text-3xl">🌿</div>

              <h3 className="mt-5 text-xl font-extrabold">
                Nature Walks
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Explore the surroundings and enjoy the greenery and peaceful
                atmosphere around Mettur.
              </p>
            </div>


            {/* Card 4 */}
            <div className="rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="text-3xl">🏞️</div>

              <h3 className="mt-5 text-xl font-extrabold">
                Scenic Views
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Enjoy panoramic views of the reservoir and the landscapes
                surrounding the dam.
              </p>
            </div>


            {/* Card 5 */}
            <div className="rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="text-3xl">👨‍👩‍👧‍👦</div>

              <h3 className="mt-5 text-xl font-extrabold">
                Family Visit
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Spend a relaxed few hours with family while enjoying the
                scenery and open surroundings.
              </p>
            </div>


            {/* Card 6 */}
            <div className="rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="text-3xl">🏗️</div>

              <h3 className="mt-5 text-xl font-extrabold">
                Engineering Landmark
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Learn about the importance of Mettur Dam and appreciate its
                role as a major water infrastructure landmark.
              </p>
            </div>

          </div>
        </section>


        {/* ================= TRAVEL TIPS ================= */}
        <section className="mt-20 overflow-hidden rounded-3xl bg-[#111b16] px-6 py-10 text-white sm:px-10 lg:px-12">

          <div className="max-w-3xl">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#e8a928]">
              Travel Tips
            </p>

            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Plan Your Visit
            </h2>

            <div className="mt-7 space-y-4 text-white/80">

              <p>
                • Visit during the cooler months for a more comfortable
                experience.
              </p>

              <p>
                • Carry drinking water, especially if you plan to spend more
                time outdoors.
              </p>

              <p>
                • Early morning and evening can be pleasant times to enjoy the
                surrounding scenery.
              </p>

              <p>
                • Follow local safety instructions and stay away from restricted
                areas around the dam.
              </p>

              <p>
                • Check the local conditions before planning activities around
                the reservoir.
              </p>

            </div>
          </div>

        </section>


        {/* ================= BOTTOM BACK BUTTON ================= */}
        <div className="mt-12 text-center">

          <Link
            to="/explore"
            className="inline-flex items-center gap-2 rounded-full bg-[#111b16] px-7 py-3 font-bold text-white transition hover:bg-[#b85b32]"
          >
            ← Back to Explore
          </Link>

        </div>

      </main>

    </div>
  );
}

export default MetturDam;