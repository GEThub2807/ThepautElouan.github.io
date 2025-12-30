import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, FileText, Code, User, Plus, Edit2, Trash2 } from 'lucide-react';

const GameDevPortfolio = () => {
  // Données modifiables - Personnalisez facilement ici
  const [profile, setProfile] = useState({
    name: "THEPAUT Elouan",
    title: "Gameplay Developper || Game/Level Designer",
    bio: "Third-year video game development student, specializing in C++ and C#. Passionate about level design, resolving code issues and run on track.",
    email: "e.thepaut28@gmail.com",
    github: "https://github.com/GEThub2807",
    linkedin: "https://www.linkedin.com/in/elouan-thepaut/",
    photo: "Images/THEPAUTElouanPic.jpg"
  });

  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Platformer 2D",
      description: "Jeu de plateforme développé en Unity avec C#. Système de physiques personnalisé et mécaniques de mouvement fluides.",
      rôle: "",
      tech: ["Unity", "C#", "Git"],
      image: "https://via.placeholder.com/400x250",
      link: "",
      year: "2024"
    },
    {
      id: 2,
      title: "Moteur de Jeu 3D",
      description: "Moteur graphique développé en C++ avec OpenGL. Rendu 3D, gestion de scènes et système d'entités-composants.",
      tech: ["C++", "OpenGL", "GLSL"],
      image: "https://via.placeholder.com/400x250",
      link: "",
      year: "2023"
    }
  ]);

  const [documents, setDocuments] = useState([
    {
      id: 1,
      title: "GDD - RPG Fantasy",
      description: "Document de game design complet pour un RPG en monde ouvert avec système de progression.",
      date: "Décembre 2024",
      link: "#"
    },
    {
      id: 2,
      title: "Concept - Puzzle Game",
      description: "Concept de jeu de puzzle innovant basé sur la manipulation du temps.",
      date: "Novembre 2024",
      link: "#"
    }
  ]);

  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-black/30 backdrop-blur-md border-b border-purple-500/20 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold text-white">{profile.name}</h1>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-sm border-b border-purple-500/10">
        <div className="container mx-auto px-6">
          <div className="flex gap-8">
            <button
              onClick={() => setActiveTab('profile')}
              className={`py-4 px-2 border-b-2 transition-colors ${
                activeTab === 'profile'
                  ? 'border-purple-500 text-white'
                  : 'border-transparent text-gray-400 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-2">
                <User size={18} />
                Profil
              </div>
            </button>
            <button
              onClick={() => setActiveTab('projects')}
              className={`py-4 px-2 border-b-2 transition-colors ${
                activeTab === 'projects'
                  ? 'border-purple-500 text-white'
                  : 'border-transparent text-gray-400 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-2">
                <Code size={18} />
                Projets
              </div>
            </button>
            <button
              onClick={() => setActiveTab('documents')}
              className={`py-4 px-2 border-b-2 transition-colors ${
                activeTab === 'documents'
                  ? 'border-purple-500 text-white'
                  : 'border-transparent text-gray-400 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-2">
                <FileText size={18} />
                Game Concepts
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        {/* Profile Section */}
        {activeTab === 'profile' && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                <img
                  src={profile.photo}
                  alt={profile.name}
                  className="w-40 h-40 rounded-full border-4 border-purple-500/50"
                />
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-4xl font-bold text-white mb-2">{profile.name}</h2>
                  <p className="text-xl text-purple-400 mb-4">{profile.title}</p>
                  <p className="text-gray-300 leading-relaxed mb-6">{profile.bio}</p>
                  
                  <div className="flex gap-4 justify-center md:justify-start mt-6">
                    <a href={`mailto:${profile.email}`} className="p-3 bg-purple-600/20 hover:bg-purple-600/40 rounded-lg transition-colors">
                      <Mail className="text-purple-400" size={20} />
                    </a>
                    <a href={profile.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-purple-600/20 hover:bg-purple-600/40 rounded-lg transition-colors">
                      <Github className="text-purple-400" size={20} />
                    </a>
                    <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-purple-600/20 hover:bg-purple-600/40 rounded-lg transition-colors">
                      <Linkedin className="text-purple-400" size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20">
              <h3 className="text-2xl font-bold text-white mb-4">Compétences</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-purple-400 mb-3">Langages</h4>
                  <div className="flex flex-wrap gap-2">
                    {['C++', 'C#', 'Python', 'GLSL'].map(skill => (
                      <span key={skill} className="px-4 py-2 bg-purple-600/20 text-purple-300 rounded-lg border border-purple-500/30">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-purple-400 mb-3">Outils</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Unity', 'Unreal Engine', 'Git', 'Visual Studio'].map(tool => (
                      <span key={tool} className="px-4 py-2 bg-purple-600/20 text-purple-300 rounded-lg border border-purple-500/30">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Projects Section */}
        {activeTab === 'projects' && (
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white">Mes Projets</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map(project => (
                <div key={project.id} className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all hover:transform hover:scale-105">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-sm text-purple-400 mb-3">{project.year}</p>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map(tech => (
                        <span key={tech} className="px-3 py-1 bg-purple-600/30 text-purple-300 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                    {project.link && (
                      <a href={project.link} className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                        Voir le projet <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Documents Section */}
        {activeTab === 'documents' && (
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white">Game Concepts & Documents</h2>
            </div>
            <div className="max-w-4xl mx-auto space-y-4">
              {documents.map(doc => (
                <div key={doc.id} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all">
                  <div className="flex items-start justify-between">
                    <div className="flex gap-4 flex-1">
                      <div className="p-3 bg-purple-600/20 rounded-lg">
                        <FileText className="text-purple-400" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-1">{doc.title}</h3>
                        <p className="text-sm text-purple-400 mb-2">{doc.date}</p>
                        <p className="text-gray-300">{doc.description}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <a href={doc.link} className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors inline-flex items-center gap-2">
                        Télécharger <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-black/30 backdrop-blur-md border-t border-purple-500/20 mt-20">
        <div className="container mx-auto px-6 py-8">
          <p className="text-center text-gray-400">
            © 2024 {profile.name}. Portfolio développé avec React.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default GameDevPortfolio;