import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { createMetaManager } from "vue-meta";
import "@fontsource/bebas-neue/index.css";
import "@fontsource/roboto-flex/index.css";
import "@fontsource/alfa-slab-one/index.css";
// createApp(App).mount('#app')

const app = createApp(App);
app.use(router);
app.use(createMetaManager());
app.mount("#app");
