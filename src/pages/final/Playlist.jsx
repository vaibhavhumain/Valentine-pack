import { motion } from "framer-motion";

// 🎵 Covers
import abhiNaJao from "../../covers/abhi_na_jao.webp";
import bolna from "../../covers/bolna.jpg";
import dil from "../../covers/dil.jpg";
import itna from "../../covers/itna.jpg";
import lagJaGale from "../../covers/lag_ja_gale.jpg";
import samjhawan from "../../covers/samjhawan.jpg";

const songs = [
  {
    title: "Abhi Na Jao Chhod Kar",
    artist: "Mohammed Rafi, Asha Bhosle",
    cover: abhiNaJao,
    youtube: "https://youtu.be/mfEQgoVi7P4?si=o4gNy1Gk4YG313Wa",
  },
  {
    title: "Bolna",
    artist: "Arijit Singh",
    cover: bolna,
    youtube: "https://youtu.be/GYFDRoJtfGM?si=AHmLu61YErlet793",
  },
  {
    title: "Dil",
    artist: "Arijit Singh",
    cover: dil,
    youtube: "https://youtu.be/NgjERPTaC4Y?si=8OFlXwA9Tb9925EQ",
  },
  {
    title: "Itna Na Mujhse Tu Pyar Badha 🤍",
    artist: "Talat Mahmood, Lata Mangeshkar",
    cover: itna,
    youtube: "https://youtu.be/iZUcBGRoLqo?si=RtUxW9RIccSSu5md",
  },
  {
    title: "Lag Ja Gale",
    artist: "Lata Mangeshkar",
    cover: lagJaGale,
    youtube: "https://youtu.be/y2fgw1Oqz28?si=tBmzWT_rXobhb-Fz",
  },
  {
    title: "Samjhawan",
    artist: "Arijit Singh, Shreya Ghoshal",
    cover: samjhawan,
    youtube: "https://youtu.be/EY3Q5EgEaYM?si=D2hS1TkrskLZqA5U",
  },
];

const Playlist = () => {
  const playSong = (url) => {
    window.open(url, "_blank"); // 🎧 open YouTube
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 to-pink-200 px-6 py-10">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-bold text-center text-pink-700 mb-10"
      >
        🎶 Tap a Song, Feel Us
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {songs.map((song, index) => (
          <motion.div
            key={index}
            onClick={() => playSong(song.youtube)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            className="relative bg-white/70 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden cursor-pointer group"
          >
            {/* ▶ Play Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center z-10">
              <div className="text-white text-4xl bg-pink-500 rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                ▶
              </div>
            </div>

            <img
              src={song.cover}
              alt={song.title}
              className="w-full h-56 object-cover"
            />

            <div className="p-4 text-center">
              <h2 className="text-lg font-semibold text-gray-800">
                {song.title}
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                {song.artist}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <p className="text-center text-pink-600 mt-12 italic">
        Every tap opens a memory… and a song 💗
      </p>
    </div>
  );
};

export default Playlist;
