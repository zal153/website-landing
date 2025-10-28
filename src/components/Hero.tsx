import React, { useState } from 'react';

const Hero: React.FC = () => {
  const [showJoinModal, setShowJoinModal] = useState(false);

  // Data kader pengkaderan
  const kaderData = [
    {
      id: 1,
      nama: "Moh. Marwan",
      jabatan: "ketua Bidang Penelitian, Pengembangan Anggota dan Pembinaan Anggota",
      foto: "/kader1.jpg",
      whatsapp: "+6285849358319",
      // telegram: "@ahmadrifai_hmi",
      instagram: "#"
    },
    {
      id: 2,
      nama: "Nurul Finatusahrah",
      jabatan: "Ketua Bidang Pemberdayaan Perempuan",
      foto: "/kader2.jpg",
      whatsapp: "+6281237149947",
      // telegram: "@aminah_hmi",
      instagram: "#"
    }
  ];

  const handleWhatsAppContact = (phoneNumber: string, nama: string) => {
    const message = encodeURIComponent(`Halo ${nama}, saya tertarik untuk bergabung dengan HMI UNIBA Madura. Bisakah Anda memberikan informasi lebih lanjut?`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  // const handleTelegramContact = (username: string) => {
  //   window.open(`https://t.me/${username.replace('@', '')}`, '_blank');
  // };

  const handleInstagramContact = (username: string) => {
    window.open(`https://instagram.com/${username.replace('@', '')}`, '_blank');
  };

  return (
    <>
      <section id="home" className="hero-bg min-h-screen flex items-center justify-center text-white relative">
        {/* Hero Content */}
        <div className="text-center z-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 fade-in">
            Himpunan Mahasiswa Islam
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-8 fade-in font-light">
            Universitas Bahaudin Mudhary Madura
          </p>
          
          {/* Responsive Button Container */}
          <div className="fade-in">
            {/* Mobile Layout (< 640px) - Stack Vertically */}
            <div className="flex flex-col space-y-4 sm:hidden">
              <button
                onClick={() => setShowJoinModal(true)}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg w-full"
              >
                Ingin Bergabung?
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('tentang');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="border-2 border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 w-full"
              >
                Pelajari Lebih Lanjut
              </button>
            </div>

            {/* Tablet/Desktop Layout (>= 640px) - Side by Side */}
            <div className="hidden sm:flex flex-col sm:flex-row sm:space-x-6 sm:justify-center sm:space-y-0 space-y-4">
              <button
                onClick={() => setShowJoinModal(true)}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Ingin Bergabung?
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('tentang');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="border-2 border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Pelajari Lebih Lanjut
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => {
              const element = document.getElementById('tentang');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="text-white text-2xl hover:text-green-300 transition-colors duration-200"
          >
            <i className="fas fa-chevron-down"></i>
          </button>
        </div>
      </section>

      {/* Join Modal - Contact Kader */}
      {showJoinModal && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setShowJoinModal(false)}
        >
          <div 
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all duration-300 scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 md:p-8">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-gray-800 mb-2">Bergabung dengan HMI</h3>
                    <p className="text-gray-600 text-lg">
                      Ingin menjadi bagian dari keluarga besar HMI? Silahkan hubungi kader pengkaderan kami
                    </p>
                  </div>
                  <button
                    onClick={() => setShowJoinModal(false)}
                    className="text-gray-400 hover:text-gray-600 text-2xl p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>

              {/* Kader Cards */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {kaderData.map((kader) => (
                  <div key={kader.id} className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
                    {/* Foto dan Info Dasar */}
                    <div className="text-center mb-6">
                      <div className="relative inline-block mb-4">
                        <img
                          src={kader.foto}
                          alt={kader.nama}
                          className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                          onError={(e) => {
                            // Fallback jika foto tidak ada
                            e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(kader.nama)}&background=22c55e&color=fff&size=96`;
                          }}
                        />
                        <div className="absolute -bottom-1 -right-1 bg-green-500 text-white rounded-full p-1">
                          <i className="fas fa-user-graduate text-xs"></i>
                        </div>
                      </div>
                      <h4 className="text-xl font-bold text-gray-800 mb-1">{kader.nama}</h4>
                      <p className="text-green-600 font-semibold">{kader.jabatan}</p>
                    </div>

                    {/* Contact Options */}
                    <div className="space-y-3">
                      {/* WhatsApp */}
                      <button
                        onClick={() => handleWhatsAppContact(kader.whatsapp, kader.nama)}
                        className="w-full flex items-center justify-center space-x-3 bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md"
                      >
                        <i className="fab fa-whatsapp text-xl"></i>
                        <span className="font-semibold">Chat WhatsApp</span>
                      </button>

                      {/* Telegram */}
                      {/* <button
                        onClick={() => handleTelegramContact(kader.telegram)}
                        className="w-full flex items-center justify-center space-x-3 bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md"
                      >
                        <i className="fab fa-telegram text-xl"></i>
                        <span className="font-semibold">Chat Telegram</span>
                      </button> */}

                      {/* Instagram */}
                      <button
                        onClick={() => handleInstagramContact(kader.instagram)}
                        className="w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md"
                      >
                        <i className="fab fa-instagram text-xl"></i>
                        <span className="font-semibold">Follow Instagram</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Info Tambahan */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
                <div className="mb-4">
                  <i className="fas fa-info-circle text-blue-500 text-2xl mb-2"></i>
                  <h5 className="text-lg font-semibold text-gray-800 mb-2">Informasi Penting</h5>
                </div>
                <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-700">
                  <div className="flex items-center justify-center space-x-2">
                    <i className="fas fa-clock text-blue-500"></i>
                    <span>Pendaftaran dibuka sepanjang tahun</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <i className="fas fa-graduation-cap text-blue-500"></i>
                    <span>Khusus mahasiswa aktif UNIBA</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <i className="fas fa-heart text-blue-500"></i>
                    <span>Bergabunglah dalam keluarga HMI</span>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="text-center mt-6 pt-6 border-t border-gray-200">
                <p className="text-gray-600">
                  Jangan ragu untuk menghubungi kami! Tim pengkaderan HMI siap membantu Anda
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;