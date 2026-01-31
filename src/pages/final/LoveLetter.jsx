import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const letterText = `
My Vishu,

I don’t know when it happened — maybe it was in one of those quiet
moments, or maybe it was in the way you smiled without even trying —
but somewhere along the way, you became my safe place.

With you, even silence feels full. Even ordinary days carry a kind of
magic I never knew I was missing. You turned small moments into
memories I want to keep forever.

I love how you exist — not loudly, not forcefully — but honestly.
The way you care, the way you feel deeply, the way you remain kind
even when the world isn’t.

On the days you doubt yourself, I hope you remember this:
you are more than enough. You always have been.
And to me, you are irreplaceable.

This letter isn’t about grand promises or dramatic words.
It’s about choosing you — in the calm, in the chaos,
in the laughter and the quiet pauses in between.

If you ever feel lost, tired, or unsure, come back to this moment.
Come back to the feeling of being held, understood,
and loved exactly as you are.

You don’t need to change.
You don’t need to prove anything.
Just stay — and let me love you the way you deserve.

Always yours,
❤️
`;

export default function LoveLetter() {
  const [displayedText, setDisplayedText] = useState("");
  const [finished, setFinished] = useState(false);
  const [sealed, setSealed] = useState(false);
  const containerRef = useRef(null);

  /* ✍️ TYPEWRITER */
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(letterText.slice(0, index));
      index++;

      if (index > letterText.length) {
        clearInterval(interval);
        setFinished(true);
      }
    }, 35);

    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    containerRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 flex items-center justify-center p-6 overflow-hidden">

      {/* 🕯 CANDLE FLICKER */}
      {!sealed && (
        <>
          <motion.div
            animate={{ opacity: [0.15, 0.3, 0.18] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="absolute top-10 left-1/2 -translate-x-1/2 w-80 h-80 bg-amber-300/30 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ opacity: [0.1, 0.25, 0.12] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl"
          />
        </>
      )}

      {/* 📜 LETTER */}
      <motion.div
        animate={sealed ? { scaleY: 0.2, y: 30 } : { scaleY: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl max-w-2xl w-full origin-top overflow-hidden"
      >
        {/* 💌 HEADER */}
        <h2 className="text-3xl font-semibold text-rose-600 text-center pt-10">
          A Letter for You 💌
        </h2>

        {/* ✍️ LETTER BODY */}
        {!sealed && (
          <div
            ref={containerRef}
            className="px-8 md:px-12 py-8 max-h-[70vh] overflow-y-auto text-rose-700 whitespace-pre-line leading-relaxed"
          >
            {displayedText}
          </div>
        )}

        {/* 🤍 ACTION */}
        {finished && !sealed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="pb-6 flex flex-col items-center gap-3"
          >
            <p className="text-rose-400 text-sm">
              Would you like to seal this letter? 💌
            </p>

            <button
              onClick={() => setSealed(true)}
              className="px-6 py-2 rounded-full bg-rose-500 text-white text-sm shadow-md hover:bg-rose-600 transition"
            >
              Seal with love
            </button>
          </motion.div>
        )}
      </motion.div>

      {/* 💖 SEALED STATE */}
      <AnimatePresence>
        {sealed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-5xl mb-4"
            >
              💌
            </motion.div>

            <p className="text-rose-600 text-lg font-medium mb-1">
              Sealed with love
            </p>

            <p className="text-rose-400 text-sm mb-6">
              Warm… quiet… and safe 🤍
            </p>

            <button
              onClick={() => {
                setSealed(false);
                scrollToTop();
              }}
              className="px-6 py-2 rounded-full border border-rose-300 text-rose-500 text-sm hover:bg-rose-50 transition"
            >
              Unseal & read again
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
