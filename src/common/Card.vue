<template>
  <div>
      <div class="card">
        <div class="inline-block col-3 left-param">
            <slot name="logo">
            </slot>
        </div>
        <div class="inline-block col-6">
          <div style="display:flex;justify-content:center;align-items:center;">
            <div>365计划</div>
            <div>一等奖奖品首次公布</div>
          </div>
        </div>
        <div class="inline-block col-3">3</div>
      </div>
  </div>
</template>
<script>
import { Grid, GridItem } from "vux";
export default {
  data() {
    return {};
  },
  components: {
    Grid,
    GridItem
  }
};
</script>
<style lang="less" scoped>
.card {
  width: 100%;
  background: white;
  height: 100px;
  box-shadow: 0px 0px 5px @shadow-black;
  border-radius: 8px;
}
.col-3 {
  width: 23%;
}
.col-6 {
  width: 48%;
}
.left-param{
    padding:3px;
}
</style>


