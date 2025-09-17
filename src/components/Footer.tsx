import React from 'react';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Get current year dynamically
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src="/logo1.png" alt="Logo HMI" className="h-10 w-auto" />
              <img src="/logo2.png" alt="Logo Universitas" className="h-10 w-auto" />
            </div>
            <p className="text-gray-300">
              Himpunan Mahasiswa Islam Universitas Bahaudin Mudhary Madura, organisasi kemahasiswaan yang berkomitmen membangun generasi Muslim yang berakhlak mulia.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Menu Cepat</h4>
            <ul className="space-y-2 text-gray-300">
              {[
                { id: 'home', label: 'Home' },
                { id: 'tentang', label: 'Tentang HMI' },
                { id: 'struktur', label: 'Struktur' },
                { id: 'galeri', label: 'Galeri' },
                { id: 'berita', label: 'Berita' },
                { id: 'kontak', label: 'Kontak Kami' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="hover:text-green-400 transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>
                <i className="fas fa-map-marker-alt mr-2"></i>
                Sumenep, Madura
              </p>
              <p>
                <i className="fas fa-phone mr-2"></i>
                +62 812-3456-7890
              </p>
              <p>
                <i className="fas fa-envelope mr-2"></i>
                hmi@unbamadura.ac.id
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} HMI Universitas Bahaudin Mudhary Madura. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;