00_PROJECT_CHARTER.md

Bandung Ride Radar

Version: 0.1.0

Status: Draft

Last Updated: 2026-06-25

---

1. Project Overview

Bandung Ride Radar adalah aplikasi Progressive Web App (PWA) berbasis Geographic Information System (GIS) yang dirancang untuk membantu pengemudi ojek online mengambil keputusan mengenai lokasi menunggu order berdasarkan analisis spasial, temporal, dan kontekstual menggunakan data publik dan teknologi open-source.

Aplikasi ini bukan merupakan aplikasi ride-hailing dan tidak memiliki hubungan dengan Gojek, Grab, Maxim, inDrive, maupun penyedia layanan transportasi daring lainnya.

Bandung Ride Radar berfungsi sebagai Decision Support System (DSS) yang mengubah berbagai indikator publik menjadi estimasi probabilitas permintaan pada suatu wilayah.

---

2. Vision

Menjadi platform open-source urban mobility intelligence pertama di Indonesia yang dapat dimanfaatkan oleh pengemudi, peneliti, akademisi, komunitas open-source, dan pemerintah daerah untuk memahami pola mobilitas perkotaan melalui data publik.

---

3. Mission

- Mengurangi waktu idle pengemudi.
- Membantu pengemudi memilih lokasi secara objektif.
- Mengoptimalkan efisiensi perjalanan.
- Mengembangkan teknologi GIS yang mudah diakses masyarakat.
- Menyediakan platform riset mobilitas perkotaan berbasis open-source.

---

4. Problem Statement

Pengemudi ojek online sering menentukan lokasi menunggu berdasarkan pengalaman pribadi atau mengikuti kerumunan pengemudi lain. Pendekatan tersebut sering menyebabkan waktu tunggu yang panjang, konsumsi bahan bakar yang tidak efisien, serta distribusi pengemudi yang tidak merata.

Di sisi lain, data permintaan aktual dimiliki oleh perusahaan ride-hailing dan tidak tersedia untuk publik. Oleh karena itu diperlukan pendekatan alternatif yang memanfaatkan indikator tidak langsung (proxy variables) untuk memperkirakan tingkat peluang suatu wilayah.

---

5. Product Scope

Ruang lingkup versi awal meliputi:

- Visualisasi peta interaktif.
- Heatmap berbasis grid H3.
- Analisis waktu dan lokasi.
- Integrasi cuaca.
- Integrasi kalender nasional.
- Analisis tata guna lahan.
- Rekomendasi titik tunggu.
- Insight penyebab rekomendasi.

Di luar ruang lingkup MVP:

- Login pengguna.
- Sistem pembayaran.
- Langganan premium.
- Integrasi API ride-hailing.
- Pelacakan driver lain.
- Prediksi berbasis data privat.

---

6. Target Users

Target utama:

Pengemudi motor ojek online yang membutuhkan bantuan dalam menentukan lokasi dengan peluang permintaan relatif tinggi.

Target sekunder:

- Kurir instan.
- Peneliti transportasi.
- Komunitas GIS.
- Akademisi.
- Pemerintah daerah.
- Pelaku UMKM.

---

7. Core Principles

Open Source First

Seluruh komponen sebisa mungkin menggunakan perangkat lunak dan data open-source.

Public Data Only

Tidak bergantung pada data internal perusahaan ride-hailing.

Mobile First

Seluruh pengalaman pengguna dioptimalkan untuk smartphone Android.

One Thumb Operation

Semua fungsi utama dapat dijangkau menggunakan satu tangan.

Low Resource

Aplikasi harus tetap berjalan baik pada perangkat Android kelas menengah ke bawah.

Explainable Prediction

Setiap rekomendasi harus dapat dijelaskan kepada pengguna melalui faktor-faktor yang memengaruhi hasilnya.

---

8. Success Metrics

MVP dianggap berhasil apabila:

- PWA dapat dipasang di Android.
- Waktu muat awal kurang dari 3 detik.
- Rekomendasi lokasi muncul kurang dari 5 detik.
- Pengguna dapat memahami hasil tanpa membaca dokumentasi.
- Seluruh aplikasi dapat dijalankan menggunakan infrastruktur berbiaya sangat rendah.

---

9. Technical Principles

Frontend:

- Next.js
- React
- TypeScript
- Tailwind CSS
- MapLibre GL

Backend:

- FastAPI
- PostgreSQL
- PostGIS
- Redis

Machine Learning:

- Python
- scikit-learn
- XGBoost

GIS:

- H3
- OpenStreetMap
- Overpass API
- OSRM

Deployment:

- Vercel
- Railway atau Render (Free Tier)

---

10. Data Policy

Bandung Ride Radar hanya menggunakan:

- Data publik.
- Data open-source.
- Data yang dihasilkan pengguna secara sukarela (jika fitur crowdsourcing diterapkan di masa depan).

Aplikasi tidak mengumpulkan ataupun memproses data internal platform ride-hailing.

---

11. Development Philosophy

Pengembangan dilakukan secara bertahap melalui sprint.

Urutan prioritas:

1. Product Foundation.
2. UI/UX.
3. Frontend.
4. GIS Engine.
5. Prediction Engine.
6. Backend.
7. Machine Learning.
8. Beta Testing.
9. Public Release.

Setiap sprint harus menghasilkan artefak yang dapat diuji dan didokumentasikan.

---

12. Risks

Risiko utama:

- Keterbatasan data publik.
- Akurasi prediksi lebih rendah dibanding sistem yang memiliki data order aktual.
- Perubahan API pihak ketiga.
- Keterbatasan kuota layanan gratis.
- Variasi perilaku pengguna yang sulit dimodelkan.

Strategi mitigasi:

- Menggunakan banyak sumber data publik.
- Mengutamakan model yang transparan.
- Menyediakan Confidence Score.
- Mengembangkan mekanisme crowdsourcing pada fase lanjutan.

---

13. License Strategy

Kode sumber direncanakan menggunakan lisensi MIT.

Dokumentasi menggunakan Creative Commons Attribution (CC BY 4.0).

Data mengikuti lisensi masing-masing penyedia.

---

14. Definition of Done

Sebuah fitur dinyatakan selesai apabila:

- Berfungsi sesuai spesifikasi.
- Memiliki dokumentasi.
- Memiliki pengujian dasar.
- Tidak menurunkan performa aplikasi.
- Konsisten dengan Design System.
- Tidak melanggar prinsip Open Source First.

---

15. Long-Term Vision

Dalam jangka panjang, Bandung Ride Radar diharapkan berkembang menjadi platform Urban Mobility Intelligence yang mendukung berbagai kebutuhan analisis spasial, termasuk mobilitas perkotaan, distribusi kurir, analisis kawasan bisnis, serta penelitian transportasi berbasis data terbuka.
