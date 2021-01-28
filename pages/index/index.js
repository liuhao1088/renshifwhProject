// pages/video/video.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item: {
      headerUrl:'https://img14.360buyimg.com/ddimg/jfs/t1/169125/2/4482/468737/60113984Edc56134a/bd23029f0d6f3364.png',
      detailUrl:[
        {
          name:'奢华专用记录仪',
          url:'https://img14.360buyimg.com/ddimg/jfs/t1/151186/36/16908/761249/60123495E7a382288/5bcca0aa26ace700.png'
        },
        {
          name:'豪华专用记录仪',
          url:'https://img14.360buyimg.com/ddimg/jfs/t1/171123/25/4591/725024/601234baE4ce41f22/e6d277ad53f58f13.png'
        },
        {
          name:'轻奢专用记录仪',
          url:'https://img14.360buyimg.com/ddimg/jfs/t1/167964/9/3802/649109/60123528Ea5015444/dac260526335679d.png'
        }
      ],
      id:2
    }
  },
  toDetail(e){
    let id = e.currentTarget.id;
    id = parseInt(id);
    console.log(id)
    if(id === 0){
      wx.navigateTo({
        url: '/pages/luxurious/luxurious',
      })
    }else if(id === 1){
      wx.navigateTo({
        url: '/pages/luxury/luxury',
      })
    }else{
      wx.navigateTo({
        url: '/pages/lightLuxury/lightLuxury',
      })
    }
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

  }
})