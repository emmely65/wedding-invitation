import Reveal from './Reveal.jsx';

export default function ClosingSection({ data }) {
  return (
    <section className="section-padding islamic-pattern-bg bg-ivory">
      <div className="mx-auto max-w-md text-center">
        <Reveal>
          <img
            src={data.photos.bouquet}
            alt=""
            className="mx-auto mb-6 w-32 animate-floatSlow"
            loading="lazy"
          />
        </Reveal>

        <Reveal delay={100}>
          <p className="font-serifDisplay text-base leading-relaxed text-ink/80 italic">
            {data.closing.text}
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="mx-auto my-6 h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent" />
          <p className="text-sm text-mutedInk">{data.closing.signature}</p>
          <p className="mt-3 font-script text-5xl font-bold text-ink">
            {data.coupleName}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
