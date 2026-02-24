import { VIDEOS } from '@/lib/data/videos';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock, ExternalLink } from 'lucide-react';

export function generateStaticParams() {
    return VIDEOS.map((v) => ({ id: String(v.id) }));
}

export default async function DetailVideoPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const video = VIDEOS.find((v) => String(v.id) === id);
    if (!video) notFound();

    const embedUrl = `https://www.youtube.com/embed/${video!.youtube_id}?rel=0&modestbranding=1`;

    return (
        <div className="max-w-3xl mx-auto px-4 py-8">
            <Link href="/video" className="inline-flex items-center gap-2 text-sm text-[#7A7A7A] hover:text-[#7BAE7F] mb-6 font-medium">
                <ArrowLeft className="w-4 h-4" /> Kembali ke Video
            </Link>

            <div className="flex items-center gap-2 mb-3 flex-wrap">
                <span className="text-xs font-bold text-[#7BAE7F] bg-[#7BAE7F]/10 px-3 py-1 rounded-full">
                    {video!.category}
                </span>
                <span className="text-xs text-[#7A7A7A] flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {video!.duration}
                </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-[#4A4A4A] mb-4">{video!.title}</h1>

            <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-lg mb-6 bg-black">
                <iframe
                    src={embedUrl}
                    title={video!.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                />
            </div>

            <div className="bg-white rounded-2xl shadow-soft p-6">
                <h2 className="text-base font-extrabold text-[#4A4A4A] mb-3">Tentang Video Ini</h2>
                <p className="text-[#7A7A7A] leading-relaxed text-sm">{video!.description}</p>

                <a
                    href={video!.youtube_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-[#7BAE7F] hover:underline"
                >
                    Tonton di YouTube <ExternalLink className="w-4 h-4" />
                </a>
            </div>
        </div>
    );
}
