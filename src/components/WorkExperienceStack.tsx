"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const experiences = [
    {
        company: "Qure.ai",
        emojis: ["🩺", "☁️"],
        role: "Product Consultant | Jun 2026 – Present",
        caption: "CTO’s Office, New AI Initiatives (Global AI healthcare streamlining radiology workflows and patient care)",
        description: "At the CTO’s Office driving New AI Initiatives, I'm currently building a node-based, deterministic clinical workflow builder for patient routing that uses LLMs to extract unstructured data, cutting site configuration time by 70% and removing developer dependency. I also architected a standalone qTrack demo CMS that bypasses live APIs, speeding up patient story creation by 67%, and launched an automated pitch deck tool that cut the Business Development team's presentation prep time by 48%.",
        color: "bg-teal-100",
        hoverColor: "group-hover:bg-teal-200",
        textColor: "text-teal-600",
        accent: "bg-teal-500",
    },
    {
        company: "Publlish",
        emojis: ["🎬"],
        role: "Product Consultant | Sep 2025 – May 2026",
        caption: "Social Media content scheduling and analytics tool for agencies and creators",
        description: "At Publlish, I shaped an intuitive content scheduling and analytics tool designed for modern creators. I introduced an AI-powered captioning feature with tone-matching and batch-publishing capabilities, saving creators 26% of their time spent posting. I also brought teams closer together by developing a collaborative content approval module that boosted agency-brand coordination efficiency by 34%!",
        color: "bg-emerald-100",
        hoverColor: "group-hover:bg-emerald-200",
        textColor: "text-emerald-600",
        accent: "bg-emerald-500",
    },
    {
        company: "Only Much Louder",
        emojis: ["🎬", "☁️"],
        role: "Senior Product Manager | Aug 2022 – Jul 2025",
        caption: "SaaS platform (Hypothesis) streamlining end-to-end influencer marketing and creator workflows",
        // achievements: [
        //     {
        //         title: "0 -> 800k ARR Growth",
        //         detail: "Drove the platform from concept to significant revenue by solving critical marketer pain points.",
        //     }
        // ],
        description: "As founding PM, I took our SaaS platform from concept to $800K ARR and led a squad of 15. I launched a Creator Discovery platform indexing 350M+ creators, which drove 54% net new client growth. I shipped GenAI natural language search, which raised search usage by 63% and cut support queries by 42%, plus an in-house NSFW brand safety model that reduced manual vetting by 27%. Named 'Best Performer' two years in a row!",
        color: "bg-purple-100",
        hoverColor: "group-hover:bg-purple-200",
        textColor: "text-purple-600",
        accent: "bg-purple-500",
    },
    {
        company: "ProAlley",
        emojis: ["🎓"],
        role: "Product Manager | Apr 2021 – Aug 2022",
        caption: "EdTech startup focusing on professional upskilling (by Aptech)",
        description:
            "Built and launched the entire learner experience from the ground up, delivered 100% satisfaction to our premium users. I led a 10-member team across engineering, design, and support, shipping key differentiators like live mentor sessions and async query resolutions based on deep JTBD synthesis. To keep our team moving fast, I streamlined a robust Content Management System that completely eliminated developer dependency for new course launches.",
        color: "bg-indigo-100",
        hoverColor: "group-hover:bg-indigo-200",
        textColor: "text-indigo-600",
        accent: "bg-indigo-500",
    },
    {
        company: "Nuclei",
        emojis: ["☁️"],
        role: "Product Manager | Aug 2018 – Feb 2021",
        caption: "Bootstrapped fintech B2B2C startup empowering financial institutions to build super-app ecosystems",
        description:
            "I drove product-led growth by launching key modules like Recharge, Credit Score, Donations, and Bill Payments, which ultimately contributed to 53% of company revenue. Engineered 'Smart Vendor Routing' to optimize recharge fulfillment success rates which bumped revenue by 32%. I scaled our platform for a massive 1.5M user launch through meticulous user research, and swiftly introduced a Covid-19 donation module that went on to raise $151K in just 2 months.",
        color: "bg-blue-100",
        hoverColor: "group-hover:bg-blue-200",
        textColor: "text-blue-600",
        accent: "bg-blue-500",
    },
    {
        company: "Ola Cabs",
        emojis: ["🚕"],
        role: "Product Analyst | Jun 2016 – Aug 2018",
        caption: "Ride-hailing giant handling millions of daily transactions",
        description:
            "Diving into the fast-paced world of ride-hailing, I dug into massive commuter datasets to find hidden opportunities. I grew rentals by 17% by conceptualizing an intent-based cross-sell algorithm applying behavioral analytics across 100K rides. By reducing coupon burn by 22% through targeted dashboards for first-time renters, and boosting driver peak login hours by 20% by strategically nudging segmented drivers, I helped the business scale efficiently while running rigorous A/B tests before full launches.",
        color: "bg-orange-100",
        hoverColor: "group-hover:bg-orange-200",
        textColor: "text-orange-600",
        accent: "bg-orange-500",
    },
];

export default function WorkExperienceStack() {
    return (
        <section id="work" className="relative min-h-screen bg-yellow-50 px-4 py-24">
            <div className="mx-auto max-w-5xl space-y-16">
                <h2 className="font-[family-name:var(--font-space-grotesk)] text-center text-4xl font-bold md:text-5xl mb-24 bg-gradient-to-r from-yellow-400 to-orange-700 bg-clip-text text-transparent py-3 leading-relaxed overflow-visible">
                    Things I've Built
                </h2>

                {/* Stacking Container - Grid normalizes height so the sticky threshold is perfectly identical and they collapse together cleanly */}
                <div className="grid gap-12" style={{ gridAutoRows: '1fr' }}>
                    {experiences.map((exp, i) => (
                        <Card key={i} {...exp} index={i} total={experiences.length} />
                    ))}
                </div>

                {/* Spacer to allow scrolling past the last card nicely */}
                <div className="h-24"></div>
            </div>
        </section>
    );
}

function Card({
    company,
    emojis,
    role,
    caption,
    description,
    achievements,
    color,
    hoverColor,
    textColor,
    accent,
    index,
    total,
}: any) {
    // Offset each card slightly so they stack visibly
    const topOffset = 120 + index * 15;

    return (
        <div
            className="sticky flex flex-col justify-start pb-8"
            style={{ top: `${topOffset}px`, zIndex: index + 1 }}
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative mx-auto w-full max-w-3xl rounded-3xl border border-neutral-100 bg-white p-8 shadow-lg transition-all hover:shadow-2xl overflow-hidden`}
                style={{
                    // Add a subtle rotation or scale if desired, but clean stacking is best
                }}
            >
                {/* Decorative Circle */}
                <div
                    className={`absolute -right-8 -top-8 h-32 w-32 rounded-full ${color} opacity-40 transition-colors ${hoverColor} blur-2xl`}
                ></div>

                <div className="relative z-10 flex flex-col gap-4 md:flex-row md:items-start md:gap-8">
                    {/* Number/Icon pillar */}
                    <div className="flex-shrink-0">
                        <div className={`flex h-12 w-12 items-center justify-center rounded-full ${color} text-xl font-bold ${textColor}`}>
                            {index + 1}
                        </div>
                    </div>

                    <div className="space-y-4 w-full">
                        <div>
                            <div className="flex items-center gap-2.5">
                                <h3 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold text-neutral-900">{company}</h3>
                                {emojis && (
                                    <span className="flex items-center gap-1 text-lg select-none">
                                        {emojis.map((emoji: string, idx: number) => (
                                            <span key={idx}>{emoji}</span>
                                        ))}
                                    </span>
                                )}
                            </div>
                            <p className={`text-md font-semibold ${textColor}`}>{role}</p>
                            {caption && (
                                <p className="text-sm font-medium text-neutral-500 italic mt-1">{caption}</p>
                            )}
                        </div>

                        {achievements ? (
                            <ul className="space-y-3 mt-2">
                                {achievements.map((item: any, i: number) => (
                                    <li key={i} className="text-neutral-600 leading-relaxed text-lg">
                                        <span className="font-bold text-neutral-800">{item.title}:</span>{" "}
                                        {item.detail}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-lg text-neutral-600 leading-relaxed">
                                {description}
                            </p>
                        )}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
