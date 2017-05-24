const Promise = require('./es6-promise.min.js')
/**
 * 抓取远端API的结构
 * @param  {String} url   url 根地址
 * @param  {String} api   请求路径
 * @param  {Objece} type  请求类型
 * @return {Promise}      包含抓取任务的Promise
 */

module.exports = function (url, type, api, option) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${url}/${api}`,
      data: option,
      method: type,
      header: { 'Content-Type': 'application/json', 'sessionId': getApp().globalData.sessionId },
      success: resolve,
      fail: reject
    })
  }).catch(function (e) {
    console.log(e);
  })
}