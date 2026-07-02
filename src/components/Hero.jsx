import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from "react-icons/fa";
import profile from "../assets/Simon (2).png";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white flex items-center pt-20 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span className="px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-sm font-medium text-cyan-300">
              👋 Bienvenue sur mon portfolio
            </span>
          </motion.div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-slate-100">Bonjour, je suis</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent mt-2">
              TANTELY Madie Simon
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-slate-400 mb-6">
            Développeur <span className="text-cyan-400">Web & Mobile</span>
          </h2>

          <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-xl">
            Je crée des applications modernes et performantes avec React, Django, Flutter et Node.js. Passionné par le design et l'expérience utilisateur.
          </p>

          <motion.div 
            className="flex flex-wrap gap-4 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-cyan-500/50">
              Voir mes projets
              <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>

            <button className="px-8 py-4 border border-slate-600 rounded-lg font-semibold hover:bg-slate-800 hover:border-slate-500 transition-all duration-300">
              Télécharger CV
            </button>
          </motion.div>

          <motion.div 
            className="flex gap-5 text-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a href="#" className="p-3 bg-slate-800 hover:bg-cyan-500/20 hover:text-cyan-400 rounded-lg transition-all duration-300 border border-slate-700 hover:border-cyan-500/50">
              <FaGithub />
            </a>
            <a href="#" className="p-3 bg-slate-800 hover:bg-cyan-500/20 hover:text-cyan-400 rounded-lg transition-all duration-300 border border-slate-700 hover:border-cyan-500/50">
              <FaLinkedin />
            </a>
            <a href="#" className="p-3 bg-slate-800 hover:bg-cyan-500/20 hover:text-cyan-400 rounded-lg transition-all duration-300 border border-slate-700 hover:border-cyan-500/50">
              <FaEnvelope />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <img
            src={profile}
            alt="Simon"
            className="w-80 h-80 rounded-full border-4 border-cyan-500/30 shadow-2xl relative object-cover hover:border-cyan-400 transition-all duration-300"
          />
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;