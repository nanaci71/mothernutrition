'use client';

import { useState } from 'react';
import { VIDEOS, VIDEO_CATEGORIES } from '@/lib/data/videos';
import { LEAFLETS, LEAFLET_CATEGORIES } from '@/lib/data/leaflets';
import { BOOKLETS, BOOKLET_CATEGORIES } from '@/lib/data/booklets';
import Link from 'next/link';
import {
    Search, PlayCircle, ArrowLeft, Clock,
    BookOpen, FileText, Download, ChevronLeft, ChevronRight, X, ExternalLink,
} from 'lucide-react';

type MediaTab = 'VIDEO' | 'LEAFLET' | 'BOOKLET';

// ─── PDF Slider Modal ─────────────────────────────────────────────────────────
function PdfSliderModal({
    items,
    initialIndex,
    onClose,
}: {
    items: { title: string; fileUrl: string; color: string }[];
    initialIndex: number;
    onClose: () => void;
}) {
    const [current, setCurrent] = useState(initialIndex);
    const item = items[current];

    return (
        <div className="fixed inset-0 z-50 flex flex-col bg-black/90 backdrop-blur-sm">
            {/* Top bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-black/60 flex-shrink-0">
                {/* Prev */}
                <button
                    onClick={() => setCurrent((c) => Math.max(0, c - 1))}
                    disabled={current === 0}
                    className="p-2 rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-30 transition-all text-white"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Title + counter */}
                <div className="text-center flex-1 px-4">
                    <p className="text-white font-bold text-sm line-clamp-1">{item.title}</p>
                    <p className="text-white/50 text-xs mt-0.5">{current + 1} / {items.length}</p>
                </div>

                {/* Next & close */}
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setCurrent((c) => Math.min(items.length - 1, c + 1))}
                        disabled={current === items.length - 1}
                        className="p-2 rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-30 transition-all text-white"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-xl bg-white/10 hover:bg-red-500/60 transition-all text-white"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* PDF Embed */}
            <div className="flex-1 overflow-hidden">
                <iframe
                    key={item.fileUrl}
                    src={`${item.fileUrl}#toolbar=1&navpanes=0&scrollbar=1&view=FitH`}
                    className="w-full h-full border-0"
                    title={item.title}
                />
            </div>

            {/* Thumbnail dots + download */}
            <div className="flex items-center justify-between px-4 py-3 bg-black/60 flex-shrink-0">
                {/* Dot indicators */}
                <div className="flex gap-1.5">
                    {items.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            className={`h-2 rounded-full transition-all ${i === current ? 'w-6 bg-white' : 'w-2 bg-white/30'}`}
                        />
                    ))}
                </div>
                {/* Download */}
                <a
                    href={item.fileUrl}
                    download
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-white/70 hover:text-white transition-colors"
                >
                    <Download className="w-4 h-4" /> Unduh PDF
                </a>
            </div>
        </div>
    );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function MediaEdukasi() {
    const [activeTab, setActiveTab] = useState<MediaTab>('VIDEO');
    const [search, setSearch] = useState('');
    const [activeCategory, setActiveCategory] = useState('Semua');

    // Slider state
    const [sliderOpen, setSliderOpen] = useState(false);
    const [sliderItems, setSliderItems] = useState<{ title: string; fileUrl: string; color: string }[]>([]);
    const [sliderInitial, setSliderInitial] = useState(0);

    const openSlider = (items: { title: string; fileUrl: string; color: string }[], index: number) => {
        setSliderItems(items);
        setSliderInitial(index);
        setSliderOpen(true);
    };

    const handleTabChange = (tab: MediaTab) => {
        setActiveTab(tab);
        setActiveCategory('Semua');
        setSearch('');
    };

    const tabs: { id: MediaTab; label: string; icon: React.ReactNode }[] = [
        { id: 'VIDEO', label: 'Video', icon: <PlayCircle className="w-4 h-4" /> },
        { id: 'LEAFLET', label: 'Leaflet', icon: <FileText className="w-4 h-4" /> },
        { id: 'BOOKLET', label: 'Booklet', icon: <BookOpen className="w-4 h-4" /> },
    ];

    const currentCategories =
        activeTab === 'VIDEO' ? VIDEO_CATEGORIES :
            activeTab === 'LEAFLET' ? LEAFLET_CATEGORIES :
                BOOKLET_CATEGORIES;

    const filteredVideos = VIDEOS.filter((v) => {
        const matchCat = activeCategory === 'Semua' || v.category === activeCategory;
        const matchSearch =
            v.title.toLowerCase().includes(search.toLowerCase()) ||
            v.description.toLowerCase().includes(search.toLowerCase());
        return matchCat && matchSearch;
    });

    const filteredLeaflets = LEAFLETS.filter((l) => {
        const matchCat = activeCategory === 'Semua' || l.category === activeCategory;
        const matchSearch =
            l.title.toLowerCase().includes(search.toLowerCase()) ||
            l.description.toLowerCase().includes(search.toLowerCase());
        return matchCat && matchSearch;
    });

    const filteredBooklets = BOOKLETS.filter((b) => {
        const matchCat = activeCategory === 'Semua' || b.category === activeCategory;
        const matchSearch =
            b.title.toLowerCase().includes(search.toLowerCase()) ||
            b.description.toLowerCase().includes(search.toLowerCase());
        return matchCat && matchSearch;
    });

    const placeholderText =
        activeTab === 'VIDEO' ? 'Cari video edukasi...' :
            activeTab === 'LEAFLET' ? 'Cari leaflet...' :
                'Cari booklet...';

    // Slider item arrays
    const leafletSliderItems = LEAFLETS.map((l) => ({ title: l.title, fileUrl: l.fileUrl, color: l.color }));
    const bookletSliderItems = BOOKLETS.map((b) => ({ title: b.title, fileUrl: b.fileUrl, color: b.color }));

    return (
        <>
            {/* PDF Slider Modal */}
            {sliderOpen && (
                <PdfSliderModal
                    items={sliderItems}
                    initialIndex={sliderInitial}
                    onClose={() => setSliderOpen(false)}
                />
            )}

            <div className="max-w-6xl mx-auto px-4 py-8">
                {/* Header */}
                <div className="mb-6">
                    <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#7A7A7A] hover:text-[#7BAE7F] mb-4">
                        <ArrowLeft className="w-4 h-4" /> Kembali
                    </Link>
                    <h1 className="text-3xl font-extrabold text-[#4A4A4A]">Media Edukasi</h1>
                    <p className="text-[#7A7A7A] mt-1">Pelajari gizi dan kesehatan lewat berbagai media edukatif</p>
                </div>

                {/* Tabs */}
                <div className="flex gap-1 bg-gray-100 p-1 rounded-2xl mb-6">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => handleTabChange(tab.id)}
                            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold transition-all ${activeTab === tab.id
                                    ? 'bg-white text-[#7BAE7F] shadow-sm'
                                    : 'text-[#7A7A7A] hover:text-[#4A4A4A]'
                                }`}
                        >
                            {tab.icon}
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Search */}
                <div className="relative mb-5">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#AAAAAA]" />
                    <input
                        type="text"
                        placeholder={placeholderText}
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[#7BAE7F]/40 focus:border-[#7BAE7F] shadow-soft"
                    />
                </div>

                {/* Category Filter */}
                <div className="flex gap-2 overflow-x-auto pb-3 mb-6">
                    {currentCategories.map((cat) => (
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

                {/* ===== VIDEO TAB ===== */}
                {activeTab === 'VIDEO' && (
                    <>
                        <p className="text-sm text-[#7A7A7A] mb-5">
                            Menampilkan <span className="font-semibold text-[#7BAE7F]">{filteredVideos.length}</span> video
                        </p>
                        {filteredVideos.length === 0 ? (
                            <EmptyState
                                icon={<PlayCircle className="w-12 h-12 text-gray-300 mx-auto mb-4" />}
                                label="Video tidak ditemukan"
                                onReset={() => { setSearch(''); setActiveCategory('Semua'); }}
                            />
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredVideos.map((video) => (
                                    <Link
                                        key={video.id}
                                        href={`/video/${video.id}`}
                                        className="group bg-white rounded-2xl shadow-soft hover:shadow-card hover:-translate-y-1 transition-all overflow-hidden"
                                    >
                                        <div className="relative h-44 bg-gradient-to-br from-[#7BAE7F]/20 to-[#F6C1C7]/20 overflow-hidden">
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-14 h-14 bg-white/80 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                                    <PlayCircle className="w-8 h-8 text-[#7BAE7F]" />
                                                </div>
                                            </div>
                                            <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-0.5 rounded-lg flex items-center gap-1">
                                                <Clock className="w-3 h-3" /> {video.duration}
                                            </div>
                                        </div>
                                        <div className="p-4">
                                            <span className="text-xs font-bold text-[#7BAE7F] bg-[#7BAE7F]/10 px-2 py-0.5 rounded-full">
                                                {video.category}
                                            </span>
                                            <h2 className="font-bold text-[#4A4A4A] line-clamp-2 group-hover:text-[#7BAE7F] transition-colors mt-2 mb-1">
                                                {video.title}
                                            </h2>
                                            <p className="text-xs text-[#7A7A7A] line-clamp-2">{video.description}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </>
                )}

                {/* ===== LEAFLET TAB ===== */}
                {activeTab === 'LEAFLET' && (
                    <>
                        <p className="text-sm text-[#7A7A7A] mb-5">
                            Menampilkan <span className="font-semibold text-[#7BAE7F]">{filteredLeaflets.length}</span> leaflet
                            <span className="text-xs ml-2 text-[#AAAAAA]">— tap kartu untuk membuka</span>
                        </p>
                        {filteredLeaflets.length === 0 ? (
                            <EmptyState
                                icon={<FileText className="w-12 h-12 text-gray-300 mx-auto mb-4" />}
                                label="Leaflet tidak ditemukan"
                                onReset={() => { setSearch(''); setActiveCategory('Semua'); }}
                            />
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                {filteredLeaflets.map((leaflet, i) => {
                                    const idx = LEAFLETS.findIndex((l) => l.id === leaflet.id);
                                    return (
                                        <button
                                            key={leaflet.id}
                                            onClick={() => openSlider(leafletSliderItems, idx)}
                                            className="group text-left bg-white rounded-2xl shadow-soft hover:shadow-card hover:-translate-y-1 transition-all overflow-hidden w-full"
                                        >
                                            {/* Color banner */}
                                            <div
                                                className="h-28 flex items-center justify-center relative overflow-hidden"
                                                style={{ background: `linear-gradient(135deg, ${leaflet.color}40, ${leaflet.color}20)` }}
                                            >
                                                <FileText className="w-14 h-14" style={{ color: leaflet.color }} />
                                                {/* Open hint */}
                                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all flex items-center justify-center">
                                                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-xs font-bold bg-black/40 px-3 py-1.5 rounded-lg flex items-center gap-1">
                                                        <ExternalLink className="w-3.5 h-3.5" /> Buka PDF
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="p-4">
                                                <div className="flex items-center justify-between mb-1.5">
                                                    <span
                                                        className="text-xs font-bold px-2 py-0.5 rounded-full"
                                                        style={{ color: leaflet.color, background: `${leaflet.color}25` }}
                                                    >
                                                        {leaflet.category}
                                                    </span>
                                                    <span className="text-xs text-[#AAAAAA]">{leaflet.pages} hal</span>
                                                </div>
                                                <h2 className="font-bold text-[#4A4A4A] line-clamp-1 mb-1 group-hover:text-[#7BAE7F] transition-colors">
                                                    {leaflet.title}
                                                </h2>
                                                <p className="text-xs text-[#7A7A7A] line-clamp-2">{leaflet.description}</p>
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>
                        )}
                    </>
                )}

                {/* ===== BOOKLET TAB ===== */}
                {activeTab === 'BOOKLET' && (
                    <>
                        <p className="text-sm text-[#7A7A7A] mb-5">
                            Menampilkan <span className="font-semibold text-[#7BAE7F]">{filteredBooklets.length}</span> booklet
                            <span className="text-xs ml-2 text-[#AAAAAA]">— tap kartu untuk membuka</span>
                        </p>
                        {filteredBooklets.length === 0 ? (
                            <EmptyState
                                icon={<BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-4" />}
                                label="Booklet tidak ditemukan"
                                onReset={() => { setSearch(''); setActiveCategory('Semua'); }}
                            />
                        ) : (
                            <div className="grid grid-cols-1 gap-5">
                                {filteredBooklets.map((booklet) => {
                                    const idx = BOOKLETS.findIndex((b) => b.id === booklet.id);
                                    return (
                                        <button
                                            key={booklet.id}
                                            onClick={() => openSlider(bookletSliderItems, idx)}
                                            className="group text-left bg-white rounded-2xl shadow-soft hover:shadow-card hover:-translate-y-1 transition-all overflow-hidden flex w-full"
                                        >
                                            {/* Side banner */}
                                            <div
                                                className="w-36 flex-shrink-0 flex items-center justify-center relative"
                                                style={{ background: `linear-gradient(180deg, ${booklet.color}40, ${booklet.color}20)` }}
                                            >
                                                <BookOpen className="w-12 h-12" style={{ color: booklet.color }} />
                                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all" />
                                            </div>
                                            {/* Info */}
                                            <div className="p-5 flex flex-col justify-between flex-1">
                                                <div>
                                                    <div className="flex items-center justify-between mb-2">
                                                        <span
                                                            className="text-xs font-bold px-2 py-0.5 rounded-full"
                                                            style={{ color: booklet.color, background: `${booklet.color}25` }}
                                                        >
                                                            {booklet.category}
                                                        </span>
                                                        <span className="text-xs text-[#AAAAAA]">{booklet.pages} hal</span>
                                                    </div>
                                                    <h2 className="font-bold text-[#4A4A4A] group-hover:text-[#7BAE7F] transition-colors mb-2">{booklet.title}</h2>
                                                    <p className="text-xs text-[#7A7A7A] line-clamp-3">{booklet.description}</p>
                                                </div>
                                                <span className="inline-flex items-center gap-1.5 mt-4 text-xs font-bold text-[#7BAE7F]">
                                                    <ExternalLink className="w-3.5 h-3.5" /> Buka Booklet
                                                </span>
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>
                        )}
                    </>
                )}
            </div>
        </>
    );
}

function EmptyState({
    icon, label, onReset,
}: {
    icon: React.ReactNode;
    label: string;
    onReset: () => void;
}) {
    return (
        <div className="text-center py-20">
            {icon}
            <p className="text-[#AAAAAA] font-medium">{label}</p>
            <button onClick={onReset} className="mt-3 text-sm text-[#7BAE7F] font-semibold hover:underline">
                Reset filter
            </button>
        </div>
    );
}
