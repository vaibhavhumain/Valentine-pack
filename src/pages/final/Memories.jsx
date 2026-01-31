import { motion, AnimatePresence} from "framer-motion";
import { useEffect, useRef, useState } from "react";
/* 💖 HEART CONFETTI */
const HeartConfetti = () => {
  const hearts = Array.from({ length: 30 });

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((_, i) => (
        <motion.span
          key={i}
          initial={{
            opacity: 0,
            y: Math.random() * 300 + 600,
            x: Math.random() * window.innerWidth,
            scale: Math.random() * 0.8 + 0.4,
          }}
          animate={{ opacity: [0, 0.5, 0], y: [-900] }}
          transition={{
            duration: 22 + Math.random() * 8,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "easeInOut",
          }}
          className="absolute text-3xl"
        >
          {["💗", "💖", "💕", "🤍", "💘"][i % 5]}
        </motion.span>
      ))}
    </div>
  );
};

/* 🌙 FLOATING LIGHT BLOBS */
const LightBlobs = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: Math.random() * 1000,
            y: Math.random() * 800,
          }}
          animate={{
            x: Math.random() * 1000,
            y: Math.random() * 800,
          }}
          transition={{
            duration: 40 + Math.random() * 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-72 h-72 rounded-full
            bg-rose-300/30 blur-3xl"
        />
      ))}
    </div>
  );
};

/* 🧠 MEMORY DATA */
const memories = [
  {
    text: "The first time we met 💫",
    image: "/memories/first_meet.jpeg",
  },
  {
    text: "Our first virtual meeting 💻❤️",
    image: "/memories/virtual_meeting.jpeg",
  },
  {
    text: "That first dish we shared 🍽️",
    image: "/memories/first_dish.jpeg",
  },
  {
    text: "Flowers that said everything 🌸",
    image: "/memories/flowers.jpeg",
  },
];

export default function Memories() {
  const audioRef = useRef(null);
  const [openNote, setOpenNote] = useState(false);


  /* 🎶 BACKGROUND MUSIC */
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.15;
      audioRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <motion.div
      className="relative min-h-screen overflow-hidden px-6 py-16
      bg-[radial-gradient(circle_at_top,_#ffe4e6,_#fff1f2,_#fff)]"
      animate={{ scale: [1, 1.01, 1] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* 🎶 AUDIO */}
      <audio ref={audioRef} loop>
        <source src="/bolna_flute_ringtone.mp3" type="audio/mpeg" />
      </audio>

      {/* BACKGROUND LAYERS */}
      <LightBlobs />
      <HeartConfetti />

      {/* CONTENT */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col gap-20">

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-4xl font-semibold text-rose-600"
        >
          Our Memories 🤍
        </motion.h2>

        <div className="flex flex-col gap-24">
          {memories.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.25 }}
              className={`relative bg-white/90 backdrop-blur
                rounded-[2.5rem] shadow-2xl p-5 max-w-md
                ${i % 2 === 0
                  ? "md:ml-20 rotate-[-1.5deg]"
                  : "md:ml-auto rotate-[1.5deg]"}`}
            >
              <img
                src={m.image}
                alt={m.text}
                className="w-full h-64 object-cover rounded-3xl"
              />

              <p className="mt-5 text-center text-rose-600 font-medium text-lg">
                {m.text}
              </p>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-rose-400 text-sm">
          Some memories don’t fade — they breathe 🤍
        </p>
        <button
  onClick={() => setOpenNote(true)}
  className="mx-auto mt-8 px-6 py-2 rounded-full 
  bg-rose-200/70 text-rose-700
  hover:bg-rose-300 transition
  text-sm shadow-md"
>
  one last thing 🤍
</button>
<AnimatePresence>
  {openNote && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center
      bg-black/40 backdrop-blur-sm px-6"
      onClick={() => setOpenNote(false)}
    >
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl shadow-2xl
        max-w-md w-full p-8 text-center"
      >
        <p className="text-rose-600 text-lg leading-relaxed font-medium">
          Every memory here is a piece of my heart.<br />
          Not because they were perfect —<br />
          but because they were <span className="font-semibold">with you</span>.
          <br /><br />
          And if I had to choose again,<br />
          I’d choose these moments,<br />
          I’d choose <span className="font-semibold">you</span> —<br />
          every single time 🤍
          And I just wanna tell you that I love you so much<br></br> and I miss you so much ❤️😭
        </p>

        <button
          onClick={() => setOpenNote(false)}
          className="mt-6 px-5 py-2 rounded-full
          bg-rose-200 text-rose-700 text-sm
          hover:bg-rose-300 transition"
        >
          close 🤍
        </button>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

      </div>
    </motion.div>
  );
}
