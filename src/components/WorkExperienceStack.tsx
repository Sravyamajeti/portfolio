"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const experiences = [
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
        description: "Built the product from 0 -> $800k ARR, achieving 80% retention by deeply understanding and solving marketer pain points. Led critical AI initiatives including Brand Safety and Natural Language-based Creator Discovery empowering brands to find relevant creators instantly",
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
            "Sole PM responsible for the 0 -> 1 launch of the platform, building both the user-facing learning engine and the complete internal CMS to power content operations. Mapped the end-to-end journey from Pre-purchase to Certification, delivering a seamless Live + On-Demand experience ",
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
            "Engineered a Smart Vendor Routing system for mobile recharges, boosting fulfillment rates to 95% and increasing revenue by 35%. Led the mobile-first transformation for a major bank, launching critical modules to 1.5M+ users after conducting detailed user research.",
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
            "Transformed complex commuter data into high-impact strategies, launching Micro Rentals across 3 cities to capture 20% of city bookings. Increased the discoverability of this new category through a cross-selling algorithm that grew new bookings by 15% by intelligently anticipating user destination intent",
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
