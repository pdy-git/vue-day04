<template>
  <div>
    <Panel :list="list"></Panel>
    <Panel :list="list">
      <template v-slot:headImgUrl="scope">
        <img src="scope.row.headImgUrl" alt="" />
      </template>

      <!-- <template v-slot="scope">
        <img style="width: 100px" :src="scope.row.headImgUrl" alt="" />
      </template> -->
    </Panel>
  </div>
</template>

<script>
import Panel from "../components/day06/06/MyTable.vue";
export default {
  data () {
    return {
      list: [
        {
          name: "小传同学",
          age: 18,
          headImgUrl:
            "http://yun.itheima.com/Upload/./Images/20210303/603f2d2153241.jpg",
        },
        {
          name: "小黑同学",
          age: 25,
          headImgUrl:
            "http://yun.itheima.com/Upload/./Images/20210304/6040b101a18ef.jpg",
        },
        {
          name: "智慧同学",
          age: 21,
          headImgUrl:
            "http://yun.itheima.com/Upload/./Images/20210302/603e0142e535f.jpg",
        },
      ],
    };
  },
  components: {
    Panel,
  },
};
</script>
