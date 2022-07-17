<template>
  <div>
    <div v-for="item in arr" :key="item" style="display: inline-block">
      <input type="checkbox" />
      <span>{{ item }}</span>
    </div>
    <p>你选中的元素, 累加的值和为:</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      arr: [9, 15, 19, 25, 29, 31, 48, 57, 62, 79, 87],
    };
  },
};
</script>

<style></style>
