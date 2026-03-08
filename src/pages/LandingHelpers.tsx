
import React, { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck, Zap, CheckCircle, Users, X, BookOpen } from 'lucide-react';

export const getDriveUrl = (id: string) => `https://drive.google.com/thumbnail?id=${id}&sz=w1600`;

export const RAW_JOINERS = [
  { name: "Liam O.", city: "London", time: "2 mins ago" },
  { name: "Emma W.", city: "New York", time: "5 mins ago" },
  { name: "Priya S.", city: "Mumbai", time: "8 mins ago" },
  { name: "Carlos M.", city: "Madrid", time: "12 mins ago" },
  { name: "Yuki T.", city: "Tokyo", time: "15 mins ago" },
  { name: "Sarah J.", city: "Sydney", time: "18 mins ago" },
  { name: "Elena V.", city: "Berlin", time: "22 mins ago" },
  { name: "Fatima A.", city: "Dubai", time: "25 mins ago" },
  { name: "Omar B.", city: "Riyadh", time: "30 mins ago" },
  { name: "Lin W.", city: "Singapore", time: "33 mins ago" },
];

export const Logo = () => (
  <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center shadow-lg shadow-orange-500/20">
      <BookOpen size={20} className="text-white" />
    </div>
    <div>
      <span className="font-display font-bold text-base tracking-tight leading-none text-slate-900 whitespace-nowrap block">Interior Design System</span>
      <span className="text-[9px] font-bold uppercase tracking-widest text-slate-500 whitespace-nowrap">6 Books · 800+ Pages</span>
    </div>
  </div>
);

/* ─── SOCIAL PROOF TOAST ─── */
export const SocialProofToast: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const show = () => { setVisible(true); setTimeout(() => { setVisible(false); setTimeout(() => setIdx(p => (p + 1) % RAW_JOINERS.length), 500); }, 4000); };
    const t1 = setTimeout(show, 6000);
    const t2 = setInterval(show, 15000);
    return () => { clearTimeout(t1); clearInterval(t2); };
  }, []);
  const j = RAW_JOINERS[idx];
  return (
    <div className={`fixed bottom-20 left-4 z-[70] transition-all duration-500 ${visible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
      <div className="bg-white/95 backdrop-blur-xl border border-slate-200 rounded-2xl px-5 py-3 shadow-2xl flex items-center gap-3 max-w-xs">
        <div className="w-8 h-8 bg-emerald-50 rounded-full flex items-center justify-center shrink-0"><CheckCircle size={16} className="text-emerald-600" /></div>
        <div>
          <p className="text-sm font-bold text-slate-900">{j.name} from {j.city}</p>
          <p className="text-xs text-slate-500">just enrolled • {j.time}</p>
        </div>
      </div>
    </div>
  );
};
