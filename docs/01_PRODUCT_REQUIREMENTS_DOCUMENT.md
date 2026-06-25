01_PRODUCT_REQUIREMENTS_DOCUMENT.md

Bandung Ride Radar

Version: 1.0.0 (Draft)

Status: Product Requirements Document

---

1. Executive Summary

Bandung Ride Radar adalah Progressive Web Application (PWA) berbasis Geographic Information System (GIS) yang membantu pengemudi ojek online menentukan lokasi menunggu dengan probabilitas permintaan relatif tertinggi menggunakan data publik, analisis spasial, dan model prediksi.

Produk ini bukan aplikasi ride-hailing dan tidak berafiliasi dengan perusahaan transportasi daring mana pun.

Seluruh sistem dirancang agar dapat dibangun oleh individu atau tim kecil dengan modal awal mendekati Rp0 menggunakan perangkat lunak open-source dan layanan free tier.

---

2. Product Goals

Tujuan utama:

- Mengurangi waktu idle pengemudi.
- Mengurangi perpindahan lokasi yang tidak efisien.
- Memberikan rekomendasi berbasis data.
- Menampilkan kondisi spasial secara intuitif.
- Menjadi platform riset mobilitas perkotaan berbasis open-source.

Target MVP:

- PWA dapat dipasang di Android.
- Menampilkan peta interaktif.
- Menampilkan Heat Score berbasis aturan (rule-based).
- Menampilkan rekomendasi titik tunggu.
- Memberikan penjelasan faktor penyebab rekomendasi.

---

3. Non Goals

Versi MVP tidak mencakup:

- Login pengguna.
- Akun premium.
- Sistem pembayaran.
- Integrasi API Gojek, Grab, Maxim, atau inDrive.
- Data order aktual.
- Data driver online.
- Prediksi berbasis data privat.
- Chat antar pengguna.

---

4. User Personas

Persona 1 – Driver Pemula

Tujuan:
Mendapatkan rekomendasi lokasi tanpa harus memahami kondisi kota secara mendalam.

Pain Point:
Bingung menentukan titik tunggu.

Persona 2 – Driver Berpengalaman

Tujuan:
Memvalidasi keputusan berdasarkan data.

Pain Point:
Sulit mengetahui perubahan pola akibat cuaca, event, atau hari libur.

Persona 3 – Driver Paruh Waktu

Tujuan:
Memanfaatkan waktu online yang singkat secara optimal.

Pain Point:
Tidak memiliki waktu untuk mencari lokasi terbaik melalui trial and error.

---

5. User Journey

Alur ideal:

1. Membuka aplikasi.
2. Memberikan izin lokasi.
3. Peta langsung ditampilkan.
4. Sistem menghitung Heat Score.
5. Tiga rekomendasi lokasi terbaik ditampilkan.
6. Pengguna memilih salah satu lokasi.
7. Navigasi dimulai.

Target waktu dari membuka aplikasi hingga rekomendasi pertama muncul adalah kurang dari 10 detik.

---

6. Functional Requirements

MVP wajib menyediakan:

- Deteksi lokasi pengguna.
- Peta berbasis OpenStreetMap.
- Grid spasial H3.
- Heatmap.
- Heat Score.
- Confidence Score.
- Rekomendasi tiga lokasi terbaik.
- ETA menuju lokasi.
- Jarak ke lokasi.
- Penjelasan rekomendasi.
- Mode terang sebagai tampilan utama.
- Dark Mode opsional.

---

7. Non Functional Requirements

Performa:

- Waktu muat awal < 3 detik.
- Pembaruan data < 5 detik.
- Respons antarmuka < 300 ms.

Kompatibilitas:

- Android 8 ke atas.
- Chrome, Edge, Firefox.

Konsumsi data:

- Target < 30 MB/hari.

Konsumsi baterai:

- Target < 5% per jam.

---

8. Geographic Scope

Wilayah analisis:

- Kota Bandung.
- Kota Cimahi.
- Kabupaten Bandung.
- Kabupaten Bandung Barat.
- Kabupaten Sumedang.

Analisis dilakukan menggunakan grid H3 sehingga seluruh perhitungan bersifat konsisten dan dapat diskalakan.

---

9. Data Sources

Sumber data dibagi menjadi tiga kategori.

Kategori A (Wajib):

- OpenStreetMap.
- Overpass API.
- Open-Meteo.
- Kalender Nasional.
- Data BPS.
- Tata guna lahan.

Kategori B (Opsional):

- Event lokal.
- Kalender akademik.
- Jadwal pertandingan.
- Jadwal konser.

Kategori C (Masa Depan):

- Crowdsourcing pengguna.
- Data historis internal aplikasi.

Setiap sumber data harus didokumentasikan dalam dokumen terpisah beserta lisensi, frekuensi pembaruan, dan tingkat keandalannya.

---

10. Prediction Strategy

MVP menggunakan Rule-Based Scoring.

Machine Learning belum menjadi bagian dari versi pertama.

Heat Score dihitung dari kombinasi faktor:

- Waktu.
- Hari.
- Cuaca.
- Tata guna lahan.
- Aktivitas kawasan.
- Kemudahan akses.
- Kepadatan jalan.
- Event.
- Hari libur.

Confidence Score menunjukkan tingkat keyakinan sistem terhadap hasil prediksi berdasarkan kualitas dan kelengkapan data yang tersedia.

---

11. Feature Prioritization

Prioritas P0 (Wajib):

- Live Map.
- Heatmap.
- Heat Score.
- Recommendation Engine.
- Insight Panel.

Prioritas P1:

- Historical Pattern.
- Opportunity Timeline.
- Weather Impact.

Prioritas P2:

- Crowdsourcing.
- AI Prediction.
- Personalisasi.

---

12. Technical Constraints

Seluruh fitur harus:

- Menggunakan perangkat lunak open-source bila memungkinkan.
- Dapat dijalankan pada layanan free tier.
- Tidak bergantung pada API privat.
- Memiliki fallback apabila suatu sumber data tidak tersedia.

---

13. Success Metrics

Metrik keberhasilan:

- Median waktu idle pengguna berkurang (diukur pada fase uji coba).
- Waktu menemukan rekomendasi < 10 detik.
- Akurasi prediksi meningkat dari versi ke versi.
- Pengguna dapat memahami rekomendasi tanpa pelatihan.

---

14. Risks

Risiko:

- Keterbatasan data publik.
- Perubahan layanan pihak ketiga.
- Ketidaksesuaian pola mobilitas dengan model.

Mitigasi:

- Confidence Score.
- Multi-source data.
- Crowdsourcing pada fase berikutnya.
- Model prediksi yang dapat dijelaskan (Explainable AI).

---

15. Acceptance Criteria

Versi MVP dinyatakan selesai apabila:

- Dapat diinstal sebagai PWA.
- Menampilkan posisi pengguna.
- Menampilkan peta interaktif.
- Menampilkan Heat Score.
- Menampilkan tiga rekomendasi lokasi.
- Menampilkan ETA dan jarak.
- Menampilkan alasan rekomendasi.
- Seluruh fitur berjalan menggunakan data publik dan teknologi open-source.
