"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, Download } from "lucide-react";

export default function ResumeButton() {
    return (
        <motion.a
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            href="/Sravya_PM_Resume.pdf"
            download="Sravya_Majeti_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed z-50 top-4 right-4 md:top-8 md:right-8 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-neutral-800 shadow-lg backdrop-blur-sm transition-transform hover:scale-105 hover:bg-white border border-neutral-200"
        >
            <FileText className="h-4 w-4 text-indigo-600" />
            <span className="hidden md:inline">Resume</span>
            <Download className="h-3 w-3 text-neutral-400 md:ml-1" />
        </motion.a>
    );
}
