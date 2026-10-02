import React from "react";
import { Link } from "react-router-dom";

function Thammampatti() {
  return (
    <div className="bg-[#f8f6ef] text-[#111b16]">

      {/* ================= HERO ================= */}
      <section className="relative h-[70vh] min-h-[520px] overflow-hidden">

        <img
          src="/images/home/thammampatti_Wood.jpg"
          alt="Thammampatti Wood Carving"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">

            <span className="inline-block rounded-full bg-[#d9a441] px-4 py-2 text-sm font-semibold text-white">
              Handicraft
            </span>

            <h1 className="mt-5 max-w-5xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-7xl">
              Thammampatti Wood Carving
            </h1>

            <div className="mt-6 flex flex-wrap gap-5 text-sm text-white sm:text-base">
              <span>📍 Thammampatti, Salem</span>
              <span>🎨 Traditional Craft</span>
              <span>⭐ 4.8</span>
            </div>

          </div>
        </div>
      </section>


      {/* ================= MAIN CONTENT ================= */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        {/* BACK BUTTON */}
        <Link
          to="/handicrafts"
          className="mb-10 inline-flex items-center gap-2 rounded-full border border-[#d8d0bd] bg-white px-5 py-3 text-sm font-bold transition hover:bg-[#111b16] hover:text-white"
        >
          ← Back to Handicrafts
        </Link>


        {/* ================= ABOUT ================= */}
        <div className="grid gap-12 lg:grid-cols-3">

          <div className="lg:col-span-2">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b85b32]">
              Discover Thammampatti
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              The Art of Traditional Wood Carving
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-600">
              Thammampatti is well known for its traditional wood carving
              craftsmanship. Skilled artisans transform wooden blocks into
              detailed artistic pieces using traditional carving techniques.
            </p>

            <p className="mt-4 text-base leading-8 text-gray-600">
              The craft reflects the patience, creativity and skill of local
              artisans. Intricate patterns, traditional figures and decorative
              designs are carefully carved into wood to create unique
              handcrafted works.
            </p>

            <p className="mt-4 text-base leading-8 text-gray-600">
              Thammampatti wood carving represents an important part of the
              traditional handicraft identity associated with the Salem region.
              Visitors interested in art, culture and traditional craftsmanship
              can explore this distinctive local craft.
            </p>

          </div>


          {/* ================= QUICK INFORMATION ================= */}
          <div className="rounded-3xl bg-white p-7 shadow-sm">

            <h3 className="text-xl font-bold">
              Quick Information
            </h3>

            <div className="mt-6 space-y-5">

              <div className="border-b border-gray-200 pb-4">
                <p className="text-sm text-gray-500">
                  Location
                </p>

                <p className="mt-1 font-semibold">
                  Thammampatti, Salem
                </p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <p className="text-sm text-gray-500">
                  Craft Type
                </p>

                <p className="mt-1 font-semibold">
                  Wood Carving
                </p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <p className="text-sm text-gray-500">
                  Category
                </p>

                <p className="mt-1 font-semibold">
                  Traditional Handicraft
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Experience
                </p>

                <p className="mt-1 font-semibold">
                  1–2 Hours
                </p>
              </div>

            </div>

          </div>

        </div>


        {/* ================= CRAFT PROCESS ================= */}
        <div className="mt-20">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b85b32]">
            Traditional Craft
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            How Wood Carving Comes to Life
          </h2>

          <p className="mt-5 max-w-3xl text-base leading-8 text-gray-600">
            Traditional wood carving involves several careful stages. Each
            stage requires attention to detail and the experience of the
            artisan.
          </p>


          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {/* STEP 1 */}
            <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d9a441] text-xl font-bold text-white">
                01
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Select the Wood
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Suitable wood is selected based on the type and size of the
                carving being created.
              </p>

            </div>


            {/* STEP 2 */}
            <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d9a441] text-xl font-bold text-white">
                02
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Create the Design
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                The artisan plans the traditional design and marks the
                important details on the wooden surface.
              </p>

            </div>


            {/* STEP 3 */}
            <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d9a441] text-xl font-bold text-white">
                03
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Carve the Wood
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Traditional carving tools are used to gradually shape the wood
                and create intricate details.
              </p>

            </div>


            {/* STEP 4 */}
            <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d9a441] text-xl font-bold text-white">
                04
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Finish the Artwork
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                The completed carving is refined and finished to highlight its
                patterns and artistic details.
              </p>

            </div>

          </div>

        </div>


        {/* ================= WHAT TO SEE ================= */}
        <div className="mt-20">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b85b32]">
            Explore the Craft
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Things to Experience
          </h2>


          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {/* CARD 1 */}
            <div className="rounded-2xl bg-white p-6 shadow-sm">

              <div className="text-3xl">
                🪵
              </div>

              <h3 className="mt-4 text-xl font-bold">
                Traditional Woodwork
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Discover the traditional techniques used by skilled artisans
                to shape and decorate wood.
              </p>

            </div>


            {/* CARD 2 */}
            <div className="rounded-2xl bg-white p-6 shadow-sm">

              <div className="text-3xl">
                🛠️
              </div>

              <h3 className="mt-4 text-xl font-bold">
                Artisan Techniques
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Learn about the traditional tools and careful handwork behind
                detailed wood carvings.
              </p>

            </div>


            {/* CARD 3 */}
            <div className="rounded-2xl bg-white p-6 shadow-sm">

              <div className="text-3xl">
                🎨
              </div>

              <h3 className="mt-4 text-xl font-bold">
                Artistic Designs
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Explore decorative patterns, figures and artistic details
                created by local craftsmen.
              </p>

            </div>


            {/* CARD 4 */}
            <div className="rounded-2xl bg-white p-6 shadow-sm">

              <div className="text-3xl">
                📸
              </div>

              <h3 className="mt-4 text-xl font-bold">
                Photography
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Capture the beauty of handcrafted woodwork while respecting
                artisan and shop photography rules.
              </p>

            </div>


            {/* CARD 5 */}
            <div className="rounded-2xl bg-white p-6 shadow-sm">

              <div className="text-3xl">
                🛍️
              </div>

              <h3 className="mt-4 text-xl font-bold">
                Handcrafted Products
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Explore handcrafted wooden decorative pieces and traditional
                artistic products.
              </p>

            </div>


            {/* CARD 6 */}
            <div className="rounded-2xl bg-white p-6 shadow-sm">

              <div className="text-3xl">
                🏛️
              </div>

              <h3 className="mt-4 text-xl font-bold">
                Cultural Heritage
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Experience a traditional craft that contributes to the cultural
                identity of the Salem region.
              </p>

            </div>

          </div>

        </div>


        {/* ================= WHY IT IS SPECIAL ================= */}
        <div className="mt-20 grid gap-8 lg:grid-cols-2">

          <div className="rounded-3xl bg-[#123d2d] p-8 text-white sm:p-10">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d9a441]">
              Craft Heritage
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              A Craft Shaped by Skilled Hands
            </h2>

            <p className="mt-5 text-sm leading-7 text-gray-300">
              Wood carving requires patience, precision and years of
              craftsmanship. Each handmade piece carries the character of the
              artisan who created it.
            </p>

            <p className="mt-4 text-sm leading-7 text-gray-300">
              Exploring traditional handicrafts provides visitors with a
              closer connection to the culture, creativity and craftsmanship
              of the Salem region.
            </p>

          </div>


          <div className="rounded-3xl bg-white p-8 shadow-sm sm:p-10">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b85b32]">
              Visitor Experience
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Discover Salem's Craft Tradition
            </h2>

            <p className="mt-5 text-sm leading-7 text-gray-600">
              A visit to Thammampatti can be included in a Salem cultural
              itinerary for travellers interested in traditional arts,
              handicrafts and local craftsmanship.
            </p>

            <div className="mt-6 space-y-4">

              <div className="flex gap-3">
                <span className="font-bold text-[#d9a441]">
                  ✓
                </span>

                <p className="text-sm text-gray-600">
                  Observe traditional craftsmanship.
                </p>
              </div>

              <div className="flex gap-3">
                <span className="font-bold text-[#d9a441]">
                  ✓
                </span>

                <p className="text-sm text-gray-600">
                  Explore handcrafted wooden artwork.
                </p>
              </div>

              <div className="flex gap-3">
                <span className="font-bold text-[#d9a441]">
                  ✓
                </span>

                <p className="text-sm text-gray-600">
                  Learn about local craft traditions.
                </p>
              </div>

            </div>

          </div>

        </div>


        {/* ================= TRAVEL / VISITOR TIPS ================= */}
        <div className="mt-20 rounded-3xl bg-[#111b16] p-8 text-white sm:p-10">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d9a441]">
            Visitor Tips
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
                Respect the artisans and their working environment.
              </p>
            </div>


            <div className="flex gap-3">
              <span className="text-[#d9a441]">
                ✓
              </span>

              <p className="text-sm leading-6 text-gray-300">
                Ask permission before photographing artisans or their work.
              </p>
            </div>


            <div className="flex gap-3">
              <span className="text-[#d9a441]">
                ✓
              </span>

              <p className="text-sm leading-6 text-gray-300">
                Handle handcrafted products carefully.
              </p>
            </div>


            <div className="flex gap-3">
              <span className="text-[#d9a441]">
                ✓
              </span>

              <p className="text-sm leading-6 text-gray-300">
                Support local artisans by choosing authentic handmade
                products.
              </p>
            </div>

          </div>

        </div>


        {/* ================= BACK BUTTON ================= */}
        <div className="mt-12 text-center">

          <Link
            to="/handicrafts"
            className="inline-flex items-center gap-2 rounded-full bg-[#d9a441] px-7 py-3 font-semibold text-white transition hover:bg-[#b85b32]"
          >
            ← Back to Handicrafts
          </Link>

        </div>

      </section>

    </div>
  );
}

export default Thammampatti;