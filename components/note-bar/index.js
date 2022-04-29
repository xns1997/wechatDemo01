Component({
    data: {
    },
    properties:{
      srcData:{
          type:Array,
          value:[
            [
              {style:'staticStyle',data:'已有'},
              {style:'dynStyle',data:"1180"},
              {style:'staticStyle',data:'张纸条'}
            ],
            [
              {style:'staticStyle',data:'男生'},
              {style:'dynStyle',data:"649"},
              {style:'staticStyle',data:'张'}
            ],
            [
              {style:'staticStyle',data:'女生'},
              {style:'dynStyle',data:"531"},
              {style:'staticStyle',data:'张'}
            ]
          ]
    }},
    onLoad:function(){
        console.log(this.properties.srcData)
    },
    methods: {
      // 这里是一个自定义方法
    
    }
  })
  