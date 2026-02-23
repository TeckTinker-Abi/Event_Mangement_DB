import { motion } from "framer-motion";

// Changed onViewDetails to onOpen to match your Services.jsx
function EventCard({ event, onOpen }) {
  return (
    <motion.div
      layoutId={`card-${event.id}`}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="relative bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl cursor-pointer group border border-white/5"
      onClick={onOpen}
    >
      <motion.img
        layoutId={`image-${event.id}`}
        src={event.images?.[0] || "/images/placeholder.jpg"}
        alt={event.title}
        className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
      />

      {/* Luxury Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

      <div className="absolute bottom-0 p-6 z-10 w-full">
        <motion.span className="text-yellow-500 text-[10px] uppercase tracking-[0.3em] font-bold mb-2 block opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
          Exclusive Experience
        </motion.span>
        <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
          {event.title}
        </h3>
        <p className="text-gray-400 text-sm line-clamp-2 mb-4 font-light">
          {event.shortDescription}
        </p>
        
        <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all">
            <span className="text-white text-xs font-bold uppercase tracking-widest border-b border-yellow-500 pb-1">
                View Details
            </span>
            <span className="text-gray-500 text-xs italic">{event.capacity}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default EventCard;