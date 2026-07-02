import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-md text-white shadow-xl z-50 border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
          Simon.dev
        </a>

        <ul className="hidden md:flex gap-8 font-medium">
          <li><a href="#home" className="text-slate-300 hover:text-cyan-400 transition-colors duration-300">Accueil</a></li>
          <li><a href="#about" className="text-slate-300 hover:text-cyan-400 transition-colors duration-300">À propos</a></li>
          <li><a href="#skills" className="text-slate-300 hover:text-cyan-400 transition-colors duration-300">Compétences</a></li>
          <li><a href="#projects" className="text-slate-300 hover:text-cyan-400 transition-colors duration-300">Projets</a></li>
          <li><a href="#contact" className="text-slate-300 hover:text-cyan-400 transition-colors duration-300">Contact</a></li>
        </ul>

        <div className="hidden md:flex gap-4 items-center">
          <a href="#" className="p-2 hover:text-cyan-400 transition-colors duration-300">
            <FaGithub className="text-lg" />
          </a>
          <a href="#" className="p-2 hover:text-cyan-400 transition-colors duration-300">
            <FaLinkedin className="text-lg" />
          </a>
          <a href="#contact" className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 font-medium">
            Contact
          </a>
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-800">
          <ul className="flex flex-col gap-4 px-6 py-6">
            <li><a href="#home" className="text-slate-300 hover:text-cyan-400 transition-colors">Accueil</a></li>
            <li><a href="#about" className="text-slate-300 hover:text-cyan-400 transition-colors">À propos</a></li>
            <li><a href="#skills" className="text-slate-300 hover:text-cyan-400 transition-colors">Compétences</a></li>
            <li><a href="#projects" className="text-slate-300 hover:text-cyan-400 transition-colors">Projets</a></li>
            <li><a href="#contact" className="text-slate-300 hover:text-cyan-400 transition-colors">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
