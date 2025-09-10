# CRUD Mahasiswa

[![Live Demo](https://img.shields.io/badge/Live%20Demo-pemweb1.fajrifarid.com-brightgreen)](https://pemweb1.fajrifarid.com)
[![GitHub Repository](https://img.shields.io/badge/GitHub-fajri--farid/pemweb--20251-blue)](https://github.com/fajri-farid/pemweb-20251)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed-Vercel-black?logo=vercel)](https://pemweb1.fajrifarid.com)
[![Node.js](https://img.shields.io/badge/Node.js-v22.18.0-green)](https://nodejs.org/)
[![pnpm](https://img.shields.io/badge/pnpm-v10.15.1-orange)](https://pnpm.io/)
[![Status](https://img.shields.io/badge/Status-In%20Progress-yellow)](https://github.com/fajri-farid/pemweb-20251)

## 📋 Deskripsi

CRUD Mahasiswa adalah aplikasi web sederhana untuk mengelola data mahasiswa yang dibangun menggunakan teknologi frontend modern. Aplikasi ini merupakan **tugas praktikum dari mata kuliah Pemrograman Website, Program Studi Teknik Informatika, Universitas Hasanuddin Semester 5**.

> 🚧 **Status**: Project ini masih dalam tahap pengembangan dan akan terus diperbarui seiring berjalannya perkuliahan.

Aplikasi ini memungkinkan pengguna untuk melakukan operasi Create, Read, Update, dan Delete (CRUD) pada data mahasiswa dengan interface yang user-friendly dan responsif. Data disimpan menggunakan localStorage sebagai media penyimpanan, sehingga data akan tersimpan secara lokal di browser pengguna tanpa memerlukan database eksternal.

## ✨ Fitur Utama

- **Create (Tambah)**: Menambahkan data mahasiswa baru
- **Read (Lihat)**: Menampilkan daftar semua mahasiswa
- **Update (Edit)**: Mengubah data mahasiswa yang sudah ada
- **Delete (Hapus)**: Menghapus data mahasiswa
- **Local Storage**: Data tersimpan secara lokal di browser

## 🛠️ Teknologi yang Digunakan

![Tech Stack](https://skillicons.dev/icons?i=html,css,js)

- **HTML5**: Struktur halaman web
- **CSS3**: Styling dan layout responsif
- **JavaScript (ES6+)**: Logika aplikasi dan manipulasi DOM
- **LocalStorage**: Penyimpanan data lokal

## 📦 Tools Pengembangan

Proyek ini menggunakan berbagai tools modern untuk memastikan kualitas kode dan konsistensi:

- **ESLint**: Linting JavaScript untuk mendeteksi dan memperbaiki masalah kode
- **Prettier**: Code formatter untuk menjaga konsistensi format kode
- **Husky**: Git hooks untuk menjalankan script sebelum commit
- **Commitlint**: Memastikan format commit message sesuai konvensi
- **lint-staged**: Menjalankan linter hanya pada file yang di-stage
- **live-server**: Development server dengan hot reload

## 🚀 Instalasi dan Menjalankan Proyek

### Prasyarat

**Environment Pengembangan:**

Project ini dikembangkan dan ditest menggunakan versi berikut:

- **Node.js**: v22.18.0
- **pnpm**: v10.15.1

**Rekomendasi untuk Development:**

Untuk memastikan kompatibilitas dan menghindari masalah dependency, **sangat disarankan menggunakan versi yang sama** atau lebih baru:

- **Node.js**: v22.18.0 atau versi LTS terbaru (minimal v20.x)
- **Package Manager**: pnpm v10.15.1 atau versi terbaru dari package manager pilihan Anda

> ⚠️ **Important**: Jika mengalami masalah saat instalasi atau menjalankan aplikasi, pastikan versi Node.js dan package manager Anda sesuai dengan yang direkomendasikan di atas.

### Langkah Instalasi

1. **Clone repository**

   ```bash
   git clone https://github.com/fajri-farid/pemweb-20251.git
   cd pemweb-20251
   ```

2. **Install dependencies**

   Pilih salah satu package manager berikut:

   ```bash
   # Dengan pnpm (direkomendasikan)
   pnpm install

   # Dengan npm
   npm install

   # Dengan yarn
   yarn install
   ```

3. **Menjalankan aplikasi**

   ```bash
   # Dengan pnpm
   pnpm start

   # Dengan npm
   npm start

   # Dengan yarn
   yarn start
   ```

   Aplikasi akan berjalan di `http://localhost:5500` dan akan terbuka otomatis di browser.

### Script yang Tersedia

Ganti `pnpm` dengan package manager pilihan Anda (`npm` atau `yarn`):

- `pnpm start` - Menjalankan development server
- `pnpm lint` - Menjalankan ESLint untuk memeriksa kode
- `pnpm lint:fix` - Memperbaiki masalah ESLint secara otomatis
- `pnpm format` - Memformat kode menggunakan Prettier
- `pnpm test` - Menjalankan linting dan format checking
- `pnpm prepare` - Setup Husky git hooks (dijalankan otomatis setelah install)

## 🌐 Deployment

Aplikasi ini di-deploy menggunakan **Vercel** untuk kemudahan akses dan testing:

- **Platform**: [Vercel](https://vercel.com/)
- **Live URL**: [https://pemweb1.fajrifarid.com](https://pemweb1.fajrifarid.com)
- **Auto-deployment**: Setiap push ke branch `main` akan otomatis ter-deploy
- **Preview deployment**: Pull request akan mendapat preview URL untuk testing

> 💡 **Note**: Deployment configuration dapat dilihat di file konfigurasi Vercel pada repository ini.

## 📁 Struktur Proyek

```text
pemweb/
├── .husky/             # Git hooks configuration
├── src/
│   ├── index.html      # Halaman utama aplikasi
│   ├── script.js       # Logika JavaScript utama
│   └── style.css       # Styling CSS
├── package.json        # Konfigurasi npm dan dependencies
├── pnpm-lock.yaml      # Lock file untuk pnpm
├── eslint.config.mjs   # Konfigurasi ESLint
├── commitlint.config.js # Konfigurasi Commitlint
└── README.md           # File ini
```

## 🤝 Kontribusi

Kontribusi sangat diterima! Untuk berkontribusi pada proyek ini:

> ⚠️ **Catatan**: Pull Request hanya akan dipertimbangkan jika repo ini publik. Untuk repo private, silakan hubungi maintainer terlebih dahulu.

1. **Fork** repository ini
2. **Buat branch** untuk perubahan baru (`git checkout -b feature/fitur-baru` atau `git checkout -b fix/perbaikan` atau `git checkout -b style/optimasi-ui`)
3. **Commit** perubahan Anda (`git commit -m 'feat: menambahkan fitur baru'` atau `git commit -m 'fix: memperbaiki bug'` atau `git commit -m 'style: optimasi tampilan'`)
4. **Push** ke branch (`git push origin nama-branch-anda`)
5. **Buat Pull Request**

### Panduan Commit

Proyek ini menggunakan [Conventional Commits](https://www.conventionalcommits.org/). Format commit message:

```text
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

Contoh:

- `feat: menambahkan fitur pencarian mahasiswa`
- `fix: memperbaiki bug pada form edit`
- `docs: memperbarui dokumentasi README`

### Code Style

- Pastikan kode Anda lulus ESLint checking (`pnpm lint`)
- Format kode menggunakan Prettier (`pnpm format`)
- Tulis kode yang mudah dibaca dan dipahami
- Tambahkan komentar untuk logika yang kompleks

## 📄 Lisensi

Proyek ini dilisensikan under [MIT License](LICENSE). Anda bebas untuk menggunakan, memodifikasi, dan mendistribusikan kode ini.

© 2025 Fajri Farid

## 🔗 Link Penting

- **Live Demo**: [https://pemweb1.fajrifarid.com](https://pemweb1.fajrifarid.com)
- **Repository GitHub**: [https://github.com/fajri-farid/pemweb-20251](https://github.com/fajri-farid/pemweb-20251)
- **Issues**: [https://github.com/fajri-farid/pemweb-20251/issues](https://github.com/fajri-farid/pemweb-20251/issues)

## 👨‍💻 Author

### Fajri Farid

- Email: [fajrijry14@gmail.com](mailto:fajrijry14@gmail.com)
- Website: [https://fajrifarid.com](https://fajrifarid.com)
- GitHub: [@fajri-farid](https://github.com/fajri-farid)
- Instagram: [@fajri_farid](instagram.com/fajri_farid)
- Linkedin: [@muhfajrifarid](https://www.linkedin.com/in/muhfajrifarid)

---

Jika Anda menemukan bug atau memiliki saran untuk perbaikan, jangan ragu untuk membuat [issue](https://github.com/fajri-farid/pemweb-20251/issues) atau mengirim pull request. Terima kasih atas kontribusi Anda! 🚀
