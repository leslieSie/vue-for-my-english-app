<template>
  <div>
      <x-header class="header" :left-options="{showBack: false}" slot="overwrite-title">
        <div class="inline-block">
          <div class="inline-block index-tab-item active">
            <span>首页</span>
            </div>
          <div class="inline-block index-tab-item">
            <span>读书</span>
            </div>
        </div>
        <a slot="right">
          <img class="img-size" src="../../static/icon/bell.png" />
        </a>
      </x-header>
      <div class="scroll-background">
        <div @click="goToArticle(firstModule.articleId)" class="article-module first">
          <x-img :src="firstModule.pic" style="max-height:200px;width:100%;"></x-img>
          <div name="title">{{firstModule.title}}</div>
          <div name="summary">{{firstModule.summary}}</div>
          <div>
            <span name="level">{{firstModule.levelText}}</span>
            单词:
            <span name="words">{{firstModule.words}}</span>
            读后感:
            <span name="reader">{{firstModule.reader}}</span>
          </div>
        </div>
        <div @click="goToArticle(item.articleId)" v-for="item in otherModule" class="article-module no-first">
           <div name="title">{{item.title}}</div>
           <div>
             <div name="left">
               <div name="summary">
                 {{item.summary}}
               </div>
              <span name="level">{{item.levelText}}</span>
              单词:
              <span name="words">{{item.words}}</span>
              读后感:
              <span name="reader">{{item.reader}}</span>
             </div>
            <div name="right">
              <x-img :src="item.pic"></x-img>
            </div>
          </div>
        </div>
        
        <!-- <span>{{$store.state.score}}</span> -->
      </div>
      <c-footer mod="home"></c-footer>
      <!-- <grid :span="12">
      </grid> -->
  </div>
</template>
<script>
import CFooter from "@/common/Footer";
import { Grid, XHeader, ButtonTab, ButtonTabItem, XImg } from "vux";
export default {
  data() {
    return {
      dataList: [
        {
          pic:
            "http://img2.chinadaily.com.cn/images/201803/22/5ab3035ba3105cdce09ed114.jpeg",
          summary:
            "The 2018 Fall Winter Shanghai Fashion Week (SFW) will kick off on March 28, event organizers Shangtex Group announced on Tuesday.",
          levelText: "四级",
          title: "Chinese actress Li Bingbing releases fashion photos",
          words: "408",
          reader: "63",
          articleId: "1"
        },
        {
          pic:
            "http://img2.chinadaily.com.cn/images/201803/22/5ab3035ba3105cdce09ed114.jpeg",
          summary:
            "The 2013 Fall Winter Shanghai Fashion Week (SFW) will kick off on March 28, event organizers Shangtex Group announced on Tuesday.",
          levelText: "四级",
          title: "Shanghai Fashion Week to return on March 28",
          words: "408",
          reader: "63",
          articleId: "2"
        },
        {
          pic:
            "http://img2.chinadaily.com.cn/images/201803/22/5ab3035ba3105cdce09ed114.jpeg",
          summary:
            "The 2018 Fall Winter Shanghai Fashion Week (SFW) will kick off on March 28, event organizers Shangtex Group announced on Tuesday.",
          levelText: "四级",
          title: "Shanghai Fashion Week to return on March 28",
          words: "408",
          reader: "63",
          articleId: "3"
        }
      ]
    };
  },
  computed: {
    firstModule() {
      for (var i = 0; i < this.dataList.length; i++) {
        if (i == 0) {
          return this.dataList[i];
        }
      }
    },
    otherModule() {
      let newArr = [];
      for (var i = 0; i < this.dataList.length; i++) {
        if (i != 0) {
          newArr.push(this.dataList[i]);
        }
      }
      return newArr;
    }
  },
  components: {
    Grid,
    XHeader,
    ButtonTab,
    ButtonTabItem,
    XImg,
    CFooter
  },
  methods: {
    goToArticle(id) {
      let url = "/article/" + id;
      this.$router.push(url);
    }
  }
};
</script>
<style lang="less" scoped>
.header {
  /* background: yellow; */
  padding: 10px 0px;
  border-bottom: 1px solid #fafafa;
  position: fixed;
  width: 100%;
}

.index-tab-item {
  padding: 2px 8px 0px;
  &.active {
    // border-bottom: 1px solid red;
    color: @theme-color;
  }
}

.img-size {
  width: 27px;
  margin-top: 3px;
}

.article-module {
  background: white;
  // font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  [name="title"] {
    font-size: 20px;
    font-weight: bold;
  }
  [name="summary"] {
    max-height: 50px;
    overflow: hidden;
  }
  [name="level"] {
    margin: 10px 15px 0px;
    // font-size: 16px;
  }
  [name="words"],
  [name="reader"] {
    margin: 0px 15px;
  }

  &.no-first {
    margin-top: 10px;
    [name="left"] {
      width: 78%;
      display: inline-block;
    }
    [name="right"] {
      width: 20%;
      display: inline-block;
    }
  }
}


</style>


