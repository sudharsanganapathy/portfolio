import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-black/80 backdrop-blur-lg shadow-lg border-b border-white/10"
            : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <h1 className="text-xl font-bold">
          Sudharsan<span className="text-blue-400">.</span>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <NavItem to="/" label="Home" />
          <NavItem to="/about" label="About" />
          <NavItem to="/projects" label="Projects" />
          <NavItem to="/contact" label="Contact" />
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <div className="space-y-1">
              <span className="block w-6 h-[2px] bg-white"></span>
              <span className="block w-6 h-[2px] bg-white"></span>
              <span className="block w-6 h-[2px] bg-white"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: -300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -300, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/95 backdrop-blur-lg px-6 py-6 space-y-6 text-center"
          >
            <NavItem to="/" label="Home" onClick={() => setMenuOpen(false)} />
            <NavItem to="/about" label="About" onClick={() => setMenuOpen(false)} />
            <NavItem to="/projects" label="Projects" onClick={() => setMenuOpen(false)} />
            <NavItem to="/contact" label="Contact" onClick={() => setMenuOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function NavItem({ to, label, onClick }) {
  return (
    <NavLink to={to} onClick={onClick} className="relative group block">
      {({ isActive }) => (
        <>
          <span className={isActive ? "text-blue-400" : "text-gray-300"}>
            {label}
          </span>

          {/* Underline */}
          <span
            className={`
              absolute left-0 -bottom-1 h-[2px] bg-blue-400 transition-all duration-300
              ${isActive ? "w-full" : "w-0 group-hover:w-full"}
            `}
          ></span>
        </>
      )}
    </NavLink>
  );
}