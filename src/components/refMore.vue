<template>
  <div>
    <p>1. 获取原生DOM元素</p>
    <h1 id="h" ref="myH">我是一个孤独可怜又能吃的h1</h1>

    <!-- <MyDemo ref="getDemo"></MyDemo> -->
    <Demo></Demo>

    <p>3. vue更新DOM是异步的</p>
    <p ref="myP">{{ count }}</p>
    <button @click="btn">点击count+1, 马上提取p标签内容</button>
  </div>
</template>

<script>
// // ref $refs ==> 获取dom元素/组件

// // 1. 创建组件/引入组件/注册组件/使用组件
// // 2. 给组件/dom 起别名ref 起一个标记的作用
// // 3. 获取组件对象/dom元素

// 自己写的++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// import MyDemo from "./Child/Demo.vue";
// export default {
//   data () {
//     return {
//       count: 0,
//     };
//   },
//   mounted () {
//     console.log(document.getElementById("h"));
//     console.log(this.$refs.myH);
//     let Demo = this.$refs.getDemo;
//     // 使用方法
//     Demo.fn();
//   },
//   components: {
//     MyDemo,
//   },
//   methods: {
//     btn () {
//       this.count++;
//       this.$nextTick(() => {
//         console.log(this.$refs.myP.innerHTML);
//       });
//     },
//   },
// };

// 课上内容——————————————————————————————————————————————————————————————————————————————————————
import Demo from "./Child/Demo.vue";
export default {
  name: "MoreTest",
  data () {
    return {
      count: 0,
    };
  },
  methods: {
    btn () {
      this.count++;
      console.log(this.count, "---");
      // console.log(this.$refs.myP.innerHTML);
      this.$nextTick(() => {
        console.log(this.$refs.myP.innerHTML);
      });
    },
  },
  components: {
    Demo,
  },
  beforeMount () {
    this.$nextTick(() => {
      console.log("==", this.$refs.myH);
    });
  },
  mounted () {
    console.log(this.$refs.myH);
    console.log(this.$refs.myDemo);
    console.log(this.$refs.myDemo.msg);
    console.log(this.$refs.myDemo.fn());
  },
};
</script>
