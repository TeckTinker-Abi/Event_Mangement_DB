import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { FaCheckCircle, FaStar, FaCalendar, FaUsers } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom'; 

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const mainControls = useAnimation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const stats = [
    { number: "250+", label: "Successful Events", icon: FaCalendar, delay: 0.1 },
    { number: "100+", label: "Luxury Clients", icon: FaUsers, delay: 0.3 },
    { number: "10+", label: "Years Experience", icon: FaStar, delay: 0.5 }
  ];

  // ✅ NEW: Smooth scroll to Home's Signature Experiences
  const scrollToSignatureExperiences = () => {
    navigate('/', { state: { scrollTo: 'signature-experiences' } });
  };

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black text-white min-h-screen overflow-hidden">
      {/* Enhanced Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/dubai-event.jpg')] bg-cover bg-center bg-no-repeat opacity-20">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black/90"></div>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={mainControls}
          className="relative z-10 max-w-4xl mx-auto px-6"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center gap-3 mb-6 bg-yellow-500/20 px-6 py-3 rounded-full backdrop-blur-sm border border-yellow-500/30">
              <div className="w-2 h-2 bg-yellow-500 rounded-full animate-ping"></div>
              <span className="text-yellow-400 font-medium tracking-wide uppercase text-sm">Dubai's Premier Event Experts</span>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent mb-6 leading-tight">
              About Our Company
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300 leading-relaxed font-light">
              Delivering world-class luxury events in the heart of Dubai with unmatched sophistication and creativity.
            </p>
          </motion.div>

          {/* ✨ ENHANCED BUTTONS SECTION */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* ✅ EXPLORE OUR WORK - Scrolls to Home Signature Experiences */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToSignatureExperiences}
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold py-4 px-8 rounded-xl text-lg shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 flex items-center gap-2"
            >
              <span>Explore Our Work</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
            
            {/* ✅ CONTACT US - Navigate to Contact */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-yellow-500 text-yellow-400 font-bold py-4 px-8 rounded-xl text-lg backdrop-blur-sm hover:bg-yellow-500/10 transition-all duration-300"
            >
              <Link 
                to="/contact" 
                className="block w-full h-full flex items-center justify-center font-bold text-lg"
              >
                Contact Us
              </Link>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Floating particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-yellow-500/30 rounded-full animate-bounce" style={{animationDelay: '0s'}} />
        <div className="absolute top-40 right-20 w-3 h-3 bg-orange-500/30 rounded-full animate-bounce" style={{animationDelay: '1s'}} />
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-yellow-400/40 rounded-full animate-pulse" style={{animationDelay: '2s'}} />
      </section>

      {/* Enhanced Content Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500/10 via-transparent to-orange-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <img
              src="images/BURJ-KHALIFE-Hero-image-1-min-1.webp"
              alt="Dubai Luxury Event"
              className="w-full h-[500px] object-cover rounded-3xl shadow-2xl relative z-10 hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-2xl text-sm font-medium text-white border border-white/20">
              Live Event Footage
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-3 mb-8 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 px-6 py-3 rounded-2xl backdrop-blur-sm border border-yellow-500/30">
              <FaCheckCircle className="text-yellow-400 text-xl" />
              <span className="font-semibold text-yellow-400">Crafting Extraordinary Experiences</span>
            </div>

            <h2 className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent leading-tight">
              Dubai's Leading
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Event Creators</span>
            </h2>

            <div className="space-y-6">
              <p className="text-xl text-gray-300 leading-relaxed">
                We are a Dubai-based luxury event management company specializing in corporate events, weddings, gala dinners, exhibitions, and high-profile celebrations.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed">
                Our team combines creativity, innovation, and flawless execution to transform visions into unforgettable realities with sophistication and elegance.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <span className="px-6 py-3 bg-yellow-500/20 text-yellow-300 rounded-full text-sm font-medium border border-yellow-500/30 backdrop-blur-sm">Corporate Events</span>
              <span className="px-6 py-3 bg-emerald-500/20 text-emerald-300 rounded-full text-sm font-medium border border-emerald-500/30 backdrop-blur-sm">Weddings</span>
              <span className="px-6 py-3 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30 backdrop-blur-sm">Gala Dinners</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-black/80"></div>
        <div className="absolute inset-0 bg-[url('/images/dubai-skyline.jpg')] bg-cover bg-center opacity-10"></div>

        <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: stat.delay }}
                className="group"
              >
                <div className="relative mb-6">
                  <div className="absolute -inset-3 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative bg-gradient-to-b from-black/50 to-transparent p-8 rounded-3xl backdrop-blur-sm border border-white/10 hover:border-yellow-500/30 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-yellow-500/20">
                    <Icon className="mx-auto text-4xl text-yellow-400 mb-4 opacity-80 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent mb-4 leading-none">
                      {stat.number}
                    </h3>
                    <p className="text-xl text-gray-400 font-medium tracking-wide">{stat.label}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default About;


