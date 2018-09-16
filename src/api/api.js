import config from '../config/config'

const request = config.request;
const API = {

  //wx相关

  //微信登录
  wechatLogin(params) {
    return request({
      url: '/wechat/login',
      params: params,
      method: 'get'
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
};

export default API;
