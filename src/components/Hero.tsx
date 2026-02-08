import { Button } from "./ui/button";
import { styles } from "@/styles";
import { easeInOut, motion } from "framer-motion";
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: -30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: easeInOut } },
};
const Hero = () => {
  return (
    <div
      className="py-10 lg:py-25 relative bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/barber-hero.jpg')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative text-white p-5 flex flex-col items-center justify-center text-center"
      >
        <motion.p
          variants={item}
          transition={{ duration: 0.6 }}
          className={`text-md font-bold tracking-wide uppercase ${styles.thirdText}`}
        >
          {/* Welcome to BarberShop */}
          Precision Haircuts & Premium Grooming
        </motion.p>

        <motion.h1
          variants={item}
          className="max-w-2xl tracking-wide uppercase mt-4 text-2xl md:text-5xl leading-tight font-bold"
        >
          Best Hair Salon for a Professional Look
        </motion.h1>

        <motion.p variants={item} className="mt-4 max-w-xl text-gray-200">
          Step into our premium barbershop and experience the perfect blend of
          tradition and innovation. We deliver confidence, quality, hygiene, and
          an exceptional grooming experience that leaves you looking and feeling
          your absolute best.
        </motion.p>

        <motion.div
          variants={item}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="mt-6 flex gap-4"
        >
          <Button
            variant="default"
            className={`${styles.thirdBg} rounded-sm hover:${styles.thirdBg} cursor-pointer`}
          >
            Contact Us
          </Button>
          <Button
            className={`${styles.thirdBg} rounded-sm  hover:${styles.thirdBg} cursor-pointer`}
          >
            Book Now
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
