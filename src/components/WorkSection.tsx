"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { projects, projectCategories } from "@/data/projects";
import { Project } from "@/types";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import {
  Sparkles,
  ArrowUpRight,
  ExternalLink,
  Layers,
  Activity,
  SlidersHorizontal,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { motion, AnimatePresence } from "framer-motion";

export const WorkSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Filter projects based on active category
  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") return projects;
    return projects.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  // Find the top featured project in current selection (if any)
  const featuredProject = useMemo(() => {
    return filteredProjects.find((p) => p.featured) || (selectedCategory === "All" ? projects[0] : null);
  }, [filteredProjects, selectedCategory]);

  // Gallery projects (excluding the spotlighted project if displayed in hero mode)
  const galleryProjects = useMemo(() => {
    if (selectedCategory === "All" && featuredProject) {
      return filteredProjects.filter((p) => p.id !== featuredProject.id);
    }
    return filteredProjects;
  }, [filteredProjects, selectedCategory, featuredProject]);

  return (
    <section id="work" className="relative py-24 lg:py-32 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-300 mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Selected Portfolio Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
              Engineered for <span className="text-gradient-accent">Impact</span> &amp; Precision.
            </h2>
            <p className="text-base text-neutral-400 leading-relaxed">
              Explore recent client engagements, enterprise SaaS products, and custom digital platforms. 
              Each project is built with clean architecture, typed resilience, and modern visual design.
            </p>
          </div>

          {/* Quick Notice about editable config */}
         
        </div>

        {/* CATEGORY FILTERS */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
            <span className="p-2 text-neutral-500 pl-3">
              <SlidersHorizontal className="w-3.5 h-3.5" />
            </span>
            {projectCategories.map((category) => {
              const isActive = selectedCategory === category;
              const count =
                category === "All"
                  ? projects.length
                  : projects.filter((p) => p.category === category).length;

              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`relative px-4 py-2 rounded-xl text-xs font-medium tracking-wide whitespace-nowrap transition-all duration-200 focus:outline-none ${
                    isActive
                      ? "text-white font-semibold"
                      : "text-neutral-400 hover:text-neutral-200 hover:bg-white/[0.04]"
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-1.5">
                    {category}
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isActive ? "bg-indigo-500 text-white" : "bg-white/10 text-neutral-400"
                    }`}>
                      {count}
                    </span>
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="activeFilterPill"
                      className="absolute inset-0 rounded-xl bg-indigo-600 shadow-lg shadow-indigo-600/30"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* FEATURED PROJECT SPOTLIGHT (Shown when All or relevant category is selected) */}
        {selectedCategory === "All" && featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 rounded-3xl glass-panel-elevated border border-white/10 overflow-hidden relative group"
          >
            {/* Top gradient stripe */}
            <div className="h-1.5 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 lg:p-12 items-center">
              
              {/* Left Column: Details (6 cols) */}
              <div className="lg:col-span-6 flex flex-col justify-between order-2 lg:order-1">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                      ★ Featured Showcase
                    </span>
                    <span className="text-xs font-mono text-neutral-400 bg-white/[0.04] px-2.5 py-1 rounded-full border border-white/5">
                      {featuredProject.category}
                    </span>
                    <span className="text-xs font-mono text-neutral-400">
                      {featuredProject.year}
                    </span>
                  </div>

                  <h3
                    onClick={() => setSelectedProject(featuredProject)}
                    className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4 group-hover:text-indigo-300 transition-colors cursor-pointer"
                  >
                    {featuredProject.title}
                  </h3>

                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-6">
                    {featuredProject.description}
                  </p>

                  {/* Highlight Metric */}
                  {featuredProject.metrics && (
                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 mb-6 flex items-center gap-3 text-xs sm:text-sm text-indigo-300 font-mono">
                      <Activity className="w-4 h-4 text-indigo-400 shrink-0" />
                      <span>{featuredProject.metrics}</span>
                    </div>
                  )}

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {featuredProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg text-xs font-mono bg-white/[0.04] text-neutral-200 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/10">
                  <button
                    onClick={() => setSelectedProject(featuredProject)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-indigo-600 hover:bg-indigo-500 shadow-xl shadow-indigo-600/25 transition-all"
                  >
                    <span>Explore Case Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  {featuredProject.liveUrl && (
                    <a
                      href={featuredProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-neutral-200 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-all"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {featuredProject.githubUrl && (
                    <a
                      href={featuredProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full text-neutral-400 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-colors"
                      title="View Code on GitHub"
                      aria-label="View Code on GitHub"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Right Column: Visual Preview (6 cols) */}
              <div
                onClick={() => setSelectedProject(featuredProject)}
                className="lg:col-span-6 relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#0c0e18] border border-white/10 cursor-pointer order-1 lg:order-2 shadow-2xl"
              >
                <Image
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>
        )}

        {/* RESPONSIVE EDITORIAL PROJECT GALLERY GRID */}
        {galleryProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <AnimatePresence mode="popLayout">
              {galleryProjects.map((project, idx) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onSelect={(p) => setSelectedProject(p)}
                  index={idx}
                />
              ))}
            </AnimatePresence>
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-16 px-4 rounded-2xl glass-panel">
            <Layers className="w-8 h-8 text-neutral-500 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white mb-1">No projects in this category yet</h3>
            <p className="text-sm text-neutral-400 mb-4">
              Add your project details in <code className="text-indigo-400 font-mono">src/data/projects.ts</code>.
            </p>
            <button
              onClick={() => setSelectedCategory("All")}
              className="px-5 py-2 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
