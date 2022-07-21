<template>
  <div>
    <div>
      <span>人生格言:</span>
      <input type="text" />
    </div>
    <div>
      <span>个人简介:</span>
      <textarea></textarea>
    </div>
  </div>
</template>
<script>
export default {
  activated () {
    // 组件激活
    console.log("activated--userName");
  },
  deactivated () {
    // 组件失活
    console.log("deactivated--userNames");
  },
};
</script>
