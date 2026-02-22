<section id="features" class="features">
  <div class="container">
    <div class="section-header">
      <h2>Built for Speed</h2>
      <p>Powerful features to help you ship faster and safer than ever before.</p>
    </div>

    <div class="features-grid">
      {#each features as feature}
        <div class="feature-card glass">
          <div class="icon">{feature.icon}</div>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<script lang="ts">
  const features = [
    { title: 'Edge Computing', description: 'Deploy your code closer to your users for sub-millisecond latency.', icon: '⚡' },
    { title: 'Auto Scaling', description: 'Scale from zero to millions of requests without touching a single knob.', icon: '☁️' },
    { title: 'Real-time Analytics', description: 'Get insights into your traffic and performance in real-time.', icon: '📊' },
    { title: 'Global CDN', description: 'Static assets delivered from 200+ edge locations worldwide.', icon: '🌍' },
    { title: 'Secure by Default', description: 'Automatic SSL, DDoS protection, and isolation for every project.', icon: '🛡️' },
    { title: 'AI Optimized', description: 'Built-in support for vector databases and LLM orchestration.', icon: '🤖' },
  ];
</script>

<style>
  .features {
    padding: var(--section-padding);
    background: rgba(15, 23, 42, 0.5);
  }

  .section-header {
    text-align: center;
    margin-bottom: 5rem;
  }

  h2 {
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 1rem;
  }

  .section-header p {
    color: var(--text-secondary);
    font-size: 1.25rem;
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }

  .feature-card {
    padding: 3rem 2rem;
    border-radius: var(--radius-lg);
    transition: var(--transition);
  }

  .feature-card:hover {
    transform: translateY(-10px);
    background: rgba(30, 41, 59, 0.8);
    border-color: var(--primary);
  }

  .icon {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  .feature-card p {
    color: var(--text-secondary);
  }
</style>
