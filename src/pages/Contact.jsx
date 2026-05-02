import resume from "../assets/sudharsan_resume.pdf";
import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    const promise = emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      e.target,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    toast.promise(promise, {
      loading: "Sending message...",
      success: "Message sent successfully 🚀",
      error: "Failed to send message ❌",
    });

    promise
      .then(() => {
        setLoading(false);
        e.target.reset();
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <div className="min-h-screen px-6 py-24 bg-black text-white relative overflow-hidden">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full" />
      </div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 text-4xl md:text-6xl font-bold text-center mb-16"
      >
        Get In <span className="text-blue-400">Touch</span>
      </motion.h2>

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="mb-8">
  <p className="text-gray-400 text-lg leading-relaxed">
    I’m always excited to work on{" "}
    <span className="text-white font-medium hover:text-blue-400 transition">
      high-impact products
    </span>{" "}
    and collaborate with teams that value{" "}
    <span className="text-white font-medium hover:text-purple-400 transition">
      scalability, performance, and clean architecture
    </span>.
  </p>

  <p className="text-gray-500 mt-4">
    If you're building something meaningful, let's connect and make it exceptional.
  </p>
</div>

{/* 🔥 VALUE BLOCKS */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">

  <div className="p-4 rounded-xl border border-white/10 bg-white/5 hover:border-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition">
     Fast Response  
    <p className="text-gray-400 mt-1">Replies within 24 hours</p>
  </div>

  <div className="p-4 rounded-xl border border-white/10 bg-white/5 hover:border-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition">
     Open to Work  
    <p className="text-gray-400 mt-1">Available for freelance & full-time</p>
  </div>

  <div className="p-4 rounded-xl border border-white/10 bg-white/5 hover:border-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition">
     Problem Solver  
    <p className="text-gray-400 mt-1">Focused on real-world solutions</p>
  </div>

  <div className="p-4 rounded-xl border border-white/10 bg-white/5 hover:border-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition">
     Remote Friendly  
    <p className="text-gray-400 mt-1">Comfortable with global teams</p>
  </div>

</div>

          <div className="flex gap-4 mt-6">
            <a href="https://github.com/" target="_blank"
              className="px-4 py-2 border border-white/20 rounded-lg hover:bg-white hover:text-black transition">
              GitHub
            </a>
            <a href="https://linkedin.com/in/sudharsan2410" target="_blank"
              className="px-4 py-2 border border-white/20 rounded-lg hover:bg-white hover:text-black transition">
              LinkedIn
            </a>
            <a href={resume} target="_blank"
              className="px-4 py-2 border border-white/20 rounded-lg hover:bg-white hover:text-black transition">
              Resume
            </a>
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.form
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative group bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl space-y-6 shadow-[0_0_40px_rgba(59,130,246,0.15)]"
        >

          {/* Inputs */}
          <Input name="name" type="text" placeholder="Your Name" />
          <Input name="email" type="email" placeholder="Your Email" />
          <Input name="message" textarea placeholder="Your Message" />

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg font-semibold transition 
            bg-gradient-to-r from-blue-500 to-purple-500 
            hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]
            disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

        </motion.form>
      </div>
    </div>
  );
}

/* 🔥 PREMIUM INPUT COMPONENT */
function Input({ name, type = "text", placeholder, textarea }) {
  const base =
    "w-full px-4 py-3 rounded-lg bg-transparent border border-white/10 outline-none transition focus:border-blue-400 focus:shadow-[0_0_15px_rgba(59,130,246,0.3)]";

  if (textarea) {
    return (
      <textarea
        name={name}
        rows="4"
        required
        placeholder={placeholder}
        className={base}
      />
    );
  }

  return (
    <input
      type={type}
      name={name}
      required
      placeholder={placeholder}
      className={base}
    />
  );
}