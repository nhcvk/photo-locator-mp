// pages/photo/photo.js
const app = getApp()
const myRequest = require('../../lib/request');

Page({
  data: {
    showLocation: false,
    sc:16
  },
  onLoad: function (e) {
    let that = this
    wx.request({
      url: `http://localhost:3000/photos/${e.id}`,
      success: function(res) {
        console.log(res)
        that.setData({
          image_url: res.data.image_url,
          longitude: res.data.longitude, 
          latitude: res.data.latitude,
          description: res.data.description, 
          markers: [{latitude: res.data.latitude, longitude: res.data.longitude}]
        })
       }
    })
  }, 

   onReady: function (e) {
    this.mapCtx = wx.createMapContext('map')
  },


  goAdd: function (e) {
    wx.navigateTo({
      url: '/pages/add/add'
    })
  },
})