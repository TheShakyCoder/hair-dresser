import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
                display: ['Fraunces', 'Cormorant Garamond', ...defaultTheme.fontFamily.serif],
            },
            colors: {
                // Rose / burgundy — the salon's signature jewel tone
                brand: {
                    50:  '#fbf3f3',
                    100: '#f5e1e3',
                    200: '#ecc3c8',
                    300: '#d99aa3',
                    400: '#bd6c79',
                    500: '#9a4a5a',
                    600: '#7a3645',
                    700: '#5f2a37',
                    800: '#4a212c',
                    900: '#2b121a',
                },
                // Champagne / gold — luxury accent for highlights and trim
                accent: {
                    50:  '#fbf6ec',
                    100: '#f4e8cf',
                    200: '#e8d09c',
                    300: '#d6b266',
                    400: '#c2953d',
                    500: '#a3792a',
                    600: '#825f20',
                    700: '#604718',
                },
                // Warm parchment / blush-tinted cream
                cream: {
                    50:  '#fdf8f5',
                    100: '#fbeee8',
                    200: '#f4dcd2',
                    300: '#e8c0b1',
                },
                // Salon palette pops — used for service categories
                scent: {
                    sage:    '#9aa088',
                    rose:    '#bd6c79',
                    amber:   '#c2953d',
                    smoke:   '#7d7468',
                    cedar:   '#7b5a3d',
                    eucal:   '#6a7d76',
                },
                // Legacy alias retained so existing dashboard / admin pages don't break
                lens: {
                    teal:   '#6a7d76',
                    sky:    '#9aa088',
                    indigo: '#5f2a37',
                    rose:   '#bd6c79',
                    amber:  '#c2953d',
                    slate:  '#7d7468',
                },
                // Warm neutrals — tinted toward beige/taupe
                warm: {
                    50:  '#faf6f3',
                    100: '#f1ebe5',
                    200: '#e2d8cf',
                    300: '#c8b9ac',
                    400: '#9d8a7a',
                    500: '#766457',
                    600: '#5a4c42',
                    700: '#3f342c',
                    800: '#332a24',
                    900: '#231d19',
                },
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0) rotate(var(--tw-rotate, 0deg))' },
                    '50%': { transform: 'translateY(-20px) rotate(var(--tw-rotate, 0deg))' },
                },
                'float-slow': {
                    '0%, 100%': { transform: 'translateY(0) rotate(var(--tw-rotate, 0deg))' },
                    '50%': { transform: 'translateY(-30px) rotate(var(--tw-rotate, 0deg))' },
                },
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' },
                },
                'scale-pulse': {
                    '0%, 100%': { transform: 'scale(1)' },
                    '50%': { transform: 'scale(1.05)' },
                },
                shimmer: {
                    '0%, 100%': { opacity: '0.7' },
                    '50%':      { opacity: '1' },
                },
                snip: {
                    '0%, 100%': { transform: 'rotate(0deg)' },
                    '50%':      { transform: 'rotate(-12deg)' },
                },
            },
            animation: {
                float: 'float 5s ease-in-out infinite',
                'float-slow': 'float-slow 7s ease-in-out infinite',
                'float-delayed': 'float 6s ease-in-out 1s infinite',
                wiggle: 'wiggle 3s ease-in-out infinite',
                'scale-pulse': 'scale-pulse 4s ease-in-out infinite',
                shimmer: 'shimmer 3.5s ease-in-out infinite',
                snip: 'snip 2.4s ease-in-out infinite',
            },
        },
    },

    plugins: [forms, typography],
};
