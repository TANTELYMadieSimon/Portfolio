import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import { useState } from "react";

// Import des images (depuis src/assets/)
import mvolaImg from "../assets/Mvola.png";
import etudiantUniversImg from "../assets/GestiontEtudiant Univers.png";
import gestionStocksImg from "../assets/GEstionStocks.png";
import gestionEmployeurImg from "../assets/GEstionEmployeur.png";
import etudiantImg from "../assets/Etudiant.png";
import alerteCommunautaireImg from "../assets/AlerteCommunautaire.png";
import stationEssenceImg from "../assets/Station_Essence.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 12 }
  }
};

function Projects() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Gestion Mobile Money",
      description: "Application mobile de gestion de transactions Mobile Money avec suivi des dépôts, retraits et transferts en temps réel.",
      tech: ["JSP", "Java", "Android", "SQLite"],
      gradient: "from-green-600 to-emerald-500",
      accentColor: "bg-green-500/20",
      image: mvolaImg,
      github: "https://github.com/TANTELYMadieSimon/gestion-mobile-money",
    },
    {
      id: 2,
      title: "Gestion Alerte Communautaire",
      description: "Application web de signalement et gestion d'alertes communautaires avec notifications en temps réel et dashboard administrateur.",
      tech: ["React", "Django", "PostgreSQL", "WebSocket"],
      gradient: "from-red-600 to-orange-500",
      accentColor: "bg-red-500/20",
      image: alerteCommunautaireImg,
      github: "https://github.com/TANTELYMadieSimon/alerte-communautaire",
    },
    {
      id: 3,
      title: "Gestion Étudiants Universitaire",
      description: "Application web complète de gestion des étudiants : inscriptions, notes, emplois du temps, et génération de bulletins.",
      tech: ["React", "Django", "PostgreSQL", "API REST"],
      gradient: "from-blue-600 to-indigo-500",
      accentColor: "bg-blue-500/20",
      image: etudiantUniversImg,
      github: "https://github.com/TANTELYMadieSimon/Gestion_etudiant_Universitaire",
    },
    {
      id: 4,
      title: "Gestion Employeurs",
      description: "Application de gestion des employés avec suivi des présences, congés, paies et évaluations de performance.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      gradient: "from-purple-600 to-violet-500",
      accentColor: "bg-purple-500/20",
      image: gestionEmployeurImg,
      github: "https://github.com/TANTELYMadieSimon/GESTION_EMPLOYEUR",
    },
    {
      id: 5,
      title: "Gestion Étudiants",
      description: "Application mobile Android de gestion des étudiants avec consultation des notes, absences et emplois du temps en mobilité.",
      tech: ["Android Studio", "Java", "SQLite", "API REST"],
      gradient: "from-teal-600 to-cyan-500",
      accentColor: "bg-teal-500/20",
      image: etudiantImg,
      github: "https://github.com/TANTELYMadieSimon/apk-etudiants",
    },
    {
      id: 6,
      title: "Gestion Station Essence",
      description: "Système de gestion de station-service avec suivi des stocks de carburant, ventes, clients et facturation automatisée.",
      tech: ["PHP", "MySQL", "HTML/CSS", "JavaScript"],
      gradient: "from-yellow-600 to-amber-500",
      accentColor: "bg-yellow-500/20",
      image: stationEssenceImg,
      github: "https://github.com/TANTELYMadieSimon/station-essence",
    },
    {
      id: 7,
      title: "Gestion de Stocks",
      description: "Application moderne de gestion des stocks avec dashboard analytique, alertes de réapprovisionnement et historique des mouvements.",
      tech: ["Next.js", "React", "Tailwind", "PostgreSQL"],
      gradient: "from-cyan-600 to-blue-500",
      accentColor: "bg-cyan-500/20",
      image: gestionStocksImg,
      github: "https://github.com/TANTELYMadieSimon/GESTION_STOCKS",
    }
  ];

  return (
    <>
      <section id="projects" className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 text-white py-24 overflow-hidden">
        {/* Éléments décoratifs en arrière-plan */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 -left-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-1/4 w-60 h-60 bg-purple-500/3 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* En-tête */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-cyan-400 uppercase tracking-widest">Portfolio</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Mes <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Projets</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Découvrez ma sélection de projets développés en web et mobile, combinant design moderne et architecture robuste.
            </p>
          </motion.div>

          {/* Grille de projets */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group h-full"
              >
                <div className={`relative h-full rounded-2xl overflow-hidden transition-all duration-500 ${
                  hoveredId === project.id ? 'shadow-2xl shadow-cyan-500/10' : 'shadow-lg'
                }`}>
                  {/* Fond dégradé */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* Image */}
                  <div className="relative h-48 md:h-56 overflow-hidden bg-slate-900">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                    
                    {/* Badge overlay */}
                    <div className="absolute top-4 right-4">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        className={`${project.accentColor} backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-xs font-semibold text-white`}
                      >
                        Voir plus
                      </motion.div>
                    </div>
                  </div>

                  {/* Contenu */}
                  <div className="relative p-6 md:p-7 bg-slate-900/40 backdrop-blur-sm border-t border-slate-700/30">
                    <h3 className="text-xl md:text-2xl font-bold mb-3 text-white group-hover:text-cyan-300 transition-colors duration-300 line-clamp-2">
                      {project.title}
                    </h3>
                    
                    <p className="text-slate-400 text-sm md:text-base mb-4 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tech.slice(0, 2).map((tech, i) => (
                        <span key={i} className="px-2.5 py-1 text-xs font-medium bg-slate-800/60 border border-slate-600/40 text-cyan-300 rounded-md transition-all duration-300 group-hover:bg-slate-700/80 group-hover:border-cyan-500/50">
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 2 && (
                        <span className="px-2.5 py-1 text-xs font-medium bg-slate-800/60 border border-slate-600/40 text-slate-400 rounded-md">
                          +{project.tech.length - 2}
                        </span>
                      )}
                    </div>

                    {/* Boutons d'actions */}
                    <div className="flex gap-3 pt-4 border-t border-slate-700/30">
                      <a 
                        href={project.github} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-slate-800/50 hover:bg-slate-700 border border-slate-600/50 hover:border-slate-500 rounded-lg transition-all duration-300 group/link text-sm font-medium text-slate-300 hover:text-white"
                      >
                        <FaGithub className="text-base" />
                        <span className="hidden sm:inline">Code</span>
                      </a>
                      <button 
                        onClick={() => setSelectedImage(project.image)}
                        className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r ${project.gradient} opacity-80 hover:opacity-100 rounded-lg transition-all duration-300 group/link text-sm font-medium text-white`}
                      >
                        <FaExternalLinkAlt className="text-sm" />
                        <span className="hidden sm:inline">Aperçu</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Modal d'aperçu image */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl"
          >
            <img 
              src={selectedImage} 
              alt="Aperçu du projet"
              className="w-full h-full object-contain"
            />
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-slate-900/90 hover:bg-red-600 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              <FaTimes className="text-xl" />
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

export default Projects;