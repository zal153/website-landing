import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    subjek: '',
    pesan: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({
        nama: '',
        email: '',
        subjek: '',
        pesan: '',
      });

      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <section id="kontak" className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Kontak Kami</h2>
            <div className="w-20 h-1 bg-green-600 mx-auto"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="fade-in">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Hubungi Kami</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <i className="fas fa-map-marker-alt text-green-600 text-xl w-6"></i>
                  <span className="ml-4 text-gray-600">
                    Universitas Bahaudin Mudhary Madura, Jl. Raya Telang, PO BOX 1, Kamal, Bangkalan, Madura
                  </span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-phone text-green-600 text-xl w-6"></i>
                  <span className="ml-4 text-gray-600">+62 812-3456-7890</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-envelope text-green-600 text-xl w-6"></i>
                  <span className="ml-4 text-gray-600">hmi@unbamadura.ac.id</span>
                </div>
                <div className="flex items-center">
                  <i className="fab fa-instagram text-green-600 text-xl w-6"></i>
                  <span className="ml-4 text-gray-600">@hmi_unbamadura</span>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Ikuti Media Sosial Kami</h4>
                <div className="flex space-x-4">
                  {[
                    { icon: 'fab fa-facebook-f', href: '#' },
                    { icon: 'fab fa-instagram', href: 'https://www.instagram.com/hmi.kom_p_uniba' },
                    { icon: 'fab fa-twitter', href: '#' },
                    { icon: 'fab fa-youtube', href: '#' },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      onClick={(e) => e.preventDefault()}
                      className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full transition-colors duration-200"
                    >
                      <i className={social.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="fade-in">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Nama</label>
                  <input
                    type="text"
                    name="nama"
                    value={formData.nama}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Subjek</label>
                  <input
                    type="text"
                    name="subjek"
                    value={formData.subjek}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Pesan</label>
                  <textarea
                    rows={5}
                    name="pesan"
                    value={formData.pesan}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-200 resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin mr-2"></i>
                      Mengirim...
                    </>
                  ) : (
                    'Kirim Pesan'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Success Message */}
      {showSuccess && (
        <div className="fixed top-20 right-4 bg-green-600 text-white px-6 py-4 rounded-lg shadow-lg z-50 transform transition-transform duration-300">
          <div className="flex items-center">
            <i className="fas fa-check-circle mr-3"></i>
            <span>Pesan berhasil dikirim! Kami akan segera merespons.</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;