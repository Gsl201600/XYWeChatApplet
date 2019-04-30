var appid = 89761;
var secret = "5a2fa205536a4386a729214198367f00";
var param = "?showapi_appid=" + appid + "&showapi_sign=" + secret;

var textJoke = "https://route.showapi.com/341-1" + param;
var imgJoke = "https://route.showapi.com/341-2" + param;
var gifJoke = "https://route.showapi.com/341-3" + param;

module.exports = {
  textJoke: textJoke,
  imgJoke: imgJoke,
  gifJoke: gifJoke,
};