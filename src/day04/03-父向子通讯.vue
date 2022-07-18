<template>
  <div>
    <!-- 
      目标: 父(App.vue) -> 子(MyProduct.vue) 分别传值进入
      需求: 每次组件显示不同的数据信息
      步骤(口诀):
        1. 子组件 - props - 变量 (准备接收)
        2. 父组件 - 传值进去
     -->
    <Panel title="超级好吃的口水鸡" price="50" :info="shop"></Panel>
  </div>
</template>

<script>
// 引入
import Panel from "./components/03-父向子通信.vue";
export default {
  data () {
    return {
      msg: "超级好吃的口水鸡",
      shop: "购物大酬宾",
    };
  },
  components: {
    Panel,
  },
};
</script>
