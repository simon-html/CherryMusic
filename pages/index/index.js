//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    current: []
  },
  onLoad: function () {
    app.simon.getIndexList().then(res => {
      console.log(res)
      if (res.code == 0) {
        this.setData({
          radioList: res.data.radioList,
          slider: res.data.slider,
          songList: res.data.songList,
          currentArr: app.currentArr
        })
      }
    })
  },
  navTap() {
    app.common.navTap()
  }
})
