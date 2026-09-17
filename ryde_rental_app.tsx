import React, { useState, useEffect } from 'react';
import { 
  Instagram, 
  MapPin, 
  MessageCircle, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ArrowDown, 
  Facebook,
  Share,
  Copy,
  Check,
  Twitter,
  Clock,
  Shield,
  Calendar,
  Star,
  Quote,
  Info,
  ChevronDown,
  ChevronUp,
  Wrench,
  Map,
  Key
} from 'lucide-react';

const defaultFallbackAvatar = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' fill='%230E516D'><circle cx='50' cy='50' r='50' fill='%230E516D'/><path d='M30 65 C30 55 38 48 50 48 C62 48 70 55 70 65' stroke='%23FF7B00' stroke-width='4' fill='none'/><circle cx='50' cy='35' r='14' fill='%23FF7B00'/><text x='50' y='85' font-family='sans-serif' font-weight='bold' font-size='12' fill='%23ffffff' text-anchor='middle'>RYDE</text></svg>";

const pageData = {
  name: "Ryde",
  phone: "6289529605601",
  address: "Palangka Raya, Kalimantan Tengah",
  title: "Sewa Motor Praktis, Aman & Terpercaya",
  description: "Jelajahi kota dengan bebas dan tanpa hambatan. Kami menyediakan unit motor terbaru, terawat, dan siap menemani perjalanan Anda dengan tarif terjangkau.",
  profileImg: "logo-ryde.png", 
  heroImg: "background-ryde.jpg",
  links: {
    instagram: "https://www.instagram.com/solusilokal.id",
    maps: "https://www.google.com/maps/place/Palangka+Raya", 
    facebook: "https://facebook.com/", 
    tiktok: "https://www.tiktok.com/@solusilokal.id" 
  },
  highlights: [
    { text: "Helm SNI", icon: "Shield" },
    { text: "Jas Hujan", icon: "Wrench" },
    { text: "24/7 Support", icon: "Clock" }
  ],
  about: "Ryde adalah penyedia layanan rental motor profesional yang berdedikasi untuk memberikan solusi mobilitas terbaik. Kami memahami bahwa setiap perjalanan sangat berharga, oleh karena itu kami selalu memastikan setiap armada kami dalam kondisi prima, bersih, dan aman digunakan.",
  history: "Didirikan pada tahun 2020 berawal dari garasi kecil, Ryde berawal dari passion kami terhadap touring dan modifikasi motor. Melihat tingginya kebutuhan akan transportasi yang fleksibel dan terjangkau di kota ini, kami mulai menyewakan 3 unit motor pertama kami. Kini, Ryde telah berkembang memiliki puluhan armada yang melayani ribuan pelanggan lokal maupun turis.",
  fleet: [
    { 
      name: "Honda Vario 160", 
      price: "120.000", 
      type: "Matic", 
      year: "2023",
      img: "motor-vario-160.webp"
    },
    { 
      name: "Yamaha NMAX", 
      price: "150.000", 
      type: "Matic Premium", 
      year: "2022",
      img: "motor-nmax.webp"
    },
    { 
      name: "Honda Beat Street", 
      price: "80.000", 
      type: "Matic", 
      year: "2023",
      img: "motor-beat-street.webp"
    },
    { 
      name: "Yamaha Aerox", 
      price: "140.000", 
      type: "Matic Sport", 
      year: "2023",
      img: "motor-aerox.webp"
    }
  ],
  faqs: [
    { q: "Apa saja syarat menyewa motor?", a: "Penyewa wajib menjaminkan E-KTP asli dan menunjukkan SIM C yang masih berlaku saat penyerahan unit motor." },
    { q: "Apakah bisa diantar ke lokasi?", a: "Ya, kami melayani antar-jemput unit ke hotel, stasiun, atau bandara dengan tambahan biaya sesuai jarak lokasi." },
    { q: "Bagaimana jika motor mengalami kendala?", a: "Kami menyediakan layanan bantuan darurat 24 jam. Jika terjadi kerusakan teknis mesin (bukan karena kelalaian penyewa), kami akan mengganti dengan unit lain." },
    { q: "Apakah BBM sudah terisi?", a: "Motor diserahkan dengan posisi BBM standar operasional (minimal 1-2 bar). Penyewa diharapkan mengembalikan dengan posisi BBM yang kurang lebih sama." }
  ],
  testimonials: [
    { name: "Andi Pratama", rating: 5, text: "Motornya sangat terawat, tarikan mesin masih enak banget. Proses sewa cepat dan anti ribet. Rekomen buat yang butuh motor di kota ini!" },
    { name: "Siska Dewi", rating: 5, text: "Adminnya ramah, dikasih helm 2 plus jas hujan. Motor NMAX nya bersih banget pas diantar ke hotel. Thanks Ryde!" },
    { name: "Reza Rahadian", rating: 4, text: "Sewa Vario buat 3 hari. Harga sangat bersaing dan unitnya tergolong tahun muda. Pengalaman yang menyenangkan." }
  ]
};

export default function App() {
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowStickyCTA(true);
      } else {
        setShowStickyCTA(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const motorType = formData.get('motorType');
    const startDate = formData.get('startDate');
    const duration = formData.get('duration');
    const delivery = formData.get('delivery');
    const notes = formData.get('notes');
    
    const waUrl = `https://wa.me/${pageData.phone}?text=Halo%20Admin%20${pageData.name},%20saya%20${name}.%20Saya%20ingin%20sewa%20motor:%0A%0A%F0%9F%8F%8D%EF%B8%8F%20Unit:%20${motorType}%0A%F0%9F%93%85%20Tanggal:%20${startDate}%0A%E2%8F%B1%EF%B8%8F%20Durasi:%20${duration}%20Hari%0A%F0%9F%93%8D%20Pengiriman:%20${delivery}%0A%0ACatatan:%20${notes}%0A%0AMohon%20info%20ketersediaan%20dan%20total%20biayanya.%20Terima%20kasih!`;
    window.open(waUrl, '_blank');
  };

  const getShareUrl = () => {
    return window.location.href.startsWith('http') 
      ? window.location.href 
      : 'https://solusilokal.github.io/Ryde/';
  };

  const handleShare = async (e) => {
    e?.preventDefault?.();
    e?.stopPropagation?.();

    const shareUrl = getShareUrl();
    const shareText = `${pageData.name} - ${pageData.title}`;

    if (typeof navigator !== 'undefined' && navigator.share && window.location.protocol.startsWith('http')) {
      try {
        await navigator.share({
          title: pageData.name,
          text: shareText,
          url: shareUrl,
        });
        return;
      } catch (err) {
        if (err.name !== 'AbortError') {
          console.log('Fallback to share modal');
        }
      }
    }

    setShowShareModal(true);
  };

  const copyToClipboard = async () => {
    const textToCopy = getShareUrl();
    let success = false;
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(textToCopy);
        success = true;
      } catch (e) {
        success = false;
      }
    }
    if (!success) {
      try {
        const tempInput = document.createElement('textarea');
        tempInput.value = textToCopy;
        tempInput.style.position = 'fixed';
        tempInput.style.left = '-9999px';
        tempInput.style.top = '0';
        document.body.appendChild(tempInput);
        tempInput.focus();
        tempInput.select();
        success = document.execCommand('copy');
        document.body.removeChild(tempInput);
      } catch (e) {
        console.error('Copy fallback error:', e);
      }
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareToWhatsApp = () => {
    const text = `${pageData.name} - ${pageData.title}\n${pageData.description}\n\nKunjungi: ${getShareUrl()}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
  };

  const shareToFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(getShareUrl())}`, '_blank');
  };

  const shareToTwitter = () => {
    const text = `${pageData.name} - ${pageData.title}`;
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(getShareUrl())}&text=${encodeURIComponent(text)}`, '_blank');
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        
        body {
          background-color: #F1F5F9;
          color: #0F172A;
          margin: 0;
          font-family: 'Plus Jakarta Sans', sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      
      <main className="w-full max-w-[480px] mx-auto relative shadow-2xl bg-[#E6F3F5] min-h-screen overflow-hidden pb-32">
        
        {/* HERO SECTION */}
        <section className="relative w-full min-h-[92dvh] flex flex-col justify-end pb-12 px-6 bg-[#0E516D] overflow-hidden">
          
          {/* Background Image with Gradient Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src={pageData.heroImg} 
              alt="Ryde Background" 
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E516D] via-[#0E516D]/60 to-[#0E516D]/20"></div>
          </div>

          <button
            type="button"
            onClick={handleShare}
            aria-label="Bagikan Halaman"
            className="absolute top-6 right-6 z-30 p-3 bg-[#0A3D52]/90 backdrop-blur-md rounded-full border border-white/30 text-white hover:bg-[#FF7B00] hover:scale-110 active:scale-95 transition-all shadow-lg cursor-pointer"
          >
            <Share size={20} />
          </button>

          <div className="relative z-10 flex flex-col items-center text-center mt-32">
            {/* Circular Profile Logo */}
            <div className="w-32 h-32 rounded-full p-2 bg-white/95 backdrop-blur-md mb-6 shadow-2xl border-2 border-[#FF7B00] overflow-hidden flex items-center justify-center">
              <img 
                src={pageData.profileImg} 
                alt="Ryde Logo" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = defaultFallbackAvatar;
                }}
              />
            </div>

            <h1 className="text-4xl font-extrabold text-white mb-2 leading-tight tracking-tight drop-shadow-md">
              {pageData.name}
            </h1>
            <p className="text-[#FF7B00] font-bold text-sm mb-4 uppercase tracking-widest drop-shadow">{pageData.title}</p>
            <p className="text-cyan-50 font-medium text-sm leading-relaxed mb-8 max-w-[95%] drop-shadow">
              {pageData.description}
            </p>

            {/* Quick Links */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-sm mb-3">
              <a 
                href={pageData.links.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 hover:bg-white/25 transition-all text-white shadow-sm text-sm font-semibold"
              >
                <Instagram size={18} className="text-pink-400" /> Instagram
              </a>
              <a 
                href={pageData.links.tiktok}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 hover:bg-white/25 transition-all text-white shadow-sm text-sm font-semibold"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg> TikTok
              </a>
            </div>
            
            <a 
                href={pageData.links.maps}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 py-3 w-full max-w-sm mb-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all text-white shadow-sm text-sm font-semibold"
              >
                <MapPin size={18} className="text-red-400" /> Lokasi Garasi
            </a>

            <button 
              onClick={scrollToForm}
              className="group relative flex items-center justify-center gap-3 w-full max-w-sm py-4 bg-gradient-to-r from-[#FF7B00] to-[#FF9900] text-white rounded-2xl font-extrabold text-[14px] uppercase tracking-wider hover:brightness-110 transition-all shadow-[0_8px_30px_rgba(255,123,0,0.45)]"
            >
              <Key size={18} />
              Sewa Motor Sekarang
            </button>
          </div>
        </section>

        {/* HIGHLIGHTS BAR */}
        <section className="py-6 px-6 bg-[#FF7B00] shadow-inner">
          <div className="flex flex-wrap justify-between items-center w-full max-w-md mx-auto">
            {pageData.highlights.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-1">
                {item.icon === 'Shield' && <Shield size={24} className="text-white" />}
                {item.icon === 'Wrench' && <Wrench size={24} className="text-white" />}
                {item.icon === 'Clock' && <Clock size={24} className="text-white" />}
                <span className="text-[11px] font-bold text-white uppercase tracking-wide">{item.text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT & HISTORY SECTION */}
        <section className="pt-12 pb-10 px-6 bg-white border-b border-[#E6F3F5]">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <Info className="text-[#FF7B00]" size={24} />
              <h2 className="text-2xl font-extrabold text-[#0E516D] tracking-tight">Tentang Kami</h2>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed text-justify">
              {pageData.about}
            </p>
          </div>

          <div className="bg-[#E6F3F5] p-6 rounded-3xl border border-cyan-100 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-200/50 rounded-bl-full pointer-events-none"></div>
            <h3 className="text-lg font-bold text-[#0E516D] mb-3 relative z-10">Kisah Perjalanan Kami</h3>
            <p className="text-slate-600 text-sm leading-relaxed text-justify relative z-10">
              {pageData.history}
            </p>
          </div>
        </section>

        {/* KATALOG & HARGA */}
        <section className="py-12 bg-[#0E516D] border-b border-[#0A3D52]">
          <div className="px-6 mb-8 flex flex-col gap-1">
            <h2 className="text-2xl font-extrabold text-white tracking-tight">Katalog Armada</h2>
            <p className="text-cyan-100 text-sm">Pilih motor yang paling pas untuk petualanganmu hari ini.</p>
          </div>
          
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-5 px-6 pb-6 no-scrollbar">
            {pageData.fleet.map((motor, idx) => (
              <div 
                key={idx}
                className="snap-center shrink-0 w-[260px] rounded-3xl overflow-hidden bg-white border border-cyan-100 shadow-xl flex flex-col"
              >
                <div className="h-[180px] w-full overflow-hidden relative">
                  <img 
                    src={motor.img} 
                    alt={motor.name} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "https://images.unsplash.com/photo-1558981420-c532902e58b4?auto=format&fit=crop&q=80&w=400&h=300";
                    }}
                  />
                  <div className="absolute top-3 right-3 bg-[#FF7B00] text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                    Tahun {motor.year}
                  </div>
                </div>
                
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-[#0E516D] mb-1">{motor.name}</h3>
                  <p className="text-slate-500 text-xs mb-4">{motor.type}</p>
                  
                  <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-400 uppercase tracking-wide">Mulai dari</span>
                      <span className="text-[#FF7B00] font-extrabold text-lg">Rp {motor.price}</span>
                      <span className="text-[10px] text-slate-400">/ hari</span>
                    </div>
                    <button 
                      onClick={scrollToForm}
                      className="w-10 h-10 rounded-full bg-[#E6F3F5] hover:bg-[#FF7B00] text-[#0E516D] hover:text-white flex items-center justify-center transition-all shadow-sm"
                    >
                      <ArrowDown size={18} className="-rotate-45" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* LOKASI */}
        <section className="py-10 px-6 bg-white border-b border-[#E6F3F5]">
           <div className="mb-6 flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <Map className="text-[#FF7B00]" size={24} />
              <h2 className="text-2xl font-extrabold text-[#0E516D] tracking-tight">Lokasi Garasi</h2>
            </div>
            <p className="text-slate-500 text-sm ml-8">Temukan kami atau gunakan layanan antar-jemput.</p>
          </div>

          <div className="bg-[#E6F3F5] border border-cyan-100 rounded-3xl p-5 flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <MapPin className="text-[#0E516D] shrink-0 mt-1" size={20} />
              <p className="text-sm text-slate-700 font-medium leading-relaxed">{pageData.address}</p>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="text-[#0E516D] shrink-0" size={20} />
              <p className="text-sm text-slate-700 font-medium leading-relaxed">Buka Setiap Hari: 07.00 - 22.00 WITA</p>
            </div>
            
            <a 
              href={pageData.links.maps}
              target="_blank"
              rel="noreferrer"
              className="mt-2 w-full py-3 bg-[#0E516D] text-white text-sm font-bold rounded-xl text-center hover:bg-[#0A3D52] transition-colors shadow-md"
            >
              Buka di Google Maps
            </a>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-10 px-6 bg-[#F5FAFB] border-b border-cyan-100">
          <div className="mb-8 flex flex-col gap-1 text-center items-center">
            <h2 className="text-2xl font-extrabold text-[#0E516D] tracking-tight">FAQ</h2>
            <p className="text-slate-500 text-sm">Pertanyaan yang sering diajukan</p>
          </div>

          <div className="flex flex-col gap-3">
            {pageData.faqs.map((faq, idx) => (
              <div key={idx} className="bg-white border border-cyan-100 rounded-2xl overflow-hidden shadow-sm">
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-bold text-[#0E516D] text-[13px]">{faq.q}</span>
                  {openFaq === idx ? (
                    <ChevronUp size={18} className="text-[#FF7B00] shrink-0" />
                  ) : (
                    <ChevronDown size={18} className="text-cyan-600 shrink-0" />
                  )}
                </button>
                <div 
                  className={`px-5 overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaq === idx ? "max-h-48 pb-4 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-slate-600 text-[13px] leading-relaxed border-t border-[#E6F3F5] pt-3">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TESTIMONI PELANGGAN */}
        <section className="py-12 px-6 bg-white border-b border-[#E6F3F5]">
          <div className="mb-6 flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <Quote className="text-[#FF7B00]" size={24} />
              <h2 className="text-2xl font-extrabold text-[#0E516D] tracking-tight">Kata Mereka</h2>
            </div>
            <p className="text-slate-500 text-sm ml-8">Review asli dari para pelanggan setia kami.</p>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 no-scrollbar">
            {pageData.testimonials.map((testi, idx) => (
              <div key={idx} className="snap-center shrink-0 w-[280px] bg-[#F5FAFB] p-6 rounded-3xl border border-cyan-100 shadow-sm flex flex-col gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(testi.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-[#FF7B00] text-[#FF7B00]" />
                  ))}
                </div>
                <p className="text-slate-700 text-sm leading-relaxed italic">"{testi.text}"</p>
                <div className="mt-auto pt-4 border-t border-cyan-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0E516D] flex items-center justify-center text-white font-bold text-sm">
                    {testi.name.charAt(0)}
                  </div>
                  <span className="text-[13px] font-extrabold text-[#0E516D]">{testi.name}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BOOKING FORM */}
        <section id="booking-form" className="py-12 px-6 bg-[#0E516D]">
          <div className="bg-white rounded-[2rem] p-7 shadow-xl relative overflow-hidden border-2 border-[#0A3D52]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF7B00]/10 rounded-bl-full pointer-events-none"></div>
            
            <div className="relative z-10 mb-8">
              <h2 className="text-2xl font-extrabold text-[#0E516D] mb-2">Form Pemesanan</h2>
              <p className="text-slate-500 text-sm leading-relaxed">Isi form berikut untuk cek ketersediaan armada. Admin kami akan membalas melalui WhatsApp.</p>
            </div>
            
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-5 relative z-10">
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-bold text-cyan-700 uppercase tracking-wide ml-1">Nama Pemesan</label>
                <input 
                  type="text" 
                  name="name" 
                  required
                  placeholder="Ketik nama lengkap"
                  className="w-full bg-[#F5FAFB] border border-cyan-200 rounded-xl px-4 py-3.5 text-sm text-[#0E516D] placeholder-cyan-600/50 focus:outline-none focus:border-[#FF7B00] focus:ring-1 focus:ring-[#FF7B00] transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-bold text-cyan-700 uppercase tracking-wide ml-1">Pilih Motor</label>
                <select 
                  name="motorType" 
                  required
                  className="w-full bg-[#F5FAFB] border border-cyan-200 rounded-xl px-4 py-3.5 text-sm text-[#0E516D] focus:outline-none focus:border-[#FF7B00] focus:ring-1 focus:ring-[#FF7B00] transition-all appearance-none"
                >
                  <option value="">Pilih armada...</option>
                  {pageData.fleet.map((motor, idx) => (
                    <option key={idx} value={motor.name}>{motor.name} (Rp {motor.price}/hari)</option>
                  ))}
                </select>
              </div>

              <div className="flex gap-4">
                <div className="flex flex-col gap-2 w-1/2">
                  <label className="text-[11px] font-bold text-cyan-700 uppercase tracking-wide ml-1">Tgl Mulai</label>
                  <input 
                    type="date" 
                    name="startDate" 
                    required
                    className="w-full bg-[#F5FAFB] border border-cyan-200 rounded-xl px-4 py-3.5 text-sm text-[#0E516D] focus:outline-none focus:border-[#FF7B00] focus:ring-1 focus:ring-[#FF7B00] transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2 w-1/2">
                  <label className="text-[11px] font-bold text-cyan-700 uppercase tracking-wide ml-1">Lama Sewa</label>
                  <select 
                    name="duration" 
                    required
                    className="w-full bg-[#F5FAFB] border border-cyan-200 rounded-xl px-4 py-3.5 text-sm text-[#0E516D] focus:outline-none focus:border-[#FF7B00] focus:ring-1 focus:ring-[#FF7B00] transition-all appearance-none"
                  >
                    {[1,2,3,4,5,6,7].map(day => (
                      <option key={day} value={day}>{day} Hari</option>
                    ))}
                    <option value="> 7">Lebih dari 7 Hari</option>
                  </select>
                </div>
              </div>

               <div className="flex flex-col gap-2">
                <label className="text-[11px] font-bold text-cyan-700 uppercase tracking-wide ml-1">Metode Pengambilan</label>
                <select 
                  name="delivery" 
                  required
                  className="w-full bg-[#F5FAFB] border border-cyan-200 rounded-xl px-4 py-3.5 text-sm text-[#0E516D] focus:outline-none focus:border-[#FF7B00] focus:ring-1 focus:ring-[#FF7B00] transition-all appearance-none"
                >
                  <option value="Ambil di Garasi">Ambil di Garasi</option>
                  <option value="Antar ke Lokasi (Hotel/Bandara)">Antar ke Lokasi (Hotel/Bandara)</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-bold text-cyan-700 uppercase tracking-wide ml-1">Catatan (Opsional)</label>
                <textarea 
                  name="notes" 
                  rows="2"
                  placeholder="Cth: Butuh helm ukuran XL, pengiriman ke Hotel ABC..."
                  className="w-full bg-[#F5FAFB] border border-cyan-200 rounded-xl px-4 py-3.5 text-sm text-[#0E516D] placeholder-cyan-600/50 focus:outline-none focus:border-[#FF7B00] focus:ring-1 focus:ring-[#FF7B00] transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full mt-4 bg-[#25D366] text-white font-extrabold text-sm tracking-wide py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#20bd5a] transition-all shadow-lg shadow-green-500/30"
              >
                Pesan via WhatsApp
                <MessageCircle size={20} className="fill-current text-white" />
              </button>
            </form>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="pt-10 pb-14 text-center flex flex-col items-center justify-center bg-[#0A3D52] px-6">
          <div className="w-20 h-20 bg-white rounded-full shadow-sm border-2 border-[#FF7B00] flex items-center justify-center mb-4 p-2 overflow-hidden">
            <img 
              src={pageData.profileImg} 
              alt="Footer Logo" 
              className="w-full h-full object-contain" 
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = defaultFallbackAvatar;
              }}
            />
          </div>
          
          <div className="text-cyan-100 text-xs flex flex-col gap-1 items-center">
            <span className="font-extrabold text-white text-base">{pageData.name}</span>
            <span className="max-w-[250px] mt-1 text-center">{pageData.address}</span>
          </div>

          <p className="text-cyan-600 text-[11px] mt-8">
            © {new Date().getFullYear()} {pageData.name} Rental Motor. All rights reserved.
          </p>
          
          <a 
            href="https://www.solusilokal.id" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-500 text-[10px] mt-2 tracking-wide font-medium hover:text-[#FF7B00] transition-colors cursor-pointer z-10 relative"
          >
            powered by solusilokal.id
          </a>
        </footer>

        {/* STICKY CTA */}
        <div 
          className={`fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-[432px] z-40 transition-all duration-500 ease-out ${
            showStickyCTA ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'
          }`}
        >
          <button 
            onClick={scrollToForm}
            className="w-full flex items-center justify-between px-6 py-4 bg-gradient-to-r from-[#FF7B00] to-[#FF9900] backdrop-blur-xl border border-orange-400 rounded-2xl text-white shadow-[0_10px_40px_rgba(255,123,0,0.4)] hover:brightness-110 active:scale-[0.98] transition-all"
          >
            <span className="font-extrabold text-sm tracking-wide">Pesan Motor Sekarang</span>
            <div className="bg-[#0E516D] text-white p-2 rounded-xl">
              <Calendar size={18} className="fill-none stroke-current stroke-2" />
            </div>
          </button>
        </div>

      </main>

      {/* SHARE MODAL */}
      {showShareModal && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-slate-900/60 backdrop-blur-sm sm:items-center transition-opacity"
          onClick={() => setShowShareModal(false)}
        >
          <div
            className="w-full max-w-[480px] bg-white sm:rounded-3xl rounded-t-3xl p-6 relative overflow-hidden animate-in slide-in-from-bottom-full sm:slide-in-from-bottom-0 sm:zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-center items-center mb-6 relative">
              <h3 className="text-slate-900 font-bold text-[15px]">Bagikan {pageData.name}</h3>
              <button
                type="button"
                onClick={() => setShowShareModal(false)}
                className="absolute right-0 p-1.5 text-slate-500 hover:bg-slate-100 rounded-full transition-all cursor-pointer"
                aria-label="Tutup modal"
              >
                <X size={20} />
              </button>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-[24px] p-6 flex flex-col items-center justify-center mb-6 shadow-sm">
              <div className="w-[80px] h-[80px] rounded-full border-2 border-orange-200 mb-3 bg-white p-2 flex items-center justify-center overflow-hidden shadow-sm">
                <img 
                  src={pageData.profileImg} 
                  alt="Profile" 
                  className="w-full h-full object-contain" 
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = defaultFallbackAvatar;
                  }}
                />
              </div>
              <h4 className="text-slate-900 font-bold text-lg text-center tracking-tight">@{pageData.name.toLowerCase().replace(/\s/g, '')}</h4>
              <p className="text-slate-500 text-xs mt-1 text-center font-medium opacity-90">{pageData.links.instagram.replace('https://www.', '')}</p>
            </div>

            <div className="flex overflow-x-auto gap-3 pb-2 no-scrollbar items-start px-1 mb-4">
              <div className="flex flex-col items-center gap-2 min-w-[76px]">
                <button
                  type="button"
                  onClick={copyToClipboard}
                  className="w-[60px] h-[60px] rounded-full bg-slate-100 flex items-center justify-center text-slate-700 hover:bg-slate-200 hover:scale-105 active:scale-95 transition-all shadow-sm border border-slate-200 cursor-pointer"
                  title="Salin Tautan"
                >
                  {copied ? <Check size={26} className="text-green-600" /> : <Copy size={26} />}
                </button>
                <span className="text-[11px] font-semibold text-slate-600 text-center">
                  {copied ? 'Tersalin' : 'Salin Tautan'}
                </span>
              </div>

              <div className="flex flex-col items-center gap-2 min-w-[76px]">
                <button
                  type="button"
                  onClick={shareToTwitter}
                  className="w-[60px] h-[60px] rounded-full bg-slate-900 flex items-center justify-center text-white hover:bg-slate-800 hover:scale-105 active:scale-95 transition-all shadow-sm cursor-pointer"
                  title="Bagikan ke X"
                >
                  <Twitter size={26} />
                </button>
                <span className="text-[11px] font-semibold text-slate-600 text-center">X</span>
              </div>

              <div className="flex flex-col items-center gap-2 min-w-[76px]">
                <button
                  type="button"
                  onClick={shareToFacebook}
                  className="w-[60px] h-[60px] rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:brightness-110 hover:scale-105 active:scale-95 transition-all shadow-sm cursor-pointer"
                  title="Bagikan ke Facebook"
                >
                  <Facebook size={26} className="fill-current" />
                </button>
                <span className="text-[11px] font-semibold text-slate-600 text-center">Facebook</span>
              </div>

              <div className="flex flex-col items-center gap-2 min-w-[76px]">
                <button
                  type="button"
                  onClick={shareToWhatsApp}
                  className="w-[60px] h-[60px] rounded-full bg-[#25D366] flex items-center justify-center text-white hover:brightness-110 hover:scale-105 active:scale-95 transition-all shadow-sm cursor-pointer"
                  title="Bagikan ke WhatsApp"
                >
                  <MessageCircle size={26} className="fill-current" />
                </button>
                <span className="text-[11px] font-semibold text-slate-600 text-center">WhatsApp</span>
              </div>
            </div>
            
            <div className="w-full h-px bg-slate-200 mb-4"></div>
            
            <div className="flex flex-col items-center text-center">
              <h5 className="text-slate-900 font-bold text-[13px] mb-1">Ikuti Kami</h5>
              <p className="text-slate-500 text-[11px] mb-4">Follow media sosial kami untuk update promo terbaru.</p>
              <a href={pageData.links.instagram} target="_blank" rel="noreferrer" className="w-full py-3 bg-gradient-to-r from-[#FF7B00] to-[#FF9900] text-white text-sm font-extrabold rounded-xl hover:brightness-110 transition-all shadow-md">
                Kunjungi Instagram
              </a>
            </div>
            
          </div>
        </div>
      )}
    </>
  );
}