import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import Confetti from "react-confetti";
import Lottie from "lottie-react";
import teddyAnimation from "../assets/teddy.json";

const hugs = [
  "A gentle hug just for you 🧸",
  "Wrapping you in warmth 🤍",
  "Holding you closer… feel it? 🫂",
  "Our heartbeats sync 💓",
  "I’m never letting you go 💖"
];

export default function TeddyDay() {
  const [hug, setHug] = useState(0);

  // 💗 Floating hearts (generated once)
  const hearts = useMemo(
    () =>
      Array.from({ length: 18 }).map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 16 + 14,
        duration: Math.random() * 6 + 6
      })),
    []
  );

  const handleHug = () => {
    if (hug < hugs.length - 1) {
      setHug(hug + 1);
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-rose-100 to-red-100 text-center px-4 overflow-hidden">

      {/* 🎉 Confetti on final hug */}
      {hug === hugs.length - 1 && (
        <Confetti numberOfPieces={250} recycle={false} />
      )}

      {/* 💗 Floating Hearts Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {hearts.map((heart, i) => (
          <motion.span
            key={i}
            className="absolute"
            style={{
              left: `${heart.left}%`,
              top: `${heart.top}%`,
              fontSize: heart.size,
              opacity: 0.6
            }}
            animate={{
              y: [-10, -35, -10],
              scale: [1, 1.15, 1],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{
              duration: heart.duration,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            💗
          </motion.span>
        ))}
      </div>

      {/* 🧸 Title */}
      <h1 className="text-4xl font-extrabold text-pink-600 mb-8 drop-shadow z-10">
        🧸 Happy Teddy Day 🧸
      </h1>

      {/* 📱 Mobile Hint */}
      {hug < hugs.length - 1 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="md:hidden text-pink-500 text-sm mb-4 z-10"
        >
          Tap the teddy again 💗
        </motion.div>
      )}

      {/* 🧸 LOTTIE TEDDY (Interactive) */}
      <motion.div
        onClick={handleHug}
        className={`w-72 cursor-pointer z-10 select-none ${
          hug === hugs.length - 1
            ? "drop-shadow-[0_0_30px_#f472b6]"
            : ""
        }`}
        animate={{
          scale: 1 + hug * 0.04
        }}
        transition={{ duration: 0.4 }}
        whileTap={{ scale: 0.92 }}
      >
        <Lottie
          animationData={teddyAnimation}
          loop={hug !== hugs.length - 1}
          speed={1 + hug * 0.15}
        />
      </motion.div>

      {/* 💬 Hug Message */}
      <AnimatePresence mode="wait">
        <motion.p
          key={hug}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="mt-8 text-xl text-gray-700 max-w-md z-10"
        >
          {hugs[hug]}
        </motion.p>
      </AnimatePresence>

      {/* 💞 Final Love Message */}
      {hug === hugs.length - 1 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-pink-600 font-bold text-xl z-10"
        >
          This teddy chooses you.
          <br />
          Forever. Always. 💞🧸
        </motion.div>
      )}
    </div>
  );
}


