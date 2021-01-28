// pages/luxurious/luxurious.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item: {
      headerUrl:'https://img14.360buyimg.com/ddimg/jfs/t1/160260/11/5392/277132/60125ba6E7baa2bfc/b39514b5dffb1654.jpg',
      detailUrl:[
        {
          name:'玛莎拉蒂车系',
          url:'https://img10.360buyimg.com/ddimg/jfs/t1/151131/17/17599/927369/60125cfcEe619a676/f64ff80842cb071d.png'
        },
        {
          name:'保时捷车系',
          url:'https://img14.360buyimg.com/ddimg/jfs/t1/165585/6/4156/767757/60125d15E3d4c75a4/fb5f03a2dc8d558f.png'
        },
        {
          name:'路虎车系',
          url:'https://img14.360buyimg.com/ddimg/jfs/t1/165264/30/4290/642914/60121814E8e51e1b8/62e54d870dc71ae0.png'
        }
      ],
      advertisingUrl:'https://img10.360buyimg.com/ddimg/jfs/t1/157859/5/5337/130584/601259bcE7d95cf93/4f604db35e80492d.png',
      id:2
    }
    
  },
  toDetail(e){
    let id = e.currentTarget.id;
    id = parseInt(id);
    if(id === 0){
      console.log(id)
      wx.navigateTo({
        url: '/pages/maserati/maserati',
      })
    }else if(id === 1){
      wx.navigateTo({
        url: '/pages/porsche/porsche',
      })
    }else{
      wx.navigateTo({
        url: '/pages/landRover/landRover',
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