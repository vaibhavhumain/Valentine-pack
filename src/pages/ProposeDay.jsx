import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import proposeMusic from "../assets/propose.mp3";

const ProposeDay = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [savedAnswer, setSavedAnswer] = useState("");
  const audioRef = useRef(null);

  // Load saved answer
  useEffect(() => {
    const stored = localStorage.getItem("proposeAnswer");
    if (stored) {
      setSavedAnswer(stored);
      setShowMessage(true);

      if (stored === "yes") {
        playCelebration();
      }
    }
  }, []);

  const playCelebration = () => {
    // Confetti 🎉
    confetti({
      particleCount: 150,
      spread: 90,
      origin: { y: 0.6 },
    });

    // Music 🎶
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const handleYes = () => {
    localStorage.setItem("proposeAnswer", "yes");
    setSavedAnswer("yes");
    playCelebration();
  };

  const handleNo = () => {
    localStorage.setItem("proposeAnswer", "no");
    setSavedAnswer("no");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center
                    bg-linear-to-br from-pink-100 to-red-200 text-center px-4">

      <h1 className="text-4xl font-bold text-red-600 mb-6">
        💍 Happy Propose Day 💍
      </h1>

      <p className="text-lg text-gray-700 mb-8">
        Click the ring… something special is waiting 💖
      </p>

      {/* Ring */}
      <div
        onClick={() => setShowMessage(true)}
        className="cursor-pointer text-7xl transition-transform duration-300 hover:scale-110"
      >
        💍
      </div>

      {/* Proposal Box */}
      {showMessage && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-8 bg-white p-6 rounded-2xl shadow-lg max-w-md w-full"
        >
          <p className="text-xl text-pink-600 font-semibold mb-6">
            Will you be mine forever? 🌹✨
          </p>

          {!savedAnswer && (
            <div className="flex gap-4 justify-center">
              <button
                onClick={handleYes}
                className="bg-green-500 text-white px-6 py-2 rounded-xl text-lg font-semibold hover:bg-green-600 transition"
              >
                💖 YES
              </button>

              <button
                onClick={handleNo}
                className="bg-gray-400 text-white px-6 py-2 rounded-xl text-lg font-semibold hover:bg-gray-500 transition"
              >
                💔 NO
              </button>
            </div>
          )}

          {/* YES RESULT */}
          {savedAnswer === "yes" && (
            <div className="mt-6">
              <p className="text-3xl font-bold text-green-600">
                HE SAID YES!!! 😍🎉💍💖
              </p>
              <p className="mt-2 text-lg">
                Forever starts now 🥹✨
              </p>
            </div>
          )}

          {/* NO RESULT */}
          {savedAnswer === "no" && (
            <div className="mt-6">
              <p className="text-3xl font-bold text-red-500">
                😭💔😭💔😭
              </p>
              <p className="mt-2 text-lg text-gray-600">
                It’s okay… crying in the corner 🥲
              </p>
            </div>
          )}
        </motion.div>
      )}

      {/* Hidden audio */}
      <audio ref={audioRef} src={proposeMusic} loop />
    </div>
  );
};

export default ProposeDay;


