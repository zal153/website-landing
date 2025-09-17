import React, { useState } from 'react';

interface LightboxProps {
  isOpen: boolean;
  imageUrl: string;
  imageAlt: string;
  imageIndex: number;
  totalImages: number;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  imageUrl,
  imageAlt,
  imageIndex,
  totalImages,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
      <div className="relative max-w-4xl max-h-full">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="max-w-full max-h-full object-contain rounded-lg"
        />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 text-3xl"
        >
          <i className="fas fa-times"></i>
        </button>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
          <p className="text-lg font-semibold">{imageAlt}</p>
          <p className="text-sm opacity-75">
            Gambar {imageIndex + 1} dari {totalImages}
          </p>
        </div>
      </div>
    </div>
  );
};

const Gallery: React.FC = () => {
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    imageUrl: '',
    imageAlt: '',
    imageIndex: 0,
  });

  const galleryImages = [
    // {
    //   url: '/selamat.jpg',
    //   alt: 'Galeri 1',
    // },
    {
      url: '/kajian.png',
      alt: 'Galeri 2',
    },
    {
      url: '/sarasehan.png',
      alt: 'Galeri 3',
    },
    // {
    //   url: 'https://via.placeholder.com/300x200/22c55e/ffffff?text=Kegiatan+4',
    //   alt: 'Galeri 4',
    // },
    // {
    //   url: 'https://via.placeholder.com/300x200/22c55e/ffffff?text=Kegiatan+5',
    //   alt: 'Galeri 5',
    // },
    // {
    //   url: 'https://via.placeholder.com/300x200/22c55e/ffffff?text=Kegiatan+6',
    //   alt: 'Galeri 6',
    // },
    // {
    //   url: 'https://via.placeholder.com/300x200/22c55e/ffffff?text=Kegiatan+7',
    //   alt: 'Galeri 7',
    // },
    // {
    //   url: 'https://via.placeholder.com/300x200/22c55e/ffffff?text=Kegiatan+8',
    //   alt: 'Galeri 8',
    // },
  ];

  const openLightbox = (imageUrl: string, imageAlt: string, index: number) => {
    setLightbox({
      isOpen: true,
      imageUrl,
      imageAlt,
      imageIndex: index,
    });
  };

  const closeLightbox = () => {
    setLightbox({
      isOpen: false,
      imageUrl: '',
      imageAlt: '',
      imageIndex: 0,
    });
  };

  return (
    <>
      <section id="galeri" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Galeri</h2>
            <div className="w-20 h-1 bg-green-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="fade-in card-hover cursor-pointer">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-40 object-cover rounded-lg"
                  onClick={() => openLightbox(image.url, image.alt, index)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        isOpen={lightbox.isOpen}
        imageUrl={lightbox.imageUrl}
        imageAlt={lightbox.imageAlt}
        imageIndex={lightbox.imageIndex}
        totalImages={galleryImages.length}
        onClose={closeLightbox}
      />
    </>
  );
};

export default Gallery;