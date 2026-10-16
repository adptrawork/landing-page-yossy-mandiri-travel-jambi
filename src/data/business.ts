export const business = {
  name: 'PT Yossy Mandiri Travel',
  slug: 'yossy-mandiri-travel-jambi',
  category: 'Travel Antar Kota',
  city: 'Kota Jambi',
  rating: 4.1,
  reviewCount: 70,
  phone: '6282186578514',
  phoneDisplay: '0821-8657-8514',
  phoneAlt: 'WA alternatif loket Jambi: 0852-1987-2450, 0823-7897-0577.',
  mapsUrl: 'https://maps.google.com/?q=Yossy+Mandiri+Travel+Jl+HOS+Cokroaminoto+Jambi',
  mapsEmbed: 'https://maps.google.com/maps?q=Jl+HOS+Cokroaminoto+Jelutung+Jambi&t=&z=15&ie=UTF8&iwloc=&output=embed',
  address: 'Loket Jambi: Jl. HOS. Cokroaminoto (Simpang Kawat), Payo Lebar, Jelutung, Kota Jambi 36135',
  hours: 'Loket buka setiap hari — konfirmasi jam via WA',
  website: 'https://yossymandiritravel.com',
  tarifUrl: 'https://yossymandiritravel.com/tarif/',
  armadaUrl: 'https://yossymandiritravel.com/armada/',
  schemaType: 'TravelAgency',
  ctaLabel: 'Pesan Kursi via WA',
  ctaUrl: 'https://wa.me/6282186578514',
  title: 'Travel Jambi–Palembang–Jakarta via Tol | Yossy Mandiri Executive',
  description: 'Yossy Mandiri Travel Jambi: Hiace Premio captain seat, Innova Reborn, Fortuner executive via tol Sumatera. Lampung–Jambi & Palembang–Jambi Rp430rb, antar-jemput lokasi.',
  canonicalPath: '/',
  ogImage: '/images/yossy-armada-7.jpg',
};

export const navLinks = [
  { href: '/', label: 'Beranda' },
  { href: '/jadwal', label: 'Jadwal & Tarif' },
  { href: '/armada', label: 'Armada' },
  { href: '/pesan', label: 'Pesan Kursi' },
  { href: '/kontak', label: 'Kontak' },
];

export const waLink = (message: string) =>
  `https://wa.me/${business.phone}?text=${encodeURIComponent(message)}`;

export const routes = [
  { name: 'Lampung – Jambi', price: 'Rp430.000', status: 'Terverifikasi situs resmi', desc: 'Executive class via tol.' },
  { name: 'Palembang – Jambi', price: 'Rp430.000', status: 'Terverifikasi situs resmi', desc: 'Executive class via tol.' },
  { name: 'Jambi – Kuala Tungkal', price: 'Cek situs resmi', status: 'Tanya via WA', desc: 'Lihat tarif terbaru di halaman tarif resmi.' },
  { name: 'Jambi – Jakarta', price: 'Cek situs resmi', status: 'Tanya via WA', desc: 'Lihat tarif terbaru di halaman tarif resmi.' },
  { name: 'Jambi – Pekanbaru', price: 'Cek situs resmi', status: 'Tanya via WA', desc: 'Lihat tarif terbaru di halaman tarif resmi.' },
  { name: 'Jambi – Padang', price: 'Cek situs resmi', status: 'Tanya via WA', desc: 'Lihat tarif terbaru di halaman tarif resmi.' },
  { name: 'Lampung – Bekasi (pp)', price: 'Cek situs resmi', status: 'Rute poster', desc: 'Rute promosi sesuai poster resmi.' },
];

export const fleet = [
  { name: 'Hiace Premio', desc: 'Kabin luas dengan jok captain seat kulit, TV, dan karaoke.', img: 'yossy-armada-6.jpg', w: 767, h: 776 },
  { name: 'Hiace Commuter', desc: 'Kapasitas rombongan, cocok untuk carter dan paket travel.', img: 'yossy-armada-2.jpg', w: 1074, h: 604 },
  { name: 'Innova Reborn', desc: 'MPV nyaman untuk rute jauh dengan suspensi empuk.', img: 'yossy-armada-1.jpg', w: 900, h: 1200 },
  { name: 'Innova Reborn — unit 2', desc: 'Unit Innova cadangan untuk rute Jambi–Jakarta dan Jambi–Padang.', img: 'yossy-armada-3.jpg', w: 550, h: 1193 },
  { name: 'Kabin Hiburan', desc: 'Unit Premio dengan TV dan karaoke untuk mengusir bosan selama perjalanan jauh.', img: 'yossy-armada-5.jpg', w: 1093, h: 1103 },
  { name: 'Armada Executive', desc: 'Unit executive class via tol, terawat dan bersih untuk rute Sumatera.', img: 'yossy-armada-4.jpg', w: 900, h: 900 },
  { name: 'Hiace Premio Silver', desc: 'Unit silver terparkir di depan loket Simpang Kawat Jambi.', img: 'yossy-armada-7.jpg', w: 648, h: 864 },
  { name: 'Promo Rute', desc: 'Poster promosi rute Lampung–Bekasi (pp) dan rute Sumatera lainnya.', img: 'yossy-promo-1.jpg', w: 900, h: 900 },
];

export const faqs = [
  { q: 'Apakah dijemput sampai lokasi?', a: 'Ya. Situs resmi menyatakan driver mengantar dan menjemput hingga ke lokasi tujuan Anda. Konfirmasi titik jemput via WA.' },
  { q: 'Apakah lewat tol?', a: 'Ya, layanan executive class via tol untuk rute-rutenya.' },
  { q: 'Bagaimana refund dan bagasi?', a: 'Ketentuan refund dan bagasi tidak dipublikasikan di situs — tanyakan langsung via WA sebelum membayar.' },
  { q: 'Bisa carter rombongan?', a: 'Bisa. Hubungi loket Jambi via WA untuk harga carter Hiace atau Innova.' },
];

export const notes: string[] = [
  'Tarif Rp430.000 terverifikasi dari halaman tarif situs resmi (diakses Oktober 2026) — tetap konfirmasi ulang via WA.',
  'Rute lain mengikuti halaman tarif resmi yang diperbarui berkala oleh operator.',
];
