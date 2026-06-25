03_MAP.md

Sprint 3 — Live Map Foundation

Objective

Mengimplementasikan halaman utama Bandung Ride Radar dengan peta interaktif sebagai pusat antarmuka.

Sprint ini hanya berfokus pada integrasi peta, lokasi pengguna, dan struktur halaman utama.

Belum mengimplementasikan Heatmap, Recommendation Engine, maupun backend.

---

Context

Sebelum memulai, baca kembali:

- docs/PRD.md
- docs/DESIGN.md
- docs/CODING_GUIDE.md
- docs/ARCHITECTURE.md

Gunakan seluruh keputusan yang telah ditetapkan.

---

Main Tasks

1. Integrasi MapLibre

Gunakan:

MapLibre GL

Map menggunakan tile OpenStreetMap.

Jangan menggunakan Google Maps SDK.

Map harus memenuhi sekitar 80% tinggi layar.

---

2. Geolocation

Implementasikan Geolocation API browser.

Fitur:

- meminta izin lokasi,
- memperoleh posisi pengguna,
- memperbarui marker pengguna.

Jika izin ditolak, tampilkan pesan yang jelas dan tetap tampilkan peta pada lokasi default (Bandung).

---

3. Default Location

Gunakan Kota Bandung sebagai lokasi awal apabila posisi pengguna belum tersedia.

Zoom awal disesuaikan agar Bandung Raya terlihat dengan baik.

---

4. User Marker

Tambahkan marker sederhana untuk menunjukkan posisi pengguna.

Gunakan ikon yang konsisten dengan DESIGN.md.

Belum perlu animasi.

---

5. Search Bar

Hubungkan Search Bar dengan peta.

Fitur pencarian belum perlu lengkap.

Cukup siapkan komponen dan placeholder untuk integrasi pada sprint berikutnya.

---

6. Bottom Navigation

Pastikan Bottom Navigation berfungsi untuk berpindah ke halaman placeholder:

- Map
- Insight
- Settings

Belum perlu membuat fitur pada halaman tersebut.

---

7. Map Controls

Sediakan kontrol dasar:

- Zoom In
- Zoom Out
- Current Location

Tidak perlu layer switch atau kontrol lanjutan.

---

Deliverables

Sprint dianggap selesai apabila tersedia:

- Peta interaktif.
- Tile OpenStreetMap.
- Marker lokasi pengguna.
- Geolocation.
- Default lokasi Bandung.
- Search Bar placeholder.
- Bottom Navigation aktif.

---

Out of Scope

Jangan mengimplementasikan:

- Heatmap.
- Grid H3.
- Heat Score.
- Confidence Score.
- Recommendation Card.
- Insight Panel.
- Backend API.
- FastAPI.
- Database.
- Cuaca.
- Traffic.
- Event.
- Rule-Based Scoring.

Sprint ini hanya membangun fondasi halaman peta.

---

Constraints

- Gunakan MapLibre GL.
- Gunakan OpenStreetMap sebagai sumber tile.
- Jangan menggunakan API berbayar.
- Jangan menambahkan dependency yang tidak diperlukan.
- Peta harus tetap responsif pada perangkat Android kelas menengah.

---

Definition of Done

Sprint dinyatakan selesai apabila:

- Peta dapat ditampilkan tanpa error.
- Lokasi pengguna dapat diperoleh (jika izin diberikan).
- Marker pengguna muncul pada peta.
- Zoom dan pan berfungsi.
- Build berhasil.
- Tidak ada TypeScript error.
- Tidak ada lint error.

---

Expected Output

Setelah sprint selesai, Bandung Ride Radar telah memiliki halaman utama yang benar-benar berfungsi sebagai fondasi untuk seluruh fitur spasial. Pengguna dapat membuka aplikasi, melihat peta Bandung Raya, mengetahui posisinya saat ini, dan bernavigasi di dalam aplikasi. Pada sprint berikutnya, fondasi ini akan diperluas dengan backend dan kemudian Recommendation Engine tanpa perlu mengubah struktur UI maupun integrasi peta yang sudah dibangun.
