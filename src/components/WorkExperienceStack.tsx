"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const experiences = [
    {
        company: "Publlish",
        role: "Product Consultant| Sep 2025 – Present",
        caption: "Social Media content scheduling and analytics tool for agencies and creators",
        description: "Taking on the role of Product Consultant at Publlish, I've been shaping an intuitive content scheduling and analytics tool designed for modern creators. I introduced an amazing AI-powered captioning feature with tone-matching and batch-publishing capabilities, saving folks 26% of their time spent posting. I also brought teams closer together by developing a collaborative content approval module that boosted agency-brand coordination efficiency by a fantastic 34%!",
        color: "bg-emerald-100",
        hoverColor: "group-hover:bg-emerald-200",
        textColor: "text-emerald-600",
        accent: "bg-emerald-500",
    },
    {
        company: "Only Much Louder",
        role: "Senior Product Manager | Aug 2022 – Jul 2025",
        caption: "SaaS platform (Hypothesis) streamlining end-to-end influencer marketing and creator workflows",
        // achievements: [
        //     {
        //         title: "0 -> 800k ARR Growth",
        //         detail: "Drove the platform from concept to significant revenue by solving critical marketer pain points.",
        //     }
        // ],
        description: "Spearheaded our SaaS platform from mere concept to $800K ARR, drove 54% net new client growth and 100% cross-sell penetration. I dove deep into AI, building an in-house NSFW brand safety transformer evaluating 5 key parameters that optimized manual creator vetting by 27%. Our GenAI natural language search revolutionized creator discovery, boosting search usage by 63% and slashing support queries by 42%. Beyond the product surface, I focused on operational scalability by designing a self-serve onboarding tool that cut account setup times by 37% without needing a single developer. Ran a squad of 15 brilliant folks and achieved 'Best Performer' two years in a row!",
        color: "bg-purple-100",
        hoverColor: "group-hover:bg-purple-200",
        textColor: "text-purple-600",
        accent: "bg-purple-500",
    },
    {
        company: "ProAlley",
        role: "Product Manager | Apr 2021 – Aug 2022",
        caption: "EdTech startup focusing on professional upskilling",
        description:
            "Built and launched the entire learner experience from the ground up, delivered 100% satisfaction to our premium users. I led a 10-member team across engineering, design, and support, shipping key differentiators like live mentor sessions and async query resolutions based on deep JTBD synthesis. To keep our team moving fast, I streamlined a robust Content Management System that completely eliminated developer dependency for new course launches. I also rolled out SEO initiatives that successfully boosted our organic visibility by 23% and reduced CAC.",
        color: "bg-indigo-100",
        hoverColor: "group-hover:bg-indigo-200",
        textColor: "text-indigo-600",
        accent: "bg-indigo-500",
    },
    {
        company: "Nuclei",
        role: "Product Manager | Aug 2018 – Feb 2021",
        caption: "Bootstrapped fintech B2B2C startup empowering financial institutions to build super-app ecosystems",
        description:
            "I drove our product-led growth by launching key modules like Recharge, Credit Score, and Bill Payments, which ultimately contributed to 53% of company revenue. A technical challenge was building our 'Smart Vendor Routing' system, a move that optimized fulfillment success rates and bumped revenue by 32%. I scaled our platform for a massive 1.5M user launch through meticulous user research, and even swiftly introduced a Covid-19 donation module that went on to raise $151K in just 2 months.",
        color: "bg-blue-100",
        hoverColor: "group-hover:bg-blue-200",
        textColor: "text-blue-600",
        accent: "bg-blue-500",
    },
    {
        company: "Ola Cabs",
        role: "Business Analyst | Jun 2016 – Aug 2018",
        caption: "Ride-hailing giant handling millions of daily transactions",
        description:
            "Diving into the fast-paced world of ride-hailing, I dug into massive commuter datasets to find hidden opportunities. I grew rentals by 17% by conceptualizing an intent-based cross-sell algorithm applying behavioral analytics across 100K rides. By boosting driver peak login hours by 20% by strategically nudging segmented drivers, I helped the business scale efficiently while running rigorous A/B tests before full launches.",
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

                {/* Stacking Container */}
                <div className="relative">
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
            className="sticky mb-12 flex flex-col justify-center"
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
                            <h3 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold text-neutral-900">{company}</h3>
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
