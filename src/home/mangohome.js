import React from "react";
import { Link } from "react-router-dom";

function MangoHeritage({ onExploreMango }) {

  const mangoes = [
    {
      id: 1,
      name: "Alphonso",
      description:
        "The king of mangoes — rich, creamy, intensely aromatic",
      season: "Apr – Jun",
    },
    {
      id: 2,
      name: "Neelam",
      description:
        "Sweet, fibre-free and distinctly fragrant with a long season",
      season: "May – Jul",
    },
    {
      id: 3,
      name: "Banganapalli",
      description:
        "Large, golden-yellow, mildly sweet — grown across Mango country",
      season: "Apr – May",
    },
    {
      id: 4,
      name: "Totapuri",
      description:
        "Totapuri mangoes (Kilimooku mango) are widely grown and sourced directly from farms in Salem, Tamil Nadu.",
      season: "Apr – Jul",
    },
  ];

  return (
    <section
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#063B2B]
        px-5
        py-20
        sm:px-8
        md:py-24
        lg:px-12
        lg:py-28
      "
    >

      {/* =========================================
          BACKGROUND DECORATION
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-20
        "
      >
        <div
          className="
            absolute
            -left-32
            top-20
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#0B5A42]
            blur-3xl
          "
        />

        <div
          className="
            absolute
            -right-40
            bottom-0
            h-[600px]
            w-[600px]
            rounded-full
            bg-[#0B5A42]
            blur-3xl
          "
        />
      </div>


      {/* =========================================
          MAIN CONTENT
      ========================================= */}

      <div className="relative z-10 mx-auto max-w-7xl">


        {/* =========================================
            HEADER
        ========================================= */}

        <div className="mx-auto max-w-4xl text-center">

          <p
            className="
              text-xs
              font-bold
              uppercase
              tracking-[0.4em]
              text-[#F6B719]
              sm:text-sm
            "
          >
            Agricultural Identity
          </p>


          <h1
            className="
              mt-8
              font-serif
              text-5xl
              font-bold
              uppercase
              leading-[0.9]
              tracking-tight
              text-white
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
            "
          >
            The Taste
            <br />
            Of Salem
          </h1>


          <h2
            className="
              mt-7
              font-serif
              text-3xl
              italic
              text-white/70
              sm:text-4xl
              md:text-5xl
            "
          >
            Mango Heritage
          </h2>


          <p
            className="
              mx-auto
              mt-7
              max-w-2xl
              text-sm
              leading-7
              text-white/65
              sm:text-base
              md:text-lg
            "
          >
            Discover the agricultural tradition and mango
            identity that make Salem a globally recognised
            mango-producing region.
          </p>

        </div>


        {/* =========================================
            MANGO CARDS
        ========================================= */}

        <div
          className="
            mt-16
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >

          {mangoes.map((mango) => (

            <article
              key={mango.id}
              className="
                group
                min-h-[300px]
                rounded-2xl
                border
                border-white/15
                bg-white/[0.07]
                p-7
                backdrop-blur-sm
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-[#F6B719]/40
                hover:bg-white/[0.10]
                hover:shadow-2xl
              "
            >

              {/* MANGO ICON */}

              <div
                className="
                  mb-7
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  text-5xl
                  transition-transform
                  duration-500
                  group-hover:scale-110
                  group-hover:rotate-3
                "
              >
                🥭
              </div>


              {/* NAME */}

              <h3
                className="
                  font-serif
                  text-2xl
                  font-bold
                  text-white
                "
              >
                {mango.name}
              </h3>


              {/* DESCRIPTION */}

              <p
                className="
                  mt-4
                  min-h-[70px]
                  text-[15px]
                  font-medium
                  leading-7
                  text-white/60
                "
              >
                {mango.description}
              </p>


              {/* SEASON */}

              <div
                className="
                  mt-5
                  text-sm
                  text-white/60
                "
              >
                <span
                  className="
                    font-bold
                    text-[#F6B719]
                  "
                >
                  Season:
                </span>{" "}
                {mango.season}
              </div>

            </article>

          ))}

        </div>


        {/* =========================================
            CTA
        ========================================= */}

        <div className="mt-14 flex justify-center">

          <Link to="mango-heritage"
            onClick={onExploreMango}
            className="
              group
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-[#F7B718]
              px-8
              py-4
              text-sm
              font-bold
              text-[#102E23]
              shadow-lg
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-[#FFC62E]
              hover:shadow-xl
              sm:px-10
              sm:py-4
              sm:text-base
            "
          >

            <span>
              Explore Mango Heritage
            </span>

            <span
              className="
                text-xl
                transition-transform
                duration-300
                group-hover:translate-x-2
              "
            >
              →
            </span>

          </Link>

        </div>

      </div>

    </section>
  );
}

export default MangoHeritage;