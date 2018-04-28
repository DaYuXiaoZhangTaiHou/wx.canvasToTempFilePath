// pages/canvasDemo/canvas.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canvasImg:'',
    isHidden:false
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
    var that = this;
    var context = wx.createCanvasContext('mycanvas');
    wx.chooseImage({
      success: function (res) {
        context.drawImage(res.tempFilePaths[0], 0, 0, 150, 100);
        
        context.fillStyle = "#FF0000";
        context.fillRect(0, 0, 50, 50);
        context.draw(true, setTimeout(function(){
          wx.canvasToTempFilePath({
            destWidth: 150,
            destHeight: 100,
            canvasId: 'mycanvas',
            success: function (res) {
              console.log('1212' + res.tempFilePath);
              wx.saveImageToPhotosAlbum({
                filePath: res.tempFilePath,
              })
              that.setData({
                canvasImg: res.tempFilePath,
                isHidden: true
              });
            }
          })
        },300));
      }
    })
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