"use client";

import React, { useEffect, useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import { ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon, XTwitterIcon } from "@/components/Icons";

export const Footer: React.FC = () => {
  const [timeString, setTimeString] = useState<string>("");
  const [currentYear, setCurrentYear] = useState<number>(2025);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
    const updateTime = () => {
      const now = new Date();
      // Format time in IST (UTC+5:30)
      const istTime = now.toLocaleTimeString("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setTimeString(istTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getSocialIcon = (name: string) => {
    switch (name.toLowerCase()) {
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
        return null;
    }
  };

  return (
    <footer className="relative py-12 border-t border-white/5 bg-[#06070a] text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Brand & Local Time */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="font-semibold text-white tracking-wide">{siteConfig.name}</span>
            <span className="text-neutral-600">•</span>
            <span>{siteConfig.role}</span>
          </div>

          {timeString && (
            <div className="font-mono text-neutral-500 bg-white/[0.03] px-2.5 py-1 rounded-md border border-white/5">
              <span>IST {timeString}</span>
            </div>
          )}
        </div>

        {/* Center: Socials */}
        <div className="flex items-center gap-3">
          {siteConfig.socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] hover:text-white transition-colors border border-white/5"
              aria-label={social.name}
              title={social.name}
            >
              {getSocialIcon(social.name)}
            </a>
          ))}
        </div>

        {/* Right: Copyright & Back to Top */}
        <div className="flex items-center gap-4">
          <span className="text-neutral-500">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </span>
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-neutral-300 hover:text-white transition-colors border border-white/10"
            aria-label="Scroll back to top"
            title="Back to Top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
