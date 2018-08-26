<template>
  <div>
    <tabbar v-model="index" v-show="isShow">
      <tabbar-item link="/sales">
        <span slot="label">销售</span>
      </tabbar-item>
      <tabbar-item link="/mine">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
  import {Tabbar, TabbarItem} from 'vux'

  export default {
    components: {
      Tabbar,
      TabbarItem
    },
    data() {
      return {
        index: 0,
        isShow:true
      }
    },
    props: ['activeIndex'],
    computed: {
    },
    watch: {
    },
    created() {
      this.index = this.activeIndex;
    },
    methods: {
    }
  }
</script>
<style lang="less" scoped>

</style>

