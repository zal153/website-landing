import React from 'react';

interface OfficerProps {
  name: string;
  position: string;
  description: string;
  imageUrl: string;
}

const OfficerCard: React.FC<OfficerProps> = ({ name, position, description, imageUrl }) => {
  return (
    <div className="text-center card-hover bg-white rounded-lg shadow-lg p-8 fade-in">
      <img
        src={imageUrl}
        alt={position}
        className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
      />
      <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
      <p className="text-green-600 font-semibold mb-4">{position}</p>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

const Structure: React.FC = () => {
  const officers = [
    {
      name: 'Ahmad Fauzi',
      position: 'Ketua Umum',
      description: 'Memimpin dan mengkoordinasikan seluruh kegiatan organisasi HMI',
      imageUrl: 'https://via.placeholder.com/200x200/22c55e/ffffff?text=Ketua',
    },
    {
      name: 'Siti Khadijah',
      position: 'Sekretaris Umum',
      description: 'Mengelola administrasi dan dokumentasi organisasi',
      imageUrl: 'https://via.placeholder.com/200x200/22c55e/ffffff?text=Sekretaris',
    },
    {
      name: 'Muhammad Rizki',
      position: 'Bendahara Umum',
      description: 'Mengelola keuangan dan aset organisasi',
      imageUrl: 'https://via.placeholder.com/200x200/22c55e/ffffff?text=Bendahara',
    },
  ];

  return (
    <section id="struktur" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Struktur Organisasi</h2>
          <div className="w-20 h-1 bg-green-600 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {officers.map((officer, index) => (
            <OfficerCard key={index} {...officer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Structure;