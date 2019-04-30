var appid = 57274;
var secret = '66d747c81d04439ea7afd48ed652f2d8';
var param = "?showapi_appid=" + appid + "&showapi_sign=" + secret;

var search = "https://route.showapi.com/213-1" + param;
var hot = "https://route.showapi.com/213-4" + param;

module.exports = {
  search: search,
  hot: hot,
};