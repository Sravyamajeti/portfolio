import React from "react";

const experiences = [
    {
        company: "Publlish",
        role: "Product Consultant | Sep 2025 – Present",
        description: "Taking on the role of Product Consultant at Publlish, I've been shaping an intuitive content scheduling and analytics tool designed for modern creators. I introduced an amazing AI-powered captioning feature with tone-matching and batch-publishing capabilities, saving folks 26% of their time spent posting. I also brought teams closer together by developing a collaborative content approval module that boosted agency-brand coordination efficiency by a fantastic 34%!",
        color: "bg-emerald-100",
        hoverColor: "group-hover:bg-emerald-200",
        textColor: "text-emerald-600",
    },
    {
        company: "Only Much Louder",
        role: "Senior Product Manager | Aug 2022 – Jul 2025",
        description:
            "Spearheaded our SaaS platform from mere concept to $800K ARR, drove 54% net new client growth and 100% cross-sell penetration. I dove deep into AI, building an in-house NSFW brand safety transformer evaluating 5 key parameters that optimized manual creator vetting by 27%. Our GenAI natural language search revolutionized creator discovery, boosting search usage by 63% and slashing support queries by 42%. Beyond the product surface, I focused on operational scalability by designing a self-serve onboarding tool that cut account setup times by 37% without needing a single developer. Ran a squad of 15 brilliant folks and achieved 'Best Performer' two years in a row!",
        color: "bg-purple-100",
        hoverColor: "group-hover:bg-purple-200",
        textColor: "text-purple-600",
    },
    {
        company: "ProAlley",
        role: "Product Manager | Apr 2021 – Aug 2022",
        description:
            "As the Product Manager, I built and launched the entire learner experience from the ground up, delivering 100% satisfaction to our premium users. I led a 10-member team across engineering, design, and support, shipping key differentiators like live mentor sessions and async query resolutions based on deep JTBD synthesis. To keep our team moving fast, I streamlined a robust Content Management System that completely eliminated developer dependency for new course launches. I also rolled out SEO initiatives that successfully boosted our organic visibility by 23% and reduced CAC.",
        color: "bg-indigo-100",
        hoverColor: "group-hover:bg-indigo-200",
        textColor: "text-indigo-600",
    },
    {
        company: "Nuclei",
        role: "Product Manager | Aug 2018 – Feb 2021",
        description:
            "At this bootstrapped B2B2C fintech startup, I drove our product-led growth by launching key modules like Recharge, Credit Score, and Bill Payments, which ultimately contributed to 53% of company revenue. A technical challenge was building our 'Smart Vendor Routing' system, a move that optimized fulfillment success rates and bumped revenue by 32%. I scaled our platform for a massive 1.5M user launch through meticulous user research, and even swiftly introduced a Covid-19 donation module that went on to raise $151K in just 2 weeks.",
        color: "bg-blue-100",
        hoverColor: "group-hover:bg-blue-200",
        textColor: "text-blue-600",
    },
    {
        company: "Ola Cabs",
        role: "Business Analyst | Jun 2016 – Aug 2018",
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
                            <h3 className="mb-2 text-2xl font-bold text-neutral-900">
                                {exp.company}
                            </h3>
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
