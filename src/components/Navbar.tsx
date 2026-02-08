import { useState } from "react";
import { styles } from "@/styles";
import { NavLInks, NavLInksMobile } from "./NavLInks";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Scissors } from "lucide-react";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <section id="home" className={`${styles.primaryBg}`}>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
        className={`flex items-center justify-between max-w-6xl w-full mx-auto p-4 text-white`}
      >
        {/* logo */}
        <div className="flex items-center gap-2">
          <div className={`p-2 ${styles.thirdBg} rounded-lg`}>
            <Scissors className="w-6 h-6 text-primary" />
          </div>
          <span className="text-2xl font-bold text-white tracking-tighter">
            SWISS<span className={styles.thirdText}>BARBER</span>
          </span>
        </div>

        {/* navigation links */}
        <div className="space-x-4 hidden md:flex">
          <NavLInks />
        </div>
        {/* call to action button */}
        <Button
          className={`${styles.thirdBg} hidden md:block cursor-pointer text-white font-bold py-2 px-4 rounded`}
        >
          Book Now
        </Button>
        {/* menu view list */}
        <div className="md:hidden relative">
          {isMenuOpen ? (
            <button className="text-white" onClick={() => setIsMenuOpen(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          ) : (
            <button
              className="text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          )}
          {/* mobile menu list */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={`absolute top-13 z-10 h-fit right-1 ${styles.primaryBg} rounded shadow-lg p-4 w-48`}
              >
                <NavLInksMobile />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};

export default Navbar;
