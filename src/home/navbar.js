import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Explore", path: "/explore" },
    { name: "Festivals", path: "/festivals" },
    { name: "Handcrafts", path: "/handicrafts" },
    { name: "Mango Heritage", path: "/mango-heritage" },
    { name: "Plan My Trip", path: "/plan-my-trip" },
  ];

  return (
    <nav className="w-full bg-[#faf5eb] border-b border-[#ddd4c4] shadow-sm sticky top-0 z-50">

      {/* ================= NAVBAR ================= */}
      <div className="h-[80px] sm:h-[90px] lg:h-[116px] px-5 sm:px-8 lg:px-10 flex items-center justify-between">

        {/* ================= LOGO ================= */}
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <div>
            <h1 className="text-[#173f2d] font-serif text-[28px] sm:text-[30px] lg:text-[34px] font-bold tracking-[-2px]">
              SALƎM
            </h1>

            <span className="block -mt-1 text-[#e79b21] text-[8px] sm:text-[9px] lg:text-[10px] font-semibold tracking-[2px] lg:tracking-[3px]">
              THE MANGO CITY
            </span>
          </div>
        </Link>

        {/* ================= DESKTOP MENU ================= */}
        <div className="hidden lg:flex items-center gap-2 xl:gap-3">

          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;

            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`
                  rounded-full
                  px-4
                  py-2.5
                  text-[15px]
                  xl:text-[16px]
                  font-semibold
                  transition-all
                  duration-300

                  ${
                    isActive
                      ? "bg-[#173f2d] text-white"
                      : "text-[#173f2d] hover:bg-[#173f2d]/10 hover:text-[#e79b21]"
                  }
                `}
              >
                {link.name}
              </Link>
            );
          })}

        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="flex items-center gap-3 sm:gap-5 lg:gap-6">

          {/* ================= EXPLORE BUTTON ================= */}
          <Link
            to="/explore"
            className="
              hidden sm:block bg-[#f6a51b] text-white px-5 lg:px-7 py-3 lg:py-4 rounded-full text-sm lg:text-base font-bold hover:bg-[#e5940c] transition duration-300 whitespace-nowrap">
            Explore Salem
          </Link>

          {/* ================= HAMBURGER ================= */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-[#173f2d] p-1"
          >
            {menuOpen ? (
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="5" y1="5" x2="19" y2="19" />
                <line x1="19" y1="5" x2="5" y2="19" />
              </svg>
            ) : (
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>

        </div>
      </div>

      {/* ================= MOBILE / TABLET MENU ================= */}
      {menuOpen && (
        <div className="lg:hidden bg-[#faf5eb] border-t border-[#ddd4c4] px-5 sm:px-8 py-5">

          <div className="flex flex-col">

            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`
                    py-3
                    px-4
                    rounded-lg
                    font-semibold
                    border-b border-[#e5ddcf]
                    transition-all
                    duration-300

                    ${
                      isActive
                        ? "bg-[#173f2d] text-white"
                        : "text-[#173f2d] hover:text-[#e79b21]"
                    }
                  `}
                >
                  {link.name}
                </Link>
              );
            })}

          </div>

        </div>
      )}

    </nav>
  );
}

export default Navbar;