import React from "react";
import { motion } from "framer-motion";

const EnquiryModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">

      {/* Modal Box */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-3xl bg-gradient-to-br from-zinc-900/95 via-black/90 to-zinc-900/95 backdrop-blur-2xl p-10 rounded-3xl border border-yellow-600/40 shadow-[0_0_60px_rgba(234,179,8,0.35)]"
      >

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-5 text-gray-400 hover:text-yellow-500 text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-semibold mb-8 text-center">
          Event <span className="text-yellow-600">Enquiry Form</span>
        </h2>

        <form className="grid md:grid-cols-2 gap-6">

          <input
            type="text"
            placeholder="Full Name"
            required
            className="p-4 rounded-xl bg-zinc-800/80 text-white border border-zinc-600 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/40 transition duration-300"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            required
            className="p-4 rounded-xl bg-zinc-800/80 text-white border border-zinc-600 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/40 transition duration-300"
          />

          <input
            type="email"
            placeholder="Email Address"
            required
            className="p-4 rounded-xl bg-zinc-800/80 text-white border border-zinc-600 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/40 transition duration-300"
          />

          <select
            required
            defaultValue=""
            className="p-4 rounded-xl bg-zinc-800/80 text-white border border-zinc-600 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/40 transition duration-300 md:col-span-2"
          >
            <option value="" disabled>Select Event Type</option>
            <option>Social & Party Events</option>
            <option>Wedding & Relationship Events</option>
            <option>Corporate & Business Events</option>
            <option>Education & Youth Events</option>
            <option>Cultural & Religious Events</option>
            <option>Entertainment & Luxury Events</option>
            <option>Memorial & End-of-Life Events</option>
          </select>

          <textarea
            rows="4"
            placeholder="Enter your message"
            className="p-4 rounded-xl bg-zinc-800/80 text-white border border-zinc-600 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/40 transition duration-300 md:col-span-2"
          ></textarea>

          <button
            type="submit"
            className="md:col-span-2 bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 hover:from-yellow-400 hover:to-amber-400 text-black font-semibold py-4 rounded-xl transition duration-300 shadow-lg hover:shadow-yellow-500/40 hover:scale-105"
          >
            Submit Enquiry
          </button>

        </form>
      </motion.div>
    </div>
  );
};

export default EnquiryModal;