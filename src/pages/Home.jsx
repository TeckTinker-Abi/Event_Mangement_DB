import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import homeBg from "../assets/homebackground.png";
import logo from "../assets/logoEvent.png";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};


const CountUp = ({ end, duration = 5000, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [end, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};


function Home() {
  const navigate = useNavigate();

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-black text-white overflow-x-hidden">

      {/* HERO EXPERIENCES */}
      <section
        className="relative min-h-[95vh] flex items-center justify-center text-center px-4 overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url(${homeBg})`,
        }}
      >

        {/* Overlay Gradient (controls brightness top → bottom) */}
        <div className="absolute inset-0 bg-gradient-to-b 
                  from-black/10 
                  via-black/15 
                  to-black/85">
        </div>

        {/* Optional Soft Glow */}
        <div className="absolute inset-0 bg-black/20 backdrop-brightness-75"></div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="max-w-5xl relative z-10"
        >

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-yellow-500 leading-tight">
            Bespoke Luxury Events
          </h1>

          {/* Sub Heading */}
          <h2 className="text-2xl md:text-3xl font-bold text-white mt-4 tracking-wide">
            In the Heart of Dubai
          </h2>

          {/* Divider */}
          <div className="w-24 h-[2px] bg-yellow-500 mx-auto my-8"></div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            We curate extraordinary celebrations defined by iconic venues, refined
            aesthetics, and flawless execution — from exclusive private yacht soirées
            to opulent weddings and high-profile corporate affairs, each crafted to
            exceed the highest expectations.
          </p>

          {/* Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <button
              onClick={() => navigate("/services")}
              className="px-6 py-2.5 rounded-full font-semibold text-base 
                   border-2 border-yellow-500 text-gray-300 
                   bg-transparent 
                   hover:bg-yellow-500 hover:text-black 
                   transition-all duration-300"
            >
              Start Planning Today
            </button>
          </motion.div>

        </motion.div>
      </section>

      {/* SIGNATURE EXPERIENCES */}
      <section className="py-24 px-6 max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-yellow-500 mb-6"
        >
          Signature Dubai Experiences
        </motion.h2>

        <p className="text-gray-400 max-w-3xl mx-auto mb-14">
          From ultra-luxury yacht celebrations to royal weddings and high-impact
          corporate events, we deliver world-class experiences across Dubai.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Yacht & Cruise Experiences",
              desc: "Yacht parties, private cruise dinners, luxury waterfront celebrations.",
            },
            {
              title: "Private & Social Parties",
              desc: "Beach parties, rooftop nights, villa events, birthdays & VIP celebrations.",
            },
            {
              title: "Weddings & Royal Ceremonies",
              desc: "Nikah, royal wedding setups, engagements, destination weddings.",
            },
            {
              title: "Corporate & Business Events",
              desc: "Product launches, conferences, gala dinners, award nights & expos.",
            },
            {
              title: "Cultural & Religious Events",
              desc: "Ramadan Iftar, Eid celebrations, UAE National Day & cultural festivals.",
            },
            {
              title: "Education & Youth Celebrations",
              desc: "Graduation parties, school annual days, proms & college farewells.",
            },
            {
              title: "Entertainment & Luxury Shows",
              desc: "Concerts, fashion shows, DJ nights, desert safari & celebrity events.",
            },
            {
              title: "Memorial & Private Gatherings",
              desc: "Memorial services, prayer meetings & private condolence gatherings.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              whileHover={{ y: -12, scale: 1.03 }}
              onClick={() => navigate("/services")}
              className="cursor-pointer p-8 bg-gray-900/60 backdrop-blur-md border border-gray-800 rounded-2xl hover:border-yellow-500 transition shadow-lg hover:shadow-yellow-500/20"
            >
              <h3 className="text-lg font-semibold text-yellow-500 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CULTURE SECTION */}
      <section className="py-24 bg-gray-950 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-yellow-500 mb-6">
              Inspired by Dubai’s Culture & Elegance
            </h2>
            <p className="text-gray-400 mb-6">
              Our events reflect rich traditions and modern luxury — from Ramadan
              gatherings to skyline celebrations.
            </p>
            <p className="text-gray-400">
              Experience desert elegance, Arabian hospitality, and world-class
              venues tailored for unforgettable moments.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-900/70 backdrop-blur-md border border-gray-700 rounded-2xl p-12 text-center hover: transition shadow-lg"
          >
            <div className="space-y-8">
              <div>
                <p className="text-yellow-500 text-5xl font-bold">
                  <CountUp end={10} suffix="+" />
                </p>
                <p className="text-gray-400">Years Experience</p>
              </div>

              <div>
                <p className="text-yellow-500 text-5xl font-bold">
                  <CountUp end={500} suffix="+" />
                </p>
                <p className="text-gray-400">Events Delivered</p>
              </div>

              <div>
                <p className="text-yellow-500 text-5xl font-bold">
                  <CountUp end={100} suffix="%" />
                </p>
                <p className="text-gray-400">Client Satisfaction</p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-10 bg-yellow-500 text-black text-center px-6">
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-4"
        >
          Ready to Plan Your Dream Event?
        </motion.h2>

        <p className="max-w-2xl mx-auto mb-8 text-black/80 text-lg">
          Let our expert planners craft a world-class experience tailored to your vision.
        </p>

        <motion.button
          onClick={() => navigate("/contact")}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-900 transition shadow-xl"
        >
          Get Started
        </motion.button>
      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-gray-800 text-gray-400 pt-16 pb-8 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">

          {/* COLUMN 1 – BRAND */}
          <div>
            <img
              src={logo}
              alt="Luxury Events Logo"
              className="h-14 mb-6 opacity-90 hover:opacity-100 transition duration-300"
            />
            <p className="mb-4 text-sm leading-relaxed">
              Crafting bespoke luxury events across Dubai with elegance,
              precision, and unforgettable experiences.
            </p>
            <p className="text-yellow-500 font-semibold">
              +971 50 123 4567
            </p>
          </div>

        {/* COLUMN 2 – EVENTS */}
<div>
  <h3 className="text-white font-semibold mb-6">
    Signature Events
  </h3>
  <ul className="space-y-3 text-sm">
    <li className="transition hover:text-yellow-500 cursor-pointer">
      Yacht Party
    </li>
    <li className="transition hover:text-yellow-500 cursor-pointer">
      Private Yacht Dinner
    </li>
    <li className="transition hover:text-yellow-500 cursor-pointer">
      Beach Party
    </li>
    <li className="transition hover:text-yellow-500 cursor-pointer">
      Birthday Party
    </li>
  </ul>
</div>

{/* COLUMN 3 – MORE EVENTS */}
<div>
  <h3 className="text-white font-semibold mb-6">
    Luxury Experiences
  </h3>
  <ul className="space-y-3 text-sm">
    <li className="transition hover:text-yellow-500 cursor-pointer">
      Ramadan Iftar Event
    </li>
    <li className="transition hover:text-yellow-500 cursor-pointer">
      Eid Celebration
    </li>
    <li className="transition hover:text-yellow-500 cursor-pointer">
      Graduation Party
    </li>
    <li className="transition hover:text-yellow-500 cursor-pointer">
      Fashion Show
    </li>
  </ul>
</div>

{/* COLUMN 4 – SOCIAL */}
<div>
  <h3 className="text-white font-semibold mb-6">
    Connect With Us
  </h3>
  <ul className="space-y-4 text-sm">
    <li className="transition hover:text-yellow-500 cursor-pointer">
      Instagram
    </li>
    <li className="transition hover:text-yellow-500 cursor-pointer">
      Facebook
    </li>
    <li className="transition hover:text-yellow-500 cursor-pointer">
      YouTube
    </li>
    <li className="transition hover:text-yellow-500 cursor-pointer">
      info@luxuryevents.com
    </li>
  </ul>
</div>
        </div>


      </footer>

    </main>
  );
}

export default Home;