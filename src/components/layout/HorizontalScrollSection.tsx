"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "SUNRISE MEADOW",
        category: "// RESIDENTIAL",
        description: "Innovative high-rise living with a focus on sustainable materials and geometric architectural excellence.",
        image: "/project-glass.png",
        color: "bg-[#FFC107]"
    },
    {
        id: 2,
        title: "HARBORLINE HUB",
        category: "// INDUSTRIAL",
        description: "Massive scale manufacturing facility integrated with smart logistics and heavy-duty structural engineering.",
        image: "/news-bridge.png",
        color: "bg-black"
    },
    {
        id: 3,
        title: "TITAN FOUNDRY",
        category: "// INFRASTRUCTURE",
        description: "Specialized industrial foundry featuring advanced thermal management and high-stakes reinforced framing.",
        image: "/news-excavator.png",
        color: "bg-white"
    },
    {
        id: 4,
        title: "CRESTVIEW PLAZA",
        category: "// COMMERCIAL",
        description: "Premium urban commercial center with glass-and-steel aesthetic and open-concept structural planning.",
        image: "/services-arch.png",
        color: "bg-[#E1EBF2]"
    }
];

export const HorizontalScrollSection = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-65%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-black">
            <div className="sticky top-0 h-screen flex flex-col items-center overflow-hidden">
                
                {/* Section Title Background (Massive) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center pointer-events-none">
                    <h2 className="text-[20vw] font-[1000] text-white/[0.03] uppercase tracking-tighter leading-none whitespace-nowrap">
                        WHERE WONDER AWAITS
                    </h2>
                </div>

                {/* Header Content */}
                <div className="w-full max-w-[1700px] px-6 lg:px-12 pt-24 relative z-10 flex flex-col lg:flex-row justify-between items-end gap-10">
                    <div className="space-y-6">
                        <div className="bg-[#FFC107] px-4 py-1.5 inline-flex items-center">
                            <span className="text-[11px] font-black text-black tracking-widest uppercase">
                                // EXPLORE OUR LEGACY
                            </span>
                        </div>
                        <h3 className="text-4xl lg:text-[5vw] font-[1000] text-white leading-[0.9] tracking-tighter uppercase">
                            WHERE WONDER<br />AWAITS
                        </h3>
                    </div>
                    <p className="text-[14px] text-white/40 leading-relaxed font-medium max-w-[350px] mb-4">
                        Experience the architectural evolution of industry. Scroll to navigate through our defining milestones.
                    </p>
                </div>

                {/* Horizontal Track */}
                <div className="flex-1 w-full flex items-center">
                    <motion.div style={{ x }} className="flex gap-12 pl-[10%]">
                        {projects.map((project) => (
                            <div 
                                key={project.id} 
                                className="relative w-[85vw] lg:w-[45vw] h-[55vh] flex-shrink-0 group"
                            >
                                {/* Image Base */}
                                <div className="relative w-full h-full overflow-hidden border border-white/10">
                                    <Image 
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-[2s] group-hover:scale-110 grayscale-[0.5] group-hover:grayscale-0"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                                </div>

                                {/* Floating Content Card */}
                                <div className="absolute -bottom-10 -right-10 bg-white p-8 lg:p-12 w-[80%] lg:w-[70%] shadow-2xl z-20 group-hover:-translate-y-4 transition-transform duration-700">
                                    <div className="space-y-6">
                                        <div className="flex justify-between items-center">
                                            <span className="text-[10px] font-black text-black/30 tracking-widest uppercase">
                                                {project.category}
                                            </span>
                                            <span className="text-[10px] font-black text-[#FFC107]">0{project.id}</span>
                                        </div>
                                        <h4 className="text-2xl lg:text-3xl font-[1000] text-black tracking-tighter uppercase leading-none">
                                            {project.title}
                                        </h4>
                                        <p className="text-[13px] text-black/60 leading-relaxed line-clamp-2">
                                            {project.description}
                                        </p>
                                    </div>
                                    {/* Action Button */}
                                    <div className="absolute bottom-0 right-0 w-12 h-12 bg-black flex items-center justify-center group/btn cursor-pointer">
                                        <ArrowUpRight className="w-5 h-5 text-[#FFC107] group-hover/btn:rotate-45 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Progress Indicator */}
                <div className="w-full max-w-[1700px] h-[1px] bg-white/10 mb-24 relative overflow-hidden">
                    <motion.div 
                        style={{ scaleX: scrollYProgress }}
                        className="absolute inset-y-0 left-0 w-full bg-[#FFC107] origin-left"
                    />
                </div>

            </div>
        </section>
    );
};
