import React from "react";
import { Link } from "react-router-dom";

function Tiruchengode() {
  return (
    <div className="min-h-screen bg-[#F8F5ED]">

      {/* ================= HERO SECTION ================= */}

      <section className="relative h-[600px] overflow-hidden">

        <img
          src="/images/home/tiruchengode.jpg"
          alt="Tiruchengode Ther Thiruvizha"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-6">

            <div className="max-w-3xl text-white">

              <span className="inline-block rounded-full bg-[#F2B84B] px-5 py-2 text-sm font-semibold text-[#1F3D2B]">
                Religious Festival
              </span>

              <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
                Tiruchengode Ther
                <br />
                Thiruvizha
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/90">
                A vibrant traditional chariot festival that brings together
                devotion, culture and the festive spirit of Tiruchengode.
              </p>

              <div className="mt-8 flex flex-wrap gap-4 text-sm">

                <div className="rounded-xl bg-white/10 px-5 py-3 backdrop-blur-sm">
                  📍 Tiruchengode, Tamil Nadu
                </div>

                <div className="rounded-xl bg-white/10 px-5 py-3 backdrop-blur-sm">
                  📅 May
                </div>

                <div className="rounded-xl bg-white/10 px-5 py-3 backdrop-blur-sm">
                  🛕 Religious
                </div>

              </div>

            </div>

          </div>
        </div>

      </section>


      {/* ================= MAIN CONTENT ================= */}

      <main className="mx-auto max-w-7xl px-6 py-16">

        {/* BACK BUTTON */}

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
              A Grand Chariot Celebration
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              Tiruchengode Ther Thiruvizha is a traditional annual chariot
              festival celebrated in Tiruchengode. The festival is associated
              with the Arthanareeswarar Temple and attracts devotees and
              visitors during the celebration.
            </p>

            <p className="mt-5 leading-8 text-gray-600">
              One of the main attractions of the festival is the beautifully
              decorated temple chariot. Devotees come together to participate
              in the chariot procession and experience the spiritual
              atmosphere.
            </p>

            <p className="mt-5 leading-8 text-gray-600">
              The celebration also provides an opportunity to experience the
              local traditions, cultural activities and community spirit of
              Tiruchengode.
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
                  Tiruchengode, Tamil Nadu
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
                  Religious
                </p>
              </div>


              <div>
                <p className="text-sm text-gray-500">
                  Main Attraction
                </p>

                <p className="mt-1 font-semibold text-gray-800">
                  Temple Chariot Procession
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
                🛕
              </div>

              <h3 className="mt-5 text-xl font-bold text-[#1F3D2B]">
                Temple Visit
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Visit the Arthanareeswarar Temple and experience the devotional
                atmosphere during the festival.
              </p>

            </div>


            {/* CARD 2 */}

            <div className="rounded-3xl bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

              <div className="text-3xl">
                🛞
              </div>

              <h3 className="mt-5 text-xl font-bold text-[#1F3D2B]">
                Chariot Procession
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Witness the traditional temple chariot procession as devotees
                gather for the important festival event.
              </p>

            </div>


            {/* CARD 3 */}

            <div className="rounded-3xl bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

              <div className="text-3xl">
                🌺
              </div>

              <h3 className="mt-5 text-xl font-bold text-[#1F3D2B]">
                Traditional Decorations
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Enjoy the colourful decorations and festive arrangements
                surrounding the temple and celebration areas.
              </p>

            </div>


            {/* CARD 4 */}

            <div className="rounded-3xl bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

              <div className="text-3xl">
                🥁
              </div>

              <h3 className="mt-5 text-xl font-bold text-[#1F3D2B]">
                Music & Celebration
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Experience traditional music and the lively atmosphere created
                during the festival celebrations.
              </p>

            </div>


            {/* CARD 5 */}

            <div className="rounded-3xl bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

              <div className="text-3xl">
                🙏
              </div>

              <h3 className="mt-5 text-xl font-bold text-[#1F3D2B]">
                Devotional Experience
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Observe the devotional traditions and activities followed by
                devotees throughout the festival.
              </p>

            </div>


            {/* CARD 6 */}

            <div className="rounded-3xl bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

              <div className="text-3xl">
                👨‍👩‍👧‍👦
              </div>

              <h3 className="mt-5 text-xl font-bold text-[#1F3D2B]">
                Community Spirit
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                See families, devotees and visitors coming together to enjoy
                this important traditional celebration.
              </p>

            </div>

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
                Wear comfortable and respectful clothing when visiting the
                temple and festival area.
              </p>
            </div>


            <div>
              <h3 className="font-bold">
                🕐 Arrive Early
              </h3>

              <p className="mt-2 leading-7 text-white/70">
                Festival days can be busy, so arriving early can make your
                visit more comfortable.
              </p>
            </div>


            <div>
              <h3 className="font-bold">
                📷 Photography
              </h3>

              <p className="mt-2 leading-7 text-white/70">
                Follow temple rules and check whether photography is permitted
                in specific areas.
              </p>
            </div>


            <div>
              <h3 className="font-bold">
                🙏 Respect Traditions
              </h3>

              <p className="mt-2 leading-7 text-white/70">
                Respect local customs, devotees and temple traditions while
                attending the festival.
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

export default Tiruchengode;