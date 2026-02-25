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
    'KEK & Gizi Ibu Hamil',
    'Strategi Makan Sehat',
    'Kebutuhan Gizi',
    'PMT & Gizi',
];

export const ARTICLES: Article[] = [
    {
        id: 1,
        title: 'Mengenali KEK pada Ibu Hamil',
        slug: 'mengenali-kek-pada-ibu-hamil',
        excerpt: 'Kekurangan Energi Kronis (KEK) adalah kondisi kekurangan gizi jangka panjang yang berisiko bagi ibu hamil dan janin. Kenali tanda, dampak, penyebab, dan cara pencegahannya.',
        content: `
## Apa itu KEK?

Kekurangan Energi Kronis (KEK) merupakan kondisi kekurangan gizi yang berlangsung lama disebabkan kurangnya asupan energi dan protein, sehingga tubuh tidak mendapatkan energi yang dibutuhkan secara cukup. KEK pada ibu hamil sering diukur dengan **lingkar lengan atas (LILA) kurang dari 23,5 cm**. Ibu hamil yang mengalami KEK menghadapi risiko tinggi terhadap gangguan kesehatan serta pertumbuhan janin yang tidak optimal.

---

## ⚠️ Tanda & Dampak KEK

### 📌 Tanda pada Ibu
- Mudah lelah dan lemas
- Berat badan sulit naik
- Nafsu makan rendah

### 📌 Dampak pada Ibu
KEK meningkatkan risiko anemia, gangguan kesehatan, dan kemungkinan komplikasi saat persalinan.

### 📌 Dampak pada Bayi
Bayi yang lahir dari ibu dengan KEK cenderung berat badan rendah (BBLR) dan berisiko mengalami stunting saat tumbuh kembang.

---

## 🍽️ Penyebab KEK

Beberapa faktor yang berhubungan dengan kejadian KEK pada ibu hamil:

- ✔ Asupan energi dan protein rendah
- ✔ Pengetahuan gizi ibu yang kurang
- ✔ Kondisi sosial ekonomi rendah
- ✔ Kurangnya dukungan keluarga

---

## 🍲 Cara Pencegahan KEK pada Ibu Hamil

### 1. Penuhi Kebutuhan Gizi Seimbang Sejak Pra-Kehamilan
- Kunci utama pencegahan KEK adalah memastikan asupan energi dan protein yang cukup. Berdasarkan Angka Kecukupan Gizi (AKG), wanita usia 19–49 tahun membutuhkan **2150–2250 kkal** dan **60 gram protein per hari**.
- Ibu hamil normal membutuhkan tambahan **180–300 kkal** dan **30 gram protein per hari**, sementara ibu hamil dengan risiko KEK perlu tambahan hingga **500 kkal/hari**.
- Konsumsi karbohidrat kompleks (beras merah, ubi), protein nabati (kacang, tempe), ikan, telur, serta alpukat.
- Zat besi sangat penting untuk mencegah anemia — sumbernya dari daging, hati, bayam, sayuran hijau.
- Konsumsi tablet tambah darah atau MMS setiap hari.
- Asam folat penting untuk perkembangan saraf janin — dari sayuran hijau, kacang, brokoli, jeruk, telur, hati sapi.

Pencegahan terbaik dimulai bahkan **sebelum kehamilan terjadi**.

### 2. Pemberian Makanan Tambahan (PMT) Berbasis Pangan Lokal
Program PMT berbasis pangan lokal telah terbukti meningkatkan status gizi ibu hamil dengan KEK. PMT harus diberikan **sebelum usia kehamilan 16 minggu**, dengan porsi kecil tapi sering — menambah **200–450 kalori** dan **12–20 gram protein** harian.

### 3. Pemeriksaan Kandungan Secara Rutin
- Pemantauan rutin melalui **Antenatal Care (ANC)** membantu mendeteksi dini risiko KEK.
- Pengukuran LiLA dan IMT secara berkala mengidentifikasi ibu hamil berisiko.
- Lakukan ANC **minimal 6 kali** selama kehamilan.
- Segera konsultasikan ke bidan atau dokter jika ada tanda lemas berkepanjangan, berat badan tidak naik, atau pucat.

---

## Sumber
- LMS Kemenkes RI: [lms.kemkes.go.id](https://lms.kemkes.go.id/courses/79327236-f4c6-4469-9bf4-48312eeb70bf)
- Kemenkes RI. (2014). *Pedoman Gizi Ibu Hamil dan Pencegahan KEK*. Jakarta: Direktorat Gizi Masyarakat.
- WHO. (2016). *Recommendations on Antenatal Care for a Positive Pregnancy Experience*. Geneva: WHO.
- Almatsier, S. (2019). *Prinsip Dasar Ilmu Gizi*. Jakarta: PT Gramedia Pustaka Utama.
        `,
        category: 'KEK & Gizi Ibu Hamil',
        image: '/images/Mengenali KEK pada Ibu Hamil.png',
        created_at: '2026-02-25',
    },
    {
        id: 2,
        title: 'Strategi "Makan Sedikit tapi Sering" untuk Ibu Hamil yang Sulit Makan',
        slug: 'strategi-makan-sedikit-sering-ibu-hamil',
        excerpt: 'Mual, muntah, dan selera makan yang menurun adalah hal umum saat hamil. Pelajari strategi makan porsi kecil tapi sering untuk tetap memenuhi kebutuhan nutrisi.',
        content: `
## 🍽️ 1. Mengapa Ibu Hamil Sulit Makan?

Selama kehamilan — terutama pada trimester pertama:

- Sering terjadi mual, muntah, atau penurunan selera makan.
- Volume perut yang berubah menyebabkan rasa kenyang lebih cepat.
- Efek hormon kehamilan membuat pencernaan bekerja lambat sehingga porsi besar terasa tidak nyaman.

➡️ Solusi praktisnya: **makan dalam porsi kecil tetapi lebih sering sepanjang hari** untuk membantu memenuhi kebutuhan energi dan nutrisi tanpa memicu mual.

---

## 🧠 2. Prinsip "Makan Sedikit tapi Sering"

Strategi ini meliputi:

- **Frekuensi makan**: 5–6 kali sehari (3 kali makan utama + 2–3 kali snack sehat)
- **Porsi kecil**: setiap porsi lebih sedikit dari biasanya
- **Jenis makanan bergizi seimbang**, terdiri dari:
  - Karbohidrat kompleks (nasi, roti gandum)
  - Protein (telur, ayam tanpa lemak, ikan)
  - Sayur dan buah segar
  - Sumber lemak sehat (kacang-kacangan, alpukat)

✔ Total asupan nutrisi harian tetap tercapai meskipun porsi setiap jam makan kecil.

---

## 🧪 3. Manfaat Strategi Ini

- Mengurangi rasa mual
- Menjaga gula darah stabil sepanjang hari
- Mempermudah pencernaan
- Membantu pemenuhan kebutuhan energi dan nutrisi tanpa rasa tertekan

➡️ Ini sejalan dengan prinsip pemenuhan kebutuhan gizi ibu hamil untuk mendukung pertumbuhan janin secara optimal.

---

## 💧 4. Tips Tambahan Selama Makan

- ✔ Minum cukup air **antara** waktu makan
- ✔ Hindari minuman berkafein berlebihan
- ✔ Hindari makanan yang terlalu berlemak atau pedas saat selera makan rendah
- ✔ Konsumsi suplemen zat besi / asam folat sesuai rekomendasi tenaga kesehatan

---

## Sumber Materi
- **Buku KIA – Kesehatan Ibu dan Anak (Kemenkes RI)**: [Unduh Buku KIA (PDF)](https://kesprimkom.kemkes.go.id/assets/uploads/contents/others/Buku_KIA_2024.pdf)
- **Modul Pelatihan Gizi Ibu Hamil (Kemenkes)**: [Unduh Modul (PDF)](https://repositori-ditjen-nakes.kemkes.go.id/441/1/modul_21010607295920a21e9be701b86777d9e602774b2188_.pdf)
- **Buku Saku Pencegahan Anemia Ibu Hamil**: [Unduh Buku Saku (PDF)](https://ayosehat.kemkes.go.id/pub/files/197ed157db03c65a4d1be68182613638.pdf)
        `,
        category: 'Strategi Makan Sehat',
        image: '/images/Strategi Makan Sedikit tapi Sering untuk Ibu Hamil yang Sulit Makan.png',
        created_at: '2026-02-14',
    },
    {
        id: 3,
        title: 'Kebutuhan Gizi Ibu Hamil: Energi dan Protein yang Perlu Dipenuhi Setiap Hari',
        slug: 'kebutuhan-gizi-ibu-hamil-energi-protein',
        excerpt: 'Kehamilan adalah masa penting di mana kebutuhan zat gizi meningkat. Pelajari kebutuhan energi, protein, zat besi, asam folat, vitamin A, dan kalsium selama kehamilan.',
        content: `
## Pendahuluan

Kehamilan adalah masa penting di mana kebutuhan zat gizi meningkat untuk mendukung pertumbuhan janin, pembentukan organ, serta menjaga kesehatan ibu. Pemenuhan gizi yang tepat membantu mencegah komplikasi seperti anemia, BBLR, hingga persalinan prematur.

Asupan zat gizi untuk bayi di dalam kandungan berasal dari simpanan zat gizi di dalam tubuh ibunya. Oleh karena itu sangat penting bagi calon ibu hamil mempunyai **status gizi yang baik sebelum memasuki kehamilan** (tidak kurus, tidak anemia, tidak gemuk).

---

## 🥗 A. Kebutuhan Zat Gizi Makro

Zat gizi makro adalah zat gizi yang dibutuhkan dalam jumlah besar: **energi, protein, karbohidrat, dan lemak**.

### 1. Kebutuhan Energi saat Hamil

- **Trimester I**: Belum ada peningkatan signifikan
- **Trimester II**: Tambahan **±340 kkal/hari**
- **Trimester III**: Tambahan **±452 kkal/hari**

Tambahan energi diperlukan untuk: pertumbuhan janin, pembentukan jaringan plasenta, peningkatan volume darah ibu, dan persiapan menyusui.

> 💡 Tambahan kalori bukan berarti makan dua porsi besar, tetapi tetap mengikuti prinsip **gizi seimbang**.

### 2. Kebutuhan Protein saat Hamil

Protein berperan dalam pembentukan sel dan jaringan janin, pertumbuhan plasenta, dan produksi darah ibu.

- Tidak hamil: **55–65 gram/hari**
- Trimester I: +1 gram/hari
- Trimester II: +10 gram/hari
- Trimester III: +30 gram/hari

**Sumber protein terbaik**: Telur 🥚, Ayam 🍗, Ikan 🐟, Daging 🥩, Tahu & Tempe 🌱

### 3. Kebutuhan Karbohidrat dan Lemak

- Karbohidrat: **60–65% energi harian** (±3–4 porsi makanan pokok per hari)
- Lemak: **20–35% dari total energi**, tambahan ±2 gram/hari

Pilih lemak sehat dari: alpukat 🥑, kacang-kacangan 🥜, ikan 🐟

---

## 🍊 B. Kebutuhan Zat Gizi Mikro

Zat gizi mikro dibutuhkan dalam jumlah kecil, tetapi perannya sangat besar.

Kekurangan zat gizi mikro dapat menyebabkan: anemia ⚠, preeklampsia ⚠, BBLR ⚠, gangguan perkembangan otak dan saraf ⚠, prematuritas ⚠.

### 1. Zat Besi
- Tidak hamil: **15–18 mg/hari**
- Hamil: +9 mg/hari pada trimester II & III

**Sumber**: Daging merah 🥩, ayam 🍗, ikan 🐟, sayuran hijau tua 🥬, buah berwarna oranye 🍊

### 2. Asam Folat
- Tidak hamil: **400 mcg/hari**
- Hamil: **600 mcg/hari**

Kekurangan folat meningkatkan risiko **spina bifida** (kelainan tabung saraf).

**Sumber**: Jeruk 🍊, sayuran hijau tua 🥬, kacang-kacangan 🥜, hati 🥩

### 3. Vitamin A
- Tidak hamil: **600 RE/hari**
- Hamil: **900 RE/hari**

⚠ Hindari konsumsi berlebihan dalam bentuk suplemen karena dapat berbahaya.

**Sumber alami**: Wortel 🥕, ubi jalar 🍠, bayam 🥬, brokoli 🥦, telur 🥚, ikan 🐟

### 4. Kalsium

WHO merekomendasikan suplementasi **1,5–2 gram/hari** (dibagi 3 dosis) pada populasi dengan konsumsi kalsium rendah, dimulai usia kehamilan 20 minggu.

**Sumber**: Susu dan produk olahannya 🥛, sereal 🌾, sayuran hijau 🥬

---

## 🌼 Kesimpulan

Pemenuhan gizi ibu hamil harus:
- ✔ Seimbang
- ✔ Cukup energi
- ✔ Tinggi protein
- ✔ Kaya vitamin dan mineral
- ✔ Disertai pemantauan kenaikan berat badan yang optimal

Gizi yang baik selama kehamilan bukan hanya untuk ibu, tetapi juga **investasi kesehatan jangka panjang bagi bayi** 👶💚

---

## Sumber
- [PGS Ibu Hamil dan Ibu Menyusui – Google Drive](https://drive.google.com/file/d/1f0GKY_M3DOX5ENJ2cZG7XRzZ4cFAfvyI/view)
        `,
        category: 'Kebutuhan Gizi',
        image: '/images/Kebutuhan Gizi Ibu Hamil Energi dan Protein yang Perlu Dipenuhi Setiap Hari.png',
        created_at: '2025-06-14',
    },
    {
        id: 4,
        title: 'Program Pemberian Makanan Tambahan (PMT) bagi Ibu Hamil KEK',
        slug: 'program-pmt-ibu-hamil-kek',
        excerpt: 'Program PMT bagi ibu hamil Kurang Energi Kronis (KEK) bertujuan meningkatkan status gizi ibu hamil melalui pemberian makanan tambahan berbasis pangan lokal yang kaya energi dan protein.',
        content: `
## Program Pemberian Makanan Tambahan (PMT) bagi Ibu Hamil Kurang Energi Kronis (KEK)

Ibu hamil merupakan kelompok rentan yang membutuhkan asupan gizi lebih tinggi dibandingkan perempuan tidak hamil. Salah satu permasalahan gizi yang masih banyak ditemukan adalah **Kurang Energi Kronis (KEK)**, yang ditandai dengan Lingkar Lengan Atas (LiLA) < 23,5 cm. Kondisi KEK pada ibu hamil dapat berdampak serius terhadap kesehatan ibu dan pertumbuhan janin apabila tidak ditangani secara tepat. Oleh karena itu, pemerintah melalui **Program Pemberian Makanan Tambahan (PMT) Bumil KEK** berupaya meningkatkan status gizi ibu hamil sebagai bagian dari intervensi gizi spesifik.

---

## 📖 Pengertian Pemberian Makanan Tambahan (PMT)

Pemberian Makanan Tambahan (PMT) ibu hamil adalah intervensi gizi yang diberikan kepada ibu hamil, khususnya yang mengalami Kurang Energi Kronis (KEK), berupa makanan tambahan berbahan pangan lokal yang mengandung energi dan protein. PMT bertujuan untuk **melengkapi asupan gizi harian**, bukan sebagai pengganti makanan utama, agar kebutuhan gizi ibu hamil dapat terpenuhi dengan lebih optimal selama masa kehamilan.

---

## 🎯 Tujuan Program PMT Bumil KEK

Program Pemberian Makanan Tambahan (PMT) bagi ibu hamil KEK bertujuan untuk meningkatnya status gizi ibu hamil melalui pemberian makanan tambahan sesuai dengan standar yang telah ditetapkan.

---

## 👥 Sasaran Program PMT Bumil KEK

### 1. Ibu Hamil Kurang Energi Kronis (KEK)
Ibu hamil yang mempunyai Indeks Massa Tubuh pra hamil atau pada trimester 1 (< 12 minggu) sebesar **< 18,5 kg/m²**

### 2. Ibu Hamil Risiko KEK
Ibu hamil yang mempunyai ukuran Lingkar Lengan Atas (LiLA) di bawah **23,5 cm**

---

## ✅ Manfaat PMT bagi Ibu Hamil

1️⃣ **Memperbaiki status gizi** ibu hamil, terutama pada ibu hamil Kurang Energi Kronis (KEK), melalui peningkatan asupan energi dan protein.

2️⃣ **Mendukung pertumbuhan dan perkembangan janin**, sehingga menurunkan risiko bayi lahir dengan berat badan rendah (BBLR).

3️⃣ **Berperan dalam pencegahan stunting**, sebagai bagian dari intervensi gizi spesifik pada 1000 Hari Pertama Kehidupan (HPK).

---

## 📋 Prinsip Pemberian Makanan Tambahan Ibu Hamil

1. Berupa makanan lengkap siap santap atau kudapan — kaya sumber protein hewani dengan memperhatikan gizi seimbang; menggunakan bahan makanan segar (tanpa pengawet buatan) dan membatasi konsumsi Gula, Garam dan Lemak (GGL)
2. Berupa **tambahan dan bukan pengganti** makanan utama
3. PMT Ibu Hamil diberikan selama **minimal 120 hari** dengan pendekatan pemberdayaan masyarakat dan penggunaan bahan lokal
4. Pemberian PMT di Posyandu, Fasyankes, Kelas Ibu Hamil atau melalui kunjungan rumah oleh kader/nakes/mitra
5. Diberikan setiap hari dengan komposisi sedikitnya **1 kali makanan lengkap dalam seminggu** dan sisanya kudapan. Makanan lengkap diberikan sebagai sarana edukasi implementasi isi piringku. Pemberian MT disertai dengan edukasi, dapat berupa demo masak, penyuluhan dan konseling.

---

## 🌱 Kesimpulan

Program Pemberian Makanan Tambahan (PMT) bagi ibu hamil KEK merupakan salah satu strategi penting dalam perbaikan status gizi ibu dan pencegahan stunting. Melalui pemberian PMT yang tepat sasaran dan didukung dengan edukasi gizi, diharapkan ibu hamil KEK mampu memenuhi kebutuhan gizinya secara lebih baik, sehingga kesehatan ibu dan bayi dapat terjaga secara optimal.

---

## Sumber Referensi

Kementerian Kesehatan RI. Direktorat Jenderal Kesehatan Masyarakat. **2023**.
*Petunjuk Teknis Pemberian Makanan Tambahan (PMT) Berbahan Pangan Lokal untuk Balita dan Ibu Hamil*. Jakarta: Kementerian Kesehatan Republik Indonesia.
        `,
        category: 'PMT & Gizi',
        image: '/images/artikel-pmt-bumil-kek.jpg',
        created_at: '2026-02-25',
    },
];
