05_INTELLIGENCE.md

Sprint 5 — Intelligence Engine

Objective

Membangun sistem analisis Bandung Ride Radar yang menghasilkan rekomendasi lokasi berdasarkan data publik.

Sprint ini merupakan implementasi pertama dari "otak" aplikasi menggunakan Rule-Based Scoring.

Machine Learning belum digunakan.

---

Context

Sebelum memulai, baca kembali:

- docs/PRD.md
- docs/DESIGN.md
- docs/CODING_GUIDE.md
- docs/ARCHITECTURE.md

Seluruh implementasi harus mengikuti keputusan pada dokumen tersebut.

---

Main Tasks

1. Rule-Based Scoring

Implementasikan sistem penilaian berbasis aturan.

Belum menggunakan AI.

Belum menggunakan Machine Learning.

Semua perhitungan harus transparan.

---

2. Heat Score

Hitung Heat Score setiap H3 Cell.

Rentang:

0–100

Kategori:

- Sangat Rendah
- Rendah
- Sedang
- Tinggi
- Sangat Tinggi

Heat Score bersifat relatif terhadap kondisi saat itu, bukan jumlah order aktual.

---

3. Confidence Score

Hitung tingkat keyakinan prediksi.

Faktor yang memengaruhi:

- Kelengkapan data.
- Kualitas data.
- Jumlah sumber data yang tersedia.

Confidence tidak menunjukkan peluang order, tetapi tingkat kepercayaan terhadap prediksi.

---

4. Recommendation Engine

Pilih maksimal tiga lokasi terbaik di sekitar posisi pengguna.

Setiap rekomendasi menampilkan:

- Nama area.
- Heat Score.
- Confidence Score.
- Jarak.
- ETA.

Urutkan berdasarkan skor akhir.

---

5. Insight Engine

Tampilkan alasan rekomendasi.

Contoh:

- Jam makan siang.
- Dekat kawasan kuliner.
- Aktivitas kampus.
- Hari kerja.
- Cuaca mendukung.
- Kepadatan lalu lintas meningkat.

Insight harus dapat dijelaskan kepada pengguna.

---

6. Action Recommendation

Terjemahkan hasil analisis menjadi tindakan sederhana.

Pilihan:

- Tetap di lokasi.
- Geser ±500 meter.
- Pindah ke area lain.
- Hindari area sementara.

Pengguna tidak perlu menafsirkan Heat Score sendiri.

---

7. Ranking

Urutkan seluruh kandidat berdasarkan skor akhir.

Gunakan sistem ranking yang stabil dan mudah dipahami.

---

8. API Integration

Hubungkan frontend dengan backend.

Gunakan endpoint yang telah dibuat pada Sprint 4.

Belum perlu autentikasi.

---

Deliverables

Sprint dianggap selesai apabila tersedia:

- Rule-Based Scoring.
- Heat Score.
- Confidence Score.
- Recommendation Engine.
- Insight Engine.
- Action Recommendation.
- Ranking.
- Integrasi frontend dan backend.

---

Out of Scope

Jangan mengimplementasikan:

- Machine Learning.
- Deep Learning.
- Crowdsourcing.
- Prediksi historis.
- Personalisasi pengguna.
- Push Notification.
- Analytics Dashboard.
- Multi-city support.

Sprint ini hanya membangun Intelligence Engine versi pertama.

---

Constraints

- Gunakan data publik.
- Jangan mengasumsikan data yang tidak tersedia.
- Semua skor harus dapat dijelaskan.
- Hindari nilai yang dibuat secara acak.
- Jika suatu sumber data tidak tersedia, turunkan Confidence Score dan tetap berikan hasil terbaik yang memungkinkan.

---

Definition of Done

Sprint dinyatakan selesai apabila:

- Heat Score dihitung secara konsisten.
- Confidence Score tersedia untuk setiap rekomendasi.
- Tiga rekomendasi terbaik ditampilkan.
- Insight muncul pada setiap rekomendasi.
- Action Recommendation ditampilkan.
- Frontend berhasil mengambil data dari backend.
- Build frontend dan backend berhasil.
- Tidak ada TypeScript error.
- Tidak ada error pada backend.

---

Expected Output

Setelah sprint selesai, Bandung Ride Radar mampu memberikan rekomendasi lokasi berdasarkan analisis data publik secara transparan.

Pengguna tidak hanya melihat peta, tetapi juga memahami:

- area mana yang paling potensial,
- seberapa besar keyakinan sistem terhadap prediksi tersebut,
- alasan rekomendasi,
- tindakan yang sebaiknya diambil.

Seluruh sistem tetap menggunakan Rule-Based Scoring sehingga mudah diuji, dijelaskan, dan dikembangkan menjadi Machine Learning ketika data historis telah tersedia.
