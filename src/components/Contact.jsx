import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaLinkedin, FaGithub, FaFacebook, FaCheckCircle, FaSpinner } from "react-icons/fa";
import { useState } from "react";
import emailjs from '@emailjs/browser';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    // ✅ VOS VRAIS IDS EMAILJS
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      })
      .catch((error) => {
        console.error('Erreur:', error);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      });
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      label: "Email",
      value: "simonmadie2006@gmail.com",
      href: "mailto:simonmadie2006@gmail.com"
    },
    {
      icon: <FaPhone className="text-2xl" />,
      label: "Téléphone",
      value: "+261 38 23 844 24",
      href: "tel:+261382384424"
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      label: "Localisation",
      value: "Antananarivo, Madagascar",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 text-white py-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Contactez</span>-moi
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Une idée de projet ? Une question ? N'hésitez pas à me contacter
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-8">Mes coordonnées</h3>
            
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.href}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 10 }}
                className="group flex items-center gap-4 p-4 rounded-xl bg-slate-800/30 hover:bg-slate-800/60 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg group-hover:from-cyan-500/40 group-hover:to-blue-500/40 transition-all duration-300 border border-cyan-500/20 group-hover:border-cyan-500/50">
                  <div className="text-cyan-400 group-hover:scale-110 transition-transform duration-300">{info.icon}</div>
                </div>
                <div>
                  <p className="text-slate-500 text-sm mb-1">{info.label}</p>
                  <p className="font-semibold text-slate-100 group-hover:text-cyan-400 transition-colors">{info.value}</p>
                </div>
              </motion.a>
            ))}

            <div className="pt-8 border-t border-slate-700/50">
              <h4 className="font-semibold mb-4 text-slate-300">Suivez-moi</h4>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/TANTELYMadieSimon" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-800/50 hover:bg-cyan-500/20 hover:border-cyan-500/50 border border-slate-700/50 rounded-lg transition-all duration-300 hover:text-cyan-400"
                >
                  <FaGithub className="text-xl" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/simon-madie-a0b752379/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-800/50 hover:bg-cyan-500/20 hover:border-cyan-500/50 border border-slate-700/50 rounded-lg transition-all duration-300 hover:text-cyan-400"
                >
                  <FaLinkedin className="text-xl" />
                </a>
                <a 
                  href="https://www.facebook.com/profile.php?id=61590661097546" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-800/50 hover:bg-cyan-500/20 hover:border-cyan-500/50 border border-slate-700/50 rounded-lg transition-all duration-300 hover:text-cyan-400"
                >
                  <FaFacebook className="text-xl" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div>
              <input
                type="text"
                name="name"
                placeholder="Votre nom"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-slate-800/50 border border-slate-700/50 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:bg-slate-800/80 transition-all duration-300"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Votre email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-slate-800/50 border border-slate-700/50 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:bg-slate-800/80 transition-all duration-300"
              />
            </div>

            <div>
              <textarea
                name="message"
                rows="5"
                placeholder="Votre message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-slate-800/50 border border-slate-700/50 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:bg-slate-800/80 transition-all duration-300 resize-none"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(56, 189, 248, 0.5)" }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={status === 'sending'}
              className={`w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg ${
                status === 'success' 
                  ? 'bg-green-500' 
                  : status === 'error'
                  ? 'bg-red-500'
                  : 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600'
              }`}
            >
              {status === 'sending' && <FaSpinner className="animate-spin" />}
              {status === 'success' && <FaCheckCircle />}
              {status === 'idle' && <FaPaperPlane className="text-sm" />}
              
              {status === 'idle' && 'Envoyer le message'}
              {status === 'sending' && 'Envoi en cours...'}
              {status === 'success' && 'Message envoyé !'}
              {status === 'error' && 'Erreur, réessayez'}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;