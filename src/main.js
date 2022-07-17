import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

//引入bootstrap
import "bootstrap/dist/css/bootstrap.css";

// 全局过滤器
Vue.filter("reverse", (val, s) => {
  return val.split("").reverse().join(s);
});
new Vue({
  render: (h) => h(App),
}).$mount("#app");
