import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // 销售
    {
      path: '/',
      redirect: "/wxLogin"
      // redirect: "/sales"
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
    {
      path: '/upgradeOrder',
      name: 'upgradeOrder',
      component: resolve => require(["@/views/sales/upgradeOrder/upgradeOrder.vue"], resolve)
    },
    {
      path: '/getGoods',
      name: 'getGoods',
      component: resolve => require(["@/views/sales/getGoods/getGoods.vue"], resolve)
    },
    {
      path: '/goodsInfo',
      name: 'goodsInfo',
      component: resolve => require(["@/views/sales/getGoods/goodsInfo.vue"], resolve)
    },
    {
      path: '/myTeam',
      name: 'myTeam',
      component: resolve => require(["@/views/sales/myTeam/myTeam.vue"], resolve)
    },
    {
      path: '/pointDetails',
      name: 'pointDetails',
      component: resolve => require(["@/views/sales/pointDetails/pointDetails.vue"], resolve)
    },
    {
      path: '/shippingApplication',
      name: 'shippingApplication',
      component: resolve => require(["@/views/sales/shippingApplication/shippingApplication.vue"], resolve)
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
      path: '/selectAddress',
      name: 'selectAddress',
      component: resolve => require(["@/views/mine/address/myAddress.vue"], resolve)
    },
    {
      path: '/insertAddress',
      name: 'insertAddress',
      component: resolve => require(["@/views/mine/address/editAddress.vue"], resolve)
    },
    {
      path: '/editAddress',
      name: 'editAddress',
      component: resolve => require(["@/views/mine/address/editAddress.vue"], resolve)
    },
    {
      path: '/qrcode',
      name: 'qrcode',
      meta: {
        keepAlive: true
      },
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
      path: '/insertBankCard',
      name: 'insertBankCard',
      component: resolve => require(["@/views/mine/bankCard/editBankCard.vue"], resolve)
    },
    {
      path: '/myIdCard',
      name: 'myIdCard',
      component: resolve => require(["@/views/mine/idCard/myIdCard.vue"], resolve)
    },
    {
      path: '/register',
      name: 'register',
      component: resolve => require(["@/views/mine/register/register.vue"], resolve)
    },
    {
      path: '/otherRegister',
      name: 'otherRegister',
      component: resolve => require(["@/views/mine/register/otherRegister.vue"], resolve)
    },
    {
      path: '/wxLogin',
      name: 'wxLogin',
      component: resolve => require(["@/views/mine/register/wxLogin.vue"], resolve)
    },
    {
      path: '/attention',
      name: 'attention',
      component: resolve => require(["@/views/mine/register/attention.vue"], resolve)
    },

    // 商城
    {
      path: '/mall',
      name: 'mall',
      component: resolve => require(["@/views/mall/index.vue"], resolve)
    },

    // 500
    {
      path: '/500',
      name: '500',
      component: resolve => require(["@/views/singlePage/500.vue"], resolve)
    }

  ]
})
