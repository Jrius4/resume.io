import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'url';
import ghPages from 'vite-plugin-gh-pages';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), ghPages()],
  resolve: {
    alias: {
      "@/": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
})
