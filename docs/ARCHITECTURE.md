ARCHITECTURE.md

Bandung Ride Radar

Version: 1.0

Status: Active

---

Purpose

Dokumen ini mendefinisikan arsitektur teknis Bandung Ride Radar.

Seluruh implementasi harus mengikuti arsitektur ini.

Perubahan besar terhadap arsitektur harus dilakukan melalui pembaruan dokumen ini sebelum implementasi.

---

Architecture Principles

Seluruh sistem dibangun berdasarkan prinsip berikut.

Modular

Setiap fitur berdiri sendiri.

Tidak boleh ada ketergantungan yang tidak diperlukan.

---

Feature First

Struktur proyek mengikuti fitur.

Bukan jenis file.

---

Open Source First

Seluruh teknologi diprioritaskan menggunakan solusi open-source.

---

API First

Seluruh komunikasi dilakukan melalui API yang jelas.

Frontend tidak boleh mengakses database secara langsung.

---

Performance First

Optimalkan:

- waktu muat,
- penggunaan memori,
- penggunaan baterai,
- penggunaan data internet.

---

Progressive Enhancement

Aplikasi tetap dapat digunakan walaupun sebagian data tidak tersedia.

---

High Level Architecture

+--------------------------------------------------+
|                Android Browser / PWA             |
+-------------------------+------------------------+
                          |
                          v
+--------------------------------------------------+
|              Next.js Frontend (App Router)       |
|                                                  |
|  UI • Map • State • Components • Features        |
+-------------------------+------------------------+
                          |
                 HTTPS / REST API
                          |
                          v
+--------------------------------------------------+
|                FastAPI Backend                   |
|                                                  |
| Prediction Engine • GIS • Weather • Routing      |
+-------------------------+------------------------+
                          |
             +------------+-------------+
             |                          |
             v                          v
+------------------------+   +----------------------+
| PostgreSQL + PostGIS   |   | Redis Cache          |
+------------------------+   +----------------------+
             |
             v
+--------------------------------------------------+
| External Data Sources                            |
| OpenStreetMap • Overpass • Open-Meteo • BPS      |
| Kalender • Event • OSRM                          |
+--------------------------------------------------+

---

Frontend Architecture

Bandung Ride Radar menggunakan satu aplikasi Next.js di root repository, bukan monorepo. Semua folder frontend utama berada langsung di root repository.

Framework:

Next.js 15

Rendering:

App Router

Server Components sebagai default.

Client Components hanya digunakan ketika:

- membutuhkan state,
- akses browser API,
- interaksi kompleks.

---

Frontend Layers

Root repository:

app/

↓

features/

↓

components/

↓

services/

↓

API

Business logic tidak boleh berada di dalam komponen UI.

---

Backend Architecture

Framework:

FastAPI

Tugas backend:

- Aggregasi data.
- Prediction Engine.
- Routing.
- Spatial Query.
- Caching.
- API.

Backend tidak menyimpan logika tampilan.

---

Database

Primary Database:

PostgreSQL

Extension:

PostGIS

Digunakan untuk:

- Spatial Query.
- Geometri.
- Grid H3.
- Perhitungan jarak.
- Analisis wilayah.

---

Cache

Redis

Digunakan untuk:

- Heatmap.
- Weather.
- API Response.
- Spatial Query.

Tujuan:

Mengurangi waktu respons.

---

GIS Architecture

Spatial Index:

H3

Map:

OpenStreetMap

Rendering:

MapLibre GL

Routing:

OSRM

Query:

Overpass API

Seluruh analisis spasial dilakukan menggunakan H3 Grid.

---

Data Flow

GPS Pengguna

↓

Frontend

↓

Backend API

↓

Prediction Engine

↓

Spatial Analysis

↓

Heat Score

↓

Recommendation Engine

↓

Frontend

↓

Map + Bottom Sheet

---

Feature Architecture

Setiap fitur memiliki struktur sendiri.

Contoh:

features/

map/
radar/
heatmap/
insight/
settings/
recommendation/

Setiap folder dapat memiliki:

- components
- hooks
- services
- types
- utils

---

Prediction Pipeline

Location

↓

H3 Cell

↓

Weather

↓

Traffic

↓

Land Use

↓

Time

↓

Event

↓

Rule-Based Scoring

↓

Heat Score

↓

Confidence Score

↓

Recommendation

---

External Services

Prioritas penggunaan:

1. OpenStreetMap
2. Overpass API
3. Open-Meteo
4. OSRM
5. BPS
6. Kalender Nasional

Tidak menggunakan layanan berbayar pada MVP.

---

Offline Strategy

Jika internet terputus:

- tampilkan cache terakhir,
- tandai data sebagai tidak mutakhir,
- sinkronkan otomatis saat koneksi kembali.

---

Security

Frontend tidak menyimpan API Key sensitif.

Gunakan environment variables untuk konfigurasi.

Validasi input dilakukan di backend.

---

Scalability

Arsitektur harus mendukung:

- penambahan kota baru,
- penambahan sumber data,
- penggantian Prediction Engine,
- migrasi Rule-Based ke Machine Learning,
- deployment multi-region.

Tanpa mengubah struktur utama proyek.

---

Performance Targets

- First Load < 3 detik
- API Response < 500 ms
- Heatmap Render < 1 detik
- FPS peta ≥ 60 pada perangkat menengah
- Konsumsi data < 30 MB/hari

---

Future Architecture

Pada fase lanjutan, sistem dapat ditambah:

- Crowdsourcing
- AI Prediction
- Historical Analytics
- Multi-City Support
- Push Notification
- Dashboard Analytics

Seluruh fitur baru harus mengikuti prinsip modular dan tidak mengubah fondasi arsitektur yang telah ditetapkan.
