// pages/uploads/uploads.js
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
      data: {
        user_id: app.globalData.userId
      },
      success(res) {
        console.log(res)
        page.setData({ items: res.data.photos })
      }
    })
  },

  goAdd: function (e) {
    wx.navigateTo({
      url: '/pages/add/add'
    })
  },

  goIndex: function (e) {
    wx.reLaunch({
      url: '/pages/index/index'
    })
  },

  goFavorites: function (e) {
    wx.reLaunch({
      url: '/pages/favorites/favorites'
    })
  },

  showImage: function (e) {
    wx.reLaunch({
      url: '/pages/photo/photo'
    })
  },

  changeToPhoto: function (e) {
    wx.navigateTo({
      url: `../photo/photo?id=${this.data.items[e.currentTarget.id].id}`
    })
  },

})
