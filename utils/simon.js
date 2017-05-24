const url = 'https://c.y.qq.com'
const fetch = require('./fetch')

function fetchApi(type, api, option) {
  return fetch(url, type, api, option)
}

module.exports = {
  getIndexList(option) {
    return fetchApi('GET', `musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg`).then(res => res.data)
  }
}