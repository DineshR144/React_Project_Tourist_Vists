import React from "react";
import explore from "./explore.json";
import Exploredest from "./exploreplace";
import Footer from "../home/footer";


function Explore() {
  return (
    <div>
      
    <section className="relative h-[720px] w-full overflow-hidden">

      {/* Hero Image */}
      <img
        src={explore[0].imghero}
        alt="Salem"
        className="absolute inset-0 h-full w-full object-cover animate-[fade1_15s_infinite]"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Text */}
      <div className="absolute inset-0 flex items-center justify-center px-6 text-center">

        <div className="max-w-4xl text-white">

          {/* Small Heading */}
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#f6b51b] sm:text-base">
            {explore[0].exploretext1}
          </p>

          {/* Main Heading */}
          <h1 className="font-serif italic text-5xl font-bold leading-tight sm:text-6xl md:text-7xl lg:text-8xl">
            {explore[0].exploretext2}
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/90 sm:text-lg md:text-xl">
            {explore[0].exploretext3}
          </p>

        </div>

      </div>
    </section>


    {/*explore destinations*/}
    <section>
    <Exploredest/>
    </section>

    {/*footer*/}
     <section>
       <Footer/>
    </section>


    </div>
  );
}

export default Explore;