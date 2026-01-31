export default function Page() {
  return (
    <div style={{ padding: "2rem", fontSize: "2rem" }}>
      Arey arey chalo chalo wapis jao day wise aana 😁😁😁
    </div>
  );
}


// import { motion } from "framer-motion";
// import { useState, useRef, useEffect } from "react";
// import Lottie from "lottie-react";
// import Confetti from "react-confetti";
// import hugAnimation from "/public/lottie/marriage-couple-hugging.json";

// const HugDay = () => {
//   const [hugged, setHugged] = useState(false);
//   const [size, setSize] = useState({
//     width: window.innerWidth,
//     height: window.innerHeight,
//   });

//   const lottieRef = useRef();

//   // Screen resize
//   useEffect(() => {
//     const handleResize = () => {
//       setSize({
//         width: window.innerWidth,
//         height: window.innerHeight,
//       });
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const handleHug = () => {
//     setHugged(true);
//     lottieRef.current?.play();
//   };

//   return (
//     <div
//       className="min-h-screen relative flex items-center justify-center
//       bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950
//       px-4 overflow-hidden"
//     >
//       {/* 🌙 SOFT NIGHT HEART CONFETTI */}
//       {hugged && (
//         <Confetti
//           width={size.width}
//           height={size.height}
//           numberOfPieces={80}
//           gravity={0.04}
//           recycle={false}
//           colors={["#c7d2fe", "#e0e7ff", "#ddd6fe"]}
//           drawShape={(ctx) => {
//             ctx.beginPath();
//             ctx.moveTo(0, 0);
//             ctx.bezierCurveTo(0, -3, -5, -15, -25, -15);
//             ctx.bezierCurveTo(-55, -15, -55, 22.5, -55, 22.5);
//             ctx.bezierCurveTo(-55, 40, -35, 62, 0, 80);
//             ctx.bezierCurveTo(35, 62, 55, 40, 55, 22.5);
//             ctx.bezierCurveTo(55, 22.5, 55, -15, 25, -15);
//             ctx.bezierCurveTo(10, -15, 0, -3, 0, 0);
//             ctx.closePath();
//             ctx.fill();
//           }}
//         />
//       )}

//       <div className="text-center relative z-10">

//         <h1 className="text-4xl font-semibold text-indigo-200 mb-6">
//           🌙 You’re Safe Here
//         </h1>

//         {/* 🫂 Lottie Hug */}
//         <div className="w-72 mx-auto mb-8">
//           <Lottie
//             lottieRef={lottieRef}
//             animationData={hugAnimation}
//             autoplay={false}
//             loop={false}
//           />
//         </div>

//         {/* 🤍 Arms + Heart (calmer) */}
//         <div className="relative w-64 h-32 mx-auto mb-6">

//           <motion.div
//             animate={hugged ? { x: 45 } : { x: 0 }}
//             transition={{ duration: 2, ease: "easeInOut" }}
//             className="absolute left-0 top-6 w-28 h-16 
//               bg-indigo-400/70 rounded-full shadow-lg"
//           />

//           <motion.div
//             animate={hugged ? { x: -45 } : { x: 0 }}
//             transition={{ duration: 2, ease: "easeInOut" }}
//             className="absolute right-0 top-6 w-28 h-16 
//               bg-indigo-400/70 rounded-full shadow-lg"
//           />

//           <motion.div
//             animate={hugged ? { scale: [1, 1.2, 1] } : { scale: 1 }}
//             transition={{
//               duration: 2.5,
//               repeat: hugged ? Infinity : 0,
//               ease: "easeInOut",
//             }}
//             className="absolute left-1/2 top-6 -translate-x-1/2 text-4xl"
//           >
//             🤍
//           </motion.div>
//         </div>

//         {!hugged ? (
//           <motion.button
//             whileTap={{ scale: 0.95 }}
//             onClick={handleHug}
//             className="bg-indigo-500/80 text-white px-7 py-3 rounded-full
//               font-medium shadow-lg hover:bg-indigo-600 transition"
//           >
//             Come here… it’s okay 🤍
//           </motion.button>
//         ) : (
//           <motion.p
//             initial={{ opacity: 0, y: 25 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.8 }}
//             className="mt-6 text-lg text-indigo-200 max-w-sm mx-auto leading-relaxed"
//           >
//             Breathe slowly.  
//             Nothing is required from you right now.  
//             I’m here… just holding you 🌙
//           </motion.p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default HugDay;
