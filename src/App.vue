<template>
  <div id="app">
    <!-- <transition name="fade"> -->
      <router-view></router-view>
    <!-- </transition> -->
    
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="less">
@import "~vux/src/styles/reset.less";

body {
  background-color: #fbf9fe;
}

//工具
.inline-block {
  display: inline-block;
}

.scroll-background {
  padding-top: 65px;
  background: @theme-splice-color;
  padding-bottom: 80px;
}
.txt-center {
  text-align: center;
}
.bg-white {
  background: white;
}
</style>
<style lang="less" scoped>
// .fade-enter {
//   opacity: 0;
// }
// .fade-leave {
//   opacity: 1;
// }
// .fade-enter-active {
//   transition: opacity 0.5s;
// }
// .fade-leave-active {
//   opacity: 0;
//   transition: opacity 0.5s;
// }
//
</style>

