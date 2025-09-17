import React from 'react';

const About: React.FC = () => {
  return (
    <section id="tentang" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Tentang HMI</h2>
          <div className="w-20 h-1 bg-green-600 mx-auto"></div>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Visi & Misi</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-green-600 mb-3">Visi</h4>
                <p className="text-gray-600 leading-relaxed">
                  Terwujudnya mahasiswa Muslim yang berakhlak mulia, cerdas, dan bertanggung jawab dalam membangun masyarakat yang Islami.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-green-600 mb-3">Misi</h4>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-600 mt-1 mr-3"></i>
                    Membentuk karakter mahasiswa yang Islami
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-600 mt-1 mr-3"></i>
                    Mengembangkan potensi akademik dan non-akademik
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-600 mt-1 mr-3"></i>
                    Membangun solidaritas dan ukhuwah Islamiyah
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="fade-in">
            <img
              src="/public/rak.png"
              alt="Aktivitas HMI"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;