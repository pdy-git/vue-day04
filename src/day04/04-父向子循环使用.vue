<template>
  <div>
    <!-- 
      目标: 父(App.vue) -> 子(MyProduct.vue) 分别传值进入
      需求: 每次组件显示不同的数据信息
      步骤(口诀):
        1. 子组件 - props - 变量 (准备接收)
        2. 父组件 - 传值进去
     -->
    <Panel
      v-for="value in list"
      :key="value.id"
      :title="value.proname"
      :price="value.proprice"
      :info="value.info"
    >
    </Panel>
  </div>
</template>

<script>
// 引入
import Panel from "./components/03-父向子通信.vue";
export default {
  data () {
    return {
      msg: "超级好吃的口水鸡",
      list: [
        {
          id: 1,
          proname: "超级好吃的棒棒糖",
          proprice: 18.8,
          info: "开业大酬宾, 全场8折",
        },
        {
          id: 2,
          proname: "超级好吃的大鸡腿",
          proprice: 34.2,
          info: "好吃不腻, 快来买啊",
        },
        {
          id: 3,
          proname: "超级无敌的冰激凌",
          proprice: 14.2,
          info: "炎热的夏天, 来个冰激凌了",
        },
        {
          id: 4,
          proname: "超级无敌的冰激凌",
          proprice: 13.2,
          info: "炎热的夏天, 来个冰激凌了",
        },
      ],
    };
  },
  components: {
    Panel,
  },
};
</script>
