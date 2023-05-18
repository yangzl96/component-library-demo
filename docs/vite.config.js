import { defineConfig } from "vite";
// import vue from '@vitejs/plugin-vue'
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "Jinke-ui": path.resolve(__dirname, "../components"),
    },
  },
});
