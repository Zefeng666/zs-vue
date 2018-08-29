<template>
  <div class="editBankCard">
    <x-header class="vux-1px-b" :left-options="{backText: ''}">编辑银行卡<a slot="right">删除</a></x-header>
    <group>
      <x-input title="银行" name="username" :value="username"></x-input>
      <x-input title="持卡人" name="phone" :value="phone"></x-input>
      <x-textarea :title="textareaTitle" :placeholder="textareaPlaceholder" :show-counter="false" :rows="1" autosize></x-textarea>
      <x-switch :title="switchTitle"></x-switch>
    </group>
    <x-button class="saveBtn" type="primary" action-type="button">保存</x-button>
  </div>
</template>

<script>
import { ViewBox, XHeader, Cell, Group, XInput, XTextarea, XSwitch, XButton } from "vux";
export default {
  name: "editBankCard",
  components: {
    ViewBox,
    XHeader,
    Cell,
    Group,
    XInput,
    XTextarea,
    XSwitch,
    XButton
  },
  data() {
    return {
      username: 'gggg',
      phone: '1111',
      textareaTitle: '卡号',
      textareaPlaceholder: '',
      switchTitle: '设为默认'
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.saveBtn {
  position: fixed;
  left: 5%;
  bottom: 20px;
  width: 90%;
}
</style>
