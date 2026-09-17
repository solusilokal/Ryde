# Ryde - Mini Website Rental Motor Praktis & Terpercaya

Website landing page interaktif & mobile-first untuk **Ryde Rental Motor Palangka Raya**. Dilengkapi dengan katalog armada motor, rincian harga sewa harian, formulir booking langsung terintegrasi ke WhatsApp, integrasi Google Maps, FAQ akordeon, testimoni pelanggan, dan fitur bagikan link (share modal).

---

## 🚀 Cara Menjalankan & Preview

Terdapat **2 cara mudah** untuk melihat preview website ini:

### 1. Langsung Tanpa Terminal (Paling Cepat & Praktis)
- Buka folder `rental motor` di Windows Explorer.
- Cukup **klik dua kali (double-click)** pada file `standalone.html`.
- Website akan langsung terbuka di peramban (Chrome / Edge / Firefox) lengkap dengan semua styling Tailwind CSS, ikon Lucide, dan interaktivitasnya tanpa perlu koneksi web server.

---

### 2. Menggunakan Vite Dev Server (Hot Reload)
- **Cara 1:** Klik dua kali file **`preview.bat`**. Pilih opsi `[2]` untuk menjalankan Vite Dev Server (`npm run dev`). Script akan otomatis membuka browser di `http://localhost:3000`.
- **Cara 2:** Buka terminal di folder ini dan jalankan:
  ```bash
  npm run dev
  ```
- Buka peramban di [http://localhost:3000](http://localhost:3000).

---

## 📁 Struktur File Proyek

```
rental motor/
├── public/
│   ├── logo-ryde.png                                # Logo profil Ryde Rental
│   ├── background-ryde.jpg                          # Background visual website
│   ├── gambarSEO.png                                # Gambar kartu preview SEO & WhatsApp
│   └── motor-*.webp                                 # Foto armada motor HD
├── src/
│   ├── App.jsx                                      # Komponen utama React
│   ├── index.css                                    # Konfigurasi Tailwind & Google Fonts Plus Jakarta Sans
│   └── main.jsx                                     # Entry point aplikasi React 18
├── dist/                                            # Hasil kompilasi produksi Vite
├── standalone.html                                  # File mandiri lengkap (bisa dibuka langsung tanpa server)
├── preview.bat                                      # Script launcher 1-klik untuk Windows
├── deploy_github.bat                                # Script deploy 1-klik ke GitHub
├── index.html                                       # File HTML utama untuk Vite dev & build
├── build_standalone.cjs                             # Skrip bundler esbuild untuk standalone.html
├── package.json                                     # Konfigurasi dependensi npm & skrip
├── vite.config.js                                   # Konfigurasi Vite server & build
├── tailwind.config.js                               # Konfigurasi Tailwind CSS
├── postcss.config.js                                # Konfigurasi PostCSS
└── ryde_rental_app.tsx                              # Source code komponen Ryde
```

---

## ✨ Fitur-Fitur Unggulan

- **Hero Banner & Profile Ryde**: Desain mobile-first elegan bernuansa navy teal (`#0E516D`) dan oranye energik (`#FF7B00`).
- **Media Sosial & Lokasi Garasi**: Tombol direct link ke Instagram, TikTok, dan Google Maps lokasi garasi di Palangka Raya.
- **Badge Keunggulan**: Helm SNI, Jas Hujan, dan 24/7 Technical Support.
- **Tentang Kami & Sejarah**: Narasi profil dan riwayat Ryde dari 2020 hingga berkembang saat ini.
- **Katalog Armada Motor**: Slider kartu motor (Honda Vario 160, Yamaha NMAX, Honda Beat Street, Yamaha Aerox) lengkap dengan foto, tahun, tipe, dan harga sewa.
- **Tanya Jawab (FAQ)**: Akordeon interaktif membahas syarat E-KTP & SIM C, antar-jemput, garansi mesin, dan BBM.
- **Testimoni Pelanggan**: Review dan rating bintang dari para penyewa setia.
- **Formulir Pemesanan WhatsApp**: Input nama, motor, tanggal, durasi, dan metode antar-jemput yang otomatis mengarahkan ke WhatsApp admin (+6289529605601).
- **Sticky CTA**: Tombol "Pesan Motor Sekarang" yang melayang saat pengguna melakukan scroll ke bawah.
- **Modal Berbagi (Share Modal)**: Fitur salin tautan, bagikan ke WhatsApp, Facebook, dan X (Twitter).
