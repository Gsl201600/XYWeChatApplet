// pages/list/list.js
var url = require('../../utils/config.js');
var jumpFlag = true;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img: [
      {
        url: "https://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_4_300_213131694.jpg?max_age=2592000",
        num: 4,
        title: "安利XS·巅峰榜·流行指数",
        content: [],
        code: [],
      },
      {
        url: "https://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_26_300_212606735.jpg?max_age=2592000",
        num: 26,
        title: "巅峰榜·热歌",
        content: [],
        code: [],
      },
      {
        url: "https://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_27_300_213085460.jpg?max_age=2592000",
        num: 27,
        title: "巅峰榜·新歌",
        content: [],
        code: [],
      },
      {
        url: "https://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_28_300_211988085.jpg?max_age=2592000",
        num: 28,
        title: "巅峰榜·网络歌曲",
        content: [],
        code: [],
      },
      {
        url: "https://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_5_300_213055390.jpg?max_age=2592000",
        num: 5,
        title: "巅峰榜·内地",
        content: [],
        code: [],
      },
      {
        url: "https://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_6_300_212877900.jpg?max_age=2592000",
        num: 6,
        title: "巅峰榜·港台",
        content: [],
        code: [],
      },
      {
        url: "https://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_3_300_213031254.jpg?max_age=2592000",
        num: 3,
        title: "巅峰榜·欧美",
        content: [],
        code: [],
      },
      {
        url: "https://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_16_300_212928794.jpg?max_age=2592000",
        num: 16,
        title: "巅峰榜·韩国",
        content: [],
        code: [],
      },
      {
        url: "https://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_17_300_212658392.jpg?max_age=2592000",
        num: 17,
        title: "巅峰榜·日本",
        content: [],
        code: [],
      },
      {
        url: "https://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_52_300_212374942.jpg?max_age=2592000",
        num: 32,
        title: "巅峰榜·腾讯音乐人原创榜",
        content: [],
        code: [],
      },
      {
        url: "https://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_36_300_200732019.jpg?max_age=2592000",
        num: 36,
        title: "巅峰榜·K歌金曲",
        content: [],
        code: [],
      }
    ],

    flag: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '正在加载...',
    });

    var len = this.data.img.length;
    var flag = this.data.flag;
    var self = this;

    for(let i = 0; i < len; i++){
      wx.request({
        url: url.hot,
        data: {
          topid: this.data.img[i].num
        },
        success: function (e) {
          console.log(e);
          var songlist = e.data.showapi_res_body.pagebean.songlist;

          var key = 'img[' + i + '].content';
          var code = 'img[' + i + '].code';
          if (self.data.img[i].num == 36){
            wx.hideLoading();
            flag = true;
          }

          self.setData({
            [key]: songlist,
            flag: flag,
          });

          let data = songlist;
          for(let i = 0; i < data.length; i++){
            data[i].albumpic_big = encodeURIComponent(data[i].albumpic_big);
            data[i].albumpic_small = encodeURIComponent(data[i].albumpic_small);
            data[i].downUrl = encodeURIComponent(data[i].downUrl);
            data[i].url = encodeURIComponent(data[i].url);
            data[i].songname = encodeURIComponent(data[i].songname);
            data[i].singername = encodeURIComponent(data[i].singername);
          }

          self.setData({
            [code]:data
          });
        }
      });
    }
  },

  jump: function(e){
    if(jumpFlag){
      jumpFlag = false;
      var id = e.currentTarget.id;
      var data = this.data.img[id].code;

      var temp = JSON.stringify(data);
      wx.navigateTo({
        url: '../ranking/ranking?content='+temp,
      })
    }
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