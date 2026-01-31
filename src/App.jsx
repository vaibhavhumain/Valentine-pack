import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Week from "./pages/Week";
import RoseDay from "./pages/RoseDay";
import ProposeDay from "./pages/ProposeDay";
import ChocolateDay from "./pages/ChocolateDay";
import TeddyDay from "./pages/TeddyDay";
import PromiseDay from "./pages/PromiseDay";
import HugDay from "./pages/HugDay";
import KissDay from "./pages/KissDay";

// ✅ FINAL FLOW PAGES
import Valentine from "./pages/Valentine";          // unlock hub
import LoveLetter from "./pages/final/LoveLetter";
import Memories from "./pages/final/Memories";
import Playlist from "./pages/final/Playlist";
import Quiz from "./pages/final/Quiz";
import ValentineQuiz from "./pages/final/ValentineQuiz";  // final question

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/week" element={<Week />} />

      <Route path="/rose" element={<RoseDay />} />
      <Route path="/propose" element={<ProposeDay />} />
      <Route path="/chocolate" element={<ChocolateDay />} />
      <Route path="/teddy" element={<TeddyDay />} />
      <Route path="/promise" element={<PromiseDay />} />
      <Route path="/hug" element={<HugDay />} />
      <Route path="/kiss" element={<KissDay />} />

      {/* 💝 VALENTINE FINAL FLOW */}
      <Route path="/valentine" element={<Valentine />} />
      <Route path="/valentine/love" element={<LoveLetter />} />
      <Route path="/valentine/memories" element={<Memories />} />
      <Route path="/valentine/playlist" element={<Playlist />} />
      <Route path="/valentine/quiz" element={<Quiz />} />
      <Route path="/valentine/final" element={<ValentineQuiz />} />
    </Routes>
  );
}
