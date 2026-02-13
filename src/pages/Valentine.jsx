import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ValentineQuiz from "./final/ValentineQuiz";

const steps = [
  { label: "💌 Love Letter", path: "/valentine/love" },
  { label: "🧠 Our Memories", path: "/valentine/memories" },
  { label: "🎧 Songs That Feel Like You", path: "/valentine/playlist" },
  { label: "💘 Just Us Quiz", path: "/valentine/quiz" },
  { label: "❤️ Forever Moment", path: "/valentine/final" }
];

export default function Valentine() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-100 via-rose-100 to-red-100 px-6 py-14">

      {/* 🌸 SOFT GLOW BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute -top-24 -left-24 w-96 h-96 bg-pink-300/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-rose-300/30 rounded-full blur-3xl"
        />
      </div>

      {/* 💞 HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="relative text-center mb-14"
      >
        <h1 className="text-4xl font-semibold text-rose-600">
          This Is My Heart ❤️
        </h1>
        <p className="text-rose-400 mt-3 text-sm leading-relaxed">
          No pressure. No rules.<br />
          Just you… and everything I feel 🤍
        </p>
      </motion.div>

      {/* 🫶 STEPS */}
      <div className="relative max-w-md mx-auto flex flex-col gap-5 mb-20">
        {steps.map((step, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => navigate(step.path)}
            className="
              bg-white/90 backdrop-blur-xl
              rounded-3xl px-7 py-5
              text-rose-500 font-medium
              shadow-md border border-rose-100
              transition-all
            "
          >
            <div className="flex flex-col items-center gap-1">
              <span className="text-lg">{step.label}</span>
              <span className="text-xs text-rose-400">
                Take your time… I’m right here
              </span>
            </div>
          </motion.button>
        ))}
      </div> 

      {/* 🌷 FOOTNOTE */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-16 text-center text-xs text-rose-400"
      >
        No matter where you tap…  
        you’re already loved 🤍
      </motion.p>

    </div>
  );
}



