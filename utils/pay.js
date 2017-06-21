var md5 = require('./md5.js')
var _ = require('./underscore.modified.js')

var app = getApp()

// 支付控制器
class Payer {

  
  // 第一步 获取openID
  getOpenID (){
    return wx.getStorageSync('userInfo').openid
  }

  // 第二步 调取统一下单 返回预订单id(prepay_id) 进行第一次签名
  unifiedorder(job_id, price) {
    
    var payer = this


    wx.request({
      url: 'https://app.canyoutong.com/index.php?appjson=1&m=Jobsend&a=add' + "&com=" + wx.getStorageSync('userInfo').com,
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        job_id: job_id,
        pay_url: 'wx',
        price: price
      },
      success: function (res) {
        
        // 订单信息
        var order = {
          appid: app.globalData.appid, // 小程序ID
          mch_id: 1, // 商户号
          nonce_str: res.data.parameter.paySign, // 随机字符串
          body: res.data.parameter.body, // 商品描述
          out_trade_no: res.data.parameter.out_trade_no, // 商户订单号
          total_fee: 10 * res.data.parameter.total_fee, // 总金额
          notify_url: res.data.parameter.notify_url, // 通知地址
          trade_type: 'JSAPI', //交易类型
          spbill_create_ip: '', // IP地址
          openid: payer.getOpenID(), // 用户标识
          sign_type: 'MD5', // 签名类型
        }
        order.sign = payer.getSign(order) // 设置签名


        wx.request({
          url: 'https://api.mch.weixin.qq.com/pay/unifiedorder',
          method: 'POST',
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          data: order,
          success: function (res) {
            console.log('success')
            console.log(res)
            
          },
          fail: function (res) {
            console.log('fail')
            console.log(res)
          }
        })

      },
      fail :function(res){

      }
    })

    return

    

  }


  // 第三步 拿到repay_id后，再次签名
  sign (prepay_id) {
    
    var payer = this

    var signInfo = {
      appId: app.globalData.appid, // 小程序ID
      timeStamp: 1, // 时间戳
      nonceStr: 1, // 随机串
      package: 1, // 数据包
      signType: 'MD5', // 签名方式
      repay_id: 'prepay_id=' + prepay_id
    }
    signInfo.paySign = payer.getSign(signInfo) // 设置签名

    

  }


  // 第四步 调起支付
  pay (){
    
    // 调起支付
    wx.requestPayment({
      'timeStamp': '',
      'nonceStr': '',
      'package': '',
      'signType': 'MD5',
      'paySign': '',
      'success': function (res) {

      },
      'fail': function (res) {

      },
      'complete': function (res) {

      }
    })
  }


  // 签名
  getSign (param){
    var keys = _.allKeys(param)
    var temp
    for (var i = 0; i < keys.length; i++){
      for (var j = 0; j < i; j++){
        if (keys[i] < keys[j]){
          temp = keys[i]
          keys[i] = keys[j]
          keys[j] = temp
        }
      }
    }
    return md5.hex_md5(_.map(param, function(value, key){
      return key + '=' + value
    }).join('&')).toUpperCase()
  }

}

function createPayer() {
  return new Payer();
}

module.exports = {
  createPayer: createPayer
}