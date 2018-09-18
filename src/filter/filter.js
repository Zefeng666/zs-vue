import Vue from 'vue'

Vue.filter("formatVipLevel", function (status) {
  if (status == 0) {
    return "VIP";
  } else if (status == 1) {
    return "总代理";
  } else if (status == 2) {
    return "CEO";
  }
});