import { motion } from "framer-motion";

function About() {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-center px-6">
        <div className="absolute inset-0 bg-[url('/images/dubai-event.jpg')] bg-cover bg-center opacity-40"></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <h1 className="text-5xl font-bold text-yellow-500 mb-4">
            About Our Company
          </h1>
          <p className="text-lg max-w-2xl mx-auto text-gray-300">
            Delivering world-class luxury events in the heart of Dubai.
          </p>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/images/event2.jpg"
            alt="Dubai Event"
            className="rounded-2xl shadow-2xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-yellow-500 mb-4">
            Crafting Extraordinary Experiences
          </h2>

          <p className="text-gray-300 mb-4 leading-relaxed">
            We are a Dubai-based luxury event management company specializing
            in corporate events, weddings, gala dinners, exhibitions, and
            high-profile celebrations. Our team combines creativity,
            innovation, and flawless execution to transform visions into
            unforgettable realities.
          </p>

          <p className="text-gray-300 leading-relaxed">
            From venue selection to production, decor, entertainment, and
            guest experience management, we ensure every detail reflects
            sophistication and elegance.
          </p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="bg-zinc-900 py-16 text-center">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">

          <div>
            <h3 className="text-4xl font-bold text-yellow-500">250+</h3>
            <p className="text-gray-400 mt-2">Successful Events</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-yellow-500">100+</h3>
            <p className="text-gray-400 mt-2">Luxury Clients</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-yellow-500">10+</h3>
            <p className="text-gray-400 mt-2">Years Experience</p>
          </div>

        </div>
      </section>

    </div>
  );
}

export default About;