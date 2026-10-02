import React from "react";
import festival from "./festival.json";
import Festcard from "./festcard";
import Footer from "../home/footer";


function Fest() {
  return (
    <div>
      <section className="relative h-[720px] w-full overflow-hidden">

        {/* Hero Image */}
        <img
          src={festival[0].imghero}
          alt="Salem Festivals"
          className="absolute inset-0 h-full w-full object-cover animate-[fade1_15s_infinite]"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Hero Text */}
        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
          <div className="max-w-4xl text-white">

            {/* Small Heading */}
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#f6b51b] sm:text-base">
              {festival[0].festext1}
            </p>

            {/* Main Heading */}
            <h1 className="font-serif italic text-5xl font-bold leading-tight sm:text-6xl md:text-7xl lg:text-8xl">
              {festival[0].festext2}
            </h1>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/90 sm:text-lg md:text-xl">
              {festival[0].festext3}
            </p>

          </div>
        </div>

      </section>


      {/*festivals card*/}
      <section>
      <Festcard/>
      </section>

      {/*footer*/}
      <section>
         <Footer/>
      </section>
    </div>
  );
}

export default Fest;