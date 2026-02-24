export interface Video {
    id: number;
    title: string;
    youtube_url: string;
    youtube_id: string;
    thumbnail: string;
    description: string;
    category: string;
    duration: string;
}

export const VIDEO_CATEGORIES = [
    'Semua',
    'Gizi Ibu Hamil',
    'Tips Menyusui',
    'Kesehatan Bayi',
    'Olahraga Ibu Hamil',
    'Umum',
];

export const VIDEOS: Video[] = [
    {
        id: 1,
        title: 'Edukasi Gizi Balita dengan Status Gizi Kurang dan Gizi Buruk',
        youtube_url: 'https://www.youtube.com/watch?v=CVXs9blIWH0',
        youtube_id: 'CVXs9blIWH0',
        thumbnail: '/images/video-gizi-balita.png',
        description: 'Balita adalah generasi penerus bangsa yang membutuhkan asupan gizi optimal untuk tumbuh dan berkembang secara maksimal. Namun, masih banyak anak yang mengalami gizi kurang bahkan gizi buruk, yang dapat berdampak pada pertumbuhan fisik, perkembangan otak, hingga daya tahan tubuhnya.',
        category: 'Kesehatan Bayi',
        duration: '01:14',
    },
    {
        id: 2,
        title: 'Edukasi tentang Ibu Hamil dengan Kekurangan Energi Kronis (KEK)',
        youtube_url: 'https://www.youtube.com/watch?v=fGBFKXffCvA',
        youtube_id: 'fGBFKXffCvA',
        thumbnail: '/images/video-kek-ibu-hamil.png',
        description: 'Ibu hamil membutuhkan asupan gizi yang cukup untuk mendukung pertumbuhan dan perkembangan janin. Namun, masih banyak ibu hamil yang mengalami Kekurangan Energi Kronis (KEK), yaitu kondisi kurangnya asupan energi dalam jangka waktu lama yang dapat berdampak pada kesehatan ibu dan bayi.',
        category: 'Gizi Ibu Hamil',
        duration: '01:14',
    },

];
