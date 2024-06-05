import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { createMetaManager } from "vue-meta";
import { DefaultApolloClient } from "@vue/apollo-composable";
import { apolloClient } from "./apollo-client";

import "@fontsource/bebas-neue/index.css";
import "@fontsource/roboto-flex/index.css";
import "@fontsource/alfa-slab-one/index.css";
// createApp(App).mount('#app')

// HTTP connection to the API

const app = createApp(App);
app.provide(DefaultApolloClient, apolloClient);
app.use(router);
app.use(createMetaManager());
app.mount("#app");
