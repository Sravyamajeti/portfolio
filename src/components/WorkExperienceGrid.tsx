import React from "react";

const experiences = [
    {
        company: "Qure.ai",
        emojis: ["🩺", "☁️"],
        role: "Product Consultant | Jun 2026 – Present",
        description: "At the CTO’s Office driving New AI Initiatives, I'm currently building a node-based, deterministic clinical workflow builder for patient routing that uses LLMs to extract unstructured data, cutting site configuration time by 70% and removing developer dependency. I also architected a standalone qTrack demo CMS that bypasses live APIs, speeding up patient story creation by 67%, and launched an automated pitch deck tool that cut the Business Development team's presentation prep time by 48%.",
        color: "bg-teal-100",
        hoverColor: "group-hover:bg-teal-200",
        textColor: "text-teal-600",
    },
    {
        company: "Publlish",
        emojis: ["🎬"],
        role: "Product Consultant | Sep 2025 – May 2026",
        description: "At Publlish, I shaped an intuitive content scheduling and analytics tool designed for modern creators. I introduced an AI-powered captioning feature with tone-matching and batch-publishing capabilities, saving creators 26% of their time spent posting. I also brought teams closer together by developing a collaborative content approval module that boosted agency-brand coordination efficiency by 34%!",
        color: "bg-emerald-100",
        hoverColor: "group-hover:bg-emerald-200",
        textColor: "text-emerald-600",
    },
    {
        company: "Only Much Louder",
        emojis: ["🎬", "☁️"],
        role: "Senior Product Manager | Aug 2022 – Jul 2025",
        description:
            "As founding PM, I took our SaaS platform from concept to $800K ARR and led a squad of 15. I launched a Creator Discovery platform indexing 350M+ creators, which drove 54% net new client growth. I shipped GenAI natural language search, which raised search usage by 63% and cut support queries by 42%, plus an in-house NSFW brand safety model that reduced manual vetting by 27%. Named 'Best Performer' two years in a row!",
        color: "bg-purple-100",
        hoverColor: "group-hover:bg-purple-200",
        textColor: "text-purple-600",
    },
    {
        company: "ProAlley",
        emojis: ["🎓"],
        role: "Product Manager | Apr 2021 – Aug 2022",
        description:
            "Built and launched the entire learner experience from the ground up, delivering 100% satisfaction to our premium users. I led a 10-member team across engineering, design, and support, shipping key differentiators like live mentor sessions and async query resolutions based on deep JTBD synthesis. To keep our team moving fast, I streamlined a robust Content Management System that completely eliminated developer dependency for new course launches.",
        color: "bg-indigo-100",
        hoverColor: "group-hover:bg-indigo-200",
        textColor: "text-indigo-600",
    },
    {
        company: "Nuclei",
        emojis: ["☁️"],
        role: "Product Manager | Aug 2018 – Feb 2021",
        description:
            "I drove product-led growth by launching key modules like Recharge, Credit Score, Donations, and Bill Payments, which ultimately contributed to 53% of company revenue. Engineered 'Smart Vendor Routing' to optimize recharge fulfillment success rates which bumped revenue by 32%. I scaled our platform for a massive 1.5M user launch through meticulous user research, and swiftly introduced a Covid-19 donation module that went on to raise $151K in just 2 months.",
        color: "bg-blue-100",
        hoverColor: "group-hover:bg-blue-200",
        textColor: "text-blue-600",
    },
    {
        company: "Ola Cabs",
        emojis: ["🚕"],
        role: "Product Analyst | Jun 2016 – Aug 2018",
        description:
            "Diving into the fast-paced world of ride-hailing, I dug into massive commuter datasets to find hidden opportunities. I grew rentals by 17% by conceptualizing an intent-based cross-sell algorithm applying behavioral analytics across 100K rides. By reducing coupon burn by 22% through targeted dashboards for first-time renters, and boosting driver peak login hours by 20% by strategically nudging segmented drivers, I helped the business scale efficiently while running rigorous A/B tests before full launches.",
        color: "bg-orange-100",
        hoverColor: "group-hover:bg-orange-200",
        textColor: "text-orange-600",
    },
];

export default function WorkExperienceGrid() {
    return (
        <section id="work" className="min-h-screen bg-neutral-50 px-4 py-24">
            <div className="mx-auto max-w-5xl space-y-16">
                <h2 className="text-center text-4xl font-bold md:text-5xl">
                    Things I've Built (Grid)
                </h2>
                <div className="grid gap-8 md:grid-cols-2">
                    {experiences.map((exp, i) => (
                        <div
                            key={i}
                            className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl border border-neutral-100"
                        >
                            <div
                                className={`absolute top-0 right-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full ${exp.color} opacity-50 ${exp.hoverColor}`}
                            ></div>
                            <div className="flex items-center gap-2 mb-2">
                                <h3 className="text-2xl font-bold text-neutral-900">
                                    {exp.company}
                                </h3>
                                {exp.emojis && (
                                    <span className="flex items-center gap-1 text-base select-none">
                                        {exp.emojis.map((emoji: string, idx: number) => (
                                            <span key={idx}>{emoji}</span>
                                        ))}
                                    </span>
                                )}
                            </div>
                            <p className={`mb-4 text-sm font-semibold ${exp.textColor}`}>
                                {exp.role}
                            </p>
                            <p className="text-neutral-600 leading-relaxed">
                                {exp.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
