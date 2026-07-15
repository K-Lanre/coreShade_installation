import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Consultation",
    desc: "Understanding your project requirements, technical specifications, and construction programme. We meet with clients, architects, and quantity surveyors to map out sizing, fabric functionalities, and motor control scopes.",
    image: "/consultation.jfif",
  },
  {
    num: "02",
    title: "Site Assessment",
    desc: "Reviewing spatial tolerances, bracket mountings, and technical wiring paths. Our field engineers conduct millimetric laser surveys to analyze window pocket dimensions and verify cabling routing.",
    image: "/sketch.jfif",
  },
  {
    num: "03",
    title: "Proposal",
    desc: "Providing transparent commercial quotations, structural suggestions, and layout details. We submit detailed product proposals and fabric swatches to ensure design and budget alignment.",
    image: "/blindwood.jfif",
  },
  {
    num: "04",
    title: "Supply",
    desc: "Procuring premium materials that meet project specifications. We source certified fabrics and motorized components under rigorous quality-control checks, preparing all systems for seamless delivery.",
    image: "/blindmat.jfif",
  },
  {
    num: "05",
    title: "Installation",
    desc: "Professional installation completed safely, efficiently, and with exceptional attention to detail. Our trained site team anchors the systems, tests motorized integrations, and coordinates with other trades.",
    image: "/blindfix.png",
  },
  {
    num: "06",
    title: "Project Handover",
    desc: "Final inspections ensuring every installation exceeds specifications. We execute programmatic testing, demonstrate smart-home or BMS integrations, provide product warranties, and clean the work site.",
    image: "/delivery.jfif",
  },
];

export default function Process() {
  return (
    <div className="relative overflow-hidden bg-petal text-brand transition-colors duration-300 dark:bg-brand dark:text-petal min-h-screen">
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[450px] flex items-center justify-center text-center px-6">
        <div className="absolute inset-0 z-0">
          <img
            src="/heroimg2.png"
            alt="Execution Process"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand/65 transition-colors duration-300 dark:bg-brand/85" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-7xl font-serif text-petal tracking-widest uppercase mb-6 transition-colors duration-300"
          >
            From Specification <br />
            <span className="text-petal/60 dark:text-cocoa-soft font-light transition-colors duration-300">
              To Completion
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg font-light leading-relaxed text-petal/80 dark:text-cocoa-soft transition-colors duration-300"
          >
            A dependable interior execution roadmap. Discover our structured
            six-step methodology that guarantees absolute precision and
            professional coordination across every contract.
          </motion.p>
        </div>
      </section>

      <section className="relative mx-auto max-w-5xl px-6 py-24 md:py-32 md:px-10">
        <div className="flex flex-col gap-7 md:gap-10">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`relative z-10 flex flex-col-reverse gap-8 md:gap-10 items-center justify-between pb-10 md:pb-10 border-b border-brand/10 dark:border-petal/10 last:border-b-0 last:pb-0 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Step Details Column */}
                <div className="w-full md:w-[45%] flex flex-col justify-center">
                  <div>
                    <span className="mb-3 block font-sans text-xs font-bold uppercase tracking-[0.25em] text-brand/45 dark:text-cocoa-soft">
                      Step {step.num}
                    </span>
                    <h3 className="mb-6 font-serif text-3xl sm:text-4xl lg:text-5xl tracking-wide text-brand dark:text-petal leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-base sm:text-lg font-light leading-relaxed text-brand/70 dark:text-cocoa-soft">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Giant Masked Number Column */}
                <div className="w-full md:w-[48%] flex items-center justify-center">
                  <div className="relative group select-none cursor-pointer">
                    <span
                      className="block font-sans font-black text-[7rem] sm:text-[10rem] md:text-[12rem] lg:text-[14rem] xl:text-[16rem] leading-none text-transparent tracking-tighter bg-cover bg-center bg-no-repeat bg-clip-text transition-all duration-[800ms] ease-out group-hover:scale-105 group-hover:brightness-110"
                      style={{
                        backgroundImage: `url(${step.image})`,
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {step.num}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
