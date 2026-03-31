"use client";

import { motion } from "framer-motion";
import { Monitor, Server, Database, Wrench } from "lucide-react";
import skillsData from "@/data/skills.json";

const iconMap = {
  Monitor,
  Server,
  Database,
  Wrench,
};

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

export function Skills() {
  const categories = Object.entries(skillsData);

  return (
    <section id="skills" className="py-20 md:py-32 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#6366f1]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#22c55e]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-[#6366f1] text-sm font-semibold uppercase tracking-wider">
            My Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#e2e8f0] mt-2">
            Technologies I Work With
          </h2>
          <p className="text-[#64748b] mt-4 max-w-2xl mx-auto">
            I&apos;ve worked with a range of technologies in the web development
            world, from frontend to backend and everything in between.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {categories.map(([key, category]) => {
            const Icon = iconMap[category.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={key}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="glass-card rounded-2xl p-6 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#6366f1]/10 flex items-center justify-center">
                    {Icon && <Icon className="w-6 h-6 text-[#6366f1]" />}
                  </div>
                  <h3 className="text-xl font-semibold text-[#e2e8f0]">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, index) => (
                    <motion.span
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 rounded-lg bg-[#1e293b] text-[#94a3b8] text-sm font-medium 
                        hover:bg-[#6366f1]/20 hover:text-[#6366f1] transition-colors cursor-default"
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Skills Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-[#64748b] mb-4">Also experienced with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "REST APIs",
              "JWT",
              "Redux Toolkit",
              "Context API",
              "Responsive Design",
            ].map((skill, index) => (
              <motion.span
                key={index}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(99, 102, 241, 0.2)",
                }}
                className="px-4 py-2 rounded-full border border-[#6366f1]/20 text-[#94a3b8] text-sm 
                  hover:text-[#6366f1] transition-all cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
