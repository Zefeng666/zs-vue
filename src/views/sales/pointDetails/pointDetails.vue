<template>
  <div class="pointDetails">
    <x-header class="vux-1px-b my-header" :left-options="{backText: ''}">收益明细</x-header>
        
        
          <ul ref="list" class="tab-swiper list-content">
            <li class="order-box vux-1px-b list-item" v-for="(item, index) in IntegralsList" :key="index">
              <p>
                <span>积分：{{item.integralNum}}</span>
                <span class="text-right">{{item.changeType}}</span>
              </p>
              <p>
                <span>描述：{{item.changeDetail}}</span>
              </p>
              <p>
                <span>时间：{{item.createTime | formatDate}}</span>
              </p>
            </li>
          </ul>
        
        
  </div>
</template>

<script>
import { ViewBox, XHeader, Cell, Group, XInput, XButton } from "vux";

export default {
  name: "pointDetails",
  components: {
    ViewBox,
    XHeader,
    Cell, 
    Group, 
    XInput,
    XButton,
  },
  created() {
    this.queryIntegrals();
  },
  data() {
    return {
      IntegralsList: [],
      page: 1,
    };
  },
  methods: {
    queryIntegrals() {
      this.$api
        .queryIntegrals({
          pageNo: this.page,
          pageSize: 100
        })
        .then(data => {
          if (data.code === 200) {
            this.IntegralsList = data.data.items;
          }       
        });
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.pointDetails {
  padding-top: 44px;
}
.my-header {
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
}
.submit-btn {
  width: 90%;
  margin-right: 5%;
  margin-top: 1rem;
}
.order-box {
  text-align: left;
  font-size: 14px;
  padding: .3rem .4rem;
  background-color: #fff;
  .text-right {
    float: right;
  }
}
</style>
