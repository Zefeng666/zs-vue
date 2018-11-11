<template>
    <div class="goodsInfo">
        <x-header class="vux-1px-b my-header" :left-options="{backText: ''}">{{productInfo.name}}</x-header>
        <card class="card-head" :header="{title: '商品图片'}">
            <div slot="content" class="card-demo-content01">
                <img class="goods-img" :src="productInfo.url" alt="">
            </div>
        </card>
        <card class="card-head" :header="{title: '商品简介'}">
            <div class="goods-msg" slot="content">{{productInfo.detail}}</div>
        </card>
        <div class="bottom-nav">
            <span>价格：</span>
            <span>{{productInfo.price}}元/瓶</span>
            <x-button class="goods-btn" type="primary" mini @click.native="goGetGoods">立即拿货</x-button>
        </div>
    </div>
</template>

<script>
import { ViewBox, XHeader, Card, XButton } from "vux";
export default {
  name: "goodsInfo",
  components: {
    ViewBox,
    XHeader,
    Card,
    XButton
  },
  created() {
      this.queryProduct();
  },
  data() {
    return {
        productInfo: {},
        userInfo: {},
        price: 0
    };
  },
  methods: {
    goGetGoods() {
      this.$router.push("/getGoods");
    },
    queryUser() {
      this.$api
        .queryUser({})
        .then(data => {
          if (data.code === 200) {
            this.userInfo = data.data.user
          } else {
            this.$vux.toast.text(data.message, "top");
          }       
        });
    },
    queryProduct() {
      this.$api.queryProduct().then(data => {
        if (data.code === 200) {
          this.productInfo = data.data.product;
            // this.queryUser();
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
.goodsInfo {
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
.goods-img {
  width: 90%;
  margin-left: 5%;
  height: auto;
  vertical-align: middle;
}
.card-demo-flex {
  display: flex;
}
.card-demo-content01 {
  padding: 0.4rem 0;
}
.card-demo-flex > div {
  flex: 1;
  text-align: center;
  font-size: 14px;
}
.goods-msg {
  font-size: 14px;
  padding: 0.4rem 0.3rem 0.4rem 0.4rem;
}
.bottom-nav {
  font-size: 14px;
  text-align: left;
  background-color: #fff;
  padding: 0.4rem;
  position: relative;
}
.goods-btn {
  position: absolute;
  right: 0.4rem;
  top: 50%;
  transform: translateY(-50%);
}
</style>
