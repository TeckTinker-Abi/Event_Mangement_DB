import { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import { events } from "../data/events";
import EventCard from "../components/EventCard";
import EventModal from "../components/EventModal";
import { Link } from "react-router-dom";

const CATEGORIES = [
  { id: "social", title: "Social & Private Soirées", desc: "From elite yacht parties to intimate villa gatherings in the heart of Dubai." },
  { id: "wedding", title: "Weddings & Proposals", desc: "Crafting royal celebrations, destination vows, and unforgettable 'Yes' moments." },
  { id: "corporate", title: "Corporate & Brand Excellence", desc: "High-impact product launches, gala dinners, and industry-leading conferences." },
  { id: "entertainment", title: "Entertainment & Luxury", desc: "Front-row concerts, fashion shows, and exclusive supercar launch events." },
  { id: "cultural", title: "Cultural & Religious", desc: "Honoring traditions with elegance—from Ramadan Iftars to UAE National Day." },
  { id: "education", title: "Education & Youth", desc: "Celebrating academic milestones with premium proms and graduation galas." },
  { id: "memorial", title: "Memorials & Services", desc: "Dignified arrangements and peaceful gatherings to honor life and legacy." },
];

function Services() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const servicesRef = useRef(null);

  /* =========================
     SCROLL PROGRESS BAR
  ========================== */
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  /* =========================
     HERO PARALLAX EFFECTS
  ========================== */
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  const handleScrollDown = () => {
    servicesRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden font-sans antialiased selection:bg-yellow-500 selection:text-black">

      {/* 🔥 GLOBAL SCROLL PROGRESS BAR */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-yellow-500 origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">

        {/* Background */}
        <motion.div style={{ scale }} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black z-10" />
          <img
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80"
            alt="Luxury Event Background"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          style={{ opacity, y }}
          className="relative z-20 px-6 max-w-6xl mx-auto"
        >
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={{ opacity: 1, letterSpacing: "0.5em" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="block text-yellow-500 uppercase text-xs md:text-sm font-black mb-6"
          >
            Dubai's Premier Event Architects
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-6xl md:text-9xl font-bold leading-[0.9] tracking-tight mb-8"
          >
            Crafting{" "}
            <span className="italic font-serif text-yellow-500 underline underline-offset-[12px] decoration-1">
              Extraordinary
            </span>
            <br />
            Experiences
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-gray-300 text-lg md:text-2xl max-w-2xl mx-auto mb-12 font-light leading-relaxed"
          >
            We don't just plan events; we curate cinematic moments that define legacies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8"
          >
            <button
              onClick={handleScrollDown}
              className="relative group bg-yellow-500 text-black px-12 py-5 font-black uppercase tracking-widest text-xs overflow-hidden transition-all active:scale-95 shadow-2xl"
            >
              <span className="relative z-10 group-hover:text-white transition-colors">
                Explore Services
              </span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>

            <button
              onClick={handleScrollDown}
              className="group flex items-center gap-4 text-white font-bold uppercase tracking-widest text-xs"
            >
              <span className="w-14 h-14 border border-white/20 rounded-full flex items-center justify-center group-hover:bg-yellow-500 group-hover:border-yellow-500 group-hover:text-black transition-all duration-500 shadow-lg">
                ▶
              </span>
              View Showreel
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          onClick={handleScrollDown}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer opacity-50 hover:opacity-100 transition"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-yellow-500">
            Scroll
          </span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-yellow-500 to-transparent" />
        </motion.div>
      </section>

      {/* ================= CATEGORY SECTIONS ================= */}
      <div
        ref={servicesRef}
        className="max-w-[1400px] mx-auto py-28 px-6 space-y-44"
      >
        {CATEGORIES.map((cat, index) => (
          <motion.section
            key={cat.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            {/* Header */}
            <div className={`flex flex-col md:flex-row justify-between items-baseline mb-14 gap-6 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
              <div>
                <span className="text-yellow-500 font-mono text-sm tracking-[0.5em] uppercase">
                  0{index + 1}
                </span>
                <h2 className="text-4xl md:text-5xl font-medium mt-3 tracking-tight">
                  {cat.title}
                </h2>
                <p className="text-gray-500 mt-3 max-w-md">
                  {cat.desc}
                </p>
              </div>

              <div className="hidden md:block flex-grow h-[1px] bg-zinc-800 mx-8" />

<Link
  to={`/services/${cat.id}`}
  className="text-sm border-b border-yellow-500 pb-1 text-yellow-500 hover:text-white hover:border-white transition-all uppercase tracking-widest font-bold"
>
  View All {cat.id}
</Link>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
  {events
    .filter(
      (e) =>
        e.category.toLowerCase() === cat.id.toLowerCase()
    )
    .slice(0, 4)
    .map((event) => (
      <EventCard
        key={event.id}
        event={event}
        onOpen={() => setSelectedEvent(event)}   // ✅ FIXED HERE
      />
    ))}
</div>
          </motion.section>
        ))}
      </div>

      {/* ================= MODAL ================= */}
      <AnimatePresence mode="wait">
        {selectedEvent && (
          <EventModal
            event={selectedEvent}
            onClose={() => setSelectedEvent(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default Services;