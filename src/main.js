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
// axios
// import axios from "axios";
// //全局配置一个baseURL
// axios.defoults.baseURL = "http://123.57.109.30:3006/";

// Vue.prototype.$axios = axios; //在原型上

//Vue.directive("指令名称" ，{})

new Vue({
  render: (h) => h(App),
}).$mount("#app");
