import { AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";

function EventModal({ event, onClose }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = "auto"; };
  }, []);

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  useEffect(() => {
    if (isPaused || !event.images) return;
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === event.images.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [event.images, isPaused]);

  return (
    <motion.div
      className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-[999] p-4 md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        ref={modalRef}
        layoutId={`card-${event.id}`}
        className="bg-zinc-950 rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] relative flex flex-col md:flex-row border border-white/10"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white/50 hover:text-yellow-500 z-50 transition-colors bg-black/20 backdrop-blur-md w-10 h-10 rounded-full flex items-center justify-center border border-white/10"
        >
          ✕
        </button>

        {/* Left: Auto Rotating Image Section */}
        <div
          className="relative h-64 md:h-auto md:w-1/2 overflow-hidden border-r border-white/5"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImage}
              src={event.images?.[currentImage]}
              alt={event.title}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </AnimatePresence>
          
          {/* Image Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {event.images?.map((_, i) => (
              <div key={i} className={`h-1 w-8 rounded-full transition-all ${i === currentImage ? 'bg-yellow-500' : 'bg-white/20'}`} />
            ))}
          </div>
        </div>

        {/* Right: Content Section */}
        <div className="flex-1 overflow-y-auto p-8 md:p-12 text-white custom-scrollbar">
          <span className="text-yellow-500 font-mono text-sm tracking-[0.3em] uppercase mb-4 block">Event Details</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            {event.title}
          </h2>

          <p className="text-gray-400 mb-8 leading-relaxed text-lg font-light">
            {event.fullDescription}
          </p>

          <div className="grid grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="text-xs font-bold text-yellow-500 mb-3 uppercase tracking-widest">Includes</h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                {event.includes?.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-yellow-500 text-xs">✦</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-bold text-yellow-500 mb-3 uppercase tracking-widest">Details</h3>
              <p className="text-sm text-gray-300">Capacity: {event.capacity}</p>
              <p className="text-sm text-gray-300 mt-2 italic font-serif text-yellow-500/80">Available in Dubai Marina & Palm Jumeirah</p>
            </div>
          </div>

          <button className="w-full bg-yellow-500 text-black py-5 rounded-xl font-black uppercase tracking-widest hover:bg-white transition-all duration-300 transform active:scale-95 shadow-[0_10px_20px_rgba(234,179,8,0.2)]">
            Request Private Consultation
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default EventModal;