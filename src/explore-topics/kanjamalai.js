import React from "react";
import { Link } from "react-router-dom";

export default function Kanjamalai() {
  return (
    <div className="bg-[#f8f6ef] text-[#111b16]">

      {/* HERO */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">

        <img
          src="/images/home/kanjamalai.jpeg"
          alt="Kanjamalai Siddhar Kovil"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45"></div>

        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">

            <span className="inline-block rounded-full bg-[#d9a441] px-4 py-2 text-sm font-semibold text-white">
              Temple
            </span>

            <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-7xl">
              Kanjamalai Siddhar Kovil
            </h1>

            <div className="mt-6 flex flex-wrap gap-5 text-sm text-white sm:text-base">
              <span>📍 Kanjamalai, Salem</span>
              <span>⏱ 1–2 Hours</span>
              <span>⭐ 4.5</span>
            </div>

          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <Link
          to="/explore"
          className="mb-10 inline-flex items-center gap-2 rounded-full border border-[#d8d0bd] bg-white px-5 py-3 text-sm font-bold transition hover:bg-[#111b16] hover:text-white"
        >
          ← Back to Explore
        </Link>

        {/* ABOUT */}
        <div className="grid gap-12 lg:grid-cols-3">

          <div className="lg:col-span-2">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b85b32]">
              Discover Kanjamalai
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              A Peaceful Spiritual Retreat
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-600">
              Kanjamalai Siddhar Kovil is a peaceful spiritual destination
              surrounded by the natural beauty of Kanjamalai. The temple is
              associated with the spiritual traditions of the region and
              attracts visitors looking for a calm and devotional experience.
            </p>

            <p className="mt-4 text-base leading-8 text-gray-600">
              Located amidst a scenic natural setting, the temple offers
              visitors an opportunity to enjoy both the spiritual atmosphere
              and the peaceful surroundings of Kanjamalai.
            </p>

            <p className="mt-4 text-base leading-8 text-gray-600">
              It is a meaningful place to include in a Salem itinerary for
              visitors interested in temples, local traditions, spirituality
              and nature.
            </p>

          </div>

          {/* QUICK INFO */}
          <div className="rounded-3xl bg-white p-7 shadow-sm">

            <h3 className="text-xl font-bold">
              Quick Information
            </h3>

            <div className="mt-6 space-y-5">

              <div className="border-b border-gray-200 pb-4">
                <p className="text-sm text-gray-500">Best Time</p>
                <p className="mt-1 font-semibold">
                  October – February
                </p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <p className="text-sm text-gray-500">
                  Suggested Duration
                </p>
                <p className="mt-1 font-semibold">
                  1–2 Hours
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Category
                </p>
                <p className="mt-1 font-semibold">
                  Temple & Spiritual
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* THINGS TO DO */}
        <div className="mt-20">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b85b32]">
            Experience Kanjamalai
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Things to Do
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="text-3xl">🛕</div>
              <h3 className="mt-4 text-xl font-bold">
                Visit the Temple
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Spend peaceful time at the temple and experience its spiritual atmosphere.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="text-3xl">🙏</div>
              <h3 className="mt-4 text-xl font-bold">
                Spiritual Experience
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Take time for prayer, reflection and a peaceful spiritual experience.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="text-3xl">🌿</div>
              <h3 className="mt-4 text-xl font-bold">
                Explore Nature
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Enjoy the natural surroundings and peaceful landscapes around Kanjamalai.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="text-3xl">📸</div>
              <h3 className="mt-4 text-xl font-bold">
                Photography
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Capture the scenic surroundings and temple views while respecting local rules.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="text-3xl">🚶</div>
              <h3 className="mt-4 text-xl font-bold">
                Peaceful Walk
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Enjoy a relaxing walk around the natural surroundings and experience the calm atmosphere.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="text-3xl">👨‍👩‍👧‍👦</div>
              <h3 className="mt-4 text-xl font-bold">
                Family Visit
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Visit with family and enjoy a peaceful combination of nature and spirituality.
              </p>
            </div>

          </div>

        </div>

        {/* TRAVEL TIPS */}
        <div className="mt-20 rounded-3xl bg-[#111b16] p-8 text-white sm:p-10">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d9a441]">
            Travel Tips
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Before You Visit
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">

            <div className="flex gap-3">
              <span className="text-[#d9a441]">✓</span>
              <p className="text-sm leading-6 text-gray-300">
                Wear comfortable and respectful clothing when visiting the temple.
              </p>
            </div>

            <div className="flex gap-3">
              <span className="text-[#d9a441]">✓</span>
              <p className="text-sm leading-6 text-gray-300">
                Follow the temple rules and maintain a peaceful environment.
              </p>
            </div>

            <div className="flex gap-3">
              <span className="text-[#d9a441]">✓</span>
              <p className="text-sm leading-6 text-gray-300">
                Check local temple timings before planning your visit.
              </p>
            </div>

            <div className="flex gap-3">
              <span className="text-[#d9a441]">✓</span>
              <p className="text-sm leading-6 text-gray-300">
                Keep the natural surroundings clean and avoid littering.
              </p>
            </div>

          </div>

        </div>

        {/* BACK */}
        <div className="mt-12 text-center">

          <Link
            to="/explore"
            className="inline-flex items-center gap-2 rounded-full bg-[#d9a441] px-7 py-3 font-semibold text-white transition hover:bg-[#b85b32]"
          >
            ← Back to Explore
          </Link>

        </div>

      </section>
    </div>
  );
}
