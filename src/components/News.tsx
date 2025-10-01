import React from 'react';

interface NewsArticleProps {
  date: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  externalUrl?: string;
}

const NewsArticle: React.FC<NewsArticleProps> = ({ date, title, excerpt, imageUrl, externalUrl }) => {
  return (
    <article className="card-hover bg-white rounded-lg shadow-lg overflow-hidden fade-in">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <span className="text-sm text-green-600 font-semibold">{date}</span>
        <h3 className="text-xl font-bold text-gray-800 mt-2 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        {externalUrl ? (
          <a
            href={externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:text-green-700 font-semibold"
          >
            Baca Selengkapnya <i className="fas fa-external-link-alt ml-1"></i>
          </a>
        ) : (
          <a
            href="#"
            className="text-green-600 hover:text-green-700 font-semibold"
            onClick={(e) => e.preventDefault()}
          >
            Baca Selengkapnya <i className="fas fa-arrow-right ml-1"></i>
          </a>
        )}
      </div>
    </article>
  );
};

const News: React.FC = () => {
  const newsArticles = [
    {
      date: '16 September 2025',
      title: 'HMI Komisariat P UNIBA Madura Miliki Nahkoda Baru',
      excerpt: 'Himpunan Mahasiswa Islam (HMI) Komisariat P UNIBA Madura resmi memiliki nahkoda baru. Dalam Rapat Anggota Komisariat (RAK) yang digelar baru-baru ini...',
      imageUrl: '/image.png',
      externalUrl: 'https://surabaya.blok-a.com/pendidikan/hmi-komisariat-p-uniba-madura-miliki-nahkoda-baru/', // Link eksternal
    },
    {
      date: '29 September 2025',
      title: 'Bersama HMI dan Menjadi Mahasiswa “Privileged”',
      excerpt: 'Keputusan untuk bergabung Himpunan Mahasiswa Islam (HMI) bukanlah sesuatu yang direncanakan secara matang sejak awal. Motivasi saya cukup sederhana: “yang penting saya ikut organisasi.” Namun, seiring berjalannya waktu,...',
      imageUrl: 'https://detektifjatim.com/wp-content/uploads/2025/09/IMG-20250929-WA0000.jpg',
      externalUrl: 'https://detektifjatim.com/2025/09/bersama-hmi-dan-menjadi-mahasiswa-privileged/',
    },
    {
      date: '29 September 2025',
      title: 'Pentingnya Berorganisasi dalam Mengembangkan Intelektual Mahasiswa',
      excerpt: 'HMI merupakan singkatan dari himpunan mahasiswa islam yang didirikan oleh Lafrane Pane pada tanggal 5 februari tahun 1947 di yogyakarta. yang bertujuan...',
      imageUrl: 'https://globalindo.net/wp-content/uploads/2025/09/IMG-20250929-WA0056-2048x1152.jpg',
      externalUrl: 'https://globalindo.net/2025/09/29/43492/',
    },
    {
      date: '30 September 2025',
      title: 'Himpunan Mahasiswa Islam: Organisasi Sebagai Episentrum Peradaban',
      excerpt: 'Jika ada organisasi kemahasiswaan yang mampu memadukan nilai keislaman dan kebangsaan dalam satu tarikan nafas, maka Himpunan Mahasiswa Islam HMI adalah jawabannya. Bagi saya pribadi,...',
      imageUrl: 'https://limadetik.com/wp-content/uploads/IMG-20250930-WA0002-scaled-e1759244488873.jpg',
      externalUrl: 'https://limadetik.com/himpunan-mahasiswa-islam-organisasi-sebagai-episentrum-peradaban/',
    },
    {
      date: '1 Oktober 2025',
      title: 'Peran HMI dalam Meningkatkan SDM dan Kepekaan Mahasiswa Pada Isu Sosial',
      excerpt: 'Mahasiswa bukan hanya sekadar individu yang duduk di bangku kuliah, tetapi juga agen perubahan yang kelak akan menentukan arah bangsa. Dalam konteks ini, Himpunan Mahasiswa Islam (HMI) hadir sebagai...',
      imageUrl: 'https://detektifjatim.com/wp-content/uploads/2025/10/IMG-20251001-WA0002-1920x1080.jpg',
      externalUrl: 'https://detektifjatim.com/2025/10/peran-hmi-dalam-meningkatkan-sdm-dan-kepekaan-mahasiswa-pada-isu-sosial/',
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