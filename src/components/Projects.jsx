import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import { useState } from "react";

// Import des images des projets
import mvolaImg from "../assets/Mvola.png";
import etudiantUniversImg from "../assets/GestiontEtudiant Univers.png";
import gestionStocksImg from "../assets/GEstionStocks.png";
import gestionEmployeurImg from "../assets/GEstionEmployeur.png";
import etudiantImg from "../assets/Etudiant.png";
import alerteCommunautaireImg from "../assets/AlerteCommunautaire.png";
import stationEssenceImg from "../assets/Station_Essence.png";

function Projects() {
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    {
      title: "APK Gestion Mobile Money",
      description: "Application mobile de gestion de transactions Mobile Money avec suivi des dépôts, retraits et transferts en temps réel.",
      tech: ["JSP", "Java", "Android", "SQLite"],
      gradient: "from-green-600 to-emerald-400",
      image: mvolaImg,
      github: "https://github.com/TANTELYMadieSimon/gestion-mobile-money",
    },
    {
      title: "Alerte Communautaire",
      description: "Application web de signalement et gestion d'alertes communautaires avec notifications en temps réel et dashboard administrateur.",
      tech: ["React", "Django", "PostgreSQL", "WebSocket"],
      gradient: "from-red-600 to-orange-500",
      image: alerteCommunautaireImg,
      github: "https://github.com/TANTELYMadieSimon/alerte-communautaire",
    },
    {
      title: "Gestion Étudiants Universitaire",
      description: "Application web complète de gestion des étudiants : inscriptions, notes, emplois du temps, et génération de bulletins.",
      tech: ["React", "Django", "PostgreSQL", "API REST"],
      gradient: "from-blue-600 to-indigo-500",
      image: etudiantUniversImg,
      github: "https://github.com/TANTELYMadieSimon/Gestion_etudiant_Universitaire",
    },
    {
      title: "Gestion Employeurs",
      description: "Application de gestion des employés avec suivi des présences, congés, paies et évaluations de performance.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      gradient: "from-purple-600 to-violet-500",
      image: gestionEmployeurImg,
      github: "https://github.com/TANTELYMadieSimon/GESTION_EMPLOYEUR",
    },
    {
      title: "APK Gestion Étudiants",
      description: "Application mobile Android de gestion des étudiants avec consultation des notes, absences et emplois du temps en mobilité.",
      tech: ["Android Studio", "Java", "SQLite", "API REST"],
      gradient: "from-teal-600 to-cyan-500",
      image: etudiantImg,
      github: "https://github.com/TANTELYMadieSimon/apk-etudiants",
    },
    {
      title: "Gestion Station Essence",
      description: "Système de gestion de station-service avec suivi des stocks de carburant, ventes, clients et facturation automatisée.",
      tech: ["PHP", "MySQL", "HTML/CSS", "JavaScript"],
      gradient: "from-yellow-600 to-amber-500",
      image: stationEssenceImg,
      github: "https://github.com/TANTELYMadieSimon/station-essence",
    },
    {
      title: "Gestion de Stocks",
      description: "Application moderne de gestion des stocks avec dashboard analytique, alertes de réapprovisionnement et historique des mouvements.",
      tech: ["Next.js", "React", "Tailwind", "PostgreSQL"],
      gradient: "from-cyan-600 to-blue-500",
      image: gestionStocksImg,
      github: "https://github.com/TANTELYMadieSimon/GESTION_STOCKS",
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
    <>
      <section id="projects" className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white py-20 overflow-hidden">
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
              Découvrez mes réalisations concrètes en développement web et mobile
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
                  
                  {/* Image cliquable */}
                  <div 
                    onClick={() => setSelectedImage(project.image)}
                    className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden cursor-pointer`}
                  >
                    <div className="absolute inset-0 opacity-20 group-hover:scale-110 transition-transform duration-500 bg-gradient-to-br from-white/10"></div>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover relative z-10 group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Overlay "Cliquer pour agrandir" */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                      <span className="text-white font-medium">🔍 Cliquer pour agrandir</span>
                    </div>
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
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-slate-800/50 hover:bg-slate-700 rounded-lg transition-all duration-300 group/link"
                      >
                        <FaGithub className="group-hover/link:text-cyan-400 transition-colors" />
                        <span className="text-sm group-hover/link:text-cyan-400 transition-colors">Code</span>
                      </a>
                      <button 
                        onClick={() => setSelectedImage(project.image)}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/40 hover:to-blue-500/40 border border-cyan-500/50 rounded-lg transition-all duration-300 group/link"
                      >
                        <FaExternalLinkAlt className="group-hover/link:text-cyan-300 transition-colors text-xs" />
                        <span className="text-sm group-hover/link:text-cyan-300 transition-colors">Voir</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Modale pour afficher l'image en grand */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl"
          >
            <img 
              src={selectedImage} 
              alt="Aperçu du projet"
              className="w-full h-full object-contain"
            />
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-slate-900/80 hover:bg-red-500 text-white p-3 rounded-full transition-all duration-300"
            >
              <FaTimes className="text-xl" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

export default Projects;