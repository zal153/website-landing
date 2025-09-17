import React from 'react';

interface NewsArticleProps {
  date: string;
  title: string;
  excerpt: string;
  imageUrl: string;
}

const NewsArticle: React.FC<NewsArticleProps> = ({ date, title, excerpt, imageUrl }) => {
  return (
    <article className="card-hover bg-white rounded-lg shadow-lg overflow-hidden fade-in">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <span className="text-sm text-green-600 font-semibold">{date}</span>
        <h3 className="text-xl font-bold text-gray-800 mt-2 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <a
          href="#"
          className="text-green-600 hover:text-green-700 font-semibold"
          onClick={(e) => e.preventDefault()}
        >
          Baca Selengkapnya <i className="fas fa-arrow-right ml-1"></i>
        </a>
      </div>
    </article>
  );
};

const News: React.FC = () => {
  const newsArticles = [
    {
      date: '15 September 2025',
      title: 'Pelantikan Pengurus HMI Periode 2025-2026',
      excerpt: 'Acara pelantikan pengurus baru HMI Universitas Bahaudin Mudhary Madura telah dilaksanakan dengan sukses...',
      imageUrl: 'https://via.placeholder.com/400x250/22c55e/ffffff?text=Berita+1',
    },
    {
      date: '10 September 2025',
      title: 'Seminar Nasional "Islam dan Modernisasi"',
      excerpt: 'HMI menyelenggarakan seminar nasional dengan tema Islam dan Modernisasi yang dihadiri ratusan peserta...',
      imageUrl: 'https://via.placeholder.com/400x250/22c55e/ffffff?text=Berita+2',
    },
    {
      date: '5 September 2025',
      title: 'Bakti Sosial di Desa Terpencil',
      excerpt: 'Kegiatan bakti sosial HMI memberikan bantuan kepada masyarakat kurang mampu di desa terpencil...',
      imageUrl: 'https://via.placeholder.com/400x250/22c55e/ffffff?text=Berita+3',
    },
  ];

  return (
    <section id="berita" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Berita Terkini</h2>
          <div className="w-20 h-1 bg-green-600 mx-auto"></div>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {newsArticles.map((article, index) => (
            <NewsArticle key={index} {...article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;