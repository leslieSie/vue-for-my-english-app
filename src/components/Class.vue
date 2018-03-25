<template>
  <div>
    <c-header title="课程"></c-header>
    <div class="scroll-background">
      <div style="padding:10px;">
        <card>
              <img slot="logo" style="width:100%" src="../../static/icon/learn.jpg" />
        </card>
      </div>
    </div>
    <c-footer mod="class"></c-footer>
  </div>
</template>
<script>
import CHeader from "@/common/Header";
import CFooter from "@/common/Footer";
import Card from "@/common/Card";
export default {
  data() {
    return {};
  },
  components: {
    CHeader,
    CFooter,
    Card
  }
};
</script>
<style lang="less" scoped>
// .scroll-background {
//   padding: 10px;
// }
</style>



