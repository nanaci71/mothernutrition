export interface Leaflet {
    id: number;
    title: string;
    description: string;
    category: string;
    fileUrl: string;
    pages: number;
    color: string;
}

export const LEAFLET_CATEGORIES = [
    'Semua',
    'Ibu Hamil',
    'Ibu Menyusui',
    'Bayi',
    'Balita',
    'PMT',
];

export const LEAFLETS: Leaflet[] = [
    {
        id: 1,
        title: 'Makanan Sehat Ibu Hamil',
        description: 'Panduan makanan sehat bergizi untuk ibu hamil mencakup kebutuhan nutrisi per trimester, zat besi, asam folat, kalsium, dan tips makan sehat selama kehamilan.',
        category: 'Ibu Hamil',
        fileUrl: '/media/LEAFLET_MAKANAN SEHAT IBU HAMIL.pdf',
        pages: 2,
        color: '#F6C1C7',
    },
    {
        id: 2,
        title: 'Makanan Sehat Ibu Menyusui',
        description: 'Panduan nutrisi khusus ibu menyusui untuk mendukung produksi ASI berkualitas, termasuk makanan yang dianjurkan dan dihindari selama masa laktasi.',
        category: 'Ibu Menyusui',
        fileUrl: '/media/LEAFLET_MAKANAN SEHAT IBU MENYUSUI.pdf',
        pages: 2,
        color: '#7BAE7F',
    },
    {
        id: 3,
        title: 'Makanan Sehat Bayi',
        description: 'Panduan pemberian makanan pendamping ASI (MPASI) untuk bayi mulai usia 6 bulan, mencakup jenis makanan, tekstur, dan jadwal pemberian makan.',
        category: 'Bayi',
        fileUrl: '/media/LEAFLET_MAKANAN SEHAT BAYI.pdf',
        pages: 2,
        color: '#F4A261',
    },
    {
        id: 4,
        title: 'Makanan Sehat Anak Balita',
        description: 'Panduan gizi seimbang untuk anak usia 1–5 tahun mencakup kebutuhan nutrisi, porsi makan, variasi menu, dan tips mengatasi anak susah makan.',
        category: 'Balita',
        fileUrl: '/media/LEAFLET_MAKANAN SEHAT ANAK BALITA.pdf',
        pages: 2,
        color: '#74B9E0',
    },
    {
        id: 5,
        title: 'Leaflet PMT Balita Kurus (Gizi Kurang)',
        description: 'Leaflet informasi Pemberian Makanan Tambahan (PMT) untuk balita kurus atau gizi kurang. Memuat sasaran, jenis PMT, cara pemberian, dan manfaatnya bagi pertumbuhan balita.',
        category: 'PMT',
        fileUrl: '/media/Leaflet_PMT_Balita_Kurus.pdf',
        pages: 2,
        color: '#F4A261',
    },
    {
        id: 6,
        title: 'Leaflet PMT Ibu Hamil Kurang Energi Kronis (KEK)',
        description: 'Leaflet informasi Pemberian Makanan Tambahan (PMT) bagi ibu hamil Kurang Energi Kronis (KEK). Mencakup definisi KEK, sasaran PMT, tujuan, dan prinsip pemberian makanan tambahan.',
        category: 'PMT',
        fileUrl: '/media/Leaflet_PMT_Ibu_Hamil_KEK.pdf',
        pages: 2,
        color: '#F6C1C7',
    },
];
