import Reveal from './Reveal.jsx';

export default function TurutMengundang({ names }) {
  return (
    <section className="section-padding bg-ivory">
      <div className="mx-auto max-w-md text-center">
        <Reveal>
          <h2 className="font-elsie text-2xl text-ink sm:text-3xl">Turut Mengundang</h2>
          <div className="mx-auto mt-3 h-px w-12 bg-gradient-to-r from-transparent via-gold to-transparent" />
        </Reveal>

        <Reveal delay={200}>
          <ul className="mt-6 space-y-1.5">
            {names.map((name, i) => (
              <li key={i} className="font-serifDisplay text-sm text-ink/80">
                — {name}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
