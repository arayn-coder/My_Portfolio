"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/data/siteConfig";
import { ArrowUpRight, Menu, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("about");

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scroll Spy for active section
      const sections = ["about", "work", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setCurrentSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "py-3 bg-[#08090d]/85 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/40"
          : "py-6 bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo / Monogram */}
          <button
            onClick={() => scrollTo("#about")}
            className="group flex items-center gap-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg p-1"
            aria-label="Aryan Portfolio Home"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-cyan-500/10 border border-white/10 group-hover:border-indigo-500/40 transition-colors shadow-sm">
              <span className="font-mono text-base font-bold text-white tracking-tight">A.</span>
              <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 ring-2 ring-[#08090d]" />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm tracking-wide text-white group-hover:text-indigo-300 transition-colors">
                {siteConfig.name}
              </span>
              <span className="text-[11px] font-mono text-neutral-400">Full-Stack Dev</span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = currentSection === link.href.replace("#", "");
              return (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.href)}
                  className={`relative px-4 py-1.5 text-xs uppercase tracking-wider font-medium transition-colors duration-200 rounded-full focus:outline-none ${isActive ? "text-white" : "text-neutral-400 hover:text-neutral-200"
                    }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full bg-white/[0.08] border border-white/10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Area: Availability Beacon + "Let's Talk" CTA */}
          <div className="hidden lg:flex items-center gap-4">

            {/* Availability Indicator */}
            <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/20 text-xs font-medium text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Available for Projects</span>
            </div>

            {/* Let's Talk CTA */}
            <button
              onClick={() => scrollTo("#contact")}
              className="group relative inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-indigo-600 hover:bg-indigo-500 transition-all duration-200 shadow-md shadow-indigo-600/20 hover:shadow-indigo-500/35 overflow-hidden"
            >
              <span className="relative z-10">Let&apos;s Talk</span>
              <ArrowUpRight className="relative z-10 w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={() => scrollTo("#contact")}
              className="px-3.5 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wider text-white bg-indigo-600"
            >
              Let&apos;s Talk
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-neutral-300 hover:text-white bg-white/[0.05] border border-white/10 focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-x-0 top-[70px] z-40 p-5 bg-[#0d0e15]/95 backdrop-blur-xl border-b border-white/10 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              {/* Availability Tag in Mobile */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/20 text-xs font-medium text-emerald-300 self-start">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>Available for Projects</span>
              </div>

              <div className="flex flex-col gap-1 border-t border-white/5 pt-3">
                {navLinks.map((link) => {
                  const isActive = currentSection === link.href.replace("#", "");
                  return (
                    <button
                      key={link.name}
                      onClick={() => scrollTo(link.href)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-left text-base font-medium transition-colors ${isActive
                        ? "bg-white/[0.08] text-white font-semibold"
                        : "text-neutral-300 hover:bg-white/[0.04] hover:text-white"
                        }`}
                    >
                      <span>{link.name}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-50" />
                    </button>
                  );
                })}
              </div>

              <div className="pt-2 border-t border-white/5">
                <button
                  onClick={() => scrollTo("#contact")}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold uppercase tracking-wider text-white bg-indigo-600 shadow-lg shadow-indigo-600/30"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Start A Project</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
