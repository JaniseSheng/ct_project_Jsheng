/* global BMap */
var baiduMap = (function() {
  widgetMap = {
    initialize: function(options) {
      var obj = this;

      obj._initBDMapCallBack();
      obj._loadBDMap();

    },


    showInfoWindow: function(list) {
      var obj = this;
      obj.opts = {
        // width:60,
        // height:30,
        // title:"store.storePoints[i].title",
        enableMessage: false
      };
      //百度地图信息框
      obj.infoWindow = new BMap.InfoWindow("", obj.opts);
      for (var i = 0; i < list.length; i++) {
        var lat = list[i].STORE_LAT;
        var lng = list[i].STORE_LNG;
        var name = list[i].STORE_NAME;
        var address = "地址:" + list[i].STORE_NAME;
        var pt = new BMap.Point(lng, lat);
        obj.marker = new BMap.Marker(pt);
        obj.map.addOverlay(obj.marker);
        //点击弹出信息框
        obj.marker.addEventListener('click', function(e) {
          obj.infoWindow.setTitle("<strong>" + name + "</strong>");
          obj.infoWindow.setContent("<div style='font-size:14px;padding:1px'>" + address + "</div>");
          obj.map.openInfoWindow(obj.infoWindow, e.target.point);
          console.log(e);
        });
        // console.log(marker);
      }
    },

    /**
     * @description 异步载入百度地图
     */
    _loadBDMap: function() {
      var obj = this,
        script = document.createElement("script");

      script.type = "text/javascript";
      script.src = "http://api.map.baidu.com/api?v=2.0&ak=orq6KHIYNvxvv5wZrs6jBb9O&callback=MapCallback";
      document.body.appendChild(script);
    },

    /**
     * @description 设置地图回调函数
     */
    _initBDMapCallBack: function() {
      var obj = this;

      window.MapCallback = function() {
        // 借鉴单例模式
        // obj.map = new BMap.Map("allmap");
        // obj.point = new BMap.Point(116.404, 39.915);

        // obj.map.centerAndZoom(obj.point, 15);
        // obj.map.enableScrollWheelZoom();

        //显示百度地图
        obj.map = new BMap.Map("map");
        obj.map.centerAndZoom("上海", 10);
        obj.map.enableScrollWheelZoom(true);
      };
    }
  };
  return widgetMap;
})();