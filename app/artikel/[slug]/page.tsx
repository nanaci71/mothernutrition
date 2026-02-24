import { ARTICLES } from '@/lib/data/articles';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, Tag, BookOpen } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export function generateStaticParams() {
    return ARTICLES.map((a) => ({ slug: a.slug }));
}

export default async function DetailArtikelPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const article = ARTICLES.find((a) => a.slug === slug);
    if (!article) notFound();

    return (
        <div className="max-w-2xl mx-auto px-4 py-8">
            <Link href="/artikel" className="inline-flex items-center gap-2 text-sm text-[#7A7A7A] hover:text-[#7BAE7F] mb-6 font-medium">
                <ArrowLeft className="w-4 h-4" /> Kembali ke Artikel
            </Link>

            <div className="w-full h-56 bg-gradient-to-br from-[#7BAE7F]/20 to-[#F6C1C7]/20 rounded-3xl flex items-center justify-center mb-6 relative overflow-hidden">
                {article!.image ? (
                    <Image
                        src={article!.image}
                        alt={article!.title}
                        fill
                        className="object-cover rounded-3xl"
                        sizes="(max-width: 768px) 100vw, 672px"
                        priority
                    />
                ) : (
                    <BookOpen className="w-12 h-12 text-[#7BAE7F]/40" />
                )}
            </div>

            <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="flex items-center gap-1 text-xs font-bold text-[#7BAE7F] bg-[#7BAE7F]/10 px-3 py-1 rounded-full">
                    <Tag className="w-3 h-3" /> {article!.category}
                </span>
                <span className="flex items-center gap-1 text-xs text-[#7A7A7A]">
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(article!.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                </span>
            </div>

            <h1 className="text-2xl md:text-3xl font-extrabold text-[#4A4A4A] mb-3 leading-tight">
                {article!.title}
            </h1>
            <p className="text-[#7A7A7A] text-base mb-8 leading-relaxed">{article!.excerpt}</p>

            <div className="bg-white rounded-2xl shadow-soft p-6 md:p-8 prose prose-sm max-w-none">
                <ReactMarkdown>{article!.content}</ReactMarkdown>
            </div>

            <div className="mt-6 p-4 bg-[#F6C1C7]/20 rounded-xl border border-[#F6C1C7]/40">
                <p className="text-xs text-[#7A7A7A] leading-relaxed">
                    ⚠️ <strong>Catatan:</strong> Konten ini bersifat edukatif. Selalu konsultasikan kondisi kesehatan Anda dengan dokter atau tenaga medis profesional.
                </p>
            </div>
        </div>
    );
}
