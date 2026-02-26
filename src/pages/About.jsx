import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaCheckCircle, FaStar, FaCalendar, FaUsers } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import logoEvent from "../assets/logoEvent.png";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const mainControls = useAnimation();
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "https://res.cloudinary.com/dsa0chszi/image/upload/v1772018523/BURJ-KHALIFE-Hero-image-1-min-1_huaju7.webp",
    "https://res.cloudinary.com/dsa0chszi/image/upload/v1772005621/Wedding_1_gyspbw.webp",
    "https://res.cloudinary.com/dsa0chszi/image/upload/v1772005628/yacht_1_xn3yqr.jpg",
    "https://res.cloudinary.com/dsa0chszi/image/upload/v1772005598/Theme_Party_1_war9tg.webp",
  ];

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const stats = [
    { number: "250+", label: "Successful Events", icon: FaCalendar, delay: 0.1 },
    { number: "100+", label: "Luxury Clients", icon: FaUsers, delay: 0.3 },
    { number: "10+", label: "Years Experience", icon: FaStar, delay: 0.5 },
  ];

  const scrollToSignatureExperiences = () => {
    navigate("/", { state: { scrollTo: "signature-experiences" } });
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1.2,
        staggerChildren: 0.15,
        delayChildren: 0.4,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.6,
        duration: 1.5,
      },
    },
  };

  return (
<div className="bg-gradient-to-br from-black via-gray-900 to-black text-white min-h-screen overflow-hidden">     {/* Enhanced Hero Section */}
      {/* Enhanced Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/dubai-event.jpg')] bg-cover bg-center bg-no-repeat opacity-20">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black/90"></div>
        </div>
        
{/* Background Video */}
<motion.video
  autoPlay
  loop
  muted
  playsInline
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 2, ease: "easeOut" }}
  className="absolute inset-0 w-full h-full object-cover brightness-75"
>
  <source 
    src="https://res.cloudinary.com/dsa0chszi/video/upload/v1772085729/Abouthero_tidrwd.mp4"
    type="video/mp4"
  />
</motion.video>

<div className="absolute inset-0 bg-black/40"></div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={mainControls}
          variants={containerVariants}
          className="relative flex flex-col items-center justify-center gap-6 max-w-4xl mx-auto z-10"
        >
          {/* Logo */}
          <motion.div variants={logoVariants} className="flex items-center gap-3 mb-4">
            <motion.img
              src={logoEvent}
              alt="Spam Events LLC"
              variants={letterVariants}
              className="w-16 h-16 object-contain"
            />

            <motion.div className="space-x-0.5">
              {["S","P","A","M"," ","E","V","E","N","T","S"," ","L","L","C"].map((letter, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  className="text-4xl md:text-4xl lg:text-4xl font-black tracking-tight bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Title */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 1.2, delay: 1.2 } }
            }}
          >
            <h1 className="text-2xl md:text-3xl font-black italic font-serif bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent mb-6">
              About Us
            </h1>

            <p className="text-lg md:text-xl text-gray-200 font-normal leading-relaxed mt-6 font-[Cormorant_Garamond]">
               At SPAMS EVENTS L.L.C, we believe every celebration tells a story — and we are here to craft it with elegance and precision. Headquartered in Dubai, we specialize in designing and executing luxury events that reflect sophistication, creativity, and flawless attention to detail.

From extravagant weddings and high-profile corporate galas to private yacht parties and exclusive VIP gatherings, our team transforms visions into extraordinary experiences. We collaborate with elite venues and trusted vendors to ensure every event is seamlessly curated from concept to completion.

With a passion for innovation and a commitment to excellence, we don’t just organize events — we create timeless memories that leave a lasting impression.
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 1.8 } }
            }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToSignatureExperiences}
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold py-4 px-12 rounded-2xl text-lg"
            >
              Explore Our Work
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-yellow-500 text-yellow-400 font-bold py-4 px-12 rounded-2xl text-lg"
            >
              <Link to="/contact">Contact Us</Link>
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* CAROUSEL SECTION */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">

          <motion.div className="relative h-full min-h-[500px] rounded-3xl overflow-hidden">
            {slides.map((slide, index) => (
              <motion.img
                key={index}
                src={slide}
                animate={{ opacity: index === currentSlide ? 1 : 0 }}
                transition={{ duration: 4 }}
                className="absolute inset-0 w-full h-full object-cover"
                alt="Event Portfolio"
              />
            ))}
          </motion.div>

          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-5xl font-black">
              Dubai's Leading Event Creators
            </h2>
            <p className="text-lg md:text-xl text-gray-400 leading-loose max-w-2xl">
 We specialize in curating bespoke events across Dubai, where every celebration is thoughtfully designed to reflect individuality, prestige, and refined taste. By seamlessly blending innovation with timeless elegance, we transform creative concepts into immersive experiences that captivate and inspire.

From the initial vision to the final execution, our team ensures that every detail — from venue styling and décor to lighting, entertainment, and guest experience — is meticulously planned and flawlessly delivered. Our commitment to precision and excellence allows us to craft unforgettable moments that are not only visually stunning but emotionally meaningful.

Each event we create is tailored to perfection, leaving a lasting impression that resonates long after the celebration ends.
</p>
            
          </div>

        </div>
      </section>

    </div>
  );
}

export default About;





