"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Link2, Code2 } from "lucide-react";
import socialsData from "@/data/socials.json";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: socialsData.email,
    href: `mailto:${socialsData.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: socialsData.phone,
    href: `tel:${socialsData.phone.replace(/\s/g, "")}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: socialsData.location,
    href: "#",
  },
  {
    icon: Link2,
    label: "LinkedIn",
    value: socialsData.linkedin.label,
    href: socialsData.linkedin.url,
    external: true,
  },
  {
    icon: Code2,
    label: "GitHub",
    value: socialsData.github.label,
    href: socialsData.github.url,
    external: true,
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#6366f1]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-[#22c55e]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-[#6366f1] text-sm font-semibold uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#e2e8f0] mt-2">
            Let&apos;s Work Together
          </h2>
          <p className="text-[#64748b] mt-4 max-w-2xl mx-auto">
            I&apos;m currently available for freelance work and full-time
            positions. If you have a project in mind or just want to chat, feel
            free to reach out!
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-[#e2e8f0] mb-6">
              Contact Information
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  target={info.external ? "_blank" : undefined}
                  rel={info.external ? "noreferrer" : undefined}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 glass-card rounded-xl transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#6366f1]/10 flex items-center justify-center group-hover:bg-[#6366f1]/20 transition-colors">
                    <info.icon className="w-5 h-5 text-[#6366f1]" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[#64748b] text-sm">{info.label}</p>
                    <p className="text-[#e2e8f0] font-medium truncate">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
