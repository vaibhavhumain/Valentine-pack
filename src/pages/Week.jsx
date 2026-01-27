import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";

const days = [
  { name: "🌹 Rose Day", date: 7, route: "/rose" },
  { name: "💍 Propose Day", date: 8, route: "/propose" },
  { name: "🍫 Chocolate Day", date: 9, route: "/chocolate" },
  { name: "🧸 Teddy Day", date: 10, route: "/teddy" },
  { name: "🤝 Promise Day", date: 11, route: "/promise" },
  { name: "🤗 Hug Day", date: 12, route: "/hug" },
  { name: "💋 Kiss Day", date: 13, route: "/kiss" },
  { name: "❤️ Valentine’s Day", date: 14, route: "/valentine" },
];

const Week = () => {
  const navigate = useNavigate();

  // 🔐 Safety check
  useEffect(() => {
    if (!localStorage.getItem("allowed")) {
      navigate("/");
    }
  }, []);

  const today = new Date();
  const todayDate = today.getDate();
  const todayMonth = today.getMonth(); 

  const handleClick = (day) => {
    if (todayMonth !== 1) {
      toast.info("💝 Valentine Week comes in February");
      return;
    }

    if (day.date <= todayDate) {
      navigate(day.route);
    } else {
      toast.warning("⏳ Not yet... wait for the special day 💌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-pink-200 to-red-300">
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
          {days.map((day, index) => {
            const unlocked = day.date <= todayDate && todayMonth === 1;

            return (
              <li
                key={index}
                onClick={() => unlocked && handleClick(day)}
                className={`p-4 rounded-xl font-medium text-center transition
                  ${
                    unlocked
                      ? "bg-pink-100 hover:bg-pink-200 text-red-600 cursor-pointer"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }
                `}
              >
                {day.name}
              </li>
            );
          })}
        </ul>
      </motion.div>
    </div>
  );
};

export default Week;
