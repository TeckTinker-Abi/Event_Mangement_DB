
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const EnquiryModal = ({ isOpen, onClose }) => {
const [formData, setFormData] = useState({
  fullName: "",
  countryCode: "",
  country: "in",
  phone: "",
  maxLength: 15,
  email: "",
  eventType: "",
  message: ""
});

  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

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
    setShowSuccess(true);

    setFormData({
      fullName: "",
      phone: "",
      email: "",
      eventType: "",
      message: ""
    });

    setErrors({});
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
          <div className="md:col-span-2">
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

          {/* Phone Section */}
<div className="md:col-span-2 flex gap-3">

  {/* COUNTRY SELECT */}
  <div className="relative w-28 flex-shrink-0">

    <PhoneInput
      country={formData.country}
      value=""
      onChange={(value, data) => {
        const calculatedLength = data.format
          ? data.format.replace(/\D/g, "").length - data.dialCode.length
          : 15;

        setFormData({
          ...formData,
          country: data.countryCode,
          countryCode: "+" + data.dialCode,
          maxLength: calculatedLength
        });
      }}
      enableSearch
      disableCountryCode
      inputStyle={{ display: "none" }}
      buttonClass="manager-phone-button"
      dropdownClass="manager-phone-dropdown"
    />

    {formData.countryCode && (
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-white font-medium">
        {formData.countryCode}
      </div>
    )}
  </div>

  {/* PHONE NUMBER */}
  <input
    type="tel"
    name="phone"
    value={formData.phone}
    onChange={(e) => {
      const digits = e.target.value.replace(/\D/g, "");
      const max = formData.maxLength || 15;

      if (digits.length <= max) {
        setFormData({ ...formData, phone: digits });
      }
    }}
    placeholder="Enter phone number"
    required
    className="flex-1 p-4 rounded-xl 
               bg-zinc-900 text-white 
               border border-zinc-700 
               focus:border-yellow-500 outline-none"
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
          {/* SUCCESS POPUP */}
{showSuccess && (
  <div className="absolute inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm rounded-3xl">

    <motion.div
      initial={{ scale: 0.7, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="relative bg-[#0b1120] border border-yellow-500/40 
                 rounded-2xl p-8 w-[90%] max-w-sm text-center
                 shadow-[0_0_40px_rgba(255,215,0,0.4)]"
    >

      {/* Close Button */}
      <button
        onClick={() => {
          setShowSuccess(false);
          onClose();   // close entire modal after success
        }}
        className="absolute top-3 right-3 text-gray-400 hover:text-yellow-500"
      >
        ✕
      </button>

      <h3 className="text-xl font-semibold text-yellow-500 mb-3">
        Success!
      </h3>

      <p className="text-gray-300 text-sm">
        Your enquiry has been submitted successfully.
      </p>

      <button
        onClick={() => {
          setShowSuccess(false);
          onClose();
        }}
        className="mt-5 bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 
                   text-black px-5 py-2 rounded-lg font-semibold 
                   hover:scale-105 transition"
      >
        Close
      </button>

    </motion.div>
  </div>
)}

        </form>
      </motion.div>
    </div>
  );
};

export default EnquiryModal;