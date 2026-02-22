<script lang="ts">
  import { onMount } from "svelte";
  import { fly, fade, scale } from "svelte/transition";

  let visible = false;
  onMount(() => {
    visible = true;
  });
</script>

<section
  class="relative w-screen min-h-screen flex items-center bg-cyber-darker overflow-hidden"
>
  <!-- Immersive Background Wrap -->
  <div class="absolute inset-0 z-0">
    <div class="absolute inset-0 bg-mesh-gradient opacity-30"></div>
    <div
      class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 contrast-150 brightness-150"
    ></div>

    <!-- Animating Orbs -->
    <div
      class="absolute top-[-20%] right-[-10%] w-[100vw] h-[100vw] bg-cyber-cyan/10 blur-[180px] rounded-full animate-pulse-slow"
    ></div>
    <div
      class="absolute bottom-[-30%] left-[-20%] w-[120vw] h-[120vw] bg-cyber-purple/10 blur-[180px] rounded-full animate-pulse-slow [animation-delay:2s]"
    ></div>
  </div>

  <div class="w-full relative z-10 px-6 sm:px-20 lg:px-40">
    <div
      class="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0"
    >
      {#if visible}
        <div in:fly={{ x: -100, duration: 1200, delay: 200 }} class="max-w-4xl">
          <div
            class="inline-flex items-center gap-3 px-6 py-2 glass-premium rounded-full mb-10 border-cyber-cyan/20"
          >
            <span class="relative flex h-2 w-2">
              <span
                class="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-cyan opacity-75"
              ></span>
              <span
                class="relative inline-flex rounded-full h-2 w-2 bg-cyber-cyan"
              ></span>
            </span>
            <span
              class="text-[10px] font-black uppercase tracking-[0.4em] text-cyber-cyan"
              >Live Mainnet V4.0</span
            >
          </div>

          <h1
            class="text-7xl sm:text-8xl lg:text-[10rem] font-black leading-[0.85] tracking-[-0.06em] mb-12"
          >
            AETHER <br />
            <span class="text-gradient">INFINITE</span>
          </h1>

          <p
            class="text-xl sm:text-2xl text-gray-400 max-w-2xl font-medium leading-relaxed mb-16"
          >
            The world's most immersive liquidity layer. Designed for the
            multi-chain future with unyielding performance and infinite scale.
          </p>

          <div class="flex flex-col sm:flex-row gap-8">
            <button class="glow-btn-premium text-xl">Enter Protocol</button>
            <button
              class="px-12 py-5 rounded-full border border-white/10 glass-premium font-black uppercase tracking-widest hover:bg-white/5 transition-all duration-300"
              >Whitepaper</button
            >
          </div>
        </div>
      {/if}

      <!-- Interactive 3D Visual - Right Side -->
      <div class="relative w-full lg:w-[40vw] flex justify-center items-center">
        {#if visible}
          <div
            in:scale={{ duration: 2000, start: 0.5, delay: 500 }}
            class="relative animate-float"
          >
            <!-- The Infinite Cube -->
            <div class="w-64 h-64 sm:w-96 sm:h-96 relative rotate-12">
              <div
                class="absolute inset-0 bg-cyber-gradient blur-[100px] opacity-30 animate-pulse"
              ></div>
              <div
                class="absolute inset-0 border-4 border-cyber-cyan/40 rounded-[3rem] rotate-[15deg] glass-premium"
              ></div>
              <div
                class="absolute inset-0 border-4 border-cyber-purple/40 rounded-[3rem] -rotate-[15deg] glass-premium"
              ></div>
              <div class="absolute inset-0 flex items-center justify-center">
                <div
                  class="w-32 h-32 sm:w-48 sm:h-48 bg-cyber-gradient rounded-full blur-[40px] opacity-60"
                ></div>
              </div>
            </div>

            <!-- Floating Data Points -->
            <div
              class="absolute -top-12 right-0 glass-premium p-6 rounded-3xl animate-float [animation-delay:1s]"
            >
              <div
                class="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-1"
              >
                24h Vol
              </div>
              <div class="text-2xl font-black text-white">$4.2B</div>
            </div>

            <div
              class="absolute -bottom-12 left-0 glass-premium p-6 rounded-3xl animate-float [animation-delay:3s]"
            >
              <div
                class="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-1"
              >
                Nodes
              </div>
              <div class="text-2xl font-black text-white">12.4K</div>
            </div>
          </div>
        {/if}
      </div>
    </div>
  </div>
</section>
