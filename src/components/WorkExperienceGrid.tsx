import React from "react";

const experiences = [
    {
        company: "Only Much Louder",
        role: "Senior Product Manager | Aug 2022 – Jul 2025",
        description:
            "Spearheaded a SaaS platform from concept to $800K ARR with 80% client retention. Built in-house NSFW brand safety transformer using Falcon 7B model.",
        color: "bg-purple-100",
        hoverColor: "group-hover:bg-purple-200",
        textColor: "text-purple-600",
    },
    {
        company: "ProAlley",
        role: "Product Manager | Apr 2021 – Aug 2022",
        description:
            "Sole PM launching the learner experience for 14 courses. Removed 100% of developer dependency for course launches.",
        color: "bg-indigo-100",
        hoverColor: "group-hover:bg-indigo-200",
        textColor: "text-indigo-600",
    },
    {
        company: "Nuclei",
        role: "Product Manager | Aug 2018 – Feb 2021",
        description:
            "Bootstrapped fintech B2B2C startup. Built 'Smart Vendor Routing' logic that increased revenue by 35%.",
        color: "bg-blue-100",
        hoverColor: "group-hover:bg-blue-200",
        textColor: "text-blue-600",
    },
    {
        company: "Ola Cabs",
        role: "Business Analyst | Jun 2016 – Aug 2018",
        description:
            "Conceptualized a cross-selling algorithm leading to 15% growth in bookings. Analyzed demand for 'Micro Rentals' capturing 20% of city bookings.",
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
