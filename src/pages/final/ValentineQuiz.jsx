import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "@react-hook/window-size";

export default function ValentineQuestion() {
  const [accepted, setAccepted] = useState(false);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [musicOn, setMusicOn] = useState(false);
  const [width, height] = useWindowSize();

  const moveNoButton = () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    setNoPosition({ x, y });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-200 via-pink-100 to-red-300 flex items-center justify-center px-4 overflow-hidden relative">

      {/* Confetti when accepted */}
      {accepted && <Confetti width={width} height={height} />}

      {/* Soft floating hearts */}
      <motion.div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute text-pink-400 text-xl opacity-60"
            style={{ left: `${Math.random() * 100}%`, bottom: "-10%" }}
            animate={{ y: "-120vh", opacity: [0, 1, 0] }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          >
            💖
          </motion.span>
        ))}
      </motion.div>

      {/* Glow effect */}
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute w-[500px] h-[500px] bg-pink-300/40 rounded-full blur-3xl"
      />

      {/* Main Card */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-white/80 backdrop-blur-2xl rounded-3xl shadow-2xl p-10 max-w-md w-full text-center relative z-10 border border-pink-200"
      >
        {!accepted ? (
          <>
            <motion.h1
              initial={{ y: -30 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-extrabold text-pink-700 mb-4"
            >
              Will You Be My Valentine? 💍
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gray-700 mb-8 leading-relaxed"
            >
              Not just for a day... <br />
              But for late night talks, random laughter, <br />
              and every heartbeat that whispers your name 🤍
            </motion.p>

            <div className="flex gap-6 justify-center mb-4 relative">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setAccepted(true)}
                className="px-6 py-3 bg-pink-500 text-white rounded-xl shadow-xl hover:bg-pink-600 transition"
              >
                YES 💖
              </motion.button>

              <motion.button
                animate={{ x: noPosition.x, y: noPosition.y }}
                whileHover={moveNoButton}
                className="px-6 py-3 bg-gray-200 text-gray-700 rounded-xl shadow transition"
              >
                No 🙈
              </motion.button>
            </div>

            <p className="text-sm text-pink-500 italic">
              Try pressing No… if you can 😌
            </p>
          </>
        ) : (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h2
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-3xl font-bold text-pink-700 mb-4"
              >
                You just made me the happiest 💗
              </motion.h2>

              <p className="text-gray-700 leading-relaxed">
                From this moment,  
                every sunrise feels softer,  
                every dream feels closer,  
                and every heartbeat feels like home.  
                <br /><br />
                I choose you. Always. ♾️
              </p>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="mt-6 text-5xl"
              >
                💞
              </motion.div>
            </motion.div>
          </AnimatePresence>
        )}
      </motion.div>
    </div>
  );
}
