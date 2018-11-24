<template>
  <div class="shippingApplication">
    <x-header class="vux-1px-b my-header" :left-options="{backText: '', preventGoBack: true}" @on-click-back="toSale()" fixed>发货申请</x-header>
    <tab :line-width=2 active-color='#2a93f5' v-model="index" class="my-tab">
      <tab-item class="vux-center vux-1px-t" selected @on-item-click="selectChecker">发货申请</tab-item>
      <tab-item class="vux-center vux-1px-t"  @on-item-click="selectChecker">历史订单</tab-item>
    </tab>
    <div class="swiper-box" v-show="index === 0">
      <div>
        <div v-if="item.product" class="order-box vux-1px-b" v-for="(item, index) in shipOrderList" :key="index">
            <p>
                <span>商品：{{item.product.name}}</span>
                <span class="text-right">申请数量：{{item.order.quantity + '瓶'}}</span>
            </p>
            <p>
                <span>用户：{{item.user.username}}</span>
                <span class="text-right">手机号：{{item.user.mobile}}</span>
            </p>
            <p>
                <span>收货地址：{{item.userAddress.province}}{{item.userAddress.city}}{{item.userAddress.area}}{{item.userAddress.detail}}</span>
            </p>
            <p>
                <span>创建时间：{{item.order.createTime | formatDate}}</span>
            </p>
            <p v-if="item.order.isUpgrade === -1" style="text-align: right;">
                <!-- <x-button mini disabled>待公司确认</x-button> -->
                <span style="color:rgb(247, 76, 49);">该单为升级单，须公司确认</span>
            </p>
            <p v-else style="text-align: right;">
                <x-button mini @click.native="shipOrder(item.order.id, 1)">转上级发货</x-button>
                <x-button type="primary" mini @click.native="shipOrder(item.order.id, 0)">发货</x-button>
            </p>
        </div>
      </div>
    </div>
    <div class="tab-swiper" v-show="index === 1">
      <div v-if="item.product" class="order-box vux-1px-b" v-for="(item, index) in orderList" :key="index">
          <p>
              <span>商品：{{item.product.name}}</span>
              <span class="text-right">申请数量：{{item.order.quantity + '瓶'}}</span>
          </p>
          <p>
              <span>用户：{{item.user.username}}</span>
              <span class="text-right">手机号：{{item.user.mobile}}</span>
          </p>
          <p>
              <span>收货地址：{{item.userAddress.province}}{{item.userAddress.city}}{{item.userAddress.area}}{{item.userAddress.detail}}</span>
          </p>
          <p>
              <span>创建时间：{{item.order.createTime | formatDate}}</span>
          </p>
          <p style="text-align: right;">
              <span>状态：{{checkOrder(item.order)}}</span>
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
  XButton
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
    XButton
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
      this.$vux.loading.show({
        text: ''
      })
      this.$api
        .queryHistoryShipOrder({
          pageNo: 1,
          pageSize: 100
        })
        .then(data => {
          if (data.code === 200) {
            this.orderList = data.data.items;
          }
          this.$vux.loading.hide()
        });
    },
    queryShipOrder() {
      this.$vux.loading.show({
        text: ''
      })
      this.$api
        .queryShipOrder({
          pageNo: 1,
          pageSize: 1000
        })
        .then(data => {
          if (data.code === 200) {
            this.shipOrderList = data.data.items;
          }
          this.$vux.loading.hide()
        });
    },
    shipOrder(id, isSelf) {
      this.$api
        .shipOrder({
          orderId: id,
          isSelf: isSelf
        })
        .then(data => {
          if (data.code === 200) {
            this.$vux.toast.text("操作成功", "top");
            this.queryShipOrder();
          } else {
            this.$vux.toast.text(data.message, "top");
          }
        });
    },
    toSale() {
      this.$router.push({
        name: "sales"
      });
    },
    selectChecker(val) {
      if (val === 0) {
        this.queryShipOrder();
      } else if (val === 1) {
        this.queryHistoryShipOrder();
      }
    },
    checkOrder(order) {
      if (order.orderStatus === 0) {
        return '未支付';
      } else if (order.orderStatus === 1) {
        return '待发货';
      } else {
        if (order.isCompanyDelivery === 1) {
          return '公司发货';
        } else {
          let uid = localStorage.getItem('uid');
          if (order.trueShipUid == uid) {
            return '已发货';
          } else {
            return '上级发货';
          }
        }
      }
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
