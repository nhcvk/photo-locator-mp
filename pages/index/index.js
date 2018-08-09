//index.js
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
        page.setData({items: res.data.photos}) 
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

  goFavorites: function (e) {
    wx.reLaunch({
      url: '/pages/favorites/favorites'
    })
  },

  changeToPhoto: function (e) { 
    wx.navigateTo({ 
      url: `../photo/photo?id=${this.data.items[e.currentTarget.id].id}` 
    }) 
  },

  showImage: function (e) {
    wx.reLaunch({
      url: '/pages/photo/photo'
    })
  },
})
