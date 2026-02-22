<script lang="ts">
    import { onMount } from "svelte";
    import { fade, scale, fly } from "svelte/transition";

    let visible = false;
    onMount(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) visible = true;
        });
        observer.observe(document.querySelector("#community")!);
    });

    const socials = [
        { name: "X", handle: "@aether_infinite", members: "240K", icon: "𝕏" },
        { name: "Discord", handle: "aether_hq", members: "82K", icon: "👾" },
        {
            name: "Telegram",
            handle: "aether_global",
            members: "110K",
            icon: "✈",
        },
        { name: "Github", handle: "aether-labs", members: "14K", icon: "📦" },
    ];
</script>

<section
    id="community"
    class="relative w-screen py-40 overflow-hidden bg-cyber-darker"
>
    <!-- Immersive Background Wrap (Consistent with Hero) -->
    <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-mesh-gradient opacity-25"></div>
        <div
            class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 contrast-150 brightness-150"
        ></div>

        <!-- Large Glowing Orb -->
        <div
            class="absolute top-[20%] left-[50%] -translate-x-1/2 w-[80vw] h-[80vw] bg-cyber-cyan/10 blur-[150px] rounded-full animate-pulse-slow"
        ></div>
    </div>

    <!-- Interactive Grid Layer -->
    <div class="absolute inset-0 z-0 opacity-10">
        <div
            class="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]"
        ></div>
    </div>

    <div class="relative z-10 px-6 sm:px-20 lg:px-40">
        <div
            class="glass-premium p-20 sm:p-40 rounded-[5rem] overflow-hidden text-center border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.5)] relative"
        >
            <!-- Inner Mesh -->
            <div
                class="absolute inset-0 bg-mesh-gradient opacity-5 -z-10"
            ></div>

            {#if visible}
                <div in:scale={{ duration: 1200, delay: 200 }}>
                    <h2
                        class="text-[5rem] sm:text-[12rem] font-black tracking-[-0.08em] leading-[0.85] mb-12 italic uppercase"
                    >
                        JOIN THE <br />
                        <span class="text-gradient">NETWORK</span>
                    </h2>

                    <p
                        class="text-2xl sm:text-3xl text-gray-400 font-medium max-w-4xl mx-auto mb-24 leading-relaxed"
                    >
                        Aether is not just a protocol. It is a sovereign
                        financial layer governed by its users. Be part of the
                        singularity.
                    </p>

                    <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                        {#each socials as social, i}
                            <div
                                in:fly={{
                                    y: 20,
                                    duration: 800,
                                    delay: 500 + i * 100,
                                }}
                                class="glass-premium p-10 rounded-[3rem] hover:bg-white/5 hover:-translate-y-2 transition-all duration-500 group cursor-pointer border-white/5 shadow-xl"
                            >
                                <div
                                    class="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300"
                                >
                                    {social.icon}
                                </div>
                                <div
                                    class="text-gray-500 text-[10px] font-black uppercase tracking-[0.3em] mb-1"
                                >
                                    {social.name}
                                </div>
                                <div
                                    class="text-2xl font-black text-white mb-1 italic"
                                >
                                    {social.members}
                                </div>
                                <div
                                    class="text-[9px] text-gray-600 font-bold tracking-widest uppercase"
                                >
                                    {social.handle}
                                </div>
                            </div>
                        {/each}
                    </div>

                    <div
                        in:fade={{ delay: 1200 }}
                        class="flex flex-col items-center gap-10"
                    >
                        <button
                            class="glow-btn-premium text-2xl py-6 px-24 tracking-[0.2em]"
                            >Initialize Participation</button
                        >
                        <div class="flex items-center gap-3">
                            <div
                                class="w-2 h-2 rounded-full bg-cyber-cyan animate-pulse"
                            ></div>
                            <div
                                class="text-gray-600 text-[10px] font-black uppercase tracking-[0.5em]"
                            >
                                System Online. Connection Established.
                            </div>
                        </div>
                    </div>
                </div>
            {/if}
        </div>
    </div>
</section>
