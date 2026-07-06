import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope, FaArrowRight } from "react-icons/fa";
import profile from "../assets/Simon (2).png";
import { useState, useEffect } from "react";

function Hero() {
  const texts = [
    "Full Stack Developer",
    "Web Developer",
    "DevOps Engineer",
  ];

  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const currentText = texts[textIndex];
    const speed = isDeleting ? 60 : 120;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentText.length) {
          setDisplayText(currentText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2500);
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(currentText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setTimeout(() => {
            setIsDeleting(false);
            setTextIndex((textIndex + 1) % texts.length);
          }, 500);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts]);

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 text-white flex items-center pt-20 overflow-hidden relative"
    >
      {/* Cercles décoratifs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 right-1/4 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Partie gauche */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-slate-300 text-2xl md:text-3xl font-normal mb-2">
              Bonjour, je suis
            </span>
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              TANTELY Madie Simon
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold mb-6 h-10 flex items-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {displayText}
            </span>
            <span className="animate-pulse text-cyan-400 font-light ml-0.5 text-3xl">|</span>
          </h2>

          <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-xl">
            Je crée des applications modernes et performantes avec React, Django, 
            Android Studio et Node.js. Passionné par le design et l'expérience utilisateur.
          </p>

          <motion.div
            className="flex flex-wrap gap-4 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <a
              href="#projects"
              className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/50"
            >
              Voir mes projets
              <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
            </a>

            <button className="px-8 py-4 border border-slate-600 rounded-xl font-semibold hover:bg-slate-800/50 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm">
              Télécharger CV
            </button>
          </motion.div>

          {/* Réseaux sociaux */}
          <motion.div
            className="flex gap-4 text-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* GitHub - externe */}
            <a
              href="https://github.com/TANTELYMadieSimon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-3 bg-slate-800/50 hover:bg-cyan-500/20 hover:text-cyan-400 rounded-xl transition-all duration-300 border border-slate-700/50 hover:border-cyan-500/50 backdrop-blur-sm"
            >
              <FaGithub />
            </a>

            {/* LinkedIn - externe */}
            <a
              href="https://www.linkedin.com/in/simon-madie-a0b752379/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-3 bg-slate-800/50 hover:bg-cyan-500/20 hover:text-cyan-400 rounded-xl transition-all duration-300 border border-slate-700/50 hover:border-cyan-500/50 backdrop-blur-sm"
            >
              <FaLinkedin />
            </a>

            {/* Facebook - externe */}
            <a
              href="https://www.facebook.com/profile.php?id=61590661097546"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="p-3 bg-slate-800/50 hover:bg-cyan-500/20 hover:text-cyan-400 rounded-xl transition-all duration-300 border border-slate-700/50 hover:border-cyan-500/50 backdrop-blur-sm"
            >
              <FaFacebook />
            </a>

            {/* Email - même page (SANS target="_blank") */}
            <a
              href="#contact"
              aria-label="Contact"
              className="p-3 bg-slate-800/50 hover:bg-cyan-500/20 hover:text-cyan-400 rounded-xl transition-all duration-300 border border-slate-700/50 hover:border-cyan-500/50 backdrop-blur-sm"
            >
              <FaEnvelope />
            </a>
          </motion.div>
        </motion.div>

        {/* Partie droite : Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center relative"
        >
          <div className="absolute w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-2xl"></div>
          <div className="absolute w-80 h-80 rounded-full border-2 border-cyan-500/20 animate-spin-slow"></div>
          
          <img
            src={profile}
            alt="Simon"
            className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-full border-4 border-cyan-500/30 shadow-2xl shadow-cyan-500/20 hover:border-cyan-400/50 transition-all duration-500 relative z-10"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;