// pages/testing/testing.js
// pages/add/add.js
const app = getApp()
const myRequest = require('../../lib/request');

Page({

  onShow: function () {
    var that = this
    console.log("that >> ")
    console.log(that)
    console.log(that.data.is_take_photo)
    if (!that.data.is_take_photo) {
      // Mark as already take picture
      that.data.is_take_photo = true

      wx.chooseImage({
        count: 1, // Default 9
        sizeType: ['compressed'], // Can specify whether it is the original or compressed image, both have defaults
        sourceType: ['camera', 'album'], // Can specify whether the source is an album or camera, both have defaults
        success: function (res) {
          // Returns the local file path list for the selected photo, tempFilePath can be used as the img tag's src attribute to display the image
          var tempFilePath = res.tempFilePaths[0]

          console.log("Temp file path >>")
          console.log(tempFilePath)
          that.setData({
            is_sending: true,
            imageSrc: tempFilePath
          })
          console.log("Have Image >>")
          console.log(that.data.haveImage)
          // console.log(that.data.imgSrc)

          // #####LEANCLOUD PART --- SEND IMG
          console.log("Processing send img to LeanCloud >>")
          new AV.File('file-name', {
            blob: {
              uri: tempFilePath,
            },
          }).save().then(
            file => {
              console.log("Yeah..This is img url in LeanCloud >>")
              console.log(that)
              console.log(file.url())
              that.setData({
                is_sending: false,
                haveImage: true,
                imageUrl: file.url()
              })
            }
          ).catch(console.error);
          // ######LEANCLOUD PART --- SEND IMG
        }
      })
    }
  },

  goIndex: function (e) {
    wx.reLaunch({
      url: '/pages/index/index'
    })
  },
})

//   picture: function(e) {
//     wx.chooseImage({
//       count: 1,
//       sizeType: ['original', 'compressed'], 
//       sourceType: ['album', 'camera'], 
//       success: function (res) {
//         var tempFilePaths = res.tempFilePaths
//       },
//     })
//   },

//   goToIndex: function () {
//     wx.reLaunch({
//       url: '../index/index'
//     })
//   },
// })