/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#7BAE7F',
                    light: '#9DC4A1',
                    dark: '#5A8F5E',
                },
                secondary: {
                    DEFAULT: '#F6C1C7',
                    light: '#FAD9DC',
                    dark: '#E89BA3',
                },
                accent: {
                    DEFAULT: '#F4A261',
                    light: '#F7BC8D',
                    dark: '#E0843B',
                },
                bg: {
                    DEFAULT: '#FFF8F5',
                    card: '#FFFFFF',
                },
                text: {
                    DEFAULT: '#4A4A4A',
                    light: '#7A7A7A',
                    muted: '#AAAAAA',
                },
            },
            fontFamily: {
                sans: ['var(--font-nunito)', 'Nunito', 'sans-serif'],
            },
            borderRadius: {
                xl: '1rem',
                '2xl': '1.5rem',
                '3xl': '2rem',
            },
            boxShadow: {
                soft: '0 4px 24px rgba(0, 0, 0, 0.06)',
                card: '0 2px 16px rgba(0, 0, 0, 0.08)',
                lg: '0 8px 32px rgba(0, 0, 0, 0.10)',
            },
        },
    },
    plugins: [],
};
