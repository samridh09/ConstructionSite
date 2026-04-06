'use client'

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"
import { Project } from "@/types/project"

export default function ProjectGridClient({
  projects,
  imageUrls,
}: {
  projects: Project[]
  imageUrls: Record<string, string>
}) {
  return (
    <section className="bg-white py-24 px-6 lg:px-12">
      <div className="max-w-[1700px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-10">
          <div className="space-y-6">
            <div className="bg-[#FFC107] px-4 py-1.5 inline-flex items-center">
              <span className="text-[11px] font-[1000] text-black tracking-widest uppercase">
                // GLOBAL PORTFOLIO
              </span>
            </div>
            <h2 className="text-4xl lg:text-[5vw] font-[1000] text-black leading-[0.9] tracking-tighter uppercase">
              OUR COMPLETED<br />
              LANDMARKS
            </h2>
          </div>
          <p className="text-[15px] text-black/50 leading-relaxed max-w-[400px] font-medium">
            Explore our extensive portfolio of high-impact projects across India, from luxury residential towers to massive industrial hubs.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: (i % 3) * 0.1 }}
              viewport={{ once: true }}
              className="group relative cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-[450px] overflow-hidden">
                {imageUrls[project._id] && (
                  <Image
                    src={imageUrls[project._id]}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500" />

                {/* Top Label */}
                <div className="absolute top-6 left-6 flex gap-2">
                  {project.category && (
                    <div className="bg-[#E1EBF2] px-4 py-1.5 backdrop-blur-sm">
                      <span className="text-[10px] font-black text-black tracking-widest uppercase">
                        {project.category}
                      </span>
                    </div>
                  )}
                  {project.location && (
                    <div className="bg-white/10 px-4 py-1.5 backdrop-blur-sm">
                      <span className="text-[10px] font-black text-white tracking-widest uppercase">
                        {project.location}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content Overlay (Reveals on Hover) */}
                <div className="absolute inset-0 flex flex-col justify-end p-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-2xl font-[1000] text-white tracking-tighter uppercase leading-none mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 text-[#FFC107] font-black text-[12px] tracking-widest uppercase translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                    View Case Study
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
