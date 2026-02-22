<script lang="ts">
    import { onMount } from "svelte";
    import { fly, fade } from "svelte/transition";

    let visible = false;
    onMount(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) visible = true;
        });
        observer.observe(document.querySelector("#roadmap")!);
    });

    const phases = [
        {
            id: "I",
            title: "INCEPTION",
            desc: "The birth of the Aether protocol architecture and core theoretical frameworks.",
            tags: ["Design", "Core", "Seed"],
            status: "complete",
        },
        {
            id: "II",
            title: "ORCHESTRA",
            desc: "Smart contract deployment on testnet and intensive security audit cycles.",
            tags: ["Audit", "Alpha", "Node"],
            status: "active",
        },
        {
            id: "III",
            title: "EXPANSION",
            desc: "Cross-chain bridge deployment and the launch of the Aether Governance Portal.",
            tags: ["Bridge", "DAO", "SDK"],
            status: "future",
        },
        {
            id: "IV",
            title: "SINGULARITY",
            desc: "L2 integration and institutional-grade gateway for massive global adoption.",
            tags: ["Scale", "Global", "L2"],
            status: "future",
        },
    ];
</script>

<section
    id="roadmap"
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
            class="absolute bottom-[-40%] right-[-10%] w-[90vw] h-[90vw] bg-cyber-cyan/5 blur-[120px] rounded-full animate-pulse-slow"
        ></div>
    </div>

    <!-- Interactive Track Line -->
    <div class="absolute top-[350px] left-0 w-full h-px bg-white/5 z-0">
        <div
            class="h-full bg-cyber-gradient transition-all duration-[2000ms] ease-out shadow-[0_0_20px_rgba(0,242,255,0.2)]"
            style="width: {visible ? '100' : '0'}%"
        ></div>
    </div>

    <div class="relative z-10 px-6 sm:px-20 lg:px-40">
        <div class="mb-32">
            <h2
                class="text-[5rem] sm:text-[10rem] font-black tracking-[-0.08em] leading-none italic uppercase"
            >
                THE <span class="text-gradient">TRACK</span>
            </h2>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-4 gap-20">
            {#each phases as phase, i}
                {#if visible}
                    <div
                        in:fly={{ y: 50, duration: 800, delay: i * 200 }}
                        class="relative group"
                    >
                        <!-- Node Indicator -->
                        <div
                            class="w-16 h-16 rounded-full glass-premium flex items-center justify-center mb-16 relative z-10 group-hover:scale-110 group-hover:border-cyber-cyan transition-all duration-500 border-white/10 overflow-hidden"
                        >
                            <div
                                class="absolute inset-0 bg-mesh-gradient opacity-40"
                            ></div>
                            <span
                                class="text-sm font-black italic relative z-10 {phase.status ===
                                'active'
                                    ? 'text-cyber-cyan'
                                    : 'text-gray-500'}">{phase.id}</span
                            >
                            {#if phase.status === "active"}
                                <div
                                    class="absolute inset-0 rounded-full bg-cyber-cyan/20 animate-ping"
                                ></div>
                            {/if}
                        </div>

                        <div
                            class="glass-premium p-10 rounded-[3rem] h-full min-h-[400px] flex flex-col hover:bg-white/5 transition-colors border-white/5 shadow-2xl relative overflow-hidden group"
                        >
                            <!-- Internal mesh for individual card depth -->
                            <div
                                class="absolute inset-0 bg-mesh-gradient opacity-5 -z-10 group-hover:opacity-10 transition-opacity"
                            ></div>

                            <div
                                class="text-[10px] font-black uppercase tracking-[0.4em] mb-6
                    {phase.status === 'active'
                                    ? 'text-cyber-cyan'
                                    : phase.status === 'complete'
                                      ? 'text-green-400'
                                      : 'text-gray-600'}"
                            >
                                {phase.status}
                            </div>

                            <h3
                                class="text-3xl font-black italic tracking-tighter mb-6 group-hover:text-cyber-cyan transition-colors"
                            >
                                {phase.title}
                            </h3>
                            <p
                                class="text-gray-500 font-medium leading-relaxed mb-8 flex-grow"
                            >
                                {phase.desc}
                            </p>

                            <div class="flex flex-wrap gap-2">
                                {#each phase.tags as tag}
                                    <span
                                        class="text-[9px] font-black uppercase tracking-widest px-3 py-1 glass-premium rounded-lg text-gray-500 border-white/5"
                                        >{tag}</span
                                    >
                                {/each}
                            </div>
                        </div>
                    </div>
                {/if}
            {/each}
        </div>
    </div>
</section>
