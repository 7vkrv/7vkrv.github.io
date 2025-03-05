import React, { useState } from 'react';
import { Menu, X, Github, Mail, Linkedin, Instagram } from 'lucide-react';
import About from './components/About';
import Pedigree from './components/Pedigree';
import Projects from './components/Projects';
import Creative from './components/Creative';
import Navigation from './components/Navigation';
import ParticleBackground from './components/ParticleBackground';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-pattern">
      <ParticleBackground />
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md z-50 border-b border-gray-200/50 dark:border-gray-800/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">7vkreddi</h1>
            
            <div className="flex items-center gap-6">
              {/* Desktop Navigation */}
              <nav className="hidden md:flex space-x-8">
                <Navigation 
                  activeSection={activeSection} 
                  setActiveSection={setActiveSection} 
                />
              </nav>

              {/* Theme Toggle */}
              <ThemeToggle />

              {/* Mobile Menu Button */}
              <button 
                className="md:hidden p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                onClick={toggleMenu}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200/50 dark:border-gray-800/50">
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <Navigation 
                activeSection={activeSection} 
                setActiveSection={setActiveSection}
                onItemClick={() => setIsMenuOpen(false)}
              />
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-20 relative">
        <div className="absolute inset-0 section-gradient pointer-events-none"></div>
        <div className={`${activeSection === 'about' ? 'block' : 'hidden'}`}>
          <About />
        </div>
        <div className={`${activeSection === 'pedigree' ? 'block' : 'hidden'}`}>
          <Pedigree />
        </div>
        <div className={`${activeSection === 'projects' ? 'block' : 'hidden'}`}>
          <Projects />
        </div>
        <div className={`${activeSection === 'creative' ? 'block' : 'hidden'}`}>
          <Creative />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-t border-gray-200/50 dark:border-gray-800/50 mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-center space-x-6">
            <a href="https://www.linkedin.com/in/7vkreddi/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://www.instagram.com/7vkreddi/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
              <Instagram size={24} />
            </a>
            <a href="mailto:sathvik@breakthematrix.org" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
              <Mail size={24} />
            </a>
          </div>
          <div className="text-center text-gray-600 dark:text-gray-400 mt-4">
            <p>Project Consultation: <a href="mailto:sathvik@breakthematrix.org" className="hover:text-blue-600 transition-colors">sathvik@breakthematrix.org</a></p>
            <p>Recruitment Inquiries: <a href="mailto:vemunurisathvik@gmail.com" className="hover:text-blue-600 transition-colors">vemunurisathvik@gmail.com</a></p>
          </div>
          <p className="text-center text-gray-600 dark:text-gray-400 mt-4">
            © {new Date().getFullYear()} Sathvik Vemunuri. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;