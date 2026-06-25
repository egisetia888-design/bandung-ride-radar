DESIGN.md

Bandung Ride Radar

Version: 1.0

Status: Active

---

Purpose

Dokumen ini mendefinisikan seluruh standar desain Bandung Ride Radar.

Seluruh implementasi antarmuka harus mengikuti dokumen ini.

Apabila terdapat konflik antara sprint prompt dan dokumen ini, gunakan dokumen ini sebagai acuan utama.

---

Design Philosophy

Bandung Ride Radar adalah aplikasi utilitas.

Tujuan utama antarmuka adalah membantu pengemudi mengambil keputusan secepat mungkin.

Setiap elemen visual harus memiliki fungsi.

Hindari dekorasi yang tidak memiliki nilai fungsional.

---

Design Principles

Seluruh UI harus mengikuti prinsip berikut.

Map First

Peta adalah antarmuka utama.

Pengguna membuka aplikasi untuk melihat kondisi lapangan, bukan dashboard.

Target:

Minimal 75% tinggi layar digunakan untuk peta.

---

One Thumb Operation

Seluruh tombol utama harus berada di area bawah layar.

Pengguna harus dapat menggunakan aplikasi ketika ponsel berada pada holder motor.

---

Low Cognitive Load

Pengguna tidak boleh dipaksa membaca banyak teks.

Gunakan:

- ikon,
- warna,
- badge,
- indikator visual.

---

Three Second Rule

Dalam waktu kurang dari tiga detik pengguna harus mengetahui:

- kondisi area,
- lokasi terbaik,
- tindakan yang disarankan.

---

Color System

Primary

Putih

#FFFFFF

Digunakan untuk:

- background,
- card,
- panel,
- bottom sheet.

---

Secondary

Kuning

#FFC107

Digunakan untuk:

- tombol utama,
- aksi,
- highlight,
- marker rekomendasi.

---

Neutral

Hitam

#212121

Digunakan untuk:

- teks,
- ikon,
- heading.

---

Accent

Merah

#E53935

Digunakan untuk:

- heat sangat tinggi,
- warning,
- kemacetan,
- event penting.

Merah tidak digunakan sebagai warna utama tombol.

---

Heatmap Colors

Kategori peluang:

🟢 Sangat Rendah

🟡 Rendah

🟠 Sedang

🔴 Tinggi

🔴 Merah Pekat = Sangat Tinggi

Heatmap menggunakan grid H3.

Jangan menggunakan heatmap blur.

---

Typography

Font utama:

Inter

Fallback:

system-ui

Ukuran:

Heading:

22 px

Subheading:

18 px

Body:

15 px

Caption:

12 px

---

Shape

Radius:

Card

20 px

Button

16 px

Bottom Sheet

28 px

Search

18 px

---

Shadows

Gunakan bayangan ringan.

Maksimal tiga level elevasi.

Hindari efek glassmorphism.

Hindari neumorphism.

---

Icons

Gunakan:

Lucide Icons

Style:

Outline

Rounded

Ukuran standar:

24 px

---

Navigation

Bottom Navigation.

Hanya tiga menu.

Map

Insight

Settings

Radar tidak menjadi menu.

Radar adalah tombol aksi utama.

---

Floating Action Button

Ikon:

Radar

Label:

Scan

Posisi:

Bawah kanan.

Fungsi:

Memperbarui seluruh rekomendasi.

---

Bottom Sheet

Memiliki tiga state.

Mini

Medium

Expanded

Seluruh informasi detail ditampilkan di Bottom Sheet.

Jangan membuat halaman baru apabila Bottom Sheet sudah cukup.

---

Cards

Card hanya berisi informasi penting.

Maksimal empat informasi utama.

Contoh:

Heat Score

Confidence

ETA

Distance

---

Animations

Durasi:

200–300 ms

Gunakan:

Fade

Slide

Scale

Hindari animasi yang mengganggu.

---

Responsive Rules

Target utama:

Android

360 px

390 px

412 px

Seluruh komponen harus tetap nyaman digunakan pada layar kecil.

---

Accessibility

Target sentuh minimal:

48 × 48 px

Kontras warna harus memenuhi standar WCAG AA.

Semua ikon harus memiliki label.

---

Empty State

Jika belum ada data:

Tampilkan ilustrasi sederhana.

Berikan tombol:

"Scan Sekarang"

---

Error State

Jika koneksi gagal:

Tampilkan data terakhir.

Informasikan bahwa data belum diperbarui.

---

Loading State

Gunakan Skeleton UI.

Jangan menggunakan spinner lebih dari dua detik.

---

Screen List

MVP hanya memiliki lima layar utama.

Splash

Live Map

Insight

Settings

Search Overlay

Tidak membuat dashboard terpisah.

Live Map adalah Home.

---

Live Map Layout

Bagian atas:

Search Bar

Bagian tengah:

Map

Heatmap

Marker

Bagian bawah:

Bottom Sheet

Navigation

FAB

---

Recommendation Card

Setiap rekomendasi menampilkan:

Nama area

Heat Score

Confidence

ETA

Jarak

Action Recommendation

---

Action Recommendation

Selalu tampilkan rekomendasi tindakan.

Pilihan:

Tetap di lokasi

Geser ±500 m

Pindah ke area lain

Hindari area sementara

Pengguna tidak perlu menerjemahkan Heat Score sendiri.

---

Design Keywords

Seluruh UI harus terasa:

Cepat

Bersih

Modern

Profesional

Fungsional

Minim Distraksi

Data Driven

---

Inspirations

Google Maps

Windy

Waze

Apple Maps

Gunakan sebagai referensi pola interaksi, bukan untuk meniru tampilan secara langsung.

Bandung Ride Radar harus memiliki identitas visual sendiri.
