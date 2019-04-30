//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    swiperImg: [
      "https://y.gtimg.cn/music/photo_new/T003R720x288M000004buTTB1oAfna.jpg?max_age=2592000",
      "https://y.gtimg.cn/music/photo_new/T003R720x288M000002vZryD2w33XK.jpg?max_age=2592000",
      "https://y.gtimg.cn/music/photo_new/T003R720x288M00000265frs2T1k7y.jpg?max_age=2592000",
      "https://y.gtimg.cn/music/photo_new/T003R720x288M0000024gbEt1qFDXA.jpg?max_age=2592000",
      "https://y.gtimg.cn/music/photo_new/T003R720x288M000000jav33371PXY.jpg?max_age=2592000"
    ],
    interval: 3000,
    duration: 1500,
    activeColor: '#ccc',
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
