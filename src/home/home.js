import home from "./home.json";
import carouselimg from "./yercaudcar.jpg";
import HomeExpo from "./homeexpo"
import Homefest from "./homefest"
import Homecraft from "./homecraft"
import MangoHeritage from "./mangohome";
import Homegallery from "./homegallery";
import Footer from "./footer";
import { Link, useLocation } from "react-router-dom";

function Home() {
  return (
    <div>
      
      <section className="relative min-h-screen w-full overflow-hidden">

      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0">

        {/* Image 1 */}
        <img
          src={carouselimg}
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
            animate-[fade1_15s_infinite]"
            alt="Salem"/>

        {/* Image 2 */}
        <img
          src="/images/salem2.jpg"
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
            opacity-0
            animate-[fade2_15s_infinite]"
          alt="Salem hills"/>

        {/* Image 3 */}
        <img
          src="/images/salem3.jpg"
          className=" absolute inset-0 w-full h-full  object-cover  opacity-0 animate-[fade3_15s_infinite]"
           alt="Salem nature"/>

      </div>


      {/* ================= DARK OVERLAY ================= */}

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#09251f]"></div>


      {/* ================= CONTENT ================= */}

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-5">

        {/* Small Heading */}

        <p className="text-[#f6b52b] text-xs sm:text-sm uppercase tracking-[5px] font-semibold mb-5">
          Discover Salem
        </p>


        {/* Main Heading */}

        <h1 className="text-white font-serif font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[100px] leading-[0.9]">

          The Mango City

          <br />

          <span className="text-[#f6b52b] italic">
            of Tamil Nadu
          </span>

        </h1>


        {/* Description */}

        <p className="max-w-3xl mt-7 text-white/90 text-sm sm:text-base md:text-lg lg:text-xl leading-8">
          Discover breathtaking hills, historic forts, sacred temples,
          vibrant festivals and timeless handicrafts in the heart of Tamil Nadu.
        </p>


        {/* Buttons */}

        <div className="flex flex-col sm:flex-row gap-4 mt-8">

          <Link to="/explore" className="
            bg-[#f6a51b]
            text-white
            px-8
            py-4
            rounded-full
            font-bold
            hover:bg-[#e5940c]
            transition
            hover:shadow-lg shadow-[#f6a51b]/50 ">
            Explore Salem
          </Link>

          <Link to="/plan-my-trip" className="
            border
            border-white/40
            text-white
            px-8
            py-4
            rounded-full
            font-bold
            hover:bg-white
            hover:text-[#173f2d]
            transition ">
            Plan My Trip
          </Link>

        </div>


        {/* ================= CATEGORY CARDS ================= */}

        <div className="
          w-full
          max-w-2xl
          mt-14
          grid
          grid-cols-1
          sm:grid-cols-3
          rounded-2xl
          overflow-hidden
          border
          border-white/20
          bg-black/20">

          {/* Nature */}

          <div className="
            p-5
            text-center
            border-b
            sm:border-b-0
            sm:border-r
            border-white/15
            hover:bg-white/10">

            <div className="text-2xl">
              🌿
            </div>

            <h3 className="text-white font-serif text-lg font-bold">
              Nature
            </h3>

            <p className="text-white/50 text-[10px] tracking-[2px] mt-2">
              HILLS • FALLS • PARKS
            </p>

          </div>


          {/* Heritage */}

          <div className="
            p-5
            text-center
            border-b
            sm:border-b-0
            sm:border-r
            border-white/15
            hover:bg-white/10">

            <div className="text-2xl">
              🏛️
            </div>

            <h3 className="text-white font-serif text-lg font-bold">
              Heritage
            </h3>

            <p className="text-white/50 text-[10px] tracking-[2px] mt-2">
              FORTS • TEMPLES • HISTORY
            </p>

          </div>


          {/* Culture */}

          <div className="p-5 text-center
            hover:bg-white/10">

            <div className="text-2xl">
              ❤️
            </div>

            <h3 className="text-white font-serif text-lg font-bold">
              Culture
            </h3>

            <p className="text-white/50 text-[10px] tracking-[2px] mt-2">
              FESTIVALS • CRAFTS • TRADITIONS
            </p>

          </div>

        </div>
      </div>

    </section>
    <div className="bg-[#FAF7F0] py-15 px-5 sm:px-10 lg:px-20"> 
        <h1 className="text bg-[#FAF7F0]-[#b85b32] text-[11px] sm:text-xs md:text-sm font-semibold tracking-[3px] sm:tracking-[4px] md:tracking-[5px] uppercase mb-4 sm:mb-5 md:mb-6 text-center">{home[0].header}</h1>
        <p className="text-[#111b16] font-serif font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[54px] xl:text-[62px] leading-[1.05] text-center">{home[0].content}</p>
    
    {/*grid*/ }

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 p-4 px-10 sm:px-20 lg:px-40  py-15"> 
        
        <div className="border border-gray-300 rounded-lg p-4 shadow-lg transition-all duration-300 hover:scale-105 bg-white">
          <p className="text-4xl font-bold text-center font-serif">🥭</p>
          <p className="text-2xl font-bold text-center font-serif ">{home[0].num1}</p>
          <p className="text-center font-bold">{home[0].title1}</p>
          <p className="text-center text-sm text-gray-500">{home[0].subtitle1}</p>
        </div>
        <div className="border border-gray-300 rounded-lg p-4 shadow-lg transition-all duration-300 hover:scale-105 bg-white">
          <p className="text-4xl font-bold text-center font-serif">⛰️</p>
          <p className="text-2xl font-bold text-center font-serif">{home[0].num2}</p>
          <p className="text-center font-bold">{home[0].title2}</p>
          <p className="text-center text-sm text-gray-500">{home[0].subtitle2}</p>
        </div>
        <div className="border border-gray-300 rounded-lg p-4 shadow-lg transition-all duration-300 hover:scale-105 bg-white">
          <p className="text-4xl font-bold text-center font-serif">🏛️</p>
          <p className="text-2xl font-bold text-center font-serif">{home[0].num3}</p>
          <p className="text-center font-bold">{home[0].title3}</p>
          <p className="text-center text-sm text-gray-500">{home[0].subtitle3}</p>
        </div>
        <div className="border border-gray-300 rounded-lg p-4 shadow-lg transition-all duration-300 hover:scale-105 bg-white">
          <p className="text-4xl font-bold text-center font-serif">🎨</p>
          <p className="text-2xl font-bold text-center font-serif">{home[0].num4}</p>
          <p className="text-center font-bold">{home[0].title4}</p>
          <p className="text-center text-sm text-gray-500">{home[0].subtitle4}</p>
        </div>
        <div className="border border-gray-300 rounded-lg p-4 shadow-lg transition-all duration-300 hover:scale-105 bg-white">
          <p className="text-4xl font-bold text-center font-serif">🏭</p>
          <p className="text-2xl font-bold text-center font-serif">{home[0].num5}</p>
          <p className="text-center font-bold">{home[0].title5}</p>
          <p className="text-center text-sm text-gray-500">{home[0].subtitle5}</p>
        </div>
      </section>
    </div>
    {/* ================= ABOUT SALEM ================= */}


 <section className="bg-[#e8f0e9] py-12 sm:py-16 md:py-20 lg:py-24">

  <div className=" max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">

    <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">


      {/* ================================================= */}
      {/* LEFT SIDE - IMAGE COLLAGE */}
      {/* ================================================= */}

      <div className="grid grid-cols-2 gap-3 sm:gap-4 h-[420px] sm:h-[500px] md:h-[550px] lg:h-[600px] w-full">


        {/* BIG IMAGE */}

        <div className="row-span-2 overflow-hidden rounded-2xl sm:rounded-[20px] group">

          <img
            src={home[0].img1}
            alt="Yercaud Hills"
            className=" w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>

        </div>


        {/* TEMPLE IMAGE */}

        <div className="overflow-hidden rounded-2xl sm:rounded-[20px] group">

          <img
            src={home[0].img2}
            alt="Salem Temple"
            className=" w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />

        </div>


        {/* MANGO IMAGE */}

        <div className=" overflow-hidden rounded-2xl sm:rounded-[20px] group">

          <img
            src={home[0].img3}
            alt="Mango Tree"
            className=" w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 "/>

        </div>

      </div>


      {/* ================================================= */}
      {/* RIGHT SIDE - CONTENT */}
      {/* ================================================= */}

      <div className="w-full">


        {/* SMALL TITLE */}

        <p className="text-[#b85b32] text-[11px] sm:text-xs md:text-sm font-semibold tracking-[3px] sm:tracking-[4px] md:tracking-[5px] uppercase mb-4 sm:mb-5 md:mb-6">
          Discover Salem
        </p>


        {/* MAIN HEADING */}

        <h1 className=" text-[#111b16] font-serif font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[54px] xl:text-[62px] leading-[1.05] ">
          {home[0].heading}
        </h1>


        {/* PARAGRAPH 1 */}

        <p className="mt-6 sm:mt-7 md:mt-8 text-[#52716b] text-sm sm:text-base md:text-lg leading-7 md:leading-8 ">
          {home[0].paragraph1}
        </p>


        {/* PARAGRAPH 2 */}

        <p className=" mt-4 sm:mt-5 text-[#52716b] text-sm sm:text-base md:text-lg leading-7 md:leading-8 ">
          {home[0].paragraph2}
        </p>

        {/* ================================================= */}
        {/* LINK */}
        {/* ================================================= */}

        <button
          className=" mt-8 sm:mt-9 md:mt-10 text-[#10251d] font-bold text-sm sm:text-base inline-flex items-center gap-2 sm:gap-3 group " >

          <Link to="/about" className="group-hover:text-[#b85b32] transition-colors duration-300 ">
            Discover Salem's Story
          </Link>

          <span className=" text-lg sm:text-xl transition-transform duration-300 group-hover:translate-x-2">
            →
          </span>

        </button>

      </div>

    </div>

  </div>

</section>
<section className="bg-[#FAF7F0] py-12 sm:py-16 md:py-20 lg:py-6 px-4 sm:px-6 md:px-8 lg:px-10"> 

<p className="text-[#b85b32] text-[11px] sm:text-xs md:text-sm font-semibold tracking-[3px] sm:tracking-[4px] md:tracking-[5px] uppercase mb-4 sm:mb-5 md:mb-6 text-center">{home[0].heading2}</p>
<p className="text-center  text-[#111b16] font-serif font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[54px] xl:text-[62px] leading-[1.05]">{home[0].paragraph3}</p>
<p className="text-center text-[#52716b] text-sm sm:text-base md:text-lg leading-7 md:leading-8 py-4">{home[0].paragraph4}</p>
<HomeExpo />
</section>

      {/*home fest*/}
        <section>
        
        <Homefest/>
        </section>

        {/*home craft*/}
        <section> 
        <Homecraft/>

        </section>

      {/*mango home*/}

        <section>
      <MangoHeritage/>
        </section>


        {/*home gallery*/}
        <section>
       {/*---- <Homegallery/> -----*/}
        </section>


        {/*footer*/}
        <section>
        <Footer/>
        </section>

      
    </div>
  );
}

export default Home;