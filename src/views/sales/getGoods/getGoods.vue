<template>
  <div class="getGoods">
    <x-header class="vux-1px-b my-header" :left-options="{backText: '', preventGoBack: true}" @on-click-back="toSale()" fixed>申请拿货</x-header>
    <tab :line-width=2 active-color='#f74c31' v-model="index" class="my-tab">
      <tab-item class="vux-center vux-1px-t" selected>申请拿货</tab-item>
      <tab-item class="vux-center vux-1px-t">历史订单</tab-item>
    </tab>
    <div class="swiper-box" v-show="index === 0">
      <group label-width="4.5em" label-margin-right="2em" label-align="right">
        <cell title="拿货地址" align-items="flex-start" :value="getGoodsObj.addressName" value-align="left" is-link @click.native="toSelectAddress()"></cell>
        <x-input title="申请数量" type="number" name="username" v-model="getGoodsObj.quantity" placeholder="请输入"></x-input>
        <x-address ref="address1" v-show="isShowProxy && getGoodsObj.quantity < 1000" class="addresstitle" :title="addressTitle" value-text-align="left" :list="addressData" placeholder="请选择地址" inline-desc="" :hide-district="false"></x-address>
        <x-address ref="address2" v-show="isShowProxy && getGoodsObj.quantity >= 1000" class="addresstitle" :title="addressTitle" value-text-align="left" :list="addressData" placeholder="请选择地址" inline-desc="" :hide-district="true"></x-address>
      </group>
      <x-button class="submit-btn" type="primary" @click.native="insertOrder">提交</x-button>
    </div>
    <div class="tab-swiper" v-show="index === 1">
      <div class="order-box vux-1px-b" v-for="(item, idx) in orderList" :key="idx">
        <p>
          <span>申请数量：{{item.order.quantity}}件</span>
          <span class="text-right">{{item.order.isAudit | orderStatus}}</span>
        </p>
        <p>
          <span>收货地址：{{item.userAddress.province + item.userAddress.city + item.userAddress.area + item.userAddress.detail}}</span>
        </p>
        <p>
          <span>创建时间：{{item.order.createTime.substr(0, 10)}}</span>
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
  ChinaAddressV4Data
} from "vux";
export default {
  name: "getGoods",
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
    ChinaAddressV4Data
  },
  created() {
    console.log(this.$route.params);
    this.queryOrder();
    if (JSON.stringify(this.$route.params) === "{}") {
      this.queryUserAddress();
    } else {
      this.getGoodsObj.addressId = this.$route.params.addressId;
      this.getGoodsObj.addressName = this.$route.params.addressName;
    }
  },
  computed: {
    isShowProxy: function() {
      if (this.getGoodsObj.quantity >= 300) {
        console.log(1);

        return true;
      }
      return false;
    }
  },
  data() {
    return {
      index: 0,
      getGoodsObj: {
        quantity: "",
        addressId: "",
        proxyProvice: "",
        proxyCity: "",
        proxyArea: "",
        addressName: ""
      },
      orderList: [],
      addressData: ChinaAddressV4Data,
      addressTitle: "代理地区"
    };
  },
  methods: {
    onShow() {
      console.log(this.cardValue);
    },
    onHide() {
      console.log(this.cardValue);
    },
    onChange() {},
    onShadowChange() {},
    queryUserAddress() {
      this.$api.queryUserAddress({}).then(data => {
        if (data.code === 200) {
          this.getGoodsObj.addressId = data.data.address[0].id;
          this.getGoodsObj.addressName =
            data.data.address[0].province +
            data.data.address[0].city +
            data.data.address[0].area +
            data.data.address[0].detail;
        }
      });
    },
    queryOrder() {
      this.$api
        .queryOrder({
          pageNo: 1,
          pageSize: 10
        })
        .then(data => {
          if (data.code === 200) {
            this.orderList = data.data.items;
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
    insertOrder() {
      if (this.getGoodsObj.quantity >= 300 && this.getGoodsObj.quantity < 500) {
        let addressArr = this.$refs.address1.nameValue.split(" ");
        this.getGoodsObj.proxyProvice = addressArr[0];
        this.getGoodsObj.proxyCity = addressArr[1];
        this.getGoodsObj.proxyArea = addressArr[2];
      } else if (this.getGoodsObj.quantity >= 500) {
        let addressArr = this.$refs.address1.nameValue.split(" ");
        this.getGoodsObj.proxyProvice = addressArr[0];
        this.getGoodsObj.proxyCity = addressArr[1];
      } else {
        this.getGoodsObj.provice = "";
        this.getGoodsObj.proxyCity = "";
        this.getGoodsObj.proxyArea = "";
      }
      this.$api.insertOrder(this.getGoodsObj).then(data => {
        if (data.code === 200) {
          this.$vux.toast.text("添加订单成功", "top");
          // this.$router.go(-1);
          this.queryOrder();
          this.index = 1;
        } else {
          this.$vux.toast.text(data.message, "top");
        }
      });
    },
    toSelectAddress() {
      this.$router.push({
        name: "selectAddress",
        params: {
          addressId: this.getGoodsObj.addressId,
          addressName: this.getGoodsObj.addressName
        }
      });
    },
    toSale() {
      this.$router.push({
        name: "sales"
      });
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
.getGoods {
  padding-top: 88px;
}
.submit-btn {
  width: 90%;
  margin-right: 5%;
  margin-top: 1rem;
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
</style>
