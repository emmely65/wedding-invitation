import Reveal from './Reveal.jsx';
import SectionHeader from './SectionHeader.jsx';

export default function DressCode({ dressCode }) {
  return (
    <section className="section-padding bg-ivory">
      <div className="mx-auto max-w-md text-center">
        <SectionHeader title="Dress Code" />
        <Reveal delay={100}>
          <p className="mt-4 text-sm leading-relaxed text-mutedInk">
            {dressCode.message}
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {dressCode.colors.map((color) => (
              <div key={color.hex} className="flex flex-col items-center gap-2">
                <div
                  className="color-swatch"
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
                <span className="text-[10px] font-medium uppercase tracking-wider text-mutedInk">
                  {color.name}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
