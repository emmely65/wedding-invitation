import Reveal from './Reveal.jsx';

export default function BismillahSection({ data }) {
  const { bismillah } = data;
  return (
    <section className="section-padding islamic-pattern-bg bg-ivory">
      <div className="mx-auto max-w-lg text-center">
        <Reveal>
          <img
            src={data.photos.bouquet}
            alt="Ornamen bunga"
            className="mx-auto mb-6 w-40 sm:w-48 animate-floatSlow"
            loading="lazy"
          />
        </Reveal>

        <Reveal delay={100}>
          <p className="arabic-text text-3xl leading-relaxed text-ink sm:text-4xl">
            {bismillah.arabic}
          </p>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-5 font-serifDisplay text-lg font-semibold italic text-goldDark">
            {bismillah.salam}
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mx-auto my-6 h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent" />
          <p className="font-serifDisplay text-base leading-relaxed text-ink/80 italic">
            "{bismillah.quoteText}"
          </p>
          <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-goldDark">
            ({bismillah.quoteSource})
          </p>
        </Reveal>

        <Reveal delay={400}>
          <div className="mx-auto my-6 h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent" />
          <p className="text-sm leading-relaxed text-ink/70">
            {bismillah.invitation}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
