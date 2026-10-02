import React from "react";

function Footer() {
  return (
    <footer className="bg-[#111512] text-white">

      {/* ================= FOOTER MAIN ================= */}
      <div className="mx-auto max-w-[1300px] px-6 py-14 sm:px-8 lg:px-10 lg:py-16">

        {/* ================= TOP SECTION ================= */}
        <div
          className="
            grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-10">

          {/* ================= BRAND ================= */}
          <div className="lg:pr-16">

            {/* Logo */}
            <div className="mb-6">
              <h2
                className="
                  font-serif text-4xl font-bold leading-none tracking-tight text-white">
                SALEM
              </h2>

              <p
                className="
                  mt-1 text-xs font-bold tracking-[0.25em] text-[#f5b51b]">
                THE MANGO CITY
              </p>
            </div>

            {/* Description */}
            <p
              className="max-w-[440px] text-sm leading-7 text-gray-400 sm:text-base">
              Nature · Heritage · Culture · Mango · Craft<br />
              Salem, Tamil Nadu, India.
            </p>

            {/* ================= SOCIAL ICONS ================= */}
            <div className="mt-8 flex items-center gap-4">

              {/* Instagram */}
              <a
                href="https://www.instagram.com/salem_page/?hl=en"
                aria-label="Instagram"
                className="
                  flex h-11 w-11 items-center justify-center rounded-full bg-[#242925] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#f5b51b] hover:text-black">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                  />

                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                  />

                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="
                  flex h-11 w-11 items-center justify-center rounded-full bg-[#242925] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#f5b51b] hover:text-black">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14 8h3V4h-3c-3.3 0-5 2-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9c0-.7.3-1 1-1z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="#"
                aria-label="YouTube"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  bg-[#242925]
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#f5b51b]
                  hover:text-black
                "
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.6 7.2a2.8 2.8 0 0 0-2-2C17.8 4.7 12 4.7 12 4.7s-5.8 0-7.6.5a2.8 2.8 0 0 0-2 2C2 9 2 12 2 12s0 3 .4 4.8a2.8 2.8 0 0 0 2 2c1.8.5 7.6.5 7.6.5s5.8 0 7.6-.5a2.8 2.8 0 0 0 2-2c.4-1.8.4-4.8.4-4.8s0-3-.4-4.8zM10 15.3V8.7l5.5 3.3-5.5 3.3z" />
                </svg>
              </a>

            </div>
          </div>


          {/* ================= EXPLORE ================= */}
          <FooterColumn
            title="Explore"
            links={[
              ["Home", "/"],
              ["About", "/about"],
              ["Destinations", "/explore"],
              ["Festivals", "/festivals"],
              ["Handcrafts", "/handicrafts"],
            ]}
          />


          {/* ================= DISCOVER ================= */}
          <FooterColumn
            title="Discover"
            links={[
              ["Yercaud", "/yercaud"],
              ["Mettur Dam", "/mettur-dam"],
              ["Sangagiri Fort", "/sangagiri-fort"],
              ["Sirpa Kadal", "/handcraft-topics/sirpakadal"],
              ["Salem Silk", "/handcraft-topics/salemsilk"],
            ]}
          />


          {/* ================= TRAVEL ================= */}
          <FooterColumn
            title="Travel"
            links={[
              ["Trip Planner", "/plan-my-trip"],
              ["Kiliyur Falls", "/kiliyur-falls"],
              ["1008 Shiva Temple", "/1008-shiva-temple"],
            ]}
          />

        </div>


        {/* ================= DIVIDER ================= */}
        <div className="mt-14 border-t border-white/10 pt-7">

          <div
            className="
              flex
              flex-col
              gap-4
              text-sm
              text-gray-500
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >

            {/* Copyright */}
            <p>
              © 2026 Salem – The Mango City. All rights reserved.
            </p>

            {/* Made With */}
            <p>
              Made with{" "}
              <span className="text-red-500">♥</span>{" "}
              for Salem, Tamil Nadu
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}


/* =========================================================
   FOOTER COLUMN COMPONENT
========================================================= */

function FooterColumn({ title, links }) {
  return (
    <div>

      <h3
        className="
          mb-6
          text-xs
          font-bold
          uppercase
          tracking-[0.12em]
          text-gray-500
        "
      >
        {title}
      </h3>

      <ul className="space-y-4">

        {links.map(([name, url]) => (
          <li key={name}>

            <a
              href={url}
              className="
                inline-block
                text-sm
                font-semibold
                text-gray-400
                transition-all
                duration-200
                hover:translate-x-1
                hover:text-white
              "
            >
              {name}
            </a>

          </li>
        ))}

      </ul>

    </div>
  );
}

export default Footer;