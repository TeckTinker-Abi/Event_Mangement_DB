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
    <div className="p-10 text-center">
      <h1 className="text-4xl font-bold text-yellow-500 mb-6">
        About Us
      </h1>
      <p className="text-gray-300 max-w-2xl mx-auto">
        We are a Dubai-based luxury event management company delivering
        unforgettable experiences from birth to lifetime celebrations.
      </p>
    </div>
  );
};

export default About;