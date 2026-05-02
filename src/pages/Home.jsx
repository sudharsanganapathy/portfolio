import { motion, useMotionValue, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Home() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { damping: 25, stiffness: 120 });
  const smoothY = useSpring(mouseY, { damping: 25, stiffness: 120 });

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const text = [
    "I'm",
    "Sudharsan",
    "—",
    "a",
    "Fullstack",
    "Developer",
    "focused",
    "on",
    "building",
    "high-performance",
    "applications",
    "with",
    "clean",
    "architecture",
    "and",
    "real-world",
    "impact."
  ];

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden flex items-center justify-center px-6">

      {/* 🌌 GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* 💡 CURSOR SPOTLIGHT */}
      <motion.div
        className="pointer-events-none fixed w-[400px] h-[400px] rounded-full bg-blue-500/20 blur-3xl"
        style={{
          left: smoothX,
          top: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* ✨ FLOATING ORBS */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full animate-pulse"></div>

      {/* 🔥 CONTENT */}
      <div className="relative z-10 text-center max-w-4xl">

        {/* TAG */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-blue-400 tracking-widest text-sm mb-4"
        >
          FULLSTACK DEVELOPER
        </motion.p>

        {/* HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold leading-tight mb-6"
        >
          Engineering{" "}
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent">
            scalable systems
          </span>
          <br />
          with precision & performance
        </motion.h1>

        {/* ✨ WORD-BY-WORD TEXT */}
        <motion.p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed flex flex-wrap justify-center gap-2">
          {text.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                delay: i * 0.05,
                duration: 0.4,
              }}
              className={`
                ${word === "Sudharsan" ? "text-white font-semibold" : ""}
                ${
                  word === "Fullstack" || word === "Developer"
                    ? "bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold"
                    : ""
                }
                ${
                  word.includes("high-performance") ||
                  word.includes("architecture")
                    ? "hover:text-white transition duration-300 cursor-pointer"
                    : ""
                }
              `}
            >
              {word}
            </motion.span>
          ))}
        </motion.p>

        {/* 🧲 BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <MagneticButton to="/projects" label="View Work" primary />
          <MagneticButton to="/contact" label="Hire Me" />
        </div>
      </div>

      {/* 👇 SCROLL */}
      <div className="absolute bottom-10 text-gray-400 animate-bounce text-sm">
        Scroll ↓
      </div>
    </div>
  );
}

/* 🧲 MAGNETIC BUTTON */
function MagneticButton({ to, label, primary }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.3);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.3);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ x, y }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="inline-block"
    >
      <Link
        to={to}
        className={`px-8 py-3 rounded-xl text-lg transition ${
          primary
            ? "bg-blue-500 hover:bg-blue-600 shadow-[0_0_30px_rgba(59,130,246,0.7)]"
            : "border border-white/20 hover:bg-white hover:text-black"
        }`}
      >
        {label}
      </Link>
    </motion.div>
  );
}