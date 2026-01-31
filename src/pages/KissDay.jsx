export default function Page() {
  return (
    <div style={{ padding: "2rem", fontSize: "2rem" }}>
      Itni jaldi hai kissi lene ki kya ❤️
    </div>
  );
}


// import { motion } from "framer-motion";
// import { useState, useRef } from "react";

// const KissDay = () => {
//   const [kissType, setKissType] = useState(null); 
//   // null | "romantic" | "forehead"

//   const holdTimer = useRef(null);

//   const startHold = () => {
//     holdTimer.current = setTimeout(() => {
//       setKissType("romantic");
//     }, 600);
//   };

//   const endHold = () => {
//     clearTimeout(holdTimer.current);
//   };

//   const handleTap = () => {
//     if (!kissType) {
//       setKissType("forehead");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center px-4
//       bg-gradient-to-br from-pink-200 via-rose-300 to-pink-400
//       relative overflow-hidden"
//     >
//       <div
//         className={`absolute inset-0 transition-all duration-700
//         ${kissType ? "backdrop-blur-none" : "backdrop-blur-sm"}`}
//       />

//       <div className="relative z-10 text-center max-w-md">

//         <h1 className="text-4xl font-bold text-white mb-8 drop-shadow">
//           💋 Kiss Day 💋
//         </h1>

//         {!kissType ? (
//           <>
//             {/* Interactive lips */}
//             <motion.div
//               animate={{ y: [0, -8, 0] }}
//               transition={{ duration: 2, repeat: Infinity }}
//               whileTap={{ scale: 0.85 }}
//               whileHover={{ scale: 1.15 }}
//               onMouseDown={startHold}
//               onMouseUp={endHold}
//               onMouseLeave={endHold}
//               onTouchStart={startHold}
//               onTouchEnd={endHold}
//               onClick={handleTap}
//               className="text-7xl cursor-pointer select-none"
//             >
//               💋
//             </motion.div>

//             <p className="mt-6 text-white italic">
//               tap… or hold me a little longer 🫶
//             </p>

//             <p className="mt-2 text-sm text-white/80">
//               tap = forehead kiss 💌 | hold = real kiss 💋
//             </p>
//           </>
//         ) : kissType === "romantic" ? (
//           <>
//             {/* Romantic kiss */}
//             <motion.div
//               animate={{ scale: [1, 1.4, 1] }}
//               transition={{ duration: 1.2, repeat: Infinity }}
//               className="text-6xl"
//             >
//               💖💋💖
//             </motion.div>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.6 }}
//               className="mt-8 text-lg text-white leading-relaxed"
//             >
//               that wasn’t rushed…  
//               that was a kiss meant to stay 💞
//             </motion.p>
//           </>
//         ) : (
//           <>
//             {/* Forehead kiss */}
//             <motion.div
//               animate={{ scale: [1, 1.2, 1] }}
//               transition={{ duration: 1.5, repeat: Infinity }}
//               className="text-6xl"
//             >
//               💌
//             </motion.div>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.5 }}
//               className="mt-8 text-lg text-white leading-relaxed"
//             >
//               a soft kiss on your forehead…  
//               just to say *I’ve got you* 🤍
//             </motion.p>
//           </>
//         )}
//       </div>

//       {/* Floating hearts */}
//       {kissType &&
//         [...Array(7)].map((_, i) => (
//           <motion.div
//             key={i}
//             initial={{ y: "100vh", opacity: 0 }}
//             animate={{ y: "-10vh", opacity: 1 }}
//             transition={{
//               duration: 6 + i,
//               repeat: Infinity,
//               delay: i * 0.7,
//             }}
//             className="absolute text-2xl"
//             style={{ left: `${i * 13 + 8}%` }}
//           >
//             💞
//           </motion.div>
//         ))}
//     </div>
//   );
// };

// export default KissDay;
