import React, { useState, useEffect } from 'react';

const Preloader: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 bg-white z-50 flex items-center justify-center transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="text-center">
        <div className="flex items-center space-x-3 mb-4">
          <img src="/logo1.png" alt="Logo HMI" className="h-16 w-auto animate-pulse" />
          <img src="/logo2.png" alt="Logo Universitas" className="h-16 w-auto animate-pulse" />
        </div>
        <div className="w-12 h-12 border-4 border-green-200 border-t-green-600 rounded-full animate-spin mx-auto"></div>
        <p className="text-gray-600 mt-4 font-semibold">Memuat...</p>
      </div>
    </div>
  );
};

export default Preloader;