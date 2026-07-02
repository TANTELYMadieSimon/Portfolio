import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-white py-16">
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
              <a href="#" className="p-3 bg-slate-800 hover:bg-cyan-500/20 hover:border-cyan-500/50 border border-slate-700 rounded-lg transition-all duration-300 hover:text-cyan-400">
                <FaGithub className="text-lg" />
              </a>
              <a href="#" className="p-3 bg-slate-800 hover:bg-cyan-500/20 hover:border-cyan-500/50 border border-slate-700 rounded-lg transition-all duration-300 hover:text-cyan-400">
                <FaLinkedin className="text-lg" />
              </a>
              <a href="#" className="p-3 bg-slate-800 hover:bg-cyan-500/20 hover:border-cyan-500/50 border border-slate-700 rounded-lg transition-all duration-300 hover:text-cyan-400">
                <FaEnvelope className="text-lg" />
              </a>
            </div>
          </motion.div>

        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          
          <p className="text-slate-500 text-center md:text-left flex items-center justify-center gap-2">
            © 2024 Simon.dev - Créé avec <FaHeart className="text-red-500 text-sm" /> Tous droits réservés
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
