"use client";

import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { styles } from "@/styles";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, easing: "easeOut" } },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const contactCards = [
    {
      icon: MapPin,
      title: "Our Location",
      lines: ["Bahnhofstrasse 42", "8001 Zurich, Switzerland"],
    },
    {
      icon: Phone,
      title: "Phone",
      lines: ["+41 44 123 45 67"],
    },
    {
      icon: Mail,
      title: "Email",
      lines: ["info@swissbarber.ch"],
    },
    {
      icon: Clock,
      title: "Hours",
      lines: ["Mon-Fri: 9:00 - 19:00", "Sat: 9:00 - 17:00"],
    },
  ];

  return (
    <section id="contact" className={`${styles.primaryBg}`}>
      <div
        className={`flex max-w-6xl w-full mx-auto items-center mt-10 md:mt-20 py-10 px-4`}
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-8 md:mb-16"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 mb-4"
              variants={fadeUp}
            >
              <Sparkles className="w-4 h-4 text-white " />
              <span
                className={`${styles.thirdText} uppercase tracking-[0.3em] text-sm font-medium`}
              >
                Get In Touch
              </span>
              <Sparkles className="w-4 h-4 text-white" />
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-3xl sm:text-5xl lg:text-4xl font-bold text-white mb-3 md:mb-6 tracking-tight"
            >
              Contact Us
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-muted-foreground max-w-2xl mx-auto font-semibold text-md md:text-lg"
            >
              Have questions or want to book an appointment? We&apos;d love to
              hear from you.
            </motion.p>
          </motion.div>

          {/* Main Content */}
          <motion.div
            className="grid lg:grid-cols-2 gap-8 lg:gap-12"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Contact Form */}
            <motion.div
              className="bg-[#252525] border border-border rounded-2xl p-8 lg:p-10 shadow-2xl shadow-black/20"
              variants={fadeUp}
              whileHover={{ scale: 1.02 }}
            >
              <h2 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
                <div className={`w-1.5 h-8 ${styles.thirdBg} rounded-full`} />
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="name"
                      className={`${styles.thirdText} text-sm font-medium`}
                    >
                      Your Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-transparent border-gray-600 text-white placeholder:text-muted-foreground h-12 rounded-xl focus:ring-2 focus:ring-secondary focus:border-secondary transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className={`${styles.thirdText} text-sm font-medium`}
                    >
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-transparent border-gray-600 text-white placeholder:text-muted-foreground h-12 rounded-xl focus:ring-2 focus:ring-secondary focus:border-secondary transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="phone"
                    className={`${styles.thirdText} text-sm font-medium`}
                  >
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="+41 XX XXX XX XX"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-transparent border-gray-600 text-white placeholder:text-muted-foreground h-12 rounded-xl focus:ring-2 focus:ring-secondary focus:border-secondary transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="message"
                    className={`${styles.thirdText} text-sm font-medium`}
                  >
                    Your Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="bg-transparent border-gray-600 text-white placeholder:text-muted-foreground rounded-xl resize-none focus:ring-2 focus:ring-secondary focus:border-secondary transition-all"
                  />
                </div>

                <Button
                  type="submit"
                  className={`w-full h-14 ${styles.thirdBg} hover:${styles.thirdBg} text-secondary-foreground font-semibold text-base rounded-xl transition-all duration-300 group`}
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Info Cards Grid */}
              <motion.div
                className="grid sm:grid-cols-2 gap-4"
                variants={container}
              >
                {contactCards.map((card, index) => (
                  <motion.div
                    key={index}
                    className="bg-[#252525] border border-border rounded-2xl p-6 hover:border-secondary/50 transition-all duration-300 group hover:shadow-lg hover:shadow-secondary/5"
                    variants={fadeUp}
                    whileHover={{ scale: 1.03 }}
                  >
                    <div className="w-14 h-14 rounded-xl bg-secondary/10 border border-secondary/30 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                      <card.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-2">
                      {card.title}
                    </h3>
                    {card.lines.map((line, i) => (
                      <p
                        key={i}
                        className={`${styles.thirdText} font-semibold text-sm`}
                      >
                        {line}
                      </p>
                    ))}
                  </motion.div>
                ))}
              </motion.div>

              {/* Map Placeholder */}
              <motion.div
                className="bg-[#252525] border border-border rounded-2xl p-8 flex flex-col items-center justify-center min-h-50 hover:border-secondary/50 transition-all duration-300 group"
                variants={fadeUp}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-16 h-16 rounded-full bg-secondary/10 border border-secondary/30 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                  <MapPin className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-secondary font-semibold text-lg mb-1">
                  Interactive Map
                </h3>
                <p className="text-muted-foreground text-sm">
                  Bahnhofstrasse 42, Zurich
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
