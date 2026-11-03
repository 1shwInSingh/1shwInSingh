import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isVercel = Boolean(process.env.VERCEL);
  const base = isVercel ? "/" : mode === "production" ? "/1shwInSingh/" : "/";

  return {
    base,
    plugins: [react()],
    build: {
      target: "esnext",
      minify: "esbuild",
      cssMinify: true,
      chunkSizeWarningLimit: 2000,
      rollupOptions: {
        output: {
          manualChunks: {
            "three-core": ["three"],
            "three-stdlib": ["three-stdlib"],
            "r3f": ["@react-three/fiber", "@react-three/drei"],
            "rapier": ["@react-three/rapier"],
            "postprocessing": ["@react-three/postprocessing"],
            "gsap-vendor": ["gsap", "@gsap/react"],
            "react-vendor": ["react", "react-dom"],
          },
        },
      },
    },
  };
});
