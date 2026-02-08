"use client";

import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
const testimonials = [
  {
    id: 1,
    name: "Lukas Müller",
    location: "Zurich",
    rating: 5,
    text: "The best barbershop in Switzerland. The attention to detail and the warm atmosphere make every visit a pleasure. Highly recommended!",
  },
  {
    id: 2,
    name: "Marc Weber",
    location: "Bern",
    rating: 5,
    text: "I've been coming here for 3 years. The barbers are true professionals who understand exactly what I want. Swiss quality at its finest.",
  },
  {
    id: 3,
    name: "Thomas Schneider",
    location: "Basel",
    rating: 5,
    text: "Outstanding service and expertise. My beard has never looked better. The premium grooming package is worth every franc.",
  },
  {
    id: 4,
    name: "Daniel Fischer",
    location: "Lucerne",
    rating: 5,
    text: "Finally found a place that gets my haircut right every time. The online booking is super convenient and the staff is always friendly.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-10 md:py-24 bg-secondary/20 max-w-6xl w-full mx-auto mt-5 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary text-sm uppercase tracking-wider font-semibold">
            Testimonials
          </span>
          <h2 className="font-sans text-3xl md:text-3xl lg:text-3xl font-bold text-foreground mt-4 mb-6 text-balance">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Don&apos;t just take our word for it, hear from our satisfied
            clients across the country.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              // Slide in from left if index is even, right if odd
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                y: -5,
                rotate: index % 2 === 0 ? 1 : -1, // Subtle tilt
                boxShadow: "0 20px 25px -5px rgb(212 175 55 / 0.1)",
              }}
              className="bg-card border border-primary/50 rounded-lg p-8 transition-all duration-300 relative group"
            >
              <Quote className="w-10 h-10 text-[#D4AF37]/60 mb-4 group-hover:text-[#D4AF37] transition-colors" />

              {/* Rating Animation */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.1, type: "spring" }}
                  >
                    <Star className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
                  </motion.div>
                ))}
              </div>

              <p className="text-foreground leading-relaxed mb-6 text-lg">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <div className="flex items-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 rounded-full bg-[#D4AF37]/30 flex items-center justify-center shrink-0"
                >
                  <span className="text-primary font-semibold">
                    {testimonial.name.charAt(0)}
                  </span>
                </motion.div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
