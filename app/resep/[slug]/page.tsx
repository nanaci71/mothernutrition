import { RECIPES } from '@/lib/data/recipes';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock, UtensilsCrossed, CheckCircle2 } from 'lucide-react';

export function generateStaticParams() {
    return RECIPES.map((r) => ({ slug: r.slug }));
}

export default async function DetailResepPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const recipe = RECIPES.find((r) => r.slug === slug);
    if (!recipe) notFound();

    const isContohMenu = recipe!.category === 'Contoh Menu';

    return (
        <div className="max-w-2xl mx-auto px-4 py-8">
            <Link href="/resep" className="inline-flex items-center gap-2 text-sm text-[#7A7A7A] hover:text-[#7BAE7F] mb-6 font-medium">
                <ArrowLeft className="w-4 h-4" /> Kembali ke Resep
            </Link>

            {/* Hero thumbnail — hanya untuk resep biasa */}
            {!isContohMenu && (
                <div className="w-full h-56 bg-gradient-to-br from-[#F4A261]/25 to-[#F6C1C7]/25 rounded-3xl flex items-center justify-center mb-6 relative overflow-hidden">
                    {recipe!.image ? (
                        <Image
                            src={recipe!.image}
                            alt={recipe!.title}
                            fill
                            className="object-cover rounded-3xl"
                            sizes="(max-width: 768px) 100vw, 672px"
                        />
                    ) : (
                        <UtensilsCrossed className="w-16 h-16 text-[#F4A261]/50" />
                    )}
                </div>
            )}

            <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="text-xs font-bold text-[#F4A261] bg-[#F4A261]/10 px-3 py-1 rounded-full">
                    {recipe!.category}
                </span>
                {!isContohMenu && (
                    <span className="flex items-center gap-1 text-xs text-[#7A7A7A]">
                        <Clock className="w-3.5 h-3.5" /> {recipe!.duration}
                    </span>
                )}
            </div>

            <h1 className="text-2xl md:text-3xl font-extrabold text-[#4A4A4A] mb-3">{recipe!.title}</h1>
            <p className="text-[#7A7A7A] leading-relaxed mb-6">{recipe!.description}</p>

            {isContohMenu ? (
                /* ── Contoh Menu: gambar PNG tampil penuh sebagai isi konten ── */
                recipe!.image && (
                    <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
                        <Image
                            src={recipe!.image}
                            alt={recipe!.title}
                            width={1200}
                            height={1600}
                            className="w-full h-auto"
                            sizes="(max-width: 768px) 100vw, 672px"
                            priority
                        />
                    </div>
                )
            ) : (
                /* ── Resep biasa: bahan-bahan & cara membuat ── */
                <>
                    <div className="bg-white rounded-2xl shadow-soft p-6 mb-6">
                        <h2 className="text-lg font-extrabold text-[#4A4A4A] mb-4 flex items-center gap-2">
                            <span className="w-7 h-7 bg-[#7BAE7F]/20 rounded-lg flex items-center justify-center text-[#7BAE7F] text-sm">🥦</span>
                            Bahan-Bahan
                        </h2>
                        <ul className="space-y-2">
                            {recipe!.ingredients.map((ing, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-[#4A4A4A]">
                                    <div className="w-5 h-5 rounded-full bg-[#7BAE7F]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-[#7BAE7F] text-xs font-bold">{i + 1}</span>
                                    </div>
                                    {ing}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-white rounded-2xl shadow-soft p-6">
                        <h2 className="text-lg font-extrabold text-[#4A4A4A] mb-4 flex items-center gap-2">
                            <span className="w-7 h-7 bg-[#F4A261]/20 rounded-lg flex items-center justify-center text-sm">👨‍🍳</span>
                            Cara Membuat
                        </h2>
                        <ol className="space-y-4">
                            {recipe!.steps.map((step, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <div className="w-7 h-7 rounded-full bg-[#F4A261] flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-white text-xs font-extrabold">{i + 1}</span>
                                    </div>
                                    <p className="text-sm text-[#4A4A4A] leading-relaxed pt-1">{step}</p>
                                </li>
                            ))}
                        </ol>
                        <div className="mt-6 p-4 bg-[#7BAE7F]/10 rounded-xl flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-[#7BAE7F] flex-shrink-0" />
                            <p className="text-sm text-[#5A8F5E] font-medium">Selamat mencoba! Sajikan selagi hangat untuk rasa terbaik. 😊</p>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
