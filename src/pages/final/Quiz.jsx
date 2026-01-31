import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const questions = [
  { q: "Who loves you the most? 😌", options: ["You 💕", "Me 😏", "Both of us 🫶"] },
  { q: "What makes you smile instantly?", options: ["My texts 📱", "My face 😄", "My presence 🤍"] },
  { q: "Our perfect date would be?", options: ["Long walk 🌙", "Movies + snacks 🍿", "Just us talking 💬"] },
  { q: "When you’re sad, what do you need most?", options: ["A hug 🤍", "Someone to listen 👂", "Me 😌"] },
  { q: "What do you like most about us?", options: ["Understanding 🫂", "Chemistry 🔥", "Comfort 💖"] },
  { q: "Who says sorry first?", options: ["You 😅", "Me 🙈", "Whoever misses more 💕"] },
  { q: "Our love is best described as?", options: ["Soft & safe 🤍", "Fun & crazy 😜", "Deep & forever ♾️"] },
  { q: "What scares you the most?", options: ["Losing you 😔", "Silence between us", "Distance 🌍"] },
  { q: "Late-night calls or long texts?", options: ["Calls 📞", "Texts 💬", "Both 🫶"] },
  { q: "What do you feel when you think of me?", options: ["Peace 😌", "Butterflies 🦋", "Home 🏡"] },
  { q: "Who is luckier in this relationship?", options: ["You 😌", "Me 😎", "Both of us 💞"] },
  { q: "One word for us?", options: ["Forever ♾️", "Magic ✨", "Love 💖"] },
];

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [stage, setStage] = useState("quiz");
  const [showInput, setShowInput] = useState(false);
  const [customAnswer, setCustomAnswer] = useState("");

  /* ✅ SAFE LOCAL STORAGE LOAD */
  useEffect(() => {
    try {
      const stored = localStorage.getItem("loveQuizAnswers");
      if (stored) setAnswers(JSON.parse(stored));
    } catch {
      setAnswers([]);
    }
  }, []);

  const saveAnswer = (answer) => {
    const updated = [...answers, { q: questions[current].q, a: answer }];
    setAnswers(updated);
    localStorage.setItem("loveQuizAnswers", JSON.stringify(updated));

    setShowInput(false);
    setCustomAnswer("");

    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      setStage("saving");
    }
  };

  /* ⏳ SAVING → FINAL */
  useEffect(() => {
    if (stage === "saving") {
      const t = setTimeout(() => setStage("final"), 7000);
      return () => clearTimeout(t);
    }
  }, [stage]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-rose-200 flex items-center justify-center px-4">
      <AnimatePresence mode="wait">

        {stage === "quiz" && (
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            className="bg-white/80 backdrop-blur rounded-3xl shadow-xl p-8 max-w-md w-full text-center"
          >
            <h2 className="text-xl font-bold text-pink-700 mb-2">
              💘 Question {current + 1}
            </h2>

            <p className="mb-6">{questions[current].q}</p>

            <div className="flex flex-col gap-4">
              {questions[current].options.map((o, i) => (
                <button
                  key={i}
                  onClick={() => saveAnswer(o)}
                  className="bg-pink-50 hover:bg-pink-100 rounded-xl py-3 shadow"
                >
                  {o}
                </button>
              ))}
            </div>

            {!showInput ? (
              <button
                onClick={() => setShowInput(true)}
                className="mt-4 text-sm underline text-pink-600"
              >
                ✍️ Answer in my own words
              </button>
            ) : (
              <div className="mt-4">
                <textarea
                  value={customAnswer}
                  onChange={(e) => setCustomAnswer(e.target.value)}
                  className="w-full p-3 rounded-xl border"
                  rows={3}
                />
                <button
                  disabled={!customAnswer.trim()}
                  onClick={() => saveAnswer(customAnswer)}
                  className="mt-2 w-full bg-pink-500 text-white py-2 rounded-xl"
                >
                  Save 💌
                </button>
              </div>
            )}
          </motion.div>
        )}

        {stage === "saving" && (
          <motion.div className="bg-white/80 p-10 rounded-3xl text-center shadow-xl">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-4xl mb-4"
            >
              💗
            </motion.div>
            <p className="text-pink-700 font-medium">Saving your answers…</p>
          </motion.div>
        )}

        {stage === "final" && (
          <motion.div className="bg-white/80 p-10 rounded-3xl text-center shadow-xl">
            <h2 className="text-2xl font-bold text-pink-700 mb-4">💖 One Last Thing</h2>
            <p className="leading-relaxed text-gray-700">
              Whatever your answers were…  
              <br />my love for you won’t be less.  
              <br /><br />You are enough. Always 🤍
            </p>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}
