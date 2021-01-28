// pages/lightLuxury/lightLuxury.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item: {
      headerUrl:'https://img14.360buyimg.com/ddimg/jfs/t1/157336/14/5023/649883/601272e8Ecc9dbd51/4eb86d17299f5e62.jpg',
      detailUrl:[
        {
          name:'大众车系',
          url:'https://img12.360buyimg.com/ddimg/jfs/t1/160444/26/5292/806662/60127324E0c09b4ab/e0dcb1ab0f4c724f.png'
        },
      ],
      advertisingUrl:'https://img10.360buyimg.com/ddimg/jfs/t1/157859/5/5337/130584/601259bcE7d95cf93/4f604db35e80492d.png',
      id:0
    }
  },
  toDetail(e){
    let id = e.currentTarget.id;
    id = parseInt(id);
    if(id === 0){
      console.log(id)
      wx.navigateTo({
        url: '/pages/public/public',
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