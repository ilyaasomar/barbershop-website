import {
  Award,
  BadgeSwissFranc,
  ClipboardClock,
  Heart,
  Shield,
  Wrench,
} from "lucide-react";
import { motion } from "framer-motion";

const whyChooseUs = [
  {
    id: 1,
    title: "Hygiene Standards",
    description: "Strict sterilization protocols ensuring a safe experience.",
    icon: Shield,
  },
  {
    id: 2,
    title: "Experienced Barbers",
    description: "Skilled professionals with years of expertise.",
    icon: Award,
  },
  {
    id: 3,
    title: "Premium Tools & Products",
    description: "Only the finest equipment and grooming products.",
    icon: Wrench,
  },
  {
    id: 4,
    title: "Friendly Atmosphere",
    description: "A welcoming space where you can relax and unwind.",
    icon: Heart,
  },
  {
    id: 5,
    title: "Easy Online Booking",
    description: "Book your appointment anytime, anywhere.",
    icon: ClipboardClock,
  },
  {
    id: 6,
    title: "Transparent Pricing",
    description: "Clear, upfront pricing with no hidden fees.",
    icon: BadgeSwissFranc,
  },
];

// 1. Define the Container variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Delay between each card
    },
  },
};

// 2. Define the individual Card variants
const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, easing: "easeOut" },
  },
};
const WhyChooseUs = () => {
  return (
    <section className="max-w-6xl w-full mx-auto mt-10 md:mt-20 px-4">
      <div className="flex flex-col items-center justify-center">
        {/* Header Animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="inline-block text-xl font-bold border-b-4 border-yellow-500 pb-2 uppercase">
            Why Choose Us
          </h2>
          <p className="mt-4 text-lg max-w-lg text-center">
            We combine traditional craftsmanship with modern techniques to
            deliver an unparalleled grooming experience.
          </p>
        </motion.div>

        {/* Grid Animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }} // Triggers slightly before entering view
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-6 md:p-4"
        >
          {whyChooseUs.map((ch) => (
            <motion.div
              key={ch.id}
              variants={cardVariants}
              whileHover={{
                y: -5,
                backgroundColor: "rgba(212, 175, 55, 0.05)",
              }}
              className="flex items-start gap-4 p-6 text-left rounded-xl transition-colors"
            >
              <div className="w-12 h-12 bg-[#D4AF37]/30 rounded-full flex items-center justify-center shrink-0">
                <ch.icon className="w-7 h-7 text-[#D4AF37]" />
              </div>

              <div>
                <h3 className="font-bold text-lg font-sans">{ch.title}</h3>
                <p className="text-muted-foreground">{ch.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
