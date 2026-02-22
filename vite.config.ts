import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import fs from 'node:fs'
import path from 'node:path'

// Custom plugin to handle content saving
const contentSavePlugin = () => ({
  name: 'content-save-plugin',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      if (req.url === '/api/save-content' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
          body += chunk.toString();
        });
        req.on('end', () => {
          try {
            const content = JSON.parse(body);
            const publicPath = path.resolve(__dirname, './public/content.json');

            fs.writeFileSync(publicPath, JSON.stringify(content, null, 2));

            console.log(`[CMS] Content saved to: ${publicPath}`);
            res.statusCode = 200;
            res.end(JSON.stringify({ success: true }));
          } catch (e) {
            res.statusCode = 500;
            res.end(JSON.stringify({ error: 'Failed to save content' }));
          }
        });
      } else {
        next();
      }
    });
  }
});

// https://vite.dev/config/
export default defineConfig({
  base: '/landing/',
  plugins: [svelte(), contentSavePlugin()],
})
