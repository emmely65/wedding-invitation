import { useEffect, useMemo, useState, useRef } from 'react';

function getCountdown(target) {
  const distance = new Date(target).getTime() - Date.now();
  const safe = Math.max(distance, 0);
  return {
    days: Math.floor(safe / 86400000),
    hours: Math.floor((safe / 3600000) % 24),
    minutes: Math.floor((safe / 60000) % 60),
    seconds: Math.floor((safe / 1000) % 60),
  };
}

function CountdownCard({ value, label }) {
  return (
    <div className="rounded-2xl border border-gold/30 bg-ivory/80 px-3 py-3 text-center shadow-card backdrop-blur sm:px-5">
      <div className="font-serifDisplay text-2xl font-bold tabular-nums text-ink sm:text-3xl">
        {String(value).padStart(2, '0')}
      </div>
      <div className="mt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-mutedInk">
        {label}
      </div>
    </div>
  );
}

export default function HeroSection({ data, opened }) {
  const videoRef = useRef(null);
  const [time, setTime] = useState(() => getCountdown(data.countdownTarget));
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = window.setInterval(() => setTime(getCountdown(data.countdownTarget)), 1000);
    return () => window.clearInterval(timer);
  }, [data.countdownTarget]);

  // Trigger content reveal after opened
  useEffect(() => {
    if (opened) {
      const t = setTimeout(() => setShowContent(true), 8700);
      return () => clearTimeout(t);
    } else {
      setShowContent(false);
    }
  }, [opened]);

  const calendarUrl = useMemo(() => {
    const event = data.events[0];
    const params = new URLSearchParams({
      action: 'TEMPLATE',
      text: `The Wedding of ${data.coupleName}`,
      dates: `${event.calendar.start}/${event.calendar.end}`,
      details: event.calendar.details,
      location: event.calendar.location,
    });
    return `https://www.google.com/calendar/render?${params.toString()}`;
  }, [data]);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-ink">
      {/* Video Background */}
      <div className="video-bg-container">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          autoPlay
          muted
          playsInline
          preload="auto"
        >
          <source src={data.heroVideoUrl} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/20 via-transparent to-ink/40" />
      </div>

      {/* Content over video */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-5 py-16 text-center">
        {/* The Wedding of */}
        <p
          className={`font-pinyon text-xl text-ivory/90 transition-all duration-700 ${showContent ? 'animate-zoomIn stagger-4' : 'opacity-0'
            }`}
        >
          The Wedding of
        </p>

        {/* Groom name */}
        <h2
          className={`mt-3 font-script text-7xl font-bold leading-[0.85] text-gold drop-shadow-lg sm:text-8xl transition-all duration-700 ${showContent ? 'animate-zoomIn stagger-2' : 'opacity-0'
            }`}
        >
          {data.groomShort}
        </h2>

        {/* & */}
        <p
          className={`my-1 font-script text-5xl text-gold transition-all duration-700 ${showContent ? 'animate-zoomIn stagger-1' : 'opacity-0'
            }`}
        >
          &amp;
        </p>

        {/* Bride name */}
        <h2
          className={`font-script text-7xl font-bold leading-[0.85] text-gold drop-shadow-lg sm:text-8xl transition-all duration-700 ${showContent ? 'animate-zoomIn stagger-2' : 'opacity-0'
            }`}
        >
          {data.brideShort}
        </h2>

        {/* Hashtag */}
        <p
          className={`mt-5 text-xs font-medium uppercase tracking-[0.3em] text-gold/90 transition-all duration-700 ${showContent ? 'animate-zoomIn stagger-3' : 'opacity-0'
            }`}
        >
          {data.hashtag}
        </p>

        {/* Date */}
        <p
          className={`mt-3 font-serifDisplay text-lg font-semibold text-ivory/90 transition-all duration-700 ${showContent ? 'animate-zoomIn stagger-4' : 'opacity-0'
            }`}
        >
          {data.coverDate}
        </p>

        {/* Scroll indicator */}
        <div
          className={`mt-10 transition-all duration-700 ${showContent ? 'animate-zoomIn stagger-5' : 'opacity-0'
            }`}
        >
          <div className="scroll-indicator flex flex-col items-center text-ivory/60">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <rect x="9" y="2" width="6" height="12" rx="3" />
              <circle cx="12" cy="6" r="1" fill="currentColor" />
              <path d="M12 18v2m-4-3l4 4 4-4" />
            </svg>
          </div>
        </div>
      </div>

      {/* Countdown below video */}
      <div className="relative z-10 bg-gradient-to-b from-ink/80 to-ivory px-5 pb-14 pt-10">
        <div className="mx-auto max-w-md">
          <div className="grid grid-cols-4 gap-2.5 sm:gap-4" aria-label="Countdown menuju acara">
            <CountdownCard value={time.days} label="Hari" />
            <CountdownCard value={time.hours} label="Jam" />
            <CountdownCard value={time.minutes} label="Menit" />
            <CountdownCard value={time.seconds} label="Detik" />
          </div>
          <div className="mt-6 text-center">
            <a
              href={calendarUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M5 3v2M19 3v2M3 7h18M5 21h14a2 2 0 002-2V7H3v12a2 2 0 002 2z" />
              </svg>
              Add to Calendar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
