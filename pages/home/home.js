// pages/home/home.js

const utils = require('../../utils/utils.js')
const utilsObj = utils.createUtils()
const loginer = require('../../utils/loginer.js')
const App = utilsObj.getApp()
const IP_HEADER = App.globalData.http_header

Page({

  /**
   * 页面的初始数据
   */
  data: {

    //顶部
    bannerHeight : 315,
    banner : [
      '../../images/banner/banner01.jpg',
      '../../images/banner/banner01.jpg',
      '../../images/banner/banner01.jpg'
    ],

    // 小 分类 导航
    navs : [
      {
        name: "家庭清洗",
        picPath: "../../images/littleNav/Home cleaning.png"
      },
      {
        name: "大宗清洗",
        picPath: "../../images/littleNav/Mass cleaning.png"
      },
      {
        name: "免费体验",
        picPath: "../../images/littleNav/Free experience.png"
      },
      {
        name: "家庭软装",
        picPath: "../../images/littleNav/Family soft pack.png"
      },
      {
        name: "商务软装",
        picPath: "../../images/littleNav/Business soft suit.png"
      },
      {
        name: "软装设计",
        picPath: "../../images/littleNav/Soft package design.png"
      }
    ],

    // 热门推荐
    hots : [
      {
        name: '会所清洗 高效杀菌 家具专业清洗 保护保养全套措施',
        pic: '../../images/hotsell/ima01.jpg',
        goodcount:1200,
        price: 120,
        oldprice: 900,
      },
      {
        name: '酒店空调清洗 拆卸逐步详细清洗',
        pic: '../../images/hotsell/ima02.jpg',
        goodcount: 120,
        price: 80,
        oldprice: 120,
      }, {
        name: '汽车清洗 高效杀菌 专业清洗 保护保养全套措施 汽车清洗 高效杀菌 专业清洗 保护保养全套措施',
        pic: '../../images/hotsell/ima03.jpg',
        goodcount: 1900,
        price: 400,
        oldprice: 780,
      },
    ]
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    var that = this
    // 错误提示
    that.$wuxToast = App.wux(that).$wuxToast

  
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

  toSearchPage: function (e) {
    wx.navigateTo({
      url: './searchpage/searchpage'
    })
  },
  hotsItemDetail : function(e){
    console.log(e.currentTarget.dataset.info)
    wx.navigateTo({
      url: './goodsDetailpage/goodsDetailpage',
    })
  },
  navItemDetail: function (e) {
    console.log(e.currentTarget.dataset.info)
    wx.navigateTo({
      url: '../catergory/catergory2nd/catergory2nd',
    })
  },
  bannerDetail: function (e) {
    console.log(e.currentTarget.dataset.info)
  },
  trimStr: function (str) {
    return str.replace(/(^\s*)|(\s*$)/g, "")
  }
})