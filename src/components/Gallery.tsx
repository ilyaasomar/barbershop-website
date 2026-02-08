"use client";

import { styles } from "@/styles";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const categories = ["All", "Hair", "Beard"];

const galleryItems = [
  {
    id: 1,
    src: "/images/gallery-1.jpg",
    category: "Hair",
    alt: "Modern men's haircut",
  },
  {
    id: 2,
    src: "/images/gallery-2.jpg",
    category: "Hair",
    alt: "Fade haircut style",
  },
  {
    id: 3,
    src: "/images/gallery-4.jpg",
    category: "Hair",
    alt: "Modern men's haircut",
  },
  {
    id: 4,
    src: "/images/gallery-3.jpg",
    category: "Beard",
    alt: "Professional beard styling",
  },
  {
    id: 5,
    src: "/images/gallery-5.jpg",
    category: "Beard",
    alt: "Beard trim and shape",
  },
  {
    id: 6,
    src: "/images/gallery-6.jpg",
    category: "Beard",
    alt: "Classic beard styling",
  },
];

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section className="py-10 md:py-24 bg-secondary/20 max-w-6xl w-full mx-auto md:mt-10">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header with Fade Up */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-primary text-sm uppercase tracking-wider font-semibold">
            Our Work
          </span>
          <h2 className="font-sans text-3xl md:text-3xl lg:text-3xl font-bold text-foreground mt-4 mb-6">
            Gallery
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Browse our portfolio of precision cuts and styling transformations.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className="relative px-6 py-2 rounded-full text-sm font-medium transition-colors"
            >
              {/* This is the magic "sliding" background */}
              {activeCategory === category && (
                <motion.div
                  layoutId="activeTab"
                  className={`absolute inset-0 ${styles.thirdBg} rounded-full`}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span
                className={`relative z-10 ${activeCategory === category ? "text-white" : "text-muted-foreground"}`}
              >
                {category}
              </span>
            </button>
          ))}
        </div>

        {/* Gallery Grid with AnimatePresence */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout // Automatically animates the position change
                key={item.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-square rounded-lg overflow-hidden cursor-pointer"
              >
                <img
                  src={item.src || "/placeholder.svg"}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <motion.div className="absolute inset-0 bg-[#D4AF37]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-serif text-xl font-semibold">
                    {item.category}
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
