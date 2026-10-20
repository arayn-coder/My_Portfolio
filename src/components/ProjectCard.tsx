"use client";

import React from "react";
import Image from "next/image";
import { Project } from "@/types";
import { ArrowUpRight, ExternalLink, Calendar, Eye } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect, index }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="group relative rounded-2xl glass-card overflow-hidden flex flex-col justify-between border border-white/[0.08] hover:border-indigo-500/40"
    >
      {/* Visual Image Container with Hover Zoom & Overlay */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0c0f18] cursor-pointer" onClick={() => onSelect(project)}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d14] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
          <span className="px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-[#08090d]/80 backdrop-blur-md text-indigo-300 border border-white/10">
            {project.category}
          </span>
          <span className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-mono text-neutral-300 bg-[#08090d]/80 backdrop-blur-md border border-white/10">
            <Calendar className="w-3 h-3 text-neutral-400" />
            <span>{project.year}</span>
          </span>
        </div>

        {/* Hover Quick Action Indicator */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-[2px] bg-black/30">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelect(project);
            }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-indigo-600/90 hover:bg-indigo-600 shadow-xl border border-indigo-400/30 transform translate-y-2 group-hover:translate-y-0 transition-transform"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Quick View</span>
          </button>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          {/* Title & Arrow */}
          <div className="flex items-start justify-between gap-3 mb-3 cursor-pointer" onClick={() => onSelect(project)}>
            <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors line-clamp-1">
              {project.title}
            </h3>
            <div className="p-1 rounded-full text-neutral-400 group-hover:text-white group-hover:bg-white/[0.08] transition-all shrink-0">
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-5 line-clamp-2">
            {project.description}
          </p>

          {/* Tech Stack Chips */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 rounded-md text-[11px] font-mono text-neutral-300 bg-white/[0.03] border border-white/5"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-0.5 rounded-md text-[11px] font-mono text-neutral-400 bg-white/[0.02]">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-white/5 flex items-center justify-between">
          <button
            onClick={() => onSelect(project)}
            className="text-xs font-semibold uppercase tracking-wider text-indigo-400 hover:text-indigo-300 transition-colors inline-flex items-center gap-1.5"
          >
            <span>View Project</span>
            <span className="text-neutral-500">→</span>
          </button>

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-neutral-400 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 transition-colors"
                title="View GitHub Repository"
                aria-label={`View ${project.title} on GitHub`}
              >
                <GithubIcon className="w-3.5 h-3.5" />
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-neutral-400 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 transition-colors"
                title="View Live Demo"
                aria-label={`Open ${project.title} live demo`}
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
