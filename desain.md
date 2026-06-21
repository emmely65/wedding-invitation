# Desain Dokumen: Islamic Heavenly (Tanpa Foto)
**Sumber:** https://inainvitation.id/islamic-heavenly-tf/?to=Nama+Tamu  
**Template:** Islamic Heavenly — Motion (Tanpa Foto)  
**Platform:** WordPress + Elementor + WeddingPress Plugin  
**Tanggal Analisis:** 18 Juni 2026

---

## 1. Gambaran Umum

Template undangan pernikahan digital berbasis Islam dengan konsep "Heavenly" (surgawi/langit). Desain mengedepankan:
- Estetika islami yang elegan (ornamen bunga, kaligrafi Arab)
- Animasi motion video sebagai latar belakang
- Layout single-page scroll vertical
- Lebar konten dibatasi di sisi kanan (50% layar pada desktop, 100% pada mobile)
- Nuansa warna krem/gold/coklat/beige yang hangat dan mewah

---

## 2. Struktur Layout

### Konsep Layout Desktop
```
┌──────────────────────┬──────────────────────┐
│                      │                      │
│   [HIDDEN - DESKTOP] │   [KONTEN UTAMA]     │
│   Col 50% (kosong)   │   Col 50% (aktif)    │
│                      │                      │
└──────────────────────┴──────────────────────┘
```
- Layout dua kolom dengan **kolom kiri tersembunyi di mobile**
- Pada layar desktop: kolom kiri kosong, kolom kanan berisi semua konten
- Pada mobile: satu kolom penuh (100% lebar)
- Semua konten terpusat (text-align: center)

---

## 3. Struktur Halaman (Urutan Seksi)

### 3.1 Seksi Cover / Landing (Sebelum Dibuka)
- **Posisi:** Layar penuh 100vh, tidak bisa di-scroll
- **Konten:**
  - Teks: "The Wedding of"
  - Nama pengantin wanita: **Yunita**
  - Simbol: **&**
  - Nama pengantin pria: **Riyan**
  - Label tamu: "Kepada Yth. Bapak/Ibu/Saudara/i"
  - Nama tamu dinamis dari URL param `?to=`: **Nama Tamu**
  - Tombol: **"Buka Undangan"** dengan ikon `fa-leaf`
- **Latar:** Background image cover dari file `3D-Syari-2-cover.webp`
- **Animasi:** `fadeInDown` pada kolom konten saat halaman dimuat

### 3.2 Seksi Motion Video (Setelah Klik "Buka Undangan")
- **Trigger:** Muncul setelah tombol "Buka Undangan" diklik
- **Video Background:** `https://assets.inviee.id/islamic/Islamic-Heavenly-HD.mp4`
  - Autoplay, muted, playsinline
  - Play once (tidak loop)
  - Play di mobile juga
- **Konten di atas video:**
  - "The Wedding of" — animasi `zoomIn` delay 1800ms
  - Nama: **Yunita** — animasi `zoomIn` delay 1400ms
  - Simbol: **&** — animasi `zoomIn` delay 1200ms
  - Nama: **Riyan** — animasi `zoomIn` delay 1400ms
  - Hashtag: **#uNITEdwithRIYAN** — animasi `zoomIn` delay 1600ms
  - Tanggal: **31 . 12 . 2026** — animasi `zoomIn` delay 1800ms
  - Ikon Lottie mouse scroll (40x40px) — animasi `zoomIn` delay 2000ms

### 3.3 Seksi Bismillah / Pembukaan Islam
- **Background:** Background image dengan overlay (bernuansa krem/beige)
- **Konten:**
  - Teks Arab Bismillah: **بسم الله الرحمن الرحيم**
  - Teks: "Assalamu'alaikum Warahmatullahi Wabarakatuh"
  - Kutipan ayat Al-Qur'an tentang pernikahan (QS. Ar-Rum: 21)
    > *"Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu istri-istri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya..."*
  - Teks: "Dengan memohon ridho & rahmat Allah SWT, kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami."

### 3.4 Seksi Pengantin Wanita (Calon Pengantin Perempuan)
- **Background:** Background image `3D-Syari-2-cpw.webp` (foto mempelai wanita — ilustrasi 3D)
- **Konten:**
  - Ornamen bunga/bouquet: `ISLAMIC-01-Bouquet.webp`
  - Label: "Mempelai Wanita"
  - Nama lengkap: **Yunita**
  - Nama putri dari: "Putri dari Bapak ... & Ibu ..."
  - Ikon sosial media (Instagram)

### 3.5 Seksi Pengantin Pria (Calon Pengantin Laki-Laki)
- **Background:** Background image `3D-Syari-2-cpp.webp` (foto mempelai pria — ilustrasi 3D)
- **Konten:**
  - Ornamen bunga/bouquet: `ISLAMIC-01-Bouquet.webp`
  - Label: "Mempelai Pria"
  - Nama lengkap: **Riyan**
  - Nama putra dari: "Putra dari Bapak ... & Ibu ..."
  - Ikon sosial media (Instagram)

### 3.6 Seksi Jadwal Acara — Akad Nikah
- **Background:** Background berwarna dengan overlay
- **Ornamen:** Gambar bouquet bunga di atas
- **Konten:**
  - Label: **Akad Nikah**
  - Hari: **Kamis**
  - Tanggal: **31 Desember 2026**
  - Jam: **08.00 WIB**
  - Ikon: `fa-map-marker-alt`
  - Nama Venue: **Auditorium Masjid**
  - Alamat: Jalan Raya Bojongsari No.5, Gunung Putri, Citeureup, Bogor, Jawa Barat
  - Tombol: **Google Maps** (link ke Google Maps)

### 3.7 Seksi Jadwal Acara — Resepsi
- **Konten sama** dengan Akad Nikah, namun:
  - Label: **Resepsi**
  - Jam: **09.00 - Selesai**
  - Venue: **Auditorium Masjid** (sama)

### 3.8 Seksi Jadwal Acara — Ngunduh Mantu
- **Konten sama**, namun:
  - Label: **Ngunduh Mantu**
  - Jam: **17.00 WIB - Selesai**
  - Venue: **Kediaman Mempelai Pria**
  - Alamat: Jl. Pahlawan No. 5, Alian, Kebumen

### 3.9 Seksi Countdown Timer
- **Widget:** Hitung mundur ke tanggal 31 Desember 2026
- **Format:** Hari | Jam | Menit | Detik
- **Tombol:** "Add to Calendar" dengan ikon `fa-bookmark` (link ke Google Calendar)

### 3.10 Seksi Love Story
- **Label:** Love Story
- **Ornamen:** Gambar bouquet
- **Timeline 3 kejadian:**

  **1. Perkenalan**
  - Tanggal: 15 Februari 2020
  - Deskripsi: "Kami bertemu ditempat kerja. Pada saat itu, aku adalah karyawan yang ada ditempat magang dia. akhirnya aku beranikan diri untuk menyatakan cinta padanya. Dari situlah hubungan kami dimulai."
  - Animasi: `fade-right` untuk tanggal, `fade-left` untuk teks

  **2. Lamaran**
  - Tanggal: 13 September 2025
  - Deskripsi tentang proses lamaran
  - Animasi AOS (Animate on Scroll)

  **3. Pernikahan**
  - Tanggal: 31 Desember 2026
  - Deskripsi tentang akad nikah dan resepsi

### 3.11 Seksi Dress Code
- **Background:** Background bernuansa cream/krem
- **Judul:** Dress Code
- **Deskripsi:** "Dengan hormat, kami mengundang Anda untuk mengenakan warna pilihan ini di hari pernikahan kami."
- **Swatch Warna:** 4 lingkaran warna (menggunakan SVG dot icons):
  - Warna 1: **Putih** (`#ffffff`) — ikon dot SVG berwarna white
  - Warna 2: **Lavender/Ungu Muda** (`#d9d2e9`)
  - Warna 3: **Emas/Gold Muda** (`#ffd798`)
  - Warna 4: **Emas/Gold Tua** (`#dcac61`)
  - Warna 5: **Coklat Tua** (`#a6782f`)

### 3.12 Seksi Amplop Digital / Transfer Bank
- **Judul:** Amplop Digital
- **Deskripsi:** "Hadiah terbaik bagi kami adalah doa & kehadiranmu. Namun bagi yang ingin memberikan amplop digital..."
- **Tombol:** Tampilkan Amplop (show/hide toggle)
- **Konten Amplop (hidden by default):**
  - **Bank 1:**
    - Logo: Chip ATM (`chip-atm1.webp`)
    - Nama: Olga Kuswoyo
    - Nomor Rekening: 0987654321
    - Logo Bank: BNI (`bni.png`)
    - Tombol: **Copy** (copy nomor rekening ke clipboard)
  - **Bank 2:** (serupa)
    - Nama: (nama berbeda)
    - Nomor: 0123456789
    - Tombol: **Copy**

### 3.13 Seksi Gift Registry
- **Layout:** 2 kolom
- **Kolom kiri:**
  - Judul: **GIFT REGISTRY**
  - Deskripsi: "Kami menyiapkan wishlist/gift registry sebagai bentuk kemudahan bagi yang ingin memberi hadiah..."
- **Kolom kanan:**
  - Ikon: `fa-gift`
  - Tombol: **View List** (link ke halaman wishlist)

### 3.14 Seksi Kirim Kado
- **Layout:** 2 kolom
- **Kolom kiri:**
  - Judul: **KIRIM KADO**
  - Alamat pengiriman kado: an. Anita Safitri, Jalan Raya Bojongsari No.5, Gunung Putri, Citeureup, Bogor, Jawa Barat
- **Kolom kanan:**
  - Ikon: `fa-gift`
  - Tombol: **Copy** (copy alamat)
- **Form:** Konfirmasi pemberian hadiah via WhatsApp
  - Input: Full Name
  - Tombol: **Confirm via WhatsApp**

### 3.15 Seksi Adab Walimah
- **Judul:** Adab Walimah
- **Deskripsi:** "Tanpa mengurangi rasa hormat, dimohon kepada para tamu undangan untuk memperhatikan hal-hal berikut:"
- **Gambar:** Infografis adab walimah (hitam putih): `Adab-V3-Hitam-2.webp` (ukuran 608×920)

### 3.16 Seksi Doa Untuk Pengantin
- **Judul:** Doa Untuk Pengantin
- **Teks Arab:**
  > بَارَكَ اللهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِى خَيْرٍ
- **Transliterasi:** *Barakallahu laka wa baraka 'alaika wa jama'a bainakuma fii Khoir*
- **Terjemahan:** "Mudah-mudahan Allah memberkahi engkau dalam segala hal (yang baik) dan mempersatukan kamu berdua dalam kebaikan"

### 3.17 Seksi Turut Mengundang
- **Judul:** Turut Mengundang
- **Daftar nama:** (11 nama keluarga besar yang turut mengundang)
  - Ibu Sri Wahyuni Anindita
  - Bapak Abdul Karim Syahputra, S.H.
  - Keluarga Besar Ibu Lina Marlina Putri
  - Bapak Bambang Santoso Prabowo, M.T.
  - Ibu Nurhayati Kusumawardani
  - Bapak Andi Pratama Nugroho
  - Ibu Nuraeni Fitriani, S.Pd.I.
  - Keluarga Besar Bapak Hasan Basri Syamsuddin
  - Bapak Mulyono Widjaja, M.M.
  - Ibu Aminah Zulkarnaini, S.Ag.
  - Keluarga Besar Ibu Maryam Azzahra

### 3.18 Seksi RSVP & Wishes
- **Background:** Gradient (berdasarkan class `gradient`)
- **Judul:** RSVP & Wishes
- **Subjudul:** "Ucapan Selamat, Doa & Konfirmasi Kehadiran"
- **Form RSVP (ev-rsvp-form):**
  - Field: Nama Anda (pre-filled dengan nama dari URL param `?to=`)
  - Radio: Konfirmasi Kehadiran
    - ✅ Hadir
    - ❓ Masih Ragu
    - ❌ Tidak Hadir
  - (Jika Hadir) Dropdown jumlah tamu: 1 orang / 2 orang / 3 orang
  - Textarea: Tulis Ucapan & Doa Terbaikmu
  - Pilih Stiker (emoji/sticker selector)
  - Tombol: **Kirim**
- **Daftar Ucapan:** Menampilkan ucapan yang sudah masuk (2 ucapan tampil)
  - Navigasi: ← Sebelumnya / Selanjutnya →
  - Badge: Hadir / Tidak Hadir / Masih Ragu
  - Tombol Like

### 3.19 Floating Music Player
- **Posisi:** Fixed (pojok layar)
- **Fungsi:** Play/pause musik latar
- **Trigger:** Auto-play saat tombol "Buka Undangan" diklik
- **Audio ID:** `song`

---

## 4. Tipografi

### Google Fonts yang Digunakan
| Font | Penggunaan |
|------|-----------|
| **Tangerine** | Nama pengantin (Yunita, Riyan) — gaya kursif/script mewah |
| **Cormorant Infant** | Teks elegan, heading sekunder |
| **Elsie** | Heading dekoratif |
| **Pinyon Script** | Script mewah untuk "The Wedding of" |
| **Playfair Display** | Body text premium |
| **Poppins** | Body text umum, tombol |
| **Roboto** | Body text umum |
| **Roboto Slab** | Heading alternatif |
| **DM Sans** | UI text, form, notifikasi |
| **Public Sans** | Body text tambahan |

### Hierarki Tipografi (Perkiraan)
- **"The Wedding of"** — Pinyon Script, ~18-22px, italic
- **Nama Pengantin** (Yunita, Riyan) — Tangerine / Cormorant, ~64-80px, bold
- **Simbol &** — Tangerine, ~48-60px
- **Hashtag** (#uNITEdwithRIYAN) — Poppins, ~14px, uppercase, letter-spacing
- **Tanggal Acara** — Playfair Display, ~28-36px
- **Label Seksi** (Akad Nikah, Love Story, dll) — Elsie / Playfair Display, ~24-28px
- **Body Text** — Poppins / DM Sans, ~14-16px
- **Teks Arab** — font Arab system default, ~20-24px, RTL
- **Tombol** — Poppins, ~13-14px, uppercase, letter-spacing

---

## 5. Palet Warna

### Warna Utama
| Nama | Hex | Penggunaan |
|------|-----|-----------|
| Cream/Krem | `#f5f0f0` | Background dominan, background seksi |
| Gold Tua | `#dcac61` | Aksen, border, ornamen |
| Gold Muda | `#ffd798` | Dress code swatch, aksen |
| Coklat Emas | `#c79369` | Warna skin mempel di ilustrasi |
| Coklat Tua | `#a6782f` | Dress code swatch tua |
| Coklat Gelap | `#5e3a1d` | Detail rambut ilustrasi |
| Hitam Lembut | `#1a1a1a` / `#323232` | Teks utama, detail ilustrasi |
| Putih | `#ffffff` | Latar konten overlay |
| Lavender | `#d9d2e9` | Dress code swatch ungu |
| Biru Info | `#6ec1e4` | Warna copy number (minor) |

### Warna Background Seksi
- Background utama: **Krem/Beige** — `#f5f0f0` atau serupa
- Video section: **Transparan** (video sebagai background)
- RSVP section: **Gradient** (krem ke putih atau coklat ke krem)
- Dress code: **Cream dengan background sedikit lebih gelap**

---

## 6. Elemen Dekoratif & Ornamen

### Ornamen Utama
1. **Bouquet Bunga Islamic** — `ISLAMIC-01-Bouquet.webp`
   - Ukuran: 1000×1058px
   - Digunakan di: Header seksi Akad Nikah, Resepsi, Ngunduh Mantu, Love Story
   - Posisi: Di atas teks seksi, terpusat

2. **Background Ilustrasi 3D Syar'i** (mempelai wanita & pria)
   - `3D-Syari-2-cover.webp` — Cover utama
   - `3D-Syari-2-cpw.webp` — Profil mempelai wanita
   - `3D-Syari-2-cpp.webp` — Profil mempelai pria
   - Gaya: Ilustrasi 3D digital dengan busana syar'i/muslimah

3. **Chip ATM Visual** — `chip-atm1.webp` (untuk seksi amplop digital)

4. **Infografis Adab Walimah** — `Adab-V3-Hitam-2.webp` (608×920px, hitam putih)

5. **Lottie Animation** — Mouse scroll indicator
   - File: `lottie-mouse-black.json`
   - Ukuran: 40×40px
   - Loop autoplay
   - Ditampilkan di atas video motion

### Ikon (Font Awesome 5)
| Ikon | Kelas | Digunakan di |
|------|-------|-------------|
| Daun | `fas fa-leaf` | Tombol "Buka Undangan" |
| Map Marker | `fas fa-map-marker-alt` | Info lokasi, tombol Google Maps |
| Bookmark | `far fa-bookmark` | Tombol "Add to Calendar" |
| Copy | `far fa-copy` | Tombol copy rekening/alamat |
| Gift | `fas fa-gift` | Seksi Gift Registry, Kirim Kado |
| Gifts | `fas fa-gifts` | Tombol View List |
| Smile Beam | `far fa-smile-beam` | Pilih Stiker RSVP |

### Dot/Swatch Warna (SVG)
Menggunakan SVG lingkaran dengan background berbeda untuk dress code:
```svg
<svg viewBox="0 0 448 448" ...>
  <rect rx="224" fill="#COLOR"/> <!-- background swatch -->
  <circle cx="224" cy="828" r="192"/> <!-- dot hitam di tengah -->
</svg>
```

---

## 7. Animasi & Efek

### Animasi Halaman
| Animasi | Trigger | Element |
|---------|---------|---------|
| `fadeInDown` | On Load | Kolom konten cover |
| `zoomIn` | Klik "Buka Undangan" + delay | Nama-nama di atas video |
| `zoomIn` | Scroll (reveal) | Berbagai seksi |
| `reveal` | Scroll IntersectionObserver | Kolom-kolom seksi |
| `reveal1` | Scroll | Gambar ornamen bouquet |
| `muncul-atas` | Scroll | Form RSVP |
| `fade-down` | AOS Scroll | Judul RSVP |
| `fade-right` | AOS Scroll | Tanggal love story |
| `fade-left` | AOS Scroll | Deskripsi love story |

### Delay Animasi pada Video Section
```
"The Wedding of"    → zoomIn, delay 1800ms
"Yunita"            → zoomIn, delay 1400ms
"&"                 → zoomIn, delay 1200ms
"Riyan"             → zoomIn, delay 1400ms
"#uNITEdwithRIYAN"  → zoomIn, delay 1600ms
"31 . 12 . 2026"    → zoomIn, delay 1800ms
Lottie mouse icon   → zoomIn, delay 2000ms
```

### Smooth Scroll
- Custom smooth scroll dengan easing `easeInOutCubic`
- Duration: 2500ms
- Diaktifkan saat klik tombol "Buka Undangan" → scroll ke `#open`

### Interaksi Cover
```javascript
// Saat klik "Buka Undangan":
// 1. Enable scrolling
// 2. Play audio
// 3. Mulai video (delay 100ms)
// 4. Tampilkan section motion (setelah delay dari dataset 'delayTime')
```

---

## 8. Background Video

- **URL:** `https://assets.inviee.id/islamic/Islamic-Heavenly-HD.mp4`
- **Kualitas:** HD
- **Mode:** Play once (tidak loop), autoplay, muted, playsinline
- **Mobile:** Play di mobile juga diaktifkan
- **Start time:** 0.1 detik
- **Posisi:** Full-screen di dalam seksi motion
- **Selector:** `.motionSection .elementor-background-video-container video`

---

## 9. Komponen UI / Button

### Tombol Utama
```css
/* "Buka Undangan" */
background: [warna krem/emas]
border-radius: [rounded]
padding: em-based
font-family: Poppins
letter-spacing: 1-2px
text-transform: uppercase
icon: fas fa-leaf (kiri)
```

### Tombol Google Maps
```css
background: [warna krem/emas]
icon: fas fa-map-marker-alt (kiri)
text: "Google Maps"
target: _blank
```

### Tombol Add to Calendar
```css
icon: far fa-bookmark (kiri)
text: "Add to Calendar"
link: Google Calendar TEMPLATE URL
```

### Tombol Copy Rekening
```css
icon: far fa-copy (kiri)
text: "Copy"
onclick: copyText() — copy to clipboard via jQuery
feedback: "Copied" muncul sesaat
```

### Tombol RSVP Submit
```css
text: "Kirim"
loading state: "Mohon tunggu, ucapan sedang diproses" + spinner
```

---

## 10. Form & Interaksi

### Form RSVP
- **Plugin:** WeddingPress + ev-rsvp handler
- **Fields:**
  - `author` — text input (Nama Anda), pre-filled dari URL `?to=`
  - `attendance` — radio group (present / notsure / notpresent)
  - `guest` — select dropdown (1/2/3 orang) — hanya muncul saat pilih "Hadir"
  - `comment` — textarea (Tulis Ucapan)
  - `selected_sticker` — hidden input (dari sticker picker)
- **Sticker Modal:** Overlay modal dengan carousel stiker (8 per halaman)
- **Pagination ucapan:** 10 ucapan per halaman

### Form Konfirmasi Hadiah (WhatsApp)
- Input: Full Name
- Submit → redirect ke WhatsApp API dengan pesan template
- Template: `"Hai, saya %nama%. Ingin mengonfirmasi pemberian hadiah."`
- Nomor WhatsApp: 628000000000 (placeholder)

---

## 11. Fitur Teknis

### Dark Mode Detection
```javascript
// Mendeteksi forced dark mode browser
// Jika terdeteksi → tampilkan SweetAlert2 popup peringatan
// Pesan: "Mode Gelap Terdeteksi! Aktifkan mode terang untuk tampilan terbaik"
```

### Amplop Digital Toggle
```javascript
// btnAmplop → onclick → tampilkan section amplop + btn-hide
// btn-hide → onclick → sembunyikan section amplop + tampilkan btnAmplop
```

### URL Parameter Guest Name
```javascript
// URL: ?to=Nama+Tamu
// Dibaca dan di-inject ke:
// - Teks nama tamu di cover
// - Field nama di form RSVP (pre-filled)
```

### Audio Playback
```javascript
// Audio element dengan id="song"
// Dipanggil via playAudio() saat klik "Buka Undangan"
// document.body.contains(song) → song.play()
```

### Disable/Enable Scroll
```javascript
// disableScrolling() → window.onscroll = function() { scrollTo(x, y) }
// enableScrolling() → window.onscroll = function() {}
// Scroll dikunci di halaman cover, dibuka saat tombol diklik
```

---

## 12. Responsive Design

### Breakpoints (Elementor)
| Breakpoint | Lebar |
|-----------|-------|
| Mobile Portrait | ≤ 767px |
| Mobile Landscape | ≤ 880px (disabled) |
| Tablet Portrait | ≤ 1024px |
| Desktop | > 1024px |

### Perilaku Responsive
- **Desktop:** Layout 2 kolom (kiri kosong, kanan konten)
- **Mobile:** Layout 1 kolom penuh (kolom kiri disembunyikan via `elementor-hidden-mobile`)
- **Gambar:** `contain-intrinsic-size: 3000px 1500px` untuk lazy load
- **Transform scale:** Gambar chip ATM di-scale 0.8 desktop, 0.6 mobile

---

## 13. SEO & Meta

```html
<title>Islamic Heavenly (Tanpa Foto)</title>
<meta name="description" content="Islamic Heavenly (Tanpa Foto) Preview">
<meta property="og:image" content="...3D-Syari-2-fi.webp">
<meta property="og:image:width" content="1000">
<meta property="og:image:height" content="1000">
<meta name="robots" content="noindex, nofollow">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
```

---

## 14. Plugins & Library yang Digunakan

| Library/Plugin | Versi | Fungsi |
|---------------|-------|--------|
| WordPress | 6.9.4 | CMS |
| Elementor | 4.0.6 | Page Builder |
| Elementor Pro | 4.0.4 | Pro features |
| WeddingPress | 3.2.1.1 | Wedding-specific widgets |
| WeddingSaaS Pro | 2.9.1 | Saas features (RSVP, audio) |
| JetEngine | 3.8.8.2 | Dynamic data |
| JetFormBuilder | - | Form builder |
| EveEnt | 2.4.4 | RSVP & Barcode |
| jQuery | 3.7.1 | JavaScript library |
| DotLottie Player | 2.7.12 | Lottie animation |
| AOS (Animate on Scroll) | - | Scroll animations |
| SweetAlert2 | 11 | Popup dialogs |
| QR Code Styling | 1.5.0 | QR code generator |
| xlsx.js | 0.17.0 | Excel export |
| Font Awesome | 5.15.3 | Icons |
| Google Fonts | - | Typography |
| Swiper | - | Carousel/slider |

---

## 15. URL Asset Utama

| Asset | URL |
|-------|-----|
| Cover Background | `https://hi.inviee.id/wp-content/uploads/2024/08/3D-Syari-2-cover.webp` |
| Profil Wanita | `https://hi.inviee.id/wp-content/uploads/2024/08/3D-Syari-2-cpw.webp` |
| Profil Pria | `https://hi.inviee.id/wp-content/uploads/2024/08/3D-Syari-2-cpp.webp` |
| Bouquet Islamic | `https://hi.inviee.id/wp-content/uploads/2025/10/ISLAMIC-01-Bouquet.webp` |
| Lottie Mouse | `https://hi.inviee.id/wp-content/uploads/2024/08/lottie-mouse-black.json` |
| Video Motion | `https://assets.inviee.id/islamic/Islamic-Heavenly-HD.mp4` |
| Adab Walimah | `https://hi.inviee.id/wp-content/uploads/jet-form-builder/.../Adab-V3-Hitam-2.webp` |
| Chip ATM | `https://hi.inviee.id/wp-content/uploads/2024/12/chip-atm1.webp` |
| Logo BNI | `https://app.inviee.id/wp-content/uploads/2023/03/bni.png` |

---

## 16. Ringkasan Gaya Desain

### Mood & Tema
- **Nuansa:** Heavenly (surgawi), Islamic elegance, mewah namun syar'i
- **Palet:** Warm neutral — krem, emas, beige, coklat hangat
- **Karakter:** Feminin-maskulin seimbang, islami, premium
- **Tanpa foto asli:** Menggunakan ilustrasi 3D digital (tanpa foto pengantin nyata)

### Prinsip Desain
1. **Centered layout** — Semua konten terpusat horizontal
2. **Scroll reveal animations** — Setiap seksi muncul saat scroll
3. **Video-first opening** — Kesan pertama didominasi video motion
4. **Islamic elements** — Bismillah, ayat Quran, doa, adab walimah
5. **Progressive disclosure** — Cover → Buka → Konten (tidak langsung terlihat semua)
6. **Mobile-first** — Dirancang untuk dibaca di smartphone
7. **No photo required** — Template ini khusus tanpa foto pasangan (Tanpa Foto)

---

*Dokumen ini dibuat berdasarkan analisis HTML source dari halaman undangan Islamic Heavenly (Tanpa Foto) di inainvitation.id pada tanggal 18 Juni 2026.*
