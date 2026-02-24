import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "200+", label: "Successful Events" },
    { number: "50+", label: "Corporate Clients" },
    { number: "100%", label: "Client Satisfaction" },
  ];

  const features = [
    {
      title: "Luxury Event Planning",
      desc: "Premium weddings, corporate galas, and private celebrations across Dubai.",
    },
    {
      title: "Creative Design Team",
      desc: "Innovative themes, décor styling, and stunning visual experiences.",
    },
    {
      title: "End-to-End Management",
      desc: "From concept to execution, we handle everything flawlessly.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black text-white min-h-screen">

      {/* Hero Section */}
      <section className="py-20 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-yellow-500 mb-6"
        >
          About Spams Events Dubai
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="max-w-3xl mx-auto text-gray-300 text-lg"
        >
          We are a Dubai-based luxury event management company delivering
          unforgettable experiences — from elegant weddings to corporate
          celebrations. Our passion is turning your vision into reality with
          perfection and style.
        </motion.p>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="bg-gray-800 p-6 rounded-xl shadow-lg"
            >
              <h2 className="text-3xl font-bold text-yellow-400">
                {item.number}
              </h2>
              <p className="text-gray-400 mt-2">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6">
        <h2 className="text-4xl font-bold text-center text-yellow-500 mb-12">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-8 rounded-2xl shadow-xl"
            >
              <h3 className="text-xl font-semibold text-yellow-400 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-300">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-16 text-center px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl font-bold text-yellow-500 mb-4"
        >
          Let’s Create Something Extraordinary
        </motion.h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Whether it’s a grand wedding or an exclusive corporate event,
          we bring creativity, luxury, and flawless execution to every occasion.
        </p>
      </section>
    </div>
  );
};

export default About;