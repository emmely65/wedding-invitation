import { useState } from 'react';
import Reveal from './Reveal.jsx';

// Demo data — in production would come from an API
const DEMO_WISHES = [
  { id: 1, name: 'Ahmad Fauzi', message: 'Barakallahu lakuma, semoga menjadi keluarga sakinah mawaddah wa rahmah. Aamiin.', attendance: 'present', time: '2 jam yang lalu' },
  { id: 2, name: 'Siti Aisyah', message: 'Selamat menempuh hidup baru! Semoga selalu dilimpahkan kebahagiaan.', attendance: 'notsure', time: '5 jam yang lalu' },
];

const BADGE = {
  present: { text: 'Hadir', className: 'bg-emerald-100 text-emerald-700' },
  notpresent: { text: 'Tidak Hadir', className: 'bg-red-100 text-red-700' },
  notsure: { text: 'Masih Ragu', className: 'bg-amber-100 text-amber-700' },
};

export default function Guestbook() {
  const [wishes] = useState(DEMO_WISHES);

  return (
    <section id="guestbook" className="section-padding bg-ivory">
      <div className="mx-auto max-w-md">
        <Reveal>
          <p className="mb-4 text-center text-sm text-mutedInk">
            <span className="font-semibold text-goldDark">{wishes.length}</span> Ucapan
          </p>
        </Reveal>

        <div className="space-y-4">
          {wishes.map((wish) => {
            const badge = BADGE[wish.attendance] || BADGE.notsure;
            return (
              <Reveal key={wish.id} delay={wish.id * 100}>
                <div className="rounded-2xl border border-gold/15 bg-white p-5 shadow-card">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      {/* Avatar initial */}
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/15 font-serifDisplay text-sm font-bold text-goldDark">
                        {wish.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-ink">{wish.name}</p>
                        <p className="text-[11px] text-mutedInk">{wish.time}</p>
                      </div>
                    </div>
                    <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-[10px] font-semibold ${badge.className}`}>
                      {badge.text}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-ink/80">{wish.message}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
