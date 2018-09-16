<template>
  <div class="editBankCard">
    <x-header class="vux-1px-b" :left-options="{backText: ''}">编辑银行卡<a slot="right">删除</a></x-header>
    <group>
      <x-input title="银行" name="cardKind" v-model="bankCardInfo.cardKind"></x-input>
      <x-input title="持卡人" name="cardHolder" v-model="bankCardInfo.cardHolder"></x-input>
      <x-input title="卡号" name="cardId" type="number" v-model="bankCardInfo.cardId"></x-input>
      <x-switch :title="switchTitle"></x-switch>
    </group>
    <x-button class="saveBtn" type="primary" action-type="button" @click.native="insertUserBankCard()">保存</x-button>
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
      bankCardInfo: {
        cardKind: '',
        cardHolder: '',
        cardId: ''
      },
      switchTitle: '设为默认'
    };
  },
  methods: {
    insertUserBankCard () {
      this.$api
        .insertUserBankCard(this.bankCardInfo)
        .then(data => {
          if (data.code === 200) {
            this.$vux.toast.text('添加成功', 'top')
            this.$router.go(-1);
          } else {
            this.$vux.toast.text(data.message, 'top')
          }     
        });
    }
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.saveBtn {
  margin-top: 1rem;
  width: 90%;
}
</style>
