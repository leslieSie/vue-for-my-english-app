<template>
  <div>
    <c-header title="我的"></c-header>
    <div class="scroll-background">
      <grid class="bg-white">
        <grid-item class="txt-center" v-for="item in list">
          <x-img :src="getRealPath(item.icon)"></x-img>
          <p class="p-style">{{item.text}}</p>
        </grid-item>
      </grid>
      <group>
        <cell title="生词本" :is-link="true"></cell>
      </group>
      <group>
        <cell title="课程" :is-link="true"></cell>
        <cell title="金币" :is-link="true"></cell>
        <cell title="兑换" :is-link="true"></cell>
        <cell title="活动" :is-link="true"></cell>
      </group>
      <group>
        <cell title="短信" :is-link="true"></cell>
        <!-- <cell-box tit></cell-box> -->
      </group>
      <group>
        <cell title="帮助与反馈" :is-link="true"></cell>
        <cell title="设置" :is-link="true"></cell>
      </group>
    </div>
    <c-footer mod="user"></c-footer>
  </div>
</template>
<script>
import CHeader from "@/common/Header";
import CFooter from "@/common/Footer";
import { Grid, GridItem, XImg,Group,Cell,CellBox } from "vux";
export default {
  data() {
    return {
      list: [
        {
          icon: "readed.png",
          url: "",
          text: "读后感"
        },
        {
          icon: "myRead.png",
          url: "",
          text: "我的阅读"
        },
        {
          icon: "readProgress.png",
          url: "",
          text: "阅读进度"
        },
        {
          icon: "project.png",
          url: "",
          text: "阅读计划"
        }
      ]
    };
  },
  methods: {
    getRealPath(icon) {
      return "../../static/user/" + icon;
    }
  },
  components: {
    CFooter,
    CHeader,
    Grid,
    GridItem,
    XImg,
    Group,
    Cell,
    CellBox
  }
};
</script>
<style lang="less" scoped>
.p-style {
  border-bottom: 1px solid @theme-light-black;
  color: @theme-best-black;
}
</style>


