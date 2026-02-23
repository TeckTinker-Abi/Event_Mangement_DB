import { motion } from "framer-motion";

function EventCard({ event }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gray-900 rounded-xl overflow-hidden shadow-lg cursor-pointer"
    >
      <img
        src={event.image}
        alt={event.title}
        className="h-56 w-full object-cover"
      />

      <div className="p-5">
        <h3 className="text-xl font-semibold text-yellow-500 mb-2">
          {event.title}
        </h3>
        <p className="text-gray-400 text-sm">
          {event.description}
        </p>
      </div>
    </motion.div>
  );
}

export default EventCard;