<template>
  <div class="footer">
      <div @click="goToPath(item.name)" v-bind:class="{active:getRealPath(item).status}" class="footer-item" v-for="item in footerList">
        <img style="width:30px;" :src="getRealPath(item).url" />
        <br>
        <span>{{item.text}}</span>
      </div>
  </div>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {
      footerList: [
        {
          icon: "home.png",
          iconSelected: "home-selected.png",
          url: "",
          text: "首页",
          name: "Home"
        },
        // {
        //   icon: "class.png",
        //   iconSelected: "class-selected.png",
        //   url: "",
        //   text: "课程",
        //   name: "Class"
        // },
        {
          icon: "find.png",
          iconSelected: "find-selected.png",
          url: "",
          text: "发现",
          name: "Find"
        },
        {
          icon: "user.png",
          iconSelected: "user-selected.png",
          url: "",
          text: "我的",
          name: "User"
        }
      ],
      status: false
    };
  },
  methods: {
    getRealPath(item) {
      let returnVal = {};
      if (this.mod == item.name.toLowerCase()) {
        returnVal.url = "../../static/icon/" + item.iconSelected;
        returnVal.status = true;
      } else {
        returnVal.url = "../../static/icon/" + item.icon;
        returnVal.status = false;
      }
      return returnVal;
    },
    goToPath(name) {
      // console.log(name);
      let path = "/"+name.toLowerCase();
      this.$router.push(path);
    }
  },
  computed: {},
  mounted() {},
  props: ["mod"]
};
</script>
<style lang="less" scoped>
.footer {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  position: fixed;
  bottom: 0px;
  background: white;
  padding:5px 0px;
  .footer-item {
    flex-grow: 1;
    text-align: center;
    &.active {
      span {
        color: @theme-color;
      }
    }
  }
}
</style>


