// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";

// 引入 element-ui
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

// 引入 axios
import axios from "axios";

Vue.use(ElementUI);
Vue.prototype.$axios = axios;

Vue.prototype.douyinhost = "http://localhost:8005";

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
