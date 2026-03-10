'use client';
import { motion, useScroll, useSpring } from 'framer-motion';
import { 
  Briefcase, BrainCircuit, Mail, Github, Zap, Palette, 
  Database, Plane, Waves, BookOpen, Camera, Music, 
  Linkedin, Phone, Code, User, Award, PlaneTakeoff, 
  Image as ImageIcon, Headphones, BookHeart 
} from 'lucide-react';
import SkillsChart from './SkillsChart'; 

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const navLinks = ["About", "Experience", "Skills", "Projects", "Interests"];
  
  const contactLinks = [
    { name: "LinkedIn", icon: <Linkedin size={20} />, href: "https://linkedin.com/in/yourprofile", color: "hover:text-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]" },
    { name: "GitHub", icon: <Github size={20} />, href: "https://github.com/SaloniChitre", color: "hover:text-purple-500 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]" },
    { name: "Email", icon: <Mail size={20} />, href: "mailto:saloni.chitre@pace.edu", color: "hover:text-orange-500 hover:shadow-[0_0_15px_rgba(249,115,22,0.5)]" },
    { name: "Phone", icon: <Phone size={20} />, href: "tel:+1234567890", color: "hover:text-green-500 hover:shadow-[0_0_15px_rgba(34,197,94,0.5)]" },
  ];

  const hobbies = [
    { name: "Traveling", icon: <PlaneTakeoff size={18} /> },
    { name: "Swimming", icon: <Waves size={18} /> },
    { name: "Reading", icon: <BookHeart size={18} /> },
    { name: "Photography", icon: <ImageIcon size={18} /> },
    { name: "Music", icon: <Headphones size={18} /> }
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 scroll-smooth">
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50" style={{ scaleX }} />

      <nav className="fixed top-0 w-full z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 p-4">
        <div className="max-w-4xl mx-auto flex justify-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-blue-400 transition">{link}</a>
          ))}
        </div>
      </nav>

      <section id="about" className="pt-40 pb-20 px-6 text-center">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="mb-8 relative inline-block">
          {/* Subtle glow effect behind the image */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-30 blur"></div>
          <img 
            src="/Saloni.jpg" 
            alt="Saloni Chitre" 
            className="relative w-64 h-64 rounded-2xl shadow-2xl object-contain bg-slate-900 border border-slate-700/50"
          />
        </motion.div>
        
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Saloni Chitre</h1>
        <p className="mt-6 text-lg text-slate-400 max-w-xl mx-auto italic">
          "Turning complex data into actionable intelligence. Passionate about building scalable AI and human-centric data systems."
        </p>
        
        <div className="flex justify-center gap-6 mt-8">
          {contactLinks.map((link, idx) => (
            <motion.a key={idx} href={link.href} target="_blank" whileHover={{ scale: 1.1 }} className={`p-4 rounded-xl bg-slate-900 border border-slate-800 transition-all duration-300 ${link.color}`}>
              {link.icon}
            </motion.a>
          ))}
        </div>
      </section>

      <section id="experience" className="max-w-4xl mx-auto py-20 px-6">
        <h2 className="text-2xl font-semibold mb-8 text-white flex items-center gap-2"><Briefcase className="text-blue-400" /> Work Experience</h2>
        <div className="space-y-6">
          {[
            { role: "Data Scientist", company: "Monk Soft Technologies", desc: "Built machine learning pipelines to predict customer behavior using Spark and AWS." },
            { role: "Marketing Data Analyst", company: "Jaspytech Solutions", desc: "Collaborated with marketing teams to turn raw data into insights for user engagement." },
            { role: "Data Analyst", company: "The Times of India", desc: "Analyzed internal data flows in a high-pressure media environment." }
          ].map((job, idx) => (
            <div key={idx} className="bg-slate-900 p-6 rounded-2xl border-l-4 border-blue-500 hover:scale-[1.01] transition-transform">
              <h3 className="text-lg font-bold text-white">{job.role} · {job.company}</h3>
              <p className="mt-2 text-slate-400">{job.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="max-w-4xl mx-auto py-20 px-6">
        <h2 className="text-2xl font-semibold mb-8 text-white flex items-center gap-2"><Award className="text-yellow-400" /> Technical Proficiency</h2>
        
        <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
          <SkillsChart />
        </div>
      </section>

      <section id="projects" className="max-w-4xl mx-auto py-20 px-6">
        <h2 className="text-2xl font-semibold mb-8 text-white flex items-center gap-2"><BrainCircuit className="text-purple-400" /> Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "ATS Optimizer", icon: <Zap className="text-orange-400" />, desc: "NLP pipeline that parses and ranks resumes." },
            { title: "Euron NL2SQL", icon: <Database className="text-blue-400" />, desc: "Natural language interface for SQL queries." },
            { title: "Vibe Studio", icon: <Palette className="text-pink-400" />, desc: "Creative project exploring the intersection of design and data." }
          ].map((proj, idx) => (
            <div key={idx} className="bg-slate-900 p-6 rounded-2xl border border-slate-800 flex flex-col items-center text-center hover:bg-slate-800 transition">
              <div className="mb-4 p-3 bg-slate-800 rounded-full">{proj.icon}</div>
              <h3 className="font-bold text-white mb-2">{proj.title}</h3>
              <p className="text-xs text-slate-400">{proj.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="interests" className="max-w-4xl mx-auto py-20 px-6">
        <h2 className="text-2xl font-semibold mb-8 text-white flex items-center gap-2"><BookOpen className="text-indigo-400" /> Beyond the Screen</h2>
        <div className="flex flex-wrap gap-4">
          {hobbies.map((h, i) => (
            <div key={i} className="bg-slate-900 px-6 py-3 rounded-full border border-slate-800 flex items-center gap-2 hover:border-slate-600 transition">
              {h.icon} {h.name}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}