/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{svelte,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                cyber: {
                    cyan: '#00f2ff',
                    purple: '#7000ff',
                    pink: '#ff00c8',
                    dark: '#050505',
                    card: 'rgba(20, 20, 23, 0.7)',
                }
            },
            backgroundImage: {
                'cyber-gradient': 'linear-gradient(135deg, #00f2ff 0%, #7000ff 100%)',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                }
            }
        },
    },
    plugins: [],
}
