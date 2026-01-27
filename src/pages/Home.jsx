import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleEnter = () => {
    const allowedNames = ["vishal", "vaibhav"];

    if (allowedNames.includes(name.trim().toLowerCase())) {
      localStorage.setItem("allowed", "true");
      navigate("/week");
    } else {
      setError("DO NOT DARE TO OPEN THIS PAGE 😤💔");
    }
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-linear-to-b from-pink-200 to-white">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white p-12 rounded-2xl shadow-xl w-[320px] text-center"
      >
        <h1 className="text-4xl font-bold text-pink-500 mb-2">
          Who are you? 💌
        </h1>

        <p className="my-4 text-gray-600">
          This place is only for someone very special 💖
        </p>

        <input
          type="text"
          placeholder="Enter your name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 rounded-xl border border-gray-300 mb-4 text-base
                     focus:outline-none focus:ring-2 focus:ring-pink-400"
        />

        <button
          onClick={handleEnter}
          className="w-full py-3 bg-pink-500 text-white rounded-full
                     text-base font-semibold cursor-pointer
                     hover:bg-pink-600 hover:scale-105 transition"
        >
          Enter 💖
        </button>

        {error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 text-red-500 font-bold"
          >
            {error}
          </motion.p>
        )}
      </motion.div>
    </div>
  );
}
