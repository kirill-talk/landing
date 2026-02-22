<script lang="ts">
    import Editable from "./Editable.svelte";

    export let content: any;
    export let editing = false;

    $: features = content?.features || [];
</script>

<section id="features" class="py-32 relative">
    <!-- Section Title -->
    <div class="max-w-7xl mx-auto px-6 mb-24 text-center">
        <div
            class="inline-block px-4 py-1.5 aether-glass rounded-full text-xs font-bold uppercase tracking-widest text-aether-blue mb-6"
        >
            Core Ecosystem
        </div>
        <h2
            class="text-5xl md:text-7xl font-heading font-black mb-8 leading-tight"
        >
            Unleash the Power of <br />
            <span class="text-aether-gradient">Advanced Intelligence</span>
        </h2>
        <p class="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Aether combines decentralized finance with cutting-edge visual
            engineering to provide an experience that is both efficient and
            mesmerizing.
        </p>
    </div>

    <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {#each features as feature, i}
            <div class="aether-card group relative h-full">
                <!-- Glow Backdrop -->
                <div
                    class="absolute -top-12 -left-12 w-32 h-32 bg-{feature.color}/10 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                ></div>

                <div
                    class="text-5xl mb-8 transform group-hover:scale-110 transition-transform duration-500 origin-left"
                >
                    {feature.icon}
                </div>

                <h3
                    class="text-2xl font-black mb-4 group-hover:text-aether-cyan transition-colors"
                >
                    <Editable
                        bind:value={feature.title}
                        {editing}
                        on:change={(e) => (feature.title = e.detail)}
                    />
                </h3>

                <p class="text-slate-400 leading-relaxed mb-8">
                    <Editable
                        bind:value={feature.desc}
                        {editing}
                        multiline
                        on:change={(e) => (feature.desc = e.detail)}
                    />
                </p>

                <a
                    href="#learn-more"
                    class="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:text-aether-teal transition-colors"
                >
                    Explore Technology
                    <svg
                        class="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2.5"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                    </svg>
                </a>
            </div>
        {/each}
    </div>

    <!-- Decorative Element -->
    <div
        class="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none"
    ></div>
</section>
