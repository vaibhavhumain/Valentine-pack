import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import roseMusic from "../assets/rose-music.mpeg";
import roseImg from "../assets/rose.jpg";

const Rose = () => {
  const navigate = useNavigate();
  const audioRef = useRef(null);
  const [revealed, setRevealed] = useState(false);

  // 🔐 Safety check only
  useEffect(() => {
    if (!localStorage.getItem("allowed")) {
      navigate("/");
    }
  }, [navigate]);

  const handleRoseClick = () => {
    setRevealed(true);
    audioRef.current?.play().catch(() => {});
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-rose-200 to-pink-300 flex items-center justify-center">
      
      {/* 🎵 Background Music */}
      <audio ref={audioRef} loop>
        <source src={roseMusic} type="audio/mpeg" />
      </audio>

      {/* 🌹 Floating Roses */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: "100vh", opacity: 0 }}
          animate={{ y: "-10vh", opacity: 1 }}
          transition={{
            duration: 10 + i,
            repeat: Infinity,
            delay: i * 1.5,
          }}
          className="absolute text-3xl"
          style={{ left: `${i * 15 + 5}%` }}
        >
          🌹
        </motion.div>
      ))}

      {/* 💌 Main Card */}
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-xl text-center max-w-md mx-4"
      >
        <h1 className="text-4xl font-bold text-rose-500 mb-6">
          🌹 Rose Day 🌹
        </h1>

        {!revealed ? (
          <>
            <motion.img
              src={roseImg}
              alt="Rose"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleRoseClick}
              className="mx-auto w-40 h-40 object-cover rounded-full cursor-pointer shadow-lg"
            />

            <p className="text-gray-600 italic mt-4">
              Click the rose… it’s waiting for you 💖
            </p>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-gray-700 text-lg leading-relaxed">
              This rose carries everything I struggle to say out loud…
              <br />
              <span className="font-semibold text-rose-500">
                You make my world softer, warmer, and brighter ❤️
              </span>
            </p>

            <p className="mt-6 text-sm text-gray-500 italic">
              Come back tomorrow… I have something important to ask 💍
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Rose;
