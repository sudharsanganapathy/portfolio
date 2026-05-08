import chatImg from "../assets/chatapp-v1.webp";
import studentImg from "../assets/students.jpg";
import todoImg from "../assets/taskmagagement.avif";
import portfolioImg from "../assets/portfolio.jpg";

import { motion } from "framer-motion";

const featuredProjects = [
  {
    title: "Real-Time Chat Platform",
    desc: "Built a scalable real-time communication platform with JWT authentication, private messaging, live user presence tracking, and optimized WebSocket architecture using Socket.io.",
    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "Socket.io",
      "Express.js",
      "Tailwind",
    ],
    image: chatImg,
    live: "https://quickchat-realtime.vercel.app",
    code: "https://github.com/sudharsanganapathy/quickchat-fullstack",
  },

  {
    title: "Developer Portfolio",
    desc: "Designed and developed a modern portfolio with smooth motion interactions, responsive architecture, and integrated EmailJS workflows.",
    tech: [
      "React",
      "Framer Motion",
      "Tailwind",
      "EmailJS",
      "Vercel",
    ],
    image: portfolioImg,
    live: "https://sudharsan-dev.vercel.app",
    code: "https://github.com/sudharsanganapathy/portfolio",
  },
];

const otherProjects = [
  {
    title: "Student Management System",
    desc: "Full-stack management platform with secure authentication, CRUD operations, and optimized backend architecture.",
    tech: ["React", "Node.js", "Express.js", "SQL"],
    image: studentImg,
    live: "https://project-mgt-ecru.vercel.app",
    code: "https://github.com/sudharsanganapathy/VH-Q1-Spring-Application-Code",
  },

  {
    title: "Task Management Application",
    desc: "Responsive productivity application with dynamic filtering, persistent storage, and clean UI architecture.",
    tech: ["Angular", "TypeScript", "MongoDB", "Node.js", "Express.js", "Tailwind"],
    image: todoImg,
    live: "https://todo-angular-v4.vercel.app",
    code: "https://github.com/sudharsanganapathy/angular-todo-app",
  },
];

export default function Projects() {
  return (
    <div className="relative min-h-screen bg-black text-white px-6 py-24 overflow-hidden">

      {/* GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* TOP GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-500/10 blur-3xl rounded-full" />

      {/* HEADING */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 max-w-4xl mx-auto text-center mb-24"
      >
        <p className="text-sm tracking-[0.3em] uppercase text-blue-400 mb-5">
          Selected Work
        </p>

        <h2 className="text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
          Projects built with
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {" "}performance in mind
          </span>
        </h2>

        <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
          A collection of full-stack applications focused on scalability,
          clean architecture, and modern user experiences.
        </p>
      </motion.div>

      {/* FEATURED PROJECTS */}
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 mb-24">

        {featuredProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="
              group relative overflow-hidden rounded-3xl
              border border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
              transition-all duration-300 ease-out
              hover:-translate-y-1
              hover:border-white/20
              hover:bg-white/[0.05]
            "
          >

            {/* BORDER GLOW */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none border border-blue-400/20" />

            {/* IMAGE */}
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="
                  w-full h-[300px] object-cover
                  transition-all duration-700 ease-out
                  group-hover:scale-[1.02]
                  group-hover:brightness-110
                "
              />
            </div>

            {/* CONTENT */}
            <div className="p-8">

              <p className="text-sm text-blue-400 uppercase tracking-[0.2em] mb-4">
                Featured Project
              </p>

              <h3 className="text-3xl font-semibold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 leading-relaxed mb-6">
                {project.desc}
              </p>

              {/* TECH STACK */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="
                      px-3 py-1.5 rounded-full
                      border border-white/10
                      bg-white/[0.03]
                      text-sm text-gray-300
                      transition-all duration-300
                      hover:border-white/20
                      hover:bg-white/[0.05]
                      hover:-translate-y-0.5
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* BUTTONS */}
              <div className="flex gap-4">

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    group relative overflow-hidden
                    px-5 py-2.5 rounded-xl
                    bg-white text-black
                    font-medium text-sm
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:scale-[1.03]
                    hover:shadow-[0_8px_30px_rgba(255,255,255,0.18)]
                    active:scale-[0.98]
                  "
                >
                  Live Demo
                </a>

                <a
                  href={project.code}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    group relative overflow-hidden
                    px-5 py-2.5 rounded-xl
                    border border-white/10
                    bg-white/[0.02]
                    text-white
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:scale-[1.03]
                    hover:border-white/30
                    hover:bg-white/[0.05]
                    hover:shadow-[0_8px_30px_rgba(59,130,246,0.12)]
                    active:scale-[0.98]
                  "
                >
                  Source Code
                </a>

              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* OTHER PROJECTS */}
      <div className="relative z-10 max-w-7xl mx-auto">

        <h3 className="text-3xl font-semibold mb-10">
          More Projects
        </h3>

        <div className="grid md:grid-cols-2 gap-8">

          {otherProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="
                group relative overflow-hidden rounded-3xl
                border border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                transition-all duration-300
                hover:-translate-y-1
                hover:border-white/20
                hover:bg-white/[0.05]
              "
            >

              {/* BORDER GLOW */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none border border-blue-400/20" />

              {/* IMAGE */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full h-60 object-cover
                    transition-all duration-700 ease-out
                    group-hover:scale-[1.02]
                    group-hover:brightness-110
                  "
                />
              </div>

              {/* CONTENT */}
              <div className="p-7">

                <h4 className="text-2xl font-semibold mb-3">
                  {project.title}
                </h4>

                <p className="text-gray-400 leading-relaxed mb-6">
                  {project.desc}
                </p>

                {/* TECH */}
                <div className="flex flex-wrap gap-2 mb-7">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="
                        px-3 py-1 rounded-full
                        text-xs
                        border border-white/10
                        bg-white/[0.03]
                        text-gray-300
                        transition-all duration-300
                        hover:border-white/20
                        hover:bg-white/[0.05]
                        hover:-translate-y-0.5
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

               {/* BUTTONS */}
                <div className="flex gap-4 mt-7">

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      relative overflow-hidden group
                      px-5 py-2.5 rounded-xl
                      bg-white text-black
                      text-sm font-medium
                      transition-all duration-300
                      hover:-translate-y-0.5
                      hover:scale-[1.03]
                      hover:shadow-[0_8px_30px_rgba(255,255,255,0.18)]
                      active:scale-[0.98]
                    "
                  >
                    <span className="relative z-10">Live Demo</span>

                    {/* shine */}
                    <span className="absolute inset-0 overflow-hidden rounded-xl">
                      <span className="absolute -left-1/2 top-0 h-full w-1/2 bg-white/20 skew-x-[-20deg] opacity-0 group-hover:opacity-100 group-hover:animate-[shine_0.8s_ease]"></span>
                    </span>
                  </a>

                  <a
                    href={project.code}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      relative overflow-hidden group
                      px-5 py-2.5 rounded-xl
                      border border-white/10
                      bg-white/[0.02]
                      text-white text-sm font-medium
                      transition-all duration-300
                      hover:-translate-y-0.5
                      hover:scale-[1.03]
                      hover:border-white/30
                      hover:bg-white/[0.05]
                      hover:shadow-[0_8px_30px_rgba(59,130,246,0.12)]
                      active:scale-[0.98]
                    "
                  >
                    <span className="relative z-10">Source Code</span>

                    {/* shine */}
                    <span className="absolute inset-0 overflow-hidden rounded-xl">
                      <span className="absolute -left-1/2 top-0 h-full w-1/2 bg-white/20 skew-x-[-20deg] opacity-0 group-hover:opacity-100 group-hover:animate-[shine_0.8s_ease]"></span>
                    </span>
                  </a>

                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </div>
  );
}