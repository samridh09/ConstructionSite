"use client";

import Image from "next/image";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const articles = [
    {
        date: "24 FEB",
        image: "/news-excavator.png",
        category: "PROJECT MANAGEMENT",
        author: "admin",
        title: "ESSENTIAL STEPS IN PLANNING A SUCCESSFUL BUILDING PROJECT",
        excerpt: "Learn the essential steps in planning a successful building project, from setting clear goals and budget targets to selecting the right team."
    },
    {
        date: "24 FEB",
        image: "/news-engineers-1.png",
        category: "RENOVATION & REMODELING",
        author: "admin",
        title: "SUSTAINABLE CONSTRUCTION: BUILDING A GREENER FUTURE",
        excerpt: "Explore how sustainable construction practices reduce environmental impact, improve energy efficiency, and create a healthier planet."
    },
    {
        date: "24 FEB",
        image: "/news-engineers-2.png",
        category: "RESIDENTIAL CONSTRUCTION",
        author: "admin",
        title: "HOW TECHNOLOGY IS TRANSFORMING CONSTRUCTION MANAGEMENT",
        excerpt: "Discover how technology is transforming construction management through digital tools, real-time data, and predictive modeling."
    },
    {
        date: "24 FEB",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80",
        category: "BUILDING",
        author: "admin",
        title: "TOP TRENDS SHAPING THE CONSTRUCTION INDUSTRY IN 2026",
        excerpt: "Explore the key trends transforming the construction industry in 2026, from smart technologies to modular site management."
    },
    {
        date: "26 FEB",
        image: "/news-modular.png",
        category: "MODULAR TECH",
        author: "admin",
        title: "THE RISE OF MODULAR CONSTRUCTION IN URBAN ENVIRONMENTS",
        excerpt: "Understanding how pre-fabricated structural modules are revolutionizing high-rise development in dense city centers."
    },
    {
        date: "28 FEB",
        image: "/news-bridge.png",
        category: "INFRASTRUCTURE",
        author: "admin",
        title: "ENGINEERING MASSIVE INFRASTRUCTURE: THE BRIDGE OF TOMORROW",
        excerpt: "A deep dive into the colossal engineering challenges and solutions behind the world's most ambitious bridge projects."
    },
    {
        date: "01 MAR",
        image: "/news-tablet.png",
        category: "DIGITAL SITE",
        author: "admin",
        title: "WHY DIGITAL DATA IS THE NEW CONCRETE IN SITE MANAGEMENT",
        excerpt: "How real-time tablets and cloud-based site planning are reducing overhead and increasing precision on the ground."
    },
    {
        date: "05 MAR",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80",
        category: "SAFETY FIRST",
        author: "admin",
        title: "ADVANCED SAFETY PROTOCOLS FOR HIGH-STAKES ENVIRONMENTS",
        excerpt: "Exploring the next generation of industrial safety standards that protect teams in complex and hazardous construction zones."
    }
];

export const NewsInsights = () => {
    const [page, setPage] = useState(0);
    const itemsPerPage = 4;
    const totalPages = Math.ceil(articles.length / itemsPerPage);
    
    const nextPage = () => setPage((prev) => (prev + 1) % totalPages);
    const prevPage = () => setPage((prev) => (prev - 1 + totalPages) % totalPages);

    const currentArticles = articles.slice(page * itemsPerPage, (page + 1) * itemsPerPage);

    return (
        <section className="pt-12 pb-12 bg-white relative overflow-hidden">
            <div className="max-w-[1700px] mx-auto px-6 lg:px-12">
                
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
                    <div className="space-y-8">
                        {/* Yellow Tag */}
                        <div className="bg-[#FFC107] px-4 py-1.5 inline-flex items-center">
                            <span className="text-[11px] font-black text-black tracking-widest uppercase">
                                // News & Insights
                            </span>
                        </div>
                        
                        <h2 className="text-4xl lg:text-[5.5vw] font-[1000] text-black leading-[0.88] tracking-tighter uppercase max-w-[1100px]">
                            Discover our latest<br />
                            insight articles
                        </h2>
                    </div>

                    {/* Navigation Arrows */}
                    <div className="flex gap-4 items-center">
                        <div className="text-[11px] font-black tracking-widest uppercase text-black/30 mr-4">
                            Page {page + 1} / {totalPages}
                        </div>
                        <div className="flex gap-2">
                            <button 
                                onClick={prevPage}
                                className="w-14 h-14 border border-black/20 flex items-center justify-center hover:bg-black hover:text-white transition-all group"
                            >
                                <ArrowLeft className="w-5 h-5 text-black group-hover:text-white group-active:scale-90 transition-all" />
                            </button>
                            <button 
                                onClick={nextPage}
                                className="w-14 h-14 border border-black/20 flex items-center justify-center hover:bg-black hover:text-white transition-all group"
                            >
                                <ArrowRight className="w-5 h-5 text-black group-hover:text-white group-active:scale-90 transition-all" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Articles Grid with Transition */}
                <div className="relative min-h-[600px]">
                    <AnimatePresence mode="wait">
                        <motion.div 
                            key={page}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
                        >
                            {currentArticles.map((article, index) => (
                                <motion.div 
                                    key={index}
                                    className="group cursor-pointer"
                                >
                                    {/* Card Image Area */}
                                    <div className="relative aspect-[4/3] overflow-hidden mb-6">
                                        <Image 
                                            src={article.image}
                                            alt={article.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        {/* Date Badge */}
                                        <div className="absolute top-4 left-4 bg-black p-2.5 flex flex-col items-center">
                                            <span className="text-xl font-bold text-white leading-none">{article.date.split(' ')[0]}</span>
                                            <span className="text-[10px] font-bold text-white/60 tracking-wider mt-0.5">{article.date.split(' ')[1]}</span>
                                        </div>
                                    </div>

                                    {/* Info Area */}
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-2 text-[10px] font-black tracking-widest uppercase">
                                            <span className="w-2 h-2 bg-[#FFC107]" />
                                            <span className="text-black">{article.category}</span>
                                            <span className="text-black/30 ml-2">By {article.author}</span>
                                        </div>

                                        <h3 className="text-[17px] lg:text-[20px] font-[1000] leading-[1.2] text-black tracking-tighter group-hover:text-[#FFC107] transition-colors line-clamp-2 uppercase">
                                            {article.title}
                                        </h3>

                                        <p className="text-[13px] leading-relaxed text-black/50 font-medium line-clamp-3">
                                            {article.excerpt}
                                        </p>

                                        <div className="flex items-center gap-2 pt-2">
                                            <div className="w-4 h-4 flex items-center justify-center">
                                                <ArrowUpRight className="w-3.5 h-3.5 text-black" />
                                            </div>
                                            <span className="text-[11px] font-black uppercase tracking-widest border-b-2 border-transparent group-hover:border-black transition-all">
                                                Read More
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
};
