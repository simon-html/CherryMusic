//app.js
const simon = require('./utils/simon.js')
const common = require('./utils/common.js')
App({
  simon,
  common,
  currentArr: [{
    title: '推荐',
    url: '../../pages/index/index',
    current: true,
  }, {
    title: '排行榜',
    url: '../../pages/Ranking/Ranking',
    current: false
  }, {
    title: '搜索',
    url: '../../pages/search/search',
    current: false
  }],
  onLaunch: function () {
    //调用API从本地缓存中获取数据

  },
  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData: {
    userInfo: null
  }
})