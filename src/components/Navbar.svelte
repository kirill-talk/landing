<script lang="ts">
    import { onMount } from "svelte";

    let scrolled = false;

    onMount(() => {
        const handleScroll = () => {
            scrolled = window.scrollY > 50;
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });
</script>

<nav
    class="fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 py-4"
    class:py-3={scrolled}
>
    <div class="max-w-7xl mx-auto flex items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center gap-2 group cursor-pointer">
            <div
                class="w-10 h-10 bg-aether-gradient rounded-xl flex items-center justify-center shadow-aether-glow group-hover:scale-110 transition-transform duration-500"
            >
                <svg
                    class="w-6 h-6 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.5"
                >
                    <path
                        d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </div>
            <span
                class="text-xl font-heading font-black tracking-tighter text-white uppercase group-hover:text-aether-cyan transition-colors"
            >
                Aether<span class="text-aether-blue">AI</span>
            </span>
        </div>

        <!-- Nav Links (Glass container) -->
        <div
            class="hidden md:flex items-center gap-1 p-1 aether-glass rounded-full px-6 py-2"
        >
            {#each ["Features", "Stats", "Pricing", "Docs"] as link}
                <a
                    href="#{link.toLowerCase()}"
                    class="px-5 py-2 text-sm font-bold text-slate-400 hover:text-white transition-colors relative group"
                >
                    {link}
                    <span
                        class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-aether-gradient transition-all duration-300 group-hover:w-full"
                    ></span>
                </a>
            {/each}
        </div>

        <!-- CTA -->
        <div class="flex items-center gap-4">
            <button
                class="hidden sm:block text-sm font-bold text-slate-300 hover:text-white transition-colors"
            >
                Login
            </button>
            <button class="btn-aether-primary !py-2.5 !px-6 !text-xs">
                Get Started
            </button>
        </div>
    </div>
</nav>

<style>
    nav {
        transform: translateY(0);
    }
</style>
