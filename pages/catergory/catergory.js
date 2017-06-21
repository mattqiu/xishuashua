// pages/catergory/catergory.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 小 分类 导航
    navs: [
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
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  navItemDetail: function (e) {
    console.log(e.currentTarget.dataset.info)
    wx.navigateTo({
      url: './catergory2nd/catergory2nd',
    })
  },
})