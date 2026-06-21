import React, { useMemo, useState } from 'react';
import { weddingData } from './data/weddingData.js';
import OpeningCover from './components/OpeningCover.jsx';
import HeroSection from './components/HeroSection.jsx';
import BismillahSection from './components/BismillahSection.jsx';
import CoupleProfile from './components/CoupleProfile.jsx';
import EventDetails from './components/EventDetails.jsx';
import AdabWalimah from './components/AdabWalimah.jsx';
import DoaPengantin from './components/DoaPengantin.jsx';
import RSVPForm from './components/RSVPForm.jsx';
import ClosingSection from './components/ClosingSection.jsx';
import MusicControl from './components/MusicControl.jsx';
import BottomNavigation from './components/BottomNavigation.jsx';

function getGuestName() {
  const params = new URLSearchParams(window.location.search);
  const value = params.get('to') || params.get('tamu') || params.get('nama');
  return value ? decodeURIComponent(value.replace(/\+/g, ' ')) : '';
}

export default function App() {
  const [opened, setOpened] = useState(false);
  const [startKey, setStartKey] = useState(0);
  const guestName = useMemo(() => getGuestName(), []);

  function openInvitation() {
    setOpened(true);
    setStartKey((v) => v + 1);
    // Remove scroll lock
    document.documentElement.classList.remove('cover-locked');
    document.body.classList.remove('cover-locked');
    window.setTimeout(() => {
      document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
    }, 120);
  }

  // Lock scroll when cover is shown
  React.useEffect(() => {
    if (!opened) {
      document.documentElement.classList.add('cover-locked');
      document.body.classList.add('cover-locked');
    }
  }, [opened]);

  return (
    <div className="min-h-screen bg-ivory font-sansBody text-ink antialiased">
      {!opened && (
        <OpeningCover
          data={weddingData}
          guestName={guestName}
          onOpen={openInvitation}
        />
      )}

      <main
        className={`${
          opened
            ? 'opacity-100'
            : 'pointer-events-none h-dvh overflow-hidden opacity-0'
        } transition-opacity duration-700`}
      >
        {/* 1. Hero with video */}
        <HeroSection data={weddingData} opened={opened} />

        {/* 2. Bismillah / Opening Islamic */}
        <BismillahSection data={weddingData} />

        {/* 3. Couple Profiles */}
        <CoupleProfile data={weddingData} />

        {/* 4. Event Details (Akad, Resepsi, Ngunduh Mantu) */}
        <EventDetails
          events={weddingData.events}
          bouquetSrc={weddingData.photos.bouquet}
        />

        {/* 8. Adab Walimah */}
        <AdabWalimah data={weddingData} />

        {/* 9. Doa Untuk Pengantin */}
        <DoaPengantin doa={weddingData.doa} />

        {/* 11. RSVP & Wishes (includes Guestbook) */}
        <RSVPForm guestName={guestName} />

        {/* 13. Closing */}
        <ClosingSection data={weddingData} />
      </main>

      {/* Footer */}
      {opened && (
        <footer className="bg-ink px-5 py-8 pb-24 text-center text-xs text-ivory/70 sm:pb-8">
          <p>Made with ❤️ for {weddingData.coupleName}</p>
          <a
            href="#home"
            className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-gold/30 px-4 py-2 text-ivory/80 transition hover:bg-gold/10"
          >
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M5 15l7-7 7 7" />
            </svg>
            Kembali ke atas
          </a>
        </footer>
      )}

      {/* Music Control */}
      <MusicControl
        src={weddingData.musicUrl}
        opened={opened}
        startKey={startKey}
      />

      {/* Bottom Navigation (mobile) */}
      <BottomNavigation opened={opened} />
    </div>
  );
}
