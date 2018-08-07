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

})
