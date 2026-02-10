// export default function Page() {
//   return (
//     <div style={{ padding: "2rem", fontSize: "2rem" }}>
//       I promise that i will update this on promise day ❤️
//     </div>
//   );
// }

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";

const promises = [
  "I promise to stand by you, even on the days you feel unsure 🤍",
  "I promise to listen — not to reply, but to understand 🌸",
  "I promise to choose you, in big moments and the quiet ones 💖",
  "I promise patience, honesty, and a safe place for your heart ✨",
  "I promise I won’t be perfect… but I will always try for you 🤝"
];

const PromiseDay = () => {
  const [index, setIndex] = useState(0);
  const [step, setStep] = useState(0); // controls I ❤️ you animation
  const [showConfetti, setShowConfetti] = useState(false);

  const handlePromise = () => {
    if (index < promises.length - 1) {
      setIndex(index + 1);
    }
  };

  // 🎬 Control falling text sequence AFTER last promise
  useEffect(() => {
    if (index === promises.length - 1) {
      const timers = [
        setTimeout(() => setStep(1), 800),   // I
        setTimeout(() => setStep(2), 1600),  // love
        setTimeout(() => setStep(3), 2400),  // you
        setTimeout(() => setStep(4), 3200),  // merge
        setTimeout(() => setShowConfetti(true), 3800)
      ];
      return () => timers.forEach(clearTimeout);
    }
  }, [index]);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-100 via-pink-100 to-red-200 px-4 overflow-hidden">

      {/* 🎉 Confetti at the END */}
      {showConfetti && (
        <Confetti numberOfPieces={300} recycle={false} />
      )}

      {/* 💗 Soft floating glow */}
      <motion.div
        className="absolute inset-0 bg-pink-300/10 blur-3xl"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* 💌 Promise Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative bg-white/85 backdrop-blur-xl p-10 rounded-[2rem] 
        shadow-2xl text-center max-w-md w-full z-10"
      >
        <h1 className="text-4xl font-extrabold text-red-500 mb-6">
          🤝 Promise Day 🤝
        </h1>

        <p className="text-sm text-gray-500 mb-6">
          Promises don’t need perfection… just sincerity.
        </p>

        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-lg text-gray-700 mb-10 leading-relaxed"
          >
            {promises[index]}
          </motion.p>
        </AnimatePresence>

        {index < promises.length - 1 && (
          <button
            onClick={handlePromise}
            className="bg-red-400 text-white px-8 py-3 rounded-full 
            font-semibold hover:bg-red-500 transition shadow-lg"
          >
            Another promise 💌
          </button>
        )}
      </motion.div>

      {/* ❤️ FALLING "I LOVE YOU" SEQUENCE */}
      <div className="absolute bottom-28 text-center z-20 h-24">

        <AnimatePresence>
          {step === 1 && (
            <motion.div
              initial={{ y: -80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-5xl font-extrabold text-red-500"
            >
              I
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              initial={{ y: -80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-5xl font-extrabold text-pink-500"
            >
              love
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              initial={{ y: -80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-5xl font-extrabold text-red-400"
            >
              you
            </motion.div>
          )}
        </AnimatePresence>

        {step >= 4 && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: [1, 1.2, 1],
              y: [0, -20, 0],
              opacity: 1
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl font-extrabold text-red-600"
          >
            I love you ❤️
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default PromiseDay;

