<template>
  <div>
    <Panel>
      <template v-slot:content="scope">
        <!-- <h1>{{ scope }}</h1> -->
        <h1>{{ scope.row.defaultTwo }}</h1>
        <a href="scope.row.href">{{ scope.row.href }}</a>
      </template>
    </Panel>
  </div>
</template>

<script>
import Panel from "../components/day06/05/Panel.vue";
export default {
  name: "Demo05UseSlot",

  data () {
    return {};
  },
  components: {
    Panel,
  },
};
</script>

<style scoped></style>
