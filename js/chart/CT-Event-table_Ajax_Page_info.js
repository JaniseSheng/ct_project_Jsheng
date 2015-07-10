
//实时受理报表请求
var Ajax_Acceptance = {
    STOREID: ""
};
//门店销量统计
var Ajax_Store_Sales = {
    STOREID: "",
    BUSTYPE: "",
    DATETYPE: "",
    STARTDATE: "",
    ENDDATE: ""
};

//门店销量指针统计
var Ajax_Store_Sales_Count = {
	STOREID:"",
	BUSTYPE:"移动",
    TEAMID:"tangjiaqi"
}

//终端库存统计
var Ajax_TerminalReport = {
    STOREID: "",
    DATETYPE: "",
    STARTDATE: "",
    ENDDATE: ""
}
//零销量预警统计
var Ajax_ZeroReport = {
    STOREID: ""
}
//排队机客流监控
var Ajax_Machine_Table = {
    DATE: ""
}


//ajax url地址列表
var Ajax_Url_Link = {
    login_url: "/service/1/auth/login",
    //报表条件查询
    table_Url: "/service/1/report_query/condition_report",
    //实时受理报表
    Acceptance_Url: "/service/1/acceptance/query",
    //门店销量报表查询
    Store_sales_Url: "/service/1/store_sales_query/sales_statistics",
    //门店销量指标统计
    Store_sales_count_Url: "/service/1/store_sales_count/query",
    //终端库存报表查询
    TerminalReport_Url: "/service/1/TerminalReport/query",
    //零销量报表查询
    ZeroReport_Url: "/service/1/ZeroReport/query",
    //排队机客流量监控
    Top10_Url: "/service/1/top10/queryTop"
};

//ajax 回调函数
var Ajax_CallBack = {
    //获取用户信息并切保存至本地
    Get_Uesr_Info_To_Load: function (e) {
        Load_User_Info = e;
        console.log(Load_User_Info);
    },
    //设置小翼看表 的首页内容
    Get_Uesr_Condition: function (e) {
        Load_Uesr_Condition = e;
        console.log(Load_Uesr_Condition);
        Set_Page_Info.set_page1_info();
    },
    //实时受理列表
    Get_Page2_1_content: function (e) {

        Page2_1_Content_Info = e;
        console.log(Page2_1_Content_Info);

        Set_Page_Info.set_page2_1_info();
    },
    //门店销量列表
    Get_Page2_2_content: function (e) {
        Page2_2_Content_Info = e;
        console.log(Page2_2_Content_Info);

        Set_Page_Info.set_page2_2info2();
    },
    //门店销量指针统计
    Get_Page2_3_content: function (e) {
        Page2_3_Content_Info = e;
        console.log("Page2_3_Content_Info="+Page2_3_Content_Info);
        Set_Page_Info.set_page2_3info2();
    },
    //终端库存统计
    Get_Page2_4_content: function (e) {
        Page2_4_Content_Info = e;
        console.log(Page2_4_Content_Info);
        Set_Page_Info.set_page2_4info_display();
    },
    //终端库存统计
    Get_Page2_5_content: function (e) {
        Page2_5_Content_Info = e;
        console.log(Page2_5_Content_Info);
        Set_Page_Info.set_page2_5info_display();
    },
    //排队机客流量
    Get_Page2_6_content: function (e) {
        Page2_6_Content_Info = e;
        console.log(Page2_6_Content_Info);
        Set_Page_Info.set_page2_6info_display();
    }
};

//本地保存信息---------------------

//本地存储 Ajax获取用户信息
var Load_User_Info = {
};
//本地存储 Ajax获取用户渠道类型,所属区局,所属公司,代理商,门店
var Load_Uesr_Condition = {
};

var Load_Store_ID = {
    STORE_ID: "",
    STORE_NAME: ""
}


var Load_ALLStore_NAME_ID_TEMP = {
    STORE_ID: [],
    STORE_NAME: []
}

//实时受理统计
var Page2_1_Content_Info = {
}

//门店销量统计
var Page2_2_Content_Info = {
}

//门店销量指标统计
var Page2_3_Content_Info = {
}

//终端库存统计
var Page2_4_Content_Info = {
}

//零销量预警统计
var Page2_5_Content_Info = {
}

//排队机客流监控
var Page2_6_Content_Info = {
}

//设置页面信息--定义临时数组-------------------
var JQ_CHANNELLIST;
//所属区局类型 定义数组
var JQ_AREALIST;
//所属分局类型 定义数组
var JQ_SUBAREALIST;
//代理商 定义数组
var JQ_AGENTLIST;
//门店 定义数组
var JQ_STORELIST;
var JQ_STORELIST_temp = [];

//渠道类型索引
var ARRAY_INDEX = 0;
//定义区局选中的id
var Area_select_ID = 0;
//定义分局选中的id
var SubArea_select_ID = 0;
//定义代理商选中的id
var Agen_select_ID = 0;
//门店 ID
var STORE_ID = 0;

//设置图片数据的AJax数据-------------------

//时间对象数组
var JQ_pageAll_DATE;

//移动对象数组
var JQ_pageAll_Mobile = {
    name: "移动",
    type: "line",
    data: []
}
//宽带对象数组
var JQ_pageAll_Broadband = {
    name: "宽带",
    type: "line",
    data: []
}
//终端对象数组
var JQ_pageAll_Terminal = {
    name: "终端",
    type: "line",
    data: []
}

var filler = {
    show: false,
    realtime: true,
    start: 0,
    end: 100,
    height: 15,
    fillerColor: 'rgba(52,152,219,1)',
    handleColor: 'rgba(52,152,219,1)'
}



var Set_Page_Info = {
    set_page1_info: function () {
        myTable.setPage_myTable_1();
        JQ_CHANNELLIST = new Array();
        JQ_AREALIST = new Array();
        JQ_SUBAREALIST = new Array();
        JQ_AGENTLIST = new Array();
        JQ_STORELIST = new Array();
        //myTable.setPage_myTable_1();
        //渠道类型 定义数组
        for (var i = 0; i < Load_Uesr_Condition.CHANNELLIST.length; i++) {
            JQ_CHANNELLIST.push(Load_Uesr_Condition.CHANNELLIST[i]);
            JQ_AREALIST.push(Load_Uesr_Condition.CHANNELLIST[i].AREALIST);
            JQ_SUBAREALIST.push(Load_Uesr_Condition.CHANNELLIST[i].SUBAREALIST);
            JQ_AGENTLIST.push(Load_Uesr_Condition.CHANNELLIST[i].AGENTLIST);
            JQ_STORELIST.push(Load_Uesr_Condition.CHANNELLIST[i].STORELIST);
        }
        console.log(JQ_CHANNELLIST);
        console.log(JQ_AREALIST);
        console.log(JQ_SUBAREALIST);
        console.log(JQ_AGENTLIST);
        console.log(JQ_STORELIST);
        //设置 渠道类型的下拉列表
        SetFirstGage.Set_Channel();
        $("#list li:eq(0) select").change(function () {
            console.log("------------------------------------------------------------------------------------------------")
            ARRAY_INDEX = getinfo.page_1_ContentID_select(0);

            console.log(ARRAY_INDEX);
            SetFirstGage.Set_Area();
            SetFirstGage.Set_SubArea_1();
            SetFirstGage.Set_SubArea_2();
            SetFirstGage.Set_Agen();
            SetFirstGage.Set_Store_1();
            SetFirstGage.Set_Store_2();
            SetFirstGage.Set_Store_3();
            SetFirstGage.Set_Store_4();
        });

        $("#list li:eq(1) select").change(function () {
            SetFirstGage.Set_SubArea_1();
            SetFirstGage.Set_SubArea_2();
            SetFirstGage.Set_Store_1();
            SetFirstGage.Set_Store_2();
            SetFirstGage.Set_Store_3();
            SetFirstGage.Set_Store_4();
        });

        $("#list li:eq(2) select").change(function () {
            SetFirstGage.Set_Store_1();
            SetFirstGage.Set_Store_2();
            SetFirstGage.Set_Store_3();
            SetFirstGage.Set_Store_4();
        });

        $("#list li:eq(3) select").change(function () {
            SetFirstGage.Set_Store_1();
            SetFirstGage.Set_Store_2();
            SetFirstGage.Set_Store_3();
            SetFirstGage.Set_Store_4();
        });

        //点击渠道板块触发 区局板块事件

        //下一步点击事件
        $("#Page1_Next").click(function () {
            Load_ALLStore_NAME_ID_TEMP.STORE_NAME = [];
            Load_ALLStore_NAME_ID_TEMP.STORE_ID = [];
            if (getinfo.page_1_ContentID_select(4) == "All") {
                var index = $("#list li:eq(4) select option").slice(2).length;
                console.log(index);
                for (var i = 0; i < index; i++) {
                    Load_ALLStore_NAME_ID_TEMP.STORE_ID[i] = $("#list li:eq(4) select option").eq(2 + i).attr("value");
                    Load_Store_ID.STORE_ID = Load_ALLStore_NAME_ID_TEMP.STORE_ID.join(",");
                }
            } else {
                Load_Store_ID.STORE_ID = getinfo.page_1_ContentID_select(4);
                Load_Store_ID.STORE_NAME = getinfo.page_1_ContentText_select(4);
            }


            if (Load_Store_ID.STORE_ID.length > 0) {
                Set_Page_Info.set_page2_info();
                console.log("所选门店ID=" + Load_Store_ID.STORE_ID);
            } else {
                alert("请先选择门店再继续");
            }
        });
    },
    //第二页面的事件
    set_page2_info: function () {
        myTable.setPage_myTable_2();
        //进入实时受理统计板块(1)
        $("#list li:eq(0) a").click(function () {
            Ajax_Acceptance.STOREID = Load_Store_ID.STORE_ID;
            queryData.ajax(Ajax_Acceptance, Ajax_Url_Link.Acceptance_Url, Ajax_CallBack.Get_Page2_1_content);
        });

        //进入门店销量统计板块(2)
        $("#list li:eq(1) a").click(function () {
            myTable.setPage_myTable_2_2();
        });
        //进入门店销量指针统计板块(3)
        $("#list li:eq(2) a").click(function () {
            myTable.setPage_myTable_2_3();
        });
        //进入终端预警统计(4)
        $("#list li:eq(3) a").click(function () {
            myTable.setPage_myTable_2_4();
        });

        //进入零销量预警板块(5)
        $("#list li:eq(4) a").click(function () {
            myTable.setPage_myTable_2_5();
        });

        //进入排队机客流量监控(6)
        $("#list li:eq(5) a").click(function () {
            myTable.setPage_myTable_2_6();
        });
    },
    //第2——1 页面事件
    set_page2_1_info: function () {
        myTable.setPage_myTable_2_1();
        JQ_pageAll_DATE = [];
        JQ_pageAll_Mobile.data = [];
        JQ_pageAll_Broadband.data = [];
        JQ_pageAll_Terminal.data = [];
        for (var i = 0; i < Page2_1_Content_Info[0].ITEMLIST.length; i++) {
            JQ_pageAll_Mobile.data[i] = Page2_1_Content_Info[0].ITEMLIST[i].SALENUMBER;
            JQ_pageAll_DATE[i] = Page2_1_Content_Info[0].ITEMLIST[i].DATE;
        }
        for (var i = 0; i < Page2_1_Content_Info[1].ITEMLIST.length; i++) {
            JQ_pageAll_Broadband.data[i] = Page2_1_Content_Info[1].ITEMLIST[i].SALENUMBER;
        }
        for (var i = 0; i < Page2_1_Content_Info[2].ITEMLIST.length; i++) {
            JQ_pageAll_Terminal.data[i] = Page2_1_Content_Info[1].ITEMLIST[i].SALENUMBER;
        }
        //画图标
        var chartcontent = [JQ_pageAll_Mobile, JQ_pageAll_Broadband, JQ_pageAll_Terminal];
        var chartdate = JQ_pageAll_DATE;
        if (JQ_pageAll_DATE.length > 10) {
            filler.show = true;
            filler.end = (10 / (JQ_pageAll_DATE.length)) * 100;
        }
        var Charttipname = [JQ_pageAll_Mobile.name, JQ_pageAll_Broadband.name, JQ_pageAll_Terminal.name];
        other_Fac.Echart(chartcontent, chartdate, Charttipname);
        //设置表格数据
        other_Fac.set_table(".Detailed_box ul ul", JQ_pageAll_DATE, JQ_pageAll_Mobile.data, JQ_pageAll_Broadband.data, JQ_pageAll_Terminal.data, ":00");
    },
    set_page2_2info: function () {
        other_Fac.Page_2_2_settime_Ajax(0, "WB_A", "0");

        $("#table2_2_search").click(function () {
            var index_mun = getinfo.page_2_2_month_select();
            //var index_type = getinfo.page_2_2_Datatype_select();
            var index_type = 0;
            var Bus_type = getinfo.page_2_2_Bustype_select();
            $("#span_bustype").text(Bus_type + "受理数");
            JQ_pageAll_Mobile.name = Bus_type;
            console.log("业务类型"+JQ_pageAll_Mobile);
            other_Fac.Page_2_2_settime_Ajax(index_mun, Bus_type, index_type);
        });
    },
    /*	set_page2_2info_Ajax : function(){
     other_Fac.Page_2_2_settime_Ajax(_older_Data_time);
     },*/
    set_page2_2info2: function () {
        JQ_pageAll_DATE = [];
        JQ_pageAll_Mobile.data = [];

        var index_type = getinfo.page_2_2_Datatype_select();

        if (index_type == "按天") {
            for (var i = 0; i < Page2_2_Content_Info.length; i++) {
                JQ_pageAll_Mobile.data[i] = Page2_2_Content_Info[i].SALENUMBER;
                JQ_pageAll_DATE[i] = Page2_2_Content_Info[i].DATE;
            }
        }
        if (index_type == "按周") {
            var a = parseInt(Page2_2_Content_Info.length / 7);
            var b = parseInt(Page2_2_Content_Info.length % 7);
            //定义7天的总量
            var data_a_All = [];

            //定义余下来的总量
            var data_b_All = 0;

            //开始时间
            JQ_pageAll_DATE[0] = Page2_2_Content_Info[7].DATE;
            for (var i = 0; i < a; i++) {
                var temp_1 = 0;
                for (var j = i * 7; j < i * 7 + 7; j++) {
                    temp_1 += Number(Page2_2_Content_Info[j].SALENUMBER);
                }
                data_a_All[i] = temp_1;
                JQ_pageAll_DATE[i] = Page2_2_Content_Info[i * 7 + 6].DATE;
            }
            for (var k = a * 7; k < Page2_2_Content_Info.length; k++) {
                data_b_All += Number(Page2_2_Content_Info[k].SALENUMBER);
            }
            for (var m = 0; m < data_a_All.length; m++) {
                JQ_pageAll_Mobile.data[m] = data_a_All[m];
            }
            JQ_pageAll_Mobile.data.push(data_b_All);
            JQ_pageAll_DATE.push(Page2_2_Content_Info[Page2_2_Content_Info.length - 1].DATE)

        }
        if (index_type == "按月") {
            var str_length = Page2_2_Content_Info.length;

            //第一个月的天数,和第一个月的总量 第二,第三个月等
            var mon_mun = [];
            var mon_All1 = 0;
            var mon_All2 = 0;
            var mon_All3 = 0;

            //定义临时变量
            var temp_index = [];
            for (var i = 0; i < str_length; i++) {
                if (Page2_2_Content_Info[i].DATE.substr(Page2_2_Content_Info[i].DATE.length - 2, 2) == "01") {
                    temp_index.push(i);
                    JQ_pageAll_DATE.push(Page2_2_Content_Info[i].DATE.substr(0, 2) + "月");
                }
            }
            console.log(temp_index);
            //计算每一个月的天数
            for (var j = 0; j < temp_index.length; j++) {

                if (j < temp_index.length - 1) {
                    mon_mun[j] = temp_index[j + 1] - temp_index[j];
                } else {
                    mon_mun[j] = str_length - temp_index[j];
                }
            }
            console.log(mon_mun);

            for (var k1 = 0; k1 < temp_index[1]; k1++) {
                mon_All1 += Number(Page2_2_Content_Info[k1].SALENUMBER);
            }
            console.log(mon_All1);
            JQ_pageAll_Mobile.data.push(mon_All1);
            for (var k2 = temp_index[1]; k2 < temp_index[2]; k2++) {
                mon_All2 += Number(Page2_2_Content_Info[k2].SALENUMBER);
            }
            console.log(mon_All2);
            JQ_pageAll_Mobile.data.push(mon_All2);

            for (var k3 = temp_index[2]; k3 < str_length; k3++) {
                mon_All3 += Number(Page2_2_Content_Info[k3].SALENUMBER);
            }
            console.log(mon_All3);
            JQ_pageAll_Mobile.data.push(mon_All3);
        }
        //画图标
        var chartcontent = [JQ_pageAll_Mobile];
        var chartdate = JQ_pageAll_DATE;
        if (JQ_pageAll_DATE.length > 10) {
            filler.show = true;
            filler.end = (10 / (JQ_pageAll_DATE.length)) * 100;
        } else {
            filler.show = false;
            filler.end = 100;
        }
        var Charttipname = [JQ_pageAll_Mobile.name];
        other_Fac.Echart(chartcontent, chartdate, Charttipname);
        //设置表格数据
        other_Fac.set_table2_2(".Detailed_box ul ul", JQ_pageAll_DATE, JQ_pageAll_Mobile.data);
    },

    set_page2_3info: function () {
        $("#saleOPtion select").change(function (){
            $(".saleIndexList").html("");
            var saleType = $("#saleOPtion select option:selected").attr("name");
            other_Fac.Page_2_3_settime_Ajax(saleType);
        });
    },
    set_page2_3info2:function(){
        var storeName = [] ;
        var areaname = [];
        $.each(Page2_3_Content_Info, function (i){
            var rank= i+1;//排名
            var _thisstoreName = Page2_3_Content_Info[i].NAME;//店名
            storeName[i]= _thisstoreName.split(",");
            var daySaleMunber = Page2_3_Content_Info[i].DAY_SALENUMBER;//日销量
            var monSaleMunber = Page2_3_Content_Info[i].MONTH_SALENUMBER;//月销量
            var scaleIndex = Page2_3_Content_Info[i].INDICATOR;//销售指标
            var oldMonCompare = Page2_3_Content_Info[i].COMPARE;//环比上月
            areaname[i]=Page2_3_Content_Info[i].TEAMNAME;//获取区域名称
            $(".saleIndexList").append(" <li class='more-content'><a><select style='padding: 6px 12px;'></select><i>"+rank+"</i><span>日销售:<span>"+daySaleMunber+"</span></span><span>月销售:<span>"+monSaleMunber+"</span></span><span>销售指标:<span>"+scaleIndex+"</span></span><span>与上月同期环比:<span>"+oldMonCompare+"</span></span></a></li>")
            $(".saleIndexList .more-content a select").html("");
            console.log("storeName="+storeName);
            console.log("areaname="+areaname);
        });

        $.each(Page2_3_Content_Info,function(i){
            for(var j=0; j<storeName[i].length ; j++){
                if(j<=0){
                    $(".saleIndexList .more-content a select").eq(i).append("<option selected='true' disabled='true'>"+areaname[i]+"</option>");
                }
                $(".saleIndexList .more-content a select").eq(i).append("<option disabled='true'>"+storeName[i][j]+"</option>");
            }
        });
    },

    set_page2_4info: function () {
        other_Fac.Page_2_4_settime_Ajax(6);
        $("#tablesearch2_2").click(function () {
            //获取1周 和 15天的记录
            var _temp_inedex = getinfo.page_2_4_Date_select();
            if (_temp_inedex == 0) {
                other_Fac.Page_2_4_settime_Ajax(6);
            }
            if (_temp_inedex == 1) {
                other_Fac.Page_2_4_settime_Ajax(14);
            }
        });
    },
    set_page2_4info_display: function () {
        JQ_pageAll_DATE = [];
        JQ_pageAll_Mobile.data = [];

        for (var i = 0; i < Page2_4_Content_Info.length; i++) {
            JQ_pageAll_Mobile.data[i] = Page2_4_Content_Info[i].SALENUMBER;
            JQ_pageAll_DATE[i] = Page2_4_Content_Info[i].DATE;
        }
        JQ_pageAll_Mobile.name = "终端库存";
        //画图标
        var chartcontent = [JQ_pageAll_Mobile];
        var chartdate = JQ_pageAll_DATE;
        if (JQ_pageAll_DATE.length > 10) {
            filler.show = true;
            filler.end = (10 / (JQ_pageAll_DATE.length)) * 100;
        } else {
            filler.show = false;
            filler.end = 100;
        }
        var Charttipname = [JQ_pageAll_Mobile.name];
        other_Fac.Echart(chartcontent, chartdate, Charttipname);
        //设置表格数据
        other_Fac.set_table2_2(".Detailed_box ul ul", JQ_pageAll_DATE, JQ_pageAll_Mobile.data);
    },
    set_page2_5info: function () {
        other_Fac.Page_2_5_settime_Ajax();
    },
    set_page2_5info_display: function () {
        var STORE_NAME = [];
        var ZERO_DAYS = [];
        for (var i = 0; i < Page2_5_Content_Info.length; i++) {
            STORE_NAME[i] = Page2_5_Content_Info[i].STORE_NAME;
            ZERO_DAYS[i] = Page2_5_Content_Info[i].ZERO_DAYS;
        }
        other_Fac.set_table2_2(".Detailed_box ul ul", STORE_NAME, ZERO_DAYS);
    },
    set_page2_6info: function () {
        document.getElementById('Date_input').valueAsDate = new Date();
        $("#Storetop10").click(function () {
            console.log(getinfo.page_2_6_Date().length);
            var strs = getinfo.page_2_6_Date();
            var date_content = strs.replace(/-/g, "");
            Ajax_Machine_Table.DATE = date_content;
            other_Fac.Page_2_6_settime_Ajax();
        });
    },
    set_page2_6info_display: function () {
        $(".machine_flow_Detailed ul").html("");
        for (var i = 0; i < Page2_6_Content_Info.length; i++) {
            var rank_index = Page2_6_Content_Info[i].ORDER;
            var store_name = Page2_6_Content_Info[i].BUSINESS_NAME;
            var AVG_TIME = Math.ceil((Page2_6_Content_Info[i].AVG_TIME) / 60);
            var COMMON_TIME = Math.ceil((Page2_6_Content_Info[i].COMMON_TIME) / 60);
            var li_content = "<li><div><span>Ranking</span><span>" + rank_index + "</span></div><div><div><span>" + store_name + "</span></div><div><i class='icon-file_xybk2 icon_xybk_13'></i><span>平均等待时间:</span><span class='Avg_text'>" + AVG_TIME + "</span></div><div><i class='icon-file_xybk2 icon_xybk_14'></i><span>同比等待时间:</span><span class='Common_text'>" + COMMON_TIME + "</span></div></div></li>";
            $(".machine_flow_Detailed ul").append(li_content);
            if (AVG_TIME >= 27) {
                $(".machine_flow_Detailed .Avg_text").eq(i).css("color", "red");
            }
            if (COMMON_TIME >= 27) {
                $(".machine_flow_Detailed .Common_text").eq(i).css("color", "red");
            }
        }
    }
}

var other_Fac = {
    Page_2_2_settime_Ajax: function (older_data, _BUSTYPE, _DATETYPE) {
        var d = new Date();
        var vYear = d.getFullYear();
        var vMon = d.getMonth() + 1;
        var vDay = d.getDate();
        var start_vMon = vMon - older_data;
        if (start_vMon <= 0)
        {
            start_vMon = 12;
            vYear = vYear - 1;
        }
        var start_date = vYear + "-"+(start_vMon < 10 ? "0" + start_vMon : "-" + start_vMon) + "-"+("01");
        var end_date = vYear + (vMon < 10 ? "0" + vMon : vMon) + (vDay < 10 ? "0" + vDay : vDay);
        if ((older_data == 3) || (older_data == 1)) {
            end_date = other_Fac.getBeforeDate(vDay < 10 ? "0" + vDay : vDay);
        }
        Ajax_Store_Sales.STARTDATE = start_date;
        Ajax_Store_Sales.ENDDATE = parseInt(end_date);
        Ajax_Store_Sales.STOREID = Load_Store_ID.STORE_ID;
        Ajax_Store_Sales.BUSTYPE = _BUSTYPE;
        Ajax_Store_Sales.DATETYPE = _DATETYPE;
        console.log("门店销量统计="+Ajax_Store_Sales);
        queryData.ajax(Ajax_Store_Sales, Ajax_Url_Link.Store_sales_Url, Ajax_CallBack.Get_Page2_2_content);
    },
    //门店销量指针统计
    Page_2_3_settime_Ajax: function (_BUSTYPE) {
        Ajax_Store_Sales_Count.STOREID = Load_Store_ID.STORE_ID;
        Ajax_Store_Sales_Count.BUSTYPE = _BUSTYPE;
        console.log(Ajax_Store_Sales_Count.STOREID+"业务类型"+_BUSTYPE);
        //Ajax_CallBack.Get_Page2_3_content();
        queryData.ajax(Ajax_Store_Sales_Count, Ajax_Url_Link.Store_sales_count_Url, Ajax_CallBack.Get_Page2_3_content);
    },
    //终端库存统计
    Page_2_4_settime_Ajax: function (older_data) {
        var d = new Date();
        var vYear = d.getFullYear();
        var vMon = d.getMonth() + 1;
        var vDay = d.getDate();
        var start_date = other_Fac.getBeforeDate(older_data);
        var end_date = vYear + (vMon < 10 ? "0" + vMon : vMon) + (vDay < 10 ? "0" + vDay : vDay);
        Ajax_TerminalReport.STARTDATE = parseInt(start_date);
        Ajax_TerminalReport.ENDDATE = parseInt(end_date);
        Ajax_TerminalReport.STOREID = Load_Store_ID.STORE_ID;
        Ajax_TerminalReport.DATETYPE = 0;
        queryData.ajax(Ajax_TerminalReport, Ajax_Url_Link.TerminalReport_Url, Ajax_CallBack.Get_Page2_4_content);
    },
    //零销量预警
    Page_2_5_settime_Ajax: function () {

        Ajax_ZeroReport.STOREID = Load_Store_ID.STORE_ID;
        queryData.ajax(Ajax_ZeroReport, Ajax_Url_Link.ZeroReport_Url, Ajax_CallBack.Get_Page2_5_content);

    },
    Page_2_6_settime_Ajax: function () {
        queryData.ajax(Ajax_Machine_Table, Ajax_Url_Link.Top10_Url, Ajax_CallBack.Get_Page2_6_content);
    },
    set_table: function (_obj_name, _data, _mobile, _broadband, _terminal, addothername) {
        $(_obj_name).html("");
        for (var i = 0; i < _data.length; i++) {
            var timeindex = _data[i];
            var mobile_index = _mobile[i];
            var Broadband_index = _broadband[i];
            var Terminal_index = _terminal[i];
            var li_content = "<li><span>" + timeindex + addothername + "</span><span>" + mobile_index + "</span><span>" + Broadband_index + "</span><span>" + Terminal_index + "</span></li>";
            $(_obj_name).append(li_content);
        }
    },
    set_table2_2: function (_obj_name, _data, _mobile) {
        $(_obj_name).html("");
        for (var i = 0; i < _data.length; i++) {
            var timeindex = _data[i];
            var mobile_index = _mobile[i];
            var li_content = "<li><span>" + timeindex + "</span><span>" + mobile_index + "</span></li>";
            $(_obj_name).append(li_content);
        }
    },
    Echart: function (Chart_Content, Chart_date, Chart_Tip_name) {
        require.config({
            paths: {
                echarts: './js/lib/Echarts'
            }
        });
        // 使用
        require(
                [
                    'echarts',
                    'echarts/chart/line'
                            /* 'Echarts/chart/line' // 使用柱状图就加载bar模块，按需加载*/
                ],
                function (ec) {
                    // 基于准备好的dom，初始化echarts图表
                    var myChart = ec.init(document.getElementById('echart'));

                    var option = {
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            data: Chart_Tip_name
                        },
                        dataZoom: filler,
                        grid: {
                            x: 50,
                            x2: 30
                        },
                        calculable: true,
                        xAxis: [
                            {
                                type: 'category',
                                boundaryGap: false,
                                data: Chart_date
                            }
                        ],
                        yAxis: [
                            {
                                type: 'value'
                            }
                        ],
                        series: Chart_Content
                    };
                    // 为echarts对象加载数据
                    myChart.setOption(option);
                }
        );
    },
    //获取前几天的日期
    getBeforeDate: function (n) {
        var n = n;
        var d = new Date();
        var year = d.getFullYear();
        var mon = d.getMonth() + 1;
        var day = d.getDate();
        if (day <= n) {
            if (mon > 1) {
                mon = mon - 1;
            }
            else {
                year = year - 1;
                mon = 12;
            }
        }
        d.setDate(d.getDate() - n);
        year = d.getFullYear();
        mon = d.getMonth() + 1;
        day = d.getDate();
        s = year + "" + (mon < 10 ? ("0" + mon) : mon) + (day < 10 ? ("0" + day) : day);
        return s;
    },
//获取某月的天数
    getMonthDays: function (myMonth) {
        var monthStartDate = new Date(nowYear, myMonth, 1);
        var monthEndDate = new Date(nowYear, myMonth + 1, 1);
        var days = (monthEndDate - monthStartDate) / (1000 * 60 * 60 * 24);
        return   days;
    }
}


var SetFirstGage = (function () {
    //设置取道栏的内容下拉列表
    function Set_Channel() {
        $.each(JQ_CHANNELLIST, function (i) {
            var name = JQ_CHANNELLIST[i].NAME;
            var Option_Valve = i;
            $("#list li:eq(0) select").append("<option value=" + Option_Valve + ">" + name + "</option>");
        });
    }
    //设置区局
    function Set_Area() {
        //console.log("-------------------------设置区局--------------------------");
        //获取渠道的选择ID
        //ARRAY_INDEX=getinfo.page_1_ContentID_select(0);
        //console.log("ARRAY_INDEX="+ARRAY_INDEX);
        //将内容写入html中
        $("#list li:eq(1) select option").slice(1).remove();
        $("#list li:eq(1) select").append("<option value='All'>全部</option>");

        $.each(JQ_AREALIST[ARRAY_INDEX], function (i) {
            var name = JQ_AREALIST[ARRAY_INDEX][i].NAME;
            var Option_Valve = JQ_AREALIST[ARRAY_INDEX][i].ID;
            $("#list li:eq(1) select").append("<option value=" + Option_Valve + ">" + name + "</option>");
        });

        //console.log("区局数量="+$("#list li:eq(1) select option").length);
    }
    //设置分局1
    function Set_SubArea_1() {
        //console.log("-------------------------设置分局1--------------------------");
        //----------------------根据取道获取------------------------
        //console.log("ARRAY_INDEX="+ARRAY_INDEX);
        $("#list li:eq(2) select option").slice(1).remove();
        $("#list li:eq(2) select").append("<option value='All'>全部</option>");
        $.each(JQ_SUBAREALIST[ARRAY_INDEX], function (i) {
            var name = JQ_SUBAREALIST[ARRAY_INDEX][i].NAME;
            var Option_Valve = JQ_SUBAREALIST[ARRAY_INDEX][i].ID;
            $("#list li:eq(2) select").append("<option value=" + Option_Valve + ">" + name + "</option>");
        });
        //console.log("所属分局数量="+$("#list li:eq(2) select option").length);
        //----------------------根据区局获取------------------------
    }
    //设置分局2
    function Set_SubArea_2() {
        //console.log("-------------------------设置分局2--------------------------");
        //----------------------根据取道获取------------------------
        var Arrar_temp = [];
        //获取所选区局的ID
        //console.log("ARRAY_INDEX="+ARRAY_INDEX);
        Area_select_ID = getinfo.page_1_ContentID_select(1);
        //console.log("区局ID="+Area_select_ID);
        if ((Area_select_ID.length > 0) && (Area_select_ID != "All")) {
            $("#list li:eq(2) select option").slice(1).remove();
            $("#list li:eq(2) select").append("<option value='All'>全部</option>");
            for (var i = 0; i < JQ_SUBAREALIST[ARRAY_INDEX].length; i++) {
                if (JQ_SUBAREALIST[ARRAY_INDEX][i].SUBAREAID == Area_select_ID) {
                    Arrar_temp.push(JQ_SUBAREALIST[ARRAY_INDEX][i]);
                }
            }
            $.each(Arrar_temp, function (i) {
                var name = Arrar_temp[i].NAME;
                var Option_Valve = Arrar_temp[i].ID;
                $("#list li:eq(2) select").append("<option value=" + Option_Valve + ">" + name + "</option>");
            });
        }

        //console.log("分局数量="+$("#list li:eq(2) select option").length);
        //----------------------根据区局获取------------------------
    }

    //设置代理商
    function Set_Agen() {
        //console.log("-------------------------设置代理商--------------------------");
        //----------------------根据取道获取------------------------
        //console.log("ARRAY_INDEX="+ARRAY_INDEX);
        $("#list li:eq(3) select option").slice(1).remove();
        $("#list li:eq(3) select").append("<option value='All'>全部</option>");
        $.each(JQ_AGENTLIST[ARRAY_INDEX], function (i) {
            var name = JQ_AGENTLIST[ARRAY_INDEX][i].NAME;
            var Option_Valve = JQ_AGENTLIST[ARRAY_INDEX][i].ID;
            $("#list li:eq(3) select").append("<option value=" + Option_Valve + ">" + name + "</option>");
        });
        //console.log("代理商数量="+$("#list li:eq(3) select option").length);
        //----------------------根据区局获取------------------------
    }

    //设置代理商
    function Set_Store_1() {
        //console.log("-------------------------设置门店1--------------------------");
        JQ_STORELIST_temp = JQ_STORELIST[ARRAY_INDEX];
        //----------------------根据取道获取------------------------
        //console.log("ARRAY_INDEX="+ARRAY_INDEX);
        $("#list li:eq(4) select option").slice(1).remove();
        $("#list li:eq(4) select").append("<option value='All'>全部</option>");
        $.each(JQ_STORELIST[ARRAY_INDEX], function (i) {
            var name = JQ_STORELIST[ARRAY_INDEX][i].NAME;
            var Option_Valve = JQ_STORELIST[ARRAY_INDEX][i].ID;
            $("#list li:eq(4) select").append("<option value=" + Option_Valve + ">" + name + "</option>");
        });
        //console.log("门店数量="+$("#list li:eq(4) select option").length);
        //----------------------根据区局获取------------------------
    }

    //设置门店2
    function Set_Store_2() {
        //console.log("-------------------------设置门店2--------------------------");
        //----------------------根据取道获取------------------------
        var Arrar_temp = [];
        //获取所选区局的ID
        //console.log("ARRAY_INDEX="+ARRAY_INDEX);
        Area_select_ID = getinfo.page_1_ContentID_select(1);
        //console.log("区局ID="+Area_select_ID);
        if ((Area_select_ID.length > 0) && (Area_select_ID != "All")) {
            $("#list li:eq(4) select option").slice(1).remove();
            $("#list li:eq(4) select").append("<option value='All'>全部</option>");
            for (var i = 0; i < JQ_STORELIST[ARRAY_INDEX].length; i++) {
                if (JQ_STORELIST[ARRAY_INDEX][i].AREAID == Area_select_ID) {
                    Arrar_temp.push(JQ_STORELIST[ARRAY_INDEX][i]);
                }
            }
            JQ_STORELIST_temp = Arrar_temp;
            $.each(Arrar_temp, function (i) {
                var name = Arrar_temp[i].NAME;
                var Option_Valve = Arrar_temp[i].ID;
                $("#list li:eq(4) select").append("<option value=" + Option_Valve + ">" + name + "</option>");
            });
        }
        //console.log("门店数量="+$("#list li:eq(4) select option").length);
        //----------------------根据区局获取------------------------
    }

    //设置门店3
    function Set_Store_3() {
        //console.log("-------------------------设置门店3--------------------------");
        //----------------------根据取道获取------------------------
        var Arrar_temp = [];
        //获取所选区局的ID
        //console.log("ARRAY_INDEX="+ARRAY_INDEX);
        SubArea_select_ID = getinfo.page_1_ContentID_select(2);
        //console.log("分局ID="+SubArea_select_ID);
        if ((SubArea_select_ID.length > 0) && (SubArea_select_ID != "All")) {
            $("#list li:eq(4) select option").slice(1).remove();
            $("#list li:eq(4) select").append("<option value='All'>全部</option>");
            for (var i = 0; i < JQ_STORELIST_temp.length; i++) {
                if (JQ_STORELIST_temp[i].SUBAREAID == SubArea_select_ID) {
                    Arrar_temp.push(JQ_STORELIST_temp[i]);
                }
            }
            JQ_STORELIST_temp = Arrar_temp;
            $.each(Arrar_temp, function (i) {
                var name = Arrar_temp[i].NAME;
                var Option_Valve = Arrar_temp[i].ID;
                $("#list li:eq(4) select").append("<option value=" + Option_Valve + ">" + name + "</option>");
            });
        }
        //console.log("门店数量="+$("#list li:eq(4) select option").length);
        //----------------------根据区局获取------------------------
    }

    //设置门店4
    function Set_Store_4() {
        //console.log("-------------------------设置门店4--------------------------");
        //----------------------根据取道获取------------------------
        var Arrar_temp = [];
        //获取所选区局的ID
        //console.log("ARRAY_INDEX="+ARRAY_INDEX);
        Agen_select_ID = getinfo.page_1_ContentID_select(3);
        //console.log("代理商ID="+Agen_select_ID);
        if (Agen_select_ID.length > 0) {
            if (Agen_select_ID == "All") {
                $("#list li:eq(4) select option").slice(1).remove();
                $("#list li:eq(4) select").append("<option value='All'>全部</option>");
                for (var j = 0; j < JQ_AGENTLIST[ARRAY_INDEX].length; j++) {
                    for (var i = 0; i < JQ_STORELIST_temp.length; i++) {
                        if (JQ_STORELIST_temp[i].AGENTID == JQ_AGENTLIST[ARRAY_INDEX][j].ID) {
                            Arrar_temp.push(JQ_STORELIST_temp[i]);
                        }
                    }
                }
            } else {
                $("#list li:eq(4) select option").slice(1).remove();
                $("#list li:eq(4) select").append("<option value='All'>全部</option>");
                for (var i = 0; i < JQ_STORELIST_temp.length; i++) {
                    if (JQ_STORELIST_temp[i].AGENTID == Agen_select_ID) {
                        Arrar_temp.push(JQ_STORELIST_temp[i]);
                    }
                }
            }

            $.each(Arrar_temp, function (i) {
                var name = Arrar_temp[i].NAME;
                var Option_Valve = Arrar_temp[i].ID;

                $("#list li:eq(4) select").append("<option value=" + Option_Valve + ">" + name + "</option>");
            });
        }
        //console.log("门店数量="+$("#list li:eq(4) select option").length);
        //----------------------根据区局获取------------------------
    }

    return {
        Set_Channel: Set_Channel,
        Set_Area: Set_Area,
        Set_SubArea_1: Set_SubArea_1,
        Set_SubArea_2: Set_SubArea_2,
        Set_Agen: Set_Agen,
        Set_Store_1: Set_Store_1,
        Set_Store_2: Set_Store_2,
        Set_Store_3: Set_Store_3,
        Set_Store_4: Set_Store_4
    };
})();
