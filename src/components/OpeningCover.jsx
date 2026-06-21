export default function OpeningCover({ data, guestName, onOpen }) {
  return (
    <section className="fixed inset-0 z-[90] flex items-center justify-center overflow-hidden bg-ink/95">
      {/* Background image */}
      <img
        src={data.photos.cover}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-25 blur-[2px]"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/40 to-ink/70" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[420px] px-6 py-8 text-center animate-fadeInDown">
        {/* Ornamental line */}
        <div className="mx-auto mb-6 h-px w-20 bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

        <p className="mb-3 font-pinyon text-xl text-gold/90">
          {data.coverTitle}
        </p>

        <h1 className="font-script text-7xl font-bold leading-[0.9] text-ivory sm:text-8xl">
          {data.groomShort}
        </h1>
        <p className="my-1 font-script text-5xl text-gold">&amp;</p>
        <h1 className="font-script text-7xl font-bold leading-[0.9] text-ivory sm:text-8xl">
          {data.brideShort}
        </h1>

        <div className="mx-auto my-6 h-px w-20 bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

        {/* Guest name */}
        <div className="mx-auto mb-6 border-t border-b border-gold/25 py-4">
          <p className="text-xs tracking-wider text-ivory/60">
            Kepada Yth. Bapak/Ibu/Saudara/i
          </p>
          <p className="mt-2 font-serifDisplay text-xl font-semibold text-gold animate-fadeInDown" style={{ animationDelay: '400ms' }}>
            {guestName || 'Nama Tamu'}
          </p>
          <p className="mt-2 text-[10px] italic text-ivory/50 animate-fadeInDown" style={{ animationDelay: '500ms' }}>
            *) Mohon maaf apabila ada kesalahan dalam penulisan nama/gelar
          </p>
        </div>

        {/* Open button */}
        <button
          type="button"
          onClick={onOpen}
          className="group mt-4 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-gold bg-gold/10 px-6 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-gold shadow-gold transition hover:-translate-y-0.5 hover:bg-gold/20 focus:outline-none focus:ring-4 focus:ring-gold/30 animate-zoomIn"
          style={{ animationDelay: '600ms' }}
          aria-label="Buka undangan pernikahan"
        >
          {/* Leaf icon */}
          <svg className="h-4 w-4 transition group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.75 2.99a1 1 0 0 0-1.09.16C14.14 5.52 12 9.14 12 13.5V14a1 1 0 0 1-2 0v-.5c0-1.2-.15-2.37-.44-3.47a1 1 0 0 0-1.9.34c.2.82.31 1.7.34 2.63-1.82-2.5-4.53-4.18-4.66-4.25a1 1 0 0 0-1.09 1.67c.05.03 4.75 3.16 4.75 7.58a5 5 0 0 0 10 0c0-5.67 2.45-10.77 2.5-10.87a1 1 0 0 0-.75-1.64z"/>
          </svg>
          Buka Undangan
        </button>
      </div>
    </section>
  );
}
