<template>
  <div>
    <c-header title="发现"></c-header>
    <div class="scroll-background">
      <grid class="bg-white">
        <grid-item class="txt-center" v-for="item in list1" :key="item.text">
          <img :src="getRealIcon(item.icon)" />
          <p>{{item.text}}</p>
        </grid-item>
      </grid>
      <div style="padding:5px 0px;">
        <grid>
          <grid-item>
            <x-img style="max-height:200px;width:100vw;" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1521967813323&di=d6e03ae92e29cb2034e9387f06eb8787&imgtype=0&src=http%3A%2F%2Fimg.tuku.cn%2Ffile_thumb%2F201504%2Fm2015040415043028.jpg"></x-img>
          </grid-item>
        </grid>
      </div>
      <div style="padding:10px;" class="bg-white">
        <grid>
          <grid-item v-for="item in comList2" :key="item.text" class="txt-center">
            <x-img :src="item.icon"></x-img>
            <p>{{item.text}}</p>
          </grid-item>
          <!-- <grid-item class="txt-center">
            <x-img src="../../static/find/video.png"></x-img>
          </grid-item> -->
        </grid>
      </div>
      <div style="padding:10px;" class="bg-white">
        <grid>
          <grid-item v-for="item in comList3" :key="item.text" class="txt-center">
            <x-img :src="item.icon"></x-img>
            <p>{{item.text}}</p>
          </grid-item>
        </grid>
      </div>
    </div>
    <c-footer mod="find"></c-footer>
  </div>
</template>
<script>
import CFooter from "@/common/Footer";
import CHeader from "@/common/Header";
import { Grid, GridItem, XImg } from "vux";
// import Card from "@/common/Card";
export default {
  data() {
    return {
      list1: [
        {
          text: "自习室",
          icon: "classroom.png",
          url: ""
        },
        {
          text: "同桌",
          icon: "classmate.png",
          url: ""
        },
        {
          text: "小组",
          icon: "group.png",
          url: ""
        }
      ],
      list2: [
        {
          icon: "shop.png",
          text: "商城",
          url: ""
        },
        {
          icon: "video.png",
          text: "视频",
          url: ""
        }
      ],
      list3: [
        {
          icon: "juzi.png",
          text: "每日一句",
          url: ""
        },
        {
          icon: "choice.png",
          text: "精选",
          url: ""
        },
        {
          icon: "game.png",
          text: "小游戏",
          url: ""
        },
        {
          icon: "family.png",
          text: "家族",
          url: ""
        }
      ]
    };
  },
  methods: {
    getRealIcon(icon) {
      return "../../static/find/" + icon;
    }
  },
  computed: {
    comList2() {
      // return commonList(this.list2);
      let arr = this.list2.slice(0);
      for (let i = 0; i < arr.length; i++) {
        arr[i].icon = "../../static/find/" + arr[i].icon;
      }
      return arr;
    },
    comList3() {
      let arr = this.list3.slice(0);
      for (let i = 0; i < arr.length; i++) {
        arr[i].icon = "../../static/find/" + arr[i].icon;
      }
      return arr;
    },
    // commonList(list) {
    //   let arr = list.slice(0);
    //   for (let i = 0; i < arr.length; i++) {
    //     arr[i].icon = "../../static/find/" + arr[i].icon;
    //   }
    //   return arr;
    // }
  },
  components: {
    CFooter,
    CHeader,
    Grid,
    GridItem,
    XImg
    // Card
  }
};
</script>
<style lang="less" scoped>

</style>


