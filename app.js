//app.js

import wux from 'tpls/toast/wux'

App({
  onLaunch: function () {
   
    var that = this

    // 获取设备信息
    that.getSystemInfo(that)

  },
  getSystemInfo: function (that) {
    
    // 获取设备信息
    wx.getSystemInfo({
      success: function (res) {
        that.globalData.systemInfo = {
          'pixelRatio': res.pixelRatio,
          'windowWidth': res.windowWidth,
          'windowHeight': res.windowHeight,
          'sizePixelRatio': 750 / res.windowWidth,
          'system': res.system
        }
      }
    })

  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
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
    userInfo: null,
    systemInfo: null,
    appid: 'wx3c715250b2be693c',
    secret: '5fe4d8189965308ee229a6e1c541c97d',
    grant_type: 'authorization_code',
    http_header: 'https://app.canyoutong.com/',
    userInfo: {
      avatarUrl: '',
      nickName: '',
      openid: '',
      groupid: '',
      score: '',
      id: 0
    },
  },
  // 通过scope来引入wux函数 箭头函数
  wux: (scope) => new wux(scope),

})