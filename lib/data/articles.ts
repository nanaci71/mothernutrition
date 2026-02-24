export interface Article {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    category: string;
    image: string;
    created_at: string;
}

export const CATEGORIES = [
    'Gizi Ibu Hamil',
    'Nutrisi Bayi',
    'Kesehatan Umum',
    'Pola Makan Sehat',
];

export const ARTICLES: Article[] = [
    {
        id: 1,
        title: 'Panduan Nutrisi Lengkap untuk Ibu Hamil Trimester Pertama',
        slug: 'nutrisi-ibu-hamil-trimester-pertama',
        excerpt: 'Trimester pertama adalah masa kritis perkembangan janin. Kenali nutrisi penting yang dibutuhkan.',
        content: `
## Nutrisi Penting di Trimester Pertama

Trimester pertama kehamilan (0–12 minggu) adalah fase terpenting dalam perkembangan janin. Pada masa ini, organ-organ vital janin mulai terbentuk.

### Asam Folat
Asam folat sangat penting untuk mencegah cacat tabung saraf. Konsumsi minimal **400 mcg per hari** dari sumber makanan seperti:
- Bayam dan sayuran hijau
- Kacang-kacangan
- Jeruk dan buah berkulit tebal
- Suplemen prenatal (rekomendasi dokter)

### Zat Besi
Zat besi mencegah anemia pada ibu hamil. Kebutuhan meningkat menjadi **27 mg per hari**.

**Sumber zat besi:**
- Daging merah tanpa lemak
- Ikan dan unggas
- Tahu dan tempe
- Sayuran berdaun hijau gelap

### Kalsium
Kalsium penting untuk pertumbuhan tulang dan gigi janin. Konsumsi **1000 mg per hari** dari:
- Susu dan produk olahan susu
- Ikan teri
- Brokoli
- Kedelai

### Tips Makan di Trimester Pertama
1. Makan dalam porsi kecil tapi sering (5–6 kali sehari)
2. Hindari makanan pedas dan berminyak jika mengalami mual
3. Minum air putih minimal 8 gelas per hari
4. Konsumsi jahe hangat untuk mengurangi mual
    `,
        category: 'Gizi Ibu Hamil',
        image: '/images/artikel-1.jpg',
        created_at: '2024-01-15',
    },
    {
        id: 2,
        title: 'Cara Menghitung dan Memantau IMT (Indeks Massa Tubuh)',
        slug: 'cara-menghitung-imt',
        excerpt: 'IMT adalah indikator utama status gizi seseorang. Pelajari cara menghitung dan interpretasinya.',
        content: `
## Apa itu IMT?

Indeks Massa Tubuh (IMT) atau Body Mass Index (BMI) adalah pengukuran yang digunakan untuk menilai status berat badan seseorang berdasarkan tinggi dan berat badan.

### Rumus IMT
\`\`\`
IMT = Berat Badan (kg) / (Tinggi Badan (m))²
\`\`\`

### Kategori IMT (WHO)

| IMT | Kategori |
|-----|----------|
| < 18.5 | Berat Badan Kurang (Kurus) |
| 18.5 – 24.9 | Berat Badan Normal |
| 25.0 – 29.9 | Kelebihan Berat Badan (Overweight) |
| ≥ 30.0 | Obesitas |

### Contoh Perhitungan
Seseorang dengan tinggi 165 cm dan berat 60 kg:
- Tinggi dalam meter: 1.65 m
- IMT = 60 / (1.65 × 1.65) = 60 / 2.7225 = **22.04** (Normal)

### Batasan IMT
IMT tidak mempertimbangkan:
- Komposisi lemak vs otot
- Distribusi lemak tubuh
- Usia dan jenis kelamin

Gunakan IMT sebagai **panduan awal**, bukan diagnosis tunggal.
    `,
        category: 'Kesehatan Umum',
        image: '/images/artikel-2.jpg',
        created_at: '2024-01-20',
    },
    {
        id: 3,
        title: '10 Makanan Super untuk Pola Makan Sehat Sehari-hari',
        slug: 'makanan-super-pola-makan-sehat',
        excerpt: 'Superfoods lokal Indonesia yang mudah didapat dan kaya manfaat untuk kesehatan optimal.',
        content: `
## Superfoods Lokal Indonesia

Tidak perlu beli produk impor mahal! Indonesia memiliki banyak bahan pangan lokal yang kaya nutrisi.

### 1. Tempe
Tempe adalah sumber protein nabati terbaik. Mengandung:
- Protein lengkap (semua asam amino esensial)
- Probiotik alami
- Vitamin B12
- Zat besi dan kalsium

### 2. Ikan Teri
Ikan kecil penuh kalsium dan omega-3. Sangat baik untuk:
- Kesehatan tulang
- Perkembangan otak
- Ibu hamil dan menyusui

### 3. Daun Kelor (Moringa)
Disebut "pohon keajaiban" karena kandungannya:
- 7x lebih banyak vitamin C dari jeruk
- 4x lebih banyak kalsium dari susu
- 2x lebih banyak protein dari yogurt

### 4. Pisang
Sumber energi alami yang kaya:
- Kalium (baik untuk jantung)
- Vitamin B6
- Serat larut

### 5. Kunyit
Rempah anti-inflamasi alami yang mengandung kurkumin.

Tambahkan ke dalam masakan sehari-hari untuk manfaat optimal!
    `,
        category: 'Pola Makan Sehat',
        image: '/images/artikel-3.jpg',
        created_at: '2024-01-25',
    },
    {
        id: 4,
        title: 'Kebutuhan Nutrisi Bayi 0–6 Bulan: Panduan ASI Eksklusif',
        slug: 'nutrisi-bayi-asi-eksklusif',
        excerpt: 'ASI adalah makanan terbaik untuk bayi. Simak kandungan gizi ASI dan tips menyusui yang berhasil.',
        content: `
## ASI: Makanan Sempurna untuk Bayi

Air Susu Ibu (ASI) adalah nutrisi paling lengkap yang bisa diberikan kepada bayi 0–6 bulan.

### Kandungan Utama ASI
- **Laktosa**: Sumber energi utama bayi
- **Protein whey**: Mudah dicerna bayi
- **Lemak esensial**: DHA untuk perkembangan otak
- **Imunoglobulin**: Antibodi pelindung
- **Vitamin dan mineral**: Sesuai kebutuhan bayi

### Manfaat ASI Eksklusif
1. Mencegah infeksi saluran pernapasan dan pencernaan
2. Mengurangi risiko alergi
3. Mendukung perkembangan otak optimal
4. Mempererat ikatan ibu dan bayi

### Tips Sukses Menyusui
- Susui sesering mungkin (8–12 kali per hari)
- Pastikan pelekatan (latch) yang benar
- Ibu harus cukup makan, minum, dan istirahat
- Hindari stres berlebihan

WHO merekomendasikan ASI eksklusif selama **6 bulan penuh**.
    `,
        category: 'Nutrisi Bayi',
        image: '/images/artikel-4.jpg',
        created_at: '2024-02-01',
    },
    {
        id: 5,
        title: 'Menu Sehat Ibu Hamil Trimester Kedua dan Ketiga',
        slug: 'menu-sehat-ibu-hamil-trimester-2-3',
        excerpt: 'Panduan menu harian bergizi untuk mendukung tumbuh kembang optimal janin di trimester 2 dan 3.',
        content: `
## Kebutuhan Gizi Trimester 2 & 3

Di trimester kedua dan ketiga, janin tumbuh pesat. Kebutuhan kalori ibu hamil meningkat **300–500 kalori per hari**.

### Contoh Menu Sehari

**Sarapan (08.00):**
- Nasi tim dengan ayam suwir
- Tumis bayam dengan bawang putih
- Segelas susu khusus ibu hamil

**Snack Pagi (10.00):**
- Buah pepaya 1 mangkuk
- Yogurt plain tanpa gula

**Makan Siang (12.00):**
- Nasi merah 1 piring
- Ikan salmon kukus
- Sayur bening bayam dan jagung
- Tempe goreng

**Snack Sore (15.00):**
- Kacang rebus
- Air kelapa muda

**Makan Malam (18.00):**
- Nasi putih setengah piring
- Sup tahu dan wortel
- Tumis kangkung
- Telur rebus 1 butir

### Yang Perlu Dihindari
- Makanan mentah atau setengah matang
- Ikan tinggi merkuri (tuna besar, ikan pedang)
- Kafein berlebih (maksimal 200mg/hari)
- Alkohol
    `,
        category: 'Gizi Ibu Hamil',
        image: '/images/artikel-5.jpg',
        created_at: '2024-02-05',
    },
    {
        id: 6,
        title: 'Pentingnya Zat Besi untuk Mencegah Anemia pada Ibu Hamil',
        slug: 'zat-besi-cegah-anemia-ibu-hamil',
        excerpt: 'Anemia adalah masalah gizi utama ibu hamil. Kenali gejala, penyebab, dan cara mencegahnya.',
        content: `
## Anemia pada Ibu Hamil

Anemia defisiensi besi adalah kondisi paling umum pada ibu hamil. Ditandai dengan kadar hemoglobin < 11 g/dL.

### Gejala Anemia
- Mudah lelah dan lemas
- Pucat (bibir, kuku, kelopak mata dalam)
- Pusing dan sakit kepala
- Sesak napas

### Risiko jika Tidak Ditangani
- Bayi lahir dengan berat rendah (BBLR)
- Kelahiran prematur
- Daya tahan tubuh bayi lemah

### Sumber Zat Besi Terbaik

**Hewani (penyerapan lebih baik):**
- Daging sapi dan ayam
- Hati ayam (kaya zat besi)
- Ikan dan seafood

**Nabati:**
- Bayam merah
- Kacang-kacangan
- Tahu dan tempe
- Brokoli

### Tips Meningkatkan Penyerapan Zat Besi
1. Konsumsi vitamin C bersamaan (jeruk, tomat)
2. Hindari minum teh/kopi saat makan
3. Masak dengan wajan besi

Konsultasikan dengan dokter untuk suplementasi zat besi yang tepat.
    `,
        category: 'Gizi Ibu Hamil',
        image: '/images/artikel-6.jpg',
        created_at: '2024-02-10',
    },
];
