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
        const resp = await fetch(import.meta.env.BASE_URL + "content.json");
        if (resp.ok) content = await resp.json();
      } catch (e) {
        console.error("Content fetch failed", e);
      }
    }
  });

  async function handleSave() {
    saving = true;
    console.log("Publishing changes...", content);

    try {
      if (import.meta.env.DEV) {
        // 1. Save to disk via Vite API (Local Dev)
        const resp = await fetch("/api/save-content", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(content),
        });

        if (!resp.ok) throw new Error("Server save failed");
        alert("Changes published directly to local content.json!");
      } else {
        // 2. Save via GitHub API (Production on GitHub Pages)
        const token = prompt(
          "You are in production mode. To save changes to GitHub, enter your GitHub Personal Access Token (with repo scope):",
        );
        if (!token) {
          saving = false;
          return;
        }

        const repo = "kirill-talk/landing";
        const path = "public/content.json";

        // Step A: Get current file SHA
        const getResp = await fetch(
          `https://api.github.com/repos/${repo}/contents/${path}`,
        );
        if (!getResp.ok)
          throw new Error("Failed to fetch current file info from GitHub");
        const fileInfo = await getResp.json();

        // Step B: Update file
        const putResp = await fetch(
          `https://api.github.com/repos/${repo}/contents/${path}`,
          {
            method: "PUT",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              message: "Content update via Visual Editor",
              content: btoa(
                unescape(encodeURIComponent(JSON.stringify(content, null, 2))),
              ),
              sha: fileInfo.sha,
            }),
          },
        );

        if (!putResp.ok) {
          const err = await putResp.json();
          throw new Error("GitHub API save failed: " + err.message);
        }

        alert(
          "Changes published directly to GitHub repo! A new build will deploy shortly.",
        );
      }

      // 3. Save to localStorage for redundancy
      localStorage.setItem("aether_content", JSON.stringify(content));
    } catch (e: any) {
      console.error("Persistence failed", e);
      alert(`Failed to save: ${e.message}\nChanges kept in browser session.`);
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
