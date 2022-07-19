<template>
  <div>
    <p>学习生命周期 - 看控制台打印</p>
    <p id="myP">{{ msg }}</p>
    <ul id="myUL">
      <li v-for="item in arr" :key="item">{{ item }}</li>
    </ul>
    <button @click="arr.push(1000)">点击末尾加值</button>
  </div>
</template>

<script>
export default {
  name: "LifeAxiosLife",

  data () {
    return {
      msg: "Hello Vue!",
      arr: [1, 2, 3, 4],
      timer: null, //保存计时器
    };
  },
  beforeCreate () {
    console.log("执行了");
    console.log(this.msg);
  },
  created () {
    console.log("执行了------------");
    console.log(this.msg);

    this.timer = setInterval(() => {
      console.log("hhh");
    }, 1000);
  },

  //二 .挂载
  // 预处理data， 不会触发Updaded钩子函数
  beforeMount () {
    console.log("挂载---------------");
    console.log(document.getElementById("myP"));

    this.msg = "重新赋值";
  },
  mounted () {
    console.log("挂载---------------");
    console.log(document.getElementById("myP"));
  },

  //更新
  beforeUpdate () {
    console.log("更新 ----------------");
    console.log(document.querySelectorAll("#myUL>li")[4]);
  },
  updated () {
    console.log("更新 ----------------");
    console.log(document.querySelectorAll("#myUL>li")[4]);
  },

  //销毁
  beforeDestroy () {
    console.log("销毁");
    clearInterval(this.timer);
  },
  destroyed () {
    console.log("销毁");
  },
};
</script>
