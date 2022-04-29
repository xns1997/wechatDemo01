Component({
    data: {
      someData: {}
    },
    properties:{
      src:{type:String,value:""}
    },
    pageLifetimes: {
        // 组件所在页面的生命周期函数
        show: function () { console.log(this.properties.src)},
        hide: function () { },
        resize: function () { },
      },
    methods: {
      // 这里是一个自定义方法
      onLoad:function(){
        console.log(this.properties.src)
    },
    }
  })
  