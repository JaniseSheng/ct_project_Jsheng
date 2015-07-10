/* global BMap, map */

var baiduMap = (function ($, window) {
    "use strict";
    
    function initialize() {
        //显示百度地图
        window.map = new BMap.Map("map");
        map.centerAndZoom("上海", 10);
        map.enableScrollWheelZoom(true);
    }
    function showInfoWindow(points) {
        var opts = {
            // width:60,
            // height:30,
            // title:"store.storePoints[i].title",
            enableMessage: false
        };
        //百度地图信息框
        var infoWindow = new BMap.InfoWindow("", opts);
        for (var i = 0; i < points.length; i++) {
            var lat = points[i].STORE_LAT;
            var lng = points[i].STORE_LNG;
            var name = points[i].STORE_NAME;
            var address = "地址:" + points[i].STORE_NAME;
            var pt = new BMap.Point(lng, lat);
            var marker = new BMap.Marker(pt);
            window.map.addOverlay(marker);
            //点击弹出信息框
            marker.addEventListener('click', function (e) {
                infoWindow.setTitle("<strong>" + name + "</strong>");
                infoWindow.setContent("<div style='font-size:14px;padding:1px'>" + address + "</div>");
                window.map.openInfoWindow(infoWindow, e.target.point);
                console.log(e);
            });
            // console.log(marker);
        }
    }
    
    
    
    //定位
    function positioning(callback) {
        var geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition(function (r) {
            if (this.getStatus() == BMAP_STATUS_SUCCESS) {
                callback(r);
                alert('您的位置：' + r.point.lng + ',' + r.point.lat);
            }
            else {
                alert('failed' + this.getStatus());
            }
        }, { enableHighAccuracy: true });
    }
    //通过经纬度获取地址信息
    function getLocation(lat, lng, callback) {
        var gc = new BMap.Geocoder();
        var pt = new BMap.Point(lng, lat);
        gc.getLocation(pt, function (rs) {
            callback(rs);
        });
    }

    return {
        initialize: initialize,
        showInfoWindow: showInfoWindow,
        positioning: positioning,
        getLocation: getLocation
    };
})($, window);