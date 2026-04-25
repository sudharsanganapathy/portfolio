import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="min-h-screen px-6 py-24 bg-gradient-to-b from-black via-gray-900 to-black text-white">

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-bold text-center mb-16"
      >
        Get In <span className="text-blue-400">Touch</span>
      </motion.h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT - Info */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h3 className="text-2xl font-semibold mb-4">
            Let's build something great...
          </h3>

          <p className="text-gray-400 mb-6 leading-relaxed">
            I'm open to opportunities, collaborations, and interesting projects. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>

          {/* Contact Info */}
          <div className="space-y-4 text-gray-300">
            <p>📧 sudharsanganapathy24@gmail.com</p>
            <p>📍 Bengaluru, Karnataka</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-6">
            <a
              href="https://github.com/"
              target="_blank"
              className="px-4 py-2 border rounded-lg hover:bg-white hover:text-black transition"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/sudharsan2410"
              target="_blank"
              className="px-4 py-2 border rounded-lg hover:bg-white hover:text-black transition"
            >
              LinkedIn
            </a>
            <a
              href="Sudharsan_G_Resume.pdf"
              target="_blank"
              className="px-4 py-2 border rounded-lg hover:bg-white hover:text-black transition"
            >
              Resume
            </a>              
          </div>
        </motion.div>

        {/* RIGHT - Form */}
        <motion.form
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl space-y-6"
        >
          {/* Name */}
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-lg bg-transparent border border-white/10 focus:border-blue-400 outline-none transition"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-lg bg-transparent border border-white/10 focus:border-blue-400 outline-none transition"
          />

          {/* Message */}
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full px-4 py-3 rounded-lg bg-transparent border border-white/10 focus:border-blue-400 outline-none transition"
          ></textarea>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 py-3 rounded-lg hover:bg-blue-600 transition font-semibold"
          >
            Send Message
          </button>
        </motion.form>

      </div>
    </div>
  );
}