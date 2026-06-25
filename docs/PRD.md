PRD.md

Bandung Ride Radar

Version : 1.0

Status : Draft

Author : Project Team

---

1. Product Overview

Bandung Ride Radar adalah Progressive Web Application (PWA) berbasis Geographic Information System (GIS) yang membantu pengemudi motor ojek online menemukan area dengan probabilitas permintaan relatif tertinggi menggunakan data publik dan algoritma prediksi.

Aplikasi ini bukan aplikasi ride-hailing.

Aplikasi ini tidak memiliki akses terhadap data internal Gojek, Grab, Maxim, inDrive, maupun platform lainnya.

Seluruh rekomendasi dihasilkan melalui analisis berbagai indikator publik (proxy variables), seperti waktu, cuaca, tata guna lahan, aktivitas kawasan, kepadatan lalu lintas, kalender, dan pola historis.

---

2. Product Goal

Tujuan utama produk adalah membantu pengemudi mengurangi waktu menunggu order dan meningkatkan efisiensi perpindahan lokasi.

Produk harus:

- cepat dibuka,
- mudah dipahami,
- ringan,
- dapat digunakan menggunakan satu tangan,
- dapat berjalan pada Android kelas menengah,
- menggunakan data publik dan open-source.

---

3. Target User

Target utama:

Driver motor:

- Gojek
- Grab
- Maxim
- inDrive

Target sekunder:

- Kurir instan
- Peneliti GIS
- Mahasiswa
- Pemerintah
- Komunitas OpenStreetMap

---

4. Core Problem

Driver sering mengalami kondisi:

"Saya harus menunggu di mana sekarang?"

Keputusan biasanya diambil berdasarkan:

- pengalaman,
- mengikuti kerumunan,
- tebakan.

Bandung Ride Radar mengubah keputusan tersebut menjadi rekomendasi berbasis data.

---

5. Product Principles

Semua keputusan pengembangan harus mengikuti prinsip berikut.

Mobile First

Produk dirancang khusus untuk smartphone.

---

Map First

Peta merupakan antarmuka utama.

Dashboard hanyalah pelengkap.

---

One Thumb

Semua tombol utama berada di area bawah layar.

---

Explainable

Setiap rekomendasi harus memiliki alasan yang dapat dijelaskan.

---

Open Source First

Prioritaskan:

OpenStreetMap

MapLibre

FastAPI

PostGIS

H3

Tailwind

Next.js

---

Low Cost

Seluruh MVP harus dapat dibangun menggunakan layanan gratis atau free tier.

---

6. MVP Scope

Versi pertama hanya memiliki fitur berikut.

Live Map

Menampilkan:

- posisi pengguna,
- peta,
- heatmap,
- marker rekomendasi.

---

Heat Score

Menampilkan tingkat peluang relatif setiap grid.

---

Recommendation Engine

Menampilkan tiga lokasi terbaik.

---

Insight

Menjelaskan alasan rekomendasi.

---

Settings

Berisi konfigurasi sederhana.

---

7. Out of Scope

Versi pertama tidak memiliki:

- Login
- Premium
- Chat
- Data order aktual
- Driver online
- AI Recommendation
- Crowdsourcing
- Notifikasi

---

8. Technology Stack

Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- MapLibre GL

Backend

- FastAPI
- PostgreSQL
- PostGIS
- Redis

Prediction

- Rule-Based Scoring

Deployment

- Vercel
- Railway atau Render (Free Tier)

---

9. Data Sources

MVP hanya boleh menggunakan sumber data yang realistis diperoleh.

Prioritas:

- OpenStreetMap
- Overpass API
- Open-Meteo
- BMKG (bila memungkinkan)
- BPS
- Kalender Nasional
- Data kawasan publik

Seluruh sumber data harus memiliki lisensi yang mengizinkan penggunaan.

---

10. Prediction Strategy

Versi pertama menggunakan Rule-Based Scoring.

Heat Score dihitung dari kombinasi:

- waktu,
- hari,
- cuaca,
- tata guna lahan,
- aktivitas kawasan,
- aksesibilitas,
- kepadatan jalan,
- event,
- hari libur.

Machine Learning baru digunakan setelah tersedia data historis yang memadai.

---

11. Success Criteria

MVP dianggap berhasil apabila:

- PWA dapat dipasang di Android.
- Halaman utama terbuka kurang dari 3 detik.
- Rekomendasi muncul kurang dari 5 detik.
- Pengguna dapat memahami aplikasi tanpa tutorial.
- Seluruh sistem berjalan menggunakan data publik.

---

12. Official Sprint Sequence

Pengembangan dilakukan menggunakan sprint.

Urutan sprint resmi untuk MVP adalah:

1. Sprint 1 — Foundation
2. Sprint 2 — UI Foundation
3. Sprint 3 — Live Map
4. Sprint 4 — Backend Foundation
5. Sprint 5 — Intelligence Engine

Mapping prompt operasional:

- prompts/01_FOUNDATION.md = Sprint 1 — Foundation
- prompts/02_UI.md = Sprint 2 — UI Foundation
- prompts/03_MAP.md = Sprint 3 — Live Map
- prompts/04_BACKEND.md = Sprint 4 — Backend Foundation
- prompts/05_INTELLIGENCE.md = Sprint 5 — Intelligence Engine

prompts/00_START_HERE.md bukan sprint; file tersebut hanya panduan awal sesi.

Tidak ada sprint lain yang boleh dianggap bagian dari MVP resmi tanpa pembaruan eksplisit pada PRD dan ROADMAP.

---

13. Coding Philosophy

Seluruh kode harus:

- reusable,
- modular,
- strongly typed,
- mudah diuji,
- mudah dipelihara,
- terdokumentasi.

Hindari duplicate code.

Gunakan komponen reusable.

Pisahkan business logic dari UI.

---

14. Long-Term Vision

Bandung Ride Radar tidak hanya menjadi alat bantu driver.

Dalam jangka panjang produk dapat berkembang menjadi platform Urban Mobility Intelligence yang mendukung penelitian, perencanaan kota, analisis kawasan bisnis, dan optimasi distribusi kurir dengan tetap berlandaskan data terbuka dan teknologi open-source.
