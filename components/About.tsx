"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable and scalable code following best practices",
  },
  {
    icon: Palette,
    title: "UI/UX Focus",
    description: "Creating intuitive and visually appealing user experiences",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimizing applications for speed and efficiency",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Working effectively in team environments with clear communication",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-[#6366f1] text-sm font-semibold uppercase tracking-wider">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#e2e8f0] mt-2">
            Get to Know Me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-[#e2e8f0] mb-6">
              Full-Stack Developer Building{" "}
              <span className="gradient-text">Scalable Web Experiences</span>
            </h3>
            <div className="space-y-4 text-[#94a3b8] text-lg leading-relaxed">
              <p>
                Full-stack developer experienced in building scalable and
                user-focused web applications across frontend and backend. I
                enjoy creating scalable, user-friendly solutions and
                continuously improving my skills by working on real-world
                projects and modern technologies.
              </p>
              <p>
                With expertise in the MERN stack and .NET Core ecosystem, I
                bring ideas to life through clean, efficient code. I&apos;m
                passionate about learning new technologies and solving complex
                problems with elegant solutions.
              </p>
            </div>

            {/* Stats - Publish Later */}
            {/* <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text">
                  2+
                </div>
                <div className="text-[#64748b] text-sm mt-1">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text">
                  15+
                </div>
                <div className="text-[#64748b] text-sm mt-1">
                  Projects Completed
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text">
                  10+
                </div>
                <div className="text-[#64748b] text-sm mt-1">Technologies</div>
              </div>
            </div> */}
          </motion.div>

          {/* Highlight Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass-card rounded-2xl p-6 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#6366f1]/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-[#6366f1]" />
                </div>
                <h4 className="text-[#e2e8f0] font-semibold mb-2">
                  {item.title}
                </h4>
                <p className="text-[#64748b] text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
