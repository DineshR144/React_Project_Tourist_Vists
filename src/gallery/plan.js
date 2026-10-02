import React, { useState } from "react";

function Plan() {

  const [days, setDays] = useState(1);

  const itinerary = {

    1: [
      {
        time: "Morning",
        place: "Yercaud",
        text: "Start your Salem journey with the scenic hills and viewpoints of Yercaud."
      },
      {
        time: "Afternoon",
        place: "Yercaud Lake",
        text: "Spend a relaxing afternoon around the lake and enjoy the cool hill climate."
      }
    ],

    2: [
      {
        time: "Morning",
        place: "Yercaud",
        text: "Explore the beautiful hills, viewpoints and peaceful surroundings of Yercaud."
      },
      {
        time: "Afternoon",
        place: "Yercaud Lake",
        text: "Enjoy boating and spend a relaxing afternoon near the lake."
      },
      {
        time: "Evening",
        place: "Lady's Seat",
        text: "Watch the sunset and enjoy the panoramic view of Salem."
      }
    ],

    3: [
      {
        time: "Morning",
        place: "Mettur Dam",
        text: "Visit Mettur Dam and enjoy the beautiful surrounding landscapes."
      },
      {
        time: "Afternoon",
        place: "Sankagiri Fort",
        text: "Explore the history and architecture of the historic Sankagiri Fort."
      },
      {
        time: "Evening",
        place: "Salem City",
        text: "Explore Salem city and enjoy local food and shopping."
      }
    ],

    4: [
      {
        time: "Morning",
        place: "Yercaud Hills",
        text: "Begin your journey with the scenic beauty of Yercaud."
      },
      {
        time: "Afternoon",
        place: "Kiliyur Falls",
        text: "Visit Kiliyur Falls and enjoy the surrounding natural scenery."
      },
      {
        time: "Evening",
        place: "Sankagiri Fort",
        text: "Discover the historic Sankagiri Fort."
      },
      {
        time: "Night",
        place: "Salem City",
        text: "Relax in Salem city and enjoy local food and shopping."
      }
    ]

  };


  return (
    <div>

      {/* ================= BUILD YOUR ITINERARY ⭐ ================= */}

      <section
        id="planner"
        className="bg-[#171916] px-5 py-14 text-white sm:px-8 sm:py-16 md:px-12 lg:px-20 lg:py-20"
      >

        <div className="mx-auto max-w-7xl">

          {/* Heading */}

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F4C95D] sm:text-sm">
              BUILD YOUR TRIP
            </p>

            <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl md:text-5xl">
              Build Your Salem Itinerary
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/70 sm:text-base">
              Choose how many days you have and create a simple travel plan
              for your Salem adventure.
            </p>

          </div>


          {/* Day Selection */}

          <div className="mx-auto mt-10 max-w-2xl">

            <p className="mb-4 text-center text-sm font-semibold">
              How many days do you have?
            </p>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">

              {[1, 2, 3, 4].map((number) => (

                <button
                  key={number}
                  onClick={() => setDays(number)}
                  className={`rounded-xl border px-5 py-4 text-sm font-semibold transition duration-300 ${
                    days === number
                      ? "border-[#F4C95D] bg-[#F4C95D] text-[#171916]"
                      : "border-white/20 bg-white/5 text-white hover:border-[#F4C95D] hover:bg-white/10"
                  }`}
                >

                  {number === 4
                    ? "4+ Days"
                    : `${number} Day${number > 1 ? "s" : ""}`}

                </button>

              ))}

            </div>

          </div>


          {/* Itinerary */}

          <div className="mx-auto mt-12 max-w-4xl">

            <div className="space-y-5">

              {itinerary[days].map((item, index) => (

                <div
                  key={index}
                  className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition duration-300 hover:border-white/20 hover:bg-white/10 sm:flex-row sm:items-center sm:p-6"
                >

                  {/* Number */}

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#B85B32] text-sm font-bold">
                    {index + 1}
                  </div>


                  {/* Details */}

                  <div className="flex-1">

                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F4C95D]">
                      {item.time}
                    </p>

                    <h3 className="mt-1 font-serif text-xl font-bold sm:text-2xl">
                      {item.place}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-white/60">
                      {item.text}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Plan;