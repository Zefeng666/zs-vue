let Promise = require('bluebird');
let axios = require('axios');
let qs = require('qs');
// import router from '../router/index'
// import store from '../store/store'
axios.defaults.timeout = 5000;
axios.defaults.baseURL = "http://www.tlong.tv/niuren";
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  if (response.data.returnCode !== 1) {
    // store.commit('showErrorMsg', response.data);
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
    // opt.params['handleToken'] = '16A6BA935255D15EA3AF32B5565DB546';
    // opt.params['handleUserId'] = 1;
    // opt.params['handleToken'] = '22383E3C779467B39E827E5A5651DCFE';
    opt.params['handleUserId'] = localStorage.getItem('user_userId');
    opt.params['handleToken'] = localStorage.getItem('user_token');
    if (!opt.params.pageSize) {
      opt.params['pageSize'] = 50;
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
