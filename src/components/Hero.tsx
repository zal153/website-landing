import React, { useState } from 'react';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const JoinModal: React.FC<JoinModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    nama: '',
    nim: '',
    prodi: '',
    whatsapp: '',
    alasan: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setFormData({
      nama: '',
      nim: '',
      prodi: '',
      whatsapp: '',
      alasan: '',
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6 transform transition-all duration-300">
        {!isSubmitted ? (
          <>
            <div className="text-center mb-6">
              <i className="fas fa-users text-green-600 text-4xl mb-4"></i>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Bergabung dengan HMI</h3>
              <p className="text-gray-600">Isi formulir di bawah untuk bergabung dengan keluarga besar HMI</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Nama Lengkap</label>
                <input
                  type="text"
                  required
                  value={formData.nama}
                  onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-200"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">NIM</label>
                <input
                  type="text"
                  required
                  value={formData.nim}
                  onChange={(e) => setFormData({ ...formData, nim: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-200"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Program Studi</label>
                <select
                  required
                  value={formData.prodi}
                  onChange={(e) => setFormData({ ...formData, prodi: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-200"
                >
                  <option value="">Pilih Program Studi</option>
                  <option value="Teknik Informatika">Teknik Informatika</option>
                  <option value="Sistem Informasi">Sistem Informasi</option>
                  <option value="Manajemen">Manajemen</option>
                  <option value="Akuntansi">Akuntansi</option>
                  <option value="Hukum">Hukum</option>
                  <option value="Pendidikan Bahasa Indonesia">Pendidikan Bahasa Indonesia</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Nomor WhatsApp</label>
                <input
                  type="tel"
                  required
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-200"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Alasan Bergabung</label>
                <textarea
                  rows={3}
                  required
                  value={formData.alasan}
                  onChange={(e) => setFormData({ ...formData, alasan: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-200 resize-none"
                  placeholder="Ceritakan alasan Anda ingin bergabung dengan HMI..."
                ></textarea>
              </div>

              <div className="flex space-x-4 pt-4">
                <button
                  type="button"
                  onClick={handleClose}
                  className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  Kirim Pendaftaran
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <i className="fas fa-check-circle text-green-600 text-6xl mb-4"></i>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Pendaftaran Berhasil!</h3>
            <p className="text-gray-600 mb-6">
              Terima kasih telah mendaftar. Tim HMI akan menghubungi Anda dalam 1-2 hari kerja.
            </p>
            <button
              onClick={handleClose}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Tutup
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="home" className="hero-bg min-h-screen flex items-center justify-center text-white">
        <div className="text-center px-4 fade-in active">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Himpunan Mahasiswa Islam
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Universitas Bahaudin Mudhary Madura
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Ingin Bergabung?
          </button>
        </div>
      </section>

      <JoinModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Hero;