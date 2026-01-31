import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function FinalUnlock() {
  const navigate = useNavigate();

  const items = [
    { title: "💌 Love Letter", path: "/final/love-letter" },
    { title: "🧠 Memories", path: "/final/memories" },
    { title: "🎧 Playlist", path: "/final/playlist" },
    { title: "💘 Quiz", path: "/final/quiz" },
    { title: "💍 Will You Be My Valentine?", path: "/final/question" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-pink-50">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-pink-600"
      >
        💖 The Final Chapter
      </motion.h1>

      {items.map((item, i) => (
        <motion.button
          key={i}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate(item.path)}
          className="px-6 py-3 rounded-xl bg-white shadow-md text-lg"
        >
          {item.title}
        </motion.button>
      ))}
    </div>
  );
}
