<template>
  <div>
    <ComNameHaHa></ComNameHaHa>
  </div>
</template>

<script>
import Com from "./components/Com.vue";
export default {
  components: {
    // "ComNameHaHa": Com
    [Com.name]: Com,
  },
};
</script>

<style></style>
