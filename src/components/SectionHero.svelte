<script lang="ts">
    import { onMount } from "svelte";
    import Editable from "./Editable.svelte";

    export let content: any;
    export let editing = false;

    let visible = false;
    onMount(() => {
        visible = true;
    });
</script>

<section
    class="relative min-h-[110vh] w-full flex items-center pt-24 overflow-hidden"
>
    <!-- Mesh Background (Section Specific) -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
        <div
            class="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-aether-blue/20 blur-[150px] animate-pulse"
        ></div>
        <div
            class="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-aether-violet/20 blur-[120px] animate-pulse-slow"
        ></div>
    </div>

    <div
        class="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10 w-full"
    >
        <!-- Left: Content -->
        <div class="space-y-8" class:animate-fade-in={visible}>
            <div
                class="inline-flex items-center gap-2 px-4 py-1.5 aether-glass rounded-full border-aether-blue/20"
            >
                <span class="w-2 h-2 bg-aether-cyan rounded-full animate-ping"
                ></span>
                <span
                    class="text-xs font-bold uppercase tracking-widest text-aether-cyan"
                >
                    <Editable
                        bind:value={content.hero.badge}
                        {editing}
                        on:change={(e) => (content.hero.badge = e.detail)}
                    />
                </span>
            </div>

            <h1
                class="text-6xl md:text-8xl font-heading font-black leading-[1.05] tracking-tight"
            >
                <Editable
                    bind:value={content.hero.title}
                    {editing}
                    multiline
                    on:change={(e) => (content.hero.title = e.detail)}
                />
            </h1>

            <p
                class="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed"
            >
                <Editable
                    bind:value={content.hero.subtitle}
                    {editing}
                    multiline
                    on:change={(e) => (content.hero.subtitle = e.detail)}
                />
            </p>

            <div class="flex flex-wrap gap-6 pt-4">
                <button class="btn-aether-primary">
                    {content?.hero?.primaryCTA || "Start Trading Now"}
                </button>
                <button
                    class="btn-aether-secondary group flex items-center gap-3"
                >
                    {content?.hero?.secondaryCTA || "See the Demo"}
                    <svg
                        class="w-5 h-5 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                    </svg>
                </button>
            </div>

            <!-- Trust Badges (Minimalist) -->
            <div
                class="pt-12 flex items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-700"
            >
                <div class="flex flex-col">
                    <span class="text-2xl font-black text-white">2.5M+</span>
                    <span
                        class="text-[10px] uppercase tracking-widest font-bold"
                        >Active Users</span
                    >
                </div>
                <div class="w-px h-10 bg-white/10"></div>
                <div class="flex flex-col">
                    <span class="text-2xl font-black text-white">$40B+</span>
                    <span
                        class="text-[10px] uppercase tracking-widest font-bold"
                        >Volume Traded</span
                    >
                </div>
            </div>
        </div>

        <!-- Right: Visual Asset (Abstract Glass Node) -->
        <div
            class="relative hidden lg:block"
            class:animate-float-premium={visible}
        >
            <div class="relative w-full aspect-square">
                <!-- Floating Glass Orbitals -->
                <div
                    class="absolute inset-0 bg-aether-gradient blur-[100px] opacity-20 scale-150"
                ></div>

                <div
                    class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full aether-glass rounded-full border-white/5 shadow-2xl flex items-center justify-center p-8 overflow-hidden"
                >
                    <!-- Animated Graph Silhouette -->
                    <svg
                        class="w-full h-1/2 text-aether-blue/20"
                        viewBox="0 0 400 200"
                    >
                        <path
                            d="M0,150 Q50,140 100,100 T200,80 T300,120 T400,40"
                            stroke="currentColor"
                            stroke-width="4"
                            fill="none"
                        />
                        <path
                            d="M0,180 Q80,160 150,120 T300,90 T400,110"
                            stroke="aether-teal"
                            stroke-width="2"
                            fill="none"
                            opacity="0.3"
                            stroke-dasharray="10 5"
                        />
                    </svg>

                    <!-- Gloss Effect -->
                    <div
                        class="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"
                    ></div>
                </div>

                <!-- Floating Accent Cards -->
                <div
                    class="absolute top-0 -right-8 aether-glass p-6 rounded-2xl shadow-2xl animate-float-premium"
                    style="animation-delay: 1s"
                >
                    <div
                        class="w-12 h-2 bg-aether-teal rounded-full mb-3"
                    ></div>
                    <div class="w-24 h-2 bg-white/10 rounded-full"></div>
                </div>

                <div
                    class="absolute bottom-12 -left-12 aether-glass p-6 rounded-2xl shadow-2xl animate-float-premium"
                    style="animation-delay: 2s"
                >
                    <div class="flex items-center gap-3">
                        <div class="w-8 h-8 bg-aether-blue/20 rounded-lg"></div>
                        <div class="space-y-2">
                            <div
                                class="w-20 h-2 bg-white/20 rounded-full"
                            ></div>
                            <div
                                class="w-12 h-2 bg-white/10 rounded-full"
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    .animate-fade-in {
        animation: fadeIn 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
</style>
