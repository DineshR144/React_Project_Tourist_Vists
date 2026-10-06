import React from "react";
import { Link } from "react-router-dom";

function SalemSilk() {
  return (
    <div className="bg-[#f8f6ef] text-[#111b16]">

      {/* ================= HERO ================= */}
      <section className="relative h-full w-full overflow-hidden bg-[#111b16]">

        {/* LEFT HERO IMAGE */}
        <div className="absolute inset-0">
          <img
            src="/images/home/salem venpattu.png"
            alt="Salem Silk Weaving and Handlooms"
            className="h-full w-full object-cover"
          />
        </div>

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/20"></div>

        {/* HERO CONTENT */}
        <div className="relative z-10 flex min-h-[650px] items-center">

          <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">

            <div className="max-w-4xl">

              <span className="inline-block rounded-full bg-[#d9a441] px-4 py-2 text-sm font-semibold text-white">
                Handicraft & Handloom
              </span>

              <h1 className="mt-6 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Salem Silk Weaving
                <span className="block text-[#e5b84b]">
                  & Handlooms
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-gray-200 sm:text-lg">
                Discover the rich weaving tradition of Salem, where skilled
                artisans transform fine yarns into elegant sarees and
                traditional handloom fabrics.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">

                <div className="rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm">
                  📍 Salem, Tamil Nadu
                </div>

                <div className="rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm">
                  🧵 Traditional Weaving
                </div>

                <div className="rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm">
                  ⭐ Handcrafted
                </div>

              </div>

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

          {/* MAIN TEXT */}
          <div className="lg:col-span-2">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b85b32]">
              Discover Salem Handlooms
            </p>

            <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">
              A Tradition Woven Into Salem's Culture
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-600">
              Salem has a long association with textile production and
              handloom weaving. The region is known for skilled weavers who
              create traditional fabrics using carefully selected yarns and
              weaving techniques.
            </p>

            <p className="mt-4 text-base leading-8 text-gray-600">
              Traditional handloom weaving requires patience and precision.
              Threads are carefully arranged on the loom before the weaver
              creates patterns and designs through the weaving process.
            </p>

            <p className="mt-4 text-base leading-8 text-gray-600">
              Salem's handloom tradition forms an important part of the
              region's craft identity and provides visitors with an
              opportunity to discover the skill and creativity behind
              traditional Indian textiles.
            </p>

          </div>


          {/* QUICK INFORMATION */}
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
                  Salem, Tamil Nadu
                </p>
              </div>


              <div className="border-b border-gray-200 pb-4">
                <p className="text-sm text-gray-500">
                  Craft Type
                </p>

                <p className="mt-1 font-semibold">
                  Silk & Handloom
                </p>
              </div>


              <div className="border-b border-gray-200 pb-4">
                <p className="text-sm text-gray-500">
                  Category
                </p>

                <p className="mt-1 font-semibold">
                  Traditional Textile
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


        {/* ================= WEAVING PROCESS ================= */}
        <div className="mt-20">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b85b32]">
            The Weaving Process
          </p>

          <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">
            From Yarn to Handloom
          </h2>

          <p className="mt-5 max-w-3xl text-base leading-8 text-gray-600">
            Traditional weaving involves several careful stages. The skill of
            the weaver can be seen in every step, from preparing the yarn to
            completing the finished fabric.
          </p>


          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {/* STEP 1 */}
            <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d9a441] text-lg font-bold text-white">
                01
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Prepare the Yarn
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Yarn is prepared and arranged carefully before the weaving
                process begins.
              </p>

            </div>


            {/* STEP 2 */}
            <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d9a441] text-lg font-bold text-white">
                02
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Set the Loom
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                The threads are arranged on the loom according to the
                requirements of the design.
              </p>

            </div>


            {/* STEP 3 */}
            <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d9a441] text-lg font-bold text-white">
                03
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Weave the Fabric
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                The weaver carefully interlaces the threads to create the
                fabric and its patterns.
              </p>

            </div>


            {/* STEP 4 */}
            <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d9a441] text-lg font-bold text-white">
                04
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Finish the Textile
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                The completed fabric is checked and finished before becoming a
                traditional handloom product.
              </p>

            </div>

          </div>

        </div>


        {/* ================= SPECIAL FEATURES ================= */}
        <div className="mt-20">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b85b32]">
            Salem Textile Heritage
          </p>

          <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">
            What Makes Handloom Special?
          </h2>


          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {/* CARD 1 */}
            <div className="rounded-2xl bg-white p-6 shadow-sm">

              <div className="text-3xl">
                🧵
              </div>

              <h3 className="mt-4 text-xl font-bold">
                Skilled Weaving
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Handloom weaving depends on the experience, patience and
                precision of skilled artisans.
              </p>

            </div>


            {/* CARD 2 */}
            <div className="rounded-2xl bg-white p-6 shadow-sm">

              <div className="text-3xl">
                👘
              </div>

              <h3 className="mt-4 text-xl font-bold">
                Traditional Sarees
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Traditional textiles are woven into elegant sarees and other
                garments used for cultural and everyday occasions.
              </p>

            </div>


            {/* CARD 3 */}
            <div className="rounded-2xl bg-white p-6 shadow-sm">

              <div className="text-3xl">
                ✨
              </div>

              <h3 className="mt-4 text-xl font-bold">
                Detailed Patterns
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Different weaving techniques can create distinctive borders,
                patterns and decorative details.
              </p>

            </div>


            {/* CARD 4 */}
            <div className="rounded-2xl bg-white p-6 shadow-sm">

              <div className="text-3xl">
                🪡
              </div>

              <h3 className="mt-4 text-xl font-bold">
                Handmade Craft
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Handloom production reflects the personal skill and attention
                of the artisan behind each textile.
              </p>

            </div>


            {/* CARD 5 */}
            <div className="rounded-2xl bg-white p-6 shadow-sm">

              <div className="text-3xl">
                🎨
              </div>

              <h3 className="mt-4 text-xl font-bold">
                Colours & Designs
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Traditional textiles feature a wide range of colours,
                patterns and decorative combinations.
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
                Handloom weaving connects generations of artisans with the
                cultural and textile traditions of the region.
              </p>

            </div>

          </div>

        </div>


        {/* ================= CRAFT & CULTURE ================= */}
        <div className="mt-20 grid gap-8 lg:grid-cols-2">

          <div className="overflow-hidden rounded-3xl bg-white shadow-sm">

            <img
              src="/images/home/salem venpattu.png"
              alt="Salem traditional handloom"
              className="h-[350px] w-full object-cover"
            />

            <div className="p-8">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b85b32]">
                Textile Tradition
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                Woven With Patience
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                Every handloom textile reflects careful preparation, repeated
                weaving movements and close attention to detail. The result is
                a product that carries the character of traditional
                craftsmanship.
              </p>

            </div>

          </div>


          <div className="rounded-3xl bg-[#123d2d] p-8 text-white sm:p-10">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d9a441]">
              Cultural Experience
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Discover Salem's Weaving Heritage
            </h2>

            <p className="mt-5 text-sm leading-7 text-gray-300">
              Exploring Salem's handloom tradition provides an opportunity to
              understand the work behind traditional textiles and the role of
              skilled artisans in preserving craft knowledge.
            </p>

            <div className="mt-7 space-y-4">

              <div className="flex gap-3">
                <span className="text-[#d9a441]">
                  ✓
                </span>

                <p className="text-sm text-gray-300">
                  Learn about traditional weaving techniques.
                </p>
              </div>


              <div className="flex gap-3">
                <span className="text-[#d9a441]">
                  ✓
                </span>

                <p className="text-sm text-gray-300">
                  Explore traditional handloom textiles.
                </p>
              </div>


              <div className="flex gap-3">
                <span className="text-[#d9a441]">
                  ✓
                </span>

                <p className="text-sm text-gray-300">
                  Appreciate the skill of local artisans.
                </p>
              </div>


              <div className="flex gap-3">
                <span className="text-[#d9a441]">
                  ✓
                </span>

                <p className="text-sm text-gray-300">
                  Discover Salem's textile heritage.
                </p>
              </div>

            </div>

          </div>

        </div>


        {/* ================= VISITOR TIPS ================= */}
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
                Respect the working environment of artisans and weavers.
              </p>
            </div>


            <div className="flex gap-3">
              <span className="text-[#d9a441]">
                ✓
              </span>

              <p className="text-sm leading-6 text-gray-300">
                Ask permission before photographing people or workshops.
              </p>
            </div>


            <div className="flex gap-3">
              <span className="text-[#d9a441]">
                ✓
              </span>

              <p className="text-sm leading-6 text-gray-300">
                Handle handloom products carefully when visiting shops.
              </p>
            </div>


            <div className="flex gap-3">
              <span className="text-[#d9a441]">
                ✓
              </span>

              <p className="text-sm leading-6 text-gray-300">
                Support traditional artisans by choosing authentic
                handcrafted products.
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

export default SalemSilk;
