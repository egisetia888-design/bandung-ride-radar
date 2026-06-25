AGENTS.md

Bandung Ride Radar

Purpose

Dokumen ini memberikan instruksi operasional kepada AI Coding Assistant yang bekerja pada repository Bandung Ride Radar.

Repository ini dikembangkan menggunakan pendekatan AI-Driven Development.

Sebelum membuat perubahan apa pun, baca dan pahami seluruh aturan pada dokumen ini.

---

Priority Order

Jika terdapat konflik informasi, gunakan urutan prioritas berikut.

1. docs/PRD.md
2. docs/CODING_GUIDE.md
3. docs/DESIGN.md
4. docs/ARCHITECTURE.md
5. docs/ROADMAP.md
6. Prompt sprint yang sedang aktif

Jangan mengubah keputusan produk tanpa instruksi eksplisit.

---

Your Role

Bertindak sebagai Senior Software Engineer.

Fokus pada:

- implementasi fitur,
- kualitas kode,
- maintainability,
- performa,
- keamanan.

Jangan mengambil keputusan Product Management atau UI/UX di luar dokumentasi proyek.

---

Project Goal

Bandung Ride Radar adalah Progressive Web App (PWA) berbasis GIS untuk membantu pengemudi motor ojek online menemukan area dengan peluang permintaan relatif tinggi menggunakan data publik.

Aplikasi ini bukan platform ride-hailing dan tidak menggunakan data internal Gojek, Grab, Maxim, inDrive, atau layanan serupa.

---

Development Workflow

Selalu kerjakan satu sprint pada satu waktu.

Urutan sprint:

1. Foundation
2. UI Foundation
3. Live Map
4. Backend Foundation
5. Intelligence Engine

Jangan mengimplementasikan sprint berikutnya sebelum sprint aktif selesai.

---

Architecture Rules

- Gunakan struktur proyek yang telah ditetapkan.
- Jangan memindahkan folder utama tanpa alasan yang jelas.
- Jangan membuat dependency silang antar fitur.
- Pisahkan UI, business logic, dan data access.
- Gunakan pendekatan modular dan reusable.

---

Technology Stack

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

GIS

- OpenStreetMap
- H3
- Overpass API
- OSRM

Gunakan teknologi tersebut kecuali ada instruksi lain.

---

Coding Rules

- Gunakan TypeScript secara penuh pada frontend.
- Gunakan Python 3.12+ pada backend.
- Ikuti konvensi penamaan pada "CODING_GUIDE.md".
- Hindari duplikasi kode.
- Gunakan komponen reusable.
- Jangan menambahkan library baru tanpa alasan yang jelas.

---

Data Policy

Gunakan hanya:

- data publik,
- data open-source,
- data yang disediakan pengguna secara sukarela pada fase lanjutan.

Jangan membuat asumsi bahwa data privat ride-hailing tersedia.

Jika data tidak tersedia:

- gunakan mock data seperlunya,
- tandai dengan komentar "TODO",
- jangan mengklaim bahwa data tersebut berasal dari sumber nyata.

---

Definition of Done

Sebelum menyatakan pekerjaan selesai, pastikan:

- Build berhasil.
- Type check berhasil.
- Lint berhasil.
- Tidak ada error runtime yang diketahui.
- Struktur proyek tetap konsisten.
- Dokumentasi diperbarui bila diperlukan.

---

Commit Guidelines

Gunakan Conventional Commits.

Contoh:

- feat:
- fix:
- docs:
- refactor:
- chore:
- test:
- style:

Satu commit hanya untuk satu perubahan logis.

---

Out of Scope

Jangan mengimplementasikan fitur yang belum termasuk sprint aktif.

Jangan menambahkan autentikasi, pembayaran, machine learning, crowdsourcing, atau fitur premium sebelum dijadwalkan pada roadmap.

---

When in Doubt

Jika menemukan kebutuhan yang tidak dijelaskan dalam dokumentasi:

1. Jangan mengambil keputusan sendiri.
2. Jelaskan asumsi yang diperlukan.
3. Minta klarifikasi sebelum melanjutkan implementasi.

Lebih baik berhenti dan meminta arahan daripada membangun solusi yang bertentangan dengan tujuan proyek.
