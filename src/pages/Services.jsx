import { useState, useRef, useEffect } from "react";

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
      SCROLL TO TOP ON LOAD
  ========================== */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);
  /* =========================
      SCROLL PROGRESS BAR
  ========================== */
  const { scrollYProgress } = useScroll();
  // Smoother spring for the progress bar to avoid "sticking"
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  /* =========================
      HERO PARALLAX EFFECTS
  ========================== */
  // Using specific ranges to prevent unnecessary calculations deep into the page
  const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 1.05]);
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -30]);

  const handleScrollDown = () => {
    servicesRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  /* =========================
      ANIMATION VARIANTS
  ========================== */
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08, // Slightly faster stagger for a "snappier" feel
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 }, // Increased distance for a smoother glide
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.9, 
        ease: [0.22, 1, 0.36, 1] // Custom Quintic ease-out for premium smoothness
      },
    },
  };

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden font-sans antialiased selection:bg-yellow-500 selection:text-black">

      {/* 🔥 GLOBAL SCROLL PROGRESS BAR */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-yellow-500 origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[100svh] min-h-[600px] flex items-center justify-center text-center overflow-hidden">

        {/* Background */}
        <motion.div 
          style={{ scale, translateZ: 0 }} 
          className="absolute inset-0 bg-black will-change-transform"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black z-10" />
          <img
            src="/images/serviceshero.webp"
            alt="Luxury Event Background"
            className="w-full h-full object-cover opacity-50"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          style={{ opacity, y, translateZ: 0 }}
          className="relative z-20 px-4 md:px-6 max-w-7xl mx-auto w-full will-change-transform"
        >
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={{ opacity: 1, letterSpacing: "0.4em" }}
            transition={{ duration: 1.4, delay: 0.5, ease: "easeOut" }}
            className="block text-yellow-500 uppercase text-[10px] sm:text-xs md:text-sm font-black mb-4 md:mb-6"
          >
            Dubai's Premier Event Architects
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold leading-[1] md:leading-[0.9] tracking-tight mb-6 md:mb-8"
          >
            Crafting{" "}
            <span className="italic font-serif text-yellow-500 underline underline-offset-[8px] md:underline-offset-[12px] decoration-1">
              Extraordinary
            </span>
            <br />
            Experiences
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1 }}
            className="text-gray-300 text-base sm:text-lg md:text-2xl max-w-2xl mx-auto mb-8 md:mb-12 font-light leading-relaxed px-4"
          >
            We don't just plan events; we curate cinematic moments that define legacies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleScrollDown}
              className="w-full sm:w-auto relative group bg-yellow-500 text-black px-8 md:px-12 py-4 md:py-5 font-black uppercase tracking-widest text-[10px] md:text-xs overflow-hidden transition-transform shadow-2xl"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                Explore Services
              </span>
              <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.22, 1, 0.36, 1]" />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          onClick={handleScrollDown}
          className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 cursor-pointer opacity-50 hover:opacity-100 transition-opacity"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-yellow-500">
            Scroll
          </span>
          <div className="w-[1px] h-12 md:h-16 bg-gradient-to-b from-yellow-500 to-transparent" />
        </motion.div>
      </section>

      {/* ================= CATEGORY SECTIONS ================= */}
      <div
        ref={servicesRef}
        className="max-w-[1440px] mx-auto py-16 md:py-28 px-4 sm:px-6 md:px-12 space-y-24 md:space-y-44"
      >
        {CATEGORIES.map((cat, index) => (
          <motion.section
            key={cat.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }} // Better viewport triggering
            className="relative"
          >
            {/* Header */}
            <div className={`flex flex-col md:flex-row justify-between items-start md:items-baseline mb-10 md:mb-14 gap-4 md:gap-6 ${index % 2 !== 0 ? "md:flex-row-reverse text-left md:text-right" : ""}`}>
              <motion.div variants={itemVariants} className="w-full md:w-auto">
                <span className="text-yellow-500 font-mono text-xs md:text-sm tracking-[0.5em] uppercase">
                  0{index + 1}
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium mt-2 md:mt-3 tracking-tight">
                  {cat.title}
                </h2>
                <p className={`text-gray-500 mt-3 max-w-md ${index % 2 !== 0 ? "md:ml-auto" : ""}`}>
                  {cat.desc}
                </p>
              </motion.div>

              <div className="hidden lg:block flex-grow h-[1px] bg-zinc-800 mx-8 opacity-40" />

              <motion.div variants={itemVariants}>
                <Link
                  to={`/services/${cat.id}`}
                  className="group inline-flex items-center text-[10px] md:text-xs border-b border-yellow-500 pb-1 text-yellow-500 hover:text-white hover:border-white transition-all uppercase tracking-widest font-bold"
                >
                  View All {cat.id}
                </Link>
              </motion.div>
            </div>

            {/* Cards Grid */}
            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 lg:gap-10"
            >
              {events
                .filter((e) => e.category.toLowerCase() === cat.id.toLowerCase())
                .slice(0, 4)
                .map((event) => (
                  <motion.div 
                    key={event.id} 
                    variants={itemVariants} 
                    className="w-full"
                    whileHover={{ y: -8, transition: { duration: 0.4, ease: "easeOut" } }}
                  >
                    <EventCard
                      event={event}
                      onOpen={() => setSelectedEvent(event)}
                    />
                  </motion.div>
                ))}
            </motion.div>
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