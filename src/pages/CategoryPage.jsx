import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { events } from "../data/events";
import EventCard from "../components/EventCard";
import EventModal from "../components/EventModal";
import { useState, useEffect } from "react";

function CategoryPage() {
  const { category } = useParams();
  const navigate = useNavigate();
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Scroll to top on mount to ensure the luxury hero is seen
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter events based on the URL parameter
  const filteredEvents = events.filter(
    (e) => e.category.toLowerCase() === category?.toLowerCase()
  );

  // Animation Variants for staggered entrance
  const containerVars = {
    animate: { 
      transition: { 
        staggerChildren: 0.1 
      } 
    }
  };

  const itemVars = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <div className="bg-black text-white min-h-screen selection:bg-yellow-500 selection:text-black antialiased font-sans">
      
      {/* 1️⃣ BREADCRUMB NAVIGATION */}
      <div className="max-w-[1440px] mx-auto pt-32 px-6 lg:px-12">
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate("/services")}
          className="group flex items-center gap-3 mb-12 text-yellow-500/60 hover:text-yellow-500 transition-colors uppercase text-[10px] font-black tracking-[0.3em]"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span> 
          Back to Services
        </motion.button>

        {/* 2️⃣ CATEGORY HEADER SECTION */}
        <header className="mb-24 border-l-2 border-yellow-500 pl-8">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-yellow-500 font-mono text-sm tracking-[0.5em] uppercase block mb-4"
          >
            Collection / {category}
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold tracking-tighter capitalize leading-none"
          >
            {category} <span className="italic font-serif text-yellow-500">Milestones</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 mt-8 text-xl max-w-2xl font-light leading-relaxed"
          >
            A curated selection of {category?.toLowerCase()} events designed and executed with the highest standards of luxury and precision in the UAE.
          </motion.p>
        </header>

        {/* 3️⃣ EVENT GRID */}
        {filteredEvents.length > 0 ? (
          <motion.div 
            variants={containerVars}
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pb-32"
          >
            {filteredEvents.map((event) => (
              <motion.div key={event.id} variants={itemVars}>
                <EventCard
                  event={event}
                  onOpen={() => setSelectedEvent(event)}
                />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="py-40 text-center border-t border-zinc-900">
            <h2 className="text-2xl text-gray-500 font-light italic">
              No boutique experiences currently available in this collection.
            </h2>
          </div>
        )}
      </div>

      {/* 4️⃣ CONVERSION SECTION */}
      <section className="bg-zinc-950 border-t border-white/5 py-24 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight uppercase">
            Seeking a bespoke {category} vision?
          </h2>
          <button className="bg-yellow-500 text-black px-12 py-5 font-black uppercase tracking-widest text-xs hover:bg-white transition-all transform hover:scale-105 active:scale-95 shadow-xl">
            Request Custom Proposal
          </button>
        </motion.div>
      </section>

      {/* 5️⃣ MODAL SYSTEM */}
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

export default CategoryPage;