// pages/buy/buy.js
var r = wx.getRecorderManager();
var temp;
var audio = wx.createInnerAudioContext();
r.onStop(function(res){
  console.log(res);
  temp = res.tempFilePath;
});
r.onStart(function(e){
  console.log("开始");
});
r.onPause(function(e){
  console.log("暂停");
});
Page({

  /**
   * 页面的初始数据
   */
  data: {
    width: 0,
    height: 0,
  },
  start: function(e){
    // r.start();
    wx.chooseLocation({
      success: function(res) {
        console.log(res);
      },
    })
  },
  pause:function(e){
    r.pause();
  },
  go: function (e) {
    r.resume();
  },
  stop: function (e) {
    r.stop();
  },
  play: function(e){
    audio.src = temp;
    audio.autoplay = true;
  },
  test: function(e){
    wx.getNetworkType({
      success: function(res) {
        console.log(res);
      },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var self = this;
    // wx.getSystemInfo({
    //   success: function(res) {
    //     self.setData({
    //       width: res.windowWidth,
    //       height: res.windowHeight,
    //     });
    //   },
    // });
    // type: "gcj02",
    // wx.getLocation({
    //   success: function(res) {
    //     var latitude = res.latitude;
    //     var longitude = res.longitude;
    //     wx.openLocation({
    //       latitude: latitude,
    //       longitude: longitude,
    //     })
    //   },
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})