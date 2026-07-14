import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Shield,
  Clock,
  ShieldCheck,
  HeartHandshake,
} from "lucide-react";
import HeroSlider from "../components/HeroSlider";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

export default function Home() {
  const services = [
    {
      title: "Commercial Blind Supply",
      desc: "Premium-quality blinds sourced from trusted manufacturers to meet functional and architectural specifications.",
      image: "/exclusive.jfif",
    },
    {
      title: "Professional Blind Installation",
      desc: "Experienced installation teams delivering safe, efficient and precise integrations on projects of every scale.",
      image: "/manufacturing.jfif",
    },
    {
      title: "Project Coordination",
      desc: "Working closely with contractors and architects to align with site requirements and project milestones.",
      image: "/consultation.jfif",
    },
    {
      title: "Future Fit-Out Services",
      desc: "Expanding to provide partition walls, acoustic glazing, ceilings, and customized interior finishes.",
      image: "/delivery.jfif",
    },
  ];

  const valueProps = [
    {
      title: "On-Time Delivery",
      desc: "Coordinated planning and dependable execution that keep procurement, installation, and handover aligned.",
      icon: Clock,
    },
    {
      title: "Quality Workmanship",
      desc: "Detail-led fitting standards that protect finish quality and elevate the final interior presentation.",
      icon: ShieldCheck,
    },
    {
      title: "Health & Safety Compliance",
      desc: "Commercial site discipline with teams that work cleanly, safely, and confidently around other trades.",
      icon: Shield,
    },
    {
      title: "Reliable Project Coordination",
      desc: "Clear communication across clients, contractors, and consultants so project decisions stay connected.",
      icon: HeartHandshake,
    },
  ];

  const industries = [
    "Commercial Offices",
    "Corporate Headquarters",
    "Educational Institutions",
    "Healthcare Facilities",
    "Hotels & Hospitality",
    "Residential Developments",
    "Government Buildings",
    "Retail Spaces",
    "Industrial Facilities",
    "Mixed-Use Developments",
    "Luxury Apartments",
    "Public Sector Projects",
  ];

  return (
    <div className="bg-petal dark:bg-brand text-brand dark:text-petal transition-colors duration-300 overflow-hidden">
      <section className="relative min-h-screen pt-32 lg:pt-36 flex items-center bg-petal/60 dark:bg-brand-muted transition-colors duration-300 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(239,206,219,0.5),transparent_38%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(79,40,31,0.3),transparent_38%)] pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          <div className="lg:col-span-5 flex flex-col items-start z-10 min-w-0">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight text-brand dark:text-petal mb-6 leading-tight"
            >
              Building Better <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-petal font-bold">
                Interior Spaces
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base md:text-lg text-brand/70 dark:text-cocoa-soft font-light mb-6 leading-relaxed"
            >
              Expertly delivered fit-out solutions for functional, comfortable
              and striking interiors.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-sm text-brand/50 dark:text-cocoa mb-8 max-w-xl"
            >
              Starting with specialist blind supply and installation, we create
              functional, comfortable and visually refined interior spaces.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto mb-8"
            >
              <Link
                to="/contact"
                className="px-8 py-4 bg-brand border border-brand text-petal hover:bg-brand-light hover:border-brand-light transition-all duration-300 tracking-widest uppercase font-bold text-xs text-center shadow-lg shadow-brand/20"
              >
                Request a Quote
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 border border-brand/40 dark:border-cocoa-soft/40 text-brand dark:text-cocoa-soft hover:border-brand hover:bg-brand/5 dark:hover:border-cocoa-soft dark:hover:bg-petal/10 transition-all duration-300 tracking-widest uppercase font-bold text-xs text-center"
              >
                Our Services
              </Link>
            </motion.div>
          </div>

          <HeroSlider />
        </div>
      </section>
      {/* service */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#f8e7ed] dark:bg-[#412118] transition-colors duration-300">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className=""
          >
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-xs font-bold tracking-widest text-brand dark:text-cocoa-soft uppercase mb-3">
                Why Partner With Us
              </h2>
              <h3 className="text-3xl md:text-4xl font-serif text-brand dark:text-petal leading-tight mb-4">
                A Reliable Fit-Out Partner
              </h3>
              <p className="text-sm md:text-base text-brand/60 dark:text-cocoa-soft max-w-2xl mx-auto leading-relaxed">
                Construction and fit-out programs demand more than quality
                components. They require dependable execution.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-[1fr_minmax(290px,360px)_1fr]">
              <div className="grid gap-5">
                {valueProps.slice(0, 2).map((prop) => {
                  const IconComponent = prop.icon;
                  return (
                    <div
                      key={prop.title}
                      className="rounded-[1.6rem] bg-petal/85 p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 dark:bg-[#3a2018]"
                    >
                      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-brand text-petal dark:bg-cocoa-soft dark:text-brand">
                        <IconComponent size={18} />
                      </div>
                      <h4 className="text-lg font-serif text-brand dark:text-petal mb-2">
                        {prop.title}
                      </h4>
                      <p className="text-sm leading-relaxed text-brand/65 dark:text-cocoa-soft">
                        {prop.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="relative overflow-hidden rounded-[1.8rem] bg-petal/85 shadow-lg dark:bg-[#3a2018]">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.8rem]">
                  <img
                    src="/blindfix.png"
                    alt="Blind installation in progress"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="grid gap-5">
                {valueProps.slice(2).map((prop) => {
                  const IconComponent = prop.icon;
                  return (
                    <div
                      key={prop.title}
                      className="rounded-[1.6rem] bg-petal/85 p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 dark:bg-[#3a2018]"
                    >
                      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-brand text-petal dark:bg-cocoa-soft dark:text-brand">
                        <IconComponent size={18} />
                      </div>
                      <h4 className="text-lg font-serif text-brand dark:text-petal mb-2">
                        {prop.title}
                      </h4>
                      <p className="text-sm leading-relaxed text-brand/65 dark:text-cocoa-soft">
                        {prop.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project section */}
      <section className="py-24 px-6 md:px-12 bg-[#f4dce5] dark:bg-[#321812] transition-colors duration-300">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[280px_1fr] lg:items-start">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:sticky lg:top-28"
            >
              <h2 className="text-xs font-bold tracking-[0.28em] text-brand dark:text-cocoa-soft uppercase mb-4">
                Commonly Used Blinds
              </h2>
              <h3 className="text-4xl md:text-5xl font-serif text-brand dark:text-petal leading-[1.05] mb-5">
                Blinds That Shape
                <br />
                Better Interiors
              </h3>
              <p className="text-sm md:text-base text-brand/65 dark:text-cocoa-soft leading-relaxed max-w-sm mb-8">
                From clean-lined office shading to softer residential light
                control, these are some of the blind systems most often
                specified for comfort, privacy, and refined visual balance.
              </p>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 border border-brand/20 dark:border-cocoa-soft/30 px-5 py-3 text-[11px] font-bold tracking-[0.22em] uppercase text-brand dark:text-cocoa-soft hover:border-brand dark:hover:border-cocoa-soft transition-colors"
              >
                <span>Explore Blind Types</span>
                <ArrowRight size={14} />
              </Link>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="grid gap-4
                grid-cols-1
                md:grid-cols-2
                lg:grid-cols-[1.15fr_1fr_1fr]
                lg:grid-rows-[260px_260px]"
            >
              <motion.div
                variants={fadeInUp}
                className="lg:col-start-1 lg:row-start-1 lg:row-span-2 min-h-[280px]"
              >
                <div className="group relative h-full overflow-hidden rounded-[1.7rem] bg-brand-muted shadow-[0_18px_40px_rgba(79,40,31,0.14)]">
                  <img
                    src="/RollerBlinds.png"
                    alt="Roller Blinds"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-muted via-brand/40 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                    <h4 className="max-w-[14ch] font-serif text-3xl leading-tight text-[#fff8f2] drop-shadow-sm">
                      Roller Blinds
                    </h4>
                    <p className="mt-2 max-w-xs text-xs leading-relaxed text-cocoa-soft/90">
                      A minimalist shading option prized for clean lines,
                      practical privacy, and effortless everyday control.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="min-h-[260px]">
                <div className="group relative h-full overflow-hidden rounded-[1.7rem] bg-brand-muted shadow-[0_18px_40px_rgba(79,40,31,0.14)]">
                  <img
                    src="/Zebra.png"
                    alt="Zebra Blinds"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-brand-muted/65 backdrop-blur-[1px]" />
                  <div className="relative z-10 flex h-full flex-col justify-between p-6">
                    <div>
                      <h4 className="font-serif text-2xl leading-tight text-[#fff8f2]">
                        Zebra (Day &amp; Night) Blinds
                      </h4>
                      <p className="mt-2 text-xs leading-relaxed text-cocoa-soft/80">
                        Layered sheer-and-solid bands that balance filtered
                        daylight with privacy in one elegant system.
                      </p>
                    </div>
                    <Link
                      to="/portfolio"
                      className="self-end flex items-center justify-center w-9 h-9 rounded-full border border-petal/30 text-petal hover:bg-petal/10 transition-colors"
                    >
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="min-h-[260px]">
                <div className="group relative h-full overflow-hidden rounded-[1.7rem] bg-brand-muted shadow-[0_18px_40px_rgba(79,40,31,0.14)]">
                  <img
                    src="/venetian.png"
                    alt="Venetian Blinds"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-muted via-brand/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between">
                    <div>
                      <h4 className="font-serif text-xl leading-tight text-[#fff8f2]">
                        Venetian Blinds
                      </h4>
                      <p className="mt-1 text-[11px] leading-relaxed text-cocoa-soft/80">
                        Precise slatted style for directional light control.
                      </p>
                    </div>
                    <Link
                      to="/portfolio"
                      className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-full border border-petal/30 text-petal hover:bg-petal/10 transition-colors ml-3"
                    >
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="md:col-span-2 lg:col-span-1 lg:col-start-3 lg:row-start-1 lg:row-span-2 min-h-[280px]"
              >
                <div className="group relative h-full overflow-hidden rounded-[1.7rem] bg-brand-muted shadow-[0_18px_40px_rgba(79,40,31,0.14)]">
                  <img
                    src="/Vertical.png"
                    alt="Vertical Blinds"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-muted via-brand/40 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                    <h4 className="max-w-[14ch] font-serif text-3xl leading-tight text-[#fff8f2] drop-shadow-sm">
                      Vertical Blinds
                    </h4>
                    <p className="mt-2 max-w-xs text-xs leading-relaxed text-cocoa-soft/90">
                      A dependable solution for wider openings and commercial
                      spaces that need flexible, full-width coverage.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* capability */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#f8e7ed] dark:bg-[#412118] transition-colors duration-300">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 border-b border-brand/20 dark:border-petal/20 pb-8">
            <div>
              <h2 className="text-xs font-bold tracking-widest text-brand dark:text-cocoa-soft uppercase mb-2">
                Our Capabilities
              </h2>
              <h3 className="text-3xl font-serif text-brand dark:text-petal tracking-wide mb-4">
                Interior Solutions Designed Around Your Project
              </h3>
            </div>
            <Link
              to="/services"
              className="mt-6 lg:mt-0 px-6 py-3 border border-brand/30 dark:border-cocoa-soft/40 text-brand dark:text-cocoa-soft hover:border-brand hover:bg-brand/5 dark:hover:border-cocoa-soft dark:hover:bg-petal/10 transition-colors tracking-widest uppercase text-[10px] font-bold"
            >
              All Services
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Link
                to="/services"
                key={index}
                className="group relative flex flex-col justify-between overflow-hidden rounded-xl bg-petal/60 dark:bg-brand-muted border border-brand/10 dark:border-petal/10 p-6 min-h-[300px] hover:shadow-xl hover:shadow-brand/20 hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  <div className="w-12 h-12 bg-brand/5 text-brand flex items-center justify-center rounded-lg mb-6 border border-brand/10">
                    <span className="font-serif font-bold text-lg">
                      0{index + 1}
                    </span>
                  </div>
                  <h4 className="text-lg font-serif text-brand dark:text-petal group-hover:text-brand-light dark:group-hover:text-petal transition-colors mb-3">
                    {service.title}
                  </h4>
                  <p className="text-xs text-brand/55 dark:text-cocoa leading-relaxed font-light">
                    {service.desc}
                  </p>
                </div>
                <div className="flex items-center space-x-1 mt-6 text-brand dark:text-cocoa-soft group-hover:translate-x-2 transition-transform duration-300 text-xs font-bold tracking-widest uppercase">
                  <span>Learn More</span>
                  <ArrowRight size={12} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#f3d8e2] dark:bg-[#372019] transition-colors duration-300">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-xs font-bold tracking-widest text-brand dark:text-cocoa-soft uppercase mb-2">
              Our Sectors
            </h2>
            <h3 className="text-3xl font-serif text-brand dark:text-petal tracking-wide mb-4">
              Industries We Serve
            </h3>
            <div className="h-0.5 w-16 bg-brand mx-auto mb-6"></div>
            <p className="text-brand/60 dark:text-cocoa-soft max-w-2xl mx-auto text-sm leading-relaxed">
              We proudly deliver specialized interior solutions and window
              shading across a diverse range of built environments.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-x-4 gap-y-6 md:gap-x-6 md:gap-y-8 max-w-5xl mx-auto py-8">
            {industries.map((ind, i) => {
              // Create a scattered/dropped feel with slight rotations and offsets
              const rotations = [
                "rotate-[-1.5deg]",
                "rotate-[2deg]",
                "rotate-[-3deg]",
                "rotate-[1.5deg]",
                "rotate-[-0.5deg]",
                "rotate-[3deg]",
                "rotate-[-2deg]",
                "rotate-[1deg]",
                "rotate-[2.5deg]",
                "rotate-[-1deg]",
                "rotate-[0.5deg]",
                "rotate-[-2.5deg]",
              ];
              const translates = [
                "translate-y-[-3px]",
                "translate-y-[4px]",
                "translate-y-[-1px]",
                "translate-y-[5px]",
                "translate-y-[-4px]",
                "translate-y-[2px]",
                "translate-y-[-2px]",
                "translate-y-[3px]",
                "translate-y-[-5px]",
                "translate-y-[1px]",
                "translate-y-[-3px]",
                "translate-y-[4px]",
              ];
              const hoverRotations = [
                "hover:rotate-[1deg]",
                "hover:rotate-[-2deg]",
                "hover:rotate-[2deg]",
                "hover:rotate-[-1deg]",
              ];

              const rotClass = rotations[i % rotations.length];
              const transClass = translates[i % translates.length];
              const hoverRotClass = hoverRotations[i % hoverRotations.length];

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.85, y: 15 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.04,
                    ease: "easeOut",
                  }}
                  className={`inline-block px-5 py-3 md:px-7 md:py-3.5 rounded-full bg-white dark:bg-[#2c1510] text-brand dark:text-petal text-xs md:text-sm font-semibold tracking-wide shadow-lg shadow-brand/10 dark:shadow-black/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-brand/20 dark:hover:shadow-black/70 ${rotClass} ${transClass} ${hoverRotClass} select-none cursor-default`}
                >
                  {ind}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative overflow-hidden px-6 py-28 text-center transition-colors duration-300 bg-[#f3d8e2] dark:bg-brand-muted">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/luxy.jfif"
            alt="Interior fitout context"
            className="w-full h-full object-cover filter blur-[2px]"
          />
        </div>
        <div className="absolute inset-0 bg-brand/55 transition-colors duration-300 dark:bg-brand/78"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 flex flex-col items-center">
          <h2 className="text-xs font-bold tracking-widest uppercase mb-4 text-brand dark:text-cocoa-soft">
            Get In Touch
          </h2>
          <h3 className="text-3xl md:text-5xl font-serif tracking-wide text-petal mb-6">
            Let's Build Great Spaces Together
          </h3>
          <p className="text-sm md:text-base leading-relaxed mb-10 max-w-2xl font-light text-[#f9efe8] dark:text-cocoa-soft">
            Whether you are managing a major commercial development, executing a
            luxury residential project, or planning a modern corporate
            workspace, we are ready to provide dependable interior solutions
            tailored to your program.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/contact"
              className="px-10 py-5 bg-petal text-brand uppercase tracking-widest text-xs font-bold hover:bg-petal/80 transition-colors shadow-lg dark:bg-petal dark:text-brand"
            >
              Request Free Consultation
            </Link>
            <Link
              to="/process"
              className="px-10 py-5 border border-petal/50 text-petal uppercase tracking-widest text-xs font-bold hover:border-petal hover:bg-petal/10 transition-colors dark:border-cocoa-soft/40 dark:text-cocoa-soft dark:hover:border-cocoa-soft dark:hover:bg-petal/10"
            >
              Our Process
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

