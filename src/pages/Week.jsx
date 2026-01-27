import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const days = [
  { name: "🌹 Rose Day", route: "/rose" },
  { name: "💍 Propose Day", route: "/propose" },
  { name: "🍫 Chocolate Day", route: "/chocolate" },
  { name: "🧸 Teddy Day", route: "/teddy" },
  { name: "🤝 Promise Day", route: "/promise" },
  { name: "🤗 Hug Day", route: "/hug" },
  { name: "💋 Kiss Day", route: "/kiss" },
  { name: "❤️ Valentine’s Day", route: "/valentine" },
];

const Week = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("allowed")) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 to-red-300">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white p-8 rounded-2xl shadow-xl text-center w-[90%] max-w-md"
      >
        <h1 className="text-3xl font-bold text-red-500 mb-6">
          💖 Valentine Week 💖
        </h1>

        <ul className="grid grid-cols-2 gap-4">
          {days.map((day, index) => (
            <li
              key={index}
              onClick={() => navigate(day.route)}
              className="p-4 rounded-xl font-medium text-center cursor-pointer
                         bg-pink-100 hover:bg-pink-200 text-red-600 transition"
            >
              {day.name}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default Week;
