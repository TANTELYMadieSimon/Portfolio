import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "E-Commerce App",
      description: "Application e-commerce complète avec panier, paiement et gestion des commandes en temps réel",
      tech: ["React", "Django", "PostgreSQL"],
      gradient: "from-blue-600 to-cyan-600",
      icon: "🛍️",
      github: "#",
      live: "#"
    },
    {
      title: "Task Manager",
      description: "Application de gestion de tâches collaborative avec synchronisation en temps réel",
      tech: ["Flutter", "Node.js", "MongoDB"],
      gradient: "from-purple-600 to-pink-600",
      icon: "✓",
      github: "#",
      live: "#"
    },
    {
      title: "Social Dashboard",
      description: "Dashboard analytique avec graphiques interactifs et statistiques détaillées",
      tech: ["React", "Node.js", "PostgreSQL"],
      gradient: "from-orange-600 to-red-600",
      icon: "📊",
      github: "#",
      live: "#"
    },
    {
      title: "Portfolio Website",
      description: "Site portfolio moderne avec animations fluides et performances optimisées",
      tech: ["React", "Tailwind", "Framer Motion"],
      gradient: "from-green-600 to-teal-600",
      icon: "🎨",
      github: "#",
      live: "#"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white py-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Mes <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Projets</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Découvrez quelques-uns de mes projets récents et mes réalisations
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -15 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500`}></div>
              
              <div className="relative bg-slate-900/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 group-hover:border-slate-600/80 transition-all duration-300 hover:bg-slate-900/80 h-full flex flex-col">
                
                <div className={`h-40 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-20 group-hover:scale-110 transition-transform duration-500 bg-gradient-to-br from-white/10"></div>
                  <span className="text-7xl relative z-10 group-hover:scale-125 transition-transform duration-300">{project.icon}</span>
                </div>
                
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                  <p className="text-slate-400 mb-6 flex-grow leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 text-xs font-medium bg-slate-800/50 border border-slate-700/50 text-cyan-300 rounded-full group-hover:bg-cyan-500/10 group-hover:border-cyan-500/50 transition-all duration-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4 pt-6 border-t border-slate-700/50">
                    <a 
                      href={project.github} 
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-slate-800/50 hover:bg-slate-700 rounded-lg transition-all duration-300 group/link"
                    >
                      <FaGithub className="group-hover/link:text-cyan-400 transition-colors" />
                      <span className="text-sm group-hover/link:text-cyan-400 transition-colors">Code</span>
                    </a>
                    <a 
                      href={project.live} 
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/40 hover:to-blue-500/40 border border-cyan-500/50 rounded-lg transition-all duration-300 group/link"
                    >
                      <FaExternalLinkAlt className="group-hover/link:text-cyan-300 transition-colors text-xs" />
                      <span className="text-sm group-hover/link:text-cyan-300 transition-colors">Voir</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
