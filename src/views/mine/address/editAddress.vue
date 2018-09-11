<template>
  <div class="editAddress">
    <x-header class="vux-1px-b" :left-options="{backText: ''}">编辑地址<a slot="right">删除</a></x-header>
    <group>
      <x-input title="收货人" name="username" :value="username"></x-input>
      <x-input title="手机号码" name="phone" :value="phone"></x-input>
      <x-address class="addresstitle" :title="addressTitle"  :list="addressData"  placeholder="请选择地址" inline-desc=""></x-address>
      <x-textarea :title="textareaTitle" :placeholder="textareaPlaceholder" :show-counter="false" :rows="1" autosize></x-textarea>
      <x-switch :title="switchTitle"></x-switch>
    </group>
    <x-button class="saveBtn" type="primary" action-type="button">保存</x-button>
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
      username: "",
      phone: "",
      addressData: ChinaAddressV4Data,
      addressTitle: "所在地区",
      textareaTitle: "详细地址",
      textareaPlaceholder: "街道楼牌号等",
      switchTitle: "设为默认地址"
    };
  },
  created () {
    // this.insertUserAddress()
  },
  methods: {
    insertUserAddress() {
      this.$api
        .insertUserAddress({
          province: 'xxxxx',
          city: 'eeeee',
          area: 'wwww',
          detail: 'pppp',
          contact: 'uuuu',
          mobile: 17888888888
        })
        .then(data => {
          // if (data.returnCode === 1) {
          //   this.loanPlan = data.loanPlan;
          // }
          console.log(data);
          
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.weui-label {
}
.addresstitle {
  padding-left: 0.24rem;
}
.saveBtn {
  position: fixed;
  left: 5%;
  bottom: 20px;
  width: 90%;
}
</style>
