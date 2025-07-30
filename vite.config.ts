import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    watch: {
      usePolling: true,
    },
    proxy: {
      '/api/pagespeed': {
        target: 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/pagespeed/, ''),
      },
      '/api/w3c': {
        target: 'https://validator.w3.org/nu/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/w3c/, ''),
      },
      '/api/ssllabs': {
        target: 'https://api.ssllabs.com/api/v3/analyze',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/ssllabs/, ''),
      },
      '/api/hackertarget': {
        target: 'https://api.hackertarget.com/whois/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/hackertarget/, ''),
      },
      '/api/ipapi': {
        target: 'https://ipapi.co',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/ipapi/, ''),
      },
    },
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
