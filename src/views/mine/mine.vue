<template>
  <div class="mine">
    <div class="mine-msg">
      <img class="avator" :src="userInfo.wechatAvatar" alt="">
      <p>微信昵称：{{userInfo.username}}</p>
      <p>等级： {{userInfo.vipLevel | formatVipLevel}}</p>
    </div>
    <group>
      <cell class="my-cell" title="我的地址" value-align="left" link="/myAddress"></cell>
      <cell class="my-cell" title="我的银行卡" value-align="left" link="/myBankCard"></cell>
      <cell class="my-cell" title="我的推荐码" value-align="left" link="/qrcode"></cell>
      <cell class="my-cell" title="我的身份证" value-align="left" link="/myIdCard"><span :class="[userInfo.isAuditIdCard === 1 ? 'text-green' : 'text-red']">{{idCardStatus}}</span></cell>
    </group>
    <tabbar :activeIndex="1"></tabbar>
  </div>
</template>

<script>
import { ViewBox, Cell, Group, XHeader } from "vux";
import Tabbar from "@/components/Tabbar";
export default {
  name: "mine",
  components: {
    ViewBox,
    Tabbar,
    Cell,
    Group,
    XHeader
  },
  created () {
    this.queryUser();
  },
  data() {
    return {
      userInfo: {}
    };
  },
  computed: {
    idCardStatus: function () {
      if (this.userInfo.isAuditIdCard === -1) {
        return '(未提交)';
      } else if (this.userInfo.isAuditIdCard === 0) {
        return '(审核中)';
      } else if (this.userInfo.isAuditIdCard === 1) {
        return '(审核通过)';
      } else if (this.userInfo.isAuditIdCard === 2) {
        return '(审核未通过)';
      }
    }
  },
  methods: {
    queryUser() {
      this.$api
        .queryUser({})
        .then(data => {
          if (data.code === 200) {
            console.log(data);
            this.userInfo = data.data.user;
          }       
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.mine {
  background-color: #fff;
}
.mine-msg {
  position: relative;
  vertical-align: middle;
  padding-top: 1rem;
  margin-bottom: 1rem;
  p {
    text-align: left;
    padding-left: 40%;
    font-size: 18px;
  }
}
.avator {
  width: 20%;
  position: absolute;
  top: 30%;
  left: 10%;
}
.my-cell {
  padding-top: .4rem;
  padding-bottom: .4rem;
}
.text-red {
  color: #f74c31;
}
.text-green {
  color: #0BB20C;
}
</style>
