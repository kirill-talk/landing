<script lang="ts">
  import { onMount } from "svelte";
  import Navbar from "./components/Navbar.svelte";
  import SectionHero from "./components/SectionHero.svelte";
  import SectionStats from "./components/SectionStats.svelte";
  import SectionFeatures from "./components/SectionFeatures.svelte";
  import Footer from "./components/Footer.svelte";

  let content: any = null;
  let editMode = false;
  let saving = false;

  onMount(async () => {
    // Check for edit mode in URL
    const urlParams = new URLSearchParams(window.location.search);
    editMode = urlParams.get("edit") === "true";

    // Load from localStorage if available, otherwise fetch
    const savedContent = localStorage.getItem("aether_content");
    if (savedContent) {
      try {
        content = JSON.parse(savedContent);
        console.log("Loaded content from localStorage");
      } catch (e) {
        console.warn("Corrupt localStorage content, fetching fresh.");
      }
    }

    if (!content) {
      try {
        const resp = await fetch("/content.json");
        if (resp.ok) content = await resp.json();
      } catch (e) {
        console.error("Content fetch failed", e);
      }
    }
  });

  async function handleSave() {
    saving = true;
    console.log("Publishing changes to disk:", content);

    try {
      // 1. Save to disk via Vite API
      const resp = await fetch("/api/save-content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(content),
      });

      if (!resp.ok) throw new Error("Server save failed");

      // 2. Save to localStorage for redundancy
      localStorage.setItem("aether_content", JSON.stringify(content));

      alert(
        "Changes published directly to content.json! Page will now stay updated on refresh.",
      );
    } catch (e) {
      console.error("Persistence failed", e);
      alert("Failed to save to disk. Changes kept in browser session.");
    } finally {
      saving = false;
    }
  }
</script>

<main class="min-h-screen relative">
  <Navbar />

  <div class="space-y-0">
    {#if content}
      <SectionHero {content} editing={editMode} />
      <SectionStats {content} editing={editMode} />
      <SectionFeatures {content} editing={editMode} />
    {/if}
    <Footer />
  </div>

  {#if editMode}
    <!-- Admin Floating Toolbar -->
    <div
      class="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-4 bg-aether-navy/90 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl"
    >
      <div class="flex flex-col">
        <span
          class="text-[10px] uppercase font-bold tracking-widest text-aether-cyan"
          >Admin Mode</span
        >
        <span class="text-xs text-slate-400">Inline Editing Active</span>
      </div>
      <div class="h-8 w-px bg-white/10"></div>
      <button
        on:click={handleSave}
        disabled={saving}
        class="bg-aether-gradient px-6 py-2 rounded-lg font-bold text-sm shadow-aether-glow hover:scale-105 transition-all disabled:opacity-50"
      >
        {saving ? "Saving..." : "Publish Changes"}
      </button>
      <button
        on:click={() => (window.location.search = "")}
        class="text-xs text-slate-500 hover:text-white transition-colors"
      >
        Exit
      </button>
    </div>
  {/if}
</main>

<style>
  :global(.aether-gradient) {
    background: linear-gradient(
      135deg,
      var(--color-aether-blue),
      var(--color-aether-teal)
    );
  }
  :global(html) {
    scroll-behavior: smooth;
  }
</style>
