import App from "@/App.vue";
import VueCompositionAPI from "@vue/composition-api";
import Vue from "vue";

Vue.use(VueCompositionAPI);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
