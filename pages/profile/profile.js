Page({
    onShow: function () {
        if (typeof this.getTabBar === 'function' && this.getTabBar()) {
                this.getTabBar().setData({
                    selected: 1
                })
            }
        },
    onLoad:function(){
        let systemInfo = null;
        wx.getSystemInfo({
            success (res) {
              systemInfo = res
            }
        })
        let sysIter = [];
        for(let key in systemInfo){
            sysIter.push({key:key,info:systemInfo[key]});
        }
        this.setData({sys:sysIter});
    },
    onShow:function(){
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
    },
    data:{

    }

})