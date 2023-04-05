// components/normalform/normalform.js
Component({
  options: {
    styleIsolation: 'isolated'
  },
  properties: {
    formInfo: {
      type: Array,
      value: [],
      observer(newVal) {
        let curdata = {};
        let n = newVal.length;
        let formInfo = newVal;
        for (let i = 0; i < n; i++) {
          if (newVal[i].formtype == 'checkbox') {
            let box = [];
            for (let j = 0; j < newVal[i].box.length; j++) {
              box.push(newVal[i].box[j].value);
              formInfo[i].box[j]["checked"] = false;
            }
            curdata[newVal[i].val] = box;
          } else if (newVal[i].formtype == 'radio') {
            for (let j = 0; j < newVal[i].radioInfo.length; j++) {
              if (newVal[i].radioInfo[j].checked == true) curdata[newVal[i].val] = newVal[i].radioInfo[j].value;
              formInfo[i].radioInfo[j]["checked"] = false;
            }
          } else if (newVal[i].formtype == 'picker' && !newVal[i].mode) {
            formInfo[i].array = [];
            for(let j = 0; j < newVal[i].arr.length; j++){
              if(newVal[i].arr[j].val){
                formInfo[i].array[j] = newVal[i].arr[j].name;
              } else {
                formInfo[i].array[j] = newVal[i].arr[j];
              }
            }
            curdata[newVal[i].val] = formInfo[i].arr[0].val?formInfo[i].arr[0].val:0;
            formInfo[i].curindex = 0;
          } else {
            curdata[newVal[i].val] = newVal[i].curval ? newVal[i].curval : "";
          }
        }
        this.setData({
          curdata,
          formInfo
        })
      }
    }, // 在使用时传入数据
    curdata: {
      type: Object,
      value: {}
    },
    color: {
      type: String,
      value: "#"
    }
  },

  methods: {
    checkchange(e) {
      this.updatedata(e.target.dataset.id, e.detail.value)
    },
    singlepicker(e) {
      let curdata = this.data.formInfo
      let n = curdata.length
      for (let i = 0; i < n; i++) {
        if (curdata[i].val == e.target.dataset.id) {
          curdata[i].curindex = e.detail.value
          this.updatedata(e.target.dataset.id, curdata[i].arr[e.detail.value].val?curdata[i].arr[e.detail.value].val:e.detail.value)
        }
      }
      this.setData({
        formInfo: curdata
      })
    },
    pickerchange(e) {
      this.updatedata(e.target.dataset.id, e.detail.value)
      let curdata = this.data.formInfo
      let n = curdata.length
      for (let i = 0; i < n; i++) {
        if (curdata[i].val == e.target.dataset.id) {
          curdata[i].curval = e.detail.value
        }
      }
      this.setData({
        formInfo: curdata
      })
    },

    inputchange(e) {
      console.log(e)
    },
    // 寻找curdata中key为curkey，将其的数据更新为val
    updatedata(curkey, val) {
      let curdata = this.data.curdata
      for (let key in curdata) {
        if (key == curkey) {
          curdata[curkey] = val
        }
      }
      this.setData({
        curdata
      })
      console.log("数据已更新:", this.data.curdata)
    },
    formSubmit() {
      this.triggerEvent('formSubmit', this.data.curdata)
    }
  },
})