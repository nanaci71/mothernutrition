import Link from 'next/link';
import { ARTICLES, CATEGORIES } from '@/lib/data/articles';
import { RECIPES } from '@/lib/data/recipes';
import { VIDEOS } from '@/lib/data/videos';
import Footer from '@/components/Footer';
import {
  ArrowRight, BookOpen, UtensilsCrossed, PlayCircle, Scale,
  Leaf, Heart, Activity
} from 'lucide-react';

export default function HomePage() {
  const latestArticles = ARTICLES.slice(0, 6);
  const featuredRecipes = RECIPES.slice(0, 3);
  const featuredVideos = VIDEOS.slice(0, 2);

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#7BAE7F]/20 via-[#FFF8F5] to-[#F6C1C7]/20 pt-10 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Text */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-[#7BAE7F]/15 text-[#5A8F5E] text-sm font-semibold px-4 py-2 rounded-full mb-5">
                <Leaf className="w-4 h-4" />
                Platform Edukasi Gizi Terpercaya
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-[#4A4A4A] leading-tight mb-4">
                Hidup Sehat<br />
                <span className="text-[#7BAE7F]">Dimulai dari</span><br />
                Gizi yang Tepat
              </h1>
              <p className="text-[#7A7A7A] text-lg leading-relaxed mb-8 max-w-md">
                Edukasi gizi lengkap, resep sehat, video panduan, dan kalkulator IMT —
                semua yang dibutuhkan ibu hamil dan keluarga Indonesia.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <Link
                  href="/imt"
                  className="inline-flex items-center gap-2 bg-[#7BAE7F] text-white font-bold px-6 py-3 rounded-2xl hover:bg-[#5A8F5E] shadow-lg shadow-[#7BAE7F]/30 hover:-translate-y-0.5 transition-all"
                >
                  <Scale className="w-5 h-5" />
                  Hitung IMT Saya
                </Link>
                <Link
                  href="/resep"
                  className="inline-flex items-center gap-2 bg-white text-[#7BAE7F] font-bold px-6 py-3 rounded-2xl border-2 border-[#7BAE7F]/30 hover:border-[#7BAE7F] hover:-translate-y-0.5 transition-all"
                >
                  <UtensilsCrossed className="w-5 h-5" />
                  Lihat Resep Sehat
                </Link>
              </div>
            </div>

            {/* Stats cards */}
            <div className="flex-1 grid grid-cols-2 gap-4 w-full max-w-sm md:max-w-none">
              {[
                { icon: BookOpen, value: `${ARTICLES.length}+`, label: 'Artikel Edukasi', color: '#7BAE7F', bg: '#7BAE7F/10' },
                { icon: UtensilsCrossed, value: `${RECIPES.length}+`, label: 'Resep Sehat', color: '#F4A261', bg: '#F4A261/10' },
                { icon: PlayCircle, value: `${VIDEOS.length}+`, label: 'Video Edukasi', color: '#F6C1C7', bg: '#F6C1C7/20' },
                { icon: Activity, value: 'Gratis', label: 'Kalkulator IMT', color: '#5A8F5E', bg: '#5A8F5E/10' },
              ].map(({ icon: Icon, value, label, color }) => (
                <div key={label} className="bg-white rounded-2xl p-5 shadow-soft hover:shadow-card transition-shadow">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ backgroundColor: `${color}20` }}>
                    <Icon className="w-5 h-5" style={{ color }} />
                  </div>
                  <div className="text-2xl font-extrabold" style={{ color }}>{value}</div>
                  <div className="text-xs text-[#7A7A7A] font-medium mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* KATEGORI EDUKASI */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-extrabold text-[#4A4A4A]">Kategori Materi</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {CATEGORIES.map((cat, i) => {
            const colors = ['#7BAE7F', '#F4A261', '#F6C1C7', '#5A8F5E'];
            const color = colors[i % colors.length];
            return (
              <Link
                key={cat}
                href={`/artikel?category=${encodeURIComponent(cat)}`}
                className="group bg-white rounded-2xl p-5 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all border border-transparent hover:border-[#7BAE7F]/20"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ backgroundColor: `${color}20` }}>
                  <Heart className="w-5 h-5" style={{ color }} />
                </div>
                <p className="font-bold text-sm text-[#4A4A4A] group-hover:text-[#7BAE7F] transition-colors">{cat}</p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ARTIKEL TERBARU */}
      <section className="max-w-6xl mx-auto px-4 pb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-extrabold text-[#4A4A4A]">Artikel Terbaru</h2>
          <Link href="/artikel" className="text-sm font-semibold text-[#7BAE7F] hover:underline flex items-center gap-1">
            Lihat Semua <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestArticles.map((article) => (
            <Link
              key={article.id}
              href={`/artikel/${article.slug}`}
              className="group bg-white rounded-2xl shadow-soft hover:shadow-card hover:-translate-y-1 transition-all overflow-hidden"
            >
              <div className="h-44 bg-gradient-to-br from-[#7BAE7F]/20 to-[#F6C1C7]/20 flex items-center justify-center">
                <BookOpen className="w-12 h-12 text-[#7BAE7F]/50" />
              </div>
              <div className="p-5">
                <span className="inline-block text-xs font-bold text-[#7BAE7F] bg-[#7BAE7F]/10 px-3 py-1 rounded-full mb-3">
                  {article.category}
                </span>
                <h3 className="font-bold text-[#4A4A4A] line-clamp-2 group-hover:text-[#7BAE7F] transition-colors mb-2">
                  {article.title}
                </h3>
                <p className="text-sm text-[#7A7A7A] line-clamp-2">{article.excerpt}</p>
                <div className="flex items-center gap-1 mt-4 text-sm font-semibold text-[#7BAE7F]">
                  Baca Selengkapnya <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* HIGHLIGHT RESEP */}
      <section className="bg-gradient-to-r from-[#F4A261]/10 to-[#F6C1C7]/10 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-extrabold text-[#4A4A4A]">Resep Sehat Pilihan</h2>
              <p className="text-sm text-[#7A7A7A] mt-1">Mudah dibuat, bergizi tinggi</p>
            </div>
            <Link href="/resep" className="text-sm font-semibold text-[#F4A261] hover:underline flex items-center gap-1">
              Semua Resep <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredRecipes.map((recipe) => (
              <Link
                key={recipe.id}
                href={`/resep/${recipe.slug}`}
                className="group bg-white rounded-2xl shadow-soft hover:shadow-card hover:-translate-y-1 transition-all overflow-hidden"
              >
                <div className="h-40 bg-gradient-to-br from-[#F4A261]/20 to-[#F6C1C7]/20 flex items-center justify-center">
                  <UtensilsCrossed className="w-10 h-10 text-[#F4A261]/60" />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-[#F4A261] bg-[#F4A261]/10 px-2 py-0.5 rounded-full">
                      {recipe.category}
                    </span>
                    <span className="text-xs text-[#7A7A7A]">⏱ {recipe.duration}</span>
                  </div>
                  <h3 className="font-bold text-[#4A4A4A] line-clamp-2 group-hover:text-[#F4A261] transition-colors">
                    {recipe.title}
                  </h3>

                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* HIGHLIGHT VIDEO */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-extrabold text-[#4A4A4A]">Video Edukasi</h2>
            <p className="text-sm text-[#7A7A7A] mt-1">Panduan visual dari ahli kesehatan</p>
          </div>
          <Link href="/video" className="text-sm font-semibold text-[#7BAE7F] hover:underline flex items-center gap-1">
            Semua Video <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredVideos.map((video) => (
            <Link
              key={video.id}
              href={`/video/${video.id}`}
              className="group bg-white rounded-2xl shadow-soft hover:shadow-card hover:-translate-y-1 transition-all overflow-hidden flex"
            >
              <div className="w-36 h-28 bg-gradient-to-br from-[#7BAE7F]/20 to-[#F6C1C7]/20 flex-shrink-0 flex items-center justify-center">
                <PlayCircle className="w-10 h-10 text-[#7BAE7F]/60" />
              </div>
              <div className="p-4 flex-1">
                <span className="text-xs font-bold text-[#7BAE7F] bg-[#7BAE7F]/10 px-2 py-0.5 rounded-full">
                  {video.category}
                </span>
                <h3 className="font-bold text-[#4A4A4A] text-sm mt-2 line-clamp-2 group-hover:text-[#7BAE7F] transition-colors">
                  {video.title}
                </h3>
                <p className="text-xs text-[#AAAAAA] mt-1">⏱ {video.duration}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA KALKULATOR IMT */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="bg-gradient-to-r from-[#7BAE7F] to-[#5A8F5E] rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/3 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/3 -translate-x-1/3" />
          <div className="relative">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Scale className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-extrabold mb-3">Cek IMT Anda Sekarang</h2>
            <p className="text-white/80 text-lg mb-6 max-w-md mx-auto">
              Ketahui status berat badan dan dapatkan rekomendasi kesehatan personal — gratis!
            </p>
            <Link
              href="/imt"
              className="inline-flex items-center gap-2 bg-white text-[#7BAE7F] font-bold px-8 py-3 rounded-2xl hover:bg-[#FFF8F5] hover:-translate-y-0.5 shadow-lg transition-all"
            >
              <Scale className="w-5 h-5" />
              Mulai Kalkulator IMT
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
