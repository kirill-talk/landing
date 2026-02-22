<footer class="py-24 relative border-t border-white/5 overflow-hidden">
    <!-- Glow Background -->
    <div
        class="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-aether-blue/5 blur-[150px] -z-10"
    ></div>

    <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <!-- Brand -->
            <div class="col-span-1 md:col-span-2 space-y-6">
                <div class="flex items-center gap-2 group cursor-pointer">
                    <div
                        class="w-10 h-10 bg-aether-gradient rounded-xl flex items-center justify-center shadow-aether-glow"
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
                        class="text-2xl font-heading font-black tracking-tighter text-white uppercase"
                    >
                        Aether<span class="text-aether-blue">AI</span>
                    </span>
                </div>
                <p class="text-slate-400 max-w-sm leading-relaxed">
                    The next evolution of decentralized analytics. Engineered
                    for the future of finance with an uncompromising focus on
                    visual excellence and performance.
                </p>
                <div class="flex gap-4">
                    {#each ["Twitter", "Discord", "Github"] as social}
                        <a
                            href="#{social.toLowerCase()}"
                            class="w-10 h-10 aether-glass rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
                        >
                            <span class="sr-only">{social}</span>
                            <div class="w-4 h-4 bg-slate-400 rounded-sm"></div>
                        </a>
                    {/each}
                </div>
            </div>

            <!-- Links -->
            <div class="space-y-6">
                <h4
                    class="font-bold text-white uppercase tracking-widest text-xs"
                >
                    Ecosystem
                </h4>
                <ul class="space-y-4">
                    {#each ["Protocol", "Analytics", "Governance", "Security"] as item}
                        <li>
                            <a
                                href="#{item.toLowerCase()}"
                                class="text-slate-400 hover:text-aether-cyan transition-colors"
                                >{item}</a
                            >
                        </li>
                    {/each}
                </ul>
            </div>

            <div class="space-y-6">
                <h4
                    class="font-bold text-white uppercase tracking-widest text-xs"
                >
                    Resources
                </h4>
                <ul class="space-y-4">
                    {#each ["Whitepaper", "Documentation", "API Reference", "Status"] as item}
                        <li>
                            <a
                                href="#{item.toLowerCase()}"
                                class="text-slate-400 hover:text-aether-cyan transition-colors"
                                >{item}</a
                            >
                        </li>
                    {/each}
                </ul>
            </div>
        </div>

        <!-- Bottom Bar -->
        <div
            class="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6"
        >
            <span class="text-slate-500 text-sm"
                >© 2026 Aether Foundation. Built for the Decentralized Web.</span
            >
            <div class="flex gap-8 text-sm text-slate-500">
                <a href="#privacy" class="hover:text-white transition-colors"
                    >Privacy Policy</a
                >
                <a href="#terms" class="hover:text-white transition-colors"
                    >Terms of Service</a
                >
            </div>
        </div>
    </div>
</footer>
