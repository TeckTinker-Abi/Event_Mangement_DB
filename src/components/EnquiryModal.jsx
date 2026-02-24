import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const EnquiryModal = ({ isOpen, onClose }) => {

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    eventType: "",
    message: ""
  });

  // Lock background scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Enquiry Submitted:", formData);

    // TODO: Add API call here (EmailJS / Backend / Database)

    alert("Thank you! Your enquiry has been sent.");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">

        {/* Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 80, scale: 0.95 }}
          transition={{ duration: 0.5 }}
          onClick={(e) => e.stopPropagation()}
          className="relative overflow-hidden w-full max-w-5xl bg-gradient-to-br from-zinc-900/90 via-black/80 to-zinc-900/90 backdrop-blur-2xl p-8 md:p-12 rounded-3xl border border-yellow-600/30 shadow-2xl max-h-[90vh] overflow-y-auto"
        >

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-gray-400 hover:text-yellow-500 text-xl"
          >
            ✕
          </button>

          <h2 className="text-2xl font-semibold mb-8 text-center text-white">
            Event <span className="text-yellow-600">Enquiry Form</span>
          </h2>

          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">

            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              required
              value={formData.fullName}
              onChange={handleChange}
              className="p-4 rounded-xl bg-zinc-800/80 text-white border border-zinc-600 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/40 transition duration-300"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              value={formData.phone}
              onChange={handleChange}
              className="p-4 rounded-xl bg-zinc-800/80 text-white border border-zinc-600 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/40 transition duration-300"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              value={formData.email}
              onChange={handleChange}
              className="p-4 rounded-xl bg-zinc-800/80 text-white border border-zinc-600 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/40 transition duration-300 md:col-span-2"
            />

            <select
              name="eventType"
              required
              value={formData.eventType}
              onChange={handleChange}
              className="p-4 rounded-xl bg-zinc-800/80 text-white border border-zinc-600 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/40 transition duration-300 md:col-span-2"
            >
              <option value="" disabled>Select Event Type</option>
              <option value="Social & Party Events">Social & Party Events</option>
              <option value="Wedding & Relationship Events">Wedding & Relationship Events</option>
              <option value="Corporate & Business Events">Corporate & Business Events</option>
              <option value="Education & Youth Events">Education & Youth Events</option>
              <option value="Cultural & Religious Events">Cultural & Religious Events</option>
              <option value="Entertainment & Luxury Events">Entertainment & Luxury Events</option>
              <option value="Memorial & End-of-Life Events">Memorial & End-of-Life Events</option>
            </select>

            <textarea
              name="message"
              rows="4"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              className="p-4 rounded-xl bg-zinc-800/80 text-white border border-zinc-600 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/40 transition duration-300 md:col-span-2"
            />

            <button
              type="submit"
              className="md:col-span-2 bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 hover:from-yellow-400 hover:to-amber-400 text-black font-semibold py-4 rounded-xl transition duration-300 shadow-lg hover:shadow-yellow-500/40 hover:scale-105"
            >
              Submit Enquiry
            </button>

          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default EnquiryModal;