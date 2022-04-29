Component({
    data: {
      selected: 0,
      color: "#7A7E83",
      selectedColor: "#3cc51f",
      "list": [
        {
            "pagePath":"/pages/index/index",
            "text": "主页",
            "iconPath": "../assets/icons/heart-pulse-solid.png",
            "selectedIconPath": "../assets/icons/heart-pulse-solid.png"
        },
        {
          "pagePath":"/pages/profile/profile",
          "text": "我的",
          "iconPath": "../assets/icons/envelope-solid.png",
          "selectedIconPath": "../assets/icons/envelope-solid.png"
        }
    ]
    },
    attached() {
    },
    methods: {
      switchTab(e) {
        const data = e.currentTarget.dataset
        const url = data.path
        wx.switchTab({url})
        this.setData({
          selected: data.index
        })
      }
    }
  })