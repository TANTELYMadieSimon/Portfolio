import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope, FaHeart, FaArrowUp, FaHtml5, FaCss3Alt, FaBootstrap, FaPhp, FaPython, FaNodeJs, FaAndroid, FaReact } from "react-icons/fa";
import { SiJavascript, SiNextdotjs, SiTailwindcss, SiDjango, SiPostgresql, SiGit } from "react-icons/si";
import { motion } from "framer-motion";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const techLogos = [
    { icon: <FaHtml5 className="text-3xl" />, name: "HTML5", color: "text-orange-500" },
    { icon: <FaCss3Alt className="text-3xl" />, name: "CSS3", color: "text-blue-500" },
    { icon: <SiJavascript className="text-3xl" />, name: "JavaScript", color: "text-yellow-400" },
    { icon: <FaReact className="text-3xl" />, name: "React", color: "text-cyan-400" },
    { icon: <SiNextdotjs className="text-3xl" />, name: "Next.js", color: "text-white" },
    { icon: <SiTailwindcss className="text-3xl" />, name: "Tailwind", color: "text-cyan-300" },
    { icon: <FaBootstrap className="text-3xl" />, name: "Bootstrap", color: "text-purple-400" },
    { icon: <FaPhp className="text-3xl" />, name: "PHP", color: "text-indigo-400" },
    { icon: <FaPython className="text-3xl" />, name: "Python", color: "text-yellow-300" },
    { icon: <SiDjango className="text-3xl" />, name: "Django", color: "text-green-400" },
    { icon: <FaNodeJs className="text-3xl" />, name: "Node.js", color: "text-green-500" },
    { icon: <FaAndroid className="text-3xl" />, name: "Android", color: "text-emerald-400" },
    { icon: <SiPostgresql className="text-3xl" />, name: "PostgreSQL", color: "text-blue-400" },
    { icon: <SiGit className="text-3xl" />, name: "Git", color: "text-orange-400" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 text-white pt-16 pb-8 overflow-hidden border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
              Simon.dev
            </h2>
            <p className="text-slate-400">Développeur Web & Mobile passionné par la création d'applications modernes.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <h3 className="font-semibold text-lg">Navigation rapide</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">Accueil</a></li>
              <li><a href="#about" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">À propos</a></li>
              <li><a href="#projects" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">Projets</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">Contact</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <h3 className="font-semibold text-lg">Me suivre</h3>
            <div className="flex gap-3">
              <a href="https://github.com/TANTELYMadieSimon" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800/50 hover:bg-cyan-500/20 hover:border-cyan-500/50 border border-slate-700/50 rounded-lg transition-all duration-300 hover:text-cyan-400">
                <FaGithub className="text-xl" />
              </a>
              <a href="https://www.linkedin.com/in/simon-madie-a0b752379/" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800/50 hover:bg-cyan-500/20 hover:border-cyan-500/50 border border-slate-700/50 rounded-lg transition-all duration-300 hover:text-cyan-400">
                <FaLinkedin className="text-xl" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61590661097546" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800/50 hover:bg-cyan-500/20 hover:border-cyan-500/50 border border-slate-700/50 rounded-lg transition-all duration-300 hover:text-cyan-400">
                <FaFacebook className="text-xl" />
              </a>
              <a href="#contact" className="p-3 bg-slate-800/50 hover:bg-cyan-500/20 hover:border-cyan-500/50 border border-slate-700/50 rounded-lg transition-all duration-300 hover:text-cyan-400">
                <FaEnvelope className="text-xl" />
              </a>
            </div>
          </motion.div>

        </div>

        <div className="relative w-full overflow-hidden py-8 border-t border-b border-slate-800/50 mb-8">
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-slate-950 to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-slate-950 to-transparent z-10"></div>
          
          <motion.div
            className="flex gap-12 whitespace-nowrap"
            animate={{ x: [0, -1920] }}
            transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 30, ease: "linear" } }}
          >
            {[...techLogos, ...techLogos].map((tech, index) => (
              <div key={index} className="flex flex-col items-center gap-2 group cursor-default">
                <div className={`${tech.color} opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110`}>
                  {tech.icon}
                </div>
                <span className="text-xs text-slate-500 group-hover:text-slate-300 transition-colors duration-300">
                  {tech.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <p className="text-slate-500 text-center md:text-left flex items-center justify-center gap-2">
            © {new Date().getFullYear()} Simon.dev - Créé avec <FaHeart className="text-red-500 text-sm" /> Tous droits réservés
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/40 hover:to-blue-500/40 border border-cyan-500/50 rounded-lg transition-all duration-300 text-cyan-400 hover:text-cyan-300"
          >
            Retour en haut
            <FaArrowUp className="text-sm" />
          </motion.button>
        </motion.div>

      </div>
    </footer>
  );
}

export default Footer;