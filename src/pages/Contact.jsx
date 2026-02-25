import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

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
    <div className="relative min-h-screen text-white overflow-hidden">

      {/* HERO BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src="/images/contactbg.webp"
          alt="Luxury Event Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 px-6 md:px-20 py-16">

        {/* Hero */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact <span className="text-yellow-600">Us</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Let us craft unforgettable experiences in Dubai.</p>
            <p className="text-gray-300 max-w-2xl mx-auto">
            Crafting iconic celebrations in the heart of Dubai, where every detail speaks luxury.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="max-w-6xl mx-auto mb-24 grid md:grid-cols-2 gap-10">
          {[
            { title: "Location", value: "Dubai, United Arab Emirates" },
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
              className="relative overflow-hidden bg-gradient-to-br from-zinc-900/90 via-zinc-800/80 to-black/80 backdrop-blur-xl p-10 rounded-3xl border border-yellow-600/40 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 shadow-[0_0_25px_rgba(234,179,8,0.25)] hover:shadow-[0_0_60px_rgba(234,179,8,0.55)]"
            >
              <h3 className="text-xl font-semibold text-yellow-600 mb-4">
                {item.title}
              </h3>

              {item.link ? (
                <a href={item.link} className="text-gray-300 hover:text-yellow-500 transition">
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
          className="relative w-full max-w-4xl mx-auto mb-16 md:mb-28
          bg-gradient-to-br from-zinc-900/95 via-black/90 to-zinc-900/95
          backdrop-blur-2xl px-5 py-8 sm:px-6 md:p-12
          rounded-2xl md:rounded-3xl border border-yellow-600/30 shadow-2xl"
        >
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
        className="bg-yellow-600 text-black rounded-2xl p-10 text-center flex-1 transform hover:scale-105 transition-all duration-500 shadow-lg"
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

      </div>
    </div>
  );
};

export default Contact;