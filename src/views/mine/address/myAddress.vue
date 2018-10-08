<template>
  <div class="myAddress">
    <x-header class="vux-1px-b" :left-options="{backText: ''}">我的地址<router-link to="/insertAddress" slot="right">新增地址</router-link></x-header>
    <div class="address-list" v-for="(item, index) in addressList" :key="index" @click="toGetGoods(item)">
        <p class="list-top">
          {{item.contact}}&nbsp;&nbsp;&nbsp;&nbsp;{{item.mobile}}&nbsp;&nbsp;
          <img v-show="isSelect && item.id == selectAddressId" class="right-icon" src="../../../assets/icon/right_red.png">
        </p>
        <p class="list-bottom"><span v-show="item.isDefault === 1" style="color: #f74c31;">[默认]</span>{{item.province}}{{item.city}}{{item.area}}{{item.detail}}</p> 
        <!-- <img class="edit-icon" @click="toEditAddress(item)" src="../../../assets/icon/edit.png" v-show="!isSelect"> -->
        <img class="edit-icon" @click="showConfirm(item.id)" src="../../../assets/icon/delete.png" v-show="!isSelect">
    </div>
    <div>
      <confirm v-model="show"
      title="警告"
      @on-cancel="onCancel"
      @on-confirm="onConfirm">
        <p style="text-align:center;">确定删除此地址吗？</p>
      </confirm>
    </div>
  </div>
</template>

<script>
import { ViewBox, XHeader, Card, Loading, Confirm, TransferDomDirective as TransferDom } from "vux";
export default {
  name: "myAddress",
  directives: {
    TransferDom
  },
  components: {
    ViewBox,
    XHeader,
    Card,
    Loading,
    Confirm
  },
  data() {
    return {
      addressList: [],
      isSelect: false,
      selectAddressId: '',
      show: false,
      addressId: ''
    };
  },
  created () {
    if (this.$route.name === "selectAddress") {
      this.isSelect = true;
      this.selectAddressId = this.$route.params.addressId;
    } else {
      this.isSelect = false;
    }
    this.queryUserAddress();
  },
  methods: {
    toEditAddress(addressItem) {
      this.$router.push({
        name: 'editAddress',
        params: { addressInfo: addressItem }
      })
    },
    queryUserAddress() {
      this.$vux.loading.show();
      this.$api
        .queryUserAddress({})
        .then(data => {
          if (data.code === 200) {
            this.addressList = data.data.address;
          }       
          this.$vux.loading.hide();
        });
    },
    deleteUserAddress(id) {
      this.$api
        .deleteUserAddress({
          id: id
        })
        .then(data => {
          if (data.code === 200) {
            this.$vux.toast.text("删除成功", "top");
            this.$router.go(-1);
          } else {
            this.$vux.toast.text(data.message, "top");
          }
        });
    },
    toGetGoods(item) {
      if(!this.isSelect) return;
      this.$router.push({
        name: 'getGoods',
        params: {
          addressId: item.id,
          addressName: item.province + item.city + item.area + item.detail
        }
      })
    },
    showConfirm(id) {
      this.show = true;
      this.addressId = id;
    },
    onCancel() {

    },
    onConfirm() {
      this.deleteUserAddress(this.addressId)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.address-list {
  padding: 0.3rem 0.3rem;
  border-bottom: 1px solid #e6e6e6;
  background-color: #fff;
  position: relative;
  p {
    padding: 0;
    text-align: left;
    .right-icon {
      width: .7rem;
      vertical-align: top;
    }
  }
  .edit-icon {
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
