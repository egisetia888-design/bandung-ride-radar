# Bandung Ride Radar

Bandung Ride Radar adalah **Progressive Web App (PWA) berbasis GIS** untuk membantu pengemudi motor ojek online menemukan area dengan peluang permintaan relatif tinggi menggunakan data publik dan teknologi open-source.

Aplikasi ini **bukan platform ride-hailing** dan tidak menggunakan data internal Gojek, Grab, Maxim, inDrive, atau layanan serupa.

---

## Project Status

🚧 **Under Active Development**

- Current Version: MVP Foundation
- Current Sprint: Sprint 1 — Project Foundation
- Status: Next.js foundation setup

---

## Vision

Bandung Ride Radar adalah Decision Support System (DSS) yang membantu pengemudi mengambil keputusan berdasarkan analisis spasial, temporal, dan kontekstual menggunakan data publik.

Target MVP adalah aplikasi yang ringan, mobile-first, dapat dipasang sebagai PWA, dan tetap dapat dikembangkan secara bertahap menuju fitur peta, heatmap, rekomendasi, insight, dan backend intelligence engine.

---

## Main Goals

- Mengurangi waktu idle driver.
- Membantu menentukan titik tunggu terbaik.
- Memvisualisasikan peluang permintaan melalui heatmap pada sprint lanjutan.
- Menggunakan data publik dan open-source.
- Tetap ringan untuk perangkat Android kelas menengah.

---

## Tech Stack

### Frontend

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui

### Planned Frontend GIS

- MapLibre GL
- OpenStreetMap
- H3

### Planned Backend

- FastAPI
- PostgreSQL
- PostGIS
- Redis

### Planned External Data Sources

- OpenStreetMap
- Overpass API
- Open-Meteo
- OSRM
- BPS / Kalender Nasional jika memungkinkan

---

## Repository Structure

```text
bandung-ride-radar/
├── app/                 # Next.js App Router routes and root layout
├── components/          # Reusable UI components
├── docs/                # Product and technical documentation
├── features/            # Feature modules for future sprints
├── hooks/               # Reusable React hooks
├── lib/                 # Shared utilities
├── prompts/             # Sprint prompts and development workflow
├── public/              # Static assets and PWA manifest
├── services/            # API and external service integrations
├── styles/              # Global styles
└── types/               # Global TypeScript types
```

---

## Getting Started

### Prerequisites

- Node.js 20 or newer
- npm 10 or newer

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build production bundle

```bash
npm run build
```

### Run production server

```bash
npm run start
```

### Lint

```bash
npm run lint
```

### Type check

```bash
npm run typecheck
```

### Format check

```bash
npm run format:check
```

---

## Environment Variables

Copy the example environment file before running the app locally:

```bash
cp .env.example .env.local
```

Do not commit real API keys or secrets.

---

## Development Workflow

Implementation follows the sprint prompts in `prompts/`:

1. `00_START_HERE.md`
2. `01_FOUNDATION.md`
3. `02_UI.md`
4. `03_MAP.md`
5. `04_BACKEND.md`
6. `05_INTELLIGENCE.md`

Each sprint must be completed before starting the next sprint.

---

## Data Policy

Bandung Ride Radar only uses:

- public data,
- open-source data,
- voluntary user-provided data in future phases.

If data is not available, temporary mock data must be clearly marked with `TODO` and must not be claimed as real-world or ride-hailing platform data.

---

## License

Code is released under the MIT License. Data licenses follow each source provider.
