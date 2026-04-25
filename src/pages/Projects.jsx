import chatImg from "../assets/quick-chat.jpg";
import studentImg from "../assets/students.jpg";
import todoImg from "../assets/todo.jpg";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Real-Time Chat Application",
    desc: "Developed a scalable real-time chat platform with JWT authentication and WebSocket integration using Socket.io. Implemented private messaging, live user presence tracking, and optimized message delivery for low latency communication.",
    tech: ["React", "JavaScript", "Tailwind", "Node.js", "Express.js", "MongoDB", "Socket.io"],
    image: chatImg,
    live: "https://quickchat-realtime.vercel.app",
    code: "https://github.com/sudharsanganapathy/quickchat-fullstack"
  },
  {
    title: "Student Management System",
    desc: "Built a full-stack management system with secure authentication and role-based access control. Implemented CRUD operations and optimized backend APIs for efficient data handling and scalability.",
    tech: ["React", "Node.js", "Express.js", "SQL", "Tailwind"],
    image: studentImg,
    live: "https://sms-app.vercel.app",
    code: "https://github.com/sudharsanganapathy/VH-Q1-Spring-Application-Code"
  },
  {
    title: "Task Management Application",
    desc: "Designed a responsive task management app with dynamic filtering and persistent storage. Focused on performance optimization and clean UI using Angular and modern frontend practices.",
    tech: ["Angular", "TypeScript", "Tailwind", "Node.js", "Express.js", "MongoDB"],
    image: todoImg,
    live: "https://todo-angular-v4.vercel.app",
    code: "https://github.com/sudharsanganapathy/angular-todo-app"
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen px-6 py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white">

      {/* 🔥 Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold text-center mb-16"
      >
        Featured <span className="text-blue-400">Projects</span>
      </motion.h2>

      {/* 🔥 Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">

        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-lg hover:scale-[1.03] transition duration-500"
          >

            {/* 🔥 Image + Overlay */}
            <div className="relative overflow-hidden">

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover transform group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 flex items-center justify-center gap-4 
                bg-black/70 backdrop-blur-sm opacity-0 
                group-hover:opacity-100 transition duration-300
                pointer-events-none group-hover:pointer-events-auto"
              >
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                >
                  Live
                </a>

                <a
                  href={project.code}
                  target="_blank"
                  rel="noreferrer"
                  className="border px-4 py-2 rounded-lg hover:bg-white hover:text-black transition"
                >
                  Code
                </a>
              </div>
            </div>

            {/* 🔥 Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-blue-400">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {project.desc}
              </p>

              {/* 🔥 Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 bg-white/10 rounded-full hover:bg-blue-500 hover:text-white transition"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* 🔥 Glow Border */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none shadow-[0_0_40px_rgba(59,130,246,0.3)]"></div>

          </motion.div>
        ))}

      </div>
    </div>
  );
}