<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

defineProps({
    site: { type: Object },
});

const slides = [
    { src: '/media/hero/curls-balayage.jpg', alt: 'Half-up balayage curls styled at the salon' },
    { src: '/media/hero/bridal-updo.jpg', alt: 'Bridal updo finished with fresh roses' },
    { src: '/media/hero/braided-waves.jpg', alt: 'Braided half-up style with soft beach waves' },
    { src: '/media/hero/box-braids-texture.jpg', alt: 'Close-up texture of finished box braids' },
    { src: '/media/hero/colour-braids.jpg', alt: 'Vivid colour braids showcasing our colour range' },
];

const active = ref(0);
let timer = null;

function goTo(i) {
    active.value = (i + slides.length) % slides.length;
}
function next() {
    goTo(active.value + 1);
}

onMounted(() => {
    timer = setInterval(next, 4500);
});
onUnmounted(() => {
    clearInterval(timer);
});
</script>

<template>
    <section id="home" class="relative overflow-hidden bg-cream-50">

        <!-- Subtle blush / champagne glow -->
        <div class="absolute inset-0 pointer-events-none">
            <div class="absolute top-0 right-0 w-[640px] h-[640px] rounded-full bg-accent-100/50 blur-3xl"></div>
            <div class="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-brand-100/60 blur-3xl"></div>
        </div>

        <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 lg:pt-24 pb-20 lg:pb-28">
            <div class="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                <!-- ── Left: Copy ── -->
                <div class="lg:col-span-7">
                    <p class="eyebrow text-brand-600 mb-6">
                        Cuts · Colour · Care · Since {{ site.established }}
                    </p>

                    <h1 class="font-display text-[44px] sm:text-6xl lg:text-7xl xl:text-[88px] font-medium leading-[1.02] text-warm-900 tracking-display mb-8">
                        Beautiful hair,<br />
                        <span class="italic font-normal text-brand-700">honest pricing,</span><br />
                        a chair that's yours.
                    </h1>

                    <p class="text-base sm:text-lg text-warm-600 leading-relaxed mb-10 max-w-lg">
                        A small Penwortham salon of senior stylists and colourists, working with low-tox products and unhurried appointments. Walk in with an idea — leave with hair you'd photograph.
                    </p>

                    <div class="flex flex-wrap gap-4 items-center">
                        <a href="#book"
                            class="inline-flex items-center gap-3 px-9 py-4 bg-brand-700 text-cream-50 text-[11px] tracking-[0.25em] uppercase font-semibold hover:bg-brand-800 transition-colors">
                            Book a Chair
                            <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                        <a href="#services"
                            class="inline-flex items-center gap-2 px-2 py-4 text-[11px] tracking-[0.25em] uppercase font-semibold text-warm-700 hover:text-brand-700 transition-colors border-b border-warm-400 hover:border-brand-700">
                            View the Menu
                        </a>
                    </div>

                    <!-- Trust strip -->
                    <div class="flex flex-wrap items-center gap-x-10 gap-y-4 mt-14 pt-8 border-t border-warm-200">
                        <div class="flex items-center gap-2 text-warm-600">
                            <span class="text-brand-600 text-base">✦</span>
                            <span class="text-xs tracking-wider uppercase">Senior stylists only</span>
                        </div>
                        <div class="flex items-center gap-2 text-warm-600">
                            <span class="text-accent-500 text-base">✦</span>
                            <span class="text-xs tracking-wider uppercase">Vegan colour range</span>
                        </div>
                        <div class="flex items-center gap-2 text-warm-600">
                            <span class="text-scent-amber text-base">✦</span>
                            <span class="text-xs tracking-wider uppercase">Free consultation</span>
                        </div>
                    </div>
                </div>

                <!-- ── Right: Salon visual ── -->
                <div class="lg:col-span-5 relative">
                    <div class="relative aspect-[4/5] w-full max-w-md mx-auto">

                        <!-- Backdrop card with rose/champagne gradient + faint grain -->
                        <div class="absolute -inset-3 bg-gradient-to-br from-brand-200/80 via-cream-100 to-accent-200/60 overflow-hidden">
                            <div class="absolute inset-0 opacity-[0.06]"
                                 style="background-image: radial-gradient(circle, #181311 1px, transparent 1px); background-size: 22px 22px;"></div>
                        </div>

                        <!-- Photo carousel -->
                        <div class="relative w-full h-full overflow-hidden shadow-[0_30px_60px_-15px_rgba(45,40,32,0.35)]">
                            <img v-for="(slide, i) in slides"
                                 :key="slide.src"
                                 :src="slide.src"
                                 :alt="slide.alt"
                                 class="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
                                 :class="i === active ? 'opacity-100' : 'opacity-0'"
                                 loading="eager" />

                            <!-- Bottom gradient for legibility -->
                            <div class="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-warm-900/50 to-transparent pointer-events-none"></div>

                            <!-- Dots -->
                            <div class="absolute bottom-4 inset-x-0 flex items-center justify-center gap-2">
                                <button v-for="(slide, i) in slides" :key="i"
                                        @click="goTo(i)"
                                        :aria-label="`Show slide ${i + 1}`"
                                        class="h-1.5 rounded-full transition-all"
                                        :class="i === active ? 'w-6 bg-cream-50' : 'w-1.5 bg-cream-50/50 hover:bg-cream-50/80'">
                                </button>
                            </div>
                        </div>

                        <!-- Floating product chips -->
                        <div class="hidden lg:block absolute top-6 -left-6 bg-cream-50 border border-warm-200 px-3 py-2 shadow-sm animate-float-slow">
                            <p class="text-[10px] tracking-[0.25em] uppercase text-warm-500">Next slot</p>
                            <p class="font-display text-base text-warm-900">Tomorrow</p>
                        </div>
                        <div class="hidden lg:block absolute bottom-20 -right-4 bg-cream-50 border border-warm-200 px-3 py-2 shadow-sm animate-float">
                            <p class="text-[10px] tracking-[0.25em] uppercase text-warm-500">Cuts from</p>
                            <p class="font-display text-base text-warm-900">&pound;38</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
