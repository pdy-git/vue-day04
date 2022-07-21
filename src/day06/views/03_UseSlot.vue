<template>
  <div>
    <panel>
      <template v-slot:title>
        <h4>我是一个标题</h4>
      </template>
      <template #content>
        <p>寒雨连江夜入吴,</p>
        <p>平明送客楚山孤。</p>
        <p>洛阳亲友如相问，</p>
        <p>一片冰心在玉壶。</p>
      </template>
    </panel>
    <panel>
      <p>寒雨连江夜入吴,</p>
      <p>平明送客楚山孤。</p>
      <p>洛阳亲友如相问，</p>
      <p>一片冰心在玉壶。</p>
    </panel>
    <panel>
      <img src="../assets/a.jpg" alt="" />
    </panel>
  </div>
</template>

<script>
import Panel from "../components/day06/03/Panel.vue";
export default {
  name: "Demo03UseSlot",

  data () {
    return {};
  },
  components: {
    Panel,
  },
};
</script>

<style scoped></style>
