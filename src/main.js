import Vue from "vue";
import Buefy from "buefy";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "buefy/dist/buefy.css";
import "./assets/bulma-social.min.css";
import axios from "axios";
import "./vee-validate";
import VueProgressBar from "vue-progressbar";

Vue.config.productionTip = false;

Vue.use(Buefy, {
  defaultIconPack: "fas"
});

Vue.use(VueProgressBar, {
  color: "#23d160",
  thickness: "6px"
});

Vue.prototype.$http = axios;
const access_token = localStorage.getItem("token");
if (access_token) {
  Vue.prototype.$http.defaults.headers.common["Authorization"] =
    "Bearer " + access_token;
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
