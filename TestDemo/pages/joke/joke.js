// pages/picker/picker.js
var url = require("../../utils/config.js");
var jumpFlag = true;
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag:false,
    loadingMore: false,
    loadingOver: false, 
    data: [],
    color: ["one", "two", "three"],
    pageNum: 1,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '正在加载',
    });
    this.request();
  },

  request: function(e){
    var self = this;
    var time = new Date().getTime();
    wx.request({
      url: url.textJoke,
      data: {
        showapi_timestamp: time,
        page: this.data.pageNum,
        maxResult:20,
      },
      success: function(e){
        console.log(e);
        var data = e.data.showapi_res_body.contentlist;
        var length = data.length;
        if(length == 0){
          self.setData({
            loadingMore: false,
            loadingOver: true,
          });
          return;
        }
        var list = self.data.data.concat(data);
        for(var i = 0; i < data.length; i++){
          data[i].text = self.removeHtml(data[i].text);
        }
        self.setData({
          data: list,
          flag: true,
          loadingMore: false,
        });
        wx.hideLoading();
        wx.stopPullDownRefresh();
      },
    })
  },

  upper: function(e){
    console.log(e);
    wx.startPullDownRefresh({
      
    })
  },

  lower: function(e){
    this.setData({
      loadingMore: true,
      loadingOver: false,
      pageNum: this.data.pageNum + 1,
    });
    this.request();
  },

  jump: function(e){
    if(jumpFlag){
      jumpFlag = false;
      var id = e.currentTarget.id;
      var temp = JSON.stringify(this.data.data[id]);
      wx.navigateTo({
        url: '../jokeDetail/jokeDetail?data=' + temp,
      });
    }
  },

  removeHtml: function (e) {
    return e.replace(/<[^>]+>/g, '');
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
    jumpFlag = true;
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
    wx.stopPullDownRefresh();
    this.request();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.setData({
      loadingMore: true,
      loadingOver: false,
      pageNum: this.data.pageNum+1,
    });
    this.request();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})