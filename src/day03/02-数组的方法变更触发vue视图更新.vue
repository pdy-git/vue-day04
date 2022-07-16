<template>
  <div>
    <ul>
      <li v-for="(val, index) in arr" :key="index">
        {{ val }}
      </li>
    </ul>
    <button @click="btn">数组翻转</button>
    <button @click="btn1">截取前3个</button>
    <button @click="btn2">更新第一个元素值</button>
  </div>
</template>

<script>
export default {
  name: "Demo02Test",
  data () {
    return {
      arr: [5, 3, 9, 2, 1],
    };
  },
  methods: {
    btn () {
      this.arr.reverse();
    },
    btn1 () {
      this.arr.slice(0, 3);
      // console.log(this.arr.slice(0, 3));
    },
    btn2 () {
      this.arr[0] = 1000;
      // console.log(this.arr);
      this.$set(this.arr, 1, 2000);
    },
  },
};
</script>
