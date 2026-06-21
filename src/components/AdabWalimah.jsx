import Reveal from './Reveal.jsx';
import SectionHeader from './SectionHeader.jsx';

export default function AdabWalimah({ data }) {
  return (
    <section className="section-padding bg-ivory">
      <div className="mx-auto max-w-md text-center">
        <SectionHeader title="Adab Walimah" />
        <Reveal delay={100}>
          <p className="mt-4 text-sm leading-relaxed text-mutedInk">
            {data.adabWalimah.message}
          </p>
        </Reveal>
        <Reveal delay={200}>
          <img
            src={data.photos.adabWalimah}
            alt="Infografis Adab Walimah"
            className="mx-auto mt-6 max-w-[320px] rounded-2xl shadow-card"
            loading="lazy"
          />
        </Reveal>
      </div>
    </section>
  );
}
