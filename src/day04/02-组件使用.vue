<template>
  <div id="app">
    <h3>案例：折叠面板</h3>
    <panel></panel>
    <PannelG></PannelG>
    <PannelG></PannelG>
  </div>
</template>

<script>
//引入组件
import Panel from "./components/Panel-1.vue";
export default {
  data () {
    return {
      isShow: false,
    };
  },
  components: {
    Panel,
  },
};
</script>

<style lang="less">
body {
  background-color: #ccc;
  #app {
    width: 400px;
    margin: 20px auto;
    background-color: #fff;
    border: 4px solid blueviolet;
    border-radius: 1em;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
    padding: 1em 2em 2em;
    h3 {
      text-align: center;
    }
  }
}
</style>
