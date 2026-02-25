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
        youtube_url: 'https://www.youtube.com/watch?v=weqUqvImWuk',
        youtube_id: 'weqUqvImWuk',
        thumbnail: 'https://i.ytimg.com/vi/weqUqvImWuk/hqdefault.jpg',
        description: 'Ibu hamil membutuhkan asupan gizi yang cukup untuk mendukung pertumbuhan dan perkembangan janin. Namun, masih banyak ibu hamil yang mengalami Kekurangan Energi Kronis (KEK), yaitu kondisi kurangnya asupan energi dalam jangka waktu lama yang dapat berdampak pada kesehatan ibu dan bayi.',
        category: 'Gizi Ibu Hamil',
        duration: '01:14',
    },
    {
        id: 3,
        title: 'Panduan Mudah Senam Hamil Trimester 1 - 2 di rumah',
        youtube_url: 'https://www.youtube.com/watch?v=YY44LLJw6OY',
        youtube_id: 'YY44LLJw6OY',
        thumbnail: 'https://i.ytimg.com/vi/YY44LLJw6OY/hqdefault.jpg',
        description: 'Panduan Mudah Senam Hamil Trimester 1 - 2 di rumah',
        category: 'Olahraga Ibu Hamil',
        duration: '11:10',
    },
    {
        id: 4,
        title: 'Panduan Mudah Senam Hamil Trimester 2 - 3 di rumah',
        youtube_url: 'https://www.youtube.com/watch?v=lPArls5RVA0',
        youtube_id: 'lPArls5RVA0',
        thumbnail: 'https://i.ytimg.com/vi/lPArls5RVA0/hqdefault.jpg',
        description: 'Panduan Mudah Senam Hamil Trimester 2 - 3 di rumah',
        category: 'Olahraga Ibu Hamil',
        duration: '11:39',
    },
    {
        id: 5,
        title: 'Cara Mengatasi Posisi Bayi Sungsang/Presbo (Tutorial Knee Chest Position)',
        youtube_url: 'https://www.youtube.com/watch?v=KZvVu0jlQCM',
        youtube_id: 'KZvVu0jlQCM',
        thumbnail: 'https://i.ytimg.com/vi/KZvVu0jlQCM/hqdefault.jpg',
        description: 'Cara Mengatasi Posisi Bayi Sungsang/Presbo (Tutorial Knee Chest Position)',
        category: 'Olahraga Ibu Hamil',
        duration: '05:32',
    },
    {
        id: 6,
        title: 'Gerakan Induksi alami biar cepet lahiran',
        youtube_url: 'https://www.youtube.com/watch?v=E2pjWsKLvMQ',
        youtube_id: 'E2pjWsKLvMQ',
        thumbnail: 'https://i.ytimg.com/vi/E2pjWsKLvMQ/hqdefault.jpg',
        description: 'Gerakan Induksi alami biar cepet lahiran',
        category: 'Olahraga Ibu Hamil',
        duration: '10:04',
    },
    {
        id: 7,
        title: 'Gerakan Optimalisasi Janin Untuk Mengubah Posisi Janin Terlentang/Miring/Oblig/Posterior',
        youtube_url: 'https://www.youtube.com/watch?v=6o2jRlWTS_Q',
        youtube_id: '6o2jRlWTS_Q',
        thumbnail: 'https://i.ytimg.com/vi/6o2jRlWTS_Q/hqdefault.jpg',
        description: 'Gerakan Optimalisasi Janin Untuk Mengubah Posisi Janin Terlentang/Miring/Oblig/Posterior',
        category: 'Olahraga Ibu Hamil',
        duration: '13:00',
    },
    {
        id: 8,
        title: 'SENAM HAMIL DENGAN GYMBALL/BIRTHBALL',
        youtube_url: 'https://www.youtube.com/watch?v=DYF577c5Jsg',
        youtube_id: 'DYF577c5Jsg',
        thumbnail: 'https://i.ytimg.com/vi/DYF577c5Jsg/hqdefault.jpg',
        description: 'SENAM HAMIL DENGAN GYMBALL/BIRTHBALL',
        category: 'Olahraga Ibu Hamil',
        duration: '10:14',
    },
    {
        id: 9,
        title: 'LATIHAN NAFAS UNTUK PERSALINAN DAN SENAM HAMIL',
        youtube_url: 'https://www.youtube.com/watch?v=GWmemVNu6FE',
        youtube_id: 'GWmemVNu6FE',
        thumbnail: 'https://i.ytimg.com/vi/GWmemVNu6FE/hqdefault.jpg',
        description: 'LATIHAN NAFAS UNTUK PERSALINAN DAN SENAM HAMIL',
        category: 'Olahraga Ibu Hamil',
        duration: '06:05',
    },
    {
        id: 10,
        title: 'Mengapa ASI Itu Penting?',
        youtube_url: 'https://www.youtube.com/watch?v=0K1BpuivBXA',
        youtube_id: '0K1BpuivBXA',
        thumbnail: 'https://i.ytimg.com/vi/0K1BpuivBXA/hqdefault.jpg',
        description: 'Mengapa ASI Itu Penting?',
        category: 'Tips Menyusui',
        duration: '04:09',
    },
    {
        id: 11,
        title: 'MANFAAT PEMBERIAN ASI EKSLUSIF',
        youtube_url: 'https://www.youtube.com/watch?v=3JuamHP3wqc',
        youtube_id: '3JuamHP3wqc',
        thumbnail: 'https://i.ytimg.com/vi/3JuamHP3wqc/hqdefault.jpg',
        description: 'MANFAAT PEMBERIAN ASI EKSLUSIF',
        category: 'Tips Menyusui',
        duration: '03:41',
    },
    {
        id: 12,
        title: 'TIPS DAN TRIK POSISI MENYUSUI YANG BENAR',
        youtube_url: 'https://www.youtube.com/watch?v=tZzrtcC6xzY',
        youtube_id: 'tZzrtcC6xzY',
        thumbnail: 'https://i.ytimg.com/vi/tZzrtcC6xzY/hqdefault.jpg',
        description: 'TIPS DAN TRIK POSISI MENYUSUI YANG BENAR',
        category: 'Tips Menyusui',
        duration: '06:04',
    },
];
