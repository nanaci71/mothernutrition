'use client';

import Link from 'next/link';
import { useState } from 'react';
import { RECIPES, RECIPE_CATEGORIES } from '@/lib/data/recipes';
import { Search, UtensilsCrossed, Clock, ArrowLeft } from 'lucide-react';

export default function ResepPage() {
    const [search, setSearch] = useState('');
    const [activeCategory, setActiveCategory] = useState('Semua');

    const filtered = RECIPES.filter((r) => {
        const matchCat = activeCategory === 'Semua' || r.category === activeCategory;
        const matchSearch =
            r.title.toLowerCase().includes(search.toLowerCase()) ||
            r.description.toLowerCase().includes(search.toLowerCase());
        return matchCat && matchSearch;
    });

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            {/* Header */}
            <div className="mb-8">
                <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#7A7A7A] hover:text-[#7BAE7F] mb-4">
                    <ArrowLeft className="w-4 h-4" /> Kembali
                </Link>
                <h1 className="text-3xl font-extrabold text-[#4A4A4A]">Resep Sehat</h1>
                <p className="text-[#7A7A7A] mt-1">Resep bergizi tinggi yang mudah dibuat di rumah</p>
            </div>

            {/* Search */}
            <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#AAAAAA]" />
                <input
                    type="text"
                    placeholder="Cari resep..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[#7BAE7F]/40 focus:border-[#7BAE7F] shadow-soft"
                />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto pb-3 mb-8 scrollbar-hide">
                {RECIPE_CATEGORIES.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`flex-shrink-0 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${activeCategory === cat
                            ? 'bg-[#7BAE7F] text-white shadow-sm'
                            : 'bg-white text-[#7A7A7A] border border-gray-200 hover:border-[#7BAE7F]/50'
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Results count */}
            <p className="text-sm text-[#7A7A7A] mb-5">
                Menampilkan <span className="font-semibold text-[#7BAE7F]">{filtered.length}</span> resep
            </p>

            {/* Recipe Grid */}
            {filtered.length === 0 ? (
                <div className="text-center py-20">
                    <UtensilsCrossed className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                    <p className="text-[#AAAAAA] font-medium">Resep tidak ditemukan</p>
                    <button onClick={() => { setSearch(''); setActiveCategory('Semua'); }} className="mt-3 text-sm text-[#7BAE7F] font-semibold hover:underline">
                        Reset filter
                    </button>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    {filtered.map((recipe) => (
                        <Link
                            key={recipe.id}
                            href={`/resep/${recipe.slug}`}
                            className="group bg-white rounded-2xl shadow-soft hover:shadow-card hover:-translate-y-1 transition-all overflow-hidden"
                        >
                            <div className="h-40 bg-gradient-to-br from-[#F4A261]/20 to-[#F6C1C7]/20 flex items-center justify-center">
                                <UtensilsCrossed className="w-10 h-10 text-[#F4A261]/50 group-hover:scale-110 transition-transform" />
                            </div>
                            <div className="p-4">
                                <span className="inline-block text-xs font-bold text-[#F4A261] bg-[#F4A261]/10 px-2 py-0.5 rounded-full mb-2">
                                    {recipe.category}
                                </span>
                                <h2 className="font-bold text-[#4A4A4A] line-clamp-2 text-sm group-hover:text-[#F4A261] transition-colors mb-2">
                                    {recipe.title}
                                </h2>
                                <p className="text-xs text-[#7A7A7A] line-clamp-2 mb-3">{recipe.description}</p>
                                <div className="flex items-center text-xs text-[#7A7A7A]">
                                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {recipe.duration}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
