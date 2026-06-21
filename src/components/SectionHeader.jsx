import Reveal from './Reveal.jsx';

export default function SectionHeader({ title, subtitle, className = '' }) {
  return (
    <Reveal className={`text-center ${className}`}>
      <div className="mx-auto mb-2 h-px w-12 bg-gradient-to-r from-transparent via-gold to-transparent" />
      <h2 className="font-elsie text-2xl text-ink sm:text-3xl">{title}</h2>
      {subtitle && (
        <p className="mt-2 text-sm text-mutedInk">{subtitle}</p>
      )}
      <div className="mx-auto mt-3 h-px w-12 bg-gradient-to-r from-transparent via-gold to-transparent" />
    </Reveal>
  );
}
