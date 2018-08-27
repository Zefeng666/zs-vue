import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    // 销售
    {
      path: '/',
      redirect: "/sales"
    },
    {
      path: '/sales',
      name: 'sales',
      component: resolve => require(["@/views/sales/index.vue"], resolve)
    },
    {
      path: '/applyWithdraw',
      name: 'applyWithdraw',
      component: resolve => require(["@/views/sales/applyWithdraw/applyWithdraw.vue"], resolve)
    },
    // 我的
    {
      path: '/mine',
      name: 'mine',
      component: resolve => require(["@/views/mine/mine.vue"], resolve)
    },
    {
      path: '/myAddress',
      name: 'myAddress',
      component: resolve => require(["@/views/mine/address/myAddress.vue"], resolve)
    },
    {
      path: '/editAddress',
      name: 'editAddress',
      component: resolve => require(["@/views/mine/address/editAddress.vue"], resolve)
    },
    {
      path: '/qrcode',
      name: 'qrcode',
      component: resolve => require(["@/views/mine/qrcode/qrcode.vue"], resolve)
    },
    {
      path: '/myBankCard',
      name: 'myBankCard',
      component: resolve => require(["@/views/mine/bankCard/myBankCard.vue"], resolve)
    },
    {
      path: '/editBankCard',
      name: 'editBankCard',
      component: resolve => require(["@/views/mine/bankCard/editBankCard.vue"], resolve)
    },
    {
      path: '/myIdCard',
      name: 'myIdCard',
      component: resolve => require(["@/views/mine/idCard/myIdCard.vue"], resolve)
    }
  ]
})
