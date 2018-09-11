<template>
  <div class="myAddress">
    <x-header class="vux-1px-b" :left-options="{backText: ''}">我的地址<router-link to="/editAddress" slot="right">新增地址</router-link></x-header>
    <div class="address-list" v-for="(item, index) in addressList" :key="index">
        <p class="list-top">{{item.contact}}&nbsp;&nbsp;&nbsp;&nbsp;{{item.mobile}}</p>
        <p class="list-bottom">{{item.province}}{{item.city}}{{item.area}}{{item.detail}}</p> 
        <img src="../../../assets/icon/edit.png" alt="">
    </div>
  </div>
</template>

<script>
import { ViewBox, XHeader, Card } from "vux";
export default {
  name: "myAddress",
  components: {
    ViewBox,
    XHeader,
    Card
  },
  data() {
    return {
      addressList: []
    };
  },
  created () {
    this.queryUserAddress();
  },
  methods: {
    queryUserAddress() {
      this.$api
        .queryUserAddress({})
        .then(data => {
          if (data.code === 200) {
            this.addressList = data.data.address;
          }       
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.address-list {
  padding: 0.3rem 0.3rem;
  border-bottom: 1px solid #e6e6e6;
  position: relative;
  p {
    padding: 0;
    text-align: left;
  }
  img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0.3rem;
    width: .6rem;
  }
  .list-top {
    font-size: 16px;
    font-weight: 800;
  }
  .list-bottom {
    font-size: 12px;
  }
}
</style>
