// pages/home/searchpage/searchpage.js

var utils = require('../../../utils/utils.js')

var utilsObj = utils.createUtils()

const App = utilsObj.getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    // 搜索关键词
    keyword : '',
    hiddeEnptyBox: true,

    // 热门搜索
    hots : [
      '窗',
      '地毯清洗',
      '床垫清洗',
      '沙发清洗好不好沙发清',
      '软装设计',
      '软装',
      '酒店清洗',
      '会所啥'
    ], 
    searchDatas: [],
    index : 0

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    var that = this

    // 错误提示
    that.$wuxToast = App.wux(that).$wuxToast
    
    that.setScrollHeight()

    if (options.keyword){
      that.setData({ keyword: options.keyword })

      that.search(options.keyword)
    }
    
  },

  setScrollHeight : function(e){
    
    var that = this
    var systemInfo = App.globalData.systemInfo
    var height = 750 * systemInfo.windowHeight / systemInfo.windowWidth
    that.setData({
      scrollHeight: height - 25
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  showToast(title) {
    const _this = this;
    _this.$wuxToast.show({
      type: 'success',
      timer: 1500,
      color: '#fff',
      text: title,
      success: () => console.log('已完成')
    })
  },
  showToastCancel(title) {
    const _this = this;
    _this.$wuxToast.show({
      type: 'cancel',
      timer: 1500,
      color: '#fff',
      text: title,
      success: () => console.log('取消操作')
    })
  },
  showToastErr(title) {
    const _this = this;
    _this.$wuxToast.show({
      type: 'forbidden',
      timer: 1500,
      color: '#fff',
      text: title,
      success: () => console.log('禁止操作')
    })
  },
  showToastText(title) {
    const _this = this;
    _this.$wuxToast.show({
      type: 'text',
      timer: 1500,
      color: '#fff',
      text: title,
      success: () => console.log('文本内容')
    })
  },
  
  formSubmit : function(e){  
    var that = this
    if (that.trimStr(e.detail.value.keyword).length > 0){
      that.search(e.detail.value.keyword)
    }
  },
  hotsItemDetail: function (e) {
    console.log(e.currentTarget.dataset.info)
    wx.navigateTo({
      url: '../goodsDetailpage/goodsDetailpage',
    })
  },
  hotSearchItemClicked : function(e){
    var that = this
    that.setData({ keyword: e.target.dataset.info })
    that.search(e.target.dataset.info)
  },
  bindinput :function(e){
    
    var that = this
    if (e.detail.value.length == 0){
      that.setData({
        hiddeEnptyBox: true,
        searchDatas: [],
      })
    }
  },
  search: function (keyword){
    
    var that = this

    wx.showLoading({
      title: '搜索中...'
    })
    setTimeout(function () {

      wx.hideLoading()

      console.log(that.data.index)

      if(that.data.index % 2 == 0){
        that.showToastErr("结果为空")
        that.setData({
          hiddeEnptyBox: false,
          searchDatas : [],
          index : that.data.index + 1
        })  
      }else{
        that.setData({
          searchDatas: [{
            name: '会所清洗 高效杀菌 家具专业清洗 保护保养全套措施',
            pic: '../../../images/hotsell/ima01.jpg',
            goodcount: 1200,
            price: 120,
            oldprice: 900,
          },
          {
            name: '酒店空调清洗 拆卸逐步详细清洗',
            pic: '../../../images/hotsell/ima02.jpg',
            goodcount: 120,
            price: 80,
            oldprice: 120,
          }, {
            name: '汽车清洗 高效杀菌 专业清洗 保护保养全套措施 汽车清洗 高效杀菌 专业清洗 保护保养全套措施',
            pic: '../../../images/hotsell/ima03.jpg',
            goodcount: 1900,
            price: 400,
            oldprice: 780,
          }, {
            name: '会所清洗 高效杀菌 家具专业清洗 保护保养全套措施',
            pic: '../../../images/hotsell/ima01.jpg',
            goodcount: 1200,
            price: 120,
            oldprice: 900,
          },
          {
            name: '酒店空调清洗 拆卸逐步详细清洗',
            pic: '../../../images/hotsell/ima02.jpg',
            goodcount: 120,
            price: 80,
            oldprice: 120,
          }, {
            name: '汽车清洗 高效杀菌 专业清洗 保护保养全套措施 汽车清洗 高效杀菌 专业清洗 保护保养全套措施',
            pic: '../../../images/hotsell/ima03.jpg',
            goodcount: 1900,
            price: 400,
            oldprice: 780,
          }],
          hiddeEnptyBox: true,
          index: that.data.index + 1
        })
      }
    }, 1000)
  },
  trimStr : function (str){
    return str.replace(/(^\s*)|(\s*$)/g, "")
  }
})