"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, FolderOpen, Computer } from "lucide-react";
import projectsData from "@/data/projects.json";

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  github: string;
  live: string;
  image: string;
  featured: boolean;
}

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
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export function Projects() {
  const [showAll, setShowAll] = useState(false);
  const projects: Project[] = projectsData;
  const featuredProjects = projects.filter((p) => p.featured);
  const hasProjects = true;

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      {hasProjects ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-[#6366f1] text-sm font-semibold uppercase tracking-wider">
              My Work
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#e2e8f0] mt-2">
              Featured Projects
            </h2>
            <p className="text-[#64748b] mt-4 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and
              experience in building full-stack web applications.
            </p>
          </motion.div>

          {/* Featured Projects */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8 mb-16"
          >
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className={`glass-card rounded-2xl overflow-hidden transition-all duration-500 hover:border-[#6366f1]/40`}
              >
                <div
                  className={`grid lg:grid-cols-2 gap-6 p-6 md:p-8 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                >
                  {/* Project Image */}
                  <div
                    className={`relative aspect-video rounded-xl overflow-hidden bg-[#1e293b] group ${
                      index % 2 === 1 ? "lg:order-2" : ""
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/20 to-[#22c55e]/20 flex items-center justify-center">
                      {/* <FolderOpen className="w-16 h-16 text-[#6366f1]/50" /> */}
                      <img src={project.image} alt="Clientage" />
                    </div>
                    <div className="absolute inset-0 bg-[#6366f1]/0 group-hover:bg-[#6366f1]/10 transition-colors duration-300" />
                  </div>

                  {/* Project Info */}
                  <div
                    className={`flex flex-col justify-center ${index % 2 === 1 ? "lg:order-1" : ""}`}
                  >
                    <span className="text-[#22c55e] text-sm font-medium mb-2">
                      Featured Project
                    </span>
                    <h3 className="text-2xl md:text-3xl font-semibold text-[#e2e8f0] mb-4">
                      {project.title}
                    </h3>
                    <p className="text-[#94a3b8] mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 rounded-md bg-[#6366f1]/10 text-[#6366f1] text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4">
                      {project.github && (
                        <button
                          //   className="text-[#94a3b8] hover:text-[#e2e8f0] hover:bg-[#1e293b]"
                          className="border-[#6366f1]/30 text-[#e2e8f0] hover:bg-[#6366f1]/10 rounded-xl px-4 py-2"
                        >
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-around"
                          >
                            {/* <Github className="w-5 h-5 mr-2" /> */}
                            <Computer className="w-5 h-5 mr-2" />
                            Code
                          </a>
                        </button>
                      )}
                      {project.live && (
                        <button
                          className="bg-[#6366f1] hover:bg-[#6366f1]/90 text-white rounded-xl px-4 inline-flex items-center gap-2 py-2 font-medium shadow-md
               hover:shadow-lg transition-all duration-300"
                        >
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </a>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center text-center py-20"
        >
          <div className="glass-card rounded-2xl p-10 max-w-2xl w-full border border-[#6366f1]/20">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-[#6366f1]/10">
                <FolderOpen className="w-10 h-10 text-[#6366f1]" />
              </div>
            </div>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-semibold text-[#e2e8f0] mb-4">
              Projects Coming Soon
            </h3>

            {/* Description */}
            <p className="text-[#94a3b8] mb-6 leading-relaxed">
              I'm currently building real-world full-stack applications based on
              practical experience. These projects will showcase scalable
              architecture, clean UI, and production-ready code.
            </p>
          </div>
        </motion.div>
      )}
    </section>
  );
}
