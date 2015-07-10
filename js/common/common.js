//服务器请求地址

//var baseQuestUrl = "http://10.145.205.75:8082/entityChannel-web";
 var baseQuestUrl = "http://222.68.185.232:9080/EntityChannelInteface";
//var baseQuestUrl = "http://happyfish2010.oicp.net:8082/entityChannel-web";
//var baseQuestUrl = "http://10.145.205.75:8082/entityChannel-web";


//loading动画
function loading(event) {
    if (event === "add") {
        if ($('#loader').length === 0) {
            $(".container").append("<div id='loader' style='position:fixed'><p>加载中...</p><span></span><span></span><span></span><span></span></div>");
            return console.log("载入数据中...");
        }
    } else
        if (event === "remove") {
            $("#loader").remove();
        }
    return console.log('载入数据完成.');
}

/**
 * queryData Module 异步请求常规数据
 * @param  {jquery} $             jquery
 * @param  {Object} window){	var queryData     返回对象
 * @return {underfind}               返回对象
 */
var queryData = (function ($, window) {
    //questObj请求的参数;parame请求第接口;doSomething传入的方法
    var queryData = {};
    queryData.state = 0;
    //异步请求数据
    queryData.ajax = function (questObj, parame, callback) {
        loading("add");
        queryData.state++;
        $.ajax({
            url: baseQuestUrl + parame,
            // timeout: 20000,
            type: 'post',
            dataType: 'json',
            data: questObj,
            cache: false,
            success: function (data) {
                //				console.log(data);
                queryData.state--;
                if (queryData.state === 0) {
                    loading("remove");
                }
                if (data.RESPCODE === "0") {
                    callback(data.RESULT);
                } else {
                    alert(data.RESPMSG);
                    return;
                }

            },
            complate: function (data) {
                //                loading('remove');
                console.log(data);
            },
            error: function (e) {
                //                loading('remove');
                console.log(e);
            }
        });
        if (queryData.state === 0) {
            loading("remove");
        }
    };

    return queryData;
})($, window);


//imgInterface Module 图片上传模块
var uploadImage = (function ($, window) {
    /**
     * 上传图片
     * @param {type} formId
     * @param {type} callback
     * @returns {undefined}
     */
    function uploadImage(formId, callback) {
        //图片上传路径
        var imgurl = '/upload/upload_image';
        var form = "form#" + formId;
        var formData = new FormData($(form)[0]);
        $.ajax({
            url: baseQuestUrl + imgurl,
            type: 'post',
            data: formData,
            cache: false,
            contentType: false,
            processData: false,
            success: function (rs) {
                callback(rs);
            },
            error: function (e) {
                callback(e);
            }
        });
    }
    return uploadImage;
})($, window);

function getTemplate(tmpUrl) {
    var template = "";
    $.ajax({
        type: 'get',
        url: tmpUrl,
        async: false,
        dateType: "text",
        success: function (e) {
            template = e;
        }
    });
    return template;
}


//利用经纬度进行两地的距离计算

//进行经纬度转换为距离的计算
function Rad(d) {
    return d * Math.PI / 180.0;//经纬度转换成三角函数中度分表形式。
}
//计算距离，参数分别为第一点的纬度，经度；第二点的纬度，经度
function GetDistance(lat1, lng1, lat2, lng2) {

    var radLat1 = Rad(lat1);
    var radLat2 = Rad(lat2);
    var a = radLat1 - radLat2;
    var b = Rad(lng1) - Rad(lng2);
    var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) +
        Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
    s = s * 6378.137;// EARTH_RADIUS;
    s = Math.round(s * 10000) / 10000; //输出为公里
    //s=s.toFixed(4);
    return s;
}



/**
 * 日期工具
 * @type Function|dateTools_L4.dateToolsAnonym$0
 */
var dateTools = (function () {
    var now = new Date();                    //当前日期     
    var nowDayOfWeek = now.getDay();         //今天本周的第几天     
    var nowDay = now.getDate();              //当前日     
    var nowMonth = now.getMonth();           //当前月     
    var nowYear = now.getYear();             //当前年     
    nowYear += (nowYear < 2000) ? 1900 : 0;  //     

    function getNowDate() {
        var nowDay = now.getDate();              //当前日     
        var nowMonth = now.getMonth() + 1;           //当前月     
        var nowYear = now.getYear();
        nowYear += (nowYear < 2000) ? 1900 : 0;
        if (nowMonth < 10) {
            nowMonth = "0" + nowMonth;
        }
        if (nowDay < 10) {
            nowDay = "0" + nowDay;
        }
        return (String(nowYear) + String(nowMonth) + String(nowDay));
    }

    //字符串转成 yyyy-MM-dd
    function strToDateFormat(str) {
        var myyear = str.slice(0, 4);
        var mymonth = str.slice(4, 6);
        var myweekday = str.slice(6, 8);
        return (myyear + "-" + mymonth + "-" + myweekday);
    }
    //格式化日期：yyyyMMdd     
    function formatDate(date) {
        var myyear = date.getFullYear();
        var mymonth = date.getMonth() + 1;
        var myweekday = date.getDate();

        if (mymonth < 10) {
            mymonth = "0" + mymonth;
        }
        if (myweekday < 10) {
            myweekday = "0" + myweekday;
        }
        //        return (myyear + "-" + mymonth + "-" + myweekday);
        return (myyear + mymonth + myweekday);
    }

    //获得某月的天数     
    function getMonthDays(myMonth) {
        var monthStartDate = new Date(nowYear, myMonth, 1);
        var monthEndDate = new Date(nowYear, myMonth + 1, 1);
        var days = (monthEndDate - monthStartDate) / (1000 * 60 * 60 * 24);
        return days;
    }

    //获得本季度的开始月份     
    function getQuarterStartMonth() {
        var quarterStartMonth = 0;
        if (nowMonth < 3) {
            quarterStartMonth = 0;
        }
        if (2 < nowMonth && nowMonth < 6) {
            quarterStartMonth = 3;
        }
        if (5 < nowMonth && nowMonth < 9) {
            quarterStartMonth = 6;
        }
        if (nowMonth > 8) {
            quarterStartMonth = 9;
        }
        return quarterStartMonth;
    }

    //获得本周的开始日期     
    function getWeekStartDate() {
        var weekStartDate = new Date(nowYear, nowMonth, nowDay - nowDayOfWeek);
        return formatDate(weekStartDate);
    }

    //获得本周的结束日期     
    function getWeekEndDate() {
        var weekEndDate = new Date(nowYear, nowMonth, nowDay + (6 - nowDayOfWeek));
        return formatDate(weekEndDate);
    }

    //获得本月的开始日期     
    function getMonthStartDate(dateStr) {
        if (arguments.length > 0) {
            var _day = dateStr;//2015-01-01
            var _year = _day.slice(0, 4);
            var _month = _day.slice(5, 7);
            //            var _now = new Date(_year, _month, "00").getDate();
            return _year + _month + "01";
        } else {
            var monthStartDate = new Date(nowYear, nowMonth, 1);
            return formatDate(monthStartDate);
        }
    }

    //获得本月的结束日期     
    function getMonthEndDate(dateStr) {
        if (arguments.length > 0) {
            var _day = dateStr;//2015-01-01
            var _year = _day.slice(0, 4);
            var _month = _day.slice(5, 7);
            var _now = new Date(_year, _month, "00").getDate();
            return _year + _month + _now;
        } else {
            var monthEndDate = new Date(nowYear, nowMonth, getMonthDays(nowMonth));
            return formatDate(monthEndDate);
        }

    }

    //获得本季度的开始日期     
    function getQuarterStartDate() {

        var quarterStartDate = new Date(nowYear, getQuarterStartMonth(), 1);
        return formatDate(quarterStartDate);
    }

    //或的本季度的结束日期     
    function getQuarterEndDate() {
        var quarterEndMonth = getQuarterStartMonth() + 2;
        var quarterStartDate = new Date(nowYear, quarterEndMonth, getMonthDays(quarterEndMonth));
        return formatDate(quarterStartDate);
    }

    return {
        formatDate: formatDate,
        getMonthDays: getMonthDays,
        getQuarterStartMonth: getQuarterStartMonth,
        getWeekStartDate: getWeekStartDate,
        getWeekEndDate: getWeekEndDate,
        getMonthStartDate: getMonthStartDate,
        getMonthEndDate: getMonthEndDate,
        getQuarterStartDate: getQuarterStartDate,
        getQuarterEndDate: getQuarterEndDate,
        strToDateFormat: strToDateFormat,
        getNowDate: getNowDate
    };
})();
/**
 * 获取模版页面
 * @param  {[type]} tmpUrl [description]
 * @return {[type]}        [description]
 */
function getTemplate(tmpUrl) {
    var template = "";
    $.ajax({
        type: 'get',
        url: tmpUrl,
        async: false,
        dateType: "text",
        success: function (e) {
            template = e;
        }
    });
    return template;
}

//通过关键字查询对象，返回数组
var gettraverse = (function () {
    var resultArr = [];

    function gettraverse(key, arr) {
        findKey(key, arr);
        return resultArr;
    }
    function findKey(key, arr) {
        // 数组形式
        if (arr instanceof Array) {
            // 查找每个项目
            for (var i = 0; i < arr.length; i++) {
                // 拿到一个项目
                var item = arr[i];
                var rs = findKeyInObj(key, item);
                // if (rs ==  undefined) {
                //     return rs;
                // }
            }
            // 对象形式
        } else if (arr instanceof Object) {
            var rs = findKeyInObj(key, arr);
            // if (rs == undefined) {
            //     return rs;
            // }
        }
    }

    /**
     在对象中找键
     */
    function findKeyInObj(key, obj) {
        var temp = obj[key];
        resultArr.push(obj);
        // 该项目中找到了目标键
        // if (temp == undefined) {
        //     // 返回目标键所在对象
        //     return obj;
        // }
        // 该项目中找到了目标键
        // 遍历该项目中每一个属性
        for (var k in obj) {
            // 递归调用里层
            var rs = findKey(key, obj[k]);
            //            resultArr.push(rs);
            // 里层找到了
            // if (rs == undefined) {
            //     return rs;
            // }
        }
    }

    return gettraverse;
})();

