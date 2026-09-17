<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { Link } from '@inertiajs/vue3';

defineProps({
    navLinks: Array,
    canLogin: Boolean,
    canRegister: Boolean,
    auth: Object,
});

const mobileMenuOpen = ref(false);
const openDropdown = ref(null);

function closeDropdowns() {
    openDropdown.value = null;
}

function handleClickOutside(e) {
    if (e.target.closest('nav') === null) closeDropdowns();
}

onMounted(() => {
    document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside);
});
</script>

<template>
    <header>
        <!-- Announcement bar -->
        <div class="bg-brand-700 text-cream-50 text-center text-[11px] tracking-[0.25em] uppercase py-2 px-4">
            New clients · 15% off your first colour appointment this month
        </div>

        <nav class="sticky top-0 z-50 bg-cream-50/95 backdrop-blur-sm border-b border-warm-200/70">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="flex h-20 items-center justify-between">

                    <!-- Logo -->
                    <Link href="/" class="flex items-center gap-3 shrink-0">
                        <div class="w-11 h-11 rounded-full bg-brand-gradient flex items-center justify-center shadow-sm">
                            <svg class="w-5 h-auto" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 80 L65 35" stroke="#fdf8f5" stroke-width="6" stroke-linecap="round"/>
                                <path d="M20 20 L65 65" stroke="#fdf8f5" stroke-width="6" stroke-linecap="round"/>
                                <circle cx="45" cy="50" r="3.5" fill="#c2953d"/>
                                <circle cx="14" cy="82" r="9" stroke="#fdf8f5" stroke-width="5" fill="none"/>
                                <circle cx="14" cy="18" r="9" stroke="#fdf8f5" stroke-width="5" fill="none"/>
                            </svg>
                        </div>
                        <div class="block">
                            <p class="text-xl font-semibold text-brand-800 leading-none font-display tracking-display">Acme Hairdressers</p>
                            <p class="text-[10px] text-warm-500 tracking-[0.3em] uppercase leading-none mt-1.5 font-sans font-medium">Cuts · Colour · Care</p>
                        </div>
                    </Link>

                    <!-- Desktop nav -->
                    <div class="hidden lg:flex items-center gap-1">
                        <div v-for="(link, idx) in navLinks" :key="idx" class="relative group">
                            <Link v-if="!link.children || link.children.length === 0" :href="link.href"
                                class="px-3 py-2 text-[12px] tracking-[0.2em] uppercase font-semibold text-warm-700 hover:text-brand-700 transition-colors">
                                {{ link.label }}
                            </Link>
                            <button v-else type="button"
                                class="px-3 py-2 text-[12px] tracking-[0.2em] uppercase font-semibold text-warm-700 hover:text-brand-700 transition-colors flex items-center gap-1"
                                @click="openDropdown = openDropdown === idx ? null : idx">
                                {{ link.label }}
                                <svg class="w-3 h-3 transition-transform" :class="{ 'rotate-180': openDropdown === idx }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            <div v-if="link.children && link.children.length > 0 && openDropdown === idx"
                                 class="absolute left-0 mt-2 w-56 bg-cream-50 border border-warm-200 shadow-lg">
                                <Link v-for="(child, cidx) in link.children" :key="cidx" :href="child.href"
                                   class="block px-5 py-3 text-sm text-warm-700 hover:bg-brand-50 hover:text-brand-700 transition-colors border-b border-warm-100 last:border-b-0">
                                    {{ child.label }}
                                </Link>
                            </div>
                        </div>
                    </div>

                    <!-- CTA buttons -->
                    <div class="hidden lg:flex items-center gap-4">
                        <Link v-if="canLogin && !$page.props.auth?.user" :href="route('login')"
                            class="text-[12px] tracking-[0.2em] uppercase font-semibold text-warm-600 hover:text-brand-700 transition-colors">
                        Account
                        </Link>
                        <Link v-if="canLogin && $page.props.auth?.user" :href="route('dashboard')"
                            class="text-[12px] tracking-[0.2em] uppercase font-semibold text-warm-600 hover:text-brand-700 transition-colors">
                        Studio
                        </Link>
                        <a href="#book"
                            class="px-6 py-3 bg-brand-700 text-cream-50 text-[11px] tracking-[0.25em] uppercase font-semibold hover:bg-brand-800 transition-colors">
                            Book a Chair
                        </a>
                    </div>

                    <!-- Mobile hamburger -->
                    <button @click="mobileMenuOpen = !mobileMenuOpen"
                        class="lg:hidden p-2 text-warm-700 hover:text-brand-700 transition-colors">
                        <svg v-if="!mobileMenuOpen" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        <svg v-else class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Mobile menu -->
            <div v-if="mobileMenuOpen" class="lg:hidden border-t border-warm-200 bg-cream-50 px-4 pb-6 pt-3 space-y-1">
                <template v-for="(link, idx) in navLinks" :key="idx">
                    <a v-if="!link.children || link.children.length === 0" :href="link.href" @click="mobileMenuOpen = false"
                        class="block px-4 py-3 text-[12px] tracking-[0.2em] uppercase font-semibold text-warm-700 hover:text-brand-700 transition-colors border-b border-warm-100">
                        {{ link.label }}
                    </a>
                    <div v-else>
                        <button @click="openDropdown = openDropdown === idx ? null : idx"
                            class="w-full text-left px-4 py-3 text-[12px] tracking-[0.2em] uppercase font-semibold text-warm-700 hover:text-brand-700 transition-colors flex items-center justify-between border-b border-warm-100">
                            {{ link.label }}
                            <svg class="w-3 h-3 transition-transform" :class="{ 'rotate-180': openDropdown === idx }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div v-if="openDropdown === idx" class="ml-4 mt-1 space-y-1">
                            <a v-for="(child, cidx) in link.children" :key="cidx" :href="child.href" @click="mobileMenuOpen = false"
                               class="block px-4 py-2.5 text-sm text-warm-600 hover:text-brand-700 transition-colors">
                                {{ child.label }}
                            </a>
                        </div>
                    </div>
                </template>
                <div class="pt-4 flex flex-col gap-3">
                    <Link v-if="canLogin && !$page.props.auth?.user" :href="route('login')"
                        class="block px-4 py-2.5 text-[12px] tracking-[0.2em] uppercase font-semibold text-warm-600 hover:text-brand-700 transition-colors">
                    Account
                    </Link>
                    <a href="#book" @click="mobileMenuOpen = false"
                        class="block text-center px-4 py-3 bg-brand-700 text-cream-50 text-[11px] tracking-[0.25em] uppercase font-semibold hover:bg-brand-800 transition-colors">
                        Book a Chair
                    </a>
                </div>
            </div>
        </nav>
    </header>
</template>
