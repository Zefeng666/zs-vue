import config from '../config/config'

const request = config.request;
const API = {

  //wx相关

  // wx登录
  login(params) {
    return request({
      url: '/login',
      params: params
    })
  },

  // wx支付参数
  wechatCallPay(params) {
    return request({
      url: '/wechatCallPay',
      params: params
    })
  },

  // 获取验证码
  sendSms(params) {
    return request({
      url: '/sendSms',
      params: params
    })
  },
  // 注册
  register(params) {
    return request({
      url: '/register',
      params: params
    })
  },

  //销售相关

  //申请拿货
  insertOrder(params) {
    return request({
      url: '/insertOrder',
      params: params
    })
  },

  //查询商品
  queryProduct(params) {
    return request({
      url: '/queryProduct',
      params: params
    })
  },

  //取消订单
  cancelOrder(params) {
    return request({
      url: '/cancelOrder',
      params: params
    })
  },

  //查询我的历史订单
  queryOrder(params) {
    return request({
      url: '/queryOrder',
      params: params
    })
  },

  //申请提现
  applyWithdraw(params) {
    return request({
      url: '/applyWithdraw',
      params: params
    })
  },

  //提现记录
  queryWithdraw(params) {
    return request({
      url: '/queryWithdraw',
      params: params
    })
  },

  //积分明细
  queryIntegrals(params) {
    return request({
      url: '/queryIntegrals',
      params: params
    })
  },

  //查询历史发货订单
  queryHistoryShipOrder(params) {
    return request({
      url: '/queryHistoryShipOrder',
      params: params
    })
  },
  //查询待发货订单
  queryShipOrder(params) {
    return request({
      url: '/queryShipOrder',
      params: params
    })
  },
  //订单发货
  shipOrder(params) {
    return request({
      url: '/shipOrder',
      params: params
    })
  },

  //我的地址相关

  //新增地址
  insertUserAddress(params) {
    return request({
      url: '/insertUserAddress',
      params: params
    })
  },
  //查询地址
  queryUserAddress(params) {
    return request({
      url: '/queryUserAddress',
      params: params
    })
  },
  //删除地址
  deleteUserAddress(params) {
    return request({
      url: '/deleteUserAddress',
      params: params
    })
  },
  //更新地址
  updateUserAddress(params) {
    return request({
      url: '/updateUserAddress',
      params: params
    })
  },

  //我的银行卡相关

  //更新银行卡
  updateUserBankCard(params) {
    return request({
      url: '/updateUserBankCard',
      params: params
    })
  },
  //新增银行卡
  insertUserBankCard(params) {
    return request({
      url: '/insertUserBankCard',
      params: params
    })
  },
  //删除银行卡
  deleteUserBankCard(params) {
    return request({
      url: '/deleteUserBankCard',
      params: params
    })
  },
  //查询银行卡
  queryUserBankCard(params) {
    return request({
      url: '/queryUserBankCard',
      params: params
    })
  },

  //我的推荐码
  queryUser(params) {
    return request({
      url: '/queryUser',
      params: params
    })
  },

  // 获取上传图片token
  getQnToken(params) {
    return request({
      url: '/getQnToken',
      params: params
    })
  },

  // 上传身份证
  alterUserIdCard(params) {
    return request({
      url: '/alterUserIdCard',
      params: params
    })
  },

  // 查询身份证
  queryUserIdCard(params) {
    return request({
      url: '/queryUserIdCard',
      params: params
    })
  },
};

export default API;
