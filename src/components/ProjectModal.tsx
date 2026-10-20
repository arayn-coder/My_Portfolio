"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { Project } from "@/types";
import { X, ExternalLink, Calendar, Layers, Activity, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#07080c]/85 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl glass-panel-elevated p-6 sm:p-8 z-10 border border-white/15 my-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-neutral-300 hover:text-white transition-colors border border-white/10 z-20 focus:outline-none"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Top Meta */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                {project.category}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-neutral-400 font-mono">
                <Calendar className="w-3.5 h-3.5" />
                <span>{project.year}</span>
              </span>
              {project.role && (
                <span className="text-xs text-neutral-400 font-mono bg-white/[0.04] px-2.5 py-0.5 rounded-md border border-white/5">
                  Role: {project.role}
                </span>
              )}
            </div>

            {/* Title */}
            <h2 id="modal-title" className="text-2xl sm:text-3xl font-extrabold text-white mb-4 pr-10">
              {project.title}
            </h2>

            {/* Preview Image */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-6 border border-white/10 bg-[#0d0f17]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Metrics highlight if present */}
            {project.metrics && (
              <div className="p-4 rounded-xl bg-indigo-950/30 border border-indigo-500/20 mb-6 flex items-center gap-3 text-sm text-indigo-300">
                <Activity className="w-5 h-5 shrink-0 text-indigo-400" />
                <span className="font-medium">{project.metrics}</span>
              </div>
            )}

            {/* Long Description */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                Overview &amp; Architecture
              </h3>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                {project.longDescription || project.description}
              </p>
            </div>

            {/* Deliverables / Scope */}
            {project.deliverables && project.deliverables.length > 0 && (
              <div className="mb-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 mb-3">
                  Key Deliverables
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.deliverables.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 p-2.5 rounded-lg bg-white/[0.02] border border-white/5 text-xs sm:text-sm text-neutral-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack Pills */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4" />
                <span>Technologies Used</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-white/[0.05] text-neutral-200 border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/10">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-600/30 transition-all"
                >
                  <span>Launch Live Website</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium text-neutral-300 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View Repository</span>
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
