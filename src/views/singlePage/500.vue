<template>
    <div class="mall">
        <!-- <x-header class="vux-1px-b my-header" :left-options="{showBack: false}">商城</x-header> -->
        <msg :title="'警告'" :description="'服务器出错了~'" :buttons="buttons" :icon="'warn'"></msg>
        <!-- <template v-for="(item, index) in productList">
          <div class="mall-goods-item vux-1px-b" :key="index">
            <div class="goods-img-box">
              <img class="goods-img" :src="item.url">
            </div>
            <div class="goods-info-box">
              <span class="goods-info-name">{{item.name}}</span><br>
              <span class="goods-info-detail">{{item.detail.substring(0, 38) + '...'}}</span><br>
              <p class="goods-info-price">￥<span style="font-weight: 600;">{{item.vipPrice}}</span>/件</p>
            </div>
          </div>
        </template> -->
        <div>
          <span></span>
        </div>
    </div>
</template>

<script>
import { ViewBox, XHeader, Card, XButton, Msg, Divider } from "vux";
export default {
  name: "mall",
  components: {
    ViewBox,
    XHeader,
    Card,
    XButton,
    Msg, 
    Divider
  },
  created() {
  },
  data() {
    return {
        productList: [],
        buttons: [
          {
            type: 'primary',
            text: '返回首页',
            link: '/'
          }, 
          {
            type: 'default',
            text: '返回上一页',
            onClick: this.goAhead
          }
        ]
    };
  },
  methods: {
    goAhead() {
      
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.mall {
  padding-top: 44px;
}
.my-header {
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
}
.mall-goods-item {
  text-align: left;
  background-color: #fff;
  padding: .3rem .4rem;
  position: relative;
}
.goods-img-box {
  display: inline-block;
  width: 33%;
  height: 33vw;
  font-size: 0;
  border-radius: 5px;
  overflow: hidden;
  position: absolute;
  left: .3rem;
  top: 50%;
  transform: translateY(-50%);
  .goods-img {
    width: 100%;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
}
.goods-info-box {
  width: 62%;
  display: inline-block;
  vertical-align: top;
  font-size: 16px;
  padding-left: 38%;
  padding-top: .1rem;
  .goods-info-name {
    font-weight: 600;
  }
  .goods-info-detail {
    font-size: 14px;
    color: #999;
    line-height: 1;
  }
  .goods-info-price {
    text-align: right;
    font-size: 18px;
    color: #f74c31;
  }
}
</style>
