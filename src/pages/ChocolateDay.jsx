// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const messages = [
//   "Just like chocolate, you melt my worries away 🍫🤎",
//   "Every bite reminds me how sweet you are 😌",
//   "Life feels warmer when you’re around ✨",
//   "Some cravings never fade… just like you 💕",
//   "Too much sweetness? Never with you 😉",
//   "Okay… this chocolate is gone, but you’re still my favorite ❤️"
// ];

// const ChocolateDay = () => {
//   const navigate = useNavigate();
//   const [opened, setOpened] = useState(false);
//   const [bites, setBites] = useState(0);

//   useEffect(() => {
//     if (!localStorage.getItem("allowed")) {
//       navigate("/");
//     }
//   }, [navigate]);

//   const eatChocolate = () => {
//     if (bites < messages.length - 1) {
//       setBites((prev) => prev + 1);
//     }
//   };

//   return (
//     <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-amber-200 to-rose-300 flex items-center justify-center">

//       {/* 🍫 Floating Chocolates */}
//       {[...Array(7)].map((_, i) => (
//         <motion.div
//           key={i}
//           initial={{ y: "100vh", opacity: 0 }}
//           animate={{ y: "-10vh", opacity: 1 }}
//           transition={{
//             duration: 9 + i,
//             repeat: Infinity,
//             delay: i * 1.2,
//           }}
//           className="absolute text-4xl"
//           style={{ left: `${i * 14 + 6}%` }}
//         >
//           🍫
//         </motion.div>
//       ))}

//       {/* 💌 Card */}
//       <motion.div
//         initial={{ scale: 0.85, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 0.6 }}
//         className="bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-xl text-center max-w-md mx-4"
//       >
//         <h1 className="text-4xl font-bold text-amber-700 mb-6">
//           🍫 Chocolate Day 🍫
//         </h1>

//         {!opened ? (
//           <>
//             {/* 🍫 Chocolate */}
//             <motion.div
//               whileHover={{ scale: 1.15 }}
//               whileTap={{ scale: 0.9 }}
//               onClick={() => setOpened(true)}
//               className="text-8xl cursor-pointer my-6"
//             >
//               🍫
//             </motion.div>

//             <p className="text-gray-600 italic">
//               Click the chocolate… sweetness awaits 😋
//             </p>
//           </>
//         ) : (
//           <motion.div
//             key={bites}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.4 }}
//           >
//             <p className="text-gray-700 text-lg leading-relaxed">
//               {messages[bites]}
//             </p>

//             <motion.button
//               whileTap={{ scale: 0.95 }}
//               onClick={eatChocolate}
//               disabled={bites === messages.length - 1}
//               className={`mt-6 px-6 py-2 rounded-full font-semibold shadow transition
//                 ${
//                   bites === messages.length - 1
//                     ? "bg-gray-300 text-gray-500 cursor-not-allowed"
//                     : "bg-amber-600 text-white hover:bg-amber-700"
//                 }
//               `}
//             >
//               {bites === messages.length - 1
//                 ? "All sweetness revealed 🤍"
//                 : "Take another bite 😋"}
//             </motion.button>

//             <p className="mt-4 text-sm text-gray-500 italic">
//               Bite {bites + 1} of {messages.length}
//             </p>
//           </motion.div>
//         )}
//       </motion.div>
//     </div>
//   );
// };

// export default ChocolateDay;


export default function page()  {
  return(
    <div>
      <div class="flex justify-center">Sabar kro baby 😘😘</div>
    </div>
  )
}
