import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="relative min-h-screen bg-black text-white px-6 py-24 overflow-hidden">

      {/* 🔥 Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent blur-3xl opacity-30"></div>

      {/* 🔥 HERO */}
      <div className="relative max-w-5xl mx-auto text-center mb-24">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold leading-tight mb-6"
        >
          Not just building apps —  
          <br />
          I build{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            scalable digital systems
          </span>
        </motion.h1>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Fullstack Developer focused on performance, clean architecture, and
          delivering real-world impact through modern web technologies.
        </p>
      </div>

      {/* 🔥 MAIN SECTION */}
      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE */}
        <motion.div
  initial={{ opacity: 0, x: -60 }}
  animate={{ opacity: 1, x: 0 }}
  className="flex justify-center"
>
  <div className="relative group cursor-pointer">

    {/* Glow Background */}
    <div className="absolute inset-0 rounded-2xl bg-blue-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

    {/* Image */}
    <img
      src="/1000057232.png"
      alt="profile"
      className="relative w-80 h-80 object-cover object-top rounded-2xl border border-white/10 
      transition duration-500 group-hover:scale-105 group-hover:rotate-1"
    />

    {/* Border Glow */}
    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 
      transition duration-500 shadow-[0_0_50px_rgba(59,130,246,0.6)]"></div>

  </div>
</motion.div>

        {/* RIGHT STORY */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-2xl font-semibold mb-4">
            I'm <span className="text-blue-400">Sudharsan</span>
          </h2>

          <p className="text-gray-400 mb-6 leading-relaxed">
            My journey started with curiosity about how the web works. That curiosity
            evolved into building real-world applications with a strong focus on
            performance and scalability.
          </p>

          <p className="text-gray-400 mb-6 leading-relaxed">
            I don't just build UIs — I design systems that are efficient,
            maintainable, and built for growth.
          </p>

          {/* 🔥 SKILLS (UPGRADED) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React.js",
              "Node.js",
              "Express.js",
              "MongoDB",
              "SQL",
              "Java",
            ].map((skill, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.08 }}
                className="group relative p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-lg text-center overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl"></div>

                <span className="relative text-sm text-gray-300 group-hover:text-white">
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* 🔥 STATS (UPGRADED VISUAL) */}
      <div className="relative max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mt-28 text-center">

        {[
          { num: "5+", label: "Projects Built" },
          { num: "5+", label: "Technologies" },
          { num: "70+", label: "DSA Problems" },
          { num: "1+", label: "Years Experience" },
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1 }}
            className="relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg overflow-hidden"
          >
            <div className="absolute inset-0 opacity-0 hover:opacity-100 transition bg-blue-500/10 blur-xl"></div>

            <h3 className="relative text-3xl font-bold text-blue-400 mb-2">
              {item.num}
            </h3>
            <p className="relative text-gray-400 text-sm">{item.label}</p>
          </motion.div>
        ))}

      </div>

      {/* 🔥 TIMELINE (CLEANER + PREMIUM) */}
  <div className="max-w-5xl mx-auto mt-32 relative">

  <h2 className="text-3xl md:text-4xl font-bold text-center mb-20">
    My <span className="text-blue-400">Journey</span>
  </h2>

  {/* Center Line */}
  <div className="absolute left-1/2 top-28 transform -translate-x-1/2 w-[2px] h-[85%] bg-white/10"></div>

  <div className="space-y-20">

    {[
      {
        title: "Started Web Development",
        desc: "Built strong fundamentals in HTML, CSS, and JavaScript while understanding how the web works internally.",
      },
      {
        title: "Frontend with React",
        desc: "Developed scalable frontend applications using React with reusable components and API integration.",
      },
      {
        title: "Full Stack Development",
        desc: "Expanded into backend systems using Node.js, Express, and MongoDB, building complete applications.",
      },
    ].map((item, i) => (
      <div
        key={i}
        className={`relative flex flex-col md:flex-row items-center ${
          i % 2 === 0 ? "md:flex-row-reverse" : ""
        }`}
      >

        {/* 🔵 Animated Dot */}
        <div className="absolute left-1/2 transform -translate-x-1/2">

          <div className="w-4 h-4 bg-blue-400 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.9)]"></div>

          {/* Pulse Ring */}
          <div className="absolute inset-0 w-4 h-4 rounded-full bg-blue-400 animate-ping opacity-30"></div>

        </div>

        {/* 💎 Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 p-6"
        >

          <div className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-lg transition duration-300 overflow-hidden">

            {/* Glow Layer */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl"></div>

            {/* Content */}
            <div className="relative">
              <h3 className="text-xl font-semibold mb-2 text-blue-400">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>

          </div>

        </motion.div>

      </div>
    ))}

  </div>
</div>

    </div>
  );
}