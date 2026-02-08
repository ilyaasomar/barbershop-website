"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { styles } from "@/styles";
import { motion } from "framer-motion";

const packages = [
  {
    name: "Basic Package",
    price: "35",
    description: "Perfect for a quick refresh",
    features: [
      "Precision haircut",
      "Style consultation",
      "Beard trim & shape",
      "Mustache styling",
      "Hair wash",
      "Styling finish",
    ],
    popular: false,
  },
  {
    name: "Premium Grooming",
    price: "55",
    description: "The complete experience",
    features: [
      "Precision haircut",
      "Beard trim & styling",
      "Hot towel facial",
      "Scalp massage",
      "Premium products",
      "Complimentary drink",
    ],
    popular: true,
  },
  {
    name: "Kids Cut",
    price: "28",
    description: "For young gentlemen",
    features: [
      "Child-friendly service",
      "Patient barbers",
      "Fun experience",
      "Style of choice",
      "Hair wash",
      "Styling finish",
    ],
    popular: false,
  },
];

export function Pricing() {
  return (
    <section className="py-10 md:py-24 bg-background max-w-6xl w-full mx-auto items-center mt-5">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-8 md:mb-16"
        >
          <span className="text-primary text-sm uppercase tracking-wider font-semibold">
            Pricing
          </span>
          <h2 className="font-sans text-3xl md:text-3xl lg:text-3xl font-bold text-foreground mt-4 mb-6 text-balance">
            Transparent Pricing
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Choose the perfect package for your grooming needs. All prices in
            CHF.
          </p>
        </motion.div>

        {/* Pricing Cards Container */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.2, // Staggered entrance
                duration: 0.5,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ y: -10 }} // Lift on hover
              className={`relative p-8 rounded-lg border flex flex-col transition-all duration-300 ${
                pkg.popular
                  ? "bg-primary/5 border-primary shadow-lg shadow-primary/10 ring-1 ring-primary/20"
                  : "bg-card border-gray-400 hover:border-primary/50"
              }`}
            >
              {pkg.popular && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8, type: "spring" }}
                  className="absolute -top-3 left-1/2 -translate-x-1/2"
                >
                  <span
                    className={`${styles.thirdBg} text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider`}
                  >
                    Most Popular
                  </span>
                </motion.div>
              )}

              <div className="text-center mb-6">
                <h3 className="font-sans text-xl font-semibold text-foreground mb-2">
                  {pkg.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {pkg.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-red-600 text-lg font-bold">CHF</span>
                  <span className="font-sans text-3xl font-bold text-foreground">
                    {pkg.price}
                  </span>
                </div>
              </div>

              {/* List Animation */}
              <ul className="space-y-3 mb-8 flex-grow">
                {pkg.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <Check className={`w-5 h-5 ${styles.thirdText} shrink-0`} />
                    <span className="text-black text-sm">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.div whileTap={{ scale: 0.95 }}>
                <Button
                  className={`w-full ${
                    pkg.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer"
                      : `${styles.thirdBg} text-secondary-foreground hover:${styles.thirdBg} cursor-pointer`
                  }`}
                >
                  Book Now
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
