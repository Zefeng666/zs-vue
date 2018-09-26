<template>
  <div class="editBankCard">
    <x-header class="vux-1px-b" :left-options="{backText: ''}">编辑银行卡<a v-show="!isInsert" slot="right" @click="deleteUserBankCard()">删除</a></x-header>
    <group>
      <x-input title="银行" name="cardKind" v-model="bankCardInfo.cardKind"></x-input>
      <x-input title="持卡人" name="cardHolder" v-model="bankCardInfo.cardHolder"></x-input>
      <x-input title="卡号" name="cardId" v-model="bankCardInfo.cardId"></x-input>
      <x-switch :title="switchTitle" v-model="isDefault"></x-switch>
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
  created() {
    if (this.$route.name === "insertBankCard") {
      this.isInsert = true;
    } else {
      this.isInsert = false;
      this.bankCardInfo = this.$route.params.bankCardInfo;
      console.log(this.bankCardInfo);
      
    }
  },
  data() {
    return {
      bankCardInfo: {
        cardKind: '',
        cardHolder: '',
        cardId: '',
        isDefault: 0
      },
      switchTitle: '设为默认',
      isInsert: false,
      isDefault: false,
    };
  },
  methods: {
    insertUserBankCard () {
      this.isDefault === false ? this.bankCardInfo.isDefault = 0 : this.bankCardInfo.isDefault = 1;
      if (this.isInsert) {
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
      } else {
        this.$api
        .updateUserBankCard(this.bankCardInfo)
        .then(data => {
          if (data.code === 200) {
            this.$vux.toast.text('更新成功', 'top')
            this.$router.go(-1);
          } else {
            this.$vux.toast.text(data.message, 'top')
          }     
        });
      }     
    },
    deleteUserBankCard () {
      this.$api
        .deleteUserBankCard({id: this.bankCardInfo.id})
        .then(data => {
          if (data.code === 200) {
            this.$vux.toast.text('删除成功', 'top')
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
