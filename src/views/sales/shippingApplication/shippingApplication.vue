<template>
  <div class="shippingApplication">
    <x-header class="vux-1px-b my-header" :left-options="{backText: '', preventGoBack: true}" @on-click-back="toSale()" fixed>发货申请</x-header>
    <tab :line-width=2 active-color='#f74c31' v-model="index" class="my-tab">
      <tab-item class="vux-center vux-1px-t" selected>发货申请</tab-item>
      <tab-item class="vux-center vux-1px-t">历史订单</tab-item>
    </tab>
    <div class="swiper-box" v-show="index === 0">
      <div>
          <div class="order-box vux-1px-b">
            <p>
                <span>商品：洁瑞白净化剂</span>
                <span class="text-right">已发货</span>
            </p>
            <!-- <p>
                <span>申请数量：100件</span>
            </p> -->
            <p>
                <span>用户：哦可</span>
                <span class="text-right">申请数量：100件</span>
            </p>
            <p>
                <span>手机号：17866665555</span>
            </p>
            <p>
                <span>收货地址：撒基地附近爱哦分解到房价低哦</span>
            </p>
            <p>
                <span>创建时间：2018-10-19</span>
            </p>
            <p style="text-align: right;">
                <x-button mini>转上级发货</x-button>
                <x-button type="primary" mini>发货</x-button>
            </p>
        </div>
      </div>
    </div>
    <div class="tab-swiper" v-show="index === 1">
      <div class="order-box vux-1px-b" v-for="(item, idx) in orderList" :key="idx">
        <p>
          <span>申请数量：{{item.order.quantity}}件</span>
        </p>
        <p>
          <span>申请数量：{{item.order.quantity}}件</span>
          <span class="text-right">{{item.order.isAudit | orderStatus}}</span>
        </p>
        <p>
          <span>收货地址：{{item.userAddress.province + item.userAddress.city + item.userAddress.area + item.userAddress.detail}}</span>
        </p>
        <p>
          <span>创建时间：{{item.order.createTime | formatDate}}</span>
          <x-button @click.native="cancelOrder(item.order.id)" v-show="item.order.isAudit == 0" class="btn-right" mini plain>取消</x-button>
        </p>
      </div>
    </div>

  </div>
</template>

<script>
import {
  ViewBox,
  XHeader,
  Tab,
  TabItem,
  Swiper,
  SwiperItem,
  Cell,
  Group,
  XInput,
  PopupPicker,
  XButton,
  Box,
  XAddress,
  ChinaAddressV4Data,
  Checker, 
  CheckerItem
} from "vux";
export default {
  name: "shippingApplication",
  components: {
    ViewBox,
    XHeader,
    Tab,
    TabItem,
    Swiper,
    SwiperItem,
    Cell,
    Group,
    XInput,
    PopupPicker,
    XButton,
    Box,
    XAddress,
    ChinaAddressV4Data,
    Checker, 
    CheckerItem
  },
  created() {
    this.queryHistoryShipOrder();
    this.queryShipOrder();
  },
  computed: {
  },
  data() {
    return {
      index: 0,
      checkerWhich: 2,
      userInfo: {},
      orderList: [],
      shipOrderList: []
    };
  },
  methods: {
    queryHistoryShipOrder() {
      this.$api
        .queryHistoryShipOrder({
          pageNo: 1,
          pageSize: 1000
        })
        .then(data => {
          if (data.code === 200) {
            this.orderList = data.data.items;
          }
        });
    },
    queryShipOrder() {
      this.$api
        .queryShipOrder({
          pageNo: 1,
          pageSize: 1000
        })
        .then(data => {
          if (data.code === 200) {
            this.shipOrderList = data.data.items;
          }
        });
    },
    cancelOrder(id) {
      this.$api
        .cancelOrder({
          id: id
        })
        .then(data => {
          if (data.code === 200) {
            this.$vux.toast.text("取消订单成功", "top");
            this.queryOrder();
          }
        });
    },
    toSale() {
      this.$router.push({
        name: "sales"
      });
    },
    selectChecker(val) {
      console.log(val);
      
      // this.checkerWhich = val;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.my-header {
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
}
.my-tab {
  width: 100%;
  position: absolute;
  left: 0;
  top: 44px;
  z-index: 100;
}
.shippingApplication {
  padding-top: 88px;
}
.submit-btn {
  width: 90%;
  margin-right: 5%;
  margin-top: 1rem;
}
.getGoods-msg {
  font-size: 14px;
  color: #f74c31;
  padding: 0.2rem 0.5rem 0;
  text-align: left;
}
.order-box {
  text-align: left;
  font-size: 14px;
  padding: 0.5rem 0.4rem;
  background-color: #fff;
  .text-right {
    float: right;
  }
}
.btn-right {
  float: right;
  margin-bottom: 0.2rem;
}
.checker-box {
  // position: absolute;
  // right: 0.5rem;
  // top: 1.95rem;
}
.checker-item {
  border: 1px solid #ececec;
  padding: 2px 8px;
}
.checker-item-selected {
  border: 1px solid #f74c31;
  color: #f74c31;
}
</style>
