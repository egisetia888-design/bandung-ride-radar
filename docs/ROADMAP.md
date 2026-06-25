ROADMAP.md

Bandung Ride Radar

Version: 1.0

Status: Active

---

Purpose

Dokumen ini merupakan rencana implementasi resmi Bandung Ride Radar.

Seluruh pengembangan dilakukan secara bertahap melalui sprint.

Setiap sprint harus menghasilkan artefak yang dapat diuji, didemokan, dan menjadi dasar sprint berikutnya.

---

Development Strategy

Metode pengembangan menggunakan prinsip:

- Build Small
- Test Early
- Iterate Fast
- Open Source First

Jangan mengembangkan banyak fitur sekaligus.

Selalu prioritaskan fitur yang memberikan nilai terbesar kepada pengguna.

---

Official Sprint Sequence

Urutan sprint resmi MVP Bandung Ride Radar adalah:

1. Sprint 1 — Foundation
2. Sprint 2 — UI Foundation
3. Sprint 3 — Live Map
4. Sprint 4 — Backend Foundation
5. Sprint 5 — Intelligence Engine

Setiap sprint harus selesai sebelum sprint berikutnya dimulai.

---

Operational Prompt Mapping

Prompt pada folder prompts/ adalah dokumen eksekusi operasional untuk sprint resmi.

- prompts/00_START_HERE.md bukan sprint; gunakan sebagai titik awal setiap sesi pengembangan.
- prompts/01_FOUNDATION.md = Sprint 1 — Foundation
- prompts/02_UI.md = Sprint 2 — UI Foundation
- prompts/03_MAP.md = Sprint 3 — Live Map
- prompts/04_BACKEND.md = Sprint 4 — Backend Foundation
- prompts/05_INTELLIGENCE.md = Sprint 5 — Intelligence Engine

Tidak ada prompt sprint lain yang termasuk dalam urutan MVP resmi.

---

Sprint Backlog

Sprint 1 — Foundation

Target:

Repository siap dikembangkan.

Deliverables:

- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui
- ESLint
- Prettier
- Konfigurasi PWA dasar
- Struktur direktori awal
- README dan .env.example

Status:

Belum dimulai.

---

Sprint 2 — UI Foundation

Target:

Membangun fondasi antarmuka dan komponen reusable berdasarkan DESIGN.md.

Deliverables:

- Theme global
- Typography
- Design tokens
- Reusable components
- Responsive layout
- Home placeholder

Status:

Belum dimulai.

---

Sprint 3 — Live Map

Target:

Mengimplementasikan halaman utama berbasis peta interaktif.

Deliverables:

- MapLibre
- Tile OpenStreetMap
- Geolocation
- Marker lokasi pengguna
- Default lokasi Bandung
- Search Bar placeholder
- Bottom Navigation aktif

Status:

Belum dimulai.

---

Sprint 4 — Backend Foundation

Target:

Membangun fondasi backend dan infrastruktur API.

Deliverables:

- FastAPI
- Struktur backend modular
- Endpoint dasar
- PostgreSQL + PostGIS
- Redis
- CORS
- Swagger UI dan ReDoc
- Docker Compose

Status:

Belum dimulai.

---

Sprint 5 — Intelligence Engine

Target:

Membangun sistem rekomendasi lokasi pertama menggunakan Rule-Based Scoring dan data publik.

Deliverables:

- Rule-Based Scoring
- Heat Score
- Confidence Score
- Recommendation Engine
- Insight Engine
- Action Recommendation
- Ranking
- Integrasi frontend dan backend

Status:

Belum dimulai.

---

Definition of Complete

Setiap sprint dianggap selesai apabila:

- Build berhasil.
- Tidak ada TypeScript error.
- Tidak ada lint error.
- Dokumentasi diperbarui jika diperlukan.
- Kode mengikuti CODING_GUIDE.md.
- UI mengikuti DESIGN.md.
- Fitur sesuai PRD.md.

---

Future Roadmap

Item berikut berada di luar lima sprint MVP resmi dan hanya boleh dikerjakan setelah Sprint 5 — Intelligence Engine selesai atau setelah roadmap diperbarui secara eksplisit:

- Public Beta.
- Caching dan optimasi lanjutan.
- Offline mode lanjutan.
- Crowdsourcing data.
- AI Prediction berbasis histori.
- Prediksi musiman.
- Personalisasi rekomendasi.
- Dashboard analitik.
- Multi-city support.
- Integrasi data transportasi publik.
- SDK untuk peneliti dan komunitas.

---

Guiding Principle

Selesaikan satu sprint dengan kualitas tinggi sebelum memulai sprint berikutnya.

Jangan menambah fitur baru sebelum fondasi yang ada stabil.

Kecepatan pengembangan penting, tetapi konsistensi dan kualitas lebih penting untuk keberlanjutan proyek.
