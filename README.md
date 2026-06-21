# Ali & Deni Lailatul Invitation

Website undangan pernikahan digital single-page scrolling berbasis React + Tailwind CSS.

## Fitur

- Mobile-first responsive layout
- Opening cover dengan tombol **Buka Undangan**
- Musik aktif setelah user membuka undangan
- Countdown acara
- Quote islami
- Profil mempelai
- Detail akad dan resepsi
- Love story timeline
- Gallery dengan lightbox
- RSVP tersimpan di localStorage
- Guestbook tersimpan di localStorage
- Love gift dengan tombol salin rekening/alamat
- Sticky bottom navigation untuk mobile

## Cara Menjalankan

```bash
npm install
npm run dev
```

Buka:

```bash
http://localhost:5173
```

## Build Production

```bash
npm run build
npm run preview
```

## Edit Data Undangan

Semua data utama dapat diedit di:

```bash
src/data/weddingData.js
```

Yang bisa diedit:

- Nama pasangan
- Tanggal acara
- Countdown target
- Foto cover, hero, profil, gallery
- Detail akad dan resepsi
- Link Google Maps
- Love story
- Rekening / love gift
- Alamat kado
- Musik

## Nama Tamu dari Link

Website mendukung nama tamu dari query URL:

```bash
http://localhost:5173/?to=Bapak%20Ahmad
```

Alternatif parameter:

```bash
?tamu=Nama%20Tamu
?nama=Nama%20Tamu
```

## Ganti Foto

Letakkan foto di folder:

```bash
public/images/
```

Lalu ubah path di `src/data/weddingData.js`, contoh:

```js
photos: {
  cover: '/images/foto-cover.jpg',
  hero: '/images/foto-pasangan.jpg',
  bride: '/images/bella.jpg',
  groom: '/images/deni.jpg'
}
```

## Ganti Musik

Letakkan audio di folder:

```bash
public/audio/
```

Lalu ubah:

```js
musicUrl: '/audio/nama-musik.mp3'
```

Musik tidak autoplay sebelum user klik tombol **Buka Undangan**.
