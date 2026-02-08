import { styles } from "@/styles";
import { motion } from "framer-motion";

import { Sparkles, SquareScissors, User } from "lucide-react";
import { FaHandsWash } from "react-icons/fa";
import { MdFace2, MdOutlineWorkspacePremium } from "react-icons/md";
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15, // each card appears after 0.15s
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      easing: "easeOut",
    },
  },
};

const services = [
  {
    id: 1,
    title: "Men's Haircut",
    description:
      "Precision cuts tailored to your style, from classic to modern trends.",
    icon: SquareScissors,
  },
  {
    id: 2,
    title: "Beard Trim & Styling",
    description:
      "Professional beard trimming and styling to enhance your facial features.",
    icon: User,
  },
  {
    id: 3,
    title: "Mustache Styling",
    description:
      "Professional mustache styling and shaping for a polished look.",
    icon: Sparkles,
  },
  {
    id: 4,
    title: "Kids Haircut",
    description:
      "Specialized haircuts for children, ensuring a fun and comfortable experience.",
    icon: MdFace2,
  },
  {
    id: 5,
    title: "Hair Wash & Styling",
    description:
      "Professional hair washing and styling services to enhance your hair's natural beauty.",
    icon: FaHandsWash,
  },
  {
    id: 6,
    title: "Complete Grooming Package",
    description:
      "Full service experience including cut, beard, facial, and styling.",
    icon: MdOutlineWorkspacePremium,
  },
];

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Each card starts 0.1s after the previous
      },
    },
  };

  // Card reveal animation
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 50,
        damping: 30,
      },
    },
  };
  return (
    <section
      id="services"
      className="max-w-6xl w-full mx-auto mt-10 md:mt-20 p-4"
    >
      <div className="flex flex-col items-center justify-center">
        {/* Header Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="inline-block text-xl font-bold border-b-4 border-yellow-500 pb-2 mb-2">
            Our Services
          </h2>
          <h1 className="text-xl md:text-3xl font-bold">
            Premium Grooming Services
          </h1>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-4"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{
                y: -10,
                boxShadow:
                  "0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              className="flex flex-col items-start gap-2 p-6 border border-gray-300 rounded-lg bg-card text-left cursor-default"
            >
              {/* Icon Animation */}
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ type: "spring", stiffness: 200 }}
                className={`w-12 h-12 bg-yellow-500 rounded-md flex items-center justify-center mb-2`}
              >
                <service.icon className="w-6 h-6 text-white" />
              </motion.div>

              <h3 className="font-bold text-lg font-serif">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
