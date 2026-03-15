import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Plugin: ensure JS/MJS are served with correct MIME type (fixes application/octet-stream errors)
function mimeTypePlugin() {
  const jsMimeMiddleware = (_req: any, res: any, next: () => void) => {
    const origSetHeader = res.setHeader.bind(res);
    res.setHeader = function (name: string, value: string | string[]) {
      if (
        name.toLowerCase() === "content-type" &&
        typeof value === "string" &&
        (value === "application/octet-stream" || value === "application/octet-stream; charset=utf-8")
      ) {
        const pathname = (_req.url ?? "").split("?")[0];
        if (pathname.endsWith(".js") || pathname.endsWith(".mjs")) {
          value = "application/javascript";
        }
      }
      return origSetHeader(name, value);
    };
    next();
  };

  return {
    name: "fix-js-mime-type",
    configureServer(server: any) {
      server.middlewares.use(jsMimeMiddleware);
    },
    configurePreviewServer(server: any) {
      server.middlewares.use(jsMimeMiddleware);
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Use '/' for custom domain (e.g. lets-bounce.com); use '/repo-name/' if on github.io/repo-name
  base: '/',
  server: {
    host: "::",
    port: 8080,
    headers: {
      "Cache-Control": "no-cache",
    },
  },
  preview: {
    port: 8080,
    headers: {
      "Cache-Control": "no-cache",
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: undefined,
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    },
    // Ensure proper MIME types for GitHub Pages
    target: 'es2015',
    minify: 'esbuild',
    sourcemap: false
  },
  plugins: [
    mimeTypePlugin(),
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

