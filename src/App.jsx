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
import Valentine from "./pages/Valentine";

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

      <Route path="/valentine" element={<Valentine />} />
    </Routes>
  );
}
