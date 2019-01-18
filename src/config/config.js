let Promise = require('bluebird');
let axios = require('axios');
let qs = require('qs');
import router from '../router/index'
// import store from '../store/store'
axios.defaults.timeout = 5000;
axios.defaults.baseURL = "https://haoyia.houseselected.com/client"; //10.0.8.177:8080
// axios.defaults.baseURL = "https://haoyi.houseselected.com/client"; //10.0.8.177:8080
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  if (response.data.code !== 200) {
    if (response.data.code === 900) {
      localStorage.clear()
      router.push('/wxLogin')
    } else if (response.data.code === 950) {
      localStorage.clear()
      window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxa5b0807540a1517e&redirect_uri=https%3A%2F%2Fhaoyi.houseselected.com%2FotherRegister&response_type=code&scope=snsapi_userinfo#wechat_redirect';
    }
  }
  return response;
}, function (error) {
  // 对响应错误做点什么
  // router.push('/wechatLogin')

  return Promise.reject(error);
});
const config = {
  request: (opt) => {
    // let opt;
    if (!opt.params) {
      opt.params = {}
    }
    if (!opt.method) {
      opt.method = 'post'
    }
    opt.method = opt.method.toLowerCase();
    // opt.params['handleUserId'] = 33;
    // axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
    // console.log(window.location.hostname === 'localhost');
    if (window.location.hostname === 'localhost') {
      axios.defaults.headers.common['Authorization'] = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDQ1ODIwNDcsInVzZXJuYW1lIjoi5aOu5Lmh6IO96YeP55Sf54mp56eR5oqAIn0.iI49VU8OEhXyikIYuMJmVVmZ5dbfH-YkCEPfJYCfWOc';
    } else {
      axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
    }

    if (!opt.params.pageSize) {
      // opt.params['pageSize'] = 50;
    }

    let option = {
      url: opt.url,
      method: opt.method,
      data: qs.stringify(opt.params),
    };
    if (opt.method === 'get') {
      option.params = opt.params
    }
    return new Promise((resolve, reject) => {

      axios(option).then((response) => {
        resolve(response.data);

      }).catch((err) => {
        // 响应错误回调
        reject(err.message);
      });
    })
  }
};

export default config;
