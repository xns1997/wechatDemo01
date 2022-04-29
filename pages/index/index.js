// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
      actDemo:{
        title:"test",
        contents:[
          {type:"image",url:"https://www.belica.hr/wp/wp-content/uploads/2012/06/women-cartoon.jpg"},
        //   {type:"text",content:"Hello world!!!"}
        ],
        activities:[
          {title:"抽取男神盲盒",url:"../../pages/logs",buttonColor:"#0666EC"}
        ]
      }
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
    onShow: function () {
        if (typeof this.getTabBar === 'function' && this.getTabBar()) {
            this.getTabBar().setData({
                selected: 0
            });
        }
        const res = wx.getSystemInfoSync()
        const { screenHeight, safeArea: { bottom } } = res
        console.log('resHeight',res);
        if (screenHeight && bottom){
        let safeBottom = screenHeight - bottom
        this.setData({
            paddingBottom: (48 + safeBottom)
        })}
        const images = [];
        for(let i = 0;i < 1; i++){
            images.push("https://pic.vjshi.com/2018-09-19/72f90f812dfbaaf86de38d6789961b91/online/puzzle.jpg?x-oss-process=style/resize_w_720")
        }
        console.log(images)
        this.setData({
            images:images
        })
    },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
