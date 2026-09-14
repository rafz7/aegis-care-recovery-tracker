# AegisCare

**Post-Hospital Care Plan & Recovery Tracker** — dasbor pemulihan pasca rawat inap untuk pasien dan keluarga, dibangun dengan React + TypeScript + Vite + Tailwind CSS.

Studi kasus contoh: Tn. Bambang Hermanto, pasien pasca-STEMI (serangan jantung akut) dengan pemasangan ring jantung, mengikuti data di `src/data/mockPatient.ts`.

## ✨ Fitur

- **Banner darurat medis** — modal triase gejala gawat darurat + tombol panggil 119 langsung.
- **Profil klinis pasien** — diagnosis, tindakan, dan alergi obat ditampilkan menonjol.
- **Jadwal minum obat interaktif** — grup Pagi/Malam/PRN, checklist dengan timestamp, progres harian, dan info manfaat/peringatan tiap obat. Tersimpan di `localStorage`.
- **Protokol luka & mobilisasi** — do's & don'ts perawatan luka, batas angkat beban, dan status mobilisasi.
- **Pelacak cairan & diet** — gauge asupan cairan harian dengan tombol tambah cepat, dan kartu aturan diet.
- **Countdown kontrol poliklinik** — hitung mundur real-time ke jadwal kontrol + checklist dokumen yang perlu dibawa.
- **Import resume medis (demo)** — modal untuk menempel teks resume medis atau memuat ulang data contoh.
- **Aegis Partner** — asisten tanya-jawab kontekstual yang membaca progres tracker hari ini secara langsung, mendukung analisis lampiran foto/dokumen (resep, hasil lab, kemasan obat), dengan toolbar minimize/maximize dan 5 lapis fallback model AI.

## 🛠️ Tech Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS
- Framer Motion (animasi & transisi)
- Lucide React (ikon)

## 🚀 Menjalankan secara lokal

```bash
npm install
npm run dev
```

Build untuk produksi:

```bash
npm run build
```

Hasil build ada di folder `dist/` — folder inilah yang di-upload ke hosting statis apa pun (Netlify, Vercel, GitHub Pages, atau shared hosting seperti InfinityFree).

## ⚙️ Mengonfigurasi Aegis Partner

Aegis Partner memanggil layanan AI **langsung dari browser** (tanpa backend), supaya bisa dihosting di mana saja termasuk hosting statis gratis. Konfigurasinya disengaja ditaruh di `index.html` (bukan dibundel ke JS) agar bisa diedit setelah build, tanpa perlu build ulang:

```html
<!-- di dalam <head>, index.html -->
<script>
  window.__AEGIS_PARTNER_CONFIG__ = {
    kunciUtama: "",    // API key layanan utama (Gemini — aistudio.google.com/apikey)
    kunciCadangan: ""  // API key layanan cadangan (Groq — console.groq.com/keys)
  };
</script>
```

Isi salah satu atau keduanya, simpan, lalu upload/timpa `index.html` di server. Alur fallback:

1. Model utama, varian 1
2. Model utama, varian 2
3. Model utama, varian 3
4. Model cadangan, varian 1
5. Model cadangan, varian 2

Jika satu gagal (limit, timeout, model berubah), otomatis lanjut ke berikutnya. Model yang sedang dipakai didefinisikan di `src/lib/aiClient.ts` — provider AI kadang memensiunkan model lama, jadi kalau Aegis Partner berhenti merespons meski key benar, cek dokumentasi resmi penyedia layanan dan perbarui nama model di file tersebut.

> ⚠️ **Catatan keamanan**: karena panggilan dilakukan langsung dari browser (bukan lewat server), siapa pun yang membuka DevTools bisa melihat ke mana permintaan itu terkirim. Gunakan API key khusus untuk proyek ini, batasi dengan referrer restriction bila didukung penyedia layanan, dan jangan pernah pakai key produksi penting di sini.

## 📦 Deploy ke hosting statis (contoh: InfinityFree)

1. `npm run build`
2. Upload **isi** folder `dist/` (`index.html`, `assets/`, `favicon.svg`, `.htaccess`) ke folder root publik hosting (`htdocs` di InfinityFree) — bukan folder `dist` itu sendiri, isinya.
3. Buka domain kamu. Untuk mengubah API key Aegis Partner kapan saja, edit langsung `index.html` di server (lihat bagian konfigurasi di atas) tanpa perlu build ulang.

`vite.config.ts` sudah diatur dengan `base: './'` (path aset relatif) sehingga tetap berfungsi baik di-deploy di root domain maupun di subfolder.

## 📁 Struktur Proyek

```
src/
├── components/       # Semua komponen UI dashboard
├── data/
│   └── mockPatient.ts   # Data kasus contoh (ganti/perluas sesuai kebutuhan)
├── lib/
│   ├── aiClient.ts      # Fallback chain & panggilan API Aegis Partner
│   ├── dailyStatus.ts   # Baca progres tracker hari ini dari localStorage
│   ├── useLocalStorage.ts
│   └── utils.ts
└── config/
    └── aiKeys.ts        # Jembatan baca konfigurasi dari window (diisi di index.html)
```

## ⚠️ Disclaimer

Proyek ini adalah alat bantu pemantauan dan edukasi, **bukan pengganti konsultasi atau instruksi medis langsung**. Data pasien di dalamnya adalah data contoh (mock) untuk keperluan demonstrasi.

## 📄 Lisensi

Bebas digunakan dan dimodifikasi untuk keperluan pembelajaran maupun pengembangan lebih lanjut.
