<template>
  <div>
    <div>
      <span>用户名:</span>
      <input type="text" />
    </div>
    <div>
      <span>密码:</span>
      <input type="password" />
    </div>
  </div>
</template>
<script>
export default {
  // created () {
  //   console.log("创建");
  // },
  // destroyed () {
  //   console.log("销毁");
  // },
  activated () {
    // 组件激活
    console.log("activated--userName");
  },
  deactivated () {
    // 组件失活
    console.log("deactivated--密码");
  },
};
</script>
