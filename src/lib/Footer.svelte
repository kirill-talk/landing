<footer
  class="relative w-screen py-32 bg-cyber-darker border-t border-white/5 overflow-hidden font-sans"
>
  <!-- Immersive Background Wrap (Consistent with Hero) -->
  <div class="absolute inset-0 z-0">
    <div class="absolute inset-0 bg-mesh-gradient opacity-10"></div>
    <div
      class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 contrast-150 brightness-150"
    ></div>

    <!-- Subtle Bottom Glow -->
    <div
      class="absolute bottom-[-20%] left-[50%] -translate-x-1/2 w-[100vw] h-[30vh] bg-cyber-cyan/5 blur-[100px] rounded-full"
    ></div>
  </div>

  <div class="relative z-10 px-6 sm:px-20 lg:px-40">
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 lg:gap-40 mb-32"
    >
      <!-- Brand Column -->
      <div class="flex flex-col gap-10">
        <div
          class="flex items-center gap-4 text-4xl font-black italic tracking-tighter"
        >
          <div
            class="w-12 h-12 bg-cyber-gradient rounded-xl rotate-[15deg] shadow-glow flex items-center justify-center"
          >
            <div class="w-6 h-6 border-2 border-white/20 rounded-md"></div>
          </div>
          AETHER
        </div>
        <p class="text-gray-500 font-medium text-lg leading-relaxed max-w-sm">
          The ultimate infrastructure for the next billion users of
          decentralized finance. Unbounded, unyielding, infinite.
        </p>
        <div class="flex gap-6">
          {#each ["𝕏", "✈", "👾", "📦"] as social}
            <div
              class="w-14 h-14 rounded-2xl glass-premium flex items-center justify-center text-xl font-bold hover:text-cyber-cyan hover:border-cyber-cyan transition-all duration-300 cursor-pointer border-white/5 active:scale-95 shadow-lg"
            >
              {social}
            </div>
          {/each}
        </div>
      </div>

      <!-- Links -->
      <div>
        <h4
          class="text-[10px] font-black uppercase tracking-[0.5em] text-cyber-cyan mb-12"
        >
          Protocol
        </h4>
        <ul class="flex flex-col gap-6 text-xl font-bold italic text-gray-400">
          <li>
            <a
              href="/"
              class="hover:text-cyber-cyan hover:translate-x-2 transition-all block underline-offset-8 decoration-cyber-cyan/30 hover:underline"
              >Yield Terminal</a
            >
          </li>
          <li>
            <a
              href="/"
              class="hover:text-cyber-cyan hover:translate-x-2 transition-all block underline-offset-8 decoration-cyber-cyan/30 hover:underline"
              >Cross-Chain Bridge</a
            >
          </li>
          <li>
            <a
              href="/"
              class="hover:text-cyber-cyan hover:translate-x-2 transition-all block underline-offset-8 decoration-cyber-cyan/30 hover:underline"
              >Liquidity Vaults</a
            >
          </li>
          <li>
            <a
              href="/"
              class="hover:text-cyber-cyan hover:translate-x-2 transition-all block underline-offset-8 decoration-cyber-cyan/30 hover:underline"
              >DAO Governance</a
            >
          </li>
        </ul>
      </div>

      <div>
        <h4
          class="text-[10px] font-black uppercase tracking-[0.5em] text-cyber-purple mb-12"
        >
          Resources
        </h4>
        <ul class="flex flex-col gap-6 text-xl font-bold italic text-gray-400">
          <li>
            <a
              href="/"
              class="hover:text-cyber-purple hover:translate-x-2 transition-all block underline-offset-8 decoration-cyber-purple/30 hover:underline"
              >Documentation</a
            >
          </li>
          <li>
            <a
              href="/"
              class="hover:text-cyber-purple hover:translate-x-2 transition-all block underline-offset-8 decoration-cyber-purple/30 hover:underline"
              >Developer Portal</a
            >
          </li>
          <li>
            <a
              href="/"
              class="hover:text-cyber-purple hover:translate-x-2 transition-all block underline-offset-8 decoration-cyber-purple/30 hover:underline"
              >Security Audits</a
            >
          </li>
          <li>
            <a
              href="/"
              class="hover:text-cyber-purple hover:translate-x-2 transition-all block underline-offset-8 decoration-cyber-purple/30 hover:underline"
              >Brand Assets</a
            >
          </li>
        </ul>
      </div>

      <!-- Singularity Hub -->
      <div>
        <h4
          class="text-[10px] font-black uppercase tracking-[0.5em] text-cyber-pink mb-12"
        >
          Singularity Hub
        </h4>
        <p class="text-gray-500 font-medium text-lg mb-12 leading-relaxed">
          Join 50k+ readers on our quest for infinite liquidity.
        </p>
        <div class="relative group">
          <input
            type="email"
            placeholder="Pulse Email"
            class="w-full bg-transparent glass-premium px-8 py-5 rounded-2xl text-lg italic outline-none focus:border-cyber-cyan transition-all border-white/5"
          />
          <button
            class="absolute top-2 right-2 bg-white text-black px-8 py-3 rounded-xl font-black uppercase text-xs tracking-widest hover:bg-cyber-cyan hover:text-black transition-all duration-300 shadow-xl"
            >Join</button
          >
        </div>
      </div>
    </div>

    <!-- Final Line -->
    <div
      class="flex flex-col sm:flex-row justify-between items-center border-t border-white/5 pt-16 gap-10"
    >
      <div
        class="text-[10px] font-black text-gray-700 uppercase tracking-[0.6em]"
      >
        © 2026 Aether Protocol Labs. Distributed Globally. Built for Forever.
      </div>
      <div
        class="flex gap-12 text-[10px] font-black text-gray-600 uppercase tracking-widest"
      >
        <a href="/" class="hover:text-white transition-colors">Privacy</a>
        <a href="/" class="hover:text-white transition-colors">Terms</a>
        <a href="/" class="hover:text-white transition-colors">Cookie Policy</a>
      </div>
    </div>
  </div>

  <!-- Perspective Shadow -->
  <div
    class="absolute bottom-0 left-0 w-full h-[50vh] bg-gradient-to-t from-cyber-cyan/10 to-transparent pointer-events-none -z-10"
  ></div>
</footer>
