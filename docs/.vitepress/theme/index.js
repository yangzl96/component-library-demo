// https://vitepress.dev/guide/custom-theme
import Theme from "vitepress/theme";
import { h } from "vue";
// import Layout from './Layout.vue'
import "./style.css";

// import JinkeUI from "Jinke-ui";
import JinkeUI from "../../../es";
import * as icons from "@ant-design/icons-vue";
import Demo from "vitepress-theme-demoblock/dist/client/components/Demo.vue";
import DemoBlock from "vitepress-theme-demoblock/dist/client/components/DemoBlock.vue";

export default {
  ...Theme,
  Layout: () => h(Theme.Layout),
  enhanceApp({ app, router, siteData }) {
    // ...
    app.use(JinkeUI);
    app.component("Demo", Demo);
    app.component("DemoBlock", DemoBlock);
    for (let i in icons) {
      app.component(icons[i].displayName, icons[i]);
    }
  },
};
