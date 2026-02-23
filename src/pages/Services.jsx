import { useState } from "react";
import { events } from "../data/events";
import EventCard from "../components/EventCard";
import { motion } from "framer-motion";

const categories = ["All", "Social", "Wedding", "Corporate"];

function Services() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredEvents =
    activeCategory === "All"
      ? events
      : events.filter((event) => event.category === activeCategory);

  return (
    <div className="px-8 py-12">

      {/* Title */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-yellow-500 mb-4">
          Our Services
        </h1>
        <p className="text-gray-400">
          Explore our premium event experiences in Dubai
        </p>
      </div>

      {/* Category Filters */}
      <div className="flex justify-center gap-6 mb-10 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full border transition ${
              activeCategory === cat
                ? "bg-yellow-500 text-black"
                : "border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Event Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </motion.div>
    </div>
  );
}

export default Services;