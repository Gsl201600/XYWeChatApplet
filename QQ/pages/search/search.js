// pages/search/search.js
var url = require('../../utils/config.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    restBtn: false, //是否显示清空输入框按钮
    showToast: false,
    data: [], //保存搜索后返回的数据
    history: [], //保存搜索过的历史
    flag: false, //是否显示历史记录

  },

  /**
   * focus:
   *   当输入框获得焦点时，判断是否有数据，如果没有数据就显示“历史记录”
   */
  focus: function(){
    if(this.data.data.length != 0){
      return;
    }
    this.setData({
      flag: true,
    });
  },

  /**
   * input:
   *   当用户开始输入内容或撤销内容时，如果输入框的内容不为空，
   * 就显示 “清楚按钮”
   * 
   */
  input: function(e){
    var value = e.detail.value;
    var restBtn = this.data.restBtn;
    if(value == ''){
      restBtn = false;
    }else{
      restBtn = true;
    }

    this.setData({
      restBtn: restBtn,
    });
  },

  /**
   * reset:
   * 当点击 “清楚按钮”时 把返回的数据给清除并隐藏该清除按钮，
   * 然后显示历史记录
   */
  reset: function(){
    this.setData({
      restBtn: false,
      data: [],
      flag: true,
    });
  },

  /**
   * clear: 
   *  清除所有的缓存历史记录
   */
  clear: function(){
    wx.removeStorageSync('history');
    this.setData({
      history: [],
    });
  },

  /**
   * delete:
   *  清除点击的历史记录
   */
  delete: function(e){
    var id = e.currentTarget.id;
    var history = this.data.history;
    var newHistory = [];
    var temp = 0;

    for(let i = 0; i < history.length; i++){
      if(i == id){
        continue;
      }
      newHistory[temp] = history[i];
      temp++;
    }
    wx.setStorageSync('history', newHistory);

    this.setData({
      history: newHistory,
    });
  },

  confirm: function(e){
    var value = e.detail.value;
    if(value == ''){
      this.setData({
        toastText: '不能为空',
      });
      this.showToast();
      return;
    }
    wx.request({
      url: url.search,
      data: {
        keyword: value,
      },
      success: (e) => {
        var data = e.data.showapi_res_body.pagebean.contentlist;
        this.setData({
          data: data,
          flag: false,
        });

        // 历史
        var history = this.data.history;
        history.unshift(value);

        wx.setStorageSync('history', history);

        this.setData({
          history: history,
        });

      }
    })
  },

  showToast: function(){
    this.setData({
      showToast: true,
    });

    setTimeout(() => {
      this.setData({
        showToast: false,
      });
    }, 1500);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var history = wx.getStorageSync('history') || [];
    this.setData({
      history: history,
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