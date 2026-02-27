import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { COUNTRY_DATA } from "../components/countries"; // Corrected path

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const searchInputRef = useRef(null);

  // Form Initial State
  const initialState = {
    fullName: "",
    phone: "",
    email: "",
    eventType: "",
    message: ""
  };

  const [formData, setFormData] = useState(initialState);
  const [selectedCountry, setSelectedCountry] = useState(
    COUNTRY_DATA.find(c => c.iso === "AE") || COUNTRY_DATA[0]
  );

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Auto-focus search when dropdown opens
  useEffect(() => {
    if (isDropdownOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isDropdownOpen]);

  // Filter countries for search
  const filteredCountries = COUNTRY_DATA.filter((c) =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.code.includes(searchTerm) ||
    c.iso.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "fullName") {
      const cleanName = value.replace(/[^A-Za-z\s]/g, "");
      setFormData(prev => ({ ...prev, fullName: cleanName }));
      return;
    }

    if (name === "email") {
      setErrors(prev => ({ ...prev, email: value.includes("@") ? "" : "Invalid email" }));
    }

    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (e) => {
    const numbersOnly = e.target.value.replace(/\D/g, "");
    if (numbersOnly.length <= selectedCountry.limit) {
      setFormData(prev => ({ ...prev, phone: numbersOnly }));
    }
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Name is required";
    
    // Strict Phone validation
    if (formData.phone.length !== selectedCountry.limit) {
      newErrors.phone = `Must be exactly ${selectedCountry.limit} digits`;
    }
    
    if (!formData.email.includes("@")) newErrors.email = "Valid email required";
    if (!formData.eventType) newErrors.eventType = "Please select an event";
    
    // NOTE: Description (message) is now OPTIONAL, so no validation here

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setShowSuccess(true);
        setFormData(initialState);
      }, 1500);
    } else {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    }
  };

  const whyChooseUs = [
    { title: "10+ Years Experience", desc: "Delivering premium event solutions across UAE." },
    { title: "200+ Successful Events", desc: "From luxury weddings to corporate galas." },
    { title: "Dedicated Event Team", desc: "End-to-end management with precision and care." },
  ];

  const faqs = [
    { question: "How early should I book?", answer: "We recommend booking at least 4–6 weeks in advance." },
    { question: "Do you offer custom packages?", answer: "Yes, all our services can be tailored to your needs." },
    { question: "Do you manage venue permits?", answer: "Yes, we handle all required permissions and coordination." },
  ];

  return (
    <div className="bg-[#030712] text-white min-h-screen w-full pt-28">
      {/* Validation Alert */}
      <AnimatePresence>
        {showAlert && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 20, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            className="fixed top-0 left-1/2 -translate-x-1/2 z-[130] bg-red-600 text-white px-8 py-3 rounded-full shadow-2xl font-bold"
          >
            ⚠️ Please fill all required fields correctly.
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 px-6 md:px-20 py-8 max-w-7xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-16 -mt-10">
          <h1 className="text-5xl md:text-5xl font-bold mb-4">
            Contact <span className="text-yellow-600">Us</span>
          </h1>
          <p className="text-gray-300 max-w-4xl mx-auto">We don’t follow trends — we define them.</p>
          <p className="text-gray-300 max-w-4xl mx-auto">Crafting immersive, high-impact experiences that command attention and leave lasting impressions.</p>
        </div>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "140px" }}
          transition={{ duration: 0.8 }}
          className="relative h-[2px] mx-auto mb-16 rounded-full overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600" />
          <motion.div
            animate={{ x: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
          />
        </motion.div>

        {/* Contact Cards */}
        <div className="max-w-5xl mx-auto mb-24 grid md:grid-cols-2 gap-10">
          {[
            { title: "Location", value: "Dubai, United Arab Emirates", link: "https://maps.google.com" },
            { title: "Phone", value: "+971 50 123 4567", link: "tel:+971501234567" },
            { title: "Email", value: "info@dubaievents.com", link: "mailto:info@dubaievents.com" },
            { title: "Business Hours", value: "Monday – Saturday : 9:00 AM – 8:00 PM" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden bg-gray-900/60 backdrop-blur-md p-10 rounded-3xl border border-yellow-500/40 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 shadow-[0_0_25px_rgba(255,215,0,0.15)] hover:shadow-[0_0_60px_rgba(255,215,0,0.5)]"
            >
              <h3 className="text-xl font-semibold text-yellow-600 mb-4">{item.title}</h3>
              {item.link ? (
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-500 transition">{item.value}</a>
              ) : (
                <p className="text-gray-300">{item.value}</p>
              )}
            </motion.div>
          ))}
        </div>

        {/* NEW ENQUIRY FORM SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full max-w-5xl mx-auto mb-16 md:mb-28 bg-gray-900/60 backdrop-blur-md px-6 py-10 md:p-12 rounded-2xl border border-gray-800 transition-all duration-300 shadow-lg"
        >
          <button type="button" onClick={() => navigate(-1)} className="absolute top-4 right-4 text-gray-400 hover:text-yellow-500 text-2xl transition">✕</button>
          <h2 className="text-xl md:text-2xl font-semibold mb-6 md:mb-8 text-center uppercase tracking-wider">
            Event <span className="text-yellow-600">Enquiry Form</span>
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div className="relative">
              <input
                type="text"
                name="fullName"
                placeholder="Enter Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full h-[56px] text-sm md:text-base px-4 rounded-xl bg-zinc-800/80 border border-zinc-600 focus:border-yellow-500 outline-none transition-all"
              />
              {errors.fullName && <p className="text-red-500 text-[10px] mt-1 ml-2">{errors.fullName}</p>}
            </div>

            {/* Custom Phone Input */}
            <div className="flex flex-col md:flex-row gap-3">
              <div className="relative w-full md:w-30" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => { setIsDropdownOpen(!isDropdownOpen); setSearchTerm(""); }}
                  className="w-full h-[56px] p-4 rounded-xl bg-zinc-800/80 border border-zinc-600 flex items-center justify-between hover:border-yellow-500 transition-all"
                >
                  <span className="text-xs font-bold whitespace-nowrap">{selectedCountry.code} | {selectedCountry.iso}</span>
                  <span className="text-yellow-600 text-[10px]">▼</span>
                </button>

                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="absolute z-50 mt-2 w-72 bg-zinc-950 border border-zinc-700 rounded-xl shadow-2xl overflow-hidden left-0">
                      <div className="p-3 border-b border-zinc-800 sticky top-0 bg-zinc-950">
                        <input
                          ref={searchInputRef}
                          type="text"
                          placeholder="Search country..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="w-full p-2 text-sm bg-zinc-900 text-white rounded-lg outline-none border border-zinc-800 focus:border-yellow-600"
                        />
                      </div>
                      <div className="max-h-56 overflow-y-auto custom-scrollbar">
                        {filteredCountries.map((c) => (
                          <div
                            key={c.iso}
                            onClick={() => { setSelectedCountry(c); setIsDropdownOpen(false); setFormData(p => ({ ...p, phone: "" })); }}
                            className="p-3 text-white hover:bg-yellow-600 hover:text-black cursor-pointer flex justify-between items-center text-sm transition-all group"
                          >
                            <span className="truncate flex-1 pr-2">{c.name}</span>
                            <span className="font-bold text-[10px] bg-zinc-800 px-2 py-1 rounded text-zinc-400 group-hover:text-black italic">{c.code} | {c.iso}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="flex-1 relative">
                <input
                  type="tel"
                  name="phone"
                  placeholder={`Enter phone number (${selectedCountry.limit} digits)`}
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  className="w-full h-[56px] p-4 rounded-xl bg-zinc-800/80 text-white border border-zinc-600 focus:border-yellow-500 outline-none transition-all"
                />
                {errors.phone && <p className="text-red-500 text-[10px] mt-1 ml-2">{errors.phone}</p>}
              </div>
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full h-[56px] text-sm md:text-base p-4 rounded-xl bg-zinc-800/80 border border-zinc-600 focus:border-yellow-500 outline-none transition-all"
              />
              {errors.email && <p className="text-red-500 text-[10px] mt-1 ml-2">{errors.email}</p>}
            </div>

            {/* Event Type */}
            <div className="relative">
              <select
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                className="w-full h-[56px] text-sm md:text-base p-4 rounded-xl bg-zinc-800/80 border border-zinc-600 focus:border-yellow-500 outline-none appearance-none cursor-pointer"
              >
                <option value="">Select Event Type</option>
                <option value="Social & Party Events">Social & Party Events</option>
                <option value="Wedding & Relationship Events">Wedding & Relationship Events</option>
                <option value="Corporate & Business Events">Corporate & Business Events</option>
                <option value="Education & Youth Events"> Education & Youth Events</option>
                <option value="Entertainment & Luxury Events">Entertainment & Luxury Events</option>
                <option value="Custom Events">Custom Your Events</option>
              </select>
              <span className="absolute right-4 top-[21px] pointer-events-none text-yellow-600 text-xs">▼</span>
            </div>

            {/* Message (Optional) */}
            <div className="relative">
              <textarea
                name="message"
                placeholder="Enter your message (Optional)"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full p-4 rounded-xl bg-zinc-800/80 text-white border border-zinc-600 focus:border-yellow-500 outline-none resize-none transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 text-black font-bold py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-3 active:scale-95"
            >
              {isSubmitting ? (
                <><div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>Processing...</>
              ) : "Submit Enquiry"}
            </button>
          </form>

          {/* Success Overlay Popup */}
          <AnimatePresence>
            {showSuccess && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black/95 flex flex-col items-center justify-center p-8 text-center rounded-3xl z-[120]">
                <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }} transition={{ type: "spring", damping: 12 }} className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(234,179,8,0.4)]">
                  <span className="text-black text-4xl font-bold">✓</span>
                </motion.div>
                <h3 className="text-yellow-500 text-3xl font-bold mb-3 tracking-tight italic">Success!</h3>
                <p className="text-zinc-400 mb-8 max-w-[280px] text-sm leading-relaxed">Your enquiry has been received. Our team will contact you shortly.</p>
                <button onClick={() => setShowSuccess(false)} className="bg-white text-black px-12 py-3 rounded-full font-bold hover:bg-yellow-500 transition-all active:scale-95 shadow-xl">Close</button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Why Choose Us */}
        <div className="mt-20 mb-24">
          <h2 className="text-2xl text-yellow-600 font-semibold mb-12 text-center">Why Choose Us</h2>
          <div className="flex flex-col md:flex-row gap-10 justify-center">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-yellow-600 text-black rounded-2xl p-10 text-center w-full md:w-78 transform hover:scale-105 transition-all duration-500 shadow-lg"
              >
                <h3 className="text-lg font-semibold mb-4">{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-20 mb-10 max-w-4xl mx-auto">
          <h2 className="text-2xl text-yellow-600 font-semibold mb-10 text-left">Frequently Asked Questions</h2>
          <div className="space-y-8">
            {faqs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900/60 backdrop-blur-md border border-yellow-500/20 p-6 rounded-2xl hover:border-yellow-500/50 transition-all duration-300 text-left"
              >
                <h3 className="font-semibold text-lg">{item.question}</h3>
                <p className="text-gray-300 mt-2">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Social Media */}
        <div className="flex justify-center gap-7 mt-30 mb-25">
          {[ 
            {icon: <FaInstagram />, link: "https://instagram.com/ourpage"}, 
            {icon: <FaFacebookF />, link: "https://facebook.com/ourpage"}, 
            {icon: <FaLinkedinIn />, link: "https://linkedin.com/in/ourpage"} 
          ].map((soc, i) => (
            <a key={i} href={soc.link} target="_blank" rel="noopener noreferrer" className="w-14 h-14 flex items-center justify-center rounded-full border border-yellow-600/40 bg-zinc-900/80 backdrop-blur-md text-yellow-50 text-xl hover:bg-yellow-600 hover:text-black transition-all duration-300 hover:scale-110 shadow-lg">
              {soc.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;