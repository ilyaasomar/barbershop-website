import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

const partners = [
  {
    id: 1,
    name: "Partner 1",
    logo: "/logos/swiss.svg",
  },
  { id: 2, name: "Partner 2", logo: "/logos/zurich.svg" },
  { id: 3, name: "Partner 3", logo: "/logos/swisscom.png" },
  { id: 4, name: "Partner 4", logo: "/logos/post.svg" },
  { id: 5, name: "Partner 5", logo: "/logos/rolex.svg" },
];
const Partners = () => {
  return (
    <div className={`flex items-center justify-center py-5`}>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
        className="flex items-center justify-center  space-x-2 md:space-x-10 lg:space-x-20 px-2 md:px-0"
      >
        {partners.map((partner) => (
          <motion.div
            key={partner.id}
            variants={item}
            whileHover={{ scale: 1.15 }}
            className="rounded-md border p-4 hover:scale-110 transition-transform duration-300"
          >
            <img
              key={partner.id}
              src={partner.logo}
              alt={partner.name}
              width={100}
              height={75}
              className="text-white object-cover transition duration-300"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Partners;
