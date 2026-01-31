import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const days = [
  {
    name: "🌹 Rose Day",
    route: "/rose",
    note: "A small flower, a big feeling."
  },
  {
    name: "💍 Propose Day",
    route: "/propose",
    note: "Say what your heart already knows."
  },
  {
    name: "🍫 Chocolate Day",
    route: "/chocolate",
    note: "Sweet moments, no reason needed."
  },
  {
    name: "🧸 Teddy Day",
    route: "/teddy",
    note: "Comfort you can hold onto."
  },
  {
    name: "🤝 Promise Day",
    route: "/promise",
    note: "Staying, even when it’s hard."
  },
  {
    name: "🤗 Hug Day",
    route: "/hug",
    note: "Come here. You’re safe."
  },
  {
    name: "💋 Kiss Day",
    route: "/kiss",
    note: "A quiet way to say everything."
  },
  {
    name: "❤️ Valentine’s Day",
    route: "/valentine",
    note: "Not perfect. Just real."
  }
];

const Week = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("allowed")) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-100 to-red-100 px-6 py-12">

      {/* Title */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl font-semibold text-rose-500">
          Valentine Week
        </h1>
        <p className="text-rose-400 text-sm mt-2">
          One soft moment of love, each day 🤍
        </p>
      </motion.div>

      {/* Day Tiles */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {days.map((day, index) => (
          <div
            key={index}
            onClick={() => navigate(day.route)}
            className="
              bg-white/80 backdrop-blur-md
              rounded-2xl p-6 text-center cursor-pointer
              border border-rose-100
              shadow-sm
              hover:bg-rose-50 hover:shadow-md
              transition-all duration-300
            "
          >
            <div className="text-lg font-medium text-rose-500 mb-2">
              {day.name}
            </div>

            <div className="w-10 h-[1px] bg-rose-200 mx-auto mb-3" />

            <p className="text-sm text-rose-400 leading-relaxed">
              {day.note}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Week;
