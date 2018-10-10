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
        <cell title="历史拿货" v-if="userInfo.historyBuyCount" align-items="flex-start" :value="userInfo.historyBuyCount + '件'" value-align="left"></cell>
        <x-input title="申请数量" name="username" v-model="getGoodsObj.quantity" placeholder="请输入" :show-clear="false">
          <checker slot="right" class="checker-box" v-model="checkerWhich" @on-change="selectChecker" :radio-required="true" default-item-class="checker-item" selected-item-class="checker-item-selected">
            <checker-item v-if="userInfo.historyBuyCount === 0" value="1">件</checker-item>
            <checker-item :class="[checkerWhich == 2 ? 'checker-item-selected' : '']" value="2">箱</checker-item>
          </checker>
        </x-input>
        <cell title="代理地区" align-items="flex-start" :value="userInfo.proxyArea || '无'" value-align="left"></cell> 
        <x-address ref="address1" v-show="isShowProxy3" class="addresstitle" title="代理县" value-text-align="left" :list="addressData" placeholder="请选择地址" :hide-district="false"></x-address>
        <x-address ref="address2" v-show="isShowProxy2" class="addresstitle" title="代理市" value-text-align="left" :list="addressData" placeholder="请选择地址" inline-desc="" :hide-district="true"></x-address>
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
    ChinaAddressV4Data,
    Checker, 
    CheckerItem
  },
  created() {
    this.queryOrder();
    if (JSON.stringify(this.$route.params) === "{}") {
      this.queryUserAddress();
    } else {
      this.getGoodsObj.addressId = this.$route.params.addressId;
      this.getGoodsObj.addressName = this.$route.params.addressName;
    }
    this.queryUser();
  },
  computed: {
    isShowProxy3: function() {
      if (this.userInfo.historyBuyCount === 0) {
        if (this.checkerWhich == 2) { // 第一次以箱拿货
          if (this.getGoodsObj.quantity * 3 >= 900 && this.getGoodsObj.quantity * 3 < 3000) {
            return true;
          }
          return false;
        } else { // 第一次以件拿货
          if (this.getGoodsObj.quantity >= 900 && this.getGoodsObj.quantity < 3000) {
            return true;
          }
          return false;
        }       
      } else { // 不是第一次 全部以箱拿货
        if (this.userInfo.historyBuyCount >= 900) {
          return false
        } else {
          if (this.userInfo.historyBuyCount + this.getGoodsObj.quantity * 3 >= 900 && this.userInfo.historyBuyCount + this.getGoodsObj.quantity * 3 < 3000) {
            return true;
          }
          return false;
        }
      }    
    },
    isShowProxy2: function() {
      if (this.userInfo.historyBuyCount === 0) {
        if (this.checkerWhich == 2) {
          if (this.getGoodsObj.quantity * 3 >= 3000) {
            return true;
          }
          return false;
        } else {
          if (this.getGoodsObj.quantity >= 3000) {
            return true;
          }
          return false;
        }       
      } else {
        if (this.userInfo.historyBuyCount >= 3000) {
          return false
        } else {
          if (this.userInfo.historyBuyCount + this.getGoodsObj.quantity * 3 >= 3000) {
            return true;
          }
          return false;
        }
      }    
    },
  },
  data() {
    return {
      index: 0,
      checkerWhich: 2,
      userInfo: {},
      getGoodsObj: {
        quantity: "",
        addressId: "",
        proxyProvice: "",
        proxyCity: "",
        proxyArea: "",
        addressName: "",
        addressValue: []
      },
      orderList: [],
      addressData: ChinaAddressV4Data,
    };
  },
  methods: {
    queryUser() {
      this.$api
        .queryUser({})
        .then(data => {
          if (data.code === 200) {
            this.userInfo = data.data.user;         
          } else {
            this.$vux.toast.text(data.message, "top");
          }       
        });
    },
    queryUserAddress() {
      this.$api.queryUserAddress({}).then(data => {
        if (data.code === 200) {
          if (data.data.address.length < 1) {
            this.getGoodsObj.addressName = '无'
          } else {
            this.getGoodsObj.addressId = data.data.address[0].id;
            this.getGoodsObj.addressName =
              data.data.address[0].province +
              data.data.address[0].city +
              data.data.address[0].area +
              data.data.address[0].detail;
          }        
        }
      });
    },
    queryOrder() {
      this.$api
        .queryOrder({
          pageNo: 1,
          pageSize: 100
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
      let insertObj = {};
      insertObj.addressId = this.getGoodsObj.addressId;
      if (this.checkerWhich == 2) {
        insertObj.quantity = this.getGoodsObj.quantity * 3;
      } else {
        insertObj.quantity = this.getGoodsObj.quantity;
      }
      if (this.getGoodsObj.quantity >= 300 && this.getGoodsObj.quantity < 500) {
        let addressArr = this.$refs.address1.nameValue.split(" ");
        insertObj.proxyProvice = addressArr[0];
        insertObj.proxyCity = addressArr[1];
        insertObj.proxyArea = addressArr[2];
      } else if (this.getGoodsObj.quantity >= 500) {
        let addressArr = this.$refs.address1.nameValue.split(" ");
        insertObj.proxyProvice = addressArr[0];
        insertObj.proxyCity = addressArr[1];
      } else {
        insertObj.proxyProvice = "";
        insertObj.proxyCity = "";
        insertObj.proxyArea = "";
      }
      this.$api.insertOrder(insertObj).then(data => {
        if (data.code === 200) {
          this.$vux.toast.text("添加订单成功", "top");
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
