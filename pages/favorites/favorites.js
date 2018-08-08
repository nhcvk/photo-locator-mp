// pages/favorites/favorites.js
const app = getApp()
const myRequest = require('../../lib/request');

Page({

  data: {
    items: []
  },

  onLoad: function () {
    let page = this
    myRequest.get({
      path: 'photos',
      success(res) {
        console.log(res)
        page.setData({ items: res.data.photos })
      }
    })
  },

  goAdd: function (e) {
    wx.reLaunch({
      url: '/pages/add/add'
    })
  },

  goUploads: function (e) {
    wx.reLaunch({
      url: '/pages/uploads/uploads'
    })
  },

  goIndex: function (e) {
    wx.reLaunch({
      url: '/pages/index/index'
    })
  },

  showImage: function (e) {
    wx.reLaunch({
      url: '/pages/photo/photo'
    })
  },

})


  