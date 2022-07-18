import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

//引入bootstrap
import "bootstrap/dist/css/bootstrap.css";

//引入组件
import Panel from "./components/Panel-1.vue";
//全局使用
Vue.component("PannelG", Panel);

// 全局过滤器
Vue.filter("reverse", (val, s) => {
  return val.split("").reverse().join(s);
});
new Vue({
  render: (h) => h(App),
}).$mount("#app");
