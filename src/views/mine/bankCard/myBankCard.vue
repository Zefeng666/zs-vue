<template>
  <div class="myBankCard">
    <x-header class="vux-1px-b" :left-options="{backText: ''}">我的银行卡<router-link to="/insertBankCard" slot="right">添加</router-link></x-header>
    <div class="card-list" v-for="(item, idx) in bankCardList" :key="idx">
        <p class="list-top">{{item.cardKind}} {{item.cardId}}</p>
        <p class="list-bottom"><span class="card-default" v-show="item.isDefault === 1">[默认]</span> 持卡人：{{item.cardHolder}}</p>    
        <img src="../../../assets/icon/edit.png" @click="toEditBankCard(item)">       
    </div>
  </div>
</template>

<script>
import { ViewBox, XHeader } from "vux";
export default {
  name: "myBankCard",
  components: {
    ViewBox,
    XHeader
  },
  created () {
    this.queryUserBankCard()
  },
  data() {
    return {
      bankCardList: []
    };
  },
  methods: {
    queryUserBankCard() {
      this.$vux.loading.show();
      this.$api
        .queryUserBankCard({})
        .then(data => {
          if (data.code === 200) {
            this.bankCardList = data.data.bankCards
          }       
          this.$vux.loading.hide();
        });
    },
    toEditBankCard(item) {
      this.$router.push({
        name: 'editBankCard',
        params: {bankCardInfo: item}
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.card-list {
  padding: 0.3rem 0.3rem;
  border-bottom: 1px solid #e6e6e6;
  position: relative;
  background-color: #fff;
  p {
    padding: 0;
    text-align: left;
  }
  img {
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
  .card-default {
    color: red;
  }
}
</style>
