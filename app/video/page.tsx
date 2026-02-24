'use client';

import { useState } from 'react';
import { VIDEOS, VIDEO_CATEGORIES } from '@/lib/data/videos';
import Link from 'next/link';
import { Search, PlayCircle, ArrowLeft, Clock } from 'lucide-react';

export default function VideoPage() {
    const [search, setSearch] = useState('');
    const [activeCategory, setActiveCategory] = useState('Semua');

    const filtered = VIDEOS.filter((v) => {
        const matchCat = activeCategory === 'Semua' || v.category === activeCategory;
        const matchSearch =
            v.title.toLowerCase().includes(search.toLowerCase()) ||
            v.description.toLowerCase().includes(search.toLowerCase());
        return matchCat && matchSearch;
    });

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            {/* Header */}
            <div className="mb-8">
                <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#7A7A7A] hover:text-[#7BAE7F] mb-4">
                    <ArrowLeft className="w-4 h-4" /> Kembali
                </Link>
                <h1 className="text-3xl font-extrabold text-[#4A4A4A]">Video Edukasi</h1>
                <p className="text-[#7A7A7A] mt-1">Pelajari gizi dan kesehatan lewat video panduan ahli</p>
            </div>

            {/* Search */}
            <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#AAAAAA]" />
                <input
                    type="text"
                    placeholder="Cari video edukasi..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[#7BAE7F]/40 focus:border-[#7BAE7F] shadow-soft"
                />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto pb-3 mb-8">
                {VIDEO_CATEGORIES.map((cat) => (
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

            {/* Count */}
            <p className="text-sm text-[#7A7A7A] mb-5">
                Menampilkan <span className="font-semibold text-[#7BAE7F]">{filtered.length}</span> video
            </p>

            {/* Video Grid */}
            {filtered.length === 0 ? (
                <div className="text-center py-20">
                    <PlayCircle className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                    <p className="text-[#AAAAAA] font-medium">Video tidak ditemukan</p>
                    <button onClick={() => { setSearch(''); setActiveCategory('Semua'); }} className="mt-3 text-sm text-[#7BAE7F] font-semibold hover:underline">
                        Reset filter
                    </button>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtered.map((video) => (
                        <Link
                            key={video.id}
                            href={`/video/${video.id}`}
                            className="group bg-white rounded-2xl shadow-soft hover:shadow-card hover:-translate-y-1 transition-all overflow-hidden"
                        >
                            {/* Thumbnail */}
                            <div className="relative h-44 bg-gradient-to-br from-[#7BAE7F]/20 to-[#F6C1C7]/20 overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-14 h-14 bg-white/80 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                        <PlayCircle className="w-8 h-8 text-[#7BAE7F]" />
                                    </div>
                                </div>
                                <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-0.5 rounded-lg">
                                    {video.duration}
                                </div>
                            </div>
                            {/* Info */}
                            <div className="p-4">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-xs font-bold text-[#7BAE7F] bg-[#7BAE7F]/10 px-2 py-0.5 rounded-full">
                                        {video.category}
                                    </span>
                                    <span className="text-xs text-[#AAAAAA] flex items-center gap-1">
                                        <Clock className="w-3 h-3" /> {video.duration}
                                    </span>
                                </div>
                                <h2 className="font-bold text-[#4A4A4A] line-clamp-2 group-hover:text-[#7BAE7F] transition-colors mb-1">
                                    {video.title}
                                </h2>
                                <p className="text-xs text-[#7A7A7A] line-clamp-2">{video.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
