Bandung Ride Radar

«Open-source Progressive Web App (PWA) untuk membantu pengemudi motor ojek online menemukan area dengan probabilitas permintaan relatif tertinggi menggunakan data publik dan teknologi GIS.»

---

Project Status

🚧 Under Active Development

Current Version: MVP

Status: Planning & Foundation

---

Vision

Bandung Ride Radar bukan aplikasi ride-hailing.

Bandung Ride Radar adalah Decision Support System (DSS) yang membantu pengemudi mengambil keputusan berdasarkan analisis spasial, temporal, dan kontekstual menggunakan data publik.

Seluruh sistem dibangun menggunakan teknologi open-source dengan tujuan dapat dikembangkan oleh individu maupun komunitas.

---

Goals

- Mengurangi waktu idle driver.
- Membantu menentukan titik tunggu terbaik.
- Memvisualisasikan peluang permintaan melalui heatmap.
- Menggunakan data publik.
- Tetap ringan dan dapat dijalankan pada perangkat Android kelas menengah.

---

Tech Stack

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
- Overpass API
- H3
- OSRM

Deployment

- Vercel
- Railway / Render

---

Repository Structure

bandung-ride-radar/

docs/
prompts/

apps/
├── web/
└── backend/

packages/

public/

---

Documentation

Baca dokumen berikut secara berurutan.

File| Deskripsi
docs/PRD.md| Product Requirements
docs/CODING_GUIDE.md| Aturan implementasi
docs/DESIGN.md| UI & UX
docs/ARCHITECTURE.md| Arsitektur sistem
docs/ROADMAP.md| Roadmap pengembangan

---

Development Workflow

Seluruh implementasi dilakukan menggunakan prompt pada folder:

prompts/

Urutan pengerjaan:

00_START_HERE

↓

01_FOUNDATION

↓

02_UI

↓

03_MAP

↓

04_BACKEND

↓

05_INTELLIGENCE

Setiap sprint harus selesai sebelum melanjutkan sprint berikutnya.

---

Development Principles

- Mobile First
- Open Source First
- Feature First
- API First
- Performance First
- Explainable Prediction
- Progressive Enhancement

---

Data Policy

Bandung Ride Radar hanya menggunakan:

- Data publik
- Data open-source
- Data yang diberikan pengguna secara sukarela (fase berikutnya)

Aplikasi tidak menggunakan data internal platform ride-hailing.

---

Contributing

Sebelum menulis kode:

1. Baca seluruh dokumentasi.
2. Ikuti Coding Guide.
3. Kerjakan sesuai sprint aktif.
4. Pastikan build berhasil.
5. Pastikan lint dan type check berhasil.

---

Roadmap

- Foundation
- UI
- Live Map
- Backend
- Intelligence Engine
- Beta

Lihat detail pada:

docs/ROADMAP.md

---

License

Kode sumber dirilis menggunakan lisensi MIT.

Lisensi data mengikuti ketentuan masing-masing penyedia data.

---

Notes for AI Assistants

Jika repository ini dibuka menggunakan Codex, ChatGPT, Claude Code, Gemini CLI, atau AI coding assistant lainnya:

1. Mulailah dari "docs/PRD.md".
2. Ikuti "docs/CODING_GUIDE.md".
3. Jangan mengubah arsitektur tanpa memperbarui "docs/ARCHITECTURE.md".
4. Kerjakan hanya sprint yang sedang aktif.
5. Jangan menambahkan fitur di luar ruang lingkup sprint.

Repository ini dirancang untuk dikembangkan secara bertahap melalui sprint yang kecil, terdokumentasi, dan dapat diuji.
