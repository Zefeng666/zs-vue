<template>
  <div class="upgradeOrder">
    <x-header class="vux-1px-b my-header" :left-options="{backText: '', preventGoBack: true}" @on-click-back="toSale()" fixed>申请报单</x-header>
    <div class="swiper-box">
      <group label-width="4.5em" label-margin-right="2em" label-align="right">
        <cell title="拿货地址" align-items="flex-start" :value="getGoodsObj.addressName" value-align="left" is-link @click.native="toSelectAddress()"></cell>
        <popup-picker title="申请等级" :data="levelData" v-model="getGoodsObj.level" placeholder="请选择" value-text-align="left"></popup-picker>     
        <cell title="支付金额" align-items="flex-start" :value="payMoney" value-align="left"></cell>
        <!-- <cell title="代理地区" align-items="flex-start" :value="userInfo.proxyArea || '无'" value-align="left"></cell>  -->
        <popup-picker v-show="getGoodsObj.level[0] === '分公司'" title="代理省份" :data="provinceData" v-model="getGoodsObj.proxyProvince" placeholder="请选择地址" value-text-align="left"></popup-picker>
        <x-address v-show="getGoodsObj.level[0] === '区县合伙人'" ref="address1" class="addresstitle" title="代理县区" value-text-align="left" :list="addressData" placeholder="请选择地址" :hide-district="false"></x-address>
        <x-address v-show="getGoodsObj.level[0] === '城市合伙人'" ref="address2" class="addresstitle" title="代理城市" value-text-align="left" :list="addressData" placeholder="请选择地址" inline-desc="" :hide-district="true"></x-address>
      </group>
      <!-- <p v-show="isShowProxy3 || isShowProxy2" class="getGoods-msg">提示：您拿货数量已累计足够成为区域代理人资格，请选择一个代理的地区</p> -->
      <x-button class="submit-btn" type="primary" @click.native="showToast=true">立即支付</x-button>
    </div>
    <x-dialog v-model="showToast" class="dialog-demo" hide-on-blur>
      <div style="padding:15px;">
        <x-button type="primary" @click.native="insertUpgradeOrder(0)">微信支付</x-button>
        <x-button type="default" @click.native="insertUpgradeOrder(1)">线下支付</x-button>
      </div>
      <div @click="showToast=false">
        <span style="font-size: 16px;">关闭</span>
      </div>
    </x-dialog>
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
  CheckerItem,
  XDialog
} from "vux";
export default {
  name: "upgradeOrder",
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
    CheckerItem,
    XDialog
  },
  created() {
    if (JSON.stringify(this.$route.params) === "{}") {
      this.queryUserAddress();
    } else {
      this.getGoodsObj.addressId = this.$route.params.addressId;
      this.getGoodsObj.addressName = this.$route.params.addressName;
    }
    this.queryUser();
  },
  mounted () {
    let provinceArr = []
    for (let i = 0; i < 30; i++) {
      provinceArr.push(this.addressData[i].name);
      
    }
    this.provinceData.push(provinceArr)
  },
  computed: {
    payMoney: function() {
      if (this.getGoodsObj.level[0] === '经销商') {
        return 2980;
      } else if (this.getGoodsObj.level[0] === '区县合伙人') {
        return 29800;
      } else if (this.getGoodsObj.level[0] === '城市合伙人') {
        return 298000;
      } else if (this.getGoodsObj.level[0] === '分公司') {
        return 600000;
      } else {
        return 0;
      }
    }
  },
  data() {
    return {
      index: 0,
      checkerWhich: 2,
      userInfo: {},
      productInfo: {},
      getGoodsObj: {
        quantity: "",
        addressId: "",
        proxyProvince: [],
        proxyCity: "",
        proxyArea: "",
        addressName: "",
        addressValue: [],
        level: []
      },
      orderList: [],
      addressData: ChinaAddressV4Data,
      provinceData: [],
      levelData: [],
      showToast: false
    };
  },
  methods: {
    queryUser() {
      this.$api
        .queryUser({})
        .then(data => {
          if (data.code === 200) {
            this.userInfo = data.data.user;
            this.queryProduct();
            let levelArr = [];
            if (this.userInfo.vipLevel === 1) {
              levelArr = ['区县合伙人', '城市合伙人', '分公司']
            } else if (this.userInfo.vipLevel === 2) {
              levelArr = ['城市合伙人', '分公司']
            } else if (this.userInfo.vipLevel === 3) {
              levelArr = ['分公司']
            } else if (this.userInfo.vipLevel === 4) {
              levelArr = ['已经是最高级别']
            } else {
              levelArr = ['经销商', '区县合伙人', '城市合伙人', '分公司']
            }
            this.levelData.push(levelArr)
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
    queryProduct() {
      this.$api.queryProduct().then(data => {
        if (data.code === 200) {
          this.productInfo = data.data.product;
          switch(this.userInfo.vipLevel)
          {
              case 0: // 分享大使
                  this.price = this.productInfo.price * 0.7
                  break;
              case 1: // 经销商
                  this.price = this.productInfo.price * 0.65
                  break;
              case 2: // 区县合伙人
                  this.price = this.productInfo.price * 0.6
                  break;
              case 3: // 城市合伙人
                  this.price = this.productInfo.price * 0.55 
                  break;
              case 4: // 省级合伙人
                  this.price = this.productInfo.price * 0.5
                  break;
              default: // 普通用户
                  this.price = this.productInfo.price
          }  
        } else {
          this.$vux.toast.text(data.message, "top");
        }
      });
    },
    insertUpgradeOrder(isOffline) {
      let insertObj = {};
      if (!this.getGoodsObj.addressId) {
        return this.$vux.toast.text("请添加地址后再报单~", "top");
      }
      if (this.getGoodsObj.level[0] === '经销商') {
        insertObj.vipLevel = 1;
      } else if (this.getGoodsObj.level[0] === '区县合伙人') {
        let addressArr = this.$refs.address1.nameValue.split(" ");
        insertObj.address = addressArr[0] + '-' + addressArr[1] + '-' + addressArr[2];
        insertObj.vipLevel = 2;
      } else if (this.getGoodsObj.level[0] === '城市合伙人') {
        let addressArr = this.$refs.address2.nameValue.split(" ");
        insertObj.address = addressArr[0] + '-' + addressArr[1];
        insertObj.vipLevel = 3;
      } else if (this.getGoodsObj.level[0] === '分公司') {
        insertObj.address = this.getGoodsObj.proxyProvince[0];
        insertObj.vipLevel = 4;
      }
      insertObj.addressId = this.getGoodsObj.addressId;
      insertObj.productId = this.productInfo.productId;
      insertObj.isOffline = isOffline;
      
      this.$api.insertUpgradeOrder(insertObj).then(data => {
        if (data.code === 200) {
          if (isOffline === 0) {
            this.onBridgeReady(data.data.appId, data.data.nonceStr, data.data.package, data.data.paySign, data.data.timeStamp)   
          } else {
            this.$vux.toast.text("添加线下支付订单成功~", "top");
            this.toSale();
          }
          this.showToast = false;
        } else {
          this.$vux.toast.text(data.message, "top");
        }
      });
    },
    onBridgeReady(appId, nonceStr, wxPackage, paySign, timeStamp){
      WeixinJSBridge.invoke(
        'getBrandWCPayRequest', {
          "appId": appId,     //公众号名称，由商户传入     
          "timeStamp": timeStamp.toString(),         //时间戳，自1970年以来的秒数     
          "nonceStr": nonceStr, //随机串     
          "package": wxPackage,
          "signType": "MD5",         //微信签名方式：     
          "paySign": paySign //微信签名 
        },
        function(res){
          // alert(JSON.stringify(res));
          if(res.err_msg == "get_brand_wcpay_request:ok" ){
          // 使用以上方式判断前端返回,微信团队郑重提示：
          // res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
            this.$vux.toast.text("支付成功", "top");  
          } else {
            this.$vux.toast.text("支付失败", "top"); 
          }
        }
      ); 
    },
    toSelectAddress() {
      this.$router.push({
        name: "selectAddress",
        params: {
          addressId: this.getGoodsObj.addressId,
          addressName: this.getGoodsObj.addressName,
          from: 'upgradeOrder'
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
.upgradeOrder {
  padding-top: 44px;
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
