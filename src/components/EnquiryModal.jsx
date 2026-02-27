import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { COUNTRY_DATA } from "./countries";

const EnquiryModal = ({ isOpen, onClose }) => {
  // Initial state helper for resetting
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

  const dropdownRef = useRef(null);
  const searchInputRef = useRef(null);

  // ================= RESET LOGIC =================
  useEffect(() => {
    if (!isOpen) {
      setFormData(initialState);
      setErrors({});
      setShowSuccess(false);
      setShowAlert(false);
      setSearchTerm("");
      setIsSubmitting(false);
      setSelectedCountry(COUNTRY_DATA.find(c => c.iso === "AE") || COUNTRY_DATA[0]);
    }
  }, [isOpen]);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Auto-focus search input when dropdown opens
  useEffect(() => {
    if (isDropdownOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isDropdownOpen]);

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
    
    // Phone must be exactly equal to the limit
    if (formData.phone.length !== selectedCountry.limit) {
      newErrors.phone = `Must be exactly ${selectedCountry.limit} digits`;
    }
    
    if (!formData.email.includes("@")) newErrors.email = "Valid email required";
    if (!formData.eventType) newErrors.eventType = "Please select an event";
    
    // NOTE: Message/Description validation removed to make it optional

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

//   const handleSubmit = async (e) => {
//   e.preventDefault();

//   if (!validate()) {
//     setShowAlert(true);
//     setTimeout(() => setShowAlert(false), 3000);
//     return;
//   }

//   setIsSubmitting(true);

//   const form = new FormData();
//   form.append("fullName", formData.fullName);
//   form.append("email", formData.email);
//   form.append("country", selectedCountry.name);
//   form.append("phone", `${selectedCountry.code}${formData.phone}`);
//   form.append("eventType", formData.eventType);
//   form.append("message", formData.message);

//   try {
//     await fetch(
//       "https://script.google.com/macros/s/AKfycbzsg37K9CRRZPYpxroRBOnV6A/exec",
//       {
//         method: "POST",
//         body: form
//       }
//     );

//     setShowSuccess(true);

//   } catch (error) {
//     console.error("Submission Error:", error);
//     setShowAlert(true);
//   }

//   setIsSubmitting(false);
// };
const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validate()) {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
    return;
  }

  setIsSubmitting(true);

  const enquiryData = {
    name: formData.fullName,
    email: formData.email,
    country: selectedCountry.name,
    phone: `${selectedCountry.code}${formData.phone}`,
    eventType: formData.eventType,
    message: formData.message
  };

  try {
    const response = await fetch("https://eventsmanagement-42zk.onrender.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(enquiryData)
    });

    const data = await response.json();

    if (data.success) {
      setShowSuccess(true);
    } else {
      setShowAlert(true);
    }

  } catch (error) {
    console.error("Submission Error:", error);
    setShowAlert(true);
  }

  setIsSubmitting(false);
};

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      
      <motion.div
        className="absolute inset-0 bg-black/90 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={onClose}
      />

      <AnimatePresence>
        {showAlert && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 20, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            className="absolute top-0 z-[130] bg-red-600 text-white px-8 py-3 rounded-full shadow-2xl font-bold flex items-center gap-2"
          >
            <span>⚠️</span> Please fill the form correctly
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="relative w-full max-w-xl bg-zinc-950 p-8 rounded-3xl border border-yellow-600/30 shadow-2xl overflow-hidden"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
      >
        <button 
          onClick={onClose} 
          className="absolute top-5 right-5 text-zinc-500 hover:text-white transition-colors p-2"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-8 text-center text-white">
          Event <span className="text-yellow-600">Enquiry</span>
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Full Name */}
          <div className="relative">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-zinc-900 text-white border border-zinc-800 focus:border-yellow-500 outline-none transition-all placeholder:text-zinc-600"
            />
            {errors.fullName && <p className="text-red-500 text-[10px] mt-1 ml-2 font-medium italic">{errors.fullName}</p>}
          </div>

          {/* Custom Phone Input */}
          <div className="flex gap-2 pt-1">
            <div className="relative w-30 shrink-0" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => { setIsDropdownOpen(!isDropdownOpen); setSearchTerm(""); }}
                className="w-full h-full p-4 rounded-xl bg-zinc-900 text-white border border-zinc-800 flex items-center justify-between hover:border-yellow-500 transition-all active:scale-95"
              >
                <span className="text-xs font-bold whitespace-nowrap">
                  {selectedCountry.code} | {selectedCountry.iso}
                </span>
                <span className="text-yellow-600 text-[10px]">▼</span>
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute z-50 mt-2 w-72 bg-zinc-950 border border-zinc-700 rounded-xl shadow-2xl overflow-hidden left-0"
                  >
                    <div className="p-3 border-b border-zinc-800 sticky top-0 bg-zinc-950 z-10">
                      <input
                        ref={searchInputRef}
                        type="text"
                        placeholder="Search country..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full p-2 text-sm bg-zinc-900 text-white rounded-lg outline-none border border-zinc-800 focus:border-yellow-600"
                      />
                    </div>
                    <div className="max-h-56 overflow-y-auto scrollbar-thin scrollbar-thumb-yellow-600">
                      {filteredCountries.map((c) => (
                        <div
                          key={c.iso}
                          onClick={() => { 
                            setSelectedCountry(c); 
                            setIsDropdownOpen(false); 
                            setFormData(prev => ({ ...prev, phone: "" })); 
                          }}
                          className="p-3 text-white hover:bg-yellow-600 hover:text-black cursor-pointer flex justify-between items-center text-sm transition-all group"
                        >
                          <span className="truncate flex-1 pr-2">{c.name}</span>
                          <span className="font-bold shrink-0 text-[10px] bg-zinc-800 px-2 py-1 rounded text-zinc-400 group-hover:text-black">
                            {c.code} | {c.iso}
                          </span>
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
                placeholder={`Phone (${selectedCountry.limit} digits)`}
                value={formData.phone}
                onChange={handlePhoneChange}
                className="w-full p-4 rounded-xl bg-zinc-900 text-white border border-zinc-800 focus:border-yellow-500 outline-none transition-all placeholder:text-zinc-600"
              />
              {errors.phone && <p className="text-red-500 text-[10px] mt-1 ml-2 font-medium italic">{errors.phone}</p>}
            </div>
          </div>

          {/* Email */}
          <div className="relative pt-1">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-zinc-900 text-white border border-zinc-800 focus:border-yellow-500 outline-none transition-all placeholder:text-zinc-600"
            />
            {errors.email && <p className="text-red-500 text-[10px] mt-1 ml-2 font-medium italic">{errors.email}</p>}
          </div>

          {/* Event Select */}
          <div className="relative pt-1">
            <select
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-zinc-900 text-white border border-zinc-800 focus:border-yellow-500 outline-none appearance-none cursor-pointer transition-all"
            >
              <option value="">Select Event Type</option>
              <option value="Social">Social & Party</option>
              <option value="Wedding">Wedding & Relationship</option>
              <option value="Corporate">Corporate & Business</option>
              <option value="Custom">Custom Event</option>
            </select>
            <span className="absolute right-4 top-[25px] pointer-events-none text-yellow-600 text-xs">▼</span>
          </div>

          {/* Message Area (Optional) */}
          <div className="relative pt-1">
            <textarea
              name="message"
              placeholder="Enter your event description (Optional)"
              value={formData.message}
              onChange={handleChange}
              rows="3"
              className="w-full p-4 rounded-xl bg-zinc-900 text-white border border-zinc-800 focus:border-yellow-500 outline-none resize-none transition-all placeholder:text-zinc-600"
            />
          </div>

          {/* Main Submit Button */}
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-yellow-500 hover:bg-yellow-400 disabled:bg-yellow-800 disabled:cursor-not-allowed text-black font-bold py-4 rounded-xl transition-all shadow-lg shadow-yellow-500/10 flex items-center justify-center gap-3 active:scale-[0.98]"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                Processing...
              </>
            ) : "Submit Enquiry"}
          </button>
        </form>

        <AnimatePresence>
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/95 flex flex-col items-center justify-center p-8 text-center rounded-3xl z-[120]"
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", damping: 12 }}
                className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(234,179,8,0.4)]"
              >
                <span className="text-black text-4xl font-bold">✓</span>
              </motion.div>
              <h3 className="text-yellow-500 text-3xl font-bold mb-3 italic tracking-tight">Success!</h3>
              <p className="text-zinc-400 mb-8 max-w-[280px] text-sm leading-relaxed">
                Your enquiry has been submitted. Our team will contact you shortly regarding your <span className="text-white font-medium">{formData.eventType}</span>.
              </p>
              <button
                onClick={onClose}
                className="bg-white text-black px-12 py-3 rounded-full font-bold hover:bg-yellow-500 transition-all active:scale-95 shadow-xl"
              >
                Done
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default EnquiryModal;