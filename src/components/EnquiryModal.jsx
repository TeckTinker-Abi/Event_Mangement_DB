<<<<<<< HEAD
import { motion, AnimatePresence } from "framer-motion";
=======
import { motion } from "framer-motion";
>>>>>>> c54c747 (change in enquiry model)
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

<<<<<<< HEAD
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);
=======
  // Prevent background scrolling
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
>>>>>>> c54c747 (change in enquiry model)

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // ================= LIVE VALIDATION =================
  const handleChange = (e) => {
    const { name, value } = e.target;
    let errorMessage = "";

    if (name === "fullName") {
      if (/[^A-Za-z\s]/.test(value)) {
        errorMessage = "Enter only letters";
      }
    }

    if (name === "phone") {
      if (/[^0-9]/.test(value)) {
        errorMessage = "Enter only numbers";
      }
    }

    if (name === "email") {
      if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        errorMessage = "Enter valid email address";
      }
    }

    setErrors((prev) => ({
      ...prev,
      [name]: errorMessage
    }));

    setFormData({
      ...formData,
<<<<<<< HEAD
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

=======
      [name]: value
    });
  };

  // ================= FINAL VALIDATION =================
  const validate = () => {
    let newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone Number is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!formData.eventType) {
      newErrors.eventType = "Select event type";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate() && Object.values(errors).every((err) => !err)) {
      console.log("Form Submitted:", formData);
      alert("Thank you! Your enquiry has been sent.");
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">

      {/* Overlay */}
      <motion.div
        className="absolute inset-0 bg-black/90 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={onClose}
      />

      {/* Modal */}
      <motion.div
        className="relative w-full max-w-2xl bg-zinc-950 p-8 md:p-12 rounded-3xl border border-yellow-600/30 shadow-2xl overflow-y-auto max-h-[90vh]"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
      >

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-yellow-500"
        >
          ✕
        </button>

        <h2 className="text-2xl font-semibold mb-8 text-center text-white">
          Event <span className="text-yellow-600">Enquiry Form</span>
        </h2>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">

          {/* Full Name */}
          <div>
>>>>>>> c54c747 (change in enquiry model)
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              required
<<<<<<< HEAD
              value={formData.fullName}
=======
              className="w-full p-4 rounded-xl bg-zinc-900 text-white border border-zinc-700 focus:border-yellow-500 outline-none"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <input
              type="text"
              name="phone"
              value={formData.phone}
>>>>>>> c54c747 (change in enquiry model)
              onChange={handleChange}
              className="p-4 rounded-xl bg-zinc-800/80 text-white border border-zinc-600 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/40 transition duration-300"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
<<<<<<< HEAD
              value={formData.phone}
              onChange={handleChange}
              className="p-4 rounded-xl bg-zinc-800/80 text-white border border-zinc-600 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/40 transition duration-300"
=======
              className="w-full p-4 rounded-xl bg-zinc-900 text-white border border-zinc-700 focus:border-yellow-500 outline-none"
>>>>>>> c54c747 (change in enquiry model)
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
<<<<<<< HEAD
              value={formData.email}
              onChange={handleChange}
              className="p-4 rounded-xl bg-zinc-800/80 text-white border border-zinc-600 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/40 transition duration-300 md:col-span-2"
=======
              className="w-full p-4 rounded-xl bg-zinc-900 text-white border border-zinc-700 focus:border-yellow-500 outline-none"
>>>>>>> c54c747 (change in enquiry model)
            />

            <select
              name="eventType"
              required
              value={formData.eventType}
              onChange={handleChange}
<<<<<<< HEAD
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
=======
              required
              className="w-full p-4 rounded-xl bg-zinc-900 text-white border border-zinc-700 focus:border-yellow-500 outline-none"
            >
              <option value="">Select Event Type</option>
              <option value="Social">Social & Party Events</option>
              <option value="Wedding">Wedding & Relationship Events</option>
              <option value="Corporate">Corporate & Business Events</option>
>>>>>>> c54c747 (change in enquiry model)
            </select>

            <textarea
              name="message"
<<<<<<< HEAD
              rows="4"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              className="p-4 rounded-xl bg-zinc-800/80 text-white border border-zinc-600 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/40 transition duration-300 md:col-span-2"
=======
              value={formData.message}
              onChange={handleChange}
              rows="3"
              placeholder="Enter your message"
              required
              className="w-full p-4 rounded-xl bg-zinc-900 text-white border border-zinc-700 focus:border-yellow-500 outline-none"
>>>>>>> c54c747 (change in enquiry model)
            />

<<<<<<< HEAD
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
=======
          <button
            type="submit"
            className="md:col-span-2 bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 rounded-xl transition-all"
          >
            Submit Enquiry
          </button>

        </form>
      </motion.div>
    </div>
>>>>>>> c54c747 (change in enquiry model)
  );
};

export default EnquiryModal;