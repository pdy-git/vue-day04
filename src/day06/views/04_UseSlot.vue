<template>
  <div>
    <Panel>
      <template #title>
        <h4>芙蓉楼送辛渐</h4>
      </template>
      <template #content>
        <p>寒雨连江夜入吴,</p>
        <p>平明送客楚山孤。</p>
        <p>洛阳亲友如相问，</p>
        <p>一片冰心在玉壶。</p>
        <p>一片冰心在玉壶。</p>
      </template>
    </Panel>
  </div>
</template>

<script>
import Panel from "../components/day06/04/Panel.vue";
export default {
  name: "Demo04UseSlot",

  data () {
    return {};
  },
  components: {
    Panel,
  },
};
</script>

<style scoped></style>
