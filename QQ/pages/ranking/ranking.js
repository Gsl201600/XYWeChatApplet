// pages/ranking/ranking.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: [],
    src: '',
    flag: false,
    color:['color', 'color', 'color'],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    var data = JSON.parse(e.content);
    // 数据解码
    for(let i = 0; i < data.length; i++){
      data[i].albumpic_big = decodeURIComponent(data[i].albumpic_big);
      data[i].albumpic_small = decodeURIComponent(data[i].albumpic_small);
      data[i].downUrl = decodeURIComponent(data[i].downUrl);
      data[i].url = decodeURIComponent(data[i].url);
      data[i].songname = decodeURIComponent(data[i].songname);
      data[i].singername = decodeURIComponent(data[i].singername);
    }

    this.setData({
      data: data,
      src: data[0].albumpic_small,
      flag: true,
    });
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