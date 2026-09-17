<script setup>
const team = [
    {
        no: 'No. 01',
        name: 'Eleanor Marsh',
        role: 'Founder · Master Colourist',
        notes: 'Balayage · Grey blending · Redken Master',
        years: '18 yrs',
        tag: 'Founder',
        tagColor: 'bg-brand-700 text-cream-50',
        photo: '/media/team/eleanor.jpg',
    },
    {
        no: 'No. 02',
        name: 'Iris Whittaker',
        role: 'Senior Stylist',
        notes: 'Precision cuts · Curtain bangs · Curl specialist',
        years: '11 yrs',
        tag: 'Senior',
        tagColor: 'bg-accent-500 text-cream-50',
        photo: '/media/team/iris.jpg',
    },
    {
        no: 'No. 03',
        name: 'Saoirse Doyle',
        role: 'Colour Technician',
        notes: 'Lived-in blondes · Foilyage · Toning',
        years: '9 yrs',
        tag: 'Colour',
        tagColor: 'bg-scent-rose text-cream-50',
        photo: '/media/team/saoirse.jpg',
    },
    {
        no: 'No. 04',
        name: 'Theo Ainsworth',
        role: 'Stylist · Bridal',
        notes: 'Updos · Editorial finishing · On-location',
        years: '7 yrs',
        tag: 'Bridal',
        tagColor: 'bg-scent-cedar text-cream-50',
        photo: '/media/team/theo.jpg',
    },
];
</script>

<template>
    <section id="team" class="py-24 lg:py-32 bg-cream-50">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <div class="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-5">
                <div class="max-w-lg">
                    <p class="eyebrow text-brand-600 mb-5">The Team</p>
                    <h2 class="font-display text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.05] text-warm-900 tracking-display">
                        Stylists who <span class="italic font-normal text-brand-700">listen</span> first.
                    </h2>
                </div>
                <a href="#book"
                    class="inline-flex items-center gap-2 self-start text-[11px] tracking-[0.25em] uppercase font-semibold text-warm-700 hover:text-brand-700 transition-colors border-b border-warm-400 hover:border-brand-700 pb-1">
                    Book with a stylist
                    <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </a>
            </div>

            <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                <article v-for="member in team" :key="member.name"
                    class="group cursor-pointer">

                    <div class="relative aspect-square overflow-hidden mb-5 bg-warm-800">
                        <img :src="member.photo" :alt="member.name"
                             class="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                        <!-- Legibility gradient -->
                        <div class="absolute inset-0 bg-gradient-to-t from-warm-900/50 via-transparent to-transparent"></div>

                        <!-- Tag -->
                        <span class="absolute top-4 left-4 px-3 py-1.5 text-[10px] tracking-[0.2em] uppercase font-semibold"
                              :class="member.tagColor">
                            {{ member.tag }}
                        </span>

                        <!-- Years badge -->
                        <span class="absolute top-4 right-4 px-2.5 py-1 bg-cream-50/95 text-warm-800 text-[10px] tracking-[0.2em] uppercase font-semibold">
                            {{ member.years }}
                        </span>
                    </div>

                    <p class="eyebrow text-warm-400 mb-2">{{ member.no }}</p>
                    <h3 class="font-display text-xl font-medium text-warm-900 tracking-display mb-1 leading-snug group-hover:text-brand-700 transition-colors">{{ member.name }}</h3>
                    <p class="text-sm text-warm-700 mb-3">{{ member.role }}</p>
                    <p class="text-xs text-warm-500 italic leading-relaxed mb-4">{{ member.notes }}</p>
                    <span class="text-[11px] tracking-[0.2em] uppercase font-semibold text-brand-700 group-hover:underline">Book {{ member.name.split(' ')[0] }}</span>
                </article>
            </div>
        </div>
    </section>
</template>
