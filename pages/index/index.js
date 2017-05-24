//index.js
//获取应用实例


var app = getApp()
Page({
  data: {
    // radioList: [],
    current: true,
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },
  onLoad: function () {
    // let _this = this
    app.simon.getIndexList().then(res => {
      console.log(res)
      this.setData({
        radioList: res.data.radioList,
        slider: res.data.slider,
        songList: res.data.songList
      })
    })
  }
})
