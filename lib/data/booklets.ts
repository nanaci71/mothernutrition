export interface Booklet {
    id: number;
    title: string;
    description: string;
    category: string;
    fileUrl: string;
    pages: number;
    color: string;
}

export const BOOKLET_CATEGORIES = [
    'Semua',
    'Ibu & Balita',
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
    },
];
