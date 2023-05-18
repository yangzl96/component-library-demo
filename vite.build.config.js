import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: "./components",
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: ["vue", /\.less/],
      output: [
        {
          format: "es",
          dir: "es",
          entryFileNames: "[name].js",
          preserveModules: true,
        },
        {
          format: "cjs",
          dir: "lib",
          entryFileNames: "[name].js",
          preserveModules: true,
        },
      ],
    },
  },
});
