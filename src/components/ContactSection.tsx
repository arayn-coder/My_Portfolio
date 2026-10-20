"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import {
  Mail,
  Copy,
  Check,
  Send,
  Sparkles,
  MapPin,
  Clock,
  ArrowUpRight,
  AlertCircle,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon, XTwitterIcon } from "@/components/Icons";
import { motion, AnimatePresence } from "framer-motion";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Full-Stack Web App",
    budget: "$2,500 – $5,000",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({
    type: "idle",
    message: "",
  });

  const [copiedEmail, setCopiedEmail] = useState(false);

  const projectTypes = [
    "Full-Stack Web App",
    "SaaS MVP Build",
    "High-End Website",
    "E-Commerce Platform",
    "API & Backend System",
  ];

  const budgetRanges = [
    "<₹8,000",
    "₹12,000 – ₹15,000",
    "₹15,000 – ₹20,000",
    "₹20,000+",
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case "github":
        return <GithubIcon className="w-4 h-4" />;
      case "linkedin":
        return <LinkedinIcon className="w-4 h-4" />;
      case "instagram":
        return <InstagramIcon className="w-4 h-4" />;
      case "twitter":
      case "x (twitter)":
        return <XTwitterIcon className="w-4 h-4" />;
      default:
        return <ArrowUpRight className="w-4 h-4" />;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "idle", message: "" });

    // Client-side validation
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setStatus({
        type: "error",
        message: "Please enter your name (at least 2 characters).",
      });
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailPattern.test(formData.email.trim())) {
      setStatus({
        type: "error",
        message: "Please provide a valid email address.",
      });
      return;
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setStatus({
        type: "error",
        message: "Please include a message with at least 10 characters.",
      });
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus({
          type: "success",
          message: data.message || "Thank you! Your message was delivered successfully.",
        });
        setFormData({
          name: "",
          email: "",
          projectType: "Full-Stack Web App",
          budget: "₹8,000 – ₹15,000",
          message: "",
        });
      } else {
        setStatus({
          type: "error",
          message: data.error || "Failed to submit inquiry. Please try again or email directly.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message: "Network error occurred. Please reach out directly to " + siteConfig.contact.email,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-300 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Initiate Collaboration</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6">
            Have a project in mind? <br />
            <span className="text-gradient-accent">Let&apos;s build something great.</span>
          </h2>

          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
            I partner with founders, fast-moving startups, and digital agencies to turn bold visions into polished web products.
            Whether you need a high-converting web presence, a full-stack SaaS MVP, or code architecture consultation, let&apos;s talk.
          </p>
        </div>

        {/* TWO COLUMN GRID: Left Info / Right Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* LEFT COLUMN: Contact Details, Availability & Socials (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            
            {/* Availability Box */}
            <div className="p-6 rounded-2xl glass-panel border border-emerald-500/20 bg-emerald-950/10">
              <div className="flex items-center gap-2.5 mb-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                  {siteConfig.availability.label}
                </span>
              </div>
              <p className="text-sm text-neutral-300 mb-2">
                {siteConfig.availability.turnaround}
              </p>
              <span className="text-xs font-mono text-emerald-300/80 bg-emerald-900/30 px-2.5 py-1 rounded-md border border-emerald-500/20 inline-block">
                {siteConfig.availability.badgeText}
              </span>
            </div>

            {/* Direct Email Card */}
            <div className="p-6 rounded-2xl glass-card">
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider block mb-2">
                Direct Communication
              </span>
              <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5 mb-4">
                <div className="flex items-center gap-2.5 truncate">
                  <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span className="text-sm font-mono text-white truncate">
                    {siteConfig.contact.email}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-neutral-300 hover:text-white transition-colors shrink-0 text-xs font-medium flex items-center gap-1.5"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="space-y-2 text-xs text-neutral-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                  <span>{siteConfig.contact.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-neutral-500" />
                  <span>{siteConfig.contact.availableHours}</span>
                </div>
              </div>
            </div>

            {/* Social Links Network */}
            <div>
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider block mb-3">
                Social Profiles &amp; Repositories
              </span>
              <div className="grid grid-cols-2 gap-3">
                {siteConfig.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl glass-card hover:border-indigo-500/40 text-neutral-300 hover:text-white group"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="p-1.5 rounded-lg bg-white/[0.04] text-indigo-400 group-hover:text-white transition-colors">
                        {getSocialIcon(social.icon)}
                      </span>
                      <div>
                        <span className="text-xs font-semibold block">{social.name}</span>
                        <span className="text-[10px] font-mono text-neutral-500">{social.handle}</span>
                      </div>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Interactive Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl glass-panel-elevated relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-2xl pointer-events-none" />

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Send a Project Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mb-8">
                Fill out the brief details below and I&apos;ll get back to you with timeline and feasibility within 24 hours.
              </p>

              {/* Status Alert Banner */}
              <AnimatePresence>
                {status.type !== "idle" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`p-4 rounded-xl mb-6 flex items-start gap-3 text-sm ${
                      status.type === "success"
                        ? "bg-emerald-950/40 border border-emerald-500/30 text-emerald-300"
                        : "bg-rose-950/40 border border-rose-500/30 text-rose-300"
                    }`}
                  >
                    {status.type === "success" ? (
                      <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-400 mt-0.5" />
                    ) : (
                      <AlertCircle className="w-5 h-5 shrink-0 text-rose-400 mt-0.5" />
                    )}
                    <div>
                      <p className="font-medium">{status.message}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
                      Your Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-indigo-500 focus:bg-white/[0.05] focus:outline-none text-white text-sm placeholder:text-neutral-500 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-indigo-500 focus:bg-white/[0.05] focus:outline-none text-white text-sm placeholder:text-neutral-500 transition-all"
                    />
                  </div>
                </div>

                {/* Project Type Selector Chips */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2.5">
                    Project Type
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {projectTypes.map((type) => {
                      const isSelected = formData.projectType === type;
                      return (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData({ ...formData, projectType: type })}
                          className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                            isSelected
                              ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30 border border-indigo-400/40"
                              : "bg-white/[0.03] text-neutral-400 hover:text-white hover:bg-white/[0.06] border border-white/5"
                          }`}
                        >
                          {type}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Budget Range Selector Chips */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2.5">
                    Estimated Budget Range (RS)
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {budgetRanges.map((range) => {
                      const isSelected = formData.budget === range;
                      return (
                        <button
                          key={range}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: range })}
                          className={`py-2 px-3 rounded-lg text-xs font-mono transition-all text-center ${
                            isSelected
                              ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30 border border-indigo-400/40 font-bold"
                              : "bg-white/[0.03] text-neutral-400 hover:text-white hover:bg-white/[0.06] border border-white/5"
                          }`}
                        >
                          {range}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Message Textarea */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-neutral-300">
                      Project Details &amp; Objectives *
                    </label>
                    <span className="text-[11px] font-mono text-neutral-500">
                      {formData.message.length} characters
                    </span>
                  </div>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    placeholder="Tell me about what you're building, target timeline, key requirements, or existing design files..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-indigo-500 focus:bg-white/[0.05] focus:outline-none text-white text-sm placeholder:text-neutral-500 transition-all resize-y min-h-[110px]"
                  />
                </div>

                {/* Submit Action Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full relative group inline-flex items-center justify-center gap-2.5 py-4 px-8 rounded-xl text-sm font-semibold uppercase tracking-wider text-white bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-indigo-600/30 transition-all overflow-hidden"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Project Inquiry</span>
                      <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>

                <p className="text-[11px] text-center text-neutral-500 font-mono">
                  Guaranteed privacy. No spam. You will receive a direct reply to your email.
                </p>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
