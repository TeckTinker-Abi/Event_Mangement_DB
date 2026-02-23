import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
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

  return (
    <div className="relative min-h-screen text-white overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/contactbg.webp')",
        }}
      ></div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>

      {/* CONTENT */}
      <div className="relative z-10 px-6 md:px-20 py-16">

        {/* Hero */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact <span className="text-yellow-600">Us</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Let us craft unforgettable experiences in Dubai.
            Share your vision and our team will make it extraordinary.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="max-w-6xl mx-auto mb-24 grid md:grid-cols-2 gap-10">
          {[
            { title: "Location", value: "Dubai, United Arab Emirates" },
            {
              title: "Phone",
              value: "+971 50 123 4567",
              link: "tel:+971501234567",
            },
            {
              title: "Email",
              value: "info@dubaievents.com",
              link: "mailto:info@dubaievents.com",
            },
            {
              title: "Business Hours",
              value: "Monday – Saturday : 9:00 AM – 8:00 PM",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-zinc-900/80 to-zinc-800/70 backdrop-blur-md p-10 rounded-2xl border border-zinc-700 hover:border-yellow-600 hover:shadow-[0_0_40px_rgba(202,138,4,0.25)] transform hover:-translate-y-3 hover:scale-105 transition-all duration-500"
            >
              <h3 className="text-xl font-semibold text-yellow-600 mb-4">
                {item.title}
              </h3>

              {item.link ? (
                <a
                  href={item.link}
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

        {/* Zoho Form */}
<motion.div
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="max-w-5xl mx-auto mb-28 bg-zinc-900/80 backdrop-blur-md p-10 rounded-2xl border border-zinc-700 shadow-xl"
>
  <h2 className="text-2xl font-semibold mb-8 text-center">
    Event <span className="text-yellow-600">Enquiry Form</span>
  </h2>

  <iframe
    src="https://forms.zohopublic.in/thivakarkumarwyn1/form/SpamsEventsDubai/formperma/F4VejrsaZP8ThTIgUkP93iw0nOn_qoCqH2j1VOIN7UA"
    width="100%"
    height="800"
    frameBorder="0"
    title="Spams Events Dubai"
    className="rounded-lg"
  />
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