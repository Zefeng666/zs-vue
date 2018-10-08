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
Vue.filter("orderStatus", function (status) {
  if (status == 0) {
    return "审核中";
  } else if (status == 1) {
    return "审核通过";
  } else if (status == 2) {
    return "审核未通过";
  }
});
Vue.filter("withdrawStatus", function (status) {
  if (status == 0) {
    return "审核中";
  } else if (status == 1) {
    return "审核通过";
  } else if (status == 2) {
    return "审核未通过";
  }
});
Vue.filter("formatDate", function (time) {
  let d = new Date(time);
  return d.toLocaleString();
});