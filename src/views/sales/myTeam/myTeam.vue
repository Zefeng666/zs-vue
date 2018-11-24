<template>
  <div class="myTeam">
    <x-header class="my-header vux-1px-b" :left-options="{backText: ''}">我的团队</x-header>
    <tab :line-width=2 active-color='#2a93f5' v-model="index" class="my-tab">
      <tab-item class="vux-center vux-1px-t" selected>一级用户</tab-item>
      <tab-item class="vux-center vux-1px-t">二级用户</tab-item>
    </tab>
    <div class="card-head" v-show="index === 0">
      <div slot="content" class="menber-box">
        <div class="menber-box-item vux-1px-b" v-for="(item, index) in firstTeam" :key="index">
          <img class="menber-avator" :src="item.wechatAvatar" alt="">
          <p>{{item.username}}</p>
          <p>等级：{{item.vipLevel | formatVipLevel}}</p>
        </div>
      </div>
    </div>
    <div class="card-head" v-show="index === 1">
      <div slot="content" class="menber-box">
        <div class="menber-box-item vux-1px-b" v-for="(item, index) in secondTeam" :key="index">
          <img class="menber-avator" :src="item.wechatAvatar" alt="">
          <p>{{item.username}}</p>
          <p>等级：{{item.vipLevel | formatVipLevel}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ViewBox, XHeader, Card, Countup, VChart, VTooltip, VLine, VScale, Tab, TabItem } from "vux";
export default {
  name: "myTeam",
  components: {
    ViewBox,
    XHeader,
    Card,
    Countup,
    VChart, 
    VTooltip, 
    VLine, 
    VScale,
    Tab,
    TabItem,
  },
  created () {
    this.queryMyTeam()
  },
  data() {
    return {
      cardTitle: '我属于的团队',
      firstTeam: [],
      index: 0
    };
  },
  methods: {
    queryMyTeam() {
      this.$vux.loading.show({
        text: ''
      });
      this.$api
        .queryMyTeam()
        .then(data => {
          if (data.code === 200) {
            this.firstTeam = data.data.firstUser;
            this.secondTeam = data.data.secondUser;
          } else {
            this.$vux.toast.text(data.message, "top");
          }
          this.$vux.loading.hide();
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.myTeam {
  padding-top: 44px;
}
.my-header {
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
}
.card-head {
  text-align: left;
}
.card-demo-flex {
  display: flex;
}
.card-demo-content01 {
  padding: .4rem 0;
}
.card-demo-flex > div {
  flex: 1;
  text-align: center;
  font-size: 1px;
}
.card-flex-top {
  font-size: 16px;
}
.card-flex-bottom {
  font-size: 14px;
}
.countup-box {
  font-size: 16px;
  padding: .4rem 0;
  text-align: center;
  .countup-number {
    font-size: 20px;
  }
}
.menber-box {
  position: relative;
  background-color: #fff;
  .menber-box-item {
    padding: .4rem 0;
    .menber-avator {
      position: absolute;
      width: 1.2rem;
      left: .5rem;
      top: 50%;
      transform: translateY(-50%);
    }
    p {
      font-size: 14px;
      padding-left: 2.2rem;
    }
  }
}
</style>
