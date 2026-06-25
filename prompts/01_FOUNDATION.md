01_FOUNDATION.md

Sprint 1 — Project Foundation

Objective

Membangun fondasi proyek Bandung Ride Radar yang siap dikembangkan pada sprint berikutnya.

Sprint ini hanya berfokus pada inisialisasi proyek, struktur direktori, konfigurasi, dan deployment awal.

Jangan mengimplementasikan fitur bisnis apa pun.

---

Context

Sebelum memulai, baca dokumen berikut:

1. docs/PRD.md
2. docs/CODING_GUIDE.md
3. docs/DESIGN.md
4. docs/ARCHITECTURE.md
5. docs/ROADMAP.md

Seluruh implementasi harus mengikuti dokumen tersebut.

---

Main Tasks

1. Inisialisasi Proyek

Buat proyek menggunakan:

- Next.js 15
- App Router
- React 19
- TypeScript

Pastikan proyek dapat dijalankan secara lokal.

---

2. Konfigurasi Styling

Pasang dan konfigurasi:

- Tailwind CSS v4
- shadcn/ui

Jangan membuat komponen UI khusus pada sprint ini.

---

3. Konfigurasi Code Quality

Pasang dan konfigurasi:

- ESLint
- Prettier

Pastikan format kode konsisten.

---

4. Konfigurasi Progressive Web App

Siapkan proyek agar dapat dikembangkan sebagai PWA.

Minimal:

- manifest
- favicon
- metadata dasar

Service Worker dapat ditambahkan pada sprint berikutnya jika belum diperlukan.

---

5. Struktur Folder

Buat struktur proyek sesuai ARCHITECTURE.md.

Minimal:

app/
components/
features/
hooks/
lib/
services/
types/
public/
styles/
docs/
prompts/

Jangan membuat folder yang belum diperlukan.

---

6. Root Layout

Buat Root Layout dasar.

Gunakan:

- metadata aplikasi
- font utama
- global styles

Belum perlu membuat halaman fitur.

---

7. Home Page

Buat halaman Home sederhana sebagai placeholder development Sprint 1.

Placeholder ini hanya digunakan untuk memvalidasi fondasi proyek, metadata, styling dasar, dan kesiapan deployment.

Isi halaman cukup:

- Logo sementara
- Nama aplikasi
- Informasi bahwa proyek sedang dalam tahap pengembangan

Halaman ini bukan keputusan final UI/UX dan tidak boleh dikembangkan menjadi dashboard terpisah.

Pada sprint Live Map, Home akan diganti menjadi Live Map sesuai prinsip “Live Map adalah Home” pada docs/DESIGN.md.

Tidak perlu peta.

Tidak perlu dashboard.

Tidak perlu heatmap.

---

8. Environment

Siapkan file contoh:

".env.example"

Berisi placeholder untuk konfigurasi yang akan digunakan pada sprint berikutnya.

Jangan memasukkan API Key asli.

---

9. Git Ignore

Pastikan ".gitignore" mencakup:

- node_modules
- .next
- .env
- cache
- log

---

10. README

Perbarui README agar menjelaskan:

- tujuan proyek,
- teknologi utama,
- cara menjalankan proyek,
- struktur direktori.

---

Deliverables

Sprint dianggap selesai apabila tersedia:

- Struktur proyek yang rapi.
- Next.js berjalan tanpa error.
- TypeScript aktif.
- Tailwind aktif.
- shadcn/ui siap digunakan.
- PWA dasar telah dikonfigurasi.
- README diperbarui.
- ".env.example" tersedia.
- Build berhasil.

---

Out of Scope

Jangan membuat:

- Heatmap.
- MapLibre.
- Leaflet.
- OpenStreetMap.
- Geolocation.
- Zustand Store.
- TanStack Query.
- FastAPI.
- PostgreSQL.
- PostGIS.
- Redis.
- API.
- Prediction Engine.
- Rule-Based Scoring.
- Machine Learning.
- Authentication.
- Login.
- Dashboard.
- Bottom Sheet.
- Floating Action Button.
- Komponen UI bisnis.

Sprint ini hanya membangun fondasi proyek.

---

Constraints

- Gunakan TypeScript secara penuh.
- Gunakan App Router.
- Ikuti struktur folder pada ARCHITECTURE.md.
- Jangan menambahkan dependency yang tidak benar-benar diperlukan.
- Jangan membuat kode yang belum digunakan.

---

Definition of Done

Sprint dinyatakan selesai apabila:

- "npm install" berhasil.
- "npm run dev" berjalan tanpa error.
- "npm run build" berhasil.
- Tidak ada TypeScript error.
- Tidak ada lint error.
- Struktur proyek sesuai dokumentasi.
- Siap dilanjutkan ke Sprint 2 tanpa perubahan fondasi.

---

Expected Output

Setelah sprint selesai, repository sudah memiliki fondasi yang stabil, bersih, dan siap menjadi dasar implementasi seluruh fitur Bandung Ride Radar pada sprint-sprint berikutnya.
