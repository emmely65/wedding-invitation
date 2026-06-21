import Reveal from './Reveal.jsx';
import SectionHeader from './SectionHeader.jsx';

function EventCard({ event, bouquetSrc }) {
  return (
    <Reveal className="mb-8 last:mb-0">
      <div className="overflow-hidden rounded-3xl border border-gold/20 bg-white shadow-soft">
        <div className="px-6 py-8 text-center sm:px-8">
          {/* Bouquet */}
          <img src={bouquetSrc} alt="" className="mx-auto mb-4 w-28" loading="lazy" />

          <h3 className="font-elsie text-2xl text-ink">{event.title}</h3>

          <div className="mx-auto my-4 h-px w-12 bg-gradient-to-r from-transparent via-gold to-transparent" />

          <p className="font-serifDisplay text-lg font-semibold text-ink">{event.day}</p>
          <p className="mt-1 font-serifDisplay text-xl font-bold text-goldDark">{event.dayDate}</p>
          <p className="mt-1 text-sm font-medium text-ink/70">{event.time}</p>

          <div className="mx-auto my-4 h-px w-8 bg-gold/30" />

          {/* Location icon */}
          <div className="flex justify-center">
            <svg className="h-5 w-5 text-goldDark" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/>
            </svg>
          </div>
          <p className="mt-2 font-serifDisplay text-base font-semibold text-ink">{event.place}</p>
          <p className="mt-1 whitespace-pre-line text-sm text-mutedInk">{event.address}</p>

          <a
            href={event.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-gold-outline mt-5 inline-flex"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/>
            </svg>
            Google Maps
          </a>
        </div>
      </div>
    </Reveal>
  );
}

export default function EventDetails({ events, bouquetSrc }) {
  return (
    <section id="events" className="section-padding islamic-pattern-bg bg-ivory">
      <div className="mx-auto max-w-lg">
        {events.map((event) => (
          <EventCard key={event.id} event={event} bouquetSrc={bouquetSrc} />
        ))}
      </div>
    </section>
  );
}
