"use client";

import { styles } from "@/styles";
import { Instagram, Facebook, Twitter, Scissors, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const footerLinks = [
    {
      title: "Services",
      links: ["Haircut", "Beard Trim", "Shaving", "Kids Cut"],
    },
    {
      title: "Quick Links",
      links: ["Home", "About", "Services", "Contact"],
    },
  ];

  const socialLinks = [
    { icon: Instagram, href: "#" },
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
  ];
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  // return (
  //   <footer className="bg-card border-t border-border max-w-6xl w-full mx-auto mt-20">
  //     <div className="container mx-auto px-4 lg:px-8 py-8 md:py-16">
  //       <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
  //         {/* Brand */}
  //         <div>
  //           <a href="#home" className="flex items-center gap-2 mb-6">
  //             <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
  //               <span className="text-primary-foreground font-serif font-bold text-lg">
  //                 ZH
  //               </span>
  //             </div>
  //             <span className="font-serif text-xl font-semibold text-foreground">
  //               Zürich Barber
  //             </span>
  //           </a>
  //           <p className="text-muted-foreground leading-relaxed mb-6">
  //             Premium grooming services with Swiss precision. Where tradition
  //             meets modern style.
  //           </p>
  //           <div className="flex gap-4">
  //             <a
  //               href="#"
  //               className={`w-10 h-10 rounded-full ${styles.thirdBg} flex items-center justify-center text-white hover:${styles.thirdBg} hover:text-primary-foreground transition-colors`}
  //               aria-label="Instagram"
  //             >
  //               <Instagram className="w-5 h-5" />
  //             </a>
  //             <a
  //               href="#"
  //               className={`w-10 h-10 rounded-full ${styles.thirdBg} flex items-center justify-center text-white hover:${styles.thirdBg} hover:text-primary-foreground transition-colors`}
  //               aria-label="Facebook"
  //             >
  //               <Facebook className="w-5 h-5" />
  //             </a>
  //             <a
  //               href="#"
  //               className={`w-10 h-10 rounded-full ${styles.thirdBg} flex items-center justify-center text-white hover:${styles.thirdBg} hover:text-primary-foreground transition-colors`}
  //               aria-label="Twitter"
  //             >
  //               <Twitter className="w-5 h-5" />
  //             </a>
  //           </div>
  //         </div>

  //         {/* Quick Links */}
  //         <div>
  //           <h3 className="font-serif text-lg font-semibold text-foreground mb-6">
  //             Quick Links
  //           </h3>
  //           <ul className="space-y-3">
  //             {quickLinks.map((link) => (
  //               <li key={link.href}>
  //                 <a
  //                   href={link.href}
  //                   className="text-muted-foreground hover:text-primary transition-colors"
  //                 >
  //                   {link.label}
  //                 </a>
  //               </li>
  //             ))}
  //           </ul>
  //         </div>

  //         {/* Services */}
  //         <div>
  //           <h3 className="font-serif text-lg font-semibold text-foreground mb-6">
  //             Services
  //           </h3>
  //           <ul className="space-y-3">
  //             {services.map((service, index) => (
  //               <li key={index}>
  //                 <a
  //                   href={service.href}
  //                   className="text-muted-foreground hover:text-primary transition-colors"
  //                 >
  //                   {service.label}
  //                 </a>
  //               </li>
  //             ))}
  //           </ul>
  //         </div>

  //         {/* Contact */}
  //         <div>
  //           <h3 className="font-serif text-lg font-semibold text-foreground mb-6">
  //             Contact Info
  //           </h3>
  //           <ul className="space-y-3 text-muted-foreground">
  //             <li>Bahnhofstrasse 42</li>
  //             <li>8001 Zurich, Switzerland</li>
  //             <li>+41 44 123 45 67</li>
  //             <li>info@swissbarber.ch</li>
  //           </ul>
  //         </div>
  //       </div>
  //     </div>

  //     {/* Bottom Bar */}
  //     <div className="border-t border-border">
  //       <div className="container mx-auto px-4 lg:px-8 py-6">
  //         <div className="flex flex-col md:flex-row justify-between items-center gap-4">
  //           <p className="text-muted-foreground text-sm">
  //             © 2026 Zürich Barber. All rights reserved.
  //           </p>
  //           <div className="flex gap-6 text-sm">
  //             <a
  //               href="#"
  //               className="text-muted-foreground hover:text-primary transition-colors"
  //             >
  //               Privacy Policy
  //             </a>
  //             <a
  //               href="#"
  //               className="text-muted-foreground hover:text-primary transition-colors"
  //             >
  //               Terms of Service
  //             </a>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </footer>
  // );

  return (
    <footer
      className={`${styles.primaryBg} border-t border-white/10 pt-16 pb-8`}
    >
      <div className="max-w-6xl w-full mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-2">
              <div className={`p-2 ${styles.thirdBg} rounded-lg`}>
                <Scissors className="w-6 h-6 text-primary" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tighter">
                SWISS<span className={styles.thirdText}>BARBER</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Premium grooming services in the heart of Zurich. We combine
              traditional craftsmanship with modern style.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:border-secondary/50 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Link Columns */}
          {footerLinks.map((column, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * (idx + 1) }}
              className="space-y-6"
            >
              <h4 className="text-white font-semibold uppercase tracking-widest text-sm">
                {column.title}
              </h4>
              <ul className="space-y-4">
                {column.links.map((link, i) => (
                  <li key={i}>
                    <motion.a
                      href={`#${link.toLowerCase().replace(" ", "-")}`}
                      whileHover={{ x: 5 }}
                      className="text-muted-foreground hover:text-secondary text-sm transition-colors block"
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Newsletter/Back to Top Area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <h4 className="text-white font-semibold uppercase tracking-widest text-sm">
              Back to Top
            </h4>
            <p className="text-muted-foreground text-sm">
              Ready for your next cut?
            </p>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 ${styles.thirdText} font-semibold text-sm group`}
            >
              Scroll Up
              <div
                className={`p-2 rounded-full ${styles.thirdBg} text-secondary-foreground group-hover:-translate-y-1 transition-transform`}
              >
                <ArrowUp className="w-4 h-4" />
              </div>
            </motion.button>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-muted-foreground text-xs font-medium">
            © {currentYear} Swiss Barber Boutique. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
