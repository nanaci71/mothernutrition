import { ARTICLES, CATEGORIES } from '@/lib/data/articles';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, BookOpen, ArrowRight } from 'lucide-react';

export default function ArtikelPage({
    searchParams,
}: {
    searchParams: { category?: string };
}) {
    const activeCategory = searchParams.category || 'Semua';
    const filtered = activeCategory === 'Semua'
        ? ARTICLES
        : ARTICLES.filter((a) => a.category === activeCategory);

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="mb-8">
                <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#7A7A7A] hover:text-[#7BAE7F] mb-4">
                    <ArrowLeft className="w-4 h-4" /> Kembali
                </Link>
                <h1 className="text-3xl font-extrabold text-[#4A4A4A]">Artikel Edukasi</h1>
                <p className="text-[#7A7A7A] mt-1">Informasi gizi dan kesehatan terpercaya</p>
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto pb-3 mb-8">
                {['Semua', ...CATEGORIES].map((cat) => (
                    <Link
                        key={cat}
                        href={`/artikel${cat === 'Semua' ? '' : `?category=${encodeURIComponent(cat)}`}`}
                        className={`flex-shrink-0 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${activeCategory === cat
                            ? 'bg-[#7BAE7F] text-white shadow-sm'
                            : 'bg-white text-[#7A7A7A] border border-gray-200 hover:border-[#7BAE7F]/50'
                            }`}
                    >
                        {cat}
                    </Link>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((article) => (
                    <Link
                        key={article.id}
                        href={`/artikel/${article.slug}`}
                        className="group bg-white rounded-2xl shadow-soft hover:shadow-card hover:-translate-y-1 transition-all overflow-hidden"
                    >
                        <div className="h-44 bg-gradient-to-br from-[#7BAE7F]/20 to-[#F6C1C7]/20 flex items-center justify-center relative overflow-hidden">
                            {article.image ? (
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                            ) : (
                                <BookOpen className="w-10 h-10 text-[#7BAE7F]/40 group-hover:scale-110 transition-transform" />
                            )}
                        </div>
                        <div className="p-5">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-xs font-bold text-[#7BAE7F] bg-[#7BAE7F]/10 px-2 py-0.5 rounded-full">
                                    {article.category}
                                </span>
                                <span className="text-xs text-[#AAAAAA]">
                                    {new Date(article.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}
                                </span>
                            </div>
                            <h2 className="font-bold text-[#4A4A4A] line-clamp-2 group-hover:text-[#7BAE7F] transition-colors mb-2">
                                {article.title}
                            </h2>
                            <p className="text-sm text-[#7A7A7A] line-clamp-3">{article.excerpt}</p>
                            <div className="flex items-center gap-1 mt-4 text-sm font-semibold text-[#7BAE7F]">
                                Baca Selengkapnya <ArrowRight className="w-4 h-4" />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
