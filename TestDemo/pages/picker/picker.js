var source = require('../../data/source');
Page({
  data:{
    flag:false,
    show:true,
    provinceName: [],
    provinceCode: [],
    provinceIndex: '',

    cityName: [],
    cityCode: [],
    cityIndex: '',

    countyName: [],
    countyCode: [],
    countyIndex: '',

    pro: 0,
    cit: 0,
    cou: 0,
  },

  onLoad: function(){
    this.setSource();

  },

  setSource: function(pro, cit, cou){
    var pro = pro || 0;
    var cit = cit || 0;
    var cou = cou || 0;
    var province = source['100000'];
    var provinceName = [];
    var provinceCode = [];

    for(var item in province){
      provinceCode.push(item);
      provinceName.push(province[item]);
    }

    this.setData({
      provinceName: provinceName,
      provinceCode: provinceCode,
    });

    var city = source[provinceCode[pro]];
    var cityName = [];
    var cityCode = [];

    for(var item in city){
      cityCode.push(item);
      cityName.push(city[item]);
    }

    this.setData({
      cityName: cityName,
      cityCode: cityCode,
    });

    var county = source[cityCode[cit]]
    var countyName = [];
    var countyCode = [];

    for(var item in county){
      countyCode.push(item);
      countyName.push(county[item]);
    }

    this.setData({
      countyName: countyName,
      countyCode: countyCode,
    });
  },

  showPicker: function(){
    this.setData({
      show: false,
    });
  },

  cancel: function () {
    this.setData({
      show: true,
    });
  },

  pickerChange: function(e){
    var pro = e.detail.value[0];
    var cit = e.detail.value[1];
    var cou = e.detail.value[2];
    this.setSource(pro, cit, cou);
    this.setData({
      pro: pro,
      cit: cit,
      cou: cou,
    });
  },

  sure: function(){
    this.setData({
      provinceIndex: this.data.pro,
      cityIndex: this.data.cit,
      countyIndex: this.data.cou,
      flag: true,
    });
    this.cancel();
  },

  save: function (e) {
    console.log(e);
  },
})