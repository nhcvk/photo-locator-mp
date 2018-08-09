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
      // url: `http://localhost:3000/photos/${e.id}` WORKS FOR DIRECTING INDEX, NOT FOR TEST,
      url: `http://localhost:3000/photos/10`,
      success: function(res) {
        console.log(res)
        that.setData({
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
    wx.reLaunch({
      url: '/pages/add/add'
    })
  },
})