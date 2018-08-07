// pages/add/add.js
const app = getApp()
const myRequest = require('../../lib/request');

Page({
  picture: function(e) {
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'], 
      sourceType: ['album', 'camera'], 
      success: function (res) {
        var tempFilePaths = res.tempFilePaths
      },
    })
  },

  goToIndex: function () {
    wx.reLaunch({
      url: '../index/index'
    })
  },
})
