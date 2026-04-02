"use client";

import React from "react";
import { motion } from "framer-motion";

// Custom inline SVG for Lovable since it's not a standard icon in typical free sets
const LovableLogo = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[1.8rem] h-[1.8rem]">
    <defs>
      <linearGradient id="lovable-grad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFA07A" />
        <stop offset="50%" stopColor="#FF69B4" />
        <stop offset="100%" stopColor="#8A2BE2" />
      </linearGradient>
    </defs>
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="url(#lovable-grad)"/>
  </svg>
);

// Inline Amplitude SVG to entirely bypass adblockers blocking any URL fetching that contains "amplitude"
const AmplitudeLogo = () => (
  <svg viewBox="0 0 24 24" fill="#2451F5" xmlns="http://www.w3.org/2000/svg" className="w-[1.6rem] h-[1.6rem]">
    <path d="M10.155 10.59a.78.78 0 0 0-.616-.302c-.22 0-.442.067-.624.288l-6.42 7.733a.62.62 0 0 0 .01.815c.088.1.206.145.326.145h2.155a.78.78 0 0 0 .616-.302l4.898-5.908l3.197 4.298a.77.77 0 0 0 .62.336h6.73c.27 0 .584-.288.423-.557l-10.127-13.62a.77.77 0 0 0-.616-.33c-.22 0-.44.066-.62.28L4.015 10.42a.62.62 0 0 0-.01.815c.087.1.207.144.327.144h2.145a.77.77 0 0 0 .626-.29l4.908-5.907L15.19 9.51Z"/>
  </svg>
);

const stackItems = [
  { name: "Claude Code", category: "AI AGENT", img: "https://cdn.simpleicons.org/anthropic/d97757" },
  { name: "OpenAI", category: "LLM", img: "https://unpkg.com/simple-icons@v13.0.0/icons/openai.svg" },
  { name: "Google AI Studio", category: "PROTOTYPING", img: "https://cdn.simpleicons.org/googlegemini/4285F4" },
  { name: "Lovable", category: "PROTOTYPING", custom: <LovableLogo /> },
  { name: "Cursor", category: "DEVELOPMENT", img: "https://cdn.simpleicons.org/cursor/000000" },
  { name: "Jira", category: "AGILE", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg" },
  { name: "Figma", category: "DESIGN", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
  { name: "Vercel", category: "DEPLOYMENT", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" },
  { name: "Github", category: "VERSION CONTROL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
  { name: "Python", category: "SCRIPTING", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "SQL", category: "DATA", img: "https://cdn.simpleicons.org/postgresql/336791" },
  { name: "Amplitude", category: "ANALYTICS", custom: <AmplitudeLogo /> },
  { name: "Mixpanel", category: "ANALYTICS", img: "https://unpkg.com/simple-icons@v13.0.0/icons/mixpanel.svg" },
  { name: "Metabase", category: "BI", img: "https://cdn.simpleicons.org/metabase/509EE3" },
  { name: "HubSpot", category: "CRM", img: "https://cdn.simpleicons.org/hubspot/FF7A59" },
];

export default function MyStack() {
  return (
    <section id="mystack" className="bg-teal-50 py-24 px-4 flex items-center justify-center min-h-screen">
      <div className="max-w-5xl mx-auto w-full space-y-12">
        <div className="text-center">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold md:text-5xl bg-gradient-to-r from-teal-400 to-emerald-700 bg-clip-text text-transparent py-3 leading-relaxed overflow-visible">
            My Stack
          </h2>
          <p className="text-lg text-neutral-600">The tools powering my product journey.</p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {stackItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group flex flex-col items-center justify-center py-7 px-4 rounded-[2rem] bg-white/80 backdrop-blur-md border border-teal-100 transition-all hover:bg-white shadow-sm hover:shadow-xl"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-[1rem] bg-teal-50/50 shadow-inner overflow-hidden border border-teal-100">
                {item.custom ? (
                  item.custom
                ) : (
                  <img src={item.img} alt={item.name} className="w-[1.6rem] h-[1.6rem] object-contain" />
                )}
              </div>
              <h3 className="text-teal-950 font-bold text-[15px] tracking-wide text-center">
                {item.name}
              </h3>
              <p className="mt-1.5 text-[9px] font-bold tracking-[0.16em] text-teal-600/70 uppercase text-center">
                {item.category}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
