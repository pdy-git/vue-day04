<template>
  <div>
    <button @click="comName = 'UserName'">账号密码的填写</button>
    <button @click="comName = 'UserInfo'">个人信息的填写</button>

    <p>下面显示注册组件-动态切换：</p>
    <div style="border: 1px solid red"></div>
    <keep-alive>
      <component :is="comName"></component>
    </keep-alive>
  </div>
</template>

<script>
import UserName from "../components/day06/UserName.vue";
import UserInfo from "../components/day06/UserInfo.vue";
export default {
  data () {
    return {
      comName: "UserName",
    };
  },
  components: {
    UserName,
    UserInfo,
  },
};
</script>

<style></style>
