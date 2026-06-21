import { useEffect, useRef, useState } from 'react';

export default function MusicControl({ src, opened, startKey }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!opened || !audioRef.current) return;
    audioRef.current.play().then(() => setPlaying(true)).catch(() => {});
  }, [opened, startKey]);

  function toggle() {
    const a = audioRef.current;
    if (!a) return;
    if (a.paused) {
      a.play().then(() => setPlaying(true));
    } else {
      a.pause();
      setPlaying(false);
    }
  }

  if (!opened) return <audio ref={audioRef} src={src} loop preload="auto" id="song" />;

  return (
    <>
      <audio ref={audioRef} src={src} loop preload="auto" id="song" />
      <button
        type="button"
        onClick={toggle}
        className="fixed right-4 top-4 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-ivory/90 shadow-gold backdrop-blur transition hover:bg-gold/20"
        aria-label={playing ? 'Pause musik' : 'Play musik'}
      >
        {playing ? (
          <svg className="h-5 w-5 text-goldDark animate-softPulse" fill="currentColor" viewBox="0 0 24 24">
            <rect x="6" y="5" width="4" height="14" rx="1" />
            <rect x="14" y="5" width="4" height="14" rx="1" />
          </svg>
        ) : (
          <svg className="h-5 w-5 text-goldDark" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>
    </>
  );
}
