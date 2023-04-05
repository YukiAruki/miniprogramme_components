Page({
  /**
   * 页面的初始数据
   */
  data: {
    formInfo: [{
        name: "单选框",
        val: "radio",
        formtype: "radio",
        radioInfo: [{
            value: "1",
            name: "选项1",
            checked: true
          },
          {
            value: "2",
            name: "选项2",
          },
        ]
      },
      {
        name: "多选框测试",
        val: "checktest",
        name: "多选框测试：",
        formtype: "checkbox",
        box: [{
            name: "选项1",
            value: 1,
          },
          {
            name: "选项2",
            value: 2,
          },
          {
            name: "选项3",
            value: 3,
          }
        ]
      },
      {
        val: "input1",
        name: "默认文本框",
        formtype: "input",
        curval: "",
        place: "输入文本不能超过5个字符",
        maxlen: 5,
      },
      {
        val: "input2",
        name: "密码文本框",
        formtype: "input",
        curval: "",
        place: "请输入密码",
        password:true
      },
      {
        val: "input3",
        name: "禁用文本框",
        formtype: "input",
        curval: "此处内容禁止修改",
        diabled:true
      },
      {
        name: "单列滚动",
        val: "picker1",
        formtype: "picker",
        curval: "元素1",
        // arr: [
        //   {
        //     name:"元素1",
        //     val: "n1"
        //   },
        //   {
        //     name:"元素2",
        //     val: "n2"
        //   },
        //   {
        //     name:"元素3",
        //     val: "n3"
        //   },
        //   {
        //     name:"元素4",
        //     val: "n4"
        //   }
        // ],
        arr: [
          "元素1", "元素2", "元素3", "元素4"
        ]
      },
      {
        name: "时间滚动选择",
        val: "pickertime",
        mode: "time",
        formtype: "picker",
        curval: "8:00",
        start: "8:00",
        end: "22:00"
      },
      {
        name: "日期滚动选择",
        val: "pickerdate",
        mode: "date",
        formtype: "picker",
        curval: "2000-1-1",
        start: "2023-1-1",
        end: "2023-4-1"
      },
      {
        val: "pickeregion",
        mode: "region",
        name: "省份测试",
        formtype: "picker",
        curval: ["上海市", "上海市", "松江区"],
      }
    ]
  },
  formSubmit(e) {
    console.log("当前数据：")
    console.log(e.detail)
  }
})