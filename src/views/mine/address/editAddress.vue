<template>
  <div class="editAddress">
    <x-header class="vux-1px-b" :left-options="{backText: ''}">{{isInsert ? '新增' : '编辑'}}地址
      <a slot="right" v-show="!isInsert" @click="deleteUserAddress()">删除</a>
    </x-header>
    <group class="editAddress-group"> 
      <x-input title="收货人" name="contact" v-model="addressInfo.contact"></x-input>
      <x-input title="手机号码" name="mobile" v-model="addressInfo.mobile" type="number"></x-input>
      <x-address ref="address" class="addresstitle" :raw-value="true" :title="addressTitle" :list="addressData" value-text-align="left" placeholder="请选择地址" v-model="addressInfo.AddressArr" inline-desc=""></x-address>
      <x-textarea :title="textareaTitle" :placeholder="textareaPlaceholder" :show-counter="false" :rows="1" autosize v-model="addressInfo.detail"></x-textarea>
      <x-switch :title="switchTitle" v-model="isDefault"></x-switch>
    </group>
    <x-button class="saveBtn" type="primary" action-type="button" @click.native="insertUserAddress()">保存</x-button>
  </div>
</template>

<script>
import {
  ViewBox,
  XHeader,
  Cell,
  Group,
  XInput,
  XAddress,
  ChinaAddressV4Data,
  XTextarea,
  XSwitch,
  XButton
} from "vux";
export default {
  name: "editAddress",
  components: {
    ViewBox,
    XHeader,
    Cell,
    Group,
    XInput,
    XAddress,
    XTextarea,
    XSwitch,
    XButton
  },
  data() {
    return {
      addressInfo: {
        contact: "",
        mobile: "",
        province: "",
        city: "",
        area: "",
        detail: "",
        isDefault: 0,
        AddressArr: []
      },
      isDefault: false,
      addressData: ChinaAddressV4Data,
      addressTitle: "所在地区：",
      textareaTitle: "详细地址",
      textareaPlaceholder: "街道楼牌号等",
      switchTitle: "设为默认地址",
      isInsert: false,
      AddressArr: []
    };
  },
  created() {
    if (this.$route.name === "insertAddress") {
      this.isInsert = true;
    } else {
      this.isInsert = false;
      this.addressInfo = this.$route.params.addressInfo;
      this.addressInfo.AddressArr = [
        this.addressInfo.province,
        this.addressInfo.city,
        this.addressInfo.area
      ];
    }
  },
  methods: {
    insertUserAddress() {
      if (this.addressInfo.contact == "")
        return this.$vux.toast.text("请填写收货人");
      if (this.addressInfo.mobile == "")
        return this.$vux.toast.text("请填写手机号码");
      if (this.$refs.address.nameValue == "")
        return this.$vux.toast.text("请选择地址");
      if (this.addressInfo.detail == "")
        return this.$vux.toast.text("请填写详细地址");
      let addressArr = this.$refs.address.nameValue.split(" ");
      this.addressInfo.province = addressArr[0];
      this.addressInfo.city = addressArr[1];
      this.addressInfo.area = addressArr[2];

      if (this.isDefault) {
        this.addressInfo.isDefault = 1;
      } else {
        this.addressInfo.isDefault = 0;
      }

      if (this.isInsert) {
        this.$api.insertUserAddress(this.addressInfo).then(data => {
          if (data.code === 200) {
            this.$vux.toast.text("添加成功", "top");
            this.$router.go(-1);
          } else {
            this.$vux.toast.text(data.message, "top");
          }
        });
      } else {
        this.$api.updateUserAddress(this.addressInfo).then(data => {
          if (data.code === 200) {
            this.$vux.toast.text("更新成功", "top");
            this.$router.go(-1);
          } else {
            this.$vux.toast.text(data.message, "top");
          }
        });
      }
    },
    deleteUserAddress() {
      this.$api
        .deleteUserAddress({
          id: this.addressInfo.id
        })
        .then(data => {
          if (data.code === 200) {
            this.$vux.toast.text("删除成功", "top");
            this.$router.go(-1);
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
.editAddress {
  
}
.editAddress-group {
  .addresstitle {
    .weui-label {
      margin-right: 0.2rem !important;
    }
    .vux-popup-picker-select {
      padding-left: 0.2rem !important;
    }
  }
}
.weui-label {
}
.addresstitle {
  padding-left: 0.24rem;
}
.saveBtn {
  margin-top: 1rem;
  width: 90%;
}
</style>
