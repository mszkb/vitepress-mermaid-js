import DefaultTheme from 'vitepress/theme'
import Mermaid from "./Mermaid.vue";

export default {
  ...DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData` is a `ref` of current site-level metadata.
    // console.log(app);
    // console.log(siteData);
    app.component('Mermaid', Mermaid);
  }
}
