import { useState, useEffect } from 'react';
import Reveal from './Reveal.jsx';
import SectionHeader from './SectionHeader.jsx';
import { supabase } from '../lib/supabaseClient.js';

export default function RSVPForm({ guestName }) {
  const [name, setName] = useState(guestName || '');
  const [attendance, setAttendance] = useState('');
  const [guestCount, setGuestCount] = useState('1');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [wishes, setWishes] = useState([]);

  useEffect(() => {
    fetchWishes();
  }, []);

  async function fetchWishes() {
    const { data, error } = await supabase
      .from('wishes')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) {
      console.error('Error fetching wishes:', error);
    } else {
      setWishes(data || []);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!name || !message || !attendance) {
      alert("Harap lengkapi nama, kehadiran, dan ucapan.");
      return;
    }

    setLoading(true);

    const { data, error } = await supabase
      .from('wishes')
      .insert([
        {
          name,
          attendance,
          message,
        }
      ])
      .select();

    if (error) {
      console.error('Error inserting wish:', error);
      alert('Gagal mengirim pesan, silakan coba lagi.');
    } else {
      if (data && data.length > 0) {
        setWishes([data[0], ...wishes]);
      } else {
        fetchWishes();
      }
      setSubmitted(true);
      setName('');
      setMessage('');
      setTimeout(() => setSubmitted(false), 3000);
    }
    
    setLoading(false);
  }

  return (
    <section id="rsvp" className="section-padding bg-gradient-section">
      <div className="mx-auto max-w-md">
        <SectionHeader
          title="RSVP & Wishes"
          subtitle="Ucapan Selamat, Doa & Konfirmasi Kehadiran"
        />

        <Reveal delay={200}>
          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            {/* Name */}
            <div>
              <label htmlFor="rsvp-name" className="form-label">Nama Anda</label>
              <input
                id="rsvp-name"
                type="text"
                className="form-input"
                placeholder="Nama Lengkap"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            {/* Attendance */}
            <fieldset>
              <legend className="form-label mb-3">Konfirmasi Kehadiran</legend>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { value: 'present', label: 'Hadir', emoji: '✅' },
                  { value: 'notsure', label: 'Masih Ragu', emoji: '❓' },
                  { value: 'notpresent', label: 'Tidak Hadir', emoji: '❌' },
                ].map((opt) => (
                  <div key={opt.value} className="attendance-radio">
                    <input
                      type="radio"
                      name="attendance"
                      id={`att-${opt.value}`}
                      value={opt.value}
                      checked={attendance === opt.value}
                      onChange={(e) => setAttendance(e.target.value)}
                    />
                    <label htmlFor={`att-${opt.value}`} className="block text-center">
                      <span className="block text-lg">{opt.emoji}</span>
                      <span className="text-xs">{opt.label}</span>
                    </label>
                  </div>
                ))}
              </div>
            </fieldset>

            {/* Guest count (only if present) */}
            {attendance === 'present' && (
              <div className="animate-fadeUp">
                <label htmlFor="guest-count" className="form-label">Jumlah Tamu</label>
                <select
                  id="guest-count"
                  className="form-input"
                  value={guestCount}
                  onChange={(e) => setGuestCount(e.target.value)}
                >
                  <option value="1">1 orang</option>
                  <option value="2">2 orang</option>
                  <option value="3">3 orang</option>
                </select>
              </div>
            )}

            {/* Message */}
            <div>
              <label htmlFor="rsvp-message" className="form-label">Tulis Ucapan</label>
              <textarea
                id="rsvp-message"
                className="form-input min-h-[100px] resize-none"
                placeholder="Tulis Ucapan & Doa Terbaikmu"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={submitted || loading}
              className="btn-primary w-full disabled:opacity-50"
            >
              {loading ? 'Mengirim...' : submitted ? 'Terima kasih atas ucapan Anda!' : 'Kirim'}
            </button>
          </form>
        </Reveal>

        {/* Daftar Ucapan */}
        {wishes.length > 0 && (
          <Reveal delay={300}>
            <div className="mt-14">
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="h-px w-8 bg-gold/50"></div>
                <h3 className="font-serifDisplay text-2xl font-bold text-ink text-center">
                  Ucapan & Doa ({wishes.length})
                </h3>
                <div className="h-px w-8 bg-gold/50"></div>
              </div>
              
              <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2" style={{ scrollbarWidth: 'thin' }}>
                {wishes.map((wish) => (
                  <div key={wish.id} className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-soft border border-gold/20 animate-fadeUp">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-ink">{wish.name}</h4>
                        <p className="text-xs text-mutedInk mt-0.5">
                          {wish.created_at ? new Date(wish.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' }) : 'Baru saja'}
                        </p>
                      </div>
                      {wish.attendance === 'present' && (
                        <span className="bg-gold/10 text-goldDark text-[10px] px-2 py-1 rounded-full font-semibold border border-gold/20">
                          Hadir ✅
                        </span>
                      )}
                      {wish.attendance === 'notsure' && (
                        <span className="bg-gray-100 text-gray-600 text-[10px] px-2 py-1 rounded-full font-semibold border border-gray-200">
                          Ragu ❓
                        </span>
                      )}
                      {wish.attendance === 'notpresent' && (
                        <span className="bg-red-50 text-red-500 text-[10px] px-2 py-1 rounded-full font-semibold border border-red-100">
                          Tidak Hadir ❌
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-ink/80 mt-3 leading-relaxed whitespace-pre-wrap">
                      {wish.message}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
