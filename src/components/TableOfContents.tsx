"use client";

import React, { useState } from "react";

const sections = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "work", label: "Work" },
    { id: "vibecoding", label: "Projects" },
    { id: "social", label: "Social Causes" },
    { id: "hobbies", label: "Hobbies" },
    { id: "contact", label: "Contact" },
];

interface TableOfContentsProps {
    activeSection: string;
}

export default function TableOfContents({ activeSection }: TableOfContentsProps) {
    const [isHovered, setIsHovered] = useState(false);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
            <div
                className="relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Consolidated Menu Tooltip */}
                <div
                    className={`
            absolute right-8 top-1/2 -translate-y-1/2
            bg-white rounded-lg shadow-xl border border-neutral-200
            py-2 px-1 min-w-[180px]
            transition-all duration-200
            ${isHovered ? "opacity-100 visible" : "opacity-0 invisible"}
          `}
                >
                    {sections.map((section) => {
                        const isActive = activeSection === section.id;
                        return (
                            <button
                                key={section.id}
                                onClick={() => scrollToSection(section.id)}
                                className={`
                  w-full text-left px-3 py-2 rounded-md text-sm
                  transition-colors duration-150
                  flex items-center gap-2
                  ${isActive
                                        ? "bg-blue-50 text-blue-600 font-medium"
                                        : "text-neutral-700 hover:bg-neutral-50"
                                    }
                `}
                            >
                                <span className={`
                  inline-block w-1 h-1 rounded-full
                  ${isActive ? "bg-blue-600" : "bg-neutral-300"}
                `} />
                                {section.label}
                            </button>
                        );
                    })}
                </div>

                {/* Line Indicators */}
                <div className="flex flex-col gap-3">
                    {sections.map((section) => {
                        const isActive = activeSection === section.id;
                        return (
                            <div
                                key={section.id}
                                className="flex items-center justify-end"
                            >
                                <div
                                    className={`
                    h-0.5 transition-all duration-300
                    ${isActive
                                            ? "w-8 bg-neutral-900"
                                            : "w-4 bg-neutral-300"
                                        }
                  `}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
