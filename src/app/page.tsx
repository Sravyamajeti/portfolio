"use client";

import React, { useState, useEffect } from "react";
import MemojiGuide from "@/components/MemojiGuide";
import { motion } from "framer-motion";
import InteractiveBackground from "@/components/InteractiveBackground";
import { Mail, Linkedin, Gamepad2, ArrowDown } from "lucide-react";
import WorkExperienceStack from "@/components/WorkExperienceStack";
// import WorkExperienceGrid from "@/components/WorkExperienceGrid"; // Old implementation fallback

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
        rootMargin: "-10% 0px -10% 0px" // Shrink the detection area slightly
      }
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="relative min-h-screen bg-neutral-50 text-neutral-900 font-sans">
      <InteractiveBackground key={activeSection} activeSection={activeSection} />
      <MemojiGuide
        activeSection={activeSection}
        onStartTour={() => scrollToSection("hero")}
      />

      {/* 1. HERO SECTION */}
      <section
        id="hero"
        className="flex min-h-screen flex-col items-center justify-center px-4 text-center"
      >
        <div className="max-w-3xl space-y-6">
          <h1 className="text-5xl font-extrabold tracking-tight md:text-7xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent pb-2">
            Building Products People Love
          </h1>
          <p className="text-xl text-neutral-600 md:text-2xl">
            A customer-obsessed Senior PM with 9+ years of experience, combining "vibe coding" creativity with proven 0 -&gt; 1 execution to scale platforms          </p>
          <div className="inline-block rounded-full bg-neutral-200 px-4 py-1.5 text-sm font-semibold text-neutral-700">
            Strategy | AI | Innovation | Leadership
          </div>
          <div className="pt-8">
            <div className="pt-8">
              {/* CTA removed as per user request */}
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT SECTION */}
      <section id="about" className="min-h-screen flex items-center justify-center px-4 py-24 relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-12 relative z-10">
          <div className="space-y-6 text-center">
            <h2 className="text-4xl font-bold md:text-5xl">The Engineer Who Speaks 'Business'</h2>
            <p className="mx-auto max-w-2xl text-lg text-neutral-600 leading-relaxed">
              I hold a Dual Degree from IIT Kharagpur. My superpower is closing the loop between technical workflows and user delight.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-neutral-100">
              <div className="text-4xl font-bold text-indigo-600 mb-2">$800K+</div>
              <div className="text-sm text-neutral-600 font-medium">ARR Generated</div>
            </div>
            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-neutral-100">
              <div className="text-4xl font-bold text-purple-600 mb-2">1.5M</div>
              <div className="text-sm text-neutral-600 font-medium">Active Users Impacted</div>
            </div>
            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-neutral-100">
              <div className="text-4xl font-bold text-pink-600 mb-2">80%</div>
              <div className="text-sm text-neutral-600 font-medium">Client Retention Rate</div>
            </div>
          </div>

          {/* <div className="prose prose-lg text-neutral-600 mx-auto">
            <p>
              I'm a Product Manager who codes. I don't just write specs; I build prototypes,
              automate workflows, and understand the technical trade-offs deeply.
              My "Vibe Coding" approach combines product intuition with AI-driven development
              to ship faster and better.
            </p>
          </div> */}
        </div>
      </section>

      {/* 3. WORK SECTION */}
      {/* New Stacking Implementation */}
      <WorkExperienceStack />

      {/* Old Grid Implementation (Uncomment to revert) */}
      {/* <WorkExperienceGrid /> */}

      {/* 4. VIBE CODING PROJECTS */}
      <section id="vibecoding" className="min-h-screen bg-white px-4 py-24">
        <div className="mx-auto max-w-5xl space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold md:text-5xl">Vibe Coding Projects</h2>
            <p className="text-lg text-neutral-600">Building cool stuff with AI</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-3xl bg-neutral-50 p-8 transition-all hover:shadow-xl border border-neutral-100"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-100 text-2xl">
                🌙
              </div>
              <h3 className="mb-2 text-2xl font-bold">Bedtime Stories App</h3>
              <p className="mb-6 text-neutral-600">
                Built an end-to-end Bedtime stories app that emails a unique, AI-generated short story vetted by human to subscribers.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium">Next.js</span>
                <span className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium">OpenAI</span>
                <span className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium">Resend</span>
                <span className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium">Supabase</span>
              </div>
              <a
                href="https://bedtimestories.productmama.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm font-bold text-neutral-900 group-hover:underline"
              >
                Check it out <span className="ml-1">→</span>
              </a>

              {/* Abstract decorative elements for Vibe Coding */}
              <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-blue-100 opacity-0 transition-all blur-xl group-hover:opacity-50" />
              <div className="absolute -top-4 -right-4 h-16 w-16 rounded-full bg-yellow-100 opacity-0 transition-all blur-xl group-hover:opacity-50" />
            </motion.div>

            {/* Project 2 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-3xl bg-neutral-50 p-8 transition-all hover:shadow-xl border border-neutral-100"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-2xl">
                ❓
              </div>
              <h3 className="mb-2 text-2xl font-bold">Quizzing Platform</h3>
              <p className="mb-6 text-neutral-600">
                Developed quizzing platform for DMV test that generates different authentic questions everytime a user takes the quiz.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium">Antigravity</span>
                <span className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium">Vercel</span>
                <span className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium">NotebookLM</span>
                <span className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium">Strapi</span>
              </div>
              <a
                href="https://dmv-practice-quiz.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm font-bold text-neutral-900 group-hover:underline"
              >
                Check it out <span className="ml-1">→</span>
              </a>

              <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-red-100 opacity-0 transition-all blur-xl group-hover:opacity-50" />
              <div className="absolute -top-4 -right-4 h-16 w-16 rounded-full bg-green-100 opacity-0 transition-all blur-xl group-hover:opacity-50" />
            </motion.div>
          </div>

          {/* Tools Marquee or List */}
          <div className="text-center space-y-6 pt-8">
            <p className="font-semibold text-neutral-500 uppercase tracking-widest text-sm">Tools</p>
            <div className="flex flex-wrap justify-center gap-4 opacity-70">
              {["Antigravity", "Vercel", "Resend", "OpenAI API", "NotebookLM", "Supabase", "Cursor", "Github", "Strapi", "Google Search Console", "Google Analytics"].map((tool) => (
                <span key={tool} className="text-neutral-800 font-medium text-lg px-4">{tool}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. SOCIAL CAUSES */}
      <section
        id="social"
        className="flex min-h-screen flex-col items-center justify-center bg-neutral-50 px-4 py-24"
      >
        <div className="max-w-4xl space-y-16 text-center w-full">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold md:text-5xl">Social Causes & Volunteering</h2>
            <p className="mx-auto max-w-2xl text-lg text-neutral-600">
              Giving back to the community and empowering others.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 text-left">
            {[
              {
                role: "Admin",
                org: "UPAY NGO, Bangalore",
                desc: "Responsible for hiring interns, procurement of items, website and app development, and CSR activities."
              },
              {
                role: "Director of Expansion",
                org: "Feed India NGO",
                desc: "Created a network of donors, NGOs and recipients to tackle food wastage in restaurants."
              },

              {
                role: "Mentor",
                org: "Creators of Products Community",
                desc: "Mentored a group of aspiring PMs in a case study from IIM Sirmaur."
              },
              {
                role: "General Secretary, Technology",
                org: "SN/ IG Hall",
                desc: "Elected position; handled 8 interhall events."
              }
            ].map((item, i) => (
              <div key={i} className="rounded-2xl border border-rose-100 bg-rose-50/30 p-6 transition-all hover:shadow-md hover:bg-rose-50/50">
                <h3 className="mb-1 text-xl font-bold text-rose-600">{item.role}</h3>
                <div className="text-sm font-semibold text-neutral-800 mb-2">{item.org}</div>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. HOBBIES */}
      <section
        id="hobbies"
        className="flex min-h-screen flex-col items-center justify-center bg-white px-4 py-24"
      >
        <div className="max-w-4xl space-y-16 text-center w-full">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold md:text-5xl">Beyond Work</h2>
            <p className="mx-auto max-w-2xl text-lg text-neutral-600">
              Creative pursuits and sustainable living.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 text-left">
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50/30 p-8 transition-all hover:shadow-md hover:bg-emerald-50/50">
              <h3 className="mb-4 text-2xl font-bold text-emerald-600">Creative Design</h3>
              <p className="text-neutral-700 leading-relaxed">
                I love designing logos, posters, and websites for friends and family in their personal projects.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-100 bg-emerald-50/30 p-8 transition-all hover:shadow-md hover:bg-emerald-50/50">
              <h3 className="mb-4 text-2xl font-bold text-emerald-600">Sustainability</h3>
              <p className="text-neutral-700 leading-relaxed">
                I strive to minimize my footprint and advocate for eco-friendly choices.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-100 bg-emerald-50/30 p-8 transition-all hover:shadow-md hover:bg-emerald-50/50">
              <h3 className="mb-4 text-2xl font-bold text-emerald-600">Baking & Brewing</h3>
              <p className="text-neutral-700 leading-relaxed">
                Love to bake sourdough, healthier dessert options and brew ginger beer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CONTACT */}
      <section
        id="contact"
        className="flex min-h-screen flex-col items-center justify-center bg-neutral-900 px-4 text-center text-white"
      >
        <div className="max-w-2xl space-y-8">
          <h2 className="text-4xl font-bold md:text-5xl">Ready to Chat?</h2>
          <p className="text-xl text-neutral-400">Based in Fremont, California. Open to opportunities.</p>

          <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-6 justify-center items-center">
            <a
              href="mailto:sravya.iitkgp@gmail.com"
              className="flex items-center gap-3 rounded-full bg-white px-6 py-3 font-semibold text-neutral-900 transition-hover hover:bg-neutral-200"
            >
              <Mail className="h-5 w-5" />
              sravya.iitkgp@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/sravya-majeti/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-full border border-neutral-700 bg-transparent px-6 py-3 font-semibold text-white transition-hover hover:bg-neutral-800"
            >
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </a>
            <a
              href="https://www.roblox.com/games/139509915888260/Sravyas-Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-full border border-neutral-700 bg-transparent px-6 py-3 font-semibold text-white transition-hover hover:bg-neutral-800"
            >
              <Gamepad2 className="h-5 w-5" />
              Portfolio Game
            </a>
          </div>

          <footer className="pt-24 text-neutral-400 text-sm">
            © {new Date().getFullYear()} Sravya Majeti. Built with Next.js, Tailwind, & Framer Motion.
          </footer>
        </div>
      </section>

      {/* Padding for bottom to ensure content isn't covered by memoji on mobile if needed */}
      <div className="h-32 md:hidden"></div>
    </main>
  );
}
