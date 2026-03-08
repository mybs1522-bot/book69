
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowRight, Star, CheckCircle, CheckCircle2, ChevronDown,
  Sparkles, LogIn, BookOpen, ShieldCheck, Zap, Users, Info
} from 'lucide-react';
import {
  Logo, CountdownTimer, CURRICULUM_DATA, BOOK_THUMBNAILS,
  PROBLEM_POINTS, TRANSFORMATION_STORIES, APP_STYLES
} from '../AppHelpers';
import { LoginModal } from '../components/LoginModal';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  useEffect(() => {
    const handleScroll = () => setShowStickyBar(window.scrollY > 600);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openCheckout = () => navigate('/checkout');

  const FAQ_ITEMS = [
    {
      question: "Are these physical books or digital?",
      answer: "These are premium digital books (PDF format) that you can access instantly on any device. This allows us to include 800+ pages of high-resolution content and links to software at a fraction of the cost of printing and shipping."
    },
    {
      question: "Is this for beginners or professionals?",
      answer: "Both. We start with the fundamental rules of clearances and human dimensions, then move into advanced layout logic and building services that even seasoned professionals use as a daily reference."
    },
    {
      question: "How do I get the software mentioned?",
      answer: "Inside Book 6 and our student dashboard, we provide direct links to official student/trial versions of AutoCAD, SketchUp, and the rendering tools mentioned. You don't need to buy expensive licenses to start learning."
    },
    {
      question: "Is there a money-back guarantee?",
      answer: "Yes. If these books don't dramatically improve your design confidence within 7 days, just email us for a full, no-questions-asked refund."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans overflow-x-hidden antialiased selection:bg-orange-200">
      <style>{APP_STYLES}</style>

      {/* ═══ LIMITED TIME STRIP ═══ */}
      <section className="bg-slate-900 text-white py-2.5 px-5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4 text-xs font-bold tracking-widest uppercase">
          <div className="flex items-center gap-2 text-orange-400">
            <Zap size={14} fill="currentColor" />
            <span>Launch Offer: 50% OFF Ends Soon</span>
          </div>
          <div className="hidden md:block w-px h-3 bg-slate-700"></div>
          <div className="flex items-center gap-2">
            <span className="text-slate-400">Price returns to $99 in:</span>
            <CountdownTimer />
          </div>
        </div>
      </section>

      {/* ═══ STICKY HEADER ═══ */}
      <header className="sticky top-0 z-[60] bg-white/90 backdrop-blur-xl border-b border-slate-100 px-5 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Logo />
          <nav className="hidden md:flex items-center gap-8">
            <a href="#books" className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-orange-500 transition-colors">The Books</a>
            <a href="#curriculum" className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-orange-500 transition-colors">Curriculum</a>
            <a href="#faq" className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-orange-500 transition-colors">FAQ</a>
          </nav>
          <div className="flex items-center gap-4">
            <button onClick={() => setIsLoginOpen(true)} className="flex items-center gap-2 text-[10px] font-bold text-slate-500 hover:text-slate-900 transition-colors uppercase tracking-widest"><LogIn size={14} /> Login</button>
            <button onClick={openCheckout} className="text-white px-6 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg shadow-orange-500/20" style={{ background: 'linear-gradient(135deg,#f97316,#ea580c)' }}>Get the Books — $49</button>
          </div>
        </div>
      </header>

      <main>
        {/* ═══ HERO SECTION ═══ */}
        <section className="relative pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden bg-white">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl pointer-events-none">
            <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-orange-500/5 blur-[120px] rounded-full animate-aurora" />
          </div>

          <div className="max-w-7xl mx-auto px-5 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 border border-orange-100 rounded-full mb-6">
                  <Sparkles size={14} className="text-orange-500" />
                  <span className="text-[10px] font-bold text-orange-600 uppercase tracking-widest">The Ultimate Design Library</span>
                </div>
                <h1 className="text-4xl md:text-7xl font-display font-black leading-[1.05] mb-8 text-slate-900 tracking-tight">
                  Master Your <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Home Interiors</span> <br />
                  In 6 Easy Books.
                </h1>
                <p className="text-lg md:text-xl text-slate-600 font-medium mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  800+ pages of professional dimensions, layout logic, and design secrets. Stop guessing and start designing like a pro.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
                  <button onClick={openCheckout} className="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-2xl font-bold text-lg shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 group">
                    Get Instant Access Now <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center overflow-hidden">
                        <img src={`/portraits/reader${i}.jpg`} alt="User" onError={(e) => (e.currentTarget.src = 'https://i.pravatar.cc/100?img=' + i)} className="w-full h-full object-cover" />
                      </div>
                    ))}
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-orange-500 flex items-center justify-center text-[10px] font-bold text-white">+50k</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-8 max-w-md mx-auto lg:mx-0">
                  <div className="flex flex-col gap-1">
                    <span className="text-2xl font-black text-slate-900">800+</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Total Pages</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-2xl font-black text-slate-900">42,000+</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Copies Sold</span>
                  </div>
                </div>
              </div>

              {/* Book Grid Visual */}
              <div className="flex-1 w-full max-w-2xl" id="books">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 animate-fadeInUp">
                  {BOOK_THUMBNAILS.map((book, i) => (
                    <div key={i} className="group relative aspect-[3/4] rounded-xl md:rounded-2xl overflow-hidden shadow-lift hover:shadow-premium transition-all hover:-translate-y-2 cursor-pointer bg-slate-50 border border-slate-100">
                      <img src={book.image} alt={book.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                        <span className="text-white font-bold text-xs uppercase tracking-widest">{book.label}</span>
                        <span className="text-orange-400 text-[10px] font-bold uppercase tracking-widest mt-1">Peek Inside →</span>
                      </div>
                      <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-white/90 backdrop-blur shadow flex items-center justify-center">
                        <span className="text-[10px] font-black">{i + 1}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ PROBLEM POINTS ═══ */}
        <section className="py-24 bg-slate-50 border-y border-slate-100">
          <div className="max-w-5xl mx-auto px-5">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 tracking-tight mb-4">
                Why Most Homes Feel <span className="text-red-500">"Off"</span>
              </h2>
              <p className="text-slate-500 font-medium">It's not your taste. It's the missing data.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PROBLEM_POINTS.map((point, i) => (
                <div key={i} className="bg-white border border-slate-200 rounded-3xl p-8 flex items-start gap-6 hover:border-orange-200 transition-all shadow-soft group">
                  <span className="text-4xl group-hover:scale-110 transition-transform">{point.emoji}</span>
                  <p className="text-slate-700 font-medium leading-relaxed">{point.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ CURRICULUM GRID ═══ */}
        <section className="py-24 bg-white" id="curriculum">
          <div className="max-w-7xl mx-auto px-5">
            <div className="text-center mb-16">
              <span className="text-orange-500 text-xs font-black uppercase tracking-[0.2em]">What's Inside</span>
              <h2 className="text-3xl md:text-6xl font-display font-black text-slate-900 tracking-tight mt-4">
                6 Specialist Books. <br className="hidden md:block" />
                One <span className="text-orange-500">Professional System.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {CURRICULUM_DATA.map((book) => (
                <div key={book.id} className={`bg-white border-2 ${book.color} rounded-3xl overflow-hidden shadow-soft hover:shadow-premium transition-all`}>
                  <div className="aspect-video relative overflow-hidden bg-slate-50">
                    <img src={book.imageUrl} alt={book.title} className="w-full h-full object-cover" />
                    <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full shadow-sm">
                      <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">{book.bookNum}</span>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-900">{book.icon}</div>
                      <h3 className="font-display font-black text-xl text-slate-900">{book.title}</h3>
                    </div>
                    <div className="space-y-6">
                      {book.sections.map((section, idx) => (
                        <div key={idx}>
                          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">{section.name}</p>
                          <ul className="grid grid-cols-1 gap-2">
                            {section.items.map((item, ii) => (
                              <li key={ii} className="flex items-start gap-2 text-xs font-medium text-slate-600">
                                <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ TRANSFORMATIONS ═══ */}
        <section className="py-24 bg-slate-900 text-white overflow-hidden">
          <div className="max-w-5xl mx-auto px-5 mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight mb-4">
              Real Results From <span className="text-orange-400">Real Readers</span>
            </h2>
            <p className="text-slate-400 font-medium italic">"I finally understand why my living room felt cramped." — Emily R.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-5">
            {TRANSFORMATION_STORIES.map((story, i) => (
              <div key={i} className="bg-slate-800/50 border border-slate-700/50 rounded-3xl p-8 backdrop-blur-sm">
                <span className="text-4xl mb-6 block">{story.emoji}</span>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed italic">"Before: {story.before}"</p>
                <p className="text-slate-100 font-bold mb-6 italic">"After: {story.after}"</p>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center font-black text-white">{story.name[0]}</div>
                  <div>
                    <p className="text-sm font-bold text-white">{story.name}</p>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{story.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══ BOTTOM TRUST BAR ═══ */}
        <section className="py-12 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-5 flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-2 font-black italic text-xl">Architectural Digest</div>
            <div className="flex items-center gap-2 font-black italic text-xl">Dwell</div>
            <div className="flex items-center gap-2 font-black italic text-xl">Elle Decor</div>
            <div className="flex items-center gap-2 font-black italic text-xl">Vogue Living</div>
          </div>
        </section>

        {/* ═══ FAQ ═══ */}
        <section className="py-24 bg-slate-50" id="faq">
          <div className="max-w-3xl mx-auto px-5">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 tracking-tight">Got Questions?</h2>
            </div>
            <div className="space-y-4">
              {FAQ_ITEMS.map((faq, i) => (
                <details key={i} className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-soft" open={openFaqIndex === i}>
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none" onClick={(e) => { e.preventDefault(); setOpenFaqIndex(openFaqIndex === i ? null : i); }}>
                    <span className="text-sm md:text-base font-bold text-slate-900 pr-6">{faq.question}</span>
                    <ChevronDown size={18} className={`text-slate-400 transition-transform duration-300 ${openFaqIndex === i ? 'rotate-180' : ''}`} />
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-slate-600 text-sm leading-relaxed border-t border-slate-50 pt-4">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ FINAL CTA SECTION ═══ */}
        <section className="py-24 md:py-32 bg-white text-center px-5 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-20">
            <div className="absolute inset-0 bg-grid opacity-10"></div>
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-display font-black text-slate-900 tracking-tight mb-8">
              Start Designing <br />
              Like a <span className="text-orange-500">Pro</span> Today.
            </h2>
            <p className="text-lg md:text-xl text-slate-600 font-medium mb-12 leading-relaxed">
              One-time payment of $49 for all 6 books. <br className="hidden md:block" /> Instant digital delivery. Lifetime updates.
            </p>
            <button onClick={openCheckout} className="w-full sm:w-auto px-12 py-6 bg-slate-900 text-white rounded-2xl font-black text-xl shadow-2xl hover:bg-slate-800 hover:scale-[1.03] active:scale-95 transition-all flex items-center justify-center gap-4 group mx-auto">
              Get All 6 Books Now — $49 <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
              <div className="flex items-center gap-1.5"><ShieldCheck size={14} className="text-emerald-500" /> Secure Payment</div>
              <div className="flex items-center gap-1.5"><Zap size={14} className="text-orange-400" /> Instant Access</div>
              <div className="flex items-center gap-1.5"><Info size={14} className="text-blue-500" /> Refund Guarantee</div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-50 py-12 px-6 border-t border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <Logo />
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">
            © 2026 Interior Design System · All Rights Reserved
          </p>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-slate-400">
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Terms</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Support</a>
          </div>
        </div>
      </footer>

      {/* STICKY BOTTOM BAR FOR MOBILE */}
      <div className={`fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-slate-100 p-4 transition-transform duration-500 ${showStickyBar ? 'translate-y-0' : 'translate-y-full'}`}>
        <button onClick={openCheckout} className="w-full h-14 bg-orange-500 text-white rounded-xl font-black uppercase tracking-widest flex items-center justify-between px-6 shadow-glow">
          <span>Get the Books</span>
          <span className="text-lg">$49</span>
        </button>
      </div>

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      <SocialProofToast />
    </div>
  );
};

export default LandingPage;
