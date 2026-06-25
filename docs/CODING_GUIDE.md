CODING_GUIDE.md

Bandung Ride Radar

Version: 1.0

Status: Active

---

Purpose

Dokumen ini merupakan standar implementasi proyek Bandung Ride Radar.

Seluruh kode yang dihasilkan harus mengikuti aturan dalam dokumen ini.

Apabila terdapat konflik antara sprint prompt dan dokumen ini, gunakan dokumen ini sebagai prioritas kecuali sprint secara eksplisit menyatakan sebaliknya.

---

Development Philosophy

Produk harus dibangun seperti software production-ready.

Selalu prioritaskan:

- Readability
- Maintainability
- Scalability
- Reusability
- Performance
- Accessibility

Jangan pernah membuat solusi yang hanya bekerja untuk satu kasus apabila dapat dibuat menjadi reusable.

---

Tech Stack

Frontend

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- MapLibre GL
- Zustand
- TanStack Query

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

Deployment

- Vercel
- Railway / Render

Testing

- Vitest
- Playwright

Linting

- ESLint
- Prettier

---

General Rules

Selalu gunakan TypeScript.

Jangan menggunakan JavaScript.

Gunakan App Router.

Gunakan Server Component apabila tidak membutuhkan state client.

Gunakan Client Component hanya apabila benar-benar diperlukan.

Selalu gunakan async/await.

Hindari callback yang tidak perlu.

---

Project Structure

Bandung Ride Radar menggunakan satu aplikasi Next.js di root repository, bukan monorepo. Ikuti struktur berikut.

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

Jangan membuat folder baru tanpa alasan yang jelas.

---

Folder Responsibilities

app/

Routing dan layout.

components/

Reusable UI.

features/

Business logic per fitur.

hooks/

Reusable React hooks.

lib/

Utility.

services/

API dan integrasi eksternal.

types/

Type global.

---

Component Rules

Satu komponen hanya memiliki satu tanggung jawab.

Komponen harus reusable.

Gunakan composition.

Hindari prop yang terlalu banyak.

Pisahkan logic dari presentasi.

---

State Management

Prioritas:

1. Server State

TanStack Query.

2. Local State

React State.

3. Global State

Zustand.

Jangan menggunakan Context API sebagai global state kecuali memang diperlukan.

---

Form

Gunakan:

React Hook Form

+ 

Zod

Seluruh validasi dilakukan menggunakan schema.

---

Styling

Gunakan Tailwind CSS.

Jangan menggunakan CSS inline.

Gunakan utility class.

Apabila class terlalu panjang gunakan helper.

---

Naming Convention

Component

PascalCase

Contoh

HeatMapCard.tsx

Function

camelCase

Variable

camelCase

Constant

UPPER_SNAKE_CASE

Folder

kebab-case

---

Import Order

External

↓

Internal

↓

Components

↓

Styles

---

Error Handling

Seluruh request harus memiliki:

Loading

Error

Empty

Success

State

Tidak boleh ada halaman kosong tanpa penanganan status.

---

Performance

Lazy load apabila diperlukan.

Optimalkan bundle.

Gunakan memo hanya apabila terbukti diperlukan.

Hindari re-render yang tidak perlu.

---

Accessibility

Seluruh tombol harus memiliki label.

Gunakan semantic HTML.

Pastikan kontras warna memenuhi standar.

Seluruh fitur harus dapat digunakan melalui layar sentuh dengan mudah.

---

Map Rules

Peta merupakan fokus utama.

Jangan menutupi peta dengan panel besar.

Gunakan Bottom Sheet.

Marker harus sederhana.

Heatmap harus menggunakan H3 Grid.

---

Design Rules

Tema utama

Light Theme.

Palet warna

Putih

Kuning

Hitam

Merah

Gunakan warna secara konsisten.

---

Data Rules

Jangan mengasumsikan data tersedia.

Apabila data publik tidak tersedia:

Gunakan mock data sementara.

Tambahkan TODO.

Jangan membuat data palsu yang seolah-olah berasal dari dunia nyata.

---

AI Rules

Versi MVP menggunakan Rule-Based Scoring.

Jangan mengimplementasikan Machine Learning sebelum diminta.

---

Git Commit Convention

Gunakan Conventional Commits.

Contoh:

feat:

fix:

refactor:

docs:

test:

style:

chore:

---

Pull Request Checklist

Pastikan:

- Build berhasil.
- Tidak ada lint error.
- Tidak ada TypeScript error.
- Dokumentasi diperbarui jika diperlukan.
- Tidak ada duplicate code.

---

Definition of Done

Sebuah sprint dianggap selesai apabila:

- Fitur berjalan.
- Responsive.
- Tidak ada error build.
- Lolos lint.
- Lolos type check.
- Mengikuti PRD.
- Mengikuti Design Guide.
- Mudah dipelihara.
