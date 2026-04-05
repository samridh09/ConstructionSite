"use client";

import React from "react";
import { motion } from "framer-motion";

const logos = [
    "Hisense",
    "Volker Stevin",
    "ARITECH",
    "DELTA",
    "OCTANORM",
    "Oltmans",
    "Hisense",
    "Volker Stevin",
    "ARITECH",
    "DELTA",
    "OCTANORM",
    "Oltmans"
];

export const LogoMarquee = () => {
    return (
        <section className="bg-white py-12 border-b border-black/5 overflow-hidden">
            <div className="flex whitespace-nowrap">
                <motion.div 
                    animate={{ x: [0, -1000] }}
                    transition={{ 
                        duration: 30, 
                        repeat: Infinity, 
                        ease: "linear" 
                    }}
                    className="flex items-center gap-20 px-10"
                >
                    {logos.map((logo, i) => (
                        <span 
                            key={i} 
                            className="text-2xl font-[1000] text-black/20 uppercase tracking-tighter hover:text-black transition-colors cursor-default"
                        >
                            {logo}
                        </span>
                    ))}
                    {/* Duplicate for seamless loop */}
                    {logos.map((logo, i) => (
                        <span 
                            key={`dup-${i}`} 
                            className="text-2xl font-[1000] text-black/20 uppercase tracking-tighter hover:text-black transition-colors cursor-default"
                        >
                            {logo}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
