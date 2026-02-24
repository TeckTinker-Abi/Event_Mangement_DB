import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { events } from "../data/events";
import EventCard from "../components/EventCard";
import EventModal from "../components/EventModal";
import EnquiryModal from "../components/EnquiryModal"; // Import the EnquiryModal
import { useState, useEffect, useMemo } from "react";

function CategoryPage() {
  const { category } = useParams();
  const navigate = useNavigate();
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false); // State for Custom Proposal

  /* =========================
      SCROLL TO TOP ON LOAD
  ========================== */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [category]);

  const safeCategory = category?.toLowerCase() || "";
  const formattedCategory = safeCategory.charAt(0).toUpperCase() + safeCategory.slice(1);

  const filteredEvents = useMemo(() => {
    return events.filter(
      (e) => e.category && e.category.toLowerCase() === safeCategory
    );
  }, [safeCategory]);

  /* =========================
      ANIMATION VARIANTS (REFINED)
  ========================== */
  const smoothEase = [0.22, 1, 0.36, 1];

  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVars = {
    hidden: { opacity: 0, y: 30, translateZ: 0 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: smoothEase },
    },
  };

  const headerVars = {
    hidden: { opacity: 0, x: -20 },
    show: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 1, ease: smoothEase } 
    }
  };

  return (
    <div className="bg-black text-white min-h-screen selection:bg-yellow-500 selection:text-black antialiased font-sans overflow-x-hidden">

      {/* ================= BREADCRUMB ================= */}
      <div className="max-w-[1440px] mx-auto pt-32 px-6 lg:px-12">

        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: smoothEase }}
          onClick={() => navigate("/services")}
          className="group flex items-center gap-3 mb-14 text-yellow-500/60 hover:text-yellow-500 transition-colors uppercase text-[10px] font-black tracking-[0.3em] will-change-transform"
        >
          <span className="group-hover:-translate-x-2 transition-transform duration-300">
            ←
          </span>
          Back to Services
        </motion.button>

        {/* ================= HEADER ================= */}
        <header className="mb-28 border-l-2 border-yellow-500 pl-8 relative">
          <motion.span
            initial="hidden"
            animate="show"
            variants={headerVars}
            className="text-yellow-500 font-mono text-sm tracking-[0.5em] uppercase block mb-6"
          >
            Collection / {formattedCategory}
          </motion.span>

          <motion.h1
            initial="hidden"
            animate="show"
            variants={headerVars}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-bold tracking-tighter capitalize leading-none"
          >
            {formattedCategory}{" "}
            <span className="italic font-serif text-yellow-500">
              Milestones
            </span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            variants={headerVars}
            transition={{ delay: 0.2 }}
            className="text-gray-400 mt-10 text-xl max-w-2xl font-light leading-relaxed"
          >
            A curated selection of {safeCategory} events designed and
            executed with the highest standards of luxury and precision
            in the UAE.
          </motion.p>
        </header>

        {/* ================= EVENT GRID ================= */}
        {filteredEvents.length > 0 ? (
          <motion.div
            variants={containerVars}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 pb-36"
          >
            {filteredEvents.map((event) => (
              <motion.div 
                key={event.id} 
                variants={itemVars}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="will-change-transform"
              >
                <EventCard
                  event={event}
                  onOpen={() => setSelectedEvent(event)}
                />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-44 text-center border-t border-zinc-900"
          >
            <h2 className="text-2xl text-gray-500 font-light italic">
              No boutique experiences currently available in this collection.
            </h2>
          </motion.div>
        )}
      </div>

      {/* ================= CONVERSION SECTION ================= */}
      <section className="bg-zinc-950 border-t border-white/5 py-28 px-6 text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, ease: smoothEase }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-10 tracking-tight uppercase">
            Seeking a bespoke {safeCategory} vision?
          </h2>

          <motion.button 
            onClick={() => setIsEnquiryOpen(true)} // Opens the Enquiry Modal
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-500 text-black px-12 py-5 font-black uppercase tracking-widest text-xs hover:bg-white transition-colors duration-300 shadow-xl relative overflow-hidden group"
          >
            <span className="relative z-10">Request Custom Proposal</span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.22, 1, 0.36, 1]" />
          </motion.button>
        </motion.div>
      </section>

      {/* ================= MODAL SYSTEM ================= */}
      <AnimatePresence mode="wait">
        {/* EVENT DETAILS MODAL */}
        {selectedEvent && (
          <EventModal
            key="event-modal"
            event={selectedEvent}
            onClose={() => setSelectedEvent(null)}
          />
        )}

        {/* CUSTOM PROPOSAL MODAL */}
        {isEnquiryOpen && (
          <EnquiryModal
            key="enquiry-modal"
            isOpen={isEnquiryOpen}
            onClose={() => setIsEnquiryOpen(false)}
            // Optional: passing context to the form
            initialSubject={`Bespoke ${formattedCategory} Vision`} 
          />
        )}
      </AnimatePresence>

    </div>
  );
}

export default CategoryPage;