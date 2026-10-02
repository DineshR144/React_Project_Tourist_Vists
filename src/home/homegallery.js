import React, { useState } from "react";

const galleryImages = [
  {
    id: 1,
    category: "Nature",
    image: "/images/home/yercaud.png",
    title: "Yercaud Hills",
  },
  {
    id: 2,
    category: "Heritage",
    image: "/images/home/old shiv temple.jpg",
    title: "1008 Shivan Temple",
  },
  {
    id: 3,
    category: "Food",
    image: "/images/home/Mango Tree.jpg",
    title: "Salem Mango Tree",
  },
  {
    id: 4,
    category: "Festivals",
    image: "/images/home/kottai-mariamman.png",
    title: "Kottai Marriamman Festival",
  },
  {
    id: 5,
    category: "Nature",
    image: "/images/home/kiliyur.png",
    title: "Kiliyur Falls",
  },
  {
    id: 6,
    category: "Heritage",
    image: "/images/home/temples.png",
    title: "Salem Temples",
  },
  {
    id: 7,
    category: "Culture",
    image: "/images/home/adiperukku.png",
    title: "Adiperukku",
  },
  {
    id: 8,
    category: "Food",
    image: "/images/home/mango.png",
    title: "Mango of Salem",
  },
];

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    "All",
    "Nature",
    "Heritage",
    "Festivals",
    "Culture",
    "Food",
  ];

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter(
          (item) => item.category === activeCategory
        );

  return (
    <section className="min-h-screen bg-[#f8f6ef] px-4 py-12 sm:px-6 md:px-10 lg:px-16">

      {/* ================= HEADER ================= */}
      <div className="mb-8 text-center">

        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#b56a3c] sm:text-sm">
          Explore • Experience • Remember
        </p>

        <h1 className="font-serif text-4xl font-bold text-[#151515] sm:text-5xl md:text-6xl lg:text-7xl">
          Salem Through the Lens
        </h1>

        <p className="mt-3 text-sm text-[#607d70] sm:text-base">
          Discover the beauty, culture and heritage of Salem.
        </p>

      </div>

      {/* ================= CATEGORY FILTER ================= */}
      <div className="mb-10 flex flex-wrap justify-center gap-2 sm:gap-3">

        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`
              rounded-full
              border
              px-5
              py-2.5
              text-sm
              font-semibold
              transition-all
              duration-300
              sm:px-6
              sm:py-3
              sm:text-base

              ${
                activeCategory === category
                  ? "border-[#111] bg-[#111] text-white shadow-md"
                  : "border-gray-300 bg-transparent text-[#171717] hover:border-[#111] hover:bg-white"
              }
            `}
          >
            {category}
          </button>
        ))}

      </div>

      {/* ================= GALLERY ================= */}
      <div
        className="
          mx-auto
          grid
          max-w-[1530px]
          grid-cols-1
          gap-5
          sm:grid-cols-2
          lg:grid-cols-4
        "
      >

        {filteredImages.map((item, index) => (

          <div
            key={item.id}
            onClick={() => setSelectedImage(item)}
            className={`
              group
              relative
              cursor-pointer
              overflow-hidden
              rounded-[20px]
              bg-gray-200
              shadow-sm
              transition-all
              duration-500
              hover:-translate-y-1
              hover:shadow-xl

              ${
                index === 0
                  ? "lg:row-span-2"
                  : ""
              }
            `}
          >

            <img
              src={item.image}
              alt={item.title}
              className={`
                h-full
                min-h-[280px]
                w-full
                object-cover
                transition-transform
                duration-700
                group-hover:scale-105

                ${
                  index === 0
                    ? "lg:min-h-[620px]"
                    : "lg:min-h-[235px]"
                }
              `}
              onError={(e) => {
                e.currentTarget.src =
                  "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80";
              }}
            />

            {/* Dark hover overlay */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/70
                via-black/10
                to-transparent
                opacity-60
                transition-opacity
                duration-500
                group-hover:opacity-90
              "
            />

            {/* Image Information */}
            <div
              className="
                absolute
                bottom-0
                left-0
                right-0
                translate-y-2
                p-5
                text-white
                opacity-0
                transition-all
                duration-500
                group-hover:translate-y-0
                group-hover:opacity-100
              "
            >

              <span
                className="
                  inline-block
                  rounded-full
                  bg-white/20
                  px-3
                  py-1
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wider
                  backdrop-blur-md
                "
              >
                {item.category}
              </span>

              <h3 className="mt-2 font-serif text-xl font-bold">
                {item.title}
              </h3>

            </div>

          </div>

        ))}

      </div>

      {/* ================= EMPTY STATE ================= */}
      {filteredImages.length === 0 && (
        <div className="py-20 text-center">

          <p className="text-lg text-gray-500">
            No images found in this category.
          </p>

        </div>
      )}

      {/* ================= LIGHTBOX ================= */}
      {selectedImage && (

        <div
          className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            bg-black/90
            p-4
            backdrop-blur-sm
          "
          onClick={() => setSelectedImage(null)}
        >

          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="
              absolute
              right-5
              top-5
              z-10
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              bg-white/10
              text-2xl
              text-white
              backdrop-blur-md
              transition
              hover:bg-white/20
            "
          >
            ×
          </button>

          {/* Image */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] max-w-[95vw]"
          >

            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="
                max-h-[80vh]
                max-w-full
                rounded-2xl
                object-contain
                shadow-2xl
              "
            />

            <div className="mt-4 text-center text-white">

              <p className="text-xs uppercase tracking-[0.25em] text-gray-300">
                {selectedImage.category}
              </p>

              <h2 className="mt-1 font-serif text-2xl font-bold">
                {selectedImage.title}
              </h2>

            </div>

          </div>

        </div>

      )}

    </section>
  );
}

export default Gallery;