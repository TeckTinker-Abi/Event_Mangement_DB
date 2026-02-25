import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const EnquiryModal = ({ isOpen, onClose }) => {

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    eventType: "",
    message: ""
  });

  const [errors, setErrors] = useState({});

  // Prevent background scrolling
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
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              required
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
              onChange={handleChange}
              placeholder="Phone Number"
              required
              className="w-full p-4 rounded-xl bg-zinc-900 text-white border border-zinc-700 focus:border-yellow-500 outline-none"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Email */}
          <div className="md:col-span-2">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="w-full p-4 rounded-xl bg-zinc-900 text-white border border-zinc-700 focus:border-yellow-500 outline-none"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Event Type */}
          <div className="md:col-span-2">
            <select
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-xl bg-zinc-900 text-white border border-zinc-700 focus:border-yellow-500 outline-none"
            >
              <option value="">Select Event Type</option>
              <option value="Social">Social & Party Events</option>
              <option value="Wedding">Wedding & Relationship Events</option>
              <option value="Corporate">Corporate & Business Events</option>
              <option value="Education and Youth Events">Education and Youth Events</option>
              <option value="Cultural and Religious Events">Cultural and Religious Events</option>
              <option value="Entertainment and Luxury Events">Entertainment and Luxury events</option>
              <option value="Memorial and End of life Events">Memorial and End of life Events</option>
              <option value="Custom your Events">Custom your Events</option>
            </select>
            {errors.eventType && (
              <p className="text-red-500 text-sm mt-1">{errors.eventType}</p>
            )}
          </div>

          {/* Message */}
          <div className="md:col-span-2">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="3"
              placeholder="Enter your message"
              required
              className="w-full p-4 rounded-xl bg-zinc-900 text-white border border-zinc-700 focus:border-yellow-500 outline-none"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="md:col-span-2 bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 rounded-xl transition-all"
          >
            Submit Enquiry
          </button>

        </form>
      </motion.div>
    </div>
  );
};

export default EnquiryModal;