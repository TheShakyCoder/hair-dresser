<script setup>
import { Link } from '@inertiajs/vue3';

defineProps({
    title: { type: String, default: '' },
    subtitle: { type: String, default: '' },
});
</script>

<template>
    <div class="min-h-screen flex font-sans antialiased bg-cream-50">

        <!-- ── Left brand panel ── -->
        <div class="hidden lg:flex lg:w-1/2 xl:w-5/12 flex-col bg-brand-gradient text-white relative overflow-hidden">

            <!-- Soft glow blobs -->
            <div class="absolute -top-20 -left-20 w-72 h-72 bg-brand-400/30 rounded-full blur-3xl pointer-events-none"></div>
            <div class="absolute -bottom-24 -right-16 w-80 h-80 bg-accent-500/20 rounded-full blur-3xl pointer-events-none"></div>

            <!-- Back to site -->
            <div class="relative px-10 pt-10">
                <Link href="/" class="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium transition-colors">
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                    </svg>
                    Back to the salon
                </Link>
            </div>

            <!-- Centre content -->
            <div class="relative flex-1 flex flex-col justify-center px-10 xl:px-14">
                <Link href="/" class="flex items-center gap-4 mb-12">
                    <div class="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                        <svg class="w-8 h-auto" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 80 L65 35" stroke="#fdf8f5" stroke-width="6" stroke-linecap="round"/>
                            <path d="M20 20 L65 65" stroke="#fdf8f5" stroke-width="6" stroke-linecap="round"/>
                            <circle cx="45" cy="50" r="3.5" fill="#c2953d"/>
                            <circle cx="14" cy="82" r="9" stroke="#fdf8f5" stroke-width="5" fill="none"/>
                            <circle cx="14" cy="18" r="9" stroke="#fdf8f5" stroke-width="5" fill="none"/>
                        </svg>
                    </div>
                    <div>
                        <p class="font-display font-semibold text-2xl leading-tight tracking-display">Acme Hairdressers</p>
                        <p class="text-xs uppercase tracking-[0.3em] text-white/60 mt-1">Cuts · Colour · Care</p>
                    </div>
                </Link>

                <h1 class="font-display text-3xl xl:text-4xl font-semibold leading-tight mb-4 tracking-display">
                    The Studio
                </h1>
                <p class="text-white/75 text-base leading-relaxed mb-10 max-w-sm">
                    Manage stylists, appointments, the team rota and journal entries — everything behind the scenes at the salon.
                </p>

                <ul class="space-y-4">
                    <li v-for="item in [
                        { icon: '✦', text: 'Manage stylists and service menus' },
                        { icon: '✎', text: 'Publish journal entries and seasonal looks' },
                        { icon: '◇', text: 'Track bookings and client history' },
                        { icon: '⌂', text: 'Review the team rota and chair occupancy' },
                    ]" :key="item.text" class="flex items-center gap-3 text-white/80 text-sm">
                        <span class="w-8 h-8 bg-white/15 rounded-full flex items-center justify-center text-base shrink-0 text-accent-200">{{ item.icon }}</span>
                        {{ item.text }}
                    </li>
                </ul>
            </div>

            <div class="relative px-10 pb-10">
                <p class="text-white/40 text-xs">&copy; {{ new Date().getFullYear() }} Acme Hairdressers</p>
            </div>
        </div>

        <!-- ── Right form panel ── -->
        <div class="flex-1 flex flex-col bg-cream-50">

            <!-- Mobile header -->
            <div class="lg:hidden flex items-center justify-between px-6 pt-6 pb-4">
                <Link href="/" class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-full bg-brand-600 flex items-center justify-center">
                        <svg class="w-5 h-auto" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 80 L65 35" stroke="#fdf8f5" stroke-width="6" stroke-linecap="round"/>
                            <path d="M20 20 L65 65" stroke="#fdf8f5" stroke-width="6" stroke-linecap="round"/>
                            <circle cx="45" cy="50" r="3.5" fill="#c2953d"/>
                            <circle cx="14" cy="82" r="9" stroke="#fdf8f5" stroke-width="5" fill="none"/>
                            <circle cx="14" cy="18" r="9" stroke="#fdf8f5" stroke-width="5" fill="none"/>
                        </svg>
                    </div>
                    <div>
                        <p class="font-display font-semibold text-brand-700 text-lg leading-tight tracking-display">Acme Hairdressers</p>
                    </div>
                </Link>
                <Link href="/" class="text-xs text-warm-500 hover:text-brand-600 transition-colors font-medium">
                    Back to salon
                </Link>
            </div>

            <!-- Form area -->
            <div class="flex-1 flex items-center justify-center px-6 py-10 sm:px-10">
                <div class="w-full max-w-md">
                    <div class="mb-8">
                        <h2 class="font-display text-3xl font-semibold text-warm-900 tracking-display">{{ title }}</h2>
                        <p v-if="subtitle" class="text-warm-500 text-sm mt-2">{{ subtitle }}</p>
                    </div>

                    <slot />
                </div>
            </div>
        </div>

    </div>
</template>
