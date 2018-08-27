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

  //financial财务相关

  //提现
  getCash(params) {
    return request({
      url: '/financial/getCash',
      params: params
    })
  },
  //新增地址
  insertUserAddress(params) {
    return request({
      url: '/insertUserAddress',
      params: params
    })
  }
};

export default API;
