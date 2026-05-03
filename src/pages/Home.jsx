import { motion, useMotionValue, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Home() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { damping: 25, stiffness: 120 });
  const smoothY = useSpring(mouseY, { damping: 25, stiffness: 120 });

  const contentX = useSpring(mouseX, { damping: 20, stiffness: 100 });
  const contentY = useSpring(mouseY, { damping: 20, stiffness: 100 });

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

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden flex items-center justify-center px-6">

      {/* 🌌 GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-transparent blur-3xl opacity-30 animate-pulse"></div>

      {/* 💡 CURSOR LIGHT */}
      <motion.div
        className="pointer-events-none fixed w-[400px] h-[400px] rounded-full bg-blue-500/20 blur-3xl"
        style={{
          left: smoothX,
          top: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* ✨ ORBS */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full animate-pulse"></div>

      {/* 🔥 CONTENT */}
      <div
        className="relative z-10 text-center max-w-4xl"
        style={{
          transform: `translate(${contentX.get() * 0.01}px, ${
            contentY.get() * 0.01
          }px)`
        }}
      >

        {/* TAG */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-blue-400 tracking-widest text-sm mb-4"
        >
          FULLSTACK DEVELOPER
        </motion.p>

        {/* 💥 HERO HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold leading-tight mb-6"
        >
          Designing{" "}
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent">
            resilient, scalable systems
          </span>
          <br />
          that deliver at scale.
        </motion.h1>

        {/* ✨ TEXT */}
        <motion.p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed flex flex-wrap justify-center gap-2">
          {text.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              whileHover={{
                scale: 1.12,
                color: "#fff",
                textShadow: "0px 0px 10px rgba(59,130,246,0.7)"
              }}
              className={`
                ${word === "Sudharsan" ? "text-white font-bold" : ""}
                ${
                  word === "Fullstack" || word === "Developer"
                    ? "bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold"
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
          <MagneticButton to="/projects" label="Explore Projects" primary />
          <MagneticButton to="/contact" label="Let’s Work Together" />
        </div>
      </div>
    </div>
  );
}

/* 🧲 BUTTON */
function MagneticButton({ to, label, primary }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.35);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.35);
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
      whileTap={{ scale: 0.92 }}
      className="inline-block"
    >
      <Link
        to={to}
        className={`relative px-8 py-3 rounded-xl text-lg font-semibold overflow-hidden group transition-all duration-300 ${
          primary
            ? "bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 text-white shadow-[0_0_25px_rgba(59,130,246,0.6)]"
            : "border border-white/20 text-white backdrop-blur-md"
        }`}
      >
        <span className="relative z-10">{label}</span>

        {/* shine */}
        <span className="absolute inset-0 overflow-hidden rounded-xl">
          <span className="absolute -left-1/2 top-0 h-full w-1/2 bg-white/20 skew-x-[-20deg] blur-md opacity-0 group-hover:opacity-100 group-hover:animate-[shine_0.8s_ease]"></span>
        </span>

        {/* glow */}
        <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 blur-2xl bg-blue-400/20"></span>

        {/* border */}
        <span className="absolute inset-0 rounded-xl border border-white/10 group-hover:border-blue-400/40 transition"></span>
      </Link>
    </motion.div>
  );
}