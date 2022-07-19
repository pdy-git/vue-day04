<template>
  <div>
    <input ref="myInp" type="text" placeholder="这是一个输入框" v-if="isShow" />
    <button @click="search">点击我进行搜索</button>
  </div>
</template>

<script>
// 需求: 点按钮(消失) - 输入框出现并聚焦
// 1. 获取到输入框
// 2. 输入框调用事件方法focus()达到聚焦行为

export default {
  data () {
    return {
      isShow: false,
    };
  },
  methods: {
    // 方法一
    // search () {
    //   this.isShow = true;

    //   this.$refs.myInp.focus();
    //   this.$nextTick(() => {
    //     this.$refs.myInp.focus();
    //   });
    // },

    // 方法二
    async search () {
      this.isShow = true;

      await this.$nextTick();
      this.$refs.myInp.focus();
    },
  },
};

// 课上内容————————————————————————————————————————————————————————
// export default {
//   name: "TickTest",
//   data () {
//     return {
//       isShow: false,
//     };
//   },
//   methods: {
//     search () {
//       this.isShow = true;
//       this.$refs.myInp.focus();

//       // this.$nextTick(() => {
//       //   this.$refs.myInp.focus();
//       // });
//     },
//   },
// };
</script>

<style></style>
