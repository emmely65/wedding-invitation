import Reveal from './Reveal.jsx';

function ProfileCard({ person, photo, bouquetSrc }) {
  return (
    <div className="relative text-center pb-8 pt-4">
      {/* Photo with arch frame */}
      <div className="relative mx-auto w-64 h-[22rem]">
        {/* Gold Border Oval */}
        <div className="absolute inset-0 rounded-[100px] border-[3px] border-gold/40 p-1">
          <img
            src={photo}
            alt={person.name}
            className="h-full w-full rounded-[96px] object-cover object-top"
            loading="lazy"
          />
        </div>
        
        {/* Decorative Flowers Left */}
        <img
          src={bouquetSrc}
          alt=""
          className="absolute -left-12 top-1/2 w-32 -translate-y-1/2 -scale-x-100 drop-shadow-md z-10 pointer-events-none"
          loading="lazy"
        />
        {/* Decorative Flowers Right */}
        <img
          src={bouquetSrc}
          alt=""
          className="absolute -right-8 bottom-0 w-36 translate-y-1/4 drop-shadow-md z-10 pointer-events-none"
          loading="lazy"
        />
      </div>

      {/* Info */}
      <div className="relative mt-12 px-2 z-20">
        <Reveal delay={100}>
          <h3 className="font-script text-6xl font-bold text-ink drop-shadow-sm">
            {person.name}
          </h3>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-4 font-serifDisplay text-xl font-medium text-ink">
            {person.fullName}
          </p>
          <p className="mt-1 text-sm font-medium text-ink/80 max-w-sm mx-auto leading-relaxed">
            {person.parents}
          </p>
        </Reveal>
        
        {person.instagram && (
          <Reveal delay={300}>
            <a
              href={`https://instagram.com/${person.instagram}`}
              target="_blank"
              rel="noreferrer"
              className="mx-auto mt-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#c0a062] text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#a6864d]"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 011.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772 4.915 4.915 0 01-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm5.25-3.5a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z"/>
              </svg>
            </a>
          </Reveal>
        )}
      </div>
    </div>
  );
}

export default function CoupleProfile({ data }) {
  return (
    <section id="couple" className="section-padding bg-gradient-section">
      <div className="mx-auto max-w-4xl">
        <div className="grid gap-8 sm:grid-cols-2">
          <Reveal variant="right">
            <ProfileCard
              person={data.couple.groom}
              photo={data.photos.groom}
              bouquetSrc={data.photos.bouquet}
            />
          </Reveal>
          <Reveal variant="left" delay={200}>
            <ProfileCard
              person={data.couple.bride}
              photo={data.photos.bride}
              bouquetSrc={data.photos.bouquet}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
