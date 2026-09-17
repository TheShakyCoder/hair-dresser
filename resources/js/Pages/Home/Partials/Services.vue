<script setup>
const services = [
    {
        no: '01',
        title: 'Cut & Style',
        desc: 'Consultation-led cuts, blow-dries and finishing — for hair you can re-create at home.',
        photo: '/media/menu/cut-style.jpg',
    },
    {
        no: '02',
        title: 'Colour & Highlights',
        desc: 'Balayage, foils, gloss and grey blending using vegan, ammonia-free formulas.',
        photo: '/media/menu/colour-highlights.jpg',
    },
    {
        no: '03',
        title: 'Treatments',
        desc: 'Olaplex, K18 and bond-building masks to bring tired hair back to life.',
        photo: '/media/menu/treatments.jpg',
    },
    {
        no: '04',
        title: 'Bridal & Events',
        desc: 'Pre-wedding trials, on-the-day styling and group appointments at the salon or on location.',
        photo: '/media/menu/bridal-events.jpg',
    },
];
</script>

<template>
    <section id="services" class="py-24 lg:py-32 bg-cream-100">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <div class="text-center mb-16 lg:mb-20 max-w-2xl mx-auto">
                <p class="eyebrow text-brand-600 mb-5">The Menu</p>
                <h2 class="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-display leading-[1.05] text-warm-900 mb-6">
                    Four ways into <span class="italic font-normal text-brand-700">the chair</span>
                </h2>
                <p class="text-warm-600 text-[15px] leading-relaxed">
                    Cuts, colour, restorative care and event styling — every appointment starts with a free consultation, so we agree on the plan before we begin.
                </p>
            </div>

            <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
                <a v-for="service in services" :key="service.title"
                    href="#book"
                    class="group block">

                    <!-- Image tile -->
                    <div class="relative aspect-[4/5] overflow-hidden mb-5 bg-warm-800">
                        <img :src="service.photo" :alt="service.title"
                             class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <!-- Legibility gradient -->
                        <div class="absolute inset-0 bg-gradient-to-t from-warm-900/60 via-warm-900/0 to-warm-900/10"></div>
                        <!-- Number -->
                        <p class="absolute top-5 left-5 font-display text-3xl font-medium text-cream-50/95 tracking-display">No. {{ service.no }}</p>
                    </div>

                    <h3 class="font-display text-2xl font-medium text-warm-900 tracking-display mb-2 group-hover:text-brand-700 transition-colors">{{ service.title }}</h3>
                    <p class="text-sm text-warm-600 leading-relaxed mb-4" v-html="service.desc"></p>
                    <span class="inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase font-semibold text-brand-700">
                        Book {{ service.title }}
                        <svg class="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </span>
                </a>
            </div>
        </div>
    </section>
</template>
