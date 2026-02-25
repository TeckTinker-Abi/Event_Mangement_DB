import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
// import homeBg from "../assets/homebackground.png";
import homeVideo from "../assets/homevideo.mp4";

function Home() {
  const navigate = useNavigate();
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  /* ================= SCROLL TO TOP ================= */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /* ================= FADE ANIMATION ================= */
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  /* ================= COUNT UP COMPONENT ================= */
  const CountUp = ({ end, duration = 2000, suffix = "" }) => {
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

  return (
    // <main className="bg-black text-white overflow-x-hidden">
    <main
      className="text-white overflow-x-hidden"
    >

      {/* ================= SCROLL PROGRESS BAR ================= */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-yellow-500 origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* ================= HERO SECTION ================= */}
      {/* <section
        ref={heroRef}
        className="relative min-h-[95vh] flex items-center justify-center text-center px-4 overflow-hidden bg-cover bg-center"
        // style={{ backgroundImage: `url(${homeBg})` }}
        
      > */}
      <section
        ref={heroRef}
        className="relative min-h-[95vh] flex items-center justify-center text-center px-4 overflow-hidden"
      >

        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={homeVideo} type="video/mp4" />
        </video>

        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/90" />
        <div className="absolute inset-0 bg-black/30 backdrop-brightness-75" /> */}

        {/* Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="max-w-5xl relative z-10"
        ></motion.div>


        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/90" />
        <div className="absolute inset-0 bg-black/30 backdrop-brightness-75" />

        <motion.div
          initial="hidden"
          animate="visible"
          className="max-w-5xl relative z-10"
        >
          <motion.h1
            variants={fadeUp}
            custom={1}
            // className="text-5xl md:text-7xl font-bold text-yellow-500 leading-tight"
            className="text-3xl sm:text-5xl md:text-7xl font-bold text-yellow-500 leading-tight"
          >
            Bespoke Luxury Events
          </motion.h1>

          <motion.h2
            variants={fadeUp}
            custom={2}
            className="text-2xl md:text-3xl font-bold mt-4 tracking-wide"
          >
            In the Heart of Dubai
          </motion.h2>

          <motion.div
            variants={fadeUp}
            custom={3}
            className="w-24 h-[2px] bg-yellow-500 mx-auto my-8"
          />

          <motion.p
            variants={fadeUp}
            custom={4}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            We curate extraordinary celebrations defined by iconic venues,
            refined aesthetics, and flawless execution — from exclusive
            private yacht soirées to opulent weddings and high-profile
            corporate affairs.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={5}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={() => navigate("/services")}
              className="px-6 py-2.5 rounded-full font-semibold border-2 border-yellow-500 text-gray-300 bg-transparent hover:bg-yellow-500 hover:text-black transition-all duration-300"
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
          {/* <div className="className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8> */}
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

      <motion.section
        className="py-24 px-6 overflow-hidden"
        style={{ backgroundColor: "#00001a" }} // main night-blue
        initial={{ opacity: 0, y: 60 }}       // start hidden + below
        whileInView={{ opacity: 1, y: 0 }}    // slide up into view
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
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
            className="bg-gray-900/70 backdrop-blur-md border border-gray-700 rounded-2xl p-12 text-center transition shadow-lg"
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
      </motion.section>

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



    </main>
  );
}

export default Home;