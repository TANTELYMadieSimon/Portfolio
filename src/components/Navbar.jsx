import { FaGithub, FaLinkedin, FaFacebook, FaBars, FaHome, FaUser, FaCode, FaFolderOpen, FaEnvelope } from "react-icons/fa";
import { useState, useEffect } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Détecter le scroll pour changer l'ombre
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  // Liens de navigation (utilisés pour desktop ET mobile)
  const navLinks = [
    { href: "#home", label: "Accueil", icon: <FaHome /> },
    { href: "#about", label: "À propos", icon: <FaUser /> },
    { href: "#skills", label: "Compétences", icon: <FaCode /> },
    { href: "#projects", label: "Projets", icon: <FaFolderOpen /> },
    { href: "#contact", label: "Contact", icon: <FaEnvelope /> },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-slate-950/90 backdrop-blur-xl shadow-2xl shadow-cyan-500/10"
          : "bg-slate-950/80 backdrop-blur-md shadow-lg shadow-slate-900/50"
      } border-b border-slate-800/50`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo avec box shadow dynamique */}
        <a
          href="#home"
          className={`text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent transition-all duration-500 hover:scale-105 ${
            scrolled
              ? "drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]"
              : "drop-shadow-[0_0_8px_rgba(34,211,238,0.3)]"
          } hover:drop-shadow-[0_0_25px_rgba(34,211,238,0.8)]`}
        >
          Simon.dev
        </a>

        {/* Liens desktop - SANS icônes */}
        <ul className="hidden md:flex gap-8 font-medium">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-slate-300 hover:text-cyan-400 transition-colors duration-300 py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Icônes sociales + bouton Contact (desktop) */}
        <div className="hidden md:flex gap-3 items-center">
          <a href="https://github.com/TANTELYMadieSimon" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2.5 bg-slate-800/60 hover:bg-cyan-500/20 hover:text-cyan-400 rounded-xl transition-all duration-300 border border-slate-700/50 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/simon-madie-a0b752379/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2.5 bg-slate-800/60 hover:bg-cyan-500/20 hover:text-cyan-400 rounded-xl transition-all duration-300 border border-slate-700/50 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20">
            <FaLinkedin />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61590661097546" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="p-2.5 bg-slate-800/60 hover:bg-cyan-500/20 hover:text-cyan-400 rounded-xl transition-all duration-300 border border-slate-700/50 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20">
            <FaFacebook />
          </a>
          <a href="#contact" className="ml-2 px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-xl font-medium transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/50 hover:scale-105">
            Contact
          </a>
        </div>

        {/* Bouton menu mobile */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2xl focus:outline-none text-slate-300 hover:text-cyan-400 transition-colors p-2" aria-label="Menu">
          <FaBars />
        </button>
      </div>

      {/* Menu mobile - AVEC icônes React */}
      {isOpen && (
        <div className="md:hidden bg-slate-900/98 backdrop-blur-xl border-t border-slate-800/50 shadow-2xl">
          <ul className="flex flex-col gap-2 px-6 py-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 px-4 py-3 rounded-xl transition-all duration-300"
                >
                  <span className="text-cyan-400 text-lg">{link.icon}</span>
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
            
            {/* Icônes sociales en mobile */}
            <div className="flex gap-3 pt-4 border-t border-slate-800/50 mt-2">
              <a href="https://github.com/TANTELYMadieSimon" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800/50 hover:bg-cyan-500/20 hover:text-cyan-400 rounded-xl transition-all duration-300 border border-slate-700/50">
                <FaGithub className="text-lg" />
              </a>
              <a href="https://www.linkedin.com/in/simon-madie-a0b752379/" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800/50 hover:bg-cyan-500/20 hover:text-cyan-400 rounded-xl transition-all duration-300 border border-slate-700/50">
                <FaLinkedin className="text-lg" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61590661097546" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800/50 hover:bg-cyan-500/20 hover:text-cyan-400 rounded-xl transition-all duration-300 border border-slate-700/50">
                <FaFacebook className="text-lg" />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;