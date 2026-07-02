import { motion } from "framer-motion";
import { FaCode, FaMobileAlt, FaDatabase, FaCheck } from "react-icons/fa";

function About() {
  const features = [
    {
      icon: <FaCode className="text-4xl" />,
      title: "Web Development",
      desc: "Applications web modernes avec React, Django et Node.js"
    },
    {
      icon: <FaMobileAlt className="text-4xl" />,
      title: "Mobile Development",
      desc: "Applications mobiles cross-platform avec Flutter"
    },
    {
      icon: <FaDatabase className="text-4xl" />,
      title: "Database Design",
      desc: "Conception et optimisation de bases de données PostgreSQL"
    }
  ];

  const skills = [
    { name: "React/Next.js", level: 90 },
    { name: "Django/Node.js", level: 85 },
    { name: "Flutter", level: 80 },
    { name: "PostgreSQL", level: 75 }
  ];

  return (
    <section id="about" className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            À <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">propos</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Développeur passionné avec une expertise en création d'applications web et mobile performantes et élégantes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 h-full">
                <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition duration-500"></div>
          <div className="relative bg-slate-900/60 backdrop-blur-md rounded-3xl p-12 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Mon parcours</h3>
              <p className="text-slate-300 leading-8 mb-4">
                Passionné par la technologie depuis toujours, j'ai développé une expertise solide en développement web et mobile. Je crée des solutions innovantes qui allient performance et design intuitif.
              </p>
              <p className="text-slate-300 leading-8">
                Actuellement, je me concentre sur les technologies modernes comme React, Node.js, Django et Flutter pour offrir des applications complètes et scalables.
              </p>
            </div>
            <div className="space-y-5">
              {skills.map((skill, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-300 font-medium flex items-center gap-2">
                      <FaCheck className="text-cyan-400" />
                      {skill.name}
                    </span>
                    <span className="text-cyan-400 font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden border border-slate-700">
                    <motion.div 
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;