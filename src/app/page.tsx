import React from "react";
import { Navbar } from "@/components/Navbar";
import { BackgroundGlow } from "@/components/BackgroundGlow";
import { AboutSection } from "@/components/AboutSection";
import { WorkSection } from "@/components/WorkSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#08090d] text-white selection:bg-indigo-600 selection:text-white flex flex-col justify-between">
      {/* Ambient background glow and animated particles */}
      <BackgroundGlow />

      {/* Navigation bar with glassmorphism and availability beacon */}
      <Navbar />

      {/* Main Content: exactly 3 sections */}
      <main className="relative z-10 flex-grow">
        {/* SECTION 1: ABOUT (Hero, value proposition, profile visual, stats, approach, tech stack) */}
        <AboutSection />

        {/* SECTION 2: WORK (Featured showcase, category filters, editorial project gallery, modal) */}
        <WorkSection />

        {/* SECTION 3: CONTACT (Conversion headline, live inquiry form, backend API, email, socials) */}
        <ContactSection />
      </main>

      {/* Minimal aesthetic footer */}
      <Footer />
    </div>
  );
}
