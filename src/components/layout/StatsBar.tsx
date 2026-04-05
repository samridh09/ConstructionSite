"use client";

import React from "react";
import { motion } from "framer-motion";

const stats = [
    { value: "659+", label: "PROJECTS COMPLETED" },
    { value: "89K+", label: "SQUARE FEET BUILT" },
    { value: "165M+", label: "GLOBAL INVESTMENT" },
    { value: "125+", label: "EXPERT ENGINEERS" }
];

export const StatsBar = () => {
    return (
        <section className="bg-white py-12 px-6 border-b border-black/5">
            <div className="max-w-[1700px] mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex flex-col items-center justify-center text-center group"
                        >
                            <span className="text-4xl md:text-[50px] lg:text-[60px] font-[1000] text-[#FFC107] tracking-tighter leading-none hover:scale-105 transition-transform cursor-default">
                                {stat.value}
                            </span>
                            <span className="text-[10px] md:text-[11px] font-[1000] text-black/40 tracking-[0.3em] uppercase mt-4">
                                {stat.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
