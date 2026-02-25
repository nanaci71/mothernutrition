export interface Booklet {
    id: number;
    title: string;
    description: string;
    category: string;
    fileUrl: string;
    pages: number;
    color: string;
    image?: string;
}

export const BOOKLET_CATEGORIES = [
    'Semua',
    'Ibu & Balita',
    'PMT',
];

export const BOOKLETS: Booklet[] = [
    {
        id: 1,
        title: 'Booklet Ibu Balita (24–59 Bulan)',
        description: 'Buku panduan lengkap gizi dan kesehatan untuk ibu yang memiliki anak balita usia 24–59 bulan, mencakup kebutuhan nutrisi, pola makan, stimulasi tumbuh kembang, dan pencegahan stunting.',
        category: 'Ibu & Balita',
        fileUrl: '/media/Booklet_ibu balita 24-59 bulan.pdf',
        pages: 40,
        color: '#7BAE7F',
        image: '/images/booklet-ibu-balita.png',
    },
    {
        id: 2,
        title: 'Buku Saku PMT Biskuit bagi Balita Kurus & Ibu Hamil KEK',
        description: 'Buku saku panduan Pemberian Makanan Tambahan (PMT) berupa biskuit bagi balita kurus dengan gizi kurang dan ibu hamil Kurang Energi Kronis (KEK). Memuat informasi sasaran, manfaat, dan cara pemberian PMT.',
        category: 'PMT',
        fileUrl: '/media/Booklet_PMT_Biskuit_Balita_Kurus_dan_Ibu_Hamil_KEK.pdf',
        pages: 20,
        color: '#E07B7B',
    },
];
