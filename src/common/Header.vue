<template>
  <div>
      <x-header class="x-header" :left-options="{showBack: false}" :title="title"></x-header>
  </div>
</template>
<script>
import { XHeader } from "vux";
export default {
  data() {
    return {};
  },
  components: {
    XHeader
  },
  props: ["title"]
};
</script>
<style lang="less" scoped>
.x-header {
  padding: 10px 0px;
  border-bottom:1px solid @theme-splice-color; 
  width:100%;
  position:fixed
}
</style>


