<template>
  <div>
    <p>我是Demo组件</p>
  </div>
</template>

<script>
export default {
  name: "DemoTest",
  data () {
    return {
      msg: "我是Demo组件",
    };
  },
  methods: {
    fn () {
      console.log("demo组件内的方法被调用了");
    },
  },
};
</script>

<style></style>
