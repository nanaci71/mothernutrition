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
        title: 'Panduan Gizi Lengkap untuk Ibu Hamil',
        youtube_url: 'https://www.youtube.com/watch?v=CVXs9blIWH0',
        youtube_id: 'CVXs9blIWH0',
        thumbnail: 'https://img.youtube.com/vi/CVXs9blIWH0/maxresdefault.jpg',
        description: 'Video ini membahas kebutuhan gizi ibu hamil dari trimester pertama hingga ketiga. Meliputi asam folat, zat besi, kalsium, dan nutrisi penting lainnya.',
        category: 'Gizi Ibu Hamil',
        duration: '15:32',
    },
    {
        id: 2,
        title: 'Cara Menghitung IMT dan Berat Badan Ideal',
        youtube_url: 'https://www.youtube.com/watch?v=fGBFKXffCvA',
        youtube_id: 'fGBFKXffCvA',
        thumbnail: 'https://img.youtube.com/vi/fGBFKXffCvA/maxresdefault.jpg',
        description: 'Tutorial lengkap cara menghitung Indeks Massa Tubuh (IMT) dan menginterpretasikan hasilnya untuk mengetahui status berat badan Anda.',
        category: 'Umum',
        duration: '8:45',
    },
    {
        id: 3,
        title: 'Tips Menyusui yang Benar untuk Ibu Baru',
        youtube_url: 'https://www.youtube.com/watch?v=CVXs9blIWH0',
        youtube_id: 'CVXs9blIWH0',
        thumbnail: 'https://img.youtube.com/vi/CVXs9blIWH0/maxresdefault.jpg',
        description: 'Panduan praktis menyusui untuk ibu baru: posisi yang nyaman, cara pelekatan yang benar, dan tips meningkatkan produksi ASI.',
        category: 'Tips Menyusui',
        duration: '12:20',
    },
    {
        id: 4,
        title: 'Senam Hamil Aman untuk Semua Trimester',
        youtube_url: 'https://www.youtube.com/watch?v=fGBFKXffCvA',
        youtube_id: 'fGBFKXffCvA',
        thumbnail: 'https://img.youtube.com/vi/fGBFKXffCvA/maxresdefault.jpg',
        description: 'Gerakan senam hamil yang aman dan bermanfaat untuk mempersiapkan tubuh menghadapi persalinan dan menjaga kebugaran selama kehamilan.',
        category: 'Olahraga Ibu Hamil',
        duration: '22:10',
    },
    {
        id: 5,
        title: 'MPASI Pertama: Panduan Memulai Makanan Pendamping ASI',
        youtube_url: 'https://www.youtube.com/watch?v=CVXs9blIWH0',
        youtube_id: 'CVXs9blIWH0',
        thumbnail: 'https://img.youtube.com/vi/CVXs9blIWH0/maxresdefault.jpg',
        description: 'Cara memulai MPASI yang benar pada bayi usia 6 bulan: tekstur makanan, jadwal pemberian, dan menu pertama yang aman.',
        category: 'Kesehatan Bayi',
        duration: '18:05',
    },
    {
        id: 6,
        title: 'Mencegah Anemia pada Ibu Hamil',
        youtube_url: 'https://www.youtube.com/watch?v=fGBFKXffCvA',
        youtube_id: 'fGBFKXffCvA',
        thumbnail: 'https://img.youtube.com/vi/fGBFKXffCvA/maxresdefault.jpg',
        description: 'Penyebab, gejala, dan cara mencegah anemia defisiensi besi pada ibu hamil. Makanan kaya zat besi yang mudah didapat dan diolah.',
        category: 'Gizi Ibu Hamil',
        duration: '10:30',
    },
];
