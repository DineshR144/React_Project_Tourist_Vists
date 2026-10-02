import MangoHeritage from "../mango/mango.json";
import Footer from "../home/footer";

function mango() {
  return (
    <div>
            {/* ================= HERO SECTION ================= */}
      <section className="relative h-[600px] w-full overflow-hidden sm:h-[650px] lg:h-[720px]">

        {/* Hero Image */}
        <img
          src={MangoHeritage[0].imghero}
          alt="Mango Handicrafts"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
          <div className="max-w-4xl text-white">

            {/* Small Heading */}
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[#f6b51b] sm:text-base">
              {MangoHeritage[0].festext1}
            </p>

            {/* Main Heading */}
            <h1 className="font-serif text-4xl font-bold italic leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
              {MangoHeritage[0].festext2}
            </h1>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/90 sm:text-lg md:text-xl">
              {MangoHeritage[0].festext3}
            </p>

          </div>
        </div>
      </section>

 <section className="bg-[#FAF7F0] px-5 py-16 sm:px-8 md:px-12 lg:px-20 lg:py-24">

  {/* ================= HEADING ================= */}
  <div className="mx-auto max-w-7xl">

    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A85D32] sm:text-base md:text-lg">
      {MangoHeritage[0].subhead}
    </p>

    <h2 className="mt-4 max-w-4xl font-serif text-4xl font-bold leading-tight text-[#171916] sm:text-5xl md:text-6xl">
      {MangoHeritage[0].mainhead}
    </h2>

  </div>


  {/* ================= CONTENT ================= */}
  <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">

    {/* ================= TEXT ================= */}
    <div className="max-w-2xl">

      <p className="text-base leading-7 text-[#526B68] sm:text-lg sm:leading-8">
        {MangoHeritage[0].p1}
      </p>

      <p className="mt-6 text-base leading-7 text-[#526B68] sm:text-lg sm:leading-8">
        {MangoHeritage[0].p2}
      </p>

      <p className="mt-6 text-base leading-7 text-[#526B68] sm:text-lg sm:leading-8">
        {MangoHeritage[0].p3}
      </p>

    </div>


    {/* ================= IMAGE GRID ================= */}
    <div className="grid grid-cols-2 gap-4">

      {/* Image 1 */}
      <div className="overflow-hidden rounded-3xl">
        <img
          src={MangoHeritage[0].img1}
          alt="Salem mango heritage"
          className="h-52 w-full object-cover transition-transform duration-500 hover:scale-105 sm:h-64 md:h-72 lg:h-64"/>
      </div>


      {/* Image 2 */}
      <div className="overflow-hidden rounded-3xl">
        <img
          src={MangoHeritage[0].img2}
          alt="Mango cultivation in Salem"
          className="h-52 w-full object-cover transition-transform duration-500 hover:scale-105 sm:h-64 md:h-72 lg:h-64"/>
      </div>


      {/* Image 3 */}
      <div className="col-span-2 overflow-hidden rounded-3xl">

        <img
          src={MangoHeritage[0].img3}
          alt="Salem mango orchard"
          className="h-44 w-full object-cover transition-transform duration-500 hover:scale-105 sm:h-52 md:h-60 lg:h-56"/>

      </div>

    </div>

  </div>
</section>

{/* ================= MANGO VARIETIES ================= */}
<section className="bg-[#e8f0e9] px-5 py-16 sm:px-8 md:px-12 lg:px-20 lg:py-20">

  {/* Section Heading */}
  <div className="mx-auto max-w-4xl text-center">

    <h2 className="font-serif text-3xl font-bold text-[#171916] sm:text-4xl md:text-5xl">
      {MangoHeritage[0].heading}
    </h2>

    <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#526B68] sm:text-base">
      Explore some of the popular mango varieties associated with Salem
      and discover their unique flavours and characteristics.
    </p>

  </div>


  {/* Mango Cards */}
  <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">


    {/* ================= ALPHONSO ================= */}
    <div className="group overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      <div className="h-60 overflow-hidden">
        <img
          src={MangoHeritage[0].varietiesimg1}
          alt={MangoHeritage[0].varieties1}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">

        <h3 className="font-serif text-2xl font-bold text-[#171916]">
          {MangoHeritage[0].varieties1}
        </h3>


        <p className="mt-3 text-sm leading-7 text-[#526B68]">
          {MangoHeritage[0].mangocontent1}
        </p>

         {/* Season */}
        <p className="mt-2 text-sm font-semibold text-[#A85D32]">
          Season: <span className="font-normal text-[#526B68]">Apr – Jun</span>
        </p>

      </div>

    </div>


    {/* ================= BANGANAPALLI ================= */}
    <div className="group overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      <div className="h-60 overflow-hidden">
        <img
          src={MangoHeritage[0].varietiesimg2}
          alt={MangoHeritage[0].varieties2}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">

        <h3 className="font-serif text-2xl font-bold text-[#171916]">
          {MangoHeritage[0].varieties2}
        </h3>


        <p className="mt-3 text-sm leading-7 text-[#526B68]">
          {MangoHeritage[0].mangocontent2}
        </p>

         {/* Season */}
        <p className="mt-2 text-sm font-semibold text-[#A85D32]">
          Season: <span className="font-normal text-[#526B68]">Apr – May</span>
        </p>

      </div>

    </div>


    {/* ================= NEELAM ================= */}
    <div className="group overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      <div className="h-60 overflow-hidden">
        <img
          src={MangoHeritage[0].varietiesimg3}
          alt={MangoHeritage[0].varieties3}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">

        <h3 className="font-serif text-2xl font-bold text-[#171916]">
          {MangoHeritage[0].varieties3}
        </h3>


        <p className="mt-3 text-sm leading-7 text-[#526B68]">
          {MangoHeritage[0].mangocontent3}
        </p>

          {/* Season */}
        <p className="mt-2 text-sm font-semibold text-[#A85D32]">
          Season: <span className="font-normal text-[#526B68]">May – Jul</span>
        </p>

      </div>

    </div>


    {/* ================= TOTAPURI ================= */}
    <div className="group overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      <div className="h-60 overflow-hidden">
        <img
          src={MangoHeritage[0].varietiesimg4}
          alt={MangoHeritage[0].varieties4}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">

        <h3 className="font-serif text-2xl font-bold text-[#171916]">
          {MangoHeritage[0].varieties4}
        </h3>


        <p className="mt-3 text-sm leading-7 text-[#526B68]">
          {MangoHeritage[0].mangocontent4}
        </p>

          {/* Season */}
        <p className="mt-2 text-sm font-semibold text-[#A85D32]">
          Season: <span className="font-normal text-[#526B68]">Apr – Jul</span>
        </p>

      </div>

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

export default mango;
