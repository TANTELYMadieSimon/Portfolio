import { motion } from "framer-motion";
import { FaReact, FaPython, FaNodeJs, FaHtml5, FaCss3Alt, FaBootstrap, FaPhp, FaAndroid } from "react-icons/fa";
import { SiDjango, SiPostgresql, SiJavascript, SiTailwindcss, SiNextdotjs, SiGit } from "react-icons/si";

function Skills() {
  const skills = [
    { icon: <FaHtml5 className="text-5xl" />, name: "HTML5", color: "from-orange-600 to-red-500" },
    { icon: <FaCss3Alt className="text-5xl" />, name: "CSS3", color: "from-blue-600 to-blue-400" },
    { icon: <SiJavascript className="text-5xl" />, name: "JavaScript", color: "from-yellow-500 to-orange-500" },
    { icon: <FaReact className="text-5xl" />, name: "React", color: "from-cyan-500 to-blue-500" },
    { icon: <SiNextdotjs className="text-5xl" />, name: "Next.js", color: "from-gray-600 to-gray-400" },
    { icon: <SiTailwindcss className="text-5xl" />, name: "Tailwind CSS", color: "from-cyan-400 to-cyan-600" },
    { icon: <FaBootstrap className="text-5xl" />, name: "Bootstrap", color: "from-purple-600 to-violet-500" },
    { icon: <FaPhp className="text-5xl" />, name: "PHP", color: "from-indigo-600 to-blue-500" },
    { icon: <FaPython className="text-5xl" />, name: "Python", color: "from-blue-600 to-yellow-400" },
    { icon: <SiDjango className="text-5xl" />, name: "Django", color: "from-green-600 to-green-400" },
    { icon: <FaNodeJs className="text-5xl" />, name: "Node.js", color: "from-green-500 to-lime-500" },
    { icon: <FaAndroid className="text-5xl" />, name: "Android Studio", color: "from-green-600 to-emerald-400" },
    { icon: <SiPostgresql className="text-5xl" />, name: "PostgreSQL", color: "from-blue-700 to-blue-500" },
    { icon: <SiGit className="text-5xl" />, name: "Git", color: "from-orange-600 to-red-500" },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section 
      id="skills" 
      className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 text-white py-20 overflow-hidden relative"
    >
      {/* Cercles décoratifs (comme Hero) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
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
            Mes <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Compétences</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Technologies et outils que j'utilise pour créer des applications modernes et performantes
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -15, scale: 1.05 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} rounded-2xl blur opacity-0 group-hover:opacity-60 transition duration-500`}></div>
              <div className="relative bg-slate-900/60 backdrop-blur-sm border border-slate-700/50 group-hover:border-slate-600 p-8 rounded-2xl flex flex-col items-center gap-4 transition-all duration-300 h-full justify-center hover:bg-slate-900/80">
                <div className="text-slate-300 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                  {skill.icon}
                </div>
                <span className="text-sm font-semibold text-slate-300 group-hover:text-white transition-all duration-300 text-center">
                  {skill.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;