"use client";

import { motion } from "framer-motion";
import { Heart, Code2, Link2, ArrowUp } from "lucide-react";
import socialsData from "@/data/socials.json";

const socialLinks = [
  { icon: Code2, href: socialsData.github.url, label: "GitHub" },
  { icon: Link2, href: socialsData.linkedin.url, label: "LinkedIn" },
];

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-[#6366f1]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <motion.a
              href="#home"
              className="text-2xl font-bold gradient-text inline-block mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Rohit Khatri
            </motion.a>
            <p className="text-[#64748b] text-sm max-w-xs">
              Full-Stack Developer building scalable web experiences. Let&apos;s
              create something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#e2e8f0] font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#64748b] hover:text-[#6366f1] transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-[#e2e8f0] font-semibold mb-4">Connect</h4>
            <div className="flex gap-3 mb-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-[#1e293b] flex items-center justify-center text-[#94a3b8] hover:bg-[#6366f1] hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
            <div className="flex flex-col gap-1">
              <a
                href={`mailto:${socialsData.email}`}
                className="text-[#64748b] hover:text-[#6366f1] transition-colors text-sm"
              >
                {socialsData.email}
              </a>
              <a
                href={`tel:${socialsData.phone.replace(/\s/g, "")}`}
                className="text-[#64748b] hover:text-[#6366f1] transition-colors text-sm"
              >
                {socialsData.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#6366f1]/10 flex flex-col md:flex-row items-center justify-end gap-4">
          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-[#64748b] hover:text-[#6366f1] transition-colors text-sm"
          >
            Back to Top
            <div className="w-8 h-8 rounded-lg bg-[#1e293b] flex items-center justify-center hover:bg-[#6366f1] hover:text-white transition-all">
              <ArrowUp className="w-4 h-4" />
            </div>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
