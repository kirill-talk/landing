<script lang="ts">
    import { onMount } from "svelte";
    import { fly, fade } from "svelte/transition";

    let visible = false;
    onMount(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) visible = true;
        });
        observer.observe(document.querySelector("#tokenomics")!);
    });

    const stats = [
        {
            label: "Total Scoped Supply",
            value: "1.0B",
            detail: "Fixed cap",
            icon: "⚡",
        },
        {
            label: "Algorithm Burn",
            value: "25.4M",
            detail: "Automatic",
            icon: "🔥",
        },
        {
            label: "Staking Velocity",
            value: "88.2%",
            detail: "Optimized",
            icon: "💎",
        },
        {
            label: "Treasury Depth",
            value: "$45M+",
            detail: "Multi-sig",
            icon: "🛡️",
        },
    ];

    const distribution = [
        { label: "Liquidity Pools", percent: 40, theme: "cyan" },
        { label: "Community Yield", percent: 30, theme: "purple" },
        { label: "Strategic Core", percent: 15, theme: "pink" },
        { label: "Infrastructure", percent: 10, theme: "blue" },
        { label: "Reserve Vault", percent: 5, theme: "gray" },
    ];
</script>

<section
    id="tokenomics"
    class="relative w-screen py-40 overflow-hidden bg-cyber-darker"
>
    <!-- Immersive Background Wrap (Consistent with Hero) -->
    <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-mesh-gradient opacity-20"></div>
        <div
            class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 contrast-150 brightness-150"
        ></div>

        <!-- Decorative Glows -->
        <div
            class="absolute top-[-40%] left-[-10%] w-[80vw] h-[80vw] bg-cyber-purple/5 blur-[120px] rounded-full animate-pulse-slow"
        ></div>
    </div>

    <div class="relative z-10 px-6 sm:px-20 lg:px-40">
        <div class="flex flex-col lg:flex-row gap-24 items-end">
            <!-- Content Side -->
            <div class="lg:w-1/3">
                {#if visible}
                    <div in:fly={{ x: -50, duration: 1000 }}>
                        <h2
                            class="text-[6rem] sm:text-[8rem] font-black tracking-tighter italic leading-none mb-8"
                        >
                            DATA <br /> <span class="text-gradient">VIZ</span>
                        </h2>
                        <p
                            class="text-gray-400 text-xl font-medium leading-relaxed mb-12"
                        >
                            Aether's economy is a self-sustaining cycle of value
                            capture and redistribution. Pure math. Total
                            transparency.
                        </p>

                        <!-- Decorative Line -->
                        <div
                            class="w-32 h-2 bg-cyber-gradient rounded-full"
                        ></div>
                    </div>
                {/if}
            </div>

            <!-- Stats Grid -->
            <div class="lg:w-2/3 w-full">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {#each stats as stat, i}
                        {#if visible}
                            <div
                                in:fly={{
                                    y: 30,
                                    duration: 800,
                                    delay: i * 150,
                                }}
                                class="glass-premium p-12 rounded-[3.5rem] group hover:scale-[1.02] transition-all duration-500 border-white/5 hover:border-cyber-cyan/30"
                            >
                                <div class="text-4xl mb-6">{stat.icon}</div>
                                <div
                                    class="text-gray-500 text-xs font-black uppercase tracking-[0.3em] mb-2"
                                >
                                    {stat.label}
                                </div>
                                <div
                                    class="text-5xl font-black mb-1 italic tracking-tighter"
                                >
                                    {stat.value}
                                </div>
                                <div
                                    class="text-gray-600 text-[10px] font-bold uppercase tracking-widest"
                                >
                                    {stat.detail}
                                </div>
                            </div>
                        {/if}
                    {/each}
                </div>
            </div>
        </div>

        <!-- Distribution Visualization -->
        <div class="mt-32">
            {#if visible}
                <div
                    in:fade={{ delay: 800 }}
                    class="glass-premium p-12 sm:p-20 rounded-[4rem] border-white/5 relative overflow-hidden"
                >
                    <!-- Internal mesh for cards -->
                    <div
                        class="absolute inset-0 bg-mesh-gradient opacity-10 -z-10"
                    ></div>

                    <h3
                        class="text-2xl font-black uppercase tracking-[0.2em] mb-12 flex items-center gap-6"
                    >
                        <span class="w-16 h-px bg-white/20"></span>
                        Asset Allocation
                    </h3>

                    <!-- Massive Bars -->
                    <div
                        class="flex h-32 w-full rounded-3xl overflow-hidden border border-white/5 p-2 gap-2 glass-premium"
                    >
                        {#each distribution as dist}
                            <div
                                class="h-full relative group transition-all duration-700 hover:flex-[1.5]"
                                style="width: {dist.percent}%; --shadow-color: var(--color-cyber-{dist.theme})"
                            >
                                <div
                                    class="absolute inset-0 bg-cyber-{dist.theme} opacity-20 group-hover:opacity-40 transition-opacity"
                                ></div>
                                <div
                                    class="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors shadow-inner-custom"
                                ></div>

                                <!-- Percent Layer -->
                                <div
                                    class="absolute inset-0 flex items-center justify-center pointer-events-none"
                                >
                                    <span
                                        class="text-xs font-black tracking-widest opacity-0 group-hover:opacity-100 transition-opacity"
                                        >{dist.percent}%</span
                                    >
                                </div>
                            </div>
                        {/each}
                    </div>

                    <!-- Legend -->
                    <div class="grid grid-cols-2 sm:grid-cols-5 gap-8 mt-12">
                        {#each distribution as dist}
                            <div class="flex items-center gap-3">
                                <div
                                    class="w-2 h-2 rounded-full bg-cyber-{dist.theme} shadow-[0_0_10px_var(--color-cyber-{dist.theme})]"
                                ></div>
                                <span
                                    class="text-xs font-bold text-gray-400 uppercase tracking-widest"
                                    >{dist.label}</span
                                >
                            </div>
                        {/each}
                    </div>
                </div>
            {/if}
        </div>
    </div>
</section>

<style>
    /* Fix for dynamic class colors in Tailwind if not explicitly defined in theme as colors */
    :root {
        --color-cyber-cyan: #00f2ff;
        --color-cyber-purple: #7000ff;
        --color-cyber-pink: #ff00c8;
        --color-cyber-blue: #3b82f6;
        --color-cyber-gray: #6b7280;
    }
    .bg-cyber-cyan {
        background-color: var(--color-cyber-cyan);
    }
    .bg-cyber-purple {
        background-color: var(--color-cyber-purple);
    }
    .bg-cyber-pink {
        background-color: var(--color-cyber-pink);
    }
    .bg-cyber-blue {
        background-color: var(--color-cyber-blue);
    }
    .bg-cyber-gray {
        background-color: var(--color-cyber-gray);
    }
</style>
