import about from "./about.json";
import Footer from "../home/footer";



function abouthero() {
  return (
    <div>
     <section className="relative h-[720px] w-full overflow-hidden">

  {/* Hero Image */}
  <img
    src={about[0].imghero}
    alt="About Salem"
    className=" absolute inset-0 h-full  w-full  object-cover animate-[fade1_15s_infinite]"/>

  {/* text on the image */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* About Text */}
  <div className="absolute inset-0 flex items-center justify-center px-6 text-center ">

    <div className="max-w-4xl text-white">

      {/*Descover */}
      <p className=" mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#f6b51b] sm:text-base">
       {about[0].abouttext1}
      </p>

      {/*About Salem*/}
      <h1 className="font-serif italic text-5xl font-bold leading-tight sm:text-6xl md:text-7xl lg:text-8xl ">
        {about[0].abouttext2}
      </h1>

      {/* Description */}
      <p className=" mx-auto mt-6 max-w-2xl text-base leading-7 text-white/90 sm:text-lg md:text-xl">
      {about[0].abouttext3}
      </p>
    </div>

  </div>

</section>
    {/*salem history-1*/}
<section className="bg-[#FAF7F0] px-5 py-16 sm:px-10 md:py-20 lg:px-20">

  {/* Section Heading */}
  <div className="mx-auto mb-12 max-w-4xl text-center sm:mb-16">
   <p className="mb-4 text-[11px] font-semibold uppercase tracking-[3px] text-[#b85b32] sm:text-xs md:text-sm md:tracking-[5px]">
      {about[0].our}
    </p>
    <h2 className="font-serif text-4xl font-bold leading-tight text-[#111b16] sm:text-5xl md:text-6xl lg:text-[54px] xl:text-[62px]">
      {about[0].history}
    </h2>
  </div>


  {/* History Content */}
  <div className=" mx-auto grid max-w-6xl  grid-cols-1 items-center gap-8 rounded-[30px] bg-white p-5 shadow-sm sm:p-7 md:grid-cols-2 md:gap-8 lg:p-8 ">

    {/* Image */}
    <div className="overflow-hidden rounded-[24px]">

      <img
        src={about[0].img1}
        alt="Stone Age history of Salem"
        className=" h-[280px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[350px] md:h-[420px] lg:h-[360px]"/>

    </div>
    {/* Content */}
    <div className="px-2 py-4 sm:px-4 md:px-6">
     <h3 className=" mt-5 font-serif text-3xl font-bold leading-tight text-[#111b16] sm:text-4xl ">{about[0].head1}</h3>
      <p className=" mt-5 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">{about[0].p1} </p>
      {/* Small decorative line */}
      <div className="mt-7 h-1 w-16 rounded-full bg-[#e79b21]"></div>
    </div>


    {/*history-2*/}
      {/* Image */}
    <div className="overflow-hidden rounded-[24px]">

      <img
        src={about[0].img2}
        alt="Stone Age history of Salem"
        className=" h-[280px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[350px] md:h-[420px] lg:h-[360px]"/>

    </div>
    {/* Content */}
    <div className="px-2 py-4 sm:px-4 md:px-6">
    <h3 className=" mt-5 font-serif text-3xl font-bold leading-tight text-[#111b16] sm:text-4xl ">{about[0].head2}</h3>
    <p className=" mt-5 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">{about[0].p2} </p>
    {/* Small decorative line */}
    <div className="mt-7 h-1 w-16 rounded-full bg-[#e79b21]"></div>
    </div>

    {/*history-3*/}
      {/* Image */}
    <div className="overflow-hidden rounded-[24px]">

      <img
        src={about[0].img3}
        alt="Stone Age history of Salem"
        className=" h-[280px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[350px] md:h-[420px] lg:h-[360px]"/>

    </div>
    {/* Content */}
    <div className="px-2 py-4 sm:px-4 md:px-6">
    <h3 className=" mt-5 font-serif text-3xl font-bold leading-tight text-[#111b16] sm:text-4xl ">{about[0].head3}</h3>
    <p className=" mt-5 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">{about[0].p3} </p>
    {/* Small decorative line */}
    <div className="mt-7 h-1 w-16 rounded-full bg-[#e79b21]"></div>
    </div>

     {/*history-4*/}
      {/* Image */}
    <div className="overflow-hidden rounded-[24px]">

      <img
        src={about[0].img4}
        alt="Stone Age history of Salem"
        className=" h-[280px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[350px] md:h-[420px] lg:h-[360px]"/>

    </div>
    {/* Content */}
    <div className="px-2 py-4 sm:px-4 md:px-6">
    <h3 className=" mt-5 font-serif text-3xl font-bold leading-tight text-[#111b16] sm:text-4xl ">{about[0].head4}</h3>
    <p className=" mt-5 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">{about[0].p4} </p>
    {/* Small decorative line */}
    <div className="mt-7 h-1 w-16 rounded-full bg-[#e79b21]"></div>
    </div>

     {/*history-5*/}
      {/* Image */}
    <div className="overflow-hidden rounded-[24px]">

      <img
        src={about[0].img5}
        alt="Stone Age history of Salem"
        className=" h-[280px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[350px] md:h-[420px] lg:h-[360px]"/>

    </div>
    {/* Content */}
    <div className="px-2 py-4 sm:px-4 md:px-6">
    <h3 className=" mt-5 font-serif text-3xl font-bold leading-tight text-[#111b16] sm:text-4xl ">{about[0].head5}</h3>
    <p className=" mt-5 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">{about[0].p5} </p>
    {/* Small decorative line */}
    <div className="mt-7 h-1 w-16 rounded-full bg-[#e79b21]"></div>
    </div>

     {/*history-6*/}
      {/* Image */}
    <div className="overflow-hidden rounded-[24px]">

      <img
        src={about[0].img6}
        alt="Stone Age history of Salem"
        className=" h-[280px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[350px] md:h-[420px] lg:h-[360px]"/>

    </div>
    {/* Content */}
    <div className="px-2 py-4 sm:px-4 md:px-6">
    <h3 className=" mt-5 font-serif text-3xl font-bold leading-tight text-[#111b16] sm:text-4xl ">{about[0].head6}</h3>
    <p className=" mt-5 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">{about[0].p6} </p>
    {/* Small decorative line */}
    <div className="mt-7 h-1 w-16 rounded-full bg-[#e79b21]"></div>
    </div>

     {/*history-7*/}
      {/* Image */}
    <div className="overflow-hidden rounded-[24px]">

      <img
        src={about[0].img7}
        alt="Stone Age history of Salem"
        className=" h-[280px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[350px] md:h-[420px] lg:h-[360px]"/>

    </div>
    {/* Content */}
    <div className="px-2 py-4 sm:px-4 md:px-6">
    <h3 className=" mt-5 font-serif text-3xl font-bold leading-tight text-[#111b16] sm:text-4xl ">{about[0].head7}</h3>
    <p className=" mt-5 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">{about[0].p7} </p>
    {/* Small decorative line */}
    <div className="mt-7 h-1 w-16 rounded-full bg-[#e79b21]"></div>
    </div>

  </div>
</section>

<section className="bg-[#e8f0e9] px-5 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-24">

  {/*  INTRO */}
  <div className="mx-auto max-w-4xl text-center">

    <p className=" font-serif text-lg italic leading-8 text-[#34463b] sm:text-xl md:text-2xl md:leading-9"> {about[0].ap1} </p>

  </div>


  {/*  Grid-1 */}
  <div className=" mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 ">

    {/*  CARD 1 */}
    <div className="group rounded-[24px] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg sm:p-8">
      {/* Icon */}
      <div className=" mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff4d9] text-3xl transition-transform duration-300 group-hover:scale-110"> 🥭 </div>
      {/* Title */}
      <h3 className="font-serif text-2xl font-bold leading-tight text-[#111b16] sm:text-3xl"> {about[0].aph1}</h3>
      {/* Description */}
      <p className=" mt-4 text-sm leading-7 text-gray-600 sm:text-base"> {about[0].apt1}</p>

    </div>
  {/*  CARD 2 */}
    <div className="group rounded-[24px] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg sm:p-8">
      {/* Icon */}
      <div className=" mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff4d9] text-3xl transition-transform duration-300 group-hover:scale-110"> ⛰️ </div>
      {/* Title */}
      <h3 className="font-serif text-2xl font-bold leading-tight text-[#111b16] sm:text-3xl"> {about[0].aph2}</h3>
      {/* Description */}
      <p className=" mt-4 text-sm leading-7 text-gray-600 sm:text-base"> {about[0].apt2}</p>

    </div>
    {/*  CARD 3 */}
    <div className="group rounded-[24px] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg sm:p-8">
      {/* Icon */}
      <div className=" mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff4d9] text-3xl transition-transform duration-300 group-hover:scale-110"> ⚙️ </div>
      {/* Title */}
      <h3 className="font-serif text-2xl font-bold leading-tight text-[#111b16] sm:text-3xl"> {about[0].aph3}</h3>
      {/* Description */}
      <p className=" mt-4 text-sm leading-7 text-gray-600 sm:text-base"> {about[0].apt3}</p>
      
    </div>
     {/*  CARD 4 */}
    <div className="group rounded-[24px] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg sm:p-8">
      {/* Icon */}
      <div className=" mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff4d9] text-3xl transition-transform duration-300 group-hover:scale-110"> 🏛️ </div>
      {/* Title */}
      <h3 className="font-serif text-2xl font-bold leading-tight text-[#111b16] sm:text-3xl"> {about[0].aph4}</h3>
      {/* Description */}
      <p className=" mt-4 text-sm leading-7 text-gray-600 sm:text-base"> {about[0].apt4}</p>
      
    </div>
     {/*  CARD 5 */}
    <div className="group rounded-[24px] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg sm:p-8">
      {/* Icon */}
      <div className=" mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff4d9] text-3xl transition-transform duration-300 group-hover:scale-110"> 🎭 </div>
      {/* Title */}
      <h3 className="font-serif text-2xl font-bold leading-tight text-[#111b16] sm:text-3xl"> {about[0].aph5}</h3>
      {/* Description */}
      <p className=" mt-4 text-sm leading-7 text-gray-600 sm:text-base"> {about[0].apt5}</p>
    </div>
        {/*  CARD 6 */}
    <div className="group rounded-[24px] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg sm:p-8">
      {/* Icon */}
      <div className=" mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff4d9] text-3xl transition-transform duration-300 group-hover:scale-110"> 🌊 </div>
      {/* Title */}
      <h3 className="font-serif text-2xl font-bold leading-tight text-[#111b16] sm:text-3xl"> {about[0].aph6}</h3>
      {/* Description */}
      <p className=" mt-4 text-sm leading-7 text-gray-600 sm:text-base"> {about[0].apt6}</p>
    </div>

  </div>
</section>
<section className="bg-[#FAF7F0] px-5 py-16 sm:px-8 md:py-20 lg:px-16 xl:px-20">

  <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">

    {/* ================= IMAGE ================= */}
    <div className="overflow-hidden rounded-[22px]">
      <img
        src={about[0].lastimg}
        alt="Temple in Salem"
        className="h-[280px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[360px] md:h-[420px] lg:h-[400px] xl:h-[430px]"/>
    </div>


    {/* ================= CONTENT ================= */}
    <div>

      {/* Small Heading */}
      <p className="mb-5 text-[11px] font-semibold uppercase tracking-[4px] text-[#B85B32] sm:text-xs">
        LOCATION
      </p>


      {/* Main Heading */}
      <h2 className="mb-7 font-serif text-4xl font-bold leading-tight text-[#111B16] sm:text-5xl">
        How to Reach Salem
      </h2>


      {/* ================= ROAD ================= */}
      <div className="mb-4 flex gap-5 rounded-[20px] border border-[#dddcd6] bg-white p-5 sm:p-6">

        {/* Icon */}
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0F3D2E] text-white">
          🚗
        </div>

        {/* Text */}
        <div>
          <h3 className="mb-1 text-lg font-bold text-[#222]">
            By Road
          </h3>

          <p className="text-base leading-6 text-[#608071] sm:text-lg sm:leading-7">
            NH 44 (Chennai–Bengaluru) passes through Salem.
            Well connected to Chennai (340 km), Bengaluru
            (220 km) and Coimbatore (160 km).
          </p>
        </div>

      </div>


      {/* ================= TRAIN ================= */}
      <div className="mb-4 flex gap-5 rounded-[20px] border border-[#dddcd6] bg-white p-5 sm:p-6">

        {/* Icon */}
        <div className="flex  h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0F3D2E] text-white">
          🛤️
        </div>

        {/* Text */}
        <div>
          <h3 className="mb-1 text-lg font-bold text-[#222]">
            By Train
          </h3>

          <p className="text-base leading-6 text-[#608071] sm:text-lg sm:leading-7">
            Salem Junction is a major railway hub with direct
            trains to Chennai, Bengaluru, Coimbatore, Erode
            and beyond.
          </p>
        </div>

      </div>


      {/* ================= AIR ================= */}
      <div className=" flex gap-5 rounded-[20px] border border-[#dddcd6] bg-white p-5 sm:p-6">

        {/* Icon */}
        <div className=" flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0F3D2E] text-white">
          ✈️
        </div>

        {/* Text */}
        <div>
          <h3 className="mb-1 text-lg font-bold text-[#222]">
            By Air
          </h3>

          <p className=" text-base leading-6 text-[#608071] sm:text-lg sm:leading-7">
            Salem Airport has limited connections. Nearest
            major airports: Coimbatore (160 km) and Chennai
            (340 km).
          </p>
        </div>

      </div>

    </div>

  </div>

</section>
<section>
  <Footer/>
</section>



    </div>
  );
}

export default abouthero;
