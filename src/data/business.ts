export const business = {
  name: 'PT YOSSY MANDIRI TRAVEL',
  slug: 'yossy-mandiri-travel-jambi',
  category: 'Travel Antar Kota',
  city: 'Kota Jambi',
  rating: 4.1,
  reviewCount: 70,
  phone: '6281234567890', // TODO-GANTI: nomor WA aktif pemilik
  mapsUrl: 'https://maps.google.com/?q=PT%20YOSSY%20MANDIRI%20TRAVEL%20Jambi',
  address: 'Kota Jambi, Provinsi Jambi',
  hours: 'Senin–Sabtu 09.00–21.00, Minggu 10.00–20.00',
  title: 'Yossy Mandiri Travel Jambi — Jadwal & Pesan Kursi',
  description: 'PT Yossy Mandiri Travel Jambi: jadwal, harga tiket & rute, pesan kursi via WhatsApp.',
  canonicalPath: '/',
  ogImage: '/og-default.jpg',
};

export const waLink = (message: string) =>
  `https://wa.me/${business.phone}?text=${encodeURIComponent(message)}`;

export const products = [
  {
    "name": "Jambi–Padang Pagi 08.00",
    "price": "Rp 250.000",
    "badge": "AC + Legroom",
    "stock": "12 Kursi"
  },
  {
    "name": "Jambi–Padang Siang 13.00",
    "price": "Rp 250.000",
    "badge": "AC + Legroom",
    "stock": "12 Kursi"
  },
  {
    "name": "Jambi–Padang Malam 20.00",
    "price": "Rp 270.000",
    "badge": "Sleeper",
    "stock": "10 Kursi"
  },
  {
    "name": "Jambi–Bukittinggi 09.00",
    "price": "Rp 260.000",
    "badge": "Eksekutif",
    "stock": "12 Kursi"
  },
  {
    "name": "Carter Rombongan 6 Orang",
    "price": "Rp 1.400.000",
    "badge": "Private",
    "stock": "Armada"
  },
  {
    "name": "Paket Kilat + Bagasi Extra",
    "price": "Rp 290.000",
    "badge": "Cepat",
    "stock": "8 Kursi"
  }
];
