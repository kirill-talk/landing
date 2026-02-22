<script lang="ts">
    import Editable from "./Editable.svelte";

    export let content: any;
    export let editing = false;

    $: stats = content?.stats || [];
</script>

<section id="stats" class="py-24 relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- Main Stat Card (Large) -->
            <div
                class="md:col-span-2 aether-card flex flex-col justify-between group overflow-hidden relative min-h-[400px]"
            >
                <div class="relative z-10">
                    <span
                        class="text-xs font-bold uppercase tracking-widest text-aether-blue mb-2 block"
                        >Performance Overview</span
                    >
                    <h3 class="text-4xl font-black mb-6">Market Dynamics</h3>

                    <div class="flex items-baseline gap-4 mb-2">
                        <span class="text-6xl font-black text-white">
                            <Editable
                                bind:value={stats[0].value}
                                {editing}
                                on:change={(e) => (stats[0].value = e.detail)}
                            />
                        </span>
                        <span class="text-aether-teal font-bold"
                            >{stats[0].change}</span
                        >
                    </div>
                    <p class="text-slate-400 max-w-sm">
                        Total volume processed across all Aether-linked
                        protocols in the last 24 hours.
                    </p>
                </div>

                <!-- Abstract Graph Visual -->
                <div
                    class="absolute bottom-0 left-0 w-full h-1/2 opacity-20 group-hover:opacity-40 transition-opacity duration-700"
                >
                    <svg
                        class="w-full h-full"
                        viewBox="0 0 800 200"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M0,200 L0,150 Q200,50 400,120 T800,80 L800,200 Z"
                            fill="url(#grad)"
                        />
                        <defs>
                            <linearGradient
                                id="grad"
                                x1="0%"
                                y1="0%"
                                x2="0%"
                                y2="100%"
                            >
                                <stop
                                    offset="0%"
                                    style="stop-color:var(--color-aether-blue);stop-opacity:1"
                                />
                                <stop
                                    offset="100%"
                                    style="stop-color:transparent;stop-opacity:0"
                                />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>

            <!-- Secondary Stat Cards -->
            <div class="space-y-6">
                {#each stats.slice(1) as stat}
                    <div
                        class="aether-card !p-6 flex items-center justify-between group"
                    >
                        <div>
                            <span
                                class="text-[10px] uppercase font-bold tracking-widest text-slate-500 block mb-1"
                            >
                                <Editable
                                    bind:value={stat.label}
                                    {editing}
                                    on:change={(e) => (stat.label = e.detail)}
                                />
                            </span>
                            <span
                                class="text-2xl font-black text-white group-hover:text-aether-cyan transition-colors"
                            >
                                <Editable
                                    bind:value={stat.value}
                                    {editing}
                                    on:change={(e) => (stat.value = e.detail)}
                                />
                            </span>
                        </div>
                        <div class="text-right">
                            <span class="text-xs font-bold text-aether-teal"
                                >{stat.change}</span
                            >
                            <div
                                class="w-12 h-1 bg-white/5 rounded-full mt-2 overflow-hidden"
                            >
                                <div
                                    class="h-full bg-aether-gradient w-2/3"
                                ></div>
                            </div>
                        </div>
                    </div>
                {/each}
            </div>
        </div>

        <!-- Bottom Feature Bar -->
        <div
            class="mt-12 p-8 aether-glass rounded-[2rem] border-white/5 flex flex-wrap items-center justify-between gap-8"
        >
            <div class="flex items-center gap-4">
                <div
                    class="w-12 h-12 rounded-full bg-aether-violet/20 flex items-center justify-center"
                >
                    <svg
                        class="w-6 h-6 text-aether-violet"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                    </svg>
                </div>
                <div>
                    <h4 class="font-bold">Enterprise Security</h4>
                    <p class="text-xs text-slate-500">
                        Bank-grade encryption for every transaction.
                    </p>
                </div>
            </div>

            <div class="flex items-center gap-4">
                <div
                    class="w-12 h-12 rounded-full bg-aether-teal/20 flex items-center justify-center"
                >
                    <svg
                        class="w-6 h-6 text-aether-teal"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                    </svg>
                </div>
                <div>
                    <h4 class="font-bold">Lightning Fast</h4>
                    <p class="text-xs text-slate-500">
                        Sub-second finality across the entire network.
                    </p>
                </div>
            </div>

            <div class="flex -space-x-4">
                {#each Array(5) as _}
                    <div
                        class="w-10 h-10 rounded-full border-2 border-aether-black bg-slate-800"
                    ></div>
                {/each}
                <div
                    class="w-10 h-10 rounded-full border-2 border-aether-black bg-white/10 flex items-center justify-center text-[10px] font-bold"
                >
                    +12k
                </div>
            </div>
        </div>
    </div>
</section>
