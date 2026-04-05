"use client";

import { motion } from "framer-motion";

export const Footer = () => {
    const FOOTER_LINKS = [
      {
        title: "QUICK LINKS",
        links: ["Overview", "Features", "Solutions", "Tutorials", "Pricing"],
      },
      {
        title: "OUR COMPANY",
        links: ["About Us", "Careers", "News", "Media Kit", "Contact"],
      },
      {
        title: "RESOURCES",
        links: ["Blog", "Help Center", "Tutorials", "Support", "Services"],
      },
      {
        title: "COLLABORATE",
        links: ["Partners", "Partners Program", "Affiliate Program", "Community", "HR Partner Program"],
      },
    ];

    return (
        <footer className="relative bg-black text-white selection:bg-primary selection:text-black antialiased font-sans flex flex-col">
            
            {/* --- TOP SECTION: FULL-WIDTH SPREAD --- */}
            <div className="max-w-[95%] w-full mx-auto px-12 lg:px-16 pt-24 pb-20 relative z-10">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-20">
                    
                    {/* Brand Info Column */}
                    <div className="space-y-12 min-w-[240px]">
                        <div className="flex items-center gap-4 group cursor-pointer">
                            <div className="grid grid-cols-2 gap-[4px] opacity-100">
                                {[...Array(6)].map((_, i) => (
                                    <div key={i} className="w-[11px] h-[11px] bg-[#FFC107] rounded-[1px]" />
                                ))}
                            </div>
                            <span className="text-3xl font-[900] tracking-tighter uppercase leading-none">Kontric</span>
                        </div>
                        
                        <div className="space-y-6 text-[#888888] font-medium tracking-tight">
                            <p className="text-[14.5px] leading-relaxed max-w-[210px]">
                                Terry Ln, Shoshoni, WY<br />
                                82649, USA
                            </p>
                            
                            <div className="space-y-2.5 pt-4">
                                <p className="text-white text-2xl font-[900] tracking-tight leading-none">
                                    +1890 123 456
                                </p>
                                <p className="text-[13px] text-[#888888] hover:text-white transition-colors cursor-pointer font-bold">
                                    support@example.com
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Nav Sections - Spreading to Right with Large Text */}
                    <div className="flex-1 grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 lg:-mt-10 lg:justify-items-end">
                        {FOOTER_LINKS.map((section) => (
                            <div key={section.title} className="space-y-10 w-full max-w-[220px]">
                                <div className="space-y-4">
                                    <h4 className="text-[12.5px] font-[1000] uppercase tracking-[0.25em] text-white flex items-center gap-2">
                                        <span className="text-[#FFC107] font-bold opacity-100">//</span> {section.title}
                                    </h4>
                                    <div className="w-full h-px bg-white/10" />
                                </div>
                                <ul className="space-y-[18px]">
                                    {section.links.map((link) => (
                                        <li key={link}>
                                            <a href="#" className="text-[#888888] hover:text-white transition-all text-[15px] font-[800] tracking-tight block">
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};
