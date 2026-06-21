import Reveal from './Reveal.jsx';

export default function DoaPengantin({ doa }) {
  return (
    <section className="section-padding bg-gradient-section">
      <div className="mx-auto max-w-lg text-center">
        <Reveal>
          <h2 className="font-elsie text-2xl text-ink sm:text-3xl">Doa Untuk Pengantin</h2>
          <div className="mx-auto mt-3 h-px w-12 bg-gradient-to-r from-transparent via-gold to-transparent" />
        </Reveal>

        <Reveal delay={200}>
          <p className="arabic-text mt-8 text-2xl leading-[2.2] text-ink sm:text-3xl">
            {doa.arabic}
          </p>
        </Reveal>

        <Reveal delay={300}>
          <p className="mt-6 font-serifDisplay text-base italic text-goldDark">
            {doa.transliteration}
          </p>
        </Reveal>

        <Reveal delay={400}>
          <div className="mx-auto my-5 h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent" />
          <p className="text-sm leading-relaxed text-ink/70">
            {doa.translation}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
