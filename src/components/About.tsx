import { motion } from "framer-motion";

import { styles } from "@/styles";
import { Award, Scissors, UserPlus } from "lucide-react";
import { GrUserExpert } from "react-icons/gr";

const aboutHighlights = [
  {
    id: 1,
    icon: <GrUserExpert className="w-8 h-8 shrink-0" />,
    text: (
      <>
        <strong>10+</strong> Years of Experience
      </>
    ),
  },
  {
    id: 2,
    icon: <UserPlus className="w-8 h-8 shrink-0" />,
    text: <>+1,000 Customers</>,
  },
  {
    id: 3,
    icon: <Award className="w-8 h-8 shrink-0" />,
    text: <>Customer Satisfaction</>,
  },
  {
    id: 4,
    icon: <Scissors className="w-8 h-8" />,
    text: <>Modern Equipments</>,
  },
];
// Container for staggered children
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Individual items
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

const About = () => {
  return (
    <section
      id="about"
      className={`flex max-w-6xl w-full mx-auto items-center justify-between mt-10 md:mt-20 p-4 text-white`}
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col lg:flex-row items-start gap-8"
      >
        <motion.div variants={item} className="flex lg:flex-1 lg:max-w-lg">
          <img
            src="/images/about-barber.jpg"
            alt="about barber"
            className="w-full h-full object-cover rounded-lg"
          />
        </motion.div>

        <motion.div
          variants={item}
          className="flex flex-1 flex-col items-start"
        >
          <h1 className={`text-2xl font-bold ${styles.primaryText}`}>
            About Us
          </h1>
          <h2
            className={`mt-4 text-2xl md:text-4xl max-w-lg font-bold ${styles.thirdText}`}
          >
            Your Trusted Neighborhood Barber Shop
          </h2>
          <p
            className={`mt-4 ${styles.primaryText} font-serif font-normal text-md`}
          >
            Founded in 2010, Swiss Barber has been the premier destination for
            discerning gentlemen who appreciate the art of grooming. Our passion
            for precision and dedication to excellence has made us a trusted
            name in Switzerland. Our team of master barbers combines
            time-honored techniques with contemporary styles, ensuring every
            client leaves looking and feeling their absolute best. We believe
            that a great haircut is more than just a service — it's an
            experience that boosts confidence and celebrates individuality. From
            classic cuts to modern trends, we take pride in our craft and the
            lasting relationships we build with our community.
          </p>
          <div className="w-full mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 ">
            {aboutHighlights.map((highlight, i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ scale: 1.05 }}
                className={`flex  ${styles.thirdBg} p-4 rounded-lg items-center`}
              >
                {/* icon */}
                {highlight.icon}
                <span
                  className={`ml-2 ${styles.primaryText} font-serif font-normal text-lg`}
                >
                  {highlight.text}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
