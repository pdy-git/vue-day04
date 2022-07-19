<template>
  <div>
    <h1>1.生命周期</h1>
    <Life v-if="isfo"></Life>
    <button @click="isfo = !isfo">销毁</button>
  </div>
</template>

<script>
import Life from "./components/Life.vue";
export default {
  data () {
    return {
      isfo: true,
    };
  },
  components: {
    Life,
  },
};
</script>

<style></style>
