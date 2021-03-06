// pages/search/search.js

import { request } from "../../request/index.js";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods: [],
    timer: null,
    isFocus: false,
    inputVal: ""
  },

  // 输入框的值改变 触发该事件
  handleInput(e) {
    const { value } = e.detail;

    if (!value.trim()) {
      this.setData({ isFocus: false, goods: [] });
      this.timer && clearTimeout(this.timer);
      return;
    }

    this.setData({ isFocus: true });

    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.qsearch(value);
    }, 1000);
  },

  // 发送请求
  async qsearch(query) {
    const res = await request({ url: "/goods/qsearch", data: { query } });
    this.setData({ goods: res.data.message });
  },

  // 清空输入框
  clean() {
    this.setData({
      inputVal: "",
      goods: [],
      isFocus: false
    })

    this.timer && clearTimeout(this.timer);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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