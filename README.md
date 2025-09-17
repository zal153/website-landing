# HMI Website - Universitas Bahaudin Mudhary Madura

Website resmi Himpunan Mahasiswa Islam (HMI) Universitas Bahaudin Mudhary Madura yang dibangun dengan Vite + React + Tailwind CSS v4.1.

## 🚀 Teknologi yang Digunakan

- **Vite** - Build tool dan development server yang cepat
- **React 19** - Library JavaScript untuk membangun UI
- **TypeScript** - Superset JavaScript dengan static typing
- **Tailwind CSS v4.1** - Framework CSS utility-first
- **Font Awesome** - Icon library

## 📋 Prasyarat

Pastikan Anda telah menginstall:
- Node.js (versi 18 atau lebih baru)
- pnpm (package manager)

## 🛠️ Instalasi

1. Clone repository ini
2. Masuk ke direktori project:
   ```bash
   cd website-hmi
   ```

3. Install dependencies:
   ```bash
   pnpm install
   ```

## 🏃‍♂️ Menjalankan Aplikasi

### Development Server
```bash
pnpm dev
```
Aplikasi akan berjalan di `http://localhost:5173` (atau port lain jika 5173 sedang digunakan).

### Build untuk Production
```bash
pnpm build
```

### Preview Build Result
```bash
pnpm preview
```

## 📁 Struktur Project

```
src/
├── components/          # Komponen React
│   ├── Navbar.tsx      # Navigasi utama
│   ├── Hero.tsx        # Section hero dengan modal bergabung
│   ├── About.tsx       # Section tentang HMI
│   ├── Structure.tsx   # Struktur organisasi
│   ├── Gallery.tsx     # Galeri foto dengan lightbox
│   ├── News.tsx        # Berita terkini
│   ├── Contact.tsx     # Kontak dan form
│   ├── Footer.tsx      # Footer website
│   ├── BackToTop.tsx   # Tombol back to top
│   └── Preloader.tsx   # Loading screen
├── hooks/               # Custom React hooks
│   └── useFadeInAnimation.ts  # Hook untuk animasi fade-in
├── App.tsx             # Komponen utama
├── main.tsx            # Entry point
└── index.css           # CSS global dengan Tailwind imports
```

## ✨ Fitur

- **Responsive Design** - Tampilan optimal di semua device
- **Smooth Scrolling** - Navigasi halus antar section
- **Modal Bergabung** - Form pendaftaran anggota baru
- **Gallery Lightbox** - Preview gambar dalam overlay
- **Contact Form** - Form kontak dengan validasi
- **Animasi Fade-in** - Animasi saat scroll
- **Back to Top** - Tombol kembali ke atas
- **Preloader** - Loading screen saat pertama kali buka

## 🎨 Kustomisasi

### Logo
Ganti file logo di folder `public/`:
- `logo1.png` - Logo HMI
- `logo2.png` - Logo Universitas

### Background Hero
Update URL background image di `src/index.css`:
```css
.hero-bg {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('path-to-your-image.jpg');
}
```

### Konten
Edit komponen di folder `src/components/` untuk mengubah konten:
- Data struktur organisasi di `Structure.tsx`
- Berita di `News.tsx`
- Informasi kontak di `Contact.tsx`
- dll.

## 📝 Tailwind CSS v4.1

Project ini menggunakan Tailwind CSS v4.1 dengan konfigurasi minimal melalui Vite plugin. CSS classes Tailwind dapat digunakan langsung di komponen React.

## 🤝 Kontribusi

1. Fork repository
2. Buat feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📞 Kontak

HMI Universitas Bahaudin Mudhary Madura
- Email: hmi@unbamadura.ac.id
- Phone: +62 812-3456-7890
- Instagram: @hmi_unbamadura
