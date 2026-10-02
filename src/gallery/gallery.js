import React from "react";
import Gallery from "./gallery.json";
import Plantrip from "./plan.js";
import Footer from "../home/footer";

function gallery() {
  return (
    <div>
       <section className="relative h-[720px] w-full overflow-hidden">

        {/* Hero Image */}
        <img
          src={Gallery[0].imghero}
          alt="Salem Festivals"
          className="absolute inset-0 h-full w-full object-cover animate-[fade1_15s_infinite]"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Hero Text */}
        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
          <div className="max-w-4xl text-white">

            {/* Small Heading */}
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] sm:text-base">
              {Gallery[0].plantext1}
            </p>

            {/* Main Heading */}
            <h1 className="text-[#f6b51b] font-serif italic text-5xl font-bold leading-tight sm:text-6xl md:text-7xl lg:text-7xl">
              {Gallery[0].plantext2}
            </h1>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/90 sm:text-lg md:text-xl">
              {Gallery[0].plantext3}
            </p>

          </div>
        </div>

      </section>

    {/* ================= PLAN MY TRIP GRID ================= */}
<section className="bg-[#FAF7F0] px-5 py-12 sm:px-8 sm:py-14 md:px-12 lg:px-20 lg:py-20">
  <div className="mx-auto max-w-7xl">

    {/* ================= SECTION HEADER ================= */}
    <div className="mx-auto max-w-3xl text-center">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#B85B32] sm:text-sm">
        {Gallery[0].plansub}
      </p>

      <h2 className="font-serif text-3xl font-bold leading-tight text-[#171916] sm:text-4xl md:text-5xl">
        {Gallery[0].planmain}
      </h2>

      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#B85B32]" />
    </div>


    {/* ================= PLANNING CARDS ================= */}
    <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-7">

      {/* ================= CARD 1 ================= */}
      <div className="group flex h-full flex-col items-center rounded-2xl border border-[#e4ded2] bg-white px-6 py-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:py-9 lg:px-7 lg:py-10">

        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F6E8D9] text-3xl transition-transform duration-300 group-hover:scale-110">
          🌤️
        </div>

        <h3 className="mt-5 font-serif text-xl font-bold text-[#171916] sm:text-2xl">
          {Gallery[0].plangrid1}
        </h3>

        <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
          {Gallery[0].plangridpara1}
        </p>
      </div>


      {/* ================= CARD 2 ================= */}
      <div className="group flex h-full flex-col items-center rounded-2xl border border-[#e4ded2] bg-white px-6 py-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:py-9 lg:px-7 lg:py-10">

        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F6E8D9] text-3xl transition-transform duration-300 group-hover:scale-110">
          🚗
        </div>

        <h3 className="mt-5 font-serif text-xl font-bold text-[#171916] sm:text-2xl">
          {Gallery[0].plangrid2}
        </h3>

        <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
          {Gallery[0].plangridpara2}
        </p>
      </div>


      {/* ================= CARD 3 ================= */}
      <div className="group flex h-full flex-col items-center rounded-2xl border border-[#e4ded2] bg-white px-6 py-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:py-9 lg:px-7 lg:py-10">

        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F6E8D9] text-3xl transition-transform duration-300 group-hover:scale-110">
          🎒
        </div>

        <h3 className="mt-5 font-serif text-xl font-bold text-[#171916] sm:text-2xl">
          {Gallery[0].plangrid3}
        </h3>

        <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
          {Gallery[0].plangridpara3}
        </p>
      </div>


      {/* ================= CARD 4 ================= */}
      <div className="group flex h-full flex-col items-center rounded-2xl border border-[#e4ded2] bg-white px-6 py-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:py-9 lg:px-7 lg:py-10">

        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F6E8D9] text-3xl transition-transform duration-300 group-hover:scale-110">
          📸
        </div>

        <h3 className="mt-5 font-serif text-xl font-bold text-[#171916] sm:text-2xl">
          {Gallery[0].plangrid4}
        </h3>

        <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
          {Gallery[0].plangridpara4}
        </p>
      </div>

    </div>
  </div>
</section>  


    {/*plan my trip section*/}
    <section>
    
    <Plantrip />

    </section>

    {/* ================= EXPERIENCES GRID ================= */}

<section className="bg-[#EAF2EC] px-5 py-12 sm:px-8 sm:py-14 md:px-12 lg:px-20 lg:py-20">

      <div className="mx-auto max-w-3xl text-center mb-12">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#B85B32] sm:text-sm">
        {Gallery[0].expsub}
      </p>

      <h2 className="font-serif text-3xl font-bold leading-tight text-[#171916] sm:text-4xl md:text-5xl">
        {Gallery[0].expmain}
      </h2>

      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#B85B32]" />
    </div>

  <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">

    {/* Nature */}
    <div className="group flex min-h-[230px] flex-col items-center justify-center rounded-2xl border border-[#D8DED9] bg-white px-6 py-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#D8663B] hover:shadow-xl">

      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#F7F4ED] text-3xl transition-transform duration-300 group-hover:scale-110">
        {Gallery[0].icon1}
      </div>

      <h3 className="font-serif text-2xl font-bold text-[#171916]">
        {Gallery[0].title1}
      </h3>

      <p className="mt-4 max-w-[280px] text-sm leading-7 text-[#43505A] sm:text-base">
        {Gallery[0].description1}
      </p>

    </div>


    {/* Heritage */}
    <div className="group flex min-h-[230px] flex-col items-center justify-center rounded-2xl border border-[#D8DED9] bg-white px-6 py-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#D8663B] hover:shadow-xl">

      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#F7F4ED] text-3xl transition-transform duration-300 group-hover:scale-110">
        {Gallery[0].icon2}
      </div>

      <h3 className="font-serif text-2xl font-bold text-[#171916]">
        {Gallery[0].title2}
      </h3>

      <p className="mt-4 max-w-[280px] text-sm leading-7 text-[#43505A] sm:text-base">
        {Gallery[0].description2}
      </p>

    </div>


    {/* Food */}
    <div className="group flex min-h-[230px] flex-col items-center justify-center rounded-2xl border border-[#D8DED9] bg-white px-6 py-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#D8663B] hover:shadow-xl">

      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#F7F4ED] text-3xl transition-transform duration-300 group-hover:scale-110">
        {Gallery[0].icon3}
      </div>

      <h3 className="font-serif text-2xl font-bold text-[#171916]">
        {Gallery[0].title3}
      </h3>

      <p className="mt-4 max-w-[280px] text-sm leading-7 text-[#43505A] sm:text-base">
        {Gallery[0].description3}
      </p>

    </div>


    {/* Family */}
    <div className="group flex min-h-[230px] flex-col items-center justify-center rounded-2xl border border-[#D8DED9] bg-white px-6 py-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#D8663B] hover:shadow-xl">

      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#F7F4ED] text-3xl transition-transform duration-300 group-hover:scale-110">
        {Gallery[0].icon4}
      </div>

      <h3 className="font-serif text-2xl font-bold text-[#171916]">
        {Gallery[0].title4}
      </h3>

      <p className="mt-4 max-w-[280px] text-sm leading-7 text-[#43505A] sm:text-base">
        {Gallery[0].description4}
      </p>

    </div>

  </div>

</section>

    {/* ================= FOOTER ================= */}
    <section>
    <Footer />
    </section>
    
    </div>
  );
}

export default gallery;
