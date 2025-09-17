import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    handleLinkClick();
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'navbar-scroll shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo Container */}
          <div className="flex items-center space-x-3 logo-container">
            <img src="/HMI.svg" alt="Logo HMI" className="h-12 w-auto" />
            <img src="/logo2.png" alt="Logo Universitas" className="h-12 w-auto" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {[
              { id: 'home', label: 'Home' },
              { id: 'tentang', label: 'Tentang HMI' },
              { id: 'struktur', label: 'Struktur' },
              { id: 'galeri', label: 'Galeri' },
              { id: 'berita', label: 'Berita' },
              { id: 'kontak', label: 'Kontak Kami' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`nav-link transition-colors duration-200 font-medium ${
                  isScrolled
                    ? 'text-gray-700 hover:text-green-600'
                    : 'text-white hover:text-green-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden focus:outline-none transition-colors duration-200 ${
              isScrolled
                ? 'text-gray-700 hover:text-green-600'
                : 'text-white hover:text-green-300'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="py-4 space-y-3">
            {[
              { id: 'home', label: 'Home' },
              { id: 'tentang', label: 'Tentang HMI' },
              { id: 'struktur', label: 'Struktur' },
              { id: 'galeri', label: 'Galeri' },
              { id: 'berita', label: 'Berita' },
              { id: 'kontak', label: 'Kontak Kami' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;