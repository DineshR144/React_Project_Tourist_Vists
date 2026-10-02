import React from "react";
import { Link } from "react-router-dom";

function Adiperukku() {
  return (
    <div className="min-h-screen bg-[#F8F5ED]">

      {/* ================= HERO SECTION ================= */}

      <section className="relative h-[600px] overflow-hidden">

        <img
          src="/images/home/adiperukku.png"
          alt="Adiperukku Festival"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-6">

            <div className="max-w-3xl text-white">

              <span className="inline-block rounded-full bg-[#F2B84B] px-5 py-2 text-sm font-semibold text-[#1F3D2B]">
                Cultural Festival
              </span>

              <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
                Adiperukku
                <br />
                Festival
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/90">
                A beautiful Tamil celebration connected with water, nature,
                gratitude and traditional customs during the Aadi season.
              </p>

              <div className="mt-8 flex flex-wrap gap-4 text-sm">

                <div className="rounded-xl bg-white/10 px-5 py-3 backdrop-blur-sm">
                  📍 River Kaveri
                </div>

                <div className="rounded-xl bg-white/10 px-5 py-3 backdrop-blur-sm">
                  📅 July - August
                </div>

                <div className="rounded-xl bg-white/10 px-5 py-3 backdrop-blur-sm">
                  🌿 Cultural
                </div>

              </div>

            </div>

          </div>
        </div>

      </section>


      {/* ================= MAIN CONTENT ================= */}

      <main className="mx-auto max-w-7xl px-6 py-16">

        {/* ================= BACK BUTTON ================= */}

        <Link
          to="/festivals"
          className="mb-12 inline-flex items-center gap-2 font-semibold text-[#1F3D2B] transition hover:gap-3 hover:text-[#B85B32]"
        >
          ← Back to Festivals
        </Link>


        {/* ================= ABOUT ================= */}

        <section className="grid gap-12 lg:grid-cols-3">

          <div className="lg:col-span-2">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#B85B32]">
              About the Festival
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#1F3D2B] md:text-4xl">
              A Celebration of Water and Nature
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              Adiperukku is a traditional Tamil festival celebrated during
              the month of Aadi. The celebration is closely associated with
              water sources such as rivers, lakes and other natural water
              bodies.
            </p>

            <p className="mt-5 leading-8 text-gray-600">
              The festival expresses gratitude for water and nature. Families
              gather near rivers and water bodies, prepare traditional food
              and make offerings as part of the celebration.
            </p>

            <p className="mt-5 leading-8 text-gray-600">
              The festival creates a colourful atmosphere filled with
              traditional customs, flowers, food and family celebrations.
              It represents the close connection between Tamil culture,
              agriculture and nature.
            </p>

          </div>


          {/* ================= QUICK INFORMATION ================= */}

          <div className="rounded-3xl bg-white p-7 shadow-sm">

            <h3 className="text-xl font-bold text-[#1F3D2B]">
              Festival Information
            </h3>

            <div className="mt-6 space-y-5">

              <div>
                <p className="text-sm text-gray-500">
                  Location
                </p>

                <p className="mt-1 font-semibold text-gray-800">
                  River Kaveri
                </p>
              </div>


              <div>
                <p className="text-sm text-gray-500">
                  Festival Period
                </p>

                <p className="mt-1 font-semibold text-gray-800">
                  July - August
                </p>
              </div>


              <div>
                <p className="text-sm text-gray-500">
                  Category
                </p>

                <p className="mt-1 font-semibold text-gray-800">
                  Cultural
                </p>
              </div>


              <div>
                <p className="text-sm text-gray-500">
                  Theme
                </p>

                <p className="mt-1 font-semibold text-gray-800">
                  Water, Nature & Tradition
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* ================= FESTIVAL HIGHLIGHTS ================= */}

        <section className="mt-20">

          <div className="max-w-2xl">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#B85B32]">
              Festival Highlights
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#1F3D2B] md:text-4xl">
              What You Can Experience
            </h2>

          </div>


          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {/* CARD 1 */}

            <div className="rounded-3xl bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

              <div className="text-3xl">
                🌊
              </div>

              <h3 className="mt-5 text-xl font-bold text-[#1F3D2B]">
                Water Celebration
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Experience a traditional celebration that highlights the
                importance of rivers and water in everyday life.
              </p>

            </div>


            {/* CARD 2 */}

            <div className="rounded-3xl bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

              <div className="text-3xl">
                🌺
              </div>

              <h3 className="mt-5 text-xl font-bold text-[#1F3D2B]">
                Traditional Offerings
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Families prepare colourful offerings and traditional
                arrangements as part of the festival customs.
              </p>

            </div>


            {/* CARD 3 */}

            <div className="rounded-3xl bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

              <div className="text-3xl">
                🍚
              </div>

              <h3 className="mt-5 text-xl font-bold text-[#1F3D2B]">
                Traditional Food
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Enjoy traditional homemade dishes and special foods prepared
                by families during the Aadi season.
              </p>

            </div>


            {/* CARD 4 */}

            <div className="rounded-3xl bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

              <div className="text-3xl">
                🌿
              </div>

              <h3 className="mt-5 text-xl font-bold text-[#1F3D2B]">
                Connection with Nature
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Discover the traditional relationship between people,
                agriculture, rivers and the natural environment.
              </p>

            </div>


            {/* CARD 5 */}

            <div className="rounded-3xl bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

              <div className="text-3xl">
                👨‍👩‍👧‍👦
              </div>

              <h3 className="mt-5 text-xl font-bold text-[#1F3D2B]">
                Family Celebration
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Families and communities come together to observe the
                festival and share traditional customs.
              </p>

            </div>


            {/* CARD 6 */}

            <div className="rounded-3xl bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

              <div className="text-3xl">
                📸
              </div>

              <h3 className="mt-5 text-xl font-bold text-[#1F3D2B]">
                Cultural Experience
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Enjoy the colourful atmosphere and discover the cultural
                traditions connected with the Aadi season.
              </p>

            </div>

          </div>

        </section>


        {/* ================= CULTURAL SIGNIFICANCE ================= */}

        <section className="mt-20 grid gap-10 lg:grid-cols-2">

          <div className="rounded-3xl bg-[#EDE7D8] p-8 md:p-10">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#B85B32]">
              Cultural Significance
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#1F3D2B]">
              Water, Agriculture & Life
            </h2>

            <p className="mt-5 leading-8 text-gray-700">
              Water has always played an important role in Tamil agricultural
              traditions. Adiperukku reflects this relationship by
              celebrating the importance of water and expressing gratitude
              for natural resources.
            </p>

            <p className="mt-4 leading-8 text-gray-700">
              The festival is also an opportunity for families to preserve
              traditional practices and pass cultural values from one
              generation to the next.
            </p>

          </div>


          <div className="rounded-3xl bg-white p-8 shadow-sm md:p-10">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#B85B32]">
              Festival Atmosphere
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#1F3D2B]">
              A Colourful Aadi Celebration
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              During the festival, riverside areas and homes can become
              colourful with flowers, traditional decorations and offerings.
              The atmosphere brings together spirituality, family gatherings
              and cultural traditions.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              For visitors, it offers an opportunity to observe a traditional
              Tamil celebration and learn about the cultural importance of
              water and nature.
            </p>

          </div>

        </section>


        {/* ================= TRAVEL TIPS ================= */}

        <section className="mt-20 rounded-[2rem] bg-[#1F3D2B] px-7 py-12 text-white md:px-12">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#F2B84B]">
            Travel Tips
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Before You Visit
          </h2>


          <div className="mt-8 grid gap-6 md:grid-cols-2">

            <div>
              <h3 className="font-bold">
                👕 Dress Comfortably
              </h3>

              <p className="mt-2 leading-7 text-white/70">
                Wear comfortable clothing, especially if you plan to spend
                time near rivers or outdoor festival areas.
              </p>
            </div>


            <div>
              <h3 className="font-bold">
                🕐 Plan Your Visit
              </h3>

              <p className="mt-2 leading-7 text-white/70">
                Festival areas may become busy, so plan your travel and arrive
                with enough time.
              </p>
            </div>


            <div>
              <h3 className="font-bold">
                🌊 Stay Safe Near Water
              </h3>

              <p className="mt-2 leading-7 text-white/70">
                Stay in safe areas near rivers and always follow local safety
                instructions.
              </p>
            </div>


            <div>
              <h3 className="font-bold">
                🙏 Respect Traditions
              </h3>

              <p className="mt-2 leading-7 text-white/70">
                Respect local customs, families and traditional practices
                during the celebration.
              </p>
            </div>

          </div>

        </section>


        {/* ================= BOTTOM BUTTON ================= */}

        <div className="mt-14 text-center">

          <Link
            to="/festivals"
            className="inline-flex items-center gap-2 rounded-full bg-[#B85B32] px-7 py-3 font-semibold text-white transition duration-300 hover:bg-[#964724] hover:gap-3"
          >
            ← Back to Festivals
          </Link>

        </div>

      </main>

    </div>
  );
}

export default Adiperukku;