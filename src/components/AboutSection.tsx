"use client";

import React, { useState } from "react";
import Image from "next/image";
import { siteConfig, techStackCategories } from "@/data/siteConfig";
import {
  ArrowDownRight,
  Sparkles,
  Zap,
  Code2,
  Users2,
  CheckCircle2,
  Terminal,
  ExternalLink,
  Layers,
} from "lucide-react";
import { motion } from "framer-motion";

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const scrollTo = (id: string) => {
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getApproachIcon = (iconName: string) => {
    switch (iconName) {
      case "Code2":
        return <Code2 className="w-5 h-5 text-indigo-400" />;
      case "Zap":
        return <Zap className="w-5 h-5 text-cyan-400" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-purple-400" />;
      case "Users2":
        return <Users2 className="w-5 h-5 text-emerald-400" />;
      default:
        return <Layers className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="about" className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* HERO / INTRO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-24 lg:mb-32">
          
          {/* Left Column: Headlines & CTAs (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Small Intro Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-indigo-300 mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
              <span>Hi, I&apos;m {siteConfig.name}</span>
              <span className="text-white/20">•</span>
              <span className="text-neutral-400">{siteConfig.role}</span>
            </div>

            {/* Large Bold Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
              I Build <span className="text-gradient-accent">Digital Experiences</span> That Move Businesses Forward.
            </h1>

            {/* Short Value Description */}
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-normal mb-8 max-w-2xl">
              I build modern websites and custom web applications for businesses, startups, and individuals. 
              By blending editorial visual aesthetics with resilient full-stack architecture, I transform ambitious concepts into high-converting products.
            </p>

            {/* Two Primary CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={() => scrollTo("#work")}
                className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide text-white bg-indigo-600 hover:bg-indigo-500 shadow-xl shadow-indigo-600/25 hover:shadow-indigo-500/40 transition-all duration-200"
              >
                <span>Explore My Work</span>
                <ArrowDownRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </button>

              <button
                onClick={() => scrollTo("#contact")}
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium tracking-wide text-neutral-200 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 transition-all duration-200 backdrop-blur-sm"
              >
                <span>Let&apos;s Collaborate</span>
                <span className="text-neutral-400 group-hover:text-white transition-colors">→</span>
              </button>
            </div>

            {/* Micro Highlights */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/5 text-xs text-neutral-400 font-mono">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Next.js &amp; React Specialist</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Modern Clean Code</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Direct 1-on-1 Communication</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Profile Image Visual Area (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end relative"
          >
            <div className="relative w-full max-w-[420px] aspect-square rounded-3xl p-3 glass-panel-elevated group">
              
              {/* Subtle background glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-cyan-500/20 blur-xl opacity-75 group-hover:opacity-100 transition-opacity -z-10" />

              {/* Profile Image Container */}
              <div className="relative w-full h-full  rounded-2xl overflow-hidden bg-[#0c0e16] border border-white/10">
                <Image
                  src="/profile/profilepic.jpeg"
                  alt={`${siteConfig.name} - Freelance Full-Stack Developer`}
                  fill
                  priority
                  className=" object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlaid Terminal Pill */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#090b12]/90 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                    <span className="text-neutral-300">aryan:~$ status --active</span>
                  </div>
                  <span className="text-emerald-400 font-bold">ONLINE</span>
                </div>
              </div>

              {/* Floating Badge Top Right */}
              <div className="absolute -top-4 -right-4 px-4 py-2 rounded-2xl bg-[#121524]/95 border border-indigo-500/30 backdrop-blur-md shadow-xl flex items-center gap-2 text-xs font-semibold text-white">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                <span>Full-Stack &amp; UI Craftsman</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* METRICS & PROVEN RESULTS STATS BAR */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 sm:p-8 rounded-2xl glass-panel mb-24"
        >
          {siteConfig.stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col ${
                i !== siteConfig.stats.length - 1 ? "lg:border-r border-white/5" : ""
              } px-2 sm:px-4 py-2`}
            >
              <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono mb-1 text-gradient-primary">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-medium text-neutral-300 mb-0.5">
                {stat.label}
              </span>
              <span className="text-[11px] text-neutral-500">
                {stat.sublabel}
              </span>
            </div>
          ))}
        </motion.div>

        {/* DETAILED APPROACH & PHILOSOPHY */}
        <div className="mb-24">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest block mb-2">
              Engineering Approach
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Crafting Digital Solutions With Precision, Speed, and Purpose.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-400 leading-relaxed">
              I don&apos;t just write code; I partner with you to solve complex technical problems, streamline user flows, and build systems that scale effortlessly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.approach.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-2xl glass-card flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center mb-5">
                    {getApproachIcon(item.icon)}
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* TECH STACK SHOWCASE */}
        <div className="p-8 sm:p-10 rounded-3xl glass-panel relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 border-b border-white/5 pb-6">
            <div>
              <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest block mb-1">
                Technical Stack
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Modern Tools For High-Performance Applications
              </h2>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {techStackCategories.map((category, idx) => (
                <button
                  key={category.title}
                  onClick={() => setActiveTab(idx)}
                  className={`px-4 py-2 rounded-xl text-xs font-medium tracking-wide transition-all ${
                    activeTab === idx
                      ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                      : "bg-white/[0.03] text-neutral-400 hover:text-white hover:bg-white/[0.06]"
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>
          </div>

          {/* Active Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {techStackCategories[activeTab].skills.map((skill) => (
              <div
                key={skill.name}
                className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/30 hover:bg-white/[0.04] transition-all flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  <span className="text-[10px] font-mono text-neutral-500">{skill.level}</span>
                </div>
                <span className="text-xs sm:text-sm font-semibold text-neutral-200">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>

          {/* Quick Note for Custom Tech Requirements */}
          <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-neutral-400">
            <span>Need a specialized framework or legacy migration? I adapt quickly to your stack.</span>
            <button
              onClick={() => scrollTo("#contact")}
              className="inline-flex items-center gap-1.5 text-indigo-400 hover:text-indigo-300 font-medium"
            >
              <span>Ask about your project stack</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
