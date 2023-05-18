import { defineConfig } from "vitepress";
import { demoBlockPlugin } from "vitepress-theme-demoblock";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "金科组件库",
  description: "这是一个基础组件库",
  themeConfig: {
    nav: [
      { text: "Guide", link: "/guide" },
      { text: "Config", link: "/config" },
      { text: "Changelog", link: "https://github.com/..." },
    ],
    sidebar: [
      {
        text: "导览",
        items: [{ text: "快速开始", link: "/quickstart" }],
      },
      {
        text: "组件",
        items: [{ text: "按钮 Button", link: "/button" }],
      },
    ],
  },
  markdown: {
    config(md) {
      md.use(demoBlockPlugin);
    },
  },
});
