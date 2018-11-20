// pages/home/WeChat.js
Page({
  handleTap7:function(){
    // 关闭当前组件  回退到lianxi03
    wx.navigateBack({
      url:'pages/lianxi03/lianxi03'
    })
  },
  //为九宫格绑定点击事件
  handleJumpnews:function(event){
    var id=event.target.dataset.id;
    if(id==1){
      //跳转到游戏组件
      wx.navigateTo({
        url: '/pages/news/news',
      })
    }
  },
  /**
   * 页面的初始数据
   */
  data: {
    list: [
    { id: 1, img_url: 'img/1.jpg' }, 
    { id: 2, img_url: 'img/2.jpg' }, 
    { id: 3, img_url: 'img/3.jpg' }, 
    { id: 4, img_url: 'img/4.jpg' }
    ]
    ,
    list1:[
      {id:1,img_url:'http://127.0.0.1:3000/imghome/草莓.png',name:'游戏'},
      { id: 2, img_url: 'imghome/香蕉.png',name: '视频' },
      { id: 3, img_url: 'imghome/香蕉.png',name: '社区' },
      { id: 4, img_url: 'imghome/葡萄.png',name: '发布' },
      { id: 5, img_url: 'imghome/椰子.png',name: '消息' },
      { id: 6, img_url: 'imghome/西瓜.png',name: '商城'},
      { id: 7, img_url: 'imghome/草莓.png',name: '赛程' },
      { id: 8, img_url: 'imghome/草莓.png',name: '地址'},
      { id: 9, img_url: 'imghome/草莓.png',name: '联系' }
    ],
    id:0,
    msg:[]
  },
  getImageList:function(){
    wx.request({
      url: 'http://127.0.0.1:3000/img',
      success:(res)=>{
         this.setData({
          msg:res.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */

  
  onLoad: function (options) {

    this.getImageList()



      //获取lianxi03传过来的id参数
      console.log(options);
      var id=options.id;
      //this.data.id=id;//赋值给data中的id参数值  页面才能取到
      //但是 实际的this.data.id  ！== data中的id
      //也就是获取的参数值不能将数值显示模板
      //低版本中 this.data.id=id 是可以的   2017前
      //新版本中 setData（{data属性名：数值}）
    this.setData({
      id:id//同时更新了data  和onload中的id
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

  }
})