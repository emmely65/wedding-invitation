import { useState, useCallback } from 'react';
import Reveal from './Reveal.jsx';
import SectionHeader from './SectionHeader.jsx';

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }, [text]);

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="btn-gold-outline mt-3 text-[11px]"
    >
      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="9" y="9" width="13" height="13" rx="2" />
        <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
      </svg>
      {copied ? 'Copied!' : 'Copy'}
    </button>
  );
}

function BankCard({ bank }) {
  return (
    <div className="rounded-2xl border border-gold/20 bg-white p-5 text-center shadow-card">
      <p className="text-xs font-bold uppercase tracking-widest text-goldDark">{bank.bankName}</p>
      <p className="mt-2 font-serifDisplay text-lg font-semibold text-ink">{bank.accountName}</p>
      <p className="mt-1 font-mono text-sm tracking-wider text-mutedInk">{bank.accountNumber}</p>
      <CopyButton text={bank.accountNumber} />
    </div>
  );
}

export default function LoveGift({ gift }) {
  const [showAmplop, setShowAmplop] = useState(false);

  return (
    <section className="section-padding bg-gradient-section">
      <div className="mx-auto max-w-lg text-center">
        <SectionHeader title="Amplop Digital" />
        <Reveal delay={100}>
          <p className="mt-4 text-sm leading-relaxed text-mutedInk">{gift.message}</p>
        </Reveal>

        {/* Toggle button */}
        <Reveal delay={200}>
          <button
            type="button"
            onClick={() => setShowAmplop(!showAmplop)}
            className="btn-primary mt-6"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <rect x="2" y="6" width="20" height="14" rx="2" />
              <path d="M2 10h20M6 14h2M12 14h6" />
            </svg>
            {showAmplop ? 'Sembunyikan' : 'Tampilkan Amplop'}
          </button>
        </Reveal>

        {/* Bank cards (toggled) */}
        {showAmplop && (
          <div className="mt-6 grid gap-4 sm:grid-cols-2 animate-zoomIn">
            {gift.banks.map((bank, i) => (
              <BankCard key={i} bank={bank} />
            ))}
          </div>
        )}

        {/* Gift Registry */}
        <Reveal delay={300} className="mt-10">
          <div className="rounded-2xl border border-gold/20 bg-white p-6 shadow-card">
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6">
              <div className="text-left sm:flex-1">
                <h4 className="font-elsie text-lg text-ink">Gift Registry</h4>
                <p className="mt-1 text-sm text-mutedInk">{gift.giftRegistry.message}</p>
              </div>
              <div className="mt-4 sm:mt-0">
                <a href={gift.giftRegistry.url} target="_blank" rel="noreferrer" className="btn-gold-outline">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 7h-1.5a3.5 3.5 0 00-5-4.8A3.5 3.5 0 007.5 7H4a2 2 0 00-2 2v2h20V9a2 2 0 00-2-2zM12 7a1.5 1.5 0 01-1.5-1.5A1.5 1.5 0 0112 4a1.5 1.5 0 011.5 1.5A1.5 1.5 0 0112 7zM2 13v7a2 2 0 002 2h16a2 2 0 002-2v-7H2z"/>
                  </svg>
                  View List
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Kirim Kado */}
        <Reveal delay={400} className="mt-6">
          <div className="rounded-2xl border border-gold/20 bg-white p-6 shadow-card">
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6">
              <div className="text-left sm:flex-1">
                <h4 className="font-elsie text-lg text-ink">Kirim Kado</h4>
                <p className="mt-1 whitespace-pre-line text-sm text-mutedInk">
                  an. {gift.kirimKado.receiver}{'\n'}
                  {gift.kirimKado.address}
                </p>
              </div>
              <div className="mt-4 sm:mt-0">
                <CopyButton text={`an. ${gift.kirimKado.receiver}\n${gift.kirimKado.address}`} />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
