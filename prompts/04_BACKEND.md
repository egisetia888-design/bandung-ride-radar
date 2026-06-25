04_BACKEND.md

Sprint 4 — Backend Foundation

Objective

Membangun fondasi backend Bandung Ride Radar menggunakan FastAPI.

Sprint ini hanya berfokus pada struktur backend, konfigurasi proyek, endpoint dasar, dan koneksi database.

Belum mengimplementasikan Recommendation Engine maupun Machine Learning.

---

Context

Sebelum memulai, baca kembali:

- docs/PRD.md
- docs/CODING_GUIDE.md
- docs/ARCHITECTURE.md

Ikuti seluruh keputusan arsitektur yang telah ditetapkan.

---

Main Tasks

1. Backend Project

Buat project baru menggunakan:

- FastAPI
- Python 3.12+

Gunakan struktur modular.

---

2. Folder Structure

Minimal struktur:

backend/

app/
├── api/
├── core/
├── db/
├── models/
├── schemas/
├── services/
├── utils/
└── main.py

Pisahkan routing, service, dan database.

---

3. Dependency Management

Gunakan:

- uv atau Poetry (pilih salah satu dan gunakan secara konsisten)
- Virtual Environment

Sediakan file konfigurasi proyek.

---

4. Environment Configuration

Buat:

".env.example"

Minimal berisi:

- DATABASE_URL
- REDIS_URL
- APP_NAME
- APP_ENV

Jangan menyimpan kredensial asli.

---

5. Database

Siapkan PostgreSQL.

Aktifkan PostGIS.

Belum membuat tabel bisnis.

Cukup pastikan koneksi berhasil.

---

6. Redis

Siapkan koneksi Redis.

Belum perlu digunakan.

Tujuannya hanya memastikan fondasi cache siap.

---

7. API Structure

Buat endpoint dasar:

GET /

GET /health

GET /api/v1/status

Contoh respons:

{
  "status": "ok",
  "service": "Bandung Ride Radar API",
  "version": "1.0.0"
}

---

8. CORS

Konfigurasikan CORS agar frontend Next.js dapat mengakses API selama pengembangan.

---

9. Documentation

Aktifkan dokumentasi otomatis:

- Swagger UI
- ReDoc

Gunakan konfigurasi bawaan FastAPI.

---

10. Docker

Siapkan:

- Dockerfile
- docker-compose.yml

Minimal menjalankan:

- Backend
- PostgreSQL
- Redis

Belum perlu container lain.

---

Deliverables

Sprint dianggap selesai apabila tersedia:

- Backend FastAPI berjalan.
- PostgreSQL terhubung.
- PostGIS aktif.
- Redis terhubung.
- Endpoint health berjalan.
- Swagger dapat diakses.
- Docker Compose berhasil dijalankan.

---

Out of Scope

Jangan mengimplementasikan:

- Heat Score.
- Recommendation Engine.
- Machine Learning.
- H3 Grid.
- Weather API.
- Traffic API.
- Event API.
- Authentication.
- User Management.
- Crowdsourcing.
- Background Worker.

Sprint ini hanya membangun fondasi backend.

---

Constraints

- Gunakan FastAPI.
- Gunakan PostgreSQL + PostGIS.
- Gunakan Redis.
- Ikuti struktur modular.
- Pisahkan routing, service, dan data access.
- Jangan menulis business logic pada endpoint.

---

Definition of Done

Sprint dinyatakan selesai apabila:

- Backend dapat dijalankan secara lokal.
- Docker Compose berhasil dijalankan.
- PostgreSQL terhubung.
- Redis terhubung.
- Endpoint "/health" mengembalikan status 200 OK.
- Swagger dan ReDoc dapat diakses.
- Tidak ada error lint atau konfigurasi.

---

Expected Output

Setelah sprint selesai, Bandung Ride Radar memiliki backend yang stabil dan siap menerima implementasi fitur bisnis.

Frontend sudah dapat berkomunikasi dengan backend melalui endpoint dasar, sedangkan PostgreSQL, PostGIS, dan Redis telah siap digunakan pada sprint berikutnya untuk membangun Recommendation Engine dan layanan GIS.
