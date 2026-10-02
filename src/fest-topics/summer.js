import React from "react";
import { Link } from "react-router-dom";

function Summer() {
  return (
    <div className="min-h-screen bg-[#F8F5ED]">

      {/* ================= HERO SECTION ================= */}

      <section className="relative h-[600px] overflow-hidden">

        <img
          src="/images/home/yercaud-summer.png"
          alt="Yercaud Summer Festival"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-6">

            <div className="max-w-3xl text-white">

              <span className="inline-block rounded-full bg-[#F2B84B] px-5 py-2 text-sm font-semibold text-[#1F3D2B]">
                Seasonal Festival
              </span>

              <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
                Yercaud Summer
                <br />
                Festival
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/90">
                A colourful summer celebration in the beautiful hills of
                Yercaud, bringing together flowers, culture, nature and
                entertainment.
              </p>

              <div className="mt-8 flex flex-wrap gap-4 text-sm">

                <div className="rounded-xl bg-white/10 px-5 py-3 backdrop-blur-sm">
                  📍 Yercaud, Salem
                </div>

                <div className="rounded-xl bg-white/10 px-5 py-3 backdrop-blur-sm">
                  📅 May
                </div>

                <div className="rounded-xl bg-white/10 px-5 py-3 backdrop-blur-sm">
                  🌸 Seasonal
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
              A Colourful Celebration in the Hills
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              The Yercaud Summer Festival is a popular seasonal celebration
              held in the hill town of Yercaud. The festival adds colour and
              energy to the pleasant summer atmosphere of the Shevaroy Hills.
            </p>

            <p className="mt-5 leading-8 text-gray-600">
              Flowers, gardens, cultural performances and different
              entertainment activities are some of the attractions associated
              with the celebration. Visitors can enjoy the natural beauty of
              Yercaud along with the festive atmosphere.
            </p>

            <p className="mt-5 leading-8 text-gray-600">
              The festival also provides an opportunity to experience local
              culture while exploring one of Salem's well-known hill
              destinations.
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
                  Yercaud, Salem
                </p>
              </div>


              <div>
                <p className="text-sm text-gray-500">
                  Festival Period
                </p>

                <p className="mt-1 font-semibold text-gray-800">
                  May
                </p>
              </div>


              <div>
                <p className="text-sm text-gray-500">
                  Category
                </p>

                <p className="mt-1 font-semibold text-gray-800">
                  Seasonal
                </p>
              </div>


              <div>
                <p className="text-sm text-gray-500">
                  Main Theme
                </p>

                <p className="mt-1 font-semibold text-gray-800">
                  Flowers, Nature & Culture
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
                🌸
              </div>

              <h3 className="mt-5 text-xl font-bold text-[#1F3D2B]">
                Flower Displays
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Enjoy colourful flower displays and beautifully decorated
                spaces that create a special festival atmosphere.
              </p>

            </div>


            {/* CARD 2 */}

            <div className="rounded-3xl bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

              <div className="text-3xl">
                🌿
              </div>

              <h3 className="mt-5 text-xl font-bold text-[#1F3D2B]">
                Yercaud Nature
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Explore the green hills, gardens, viewpoints and pleasant
                surroundings of Yercaud during your festival visit.
              </p>

            </div>


            {/* CARD 3 */}

            <div className="rounded-3xl bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

              <div className="text-3xl">
                🎭
              </div>

              <h3 className="mt-5 text-xl font-bold text-[#1F3D2B]">
                Cultural Programs
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Experience cultural performances and activities that add
                traditional flavour to the summer celebration.
              </p>

            </div>


            {/* CARD 4 */}

            <div className="rounded-3xl bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

              <div className="text-3xl">
                🎶
              </div>

              <h3 className="mt-5 text-xl font-bold text-[#1F3D2B]">
                Entertainment
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Enjoy different entertainment activities organised as part
                of the seasonal festival celebrations.
              </p>

            </div>


            {/* CARD 5 */}

            <div className="rounded-3xl bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

              <div className="text-3xl">
                🍎
              </div>

              <h3 className="mt-5 text-xl font-bold text-[#1F3D2B]">
                Local Produce
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Discover local products and seasonal produce associated with
                the hill region around Yercaud.
              </p>

            </div>


            {/* CARD 6 */}

            <div className="rounded-3xl bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

              <div className="text-3xl">
                📸
              </div>

              <h3 className="mt-5 text-xl font-bold text-[#1F3D2B]">
                Hill Station Experience
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Capture memorable moments while enjoying the festival and
                the scenic beauty of the Yercaud hills.
              </p>

            </div>

          </div>

        </section>


        {/* ================= YERCAUD EXPERIENCE ================= */}

        <section className="mt-20 grid gap-10 lg:grid-cols-2">

          <div className="rounded-3xl bg-[#EDE7D8] p-8 md:p-10">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#B85B32]">
              Yercaud Experience
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#1F3D2B]">
              Nature Meets Celebration
            </h2>

            <p className="mt-5 leading-8 text-gray-700">
              Yercaud is known for its green landscapes, coffee plantations,
              viewpoints and cool hill climate. During the summer festival,
              these natural attractions combine with colourful events and
              cultural activities.
            </p>

            <p className="mt-4 leading-8 text-gray-700">
              Visitors can enjoy the festival while also exploring the
              surrounding hills and attractions.
            </p>

          </div>


          <div className="rounded-3xl bg-white p-8 shadow-sm md:p-10">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#B85B32]">
              Perfect for Visitors
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#1F3D2B]">
              A Summer Getaway
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              The festival makes a visit to Yercaud even more lively during
              the summer season. Families, friends and tourists can explore
              the hill station and enjoy the festive environment.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              It is a chance to combine sightseeing, nature and cultural
              experiences in one trip.
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
                🧥 Carry Light Clothing
              </h3>

              <p className="mt-2 leading-7 text-white/70">
                Yercaud has a pleasant hill climate, but carrying a light
                jacket can be useful, especially during the evening.
              </p>
            </div>


            <div>
              <h3 className="font-bold">
                🕐 Arrive Early
              </h3>

              <p className="mt-2 leading-7 text-white/70">
                Plan your visit early so you have enough time to explore the
                festival and nearby attractions.
              </p>
            </div>


            <div>
              <h3 className="font-bold">
                📷 Photography
              </h3>

              <p className="mt-2 leading-7 text-white/70">
                Carry your camera or phone to capture the flower displays,
                hills and colourful festival atmosphere.
              </p>
            </div>


            <div>
              <h3 className="font-bold">
                🌿 Keep Nature Clean
              </h3>

              <p className="mt-2 leading-7 text-white/70">
                Avoid littering and help keep the beautiful Yercaud hills
                clean during your visit.
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

export default Summer;