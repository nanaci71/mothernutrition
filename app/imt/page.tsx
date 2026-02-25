'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Scale, Info, Target, Instagram } from 'lucide-react';

interface IMTResult {
    imt: number;
    kategori: string;
    emoji: string;
    warnaBg: string;
    warnaBorder: string;
    warnaText: string;
    rekomendasi: string;
    targetMin: number;
    targetMax: number;
}

function hitungIMT(berat: number, tinggiCm: number): IMTResult {
    const tinggiM = tinggiCm / 100;
    const imt = berat / (tinggiM * tinggiM);

    let kategori: string;
    let emoji: string;
    let warnaBg: string;
    let warnaBorder: string;
    let warnaText: string;
    let rekomendasi: string;

    if (imt < 18.5) {
        kategori = 'Berat Badan Kurang (Kurus)';
        emoji = '⚡';
        warnaBg = 'bg-blue-50';
        warnaBorder = 'border-blue-200';
        warnaText = 'text-blue-700';
        rekomendasi = 'Konsumsi makanan bergizi tinggi dan berkalori cukup. Perbanyak protein, karbohidrat kompleks, dan lemak sehat. Konsultasikan dengan ahli gizi untuk program penambahan berat badan yang aman.';
    } else if (imt < 25) {
        kategori = 'Berat Badan Normal';
        emoji = '✅';
        warnaBg = 'bg-green-50';
        warnaBorder = 'border-green-200';
        warnaText = 'text-green-700';
        rekomendasi = 'Berat badan Anda ideal! Pertahankan pola makan sehat dan rutin berolahraga minimal 150 menit per minggu. Konsumsi makanan bergizi seimbang.';
    } else if (imt < 30) {
        kategori = 'Kelebihan Berat Badan (Overweight)';
        emoji = '⚠️';
        warnaBg = 'bg-yellow-50';
        warnaBorder = 'border-yellow-200';
        warnaText = 'text-yellow-700';
        rekomendasi = 'Kurangi asupan kalori harian dan tingkatkan aktivitas fisik. Pilih makanan rendah lemak dan tinggi serat. Hindari makanan olahan dan minuman manis. Targetkan penurunan 0.5–1 kg per minggu.';
    } else {
        kategori = 'Obesitas';
        emoji = '🔴';
        warnaBg = 'bg-red-50';
        warnaBorder = 'border-red-200';
        warnaText = 'text-red-700';
        rekomendasi = 'Segera konsultasikan dengan dokter atau ahli gizi. Diperlukan perubahan gaya hidup signifikan meliputi diet sehat, olahraga teratur, dan mungkin bantuan medis. Jangan melakukan diet ekstrem tanpa pengawasan ahli.';
    }

    // Target berat badan ideal (IMT 18.5 – 24.9)
    const targetMin = Math.round(18.5 * tinggiM * tinggiM * 10) / 10;
    const targetMax = Math.round(24.9 * tinggiM * tinggiM * 10) / 10;

    return { imt: Math.round(imt * 100) / 100, kategori, emoji, warnaBg, warnaBorder, warnaText, rekomendasi, targetMin, targetMax };
}

const IMT_CATEGORIES = [
    { label: 'Kurus', range: '< 18.5', color: 'bg-blue-200', width: '20%' },
    { label: 'Normal', range: '18.5 – 24.9', color: 'bg-green-400', width: '35%' },
    { label: 'Overweight', range: '25 – 29.9', color: 'bg-yellow-400', width: '25%' },
    { label: 'Obesitas', range: '≥ 30', color: 'bg-red-400', width: '20%' },
];

const TEAM = [
    {
        name: 'Suci Wijiwati',
        nim: '23061334166',
        instagram: 'https://www.instagram.com/suciwjwty_/',
        handle: '@suciwjwty_',
        initial: 'S',
        color: 'bg-[#7BAE7F]',
    },
    {
        name: 'Siska Dwi Kuntari',
        nim: '23061334096',
        instagram: 'https://www.instagram.com/ssiskaa_ssi/',
        handle: '@ssiskaa_ssi',
        initial: 'S',
        color: 'bg-[#F4A261]',
    },
    {
        name: 'Ayu Tri Cahyani',
        nim: '23061334109',
        instagram: 'https://www.instagram.com/ayuutchya_/',
        handle: '@ayuutchya_',
        initial: 'A',
        color: 'bg-[#F6C1C7]',
    },
];

export default function IMTPage() {
    const [tinggi, setTinggi] = useState('');
    const [berat, setBerat] = useState('');
    const [result, setResult] = useState<IMTResult | null>(null);
    const [error, setError] = useState('');
    const [showCredit, setShowCredit] = useState(false);

    const handleHitung = () => {
        const t = parseFloat(tinggi);
        const b = parseFloat(berat);

        if (!t || !b) {
            setError('Harap isi tinggi dan berat badan.');
            return;
        }
        if (t < 50 || t > 250) {
            setError('Tinggi badan harus antara 50 – 250 cm.');
            return;
        }
        if (b < 10 || b > 400) {
            setError('Berat badan harus antara 10 – 400 kg.');
            return;
        }

        setError('');
        setResult(hitungIMT(b, t));
    };

    const handleReset = () => {
        setTinggi('');
        setBerat('');
        setResult(null);
        setError('');
    };

    return (
        <div className="max-w-xl mx-auto px-4 py-8">
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#7A7A7A] hover:text-[#7BAE7F] mb-6 font-medium">
                <ArrowLeft className="w-4 h-4" /> Kembali
            </Link>

            {/* Header */}
            <div className="text-center mb-8">
                <div className="w-16 h-16 bg-[#7BAE7F]/15 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Scale className="w-8 h-8 text-[#7BAE7F]" />
                </div>
                <h1 className="text-3xl font-extrabold text-[#4A4A4A]">Kalkulator IMT</h1>
                <p className="text-[#7A7A7A] mt-2 text-sm leading-relaxed max-w-sm mx-auto">
                    Hitung Indeks Massa Tubuh (IMT) Anda dan dapatkan rekomendasi kesehatan personal
                </p>
            </div>

            {/* Form */}
            <div className="bg-white rounded-3xl shadow-soft p-6 md:p-8 mb-6">
                <div className="space-y-5">
                    <div>
                        <label className="block text-sm font-bold text-[#4A4A4A] mb-2">
                            Tinggi Badan (cm)
                        </label>
                        <div className="relative">
                            <input
                                type="number"
                                value={tinggi}
                                onChange={(e) => setTinggi(e.target.value)}
                                placeholder="Contoh: 165"
                                min={50}
                                max={250}
                                className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-[#7BAE7F] transition-colors text-[#4A4A4A] font-semibold [appearance:textfield]"
                            />
                            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-[#AAAAAA] font-medium">cm</span>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-[#4A4A4A] mb-2">
                            Berat Badan (kg)
                        </label>
                        <div className="relative">
                            <input
                                type="number"
                                value={berat}
                                onChange={(e) => setBerat(e.target.value)}
                                placeholder="Contoh: 60"
                                min={10}
                                max={400}
                                className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-[#7BAE7F] transition-colors text-[#4A4A4A] font-semibold [appearance:textfield]"
                            />
                            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-[#AAAAAA] font-medium">kg</span>
                        </div>
                    </div>

                    {error && (
                        <p className="text-red-500 text-sm font-medium bg-red-50 px-4 py-2 rounded-xl">⚠️ {error}</p>
                    )}

                    <div className="flex gap-3 pt-1">
                        <button
                            onClick={handleHitung}
                            className="flex-1 bg-[#7BAE7F] text-white font-bold py-3.5 rounded-2xl hover:bg-[#5A8F5E] shadow-lg shadow-[#7BAE7F]/30 hover:-translate-y-0.5 active:translate-y-0 transition-all"
                        >
                            Hitung IMT
                        </button>
                        {result && (
                            <button
                                onClick={handleReset}
                                className="px-5 bg-gray-100 text-[#7A7A7A] font-semibold py-3.5 rounded-2xl hover:bg-gray-200 transition-all"
                            >
                                Reset
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* Result */}
            {result && (
                <div className="space-y-4 animate-in slide-in-from-bottom-4 duration-300">
                    {/* IMT Value */}
                    <div className={`rounded-3xl border-2 p-6 text-center ${result.warnaBg} ${result.warnaBorder}`}>
                        <div className="text-5xl font-extrabold mb-1" style={{ color: 'inherit' }}>
                            <span className={result.warnaText}>{result.imt}</span>
                        </div>
                        <div className="text-sm font-medium text-gray-500 mb-3">Nilai IMT Anda</div>
                        <div className={`inline-flex items-center gap-2 text-sm font-bold px-4 py-2 rounded-full bg-white/60`}>
                            <span>{result.emoji}</span>
                            <span className={result.warnaText}>{result.kategori}</span>
                        </div>
                    </div>

                    {/* IMT Scale */}
                    <div className="bg-white rounded-2xl shadow-soft p-5">
                        <h3 className="text-sm font-bold text-[#4A4A4A] mb-3">Kategori IMT</h3>
                        <div className="flex rounded-xl overflow-hidden mb-3 h-3">
                            {IMT_CATEGORIES.map((cat) => (
                                <div key={cat.label} className={`${cat.color}`} style={{ width: cat.width }} />
                            ))}
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            {IMT_CATEGORIES.map((cat) => (
                                <div key={cat.label} className="flex items-center gap-2">
                                    <div className={`w-3 h-3 rounded-full ${cat.color}`} />
                                    <span className="text-xs text-[#7A7A7A]">
                                        <span className="font-semibold">{cat.label}</span> ({cat.range})
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Target Berat */}
                    <div className="bg-white rounded-2xl shadow-soft p-5">
                        <h3 className="text-sm font-bold text-[#4A4A4A] mb-3 flex items-center gap-2">
                            <Target className="w-4 h-4 text-[#7BAE7F]" /> Target Berat Badan Ideal
                        </h3>
                        <p className="text-sm text-[#7A7A7A] mb-3">
                            Untuk tinggi <strong className="text-[#4A4A4A]">{tinggi} cm</strong>, berat badan ideal Anda:
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="flex-1 bg-[#7BAE7F]/10 rounded-xl p-3 text-center">
                                <div className="text-xl font-extrabold text-[#7BAE7F]">{result.targetMin} kg</div>
                                <div className="text-xs text-[#7A7A7A]">Minimal</div>
                            </div>
                            <div className="text-[#AAAAAA] font-bold">—</div>
                            <div className="flex-1 bg-[#7BAE7F]/10 rounded-xl p-3 text-center">
                                <div className="text-xl font-extrabold text-[#7BAE7F]">{result.targetMax} kg</div>
                                <div className="text-xs text-[#7A7A7A]">Maksimal</div>
                            </div>
                        </div>
                    </div>

                    {/* Rekomendasi */}
                    <div className="bg-white rounded-2xl shadow-soft p-5">
                        <h3 className="text-sm font-bold text-[#4A4A4A] mb-3 flex items-center gap-2">
                            <Info className="w-4 h-4 text-[#F4A261]" /> Rekomendasi
                        </h3>
                        <p className="text-sm text-[#7A7A7A] leading-relaxed">{result.rekomendasi}</p>
                    </div>

                    {/* Rumus IMT */}
                    <div className="bg-[#7BAE7F]/5 border border-[#7BAE7F]/20 rounded-2xl p-4">
                        <p className="text-xs text-[#7A7A7A] leading-relaxed">
                            📐 <strong>Rumus IMT:</strong> {berat} kg ÷ ({tinggi} cm ÷ 100)² = <strong className="text-[#7BAE7F]">{result.imt}</strong>
                        </p>
                        <p className="text-xs text-[#AAAAAA] mt-2">
                            ⚠️ IMT adalah panduan umum. Konsultasikan dengan dokter untuk penilaian kesehatan yang lebih akurat.
                        </p>
                    </div>
                </div>
            )}

            {/* Info table */}
            {!result && (
                <div className="bg-white rounded-2xl shadow-soft p-5">
                    <h3 className="text-sm font-bold text-[#4A4A4A] mb-3">Tabel Kategori IMT</h3>
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-gray-100">
                                <th className="text-left py-2 text-xs font-bold text-[#7A7A7A] uppercase tracking-wide">IMT</th>
                                <th className="text-left py-2 text-xs font-bold text-[#7A7A7A] uppercase tracking-wide">Kategori</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {[
                                { range: '< 18.5', label: 'Kurus', color: 'text-blue-600', bg: 'bg-blue-100' },
                                { range: '18.5 – 24.9', label: 'Normal', color: 'text-green-600', bg: 'bg-green-100' },
                                { range: '25.0 – 29.9', label: 'Overweight', color: 'text-yellow-600', bg: 'bg-yellow-100' },
                                { range: '≥ 30.0', label: 'Obesitas', color: 'text-red-600', bg: 'bg-red-100' },
                            ].map((row) => (
                                <tr key={row.range}>
                                    <td className="py-3 font-bold text-[#4A4A4A]">{row.range}</td>
                                    <td className="py-3">
                                        <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${row.color} ${row.bg}`}>
                                            {row.label}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* ── Hidden Credit Section ── */}
            <div className="mt-16 pt-4 border-t border-gray-100">
                {/* Subtle trigger */}
                <button
                    onClick={() => setShowCredit(!showCredit)}
                    className="mx-auto flex flex-col items-center gap-1 group opacity-30 hover:opacity-70 transition-opacity duration-300"
                    aria-label="Tentang website ini"
                >
                    <span className="text-[10px] text-[#AAAAAA] tracking-widest uppercase font-medium">
                        {showCredit ? 'tutup' : 'tentang'}
                    </span>
                    <div className="w-6 h-0.5 rounded-full bg-[#AAAAAA] group-hover:bg-[#7BAE7F] transition-colors" />
                </button>

                {/* Expandable credit content */}
                {showCredit && (
                    <div className="mt-6 animate-in slide-in-from-bottom-4 duration-500 space-y-6">

                        {/* About program */}
                        <div className="bg-white rounded-3xl shadow-soft p-6 text-center">
                            <div className="w-12 h-12 bg-[#7BAE7F]/15 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">💚</span>
                            </div>
                            <h2 className="text-lg font-extrabold text-[#4A4A4A] mb-2">Tentang Website Ini</h2>
                            <p className="text-sm text-[#7A7A7A] leading-relaxed">
                                Website ini merupakan bagian dari program{' '}
                                <strong className="text-[#4A4A4A]">Praktik Kerja Lapangan (PKL) Gizi Masyarakat</strong>{' '}
                                yang dilaksanakan oleh mahasiswa Program Studi Gizi{' '}
                                <strong className="text-[#4A4A4A]">Universitas Negeri Surabaya</strong>{' '}
                                bekerja sama dengan{' '}
                                <strong className="text-[#4A4A4A]">Puskesmas Gedangan, Sidoarjo</strong>.
                            </p>
                            <p className="text-sm text-[#7A7A7A] leading-relaxed mt-3">
                                Dibuat sebagai media edukasi kesehatan dan gizi, khususnya bagi ibu hamil,
                                untuk mendukung peningkatan pengetahuan dan pemantauan status gizi secara mandiri.
                            </p>
                        </div>

                        {/* Tujuan */}
                        <div className="bg-[#7BAE7F]/5 border border-[#7BAE7F]/20 rounded-2xl p-5">
                            <h3 className="text-sm font-bold text-[#4A4A4A] mb-3">🎯 Tujuan Website</h3>
                            <ul className="space-y-2">
                                {[
                                    'Memberikan edukasi gizi bagi ibu hamil',
                                    'Menyediakan informasi resep sehat',
                                    'Menyediakan media pembelajaran berbasis digital',
                                    'Mendukung program kesehatan masyarakat',
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-2 text-sm text-[#7A7A7A]">
                                        <span className="text-[#7BAE7F] font-bold mt-0.5">✓</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Tim Penyusun */}
                        <div>
                            <h3 className="text-sm font-bold text-[#4A4A4A] mb-3 text-center">👩‍⚕️ Tim Penyusun</h3>
                            <div className="space-y-3">
                                {TEAM.map((member, i) => (
                                    <div
                                        key={member.nim}
                                        className="bg-white rounded-2xl shadow-soft p-4 flex items-center gap-4"
                                    >
                                        {/* Avatar */}
                                        <div className={`w-12 h-12 rounded-2xl ${member.color} flex items-center justify-center flex-shrink-0`}>
                                            <span className="text-white font-extrabold text-lg">{i + 1}</span>
                                        </div>
                                        {/* Info */}
                                        <div className="flex-1 min-w-0">
                                            <p className="font-bold text-[#4A4A4A] text-sm">{member.name}</p>
                                            <p className="text-xs text-[#AAAAAA] font-medium">NIM: {member.nim}</p>
                                        </div>
                                        {/* Instagram */}
                                        <a
                                            href={member.instagram}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex flex-col items-center gap-0.5 text-[#E1306C] hover:opacity-80 transition-opacity flex-shrink-0"
                                            title={member.handle}
                                        >
                                            <Instagram className="w-5 h-5" />
                                            <span className="text-[10px] font-medium">{member.handle}</span>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Footer note */}
                        <p className="text-center text-xs text-[#AAAAAA] pb-2">
                            💚 Dikembangkan sebagai bentuk kontribusi mahasiswa dalam mendukung program
                            peningkatan kesehatan ibu dan anak di wilayah kerja Puskesmas Gedangan, Sidoarjo.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
