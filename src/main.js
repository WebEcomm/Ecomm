import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

const app = createApp(App);

app.use(router);

app.mount("#app");

// import Vue from 'vue';
// import { App } from './App.vue';
// import router from './router';

// // Vue.config.productionTip = false;

// new View({
//     router,
//     render: h => h(App)
// }).$mount('#app')
