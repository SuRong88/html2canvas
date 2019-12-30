Vue.config.productionTip = false;
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueAwesomeSwiper from 'vue-awesome-swiper'
import formcheck from 'utils/formcheck';
import request from "./utils/request";
Vue.use(VueAwesomeSwiper)
Vue.use(formcheck)
import 'css/common.css';
import 'css/base.less';
import 'css/layout.less';
import 'swiper/dist/css/swiper.css'
window.vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
