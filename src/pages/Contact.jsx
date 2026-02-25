import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
useEffect(() => {
  window.scrollTo(0, 0);
}, []);
 
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    eventType: "",
    message: ""
  });

  const [errors, setErrors] = useState({});

  
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
      alert("Enquiry Submitted Successfully!");
      console.log(formData);
    }
  };

  const whyChooseUs = [
    {
      title: "10+ Years Experience",
      desc: "Delivering premium event solutions across UAE.",
    },
    {
      title: "200+ Successful Events",
      desc: "From luxury weddings to corporate galas.",
    },
    {
      title: "Dedicated Event Team",
      desc: "End-to-end management with precision and care.",
    },
  ];

  const faqs = [
    {
      question: "How early should I book?",
      answer: "We recommend booking at least 4–6 weeks in advance.",
    },
    {
      question: "Do you offer custom packages?",
      answer: "Yes, all our services can be tailored to your needs.",
    },
    {
      question: "Do you manage venue permits?",
      answer: "Yes, we handle all required permissions and coordination.",
    },
  ];
  const navigate = useNavigate();
  return (
  <div className="bg-[#030712] text-white min-h-screen w-full">

    <div className="relative z-10 px-6 md:px-20 py-8 max-w-7xl mx-auto"> 

      {/* CONTENT */}
      <div className="relative z-10 px-6 md:px-20 py-16">

        {/* Hero */}
       <div className="text-center mb-16 -mt-10">
          
          <h1 className="text-5xl md:text-5xl font-bold mb-4">
            Contact <span className="text-yellow-600">Us</span>
          </h1>
          <p className="text-gray-300 max-w-4xl mx-auto">
            We don’t follow trends — we define them.</p>
            <p className="text-gray-300 max-w-4xl mx-auto">
            Crafting immersive, high-impact experiences that command attention and leave lasting impressions.
          </p>
        </div>
       <motion.div
  initial={{ width: 0 }}
  animate={{ width: "140px" }}
  transition={{ duration: 0.8 }}
  className="relative h-[2px] mx-auto mb-6 rounded-full overflow-hidden"
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
           {
  title: "Location",
  value: "Dubai, United Arab Emirates",
  link: "https://www.google.com/maps?q=Dubai,+United+Arab+Emirates"
},
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
           
           className="relative overflow-hidden
bg-gray-900/60 backdrop-blur-md
p-10 rounded-3xl
border border-yellow-500/40
transition-all duration-500
transform hover:-translate-y-3 hover:scale-105
shadow-[0_0_25px_rgba(255,215,0,0.15)]
hover:shadow-[0_0_60px_rgba(255,215,0,0.5)]">
              <h3 className="text-xl font-semibold text-yellow-600 mb-4">
                {item.title}
              </h3>

              {item.link ? (
                <a
    href={item.link}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-300 hover:text-yellow-500 transition"
  >
    {item.value}
  </a>
              ) : (
                <p className="text-gray-300">{item.value}</p>
              )}
            </motion.div>
          ))}
        </div>

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full max-w-5xl mx-auto mb-16 md:mb-28
bg-gray-900/60 backdrop-blur-md
px-6 py-10 md:p-12
rounded-2xl
border border-gray-800
transition-all duration-300
shadow-lg">
          <button
           type="button"
           onClick={() => navigate(-1)}
  className="absolute top-4 right-4 text-gray-400 hover:text-yellow-500 text-2xl transition"
>
  ✕
</button>

          <h2 className="text-xl md:text-2xl font-semibold mb-6 md:mb-8 text-center">
            Event <span className="text-yellow-600">Enquiry Form</span>
          </h2>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">

            <div>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full text-sm md:text-base p-4 rounded-xl bg-zinc-800/80 border border-zinc-600 focus:border-yellow-500"
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
              )}
            </div>
            <div>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="w-full text-sm md:text-base p-4 rounded-xl bg-zinc-800/80 border border-zinc-600 focus:border-yellow-500"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            <div className="md:col-span-2">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="w-full text-sm md:text-base p-4 rounded-xl bg-zinc-800/80 border border-zinc-600 focus:border-yellow-500"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div className="md:col-span-2">
              <select
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                required
                className="w-full text-sm md:text-base p-4 rounded-xl bg-zinc-800/80 border border-zinc-600"
              >
                <option value="">Select Event Type</option>
                <option value="Social & Party Events">Social & Party Events</option>
                <option value="Wedding & Relationship Events">Wedding & Relationship Events</option>
                <option value="Corporate & Business Events">Corporate & Business Events</option>
                <option value="Education & Youth Events"> Education & Youth Events</option>
                <option value="Cultural & Religious Events (Important in Dubai)">Cultural & Religious Events (Important in Dubai)</option>
                <option value="Entertainment & Luxury Events">Entertainment & Luxury Events</option>
                <option value="Memorial & End-of-Life Events">Memorial & End-of-Life Events</option>
                <option value="Custom Events">Custom Your Events</option>
              </select>
              {errors.eventType && (
                <p className="text-red-500 text-sm mt-1">{errors.eventType}</p>
              )}
            </div>
            <div className="md:col-span-2">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Enter your message"
                required
                className="w-full text-sm md:text-base p-4 rounded-xl bg-zinc-800/80 border border-zinc-600"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="md:col-span-2 w-full bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 text-black font-semibold py-4 rounded-xl hover:scale-105 transition duration-300"
            >
              Submit Enquiry
            </button>

          </form>
        </motion.div>
        {/* Why Choose Us */}
<div className="mt-20 mb-24">
  <h2 className="text-2xl text-yellow-600 font-semibold mb-12 text-center">
    Why Choose Us
  </h2>

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
        <h3 className="text-lg font-semibold mb-4">
          {item.title}
        </h3>
        <p>{item.desc}</p>
      </motion.div>
    ))}
  </div>
</div>
{/* FAQ */}
<div className="mt-20 mb-10 max-w-4xl mx-auto">
  <h2 className="text-2xl text-yellow-600 font-semibold mb-10 text-center">
    Frequently Asked Questions
  </h2>

  <div className="space-y-8">
    {faqs.map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
      >
        <h3 className="font-semibold text-lg">
          {item.question}
        </h3>
        <p className="text-gray-300 mt-2">
          {item.answer}
        </p>
      </motion.div>
    ))}
  </div>
</div>
{/* Social Media */}
<div className="flex justify-center gap-7 mt-30 mb-25">
  
  <a
    href="https://instagram.com/ourpage"
    target="_blank"
    rel="noopener noreferrer"
    className="w-14 h-14 flex items-center justify-center 
               rounded-full border border-yellow-600/40
               bg-zinc-900/80 backdrop-blur-md
               text-yellow-500 text-xl
               hover:bg-yellow-600 hover:text-black
               transition-all duration-300 hover:scale-110 shadow-lg"
  >
    <FaInstagram />
  </a>

  <a
    href="https://facebook.com/ourpage"
    target="_blank"
    rel="noopener noreferrer"
    className="w-14 h-14 flex items-center justify-center 
               rounded-full border border-yellow-600/40
               bg-zinc-900/80 backdrop-blur-md
               text-yellow-500 text-xl
               hover:bg-yellow-600 hover:text-black
               transition-all duration-300 hover:scale-110 shadow-lg"
  >
    <FaFacebookF />
  </a>

  <a
    href="https://linkedin.com/in/ourpage"
    target="_blank"
    rel="noopener noreferrer"
    className="w-14 h-14 flex items-center justify-center 
               rounded-full border border-yellow-600/40
               bg-zinc-900/80 backdrop-blur-md
               text-yellow-500 text-xl
               hover:bg-yellow-600 hover:text-black
               transition-all duration-300 hover:scale-110 shadow-lg"
  >
    <FaLinkedinIn />
  </a>

</div>

      </div>
      </div>
      {/* Floating Call Button */}
<a
  href="tel:+971501234567"
  className="fixed bottom-6 right-6 z-50 
             w-16 h-16 flex items-center justify-center 
             rounded-full
             bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600
             text-black text-xl
             shadow-[0_0_25px_rgba(234,179,8,0.6)]
             hover:scale-110 transition-all duration-300"
>
  <FaPhoneAlt />
</a>
    </div>
  );
};

export default Contact;