import Reveal from './Reveal.jsx';
import SectionHeader from './SectionHeader.jsx';

export default function LoveStory({ stories, bouquetSrc }) {
  return (
    <section className="section-padding bg-gradient-section">
      <div className="mx-auto max-w-lg">
        <Reveal>
          <img src={bouquetSrc} alt="" className="mx-auto mb-4 w-32" loading="lazy" />
        </Reveal>
        <SectionHeader title="Love Story" />

        {/* Timeline */}
        <div className="relative mt-10">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gold/30 sm:left-1/2" />

          {stories.map((story, i) => (
            <div key={i} className="relative mb-10 last:mb-0">
              {/* Dot */}
              <div className="absolute left-6 -translate-x-1/2 sm:left-1/2">
                <div className="h-3 w-3 rounded-full border-2 border-gold bg-ivory shadow-sm" />
              </div>

              <div className={`pl-12 sm:w-1/2 ${i % 2 === 0 ? 'sm:pl-0 sm:pr-10 sm:text-right' : 'sm:pl-10 sm:ml-auto'}`}>
                <Reveal variant={i % 2 === 0 ? 'right' : 'left'} delay={i * 150}>
                  <div className="rounded-2xl border border-gold/15 bg-white p-5 shadow-card">
                    <h4 className="font-elsie text-lg text-ink">{story.title}</h4>
                    <span className="mt-1 inline-block rounded-full bg-gold/10 px-3 py-0.5 text-xs font-semibold text-goldDark">
                      {story.date}
                    </span>
                    <p className="mt-3 text-sm leading-relaxed text-mutedInk">{story.text}</p>
                  </div>
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
