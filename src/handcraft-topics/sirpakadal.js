import React from "react";
import { Link } from "react-router-dom";

function SirpaKadal() {
  // Google Maps location
  const locationUrl = "https://maps.app.goo.gl/G28PQ96ctoGFEMtN9";

  return (
    <div className="min-h-screen bg-[#fffaf0] text-[#2f2a22]">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}
      <section className="relative min-h-[680px] overflow-hidden">

        {/* Hero Image */}
        <img
          src="/images/home/vinayagar.jpeg"
          alt="Sirpa Kadal Vinayagar Craft"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/30"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex min-h-[680px] items-end">

          <div className="mx-auto w-full max-w-7xl px-6 pb-20 lg:px-10">

            <div className="max-w-4xl">

              {/* Label */}
              <span className="inline-flex rounded-full bg-[#e5aa25] px-5 py-2 text-sm font-semibold text-white shadow-lg">
                Salem Traditional Craft
              </span>

              {/* Title */}
              <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">

                Sirpa Kadal

                <span className="block text-[#f3c64d]">
                  Vinayagar Craft
                </span>

              </h1>

              {/* Description */}
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
                Discover the artistic tradition of crafting beautiful
                Vinayagar sculptures through skilled hands, patience,
                creativity and traditional craftsmanship.
              </p>

              {/* Tags */}
              <div className="mt-8 flex flex-wrap gap-3">

                <span className="rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-md">
                  Salem, Tamil Nadu
                </span>

                <span className="rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-md">
                  Traditional Sculpture
                </span>

                <span className="rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-md">
                  Handmade Craft
                </span>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          INTRODUCTION
      ===================================================== */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Text */}
          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#b47a10]">
              About the Craft
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
              The Art of Vinayagar Craft
            </h2>

            <div className="mt-6 space-y-5 text-[16px] leading-8 text-gray-600">

              <p>
                Sirpa Kadal represents the traditional artistic skill
                involved in creating beautifully detailed Vinayagar
                sculptures.
              </p>

              <p>
                Each sculpture reflects the patience, imagination and
                craftsmanship of the artisan. From shaping the basic form
                to adding fine details, every stage requires care and
                attention.
              </p>

              <p>
                These handcrafted sculptures are connected with Tamil
                artistic traditions and form an important part of the
                craft culture associated with Salem.
              </p>

            </div>

          </div>


          {/* Image */}
          <div className="group overflow-hidden rounded-[30px] bg-white shadow-xl">

            <img
              src="/images/handicrafts/img3.png"
              alt="Detailed Vinayagar traditional sculpture"
              className="h-[450px] w-full object-cover object-center transition duration-700 group-hover:scale-105 sm:h-[500px]"
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          QUICK INFORMATION
      ===================================================== */}
      <section className="bg-[#f1e6d0] py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          {/* Heading */}
          <div className="mb-12 text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#b47a10]">
              Craft Details
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Quick Information
            </h2>

          </div>


          {/* Information Cards */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {/* Location */}
            <div className="rounded-2xl bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

              <p className="text-sm text-gray-500">
                Location
              </p>

              <h3 className="mt-2 text-lg font-bold">
                Salem, Tamil Nadu
              </h3>

            </div>


            {/* Craft Type */}
            <div className="rounded-2xl bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

              <p className="text-sm text-gray-500">
                Craft Type
              </p>

              <h3 className="mt-2 text-lg font-bold">
                Traditional Sculpture
              </h3>

            </div>


            {/* Craft Style */}
            <div className="rounded-2xl bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

              <p className="text-sm text-gray-500">
                Craft Style
              </p>

              <h3 className="mt-2 text-lg font-bold">
                Handmade Artwork
              </h3>

            </div>


            {/* Experience */}
            <div className="rounded-2xl bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

              <p className="text-sm text-gray-500">
                Experience
              </p>

              <h3 className="mt-2 text-lg font-bold">
                Artisan Craft
              </h3>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CRAFT PROCESS
      ===================================================== */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

        {/* Heading */}
        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#b47a10]">
            From Idea to Artwork
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            How the Craft Comes Together
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-600">
            Creating a traditional sculpture involves several careful
            stages, with artisans giving attention to both form and detail.
          </p>

        </div>


        {/* Process Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {/* 01 */}
          <div className="group rounded-3xl border border-[#eadfc9] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

            <span className="text-4xl font-bold text-[#d19a20]">
              01
            </span>

            <h3 className="mt-5 text-xl font-bold">
              Designing
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              The basic form and appearance of the sculpture are planned
              before the detailed work begins.
            </p>

          </div>


          {/* 02 */}
          <div className="group rounded-3xl border border-[#eadfc9] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

            <span className="text-4xl font-bold text-[#d19a20]">
              02
            </span>

            <h3 className="mt-5 text-xl font-bold">
              Shaping
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              The artisan carefully shapes the material to create the
              required form of the Vinayagar sculpture.
            </p>

          </div>


          {/* 03 */}
          <div className="group rounded-3xl border border-[#eadfc9] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

            <span className="text-4xl font-bold text-[#d19a20]">
              03
            </span>

            <h3 className="mt-5 text-xl font-bold">
              Detailing
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Fine artistic details are added to bring character,
              expression and beauty to the sculpture.
            </p>

          </div>


          {/* 04 */}
          <div className="group rounded-3xl border border-[#eadfc9] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

            <span className="text-4xl font-bold text-[#d19a20]">
              04
            </span>

            <h3 className="mt-5 text-xl font-bold">
              Finishing
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              The final artwork receives finishing touches that complete
              the handcrafted appearance.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          CRAFT & CULTURE
      ===================================================== */}
      <section className="bg-[#29251f] py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* Image */}
            <div className="group overflow-hidden rounded-[30px] shadow-2xl">

              <img
                src="/images/home/vinayagar.jpeg"
                alt="Vinayagar craft heritage"
                className="h-[430px] w-full object-cover object-center transition duration-700 group-hover:scale-105 sm:h-[500px]"
              />

            </div>


            {/* Content */}
            <div className="text-white">

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#e5b83c]">
                Craft & Culture
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
                More Than a Sculpture
              </h2>

              <p className="mt-6 leading-8 text-white/70">
                Traditional craft is an important part of local culture.
                Artisan-made sculptures represent creativity, dedication
                and the connection between people and their artistic
                heritage.
              </p>

              <p className="mt-5 leading-8 text-white/70">
                Sirpa Kadal brings together artistic skill and cultural
                expression, creating handcrafted works that can be admired
                as both traditional art and decorative pieces.
              </p>


              {/* Small Cards */}
              <div className="mt-8 grid grid-cols-2 gap-4">

                <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-sm">

                  <h3 className="font-bold text-[#f3c64d]">
                    Traditional
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white/60">
                    Rooted in local craft traditions.
                  </p>

                </div>


                <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-sm">

                  <h3 className="font-bold text-[#f3c64d]">
                    Handmade
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white/60">
                    Created through artisan skill.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          LOCATION
      ===================================================== */}
      <section className="bg-[#123d2d] py-20">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#e5b83c]">
            Visit the Craft
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Find Sirpa Kadal
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/65">
            Explore the location and discover the traditional Vinayagar
            craft associated with Salem.
          </p>


          {/* Location Card */}
          <div className="mx-auto mt-10 max-w-xl rounded-3xl border border-white/10 bg-white/10 p-8 shadow-xl backdrop-blur-md">

            {/* Location Icon */}
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#e5aa25] text-2xl shadow-lg">
              📍
            </div>

            <h3 className="mt-5 text-xl font-bold text-white">
              Mottur, chettipatti, Idappadi Rd, Tamil Nadu, Salem 637104
            </h3>

            <p className="mt-2 text-sm text-white/60">
              Sirpa Kadal – Vinayagar Craft
            </p>


            {/* Google Maps Button */}
            <a
              href={locationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#e5aa25] px-7 py-3 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#c88f12] hover:shadow-xl"
            >
              📍 Open Google Maps
              <span>
                →
              </span>
            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          VISITOR TIPS
      ===================================================== */}
      <section className="bg-[#f1e6d0] py-20">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#b47a10]">
            Discover Salem
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Appreciate the Artisan Craft
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-600">
            Take time to observe the details, understand the effort behind
            handmade artwork and appreciate the traditional craft heritage.
          </p>


          {/* Tips */}
          <div className="mt-10 grid gap-5 text-left md:grid-cols-3">

            {/* Tip 1 */}
            <div className="rounded-2xl bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

              <div className="text-2xl">
                👁️
              </div>

              <h3 className="mt-4 font-bold">
                Observe the Details
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Look closely at the shapes, patterns and finishing work.
              </p>

            </div>


            {/* Tip 2 */}
            <div className="rounded-2xl bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

              <div className="text-2xl">
                🤝
              </div>

              <h3 className="mt-4 font-bold">
                Respect the Craft
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Every handmade piece represents time, patience and artisan
                skill.
              </p>

            </div>


            {/* Tip 3 */}
            <div className="rounded-2xl bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

              <div className="text-2xl">
                ❤️
              </div>

              <h3 className="mt-4 font-bold">
                Support Artisans
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Supporting local crafts helps preserve traditional skills
                for future generations.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          BACK BUTTON
      ===================================================== */}
      <section className="px-6 py-12 text-center">

        <Link
          to="/handicrafts"
          className="inline-flex items-center gap-2 rounded-full bg-[#2f5d3a] px-8 py-3.5 font-semibold text-white shadow-md transition duration-300 hover:-translate-y-1 hover:bg-[#23482d] hover:shadow-lg"
        >
          ← Back to Handicrafts
        </Link>

      </section>

    </div>
  );
}

export default SirpaKadal;