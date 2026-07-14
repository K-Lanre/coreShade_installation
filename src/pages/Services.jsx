import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  BarChart3,
  Construction,
  Eye,
  Compass,
  Zap,
  LayoutGrid,
  SunDim,
  Sparkles,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Commercial Blind Supply",
      desc: "Premium-quality blinds sourced from trusted global manufacturers to meet both functional and strict architectural specifications.",
      features: [
        "Solar heat control fabrics",
        "Acoustic and fire-retardant options",
        "Manual, motorized and automated configurations",
        "Anti-glare screen selections",
      ],
      icon: LayoutGrid,
      image: "/commercial.png",
    },
    {
      title: "Professional Blind Installation",
      desc: "Experienced, health-and-safety certified installation teams delivering safe, efficient, and precise installations on projects of every size.",
      features: [
        "Certified rigging and electrical integration",
        "Accurate laser-guided structural anchoring",
        "Compliance with site health and safety",
        "Post-install commissioning and testing",
      ],
      icon: Construction,
      image: "/manufacturing.jfif",
    },
    {
      title: "Project Coordination",
      desc: "Working closely with contractors, architects, and project managers to ensure every installation aligns perfectly with the construction programme.",
      features: [
        "Detailed CAD drawings and shop review",
        "Site measurements and structural verification",
        "Program alignment and sequence scheduling",
        "Dedicated technical liaison",
      ],
      icon: BarChart3,
      image: "/consultation.jfif",
    },
    {
      title: "Future Fit-Out Services",
      desc: "As we continue to grow, our services will expand to include complete commercial interior fit-out solutions.",
      features: [
        "Demountable partition systems",
        "Acoustic glass partitioning",
        "Suspended ceiling layouts",
        "Bespoke joinery and finishes",
      ],
      icon: Sparkles,
      image: "/delivery.jfif",
    },
  ];

  const valueProps = [
    {
      title: "Enhance Comfort",
      desc: "Control natural light and reduce glare to create comfortable, welcoming spaces throughout the day.",
      icon: SunDim,
    },
    {
      title: "Improve Privacy",
      desc: "Protect building occupants without sacrificing natural daylight or the openness of a workspace layout.",
      icon: Eye,
    },
    {
      title: "Increase Energy Efficiency",
      desc: "Reduce heat gain during warmer months and help maintain comfortable indoor temperatures, contributing to improved building energy performance.",
      icon: Zap,
    },
    {
      title: "Boost Productivity",
      desc: "Comfortable lighting conditions improve concentration, reduce eye strain and create healthier, more engaging working environments.",
      icon: BarChart3,
    },
    {
      title: "Elevate Interior Design",
      desc: "Blinds complement architectural features, furniture and finishes, adding depth, elegance and balance to every interior.",
      icon: Compass,
    },
    {
      title: "Protect Interior Finishes",
      desc: "Reduce UV exposure to help preserve flooring, furniture, fabrics and interior finishes over time.",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="bg-petal dark:bg-brand text-brand dark:text-petal transition-colors duration-300 min-h-screen">
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[450px] flex items-center justify-center text-center px-6">
        <div className="absolute inset-0 z-0">
          <img
            src="/heroimg2.png"
            alt="Commercial workspace facade"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-petal/60 transition-colors duration-300 dark:bg-brand-muted/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-7xl font-serif text-brand dark:text-petal tracking-widest uppercase mb-6 transition-colors duration-300"
          >
            Interior Solutions <br />
            <span className="text-brand/65 dark:text-petal/60 font-light transition-colors duration-300">
              Designed Around Your Project
            </span>
          </motion.h1>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden border-y border-brand/15 dark:border-cocoa-soft/15 shadow-[0_24px_60px_rgba(79,40,31,0.12)]">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isImageCard = index === 0 || index === 3;

            return (
              <div
                key={index}
                className={`group relative min-h-[320px] md:min-h-[360px] ${
                  isImageCard
                    ? "overflow-hidden bg-[#ead8cf] dark:bg-brand-muted"
                    : "bg-[#f6eee8] dark:bg-brand-muted text-brand dark:text-petal"
                }`}
              >
                {isImageCard ? (
                  <>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#3a2018]/70 via-[#4f281f]/25 to-transparent dark:from-brand-muted/75 dark:via-brand/20 dark:to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-8 md:p-12">
                      <span className="mb-3 inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.28em] uppercase text-[#f3ddd2] dark:text-cocoa-soft">
                        About
                      </span>
                      <h3 className="max-w-[13ch] text-4xl md:text-5xl font-serif leading-none text-white dark:text-[#fff8f2]">
                        {service.title}
                      </h3>
                      <p className="mt-4 max-w-md text-base leading-relaxed text-[#f3ddd2] dark:text-cocoa-soft">
                        {service.desc}
                      </p>
                    </div>
                  </>
                ) : (
                  <div className="flex h-full flex-col justify-between p-8 md:p-12">
                    <div>
                      <span className="mb-5 inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.28em] uppercase text-brand-light dark:text-cocoa-soft">
                        About
                      </span>
                      <h3 className="max-w-[12ch] text-4xl md:text-5xl font-serif leading-[1.05] text-brand dark:text-[#fff8f2]">
                        {service.title}
                      </h3>
                      <p className="mt-5 max-w-md text-base leading-relaxed text-brand/70 dark:text-cocoa-soft">
                        {service.desc}
                      </p>
                    </div>
                    <div className="mt-8">
                      <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-brand/15 bg-brand/5 text-brand dark:border-cocoa-soft/25 dark:bg-petal/10 dark:text-cocoa-soft">
                        <IconComponent size={20} />
                      </div>
                      <ul className="space-y-3">
                        {service.features.slice(0, 3).map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-start text-brand/75 dark:text-cocoa-soft"
                          >
                            <span className="mr-3 mt-0.5 text-[10px] text-brand dark:text-petal">
                              Ã¢â€”â€ 
                            </span>
                            <span className="text-sm leading-relaxed">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <Link
                        to="/contact"
                        className="mt-8 inline-flex items-center gap-2 text-xs font-bold tracking-[0.22em] uppercase text-brand dark:text-cocoa-soft hover:text-brand-light dark:hover:text-petal transition-colors"
                      >
                        <span>Read More</span>
                        <span aria-hidden="true">Ã¢â€ â€™</span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Why Blinds Matter */}
      <section className="relative py-24 px-6 md:px-12 overflow-hidden border-t border-brand/10 dark:border-petal/10">
        <div className="absolute inset-0">
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/blind.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-petal/80 dark:bg-brand-muted/85 transition-colors duration-300" />
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-xs font-bold tracking-widest text-brand dark:text-cocoa-soft uppercase mb-2">
              Technical Insight
            </h2>
            <h3 className="text-3xl md:text-4xl font-serif text-brand dark:text-petal tracking-wide uppercase mb-4">
              Why Blinds Matter
            </h3>
            <div className="h-0.5 w-16 bg-brand dark:bg-petal mx-auto mb-6"></div>
            <p className="text-brand/65 dark:text-cocoa-soft font-light leading-relaxed mb-4">
              Blinds do far more than cover a window. They influence how a room
              feels, how people work within it, and how efficiently the building
              performs.
            </p>
            <p className="text-brand/50 dark:text-cocoa text-sm font-light">
              A carefully selected blind system transforms an ordinary room into
              a comfortable, functional and professional environment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valueProps.map((prop, i) => {
              const IconComponent = prop.icon;
              return (
                <div
                  key={i}
                  className="bg-petal/95 dark:bg-brand-muted/95 p-8 rounded-xl shadow-[0_20px_45px_rgba(79,40,31,0.14)] dark:shadow-[0_20px_45px_rgba(0,0,0,0.35)] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-brand/10 text-brand dark:text-petal flex items-center justify-center rounded-lg mb-6">
                    <IconComponent size={20} />
                  </div>
                  <h4 className="text-lg font-serif text-brand dark:text-petal mb-3">
                    {prop.title}
                  </h4>
                  <p className="text-xs text-brand/55 dark:text-cocoa leading-relaxed font-light">
                    {prop.desc}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="mt-16 text-center text-brand/50 dark:text-cocoa italic text-sm border-t border-brand/10 dark:border-petal/10 pt-8">
            Blinds are not simply an accessory. They are an essential component
            of a well-designed interior.
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-24 px-6 text-center border-t border-brand/10 dark:border-petal/10 bg-[#f8e7ed] dark:bg-[#412118] transition-colors duration-300">
        <h2 className="text-xs font-bold tracking-widest text-brand dark:text-cocoa-soft uppercase mb-2">
          Partner With Us
        </h2>
        <h3 className="text-3xl font-serif text-brand dark:text-petal mb-6">
          Ready to Coordinate Your Project?
        </h3>
        <p className="text-brand/65 dark:text-cocoa-soft max-w-2xl mx-auto mb-10 text-sm font-light leading-relaxed">
          Contact our structural coordination team today. We are available for
          specifications review, CAD coordination, and site assessments.
        </p>
        <Link
          to="/contact"
          className="px-10 py-5 bg-brand text-petal uppercase tracking-widest text-xs font-bold hover:bg-brand-light transition-colors shadow-lg"
        >
          Request Technical Consultation
        </Link>
      </section>
    </div>
  );
}
