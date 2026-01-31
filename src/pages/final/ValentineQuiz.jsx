import { motion } from "framer-motion";
import { useState } from "react";

export default function ValentineQuestion() {
  const [accepted, setAccepted] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-100 to-red-200 flex items-center justify-center px-4 overflow-hidden relative">

      {/* soft floating hearts */}
      <motion.div className="absolute inset-0 pointer-events-none">
        {[...Array(18)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute text-pink-300 text-xl opacity-60"
            style={{ left: `${Math.random() * 100}%`, bottom: "-10%" }}
            animate={{ y: "-120vh", opacity: [0, 0.8, 0] }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 6,
            }}
          >
            💗
          </motion.span>
        ))}
      </motion.div>

      {/* heartbeat glow */}
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="absolute w-[420px] h-[420px] bg-pink-300/30 rounded-full blur-3xl"
      />

      {/* main card */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-10 max-w-md w-full text-center relative z-10"
      >
        {!accepted ? (
          <>
            <motion.h1
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              className="text-4xl font-bold text-pink-700 mb-4"
            >
              Will You Be My Valentine? 💍
            </motion.h1>

            <p className="text-gray-700 mb-8 leading-relaxed">
              Not just for a day.  
              <br />
              But for every smile, every quiet moment,  
              every little piece of life we share 🤍
            </p>

            <div className="flex gap-6 justify-center mb-4">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setAccepted(true)}
                className="px-6 py-3 bg-pink-500 text-white rounded-xl shadow-lg"
              >
                YES 💖
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setAccepted(true)}
                className="px-6 py-3 bg-pink-200 text-pink-700 rounded-xl shadow"
              >
                YES but louder 😌
              </motion.button>
            </div>

            <p className="text-sm text-pink-500 italic">
              No pressure… I just wanted you to know how special you are 🌷
            </p>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <motion.h2
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-3xl font-bold text-pink-700 mb-4"
            >
              My heart is so full 💗
            </motion.h2>

            <p className="text-gray-700 leading-relaxed">
              Thank you for choosing me.  
              <br />
              Thank you for trusting my heart.  
              <br /><br />
              Whatever the world brings,  
              whatever your answers were,  
              my love for you stays —  
              steady, gentle, and always yours ♾️
            </p>

            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="mt-6 text-4xl"
            >
              💞
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
