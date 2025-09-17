import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    subjek: '',
    pesan: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowError(false);

    try {
      // EmailJS configuration
      const templateParams = {
        from_name: formData.nama,
        from_email: formData.email,
        subject: formData.subjek,
        message: formData.pesan,
        to_email: 'hmi@unbamadura.ac.id', // Email tujuan
      };

      await emailjs.send(
        'service_qgl5y2i', // Dapatkan dari EmailJS dashboard
        'template_xvqxias', // Dapatkan dari EmailJS dashboard
        templateParams,
        'b9jgdE1m57r8eP_DM' // Dapatkan dari EmailJS dashboard
      );

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
    } catch (error) {
      console.error('Email sending failed:', error);
      setShowError(true);
      
      // Hide error message after 5 seconds
      setTimeout(() => {
        setShowError(false);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
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
                    Jl. Raya Lenteng, Aredake, Batuan, Kec. Batuan, Kabupaten Sumenep, Jawa Timur 69451.
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
                  <span className="ml-4 text-gray-600">@hmi.kom_p_uniba</span>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Ikuti Media Sosial Kami</h4>
                <div className="flex space-x-4">
                  {[
                    {
                      icon: 'fab fa-facebook-f',
                      href: '#',
                      label: 'Facebook',
                    },
                    {
                      icon: 'fab fa-instagram',
                      href: 'https://www.instagram.com/hmi.kom_p_uniba',
                      label: 'Instagram',
                    },
                    {
                      icon: 'fab fa-twitter',
                      href: '#',
                      label: 'Twitter',
                    },
                    {
                      icon: 'fab fa-youtube',
                      href: '#',
                      label: 'YouTube',
                    }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target={social.href !== '#' ? '_blank' : '_self'}
                      rel={social.href !== '#' ? 'noopener noreferrer' : undefined}
                      onClick={social.href === '#' ? (e) => e.preventDefault() : undefined}
                      className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full transition-colors duration-200"
                      title={social.label}
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
                      Mengirim Email...
                    </>
                  ) : (
                    'Kirim Email'
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
            <span>Email berhasil dikirim! Kami akan segera merespons.</span>
          </div>
        </div>
      )}

      {/* Error Message */}
      {showError && (
        <div className="fixed top-20 right-4 bg-red-600 text-white px-6 py-4 rounded-lg shadow-lg z-50 transform transition-transform duration-300">
          <div className="flex items-center">
            <i className="fas fa-exclamation-circle mr-3"></i>
            <span>Gagal mengirim email. Silakan coba lagi.</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;