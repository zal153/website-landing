import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 100);

      // Detect which section is currently active
      const sections = ['home', 'tentang', 'struktur', 'galeri', 'berita', 'kontak'];
      const sectionElements = sections.map(id => document.getElementById(id));
      
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-lg backdrop-blur-md bg-opacity-95'
            : 'bg-transparent bg-opacity-20 backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img src="/HMI.svg" alt="Logo HMI" className="h-8 w-auto" />
              <img src="/logo2.png" alt="Logo Kohati" className="h-8 w-auto" />
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {[
                { id: 'home', label: 'Home', icon: 'fas fa-home' },
                { id: 'tentang', label: 'Tentang', icon: 'fas fa-info-circle' },
                { id: 'struktur', label: 'Struktur', icon: 'fas fa-sitemap' },
                { id: 'galeri', label: 'Galeri', icon: 'fas fa-images' },
                { id: 'berita', label: 'Berita', icon: 'fas fa-newspaper' },
                { id: 'kontak', label: 'Kontak', icon: 'fas fa-envelope' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 font-medium ${
                    activeSection === item.id
                      ? isScrolled
                        ? 'bg-green-600 text-white shadow-lg'
                        : 'bg-white text-gray-800 shadow-lg'
                      : isScrolled
                        ? 'text-gray-700 hover:bg-green-500 hover:text-gray-900'
                        : 'text-white hover:bg-gray-700 hover:bg-opacity-80 hover:text-white'
                  }`}
                >
                  <i className={`${item.icon} text-sm`}></i>
                  <span>{item.label}</span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden p-2 rounded-lg transition-all duration-200 ${
                isScrolled
                  ? 'text-gray-700 hover:bg-gray-100'
                  : 'text-white hover:bg-gray-700 hover:bg-opacity-80'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl transition-transform duration-200 ${
                isMobileMenuOpen ? 'rotate-90' : 'rotate-0'
              }`}></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black z-40 lg:hidden transition-opacity duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'opacity-50 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />
      
      {/* Mobile Menu Panel */}
      <div 
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 lg:hidden transform transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'translate-x-0 opacity-100' 
            : 'translate-x-full opacity-0'
        }`}
      >
        <div className="p-6">
          {/* Mobile Header */}
          <div className={`flex items-center justify-between mb-8 transition-all duration-500 delay-100 ${
            isMobileMenuOpen 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-4 opacity-0'
          }`}>
            <div className="flex items-center space-x-3">
              <img src="/HMI.svg" alt="Logo HMI" className="h-8 w-auto" />
              <img src="/logo2.png" alt="Logo Kohati" className="h-8 w-auto" />
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-100 transition-all duration-200"
            >
              <i className="fas fa-times text-xl"></i>
            </button>
          </div>

          {/* Mobile Navigation */}
          <nav className="space-y-2">
            {[
              { id: 'home', label: 'Home', icon: 'fas fa-home' },
              { id: 'tentang', label: 'Tentang HMI', icon: 'fas fa-info-circle' },
              { id: 'struktur', label: 'Struktur', icon: 'fas fa-sitemap' },
              { id: 'galeri', label: 'Galeri', icon: 'fas fa-images' },
              { id: 'berita', label: 'Berita', icon: 'fas fa-newspaper' },
              { id: 'kontak', label: 'Kontak Kami', icon: 'fas fa-envelope' },
            ].map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 text-left transform ${
                  activeSection === item.id
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-green-500'
                } ${
                  isMobileMenuOpen 
                    ? 'translate-x-0 opacity-100' 
                    : 'translate-x-8 opacity-0'
                }`}
                style={{
                  transitionDelay: isMobileMenuOpen ? `${200 + index * 100}ms` : '0ms'
                }}
              >
                <i className={`${item.icon} w-5`}></i>
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Mobile Footer */}
          <div className={`mt-8 pt-6 border-t border-gray-200 transition-all duration-500 delay-700 ${
            isMobileMenuOpen 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-4 opacity-0'
          }`}>
            <p className="text-sm text-gray-500 text-center">
              Himpunan Mahasiswa Islam<br />
              Universitas Bahaudin Mudhary Madura
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;