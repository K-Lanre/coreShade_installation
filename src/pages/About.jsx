import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Eye } from "lucide-react";

export default function About() {
  const stats = [
    { value: "12,000+", label: "Shades Installed" },
    { value: "100%", label: "Compliance & Safety" },
  ];

  const values = [
    {
      name: "Quality Craftsmanship",
      desc: "Uncompromising attention to detail in material selection and finish execution.",
    },
    {
      name: "Professional Service",
      desc: "Seamless site coordination, expert handling, and responsive customer relationship management.",
    },
    {
      name: "Reliable Delivery",
      desc: "Aligning strictly with project timelines and construction sequences.",
    },
    {
      name: "Honest Communication",
      desc: "Transparent quotations, clear schedules, and proactive updates at every stage.",
    },
    {
      name: "Attention to Detail",
      desc: "Rigorous quality controls from initial consultation down to final installation verification.",
    },
  ];

  const team = [
    {
      name: "Adebayo O.",
      role: "Founder & Managing Director",
      image:
        "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&q=80",
    },
    {
      name: "Victoria E.",
      role: "Lead Project Coordinator",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    },
    {
      name: "Samuel T.",
      role: "Head of Technical Installation",
      image:
        "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?w=400&q=80",
    },
  ];

  return (
    <div className="bg-petal dark:bg-brand text-brand dark:text-petal transition-colors duration-300 min-h-screen">
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[450px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/heroimg2.png"
            alt="Commercial workspace drafting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand/65 transition-colors duration-300 dark:bg-brand/85" />
        </div>
        <div className="relative z-10 px-6 max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-7xl font-serif text-petal dark:text-petal tracking-widest uppercase mb-6 transition-colors duration-300"
          >
            Creating Interiors <br />
            <span className="text-petal/60 dark:text-cocoa-soft font-light transition-colors duration-300">
              That Perform
            </span>
          </motion.h1>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 px-6 md:px-12 bg-[#f4dce5] dark:bg-[#321812] transition-colors duration-300">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <h2 className="text-2xl md:text-3xl font-serif text-brand dark:text-cocoa-soft uppercase tracking-wider lg:sticky lg:top-32">
                Designed <br className="hidden lg:block" />
                With Purpose
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-6 text-brand/65 dark:text-cocoa-soft font-light leading-relaxed text-base md:text-lg">
              <p>
                At{" "}
                <strong className="text-brand dark:text-petal font-semibold">
                  Coreshade Installation Interior Fit-Out
                </strong>
                , we believe every interior should be designed with purpose. A
                well-finished space is more than attractive, it should inspire
                productivity, improve comfort, provide privacy, and support the
                people who use it every day.
              </p>
              <p>
                We work alongside developers, contractors, architects, and
                interior designers to deliver specialist interior solutions that
                complete commercial and residential projects to the highest
                standards.
              </p>
              <p>
                While our current expertise is in commercial blind systems, our
                long-term vision is to become a trusted partner for complete
                interior fit-out solutions across multiple sectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#f8e7ed] dark:bg-[#43231b] border-y border-brand/15 dark:border-petal/15 transition-colors duration-300">
        <div className="mx-auto max-w-3xl px-6 md:px-12 lg:px-16">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-12 sm:gap-24 text-center">
            {stats.map((stat, i) => (
              <div key={i} className="flex-1">
                <div className="text-3xl md:text-5xl font-serif text-brand dark:text-petal font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-widest text-brand/50 dark:text-cocoa font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-6 bg-[#f6dce4] dark:bg-[#4a271d] transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-xs font-bold tracking-widest text-brand dark:text-cocoa-soft uppercase mb-2">
            Our Foundation
          </h2>
          <h3 className="text-center text-3xl font-serif text-brand dark:text-petal tracking-wide uppercase mb-16">
            Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((val, i) => (
              <div
                key={i}
                className="bg-petal dark:bg-brand-muted border border-brand/15 dark:border-petal/15 p-8 rounded-xl shadow-sm hover:border-brand/40 dark:hover:border-petal/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-10 h-10 bg-brand/10 text-brand dark:text-petal flex items-center justify-center rounded-lg mb-6">
                  <CheckCircle size={20} />
                </div>
                <h4 className="text-lg font-serif text-brand dark:text-petal mb-3">
                  {val.name}
                </h4>
                <p className="text-sm text-brand/55 dark:text-cocoa leading-relaxed font-light">
                  {val.desc}
                </p>
              </div>
            ))}

            {/* Vision Callout Box */}
            <div className="bg-brand dark:bg-brand-muted border border-petal/20 p-8 rounded-xl flex flex-col justify-between lg:col-span-1 md:col-span-2">
              <div>
                <div className="w-10 h-10 bg-petal/10 text-petal flex items-center justify-center rounded-lg mb-6">
                  <Eye size={20} />
                </div>
                <h4 className="text-lg font-serif text-petal mb-3">
                  Our Vision
                </h4>
                <p className="text-sm text-petal/65 leading-relaxed font-light">
                  To become one of the leading commercial interior fit-out
                  companies recognised for delivering innovative, high-quality
                  interior solutions that enhance the functionality, comfort and
                  appearance of every space we touch.
                </p>
              </div>
              <div className="mt-8 border-t border-petal/20 pt-4 text-xs text-petal/40 tracking-wider">
                CORESHADE INTERIOR FIT-OUT
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      {/* <section className="py-24 px-6 bg-[#f2d6df] dark:bg-[#371d16] transition-colors duration-300 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-xs font-bold tracking-widest text-brand dark:text-cocoa-soft uppercase mb-2">
            History
          </h2>
          <h3 className="text-center text-3xl font-serif text-brand dark:text-petal tracking-wide uppercase mb-16">
            The Journey
          </h3>
          <div className="flex flex-col md:flex-row justify-between relative space-y-12 md:space-y-0">
            <div className="hidden md:block absolute top-[24px] left-0 w-full h-[1px] bg-brand/15 dark:bg-petal/15 z-0"></div>

            {[
              {
                year: "2018",
                title: "Inception in Lagos",
                desc: "Established with a focus on specialist commercial blinds and site surveys.",
              },
              {
                year: "2022",
                title: "Scale & Automation",
                desc: "Secured key commercial projects, expanding to specialized motorized shades.",
              },
              {
                year: "2026",
                title: "Fit-Out Expansion",
                desc: "Incorporating partition layouts, ceilings, and glazed partition systems.",
              },
            ].map((item, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                key={i}
                className="relative z-10 flex flex-col items-center text-center w-full md:w-1/3 px-6"
              >
                <div className="w-12 h-12 rounded-full bg-petal dark:bg-brand border-2 border-brand dark:border-petal flex items-center justify-center text-brand dark:text-petal font-serif mb-6 shrink-0 shadow-sm">
                  <div className="w-2.5 h-2.5 rounded-full bg-brand dark:bg-petal"></div>
                </div>
                <h3 className="text-2xl font-serif text-brand dark:text-petal mb-2">
                  {item.year}
                </h3>
                <h4 className="text-xs uppercase tracking-widest text-brand dark:text-petal font-bold mb-3">
                  {item.title}
                </h4>
                <p className="text-sm text-brand/55 dark:text-cocoa font-light leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Team */}
      {/*
      <section className="py-24 px-6 bg-[#f2d6df] dark:bg-[#371d16] transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-xs font-bold tracking-widest text-brand dark:text-cocoa-soft uppercase mb-2">
            People
          </h2>
          <h3 className="text-center text-3xl font-serif text-brand dark:text-petal tracking-wide uppercase mb-16">
            Management Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-2 border-transparent group-hover:border-brand dark:group-hover:border-petal transition-colors duration-500 p-1 shadow-md">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <h3 className="text-xl font-serif text-brand dark:text-petal mb-1 group-hover:text-brand-light dark:group-hover:text-petal transition-colors">
                  {member.name}
                </h3>
                <p className="text-xs uppercase tracking-widest text-brand/50 dark:text-cocoa font-semibold">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}
    </div>
  );
}
