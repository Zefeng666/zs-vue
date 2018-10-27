<template>
  <div class="myTeam">
    <x-header class="my-header vux-1px-b" :left-options="{backText: ''}">我的团队</x-header>
    <!-- <card class="card-head" :header="{title: '团队信息'}">
      <div slot="content" class="card-demo-flex card-demo-content01">
        <div class="vux-1px-r">
          <span class="card-flex-top">总代理</span>
          <br/>
          <span class="card-flex-bottom">张三</span> 
        </div>
        <div>
          <span class="card-flex-top">团队成员</span>
          <br/>
          <span class="card-flex-bottom">188人</span> 
        </div>
      </div>
    </card> -->
    <!-- <card class="card-head" :header="{title: '本月业绩'}">
      <div slot="content" class="countup-box">
        <countup class="countup-number" :start-val="0" :end-val="9999" :duration="1.5"></countup>
        <span>件</span>
      </div>
    </card> -->
    <!-- <card class="card-head" :header="{title: '业绩折线'}">
      <div slot="content" class="countup-box">
        <v-chart :data="data" prevent-default>
          <v-scale x :tick-count="3" />
          <v-tooltip :show-item-marker="false" show-x-value />
          <v-line />
        </v-chart>
      </div>
    </card> -->
    <card class="card-head" :header="{title: '团队成员'}">
      <div slot="content" class="menber-box">
        <div class="menber-box-item vux-1px-b" v-for="(item, index) in myTeam" :key="index">
          <img class="menber-avator" :src="item.wechatAvatar" alt="">
          <p>{{item.username}}</p>
          <p>等级：{{item.vipLevel | formatVipLevel}}</p>
        </div>
      </div>
    </card>
  </div>
</template>

<script>
import { ViewBox, XHeader, Card, Countup, VChart, VTooltip, VLine, VScale } from "vux";
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
    VScale
  },
  created () {
    this.queryMyTeam()
  },
  data() {
    return {
      cardTitle: '我属于的团队',
      myTeam: [],
      data: [
        { date: '2017-06-05', value: 116 },
        { date: '2017-06-06', value: 129 },
        { date: '2017-06-07', value: 135 },
        { date: '2017-06-08', value: 86 },
        { date: '2017-06-09', value: 73 },
        { date: '2017-06-10', value: 85 },
        { date: '2017-06-11', value: 73 },
        { date: '2017-06-12', value: 68 },
        { date: '2017-06-13', value: 92 },
        { date: '2017-06-14', value: 130 },
        { date: '2017-06-15', value: 245 },
        { date: '2017-06-16', value: 139 },
        { date: '2017-06-17', value: 115 },
        { date: '2017-06-18', value: 111 },
        { date: '2017-06-19', value: 309 },
        { date: '2017-06-20', value: 206 },
        { date: '2017-06-21', value: 137 },
        { date: '2017-06-22', value: 128 },
        { date: '2017-06-23', value: 85 },
        { date: '2017-06-24', value: 94 },
        { date: '2017-06-25', value: 71 },
        { date: '2017-06-26', value: 106 },
        { date: '2017-06-27', value: 84 },
        { date: '2017-06-28', value: 93 },
        { date: '2017-06-29', value: 85 },
        { date: '2017-06-30', value: 73 },
        { date: '2017-07-01', value: 83 },
        { date: '2017-07-02', value: 125 },
        { date: '2017-07-03', value: 107 },
        { date: '2017-07-04', value: 82 },
        { date: '2017-07-05', value: 44 },
        { date: '2017-07-06', value: 72 },
        { date: '2017-07-07', value: 106 },
        { date: '2017-07-08', value: 107 },
        { date: '2017-07-09', value: 66 },
        { date: '2017-07-10', value: 91 },
        { date: '2017-07-11', value: 92 },
        { date: '2017-07-12', value: 113 },
        { date: '2017-07-13', value: 107 },
        { date: '2017-07-14', value: 131 },
        { date: '2017-07-15', value: 111 },
        { date: '2017-07-16', value: 64 },
        { date: '2017-07-17', value: 69 },
        { date: '2017-07-18', value: 88 },
        { date: '2017-07-19', value: 77 },
        { date: '2017-07-20', value: 83 },
        { date: '2017-07-21', value: 111 },
        { date: '2017-07-22', value: 57 },
        { date: '2017-07-23', value: 55 },
        { date: '2017-07-24', value: 60 }
      ]
    };
  },
  methods: {
    queryMyTeam(code) {
      this.$api
        .queryMyTeam()
        .then(data => {
          if (data.code === 200) {
            this.myTeam = data.data.users;
          } else {
            this.$vux.toast.text(data.message, "top");
          }
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
