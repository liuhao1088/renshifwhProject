// pages/luxury/luxury.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item: {
      headerUrl:'https://img10.360buyimg.com/ddimg/jfs/t1/163289/40/4614/1101877/60126e3cE0547d9ff/e7c83bd19297ae28.png',
      detailUrl:[
        {
          name:'奔驰车系',
          url:'https://img12.360buyimg.com/ddimg/jfs/t1/170507/5/4602/427401/60126ef2E27fa5bbb/b6f69f3481f6f441.png'
        },
        {
          name:'宝马车系',
          url:'https://img11.360buyimg.com/ddimg/jfs/t1/166398/6/4800/849227/60126f00E52f487a6/efbf01eec8715900.png'
        },
        {
          name:'奥迪车系',
          url:'https://img11.360buyimg.com/ddimg/jfs/t1/154381/16/16365/353742/60126f0dEdac8c1fa/571a3c7d5ff7fc81.png'
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
        url: '/pages/benz/benz',
      })
    }else if(id === 1){
      wx.navigateTo({
        url: '/pages/bmw/bmw',
      })
    }else{
      wx.navigateTo({
        url: '/pages/audi/audi',
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