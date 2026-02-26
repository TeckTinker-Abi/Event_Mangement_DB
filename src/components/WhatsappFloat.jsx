import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaTimes } from "react-icons/fa";

const WhatsAppFloat = () => {
  const [open, setOpen] = useState(false);

  const phoneNumber = "971501234567"; // Your Dubai WhatsApp number

  const quickMessages = [
    "I want to plan a luxury wedding in Dubai.",
    "Tell me about your corporate event packages.",
    "Do you handle venue booking and permits?",
    "I need a custom event consultation.",
    "What are your pricing details?"
  ];

  const sendMessage = (msg) => {
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${phoneNumber}?text=${encoded}`, "_blank");
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setOpen(!open)}
          className="w-16 h-16 rounded-full bg-green-500 
                     flex items-center justify-center 
                     text-white text-3xl shadow-lg 
                     hover:scale-110 transition"
        >
          {open ? <FaTimes /> : <FaWhatsapp />}
        </button>
      </div>

      {/* Chat Box */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-24 right-6 w-80 
                       bg-[#0b1120] text-white 
                       rounded-2xl shadow-2xl 
                       border border-yellow-500/40 
                       overflow-hidden z-50"
          >
            {/* Header */}
            <div className="bg-green-600 p-4 font-semibold">
              Dubai Event Support
              <p className="text-sm font-normal">
                We're here to help you plan your event!
              </p>
            </div>

            {/* Body */}
            <div className="p-4 space-y-3">
              <p className="text-sm text-gray-300">
                Hi there! 👋 How can we assist you today?
              </p>

              {quickMessages.map((msg, index) => (
                <button
                  key={index}
                  onClick={() => sendMessage(msg)}
                  className="w-full text-left p-3 
                             bg-zinc-800 rounded-xl 
                             hover:bg-yellow-500 
                             hover:text-black 
                             transition text-sm"
                >
                  {msg}
                </button>
              ))}

              <button
                onClick={() =>
                  sendMessage("Hello, I would like to discuss my event requirements.")
                }
                className="w-full mt-2 bg-green-500 
                           text-white py-2 rounded-xl 
                           hover:bg-green-400 transition"
              >
                Start WhatsApp Chat
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WhatsAppFloat;