<script setup>
import { Link } from '@inertiajs/vue3';

const journal = [
    {
        date: '20 May 2026',
        title: 'Watch: the fringe trim that actually grows out well',
        excerpt: 'Iris demonstrates the soft, curtain-style trim we reach for most — and why the angle matters more than the length.',
        tag: 'Cut & Style',
        photo: '/media/menu/cut-style.jpg',
        duration: '2:14',
    },
    {
        date: '12 May 2026',
        title: 'Our spring colour edit: copper, caramel and quiet brunette',
        excerpt: 'Eleanor walks through the four shades booking out fastest this season — what they suit, how to maintain them, and what to bring to your consultation.',
        tag: 'Colour',
        photo: '/media/menu/colour-highlights.jpg',
        duration: '4:05',
    },
    {
        date: '02 May 2026',
        title: 'A proper bond-builder routine for over-processed hair',
        excerpt: 'Olaplex No. 0 to No. 9, and what to actually use day to day. A practical guide for anyone whose hair has had a hard year.',
        tag: 'Hair Care',
        photo: '/media/menu/treatments.jpg',
        duration: '3:20',
    },
    {
        date: '18 Apr 2026',
        title: 'Bridal trials are now open for summer weddings',
        excerpt: 'Limited Saturday slots through to August. Bring your veil, your accessories and a couple of references — we will do the rest.',
        tag: 'Bridal',
        photo: '/media/menu/bridal-events.jpg',
        duration: '1:58',
    },
];
</script>

<template>
    <section id="journal" class="py-24 lg:py-32 bg-cream-100">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <div class="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-5">
                <div class="max-w-lg">
                    <p class="eyebrow text-brand-600 mb-5">The Journal</p>
                    <h2 class="font-display text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.05] text-warm-900 tracking-display">
                        Notes from <span class="italic font-normal text-brand-700">the chair.</span>
                    </h2>
                </div>
                <Link href="/news-updates"
                    class="inline-flex items-center gap-2 self-start text-[11px] tracking-[0.25em] uppercase font-semibold text-warm-700 hover:text-brand-700 transition-colors border-b border-warm-400 hover:border-brand-700 pb-1">
                    Read the journal
                    <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </Link>
            </div>

            <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                <article v-for="item in journal" :key="item.title"
                    class="group cursor-pointer">
                    <!-- Video thumbnail -->
                    <div class="relative aspect-[4/3] mb-6 overflow-hidden bg-warm-800">
                        <img :src="item.photo" :alt="item.title"
                             class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <!-- Darken for legibility -->
                        <div class="absolute inset-0 bg-warm-900/25 group-hover:bg-warm-900/35 transition-colors"></div>
                        <!-- Play button -->
                        <div class="absolute inset-0 flex items-center justify-center">
                            <div class="w-14 h-14 rounded-full bg-cream-50/95 flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110">
                                <svg class="w-4 h-4 text-brand-700 translate-x-0.5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                        </div>
                        <!-- Duration badge -->
                        <span class="absolute bottom-3 right-3 px-2 py-1 bg-warm-900/80 text-cream-50 text-[10px] tracking-[0.15em] font-semibold">
                            {{ item.duration }}
                        </span>
                    </div>
                    <div class="flex items-center justify-between mb-3">
                        <span class="eyebrow text-accent-500">{{ item.tag }}</span>
                        <time class="text-xs text-warm-400">{{ item.date }}</time>
                    </div>
                    <h3 class="font-display text-2xl font-medium text-warm-900 tracking-display mb-3 leading-snug group-hover:text-brand-700 transition-colors" v-html="item.title">
                    </h3>
                    <p class="text-sm text-warm-600 leading-relaxed mb-5">{{ item.excerpt }}</p>
                    <span class="inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase font-semibold text-brand-700">
                        Read on
                        <svg class="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </span>
                </article>
            </div>
        </div>
    </section>
</template>
