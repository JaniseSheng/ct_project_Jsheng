/* global loginUser, Ajax_Url_Link, Ajax_CallBack, queryData */

/**
 * Created by janisesheng on 15-5-29.
 */

//初始状态下进入页面
$(document).ready(function () {

//    FastClick.attach(document.body);

    // FastClick.attach(document.body);
    $('.logout').on('click', function () {
        if (confirm("是否登出")) {
            loginUser.loginOut();
        }
    });

//AJAX_GET_INFO-------------------------------------------------
//用户登录信息
    var Ajax_User_Info = {
        LOGIN_NAME: "",
        LOGIN_CRM: "",
        LOGIN_PWD: ""
    };

    var Ajax_User_ID_Gao = {
        USER_ID: ""
    };

    if (!loginUser.isLogin()) {
        loginUser.loginOut();
    } else {
        var user = loginUser.getUserFromCookie();
        $("#js_UserName").html(user.NAME);

        Ajax_User_Info.LOGIN_ID = user.LOGIN_ID;
        Ajax_User_Info.NAME = user.NAME;
        Ajax_User_ID_Gao.USER_ID = user.LOGIN_ID;
        console.log(Ajax_User_ID_Gao);
//        loading('add');
        queryData.ajax(Ajax_User_ID_Gao, Ajax_Url_Link.table_Url, Ajax_CallBack.Get_Uesr_Condition);
        myTable.setPage_myTable_1();
    }


    //第一步,获取用户信息
//    queryData.ajax(Ajax_User_ID_Gao, Ajax_Url_Link.table_Url, Ajax_CallBack.Get_Uesr_Condition);
//    myTable.setPage_myTable_1();

    //queryData.ajax(Ajax_Store_Sales_Count ,Ajax_Url_Link.Store_sales_count_Url, Ajax_CallBack.Get_Page2_3_content);
});

//我的门店的面向对象方法 SET,显示html方法
var myTable = {
    pageindex: "",
    //门店页面地图页面
    setPage_myTable_1: function () {
        //this.pageindex=1;
        //第1页
        var head1 = "<button data-effect='st-effect'><i class='icon-ic_menu_24px'></i></button><span>小翼看表</span>";
        //选择渠道类型
        var wrapper_1_1 = "<div class='w-container clearfix'><ul id='list' class='witch_table'>";
        var wrapper_1_2 = "<li class='more-content'><a><i class='icon-net_closed'></i><form class='form_drop_down'><select style='padding: 6px 12px;'>";
        var wrapper_1_3 = "<option value='' selected='true' disabled='true'>选择渠道类型</option>";
        var wrapper_1_4 = "<option value=''>渠道类型1</option>";
        var wrapper_1_5 = "</select></form></a></li>";
        var wrapper_1 = wrapper_1_1 + wrapper_1_2 + wrapper_1_3 + wrapper_1_5;

        //选择所属区局
        var wrapper_2_1 = "<li class='more-content'><a><i class='icon-ic_apps_24px'></i><form class='form_drop_down'><select style='padding: 6px 12px;'>";
        var wrapper_2_2 = "<option value='' selected='true' disabled='true'>选择所属区局</option>";
        var wrapper_2_3 = "<option value=''>所属区局1</option>";
        var wrapper_2_4 = "</select></form></a></li>";
        var wrapper_2 = wrapper_2_1 + wrapper_2_2 + wrapper_2_4;

        //选择所属公司
        var wrapper_3_1 = "<li class='more-content'><a><i class='icon-world_times'></i><form class='form_drop_down'><select style='padding: 6px 12px;'>";
        var wrapper_3_2 = "<option value='' selected='true' disabled='true'>选择所属分局</option>";
        var wrapper_3_3 = "<option value=''>所属公司1</option>";
        var wrapper_3_4 = "</select></form></a></li>";
        var wrapper_3 = wrapper_3_1 + wrapper_3_2 + wrapper_3_4;

        //选择代理商
        var wrapper_4_1 = "<li class='more-content'><a><i class='icon-id'></i><form class='form_drop_down'><select style='padding: 6px 12px;'>";
        var wrapper_4_2 = "<option value='' selected='true' disabled='true'>选择代理商</option>";
        var wrapper_4_3 = "<option value=''>选择代理商1</option>";
        var wrapper_4_4 = "</select></form></a></li>";
        var wrapper_4 = wrapper_4_1 + wrapper_4_2 + wrapper_4_4;

        //选择门店
        var wrapper_5_1 = "<li class='more-content'><a><i class='icon-home'></i><form class='form_drop_down'><select style='padding: 6px 12px;'>";
        var wrapper_5_2 = "<option value='' selected='true' disabled='true'>选择门店</option>";
        var wrapper_5_3 = "<option value=''>门店1</option>";
        var wrapper_5_4 = "</select></form></a></li>";
        var wrapper_5 = wrapper_5_1 + wrapper_5_2 + wrapper_5_4;
        var wrapper_end = "</ul><div style='margin-bottom: 24px'><a  class='next button green' id='Page1_Next' name='page_to_2'>下 一 步</a></div></div><script src='js/lib/sidebarEffects.js'></script><script src='js/lib/classie.js'></script>";

        var head = head1;
        var wrapper = wrapper_1 + wrapper_2 + wrapper_3 + wrapper_4 + wrapper_5 + wrapper_end;


        $(".header").html(head);
        $(".container").html(wrapper);

        /*        //点击右上角搜索按钮,显示搜索输入框
         setTimeout("click_Evrnt.click_toogle('#reg','.address-search')",500);
         //选中输入框之后,自动开启搜索按钮
         setTimeout("click_Evrnt.input_focus('#search_input','#search_bt')",500);
         click_Evrnt.page_convert(1);*/

    },
    //地图页面跳转至门店搜索结果页面
    setPage_myTable_2: function () {
        //第2页
        var head1 = "<button data-effect='st-effect' class='back' name='page_to_1'><i class='icon-ic_keyboard_arrow_left_24px'></i></button><span>小翼看表</span>";
        //选择渠道类型
        var wrapper_1_1 = "<div class='w-container clearfix'><ul id='list' class='witch_table2'>";
        //实时受理统计
        var wrapper_1_2 = "<li class='more-content'><a class='next' name='page_to_2_1'><i class='icon-pie_chart'></i><p>实时受理统计</p></a></li>";
        //门店销量统计
        var wrapper_1_3 = "<li class='more-content'><a class='next' name='page_to_2_2'><i class='icon-presentation'></i><p>门店销量统计</p></a></li>";
        //门店销量指标统计
        var wrapper_1_4 = "<li class='more-content'><a class='next' name='page_to_2_3'><i class='icon-flag_swallowtail'></i><p>门店销量指标统计</p></a></li>";
        //终端库存统计
        var wrapper_1_5 = "<li class='more-content'><a class='next' name='page_to_2_4'><i class='icon-satchel'></i><p>终端库存统计</p></a></li>";
        //零销量预警统计
        var wrapper_1_6 = "<li class='more-content'><a class='next' name='page_to_2_6'><i class='icon-electronic_megaphone'></i><p>零销量预警统计</p></a></li>";
        //排队机客流监控
        var wrapper_1_7 = "<li class='more-content'><a class='next'><i class='icon-users_three'></i><p>排队机客流监控</p></a></li>";
        var wrapper_end = "</ul></div>";
        var wrapper_1 = wrapper_1_1 + wrapper_1_2 + wrapper_1_3 + wrapper_1_4 + wrapper_1_5 + wrapper_1_6 + wrapper_1_7;

        var head = head1;
        var wrapper = wrapper_1 + wrapper_end;
        $(".header").html(head);
        $(".container").html(wrapper);
        click_Evrnt.page_convert();
    },
    setPage_myTable_2_1: function () {
        //第3页
        var head1 = "<button data-effect='st-effect' class='back' name='page_to_2'><i class='icon-ic_keyboard_arrow_left_24px'></i></button><span>实时受理报表</span>";
        //图标区域
        var wrapper_1_1 = "<div class='w-container clearfix'><div class='Flow_table' id='echart'>";
        var wrapper_1_2 = "</div>";
        var wrapper_1 = wrapper_1_1 + wrapper_1_2;

        //所属时段
        var wrapper_2_1 = "<div class='table_Detailed'><form class='form_drop_down'><select style='padding: 6px 12px;'>";
        var wrapper_2_2 = "<option value='' selected='true' disabled='true'>所属时段</option>";
        var wrapper_2_3 = "<option value=''>上午</option><option value=''>中午</option><option value=''>下午</option>";
        var wrapper_2_4 = "</select></form>";
        var wrapper_2 = wrapper_2_1 + wrapper_2_2 + wrapper_2_3 + wrapper_2_4;

        //按周
        var wrapper_3_1 = "<form class='form_drop_down'><select style='padding: 6px 12px;'>";
        var wrapper_3_2 = "<option value='' selected='true' disabled='true'>按周</option>";
        var wrapper_3_3 = "<option value=''>1周</option><option value=''>2周</option><option value=''>3周</option>";
        var wrapper_3_4 = "</select></form></div>";
        var wrapper_3 = wrapper_3_1 + wrapper_3_2 + wrapper_3_3 + wrapper_3_4;

        //统计结果
        var wrapper_4_1 = "<div class='Detailed_box'><ul>";
        var wrapper_4_2 = "<li><span>统计时间点</span><span>移动受理数</span><span>宽带受理数</span><span>终端受理数</span></li>";
        var wrapper_4_3 = "<ul><li><span>00:00</span><span>12</span><span>15</span><span>17</span></li>";
        var wrapper_4_4 = "<li><span>00:10</span><span>43</span><span>52</span><span>68</span></li>";
        var wrapper_4_5 = "<li><span>00:20</span><span>34</span><span>56</span><span>76</span></li></ul></ul></div>";
        var wrapper_4 = wrapper_4_1 + wrapper_4_2 + wrapper_4_3 + wrapper_4_4 + wrapper_4_5;

        var wrapper_end = "</div><script src='js/lib/Echarts/echarts.js'></script>";

        var head = head1;
        var wrapper = wrapper_1 + wrapper_4 + wrapper_end;

        $(".header").html(head);
        $(".container").html(wrapper);
        click_Evrnt.page_convert();
    },
    setPage_myTable_2_2: function () {
        //第3页
        var head1 = "<button data-effect='st-effect' class='back' name='page_to_2'><i class='icon-ic_keyboard_arrow_left_24px'></i></button><span>门店销量统计</span>";
        //图标区域
        var wrapper_1_1 = "<div class='w-container clearfix'><div class='Flow_table' id='echart'>";
        var wrapper_1_2 = "</div>";
        var wrapper_1 = wrapper_1_1 + wrapper_1_2;

        //所属时段
        var wrapper_2_1 = "<div class='table_Detailed table_Detailed2_2'><form class='form_drop_down'><select id='Mon_mun' style='padding: 6px 12px;'>";
        var wrapper_2_2 = "<option value='0' selected='true' disabled='true'>所属时段</option>";
        var wrapper_2_3 = "<option value='0'>当月</option><option value='1'>上月</option><option value='3'>上三月</option>";
        var wrapper_2_4 = "</select></form>";
        var wrapper_2_5 = "<a id='tablesearch2_2' class='button green'>搜索</a></div>";
        var wrapper_2 = wrapper_2_1 + wrapper_2_2 + wrapper_2_3 + wrapper_2_4;

        //按周
        var wrapper_3_1 = "<form class='form_drop_down'><select id='Data_type' style='padding: 6px 12px;'>";
        var wrapper_3_2 = "<option value='0' selected='true' disabled='true'>按天</option>";
        var wrapper_3_3 = "<option value='0'>按天</option>";
        var wrapper_3_4 = "</select></form>";
        var wrapper_3 = wrapper_3_1 + wrapper_3_2 + wrapper_3_3 + wrapper_3_4;

        //业务类型
        var wrapper_4_1 = "<form class='form_drop_down'><select id='Bustype' style='padding: 6px 12px;'>";
        var wrapper_4_2 = "<option value='0' selected='true' disabled='true'>宽带（受理)</option>";
        var wrapper_4_3 = "<option value='0' name='WB_A'>宽带（受理)</option>";
        var wrapper_4_4 = "<option value='1' name='WB_B'>宽带（发展)</option>";
        var wrapper_4_5 = "<option value='2' name='CDMA_A'>移动号线（受理)</option>";
        var wrapper_4_6 = "<option value='3' name='CDMA_B'>移动号线（发展)</option>";
        var wrapper_4_7 = "<option value='4' name='TERM_A'>智能机（新增)</option>";
        var wrapper_4_8 = "<option value='5' name='TERM_B'>智能机（净增)</option>";
        var wrapper_4_9 = "<option value='6' name='4G'>4G发展量</option>";
        var wrapper_4_10 = "<option value='7' name='CDMA_C'>移动号线（发展）-中小渠道</option>";
        var wrapper_4_11 = "<option value='8' name='CDMA_D'>移动号线（达量）-中小渠道</option>";
        var wrapper_4_12 = "</select></form><a id='table2_2_search' class='button green'>搜索</a></div></div>";
        var wrapper_4 = wrapper_4_1 + wrapper_4_2 + wrapper_4_3 + wrapper_4_4+wrapper_4_5+wrapper_4_6+wrapper_4_7+wrapper_4_8+wrapper_4_9+wrapper_4_10+wrapper_4_11+wrapper_4_12;

        //统计结果
        var wrapper_5_1 = "<div class='Detailed_box Detailed_box2_2'><ul>";
        var wrapper_5_2 = "<li><span>统计时间点</span><span id='span_bustype'>移动受理数</span></li>";
        var wrapper_5_3 = "<ul><li><span>00:00</span><span>12</span></li>";
        var wrapper_5_4 = "<li><span>00:10</span><span>43</span></li>";
        var wrapper_5_5 = "<li><span>00:20</span><span>34</span></ul></ul></div>";
        var wrapper_5 = wrapper_5_1 + wrapper_5_2 + wrapper_5_3 + wrapper_5_4 + wrapper_5_5;

        var wrapper_end = "</div><script src='js/lib/Echarts/echarts.js'></script>";

        var head = head1;
        var wrapper = wrapper_1 + wrapper_2 + wrapper_3 + wrapper_4 + wrapper_5 + wrapper_end;

        $(".header").html(head);
        $(".container").html(wrapper);
        Set_Page_Info.set_page2_2info();
        click_Evrnt.select_DateType();
        click_Evrnt.page_convert();
    },
    setPage_myTable_2_3: function () {
        //第3页
        var head1 = "<button data-effect='st-effect' class='back' name='page_to_2'><i class='icon-ic_keyboard_arrow_left_24px'></i></button><span>门店销量指针统计</span>";
        var wrapper_1_1 = "<div class='w-container clearfix'><form class='form_drop_down' id='saleOPtion'>";
        var wrapper_1_2="<select style='padding: 6px 12px;'><option value='' selected='true' disabled='true'>选择业务类型</option>"
        var wrapper_1_3="<option value='' name='0'>移动</option><option value='' name='1'>宽带</option><option value='' name='2'>终端</option>"
        var wrapper_1_4="</select></form>"
        var wrapper_1 = wrapper_1_1 + wrapper_1_2+wrapper_1_3+wrapper_1_4;


        var wrapper_2_1 = "<ul id='list' class='saleIndexList'>";
        var wrapper_2_2 = "<li class='more-content'><a><select id='storeList' style='padding: 6px 12px;'></select><i>1</i><p>上海电信泰兴路营业厅上海电信泰兴路营业厅</p><span>日销售:<span>123</span></span><span>月销售:<span>123</span></span><span>销售指标:<span>123</span></span><span>与上月同期环比:<span>123</span></span></a></li>";
        var wrapper_2_3="</ul></div>";
        var wrapper_2 = wrapper_2_1+wrapper_2_3;
        var head = head1;
        var wrapper = wrapper_1+wrapper_2;

        $(".header").html(head);
        $(".container").html(wrapper);
        Set_Page_Info.set_page2_3info();
        click_Evrnt.page_convert();
    },
    setPage_myTable_2_4: function () {
        //第3页
        var head1 = "<button data-effect='st-effect' class='back' name='page_to_2'><i class='icon-ic_keyboard_arrow_left_24px'></i></button><span>终端库存统计</span>";
        //图标区域
        var wrapper_1_1 = "<div class='w-container clearfix'><div class='Flow_table' id='echart'>";
        var wrapper_1_2 = "</div>";
        var wrapper_1 = wrapper_1_1 + wrapper_1_2;

        //所属时段
        var wrapper_2_1 = "<div class='table_Detailed table_Detailed2_4'><form class='form_drop_down'><select id='Date_select_2_4' style='padding: 6px 12px;'>";
        var wrapper_2_2 = "<option value='0' selected='true' disabled='true'>所属时段</option>";
        var wrapper_2_3 = "<option value='0'>最近一周</option><option value='1'>最近15天</option>";
        var wrapper_2_4 = "</select></form>";
        var wrapper_2_5 = "<a id='tablesearch2_2' class='button green'>搜索</a></div>";
        var wrapper_2 = wrapper_2_1 + wrapper_2_2 + wrapper_2_3 + wrapper_2_4 + wrapper_2_5;

        //按周
        var wrapper_3_1 = "<form class='form_drop_down'><select id='Data_type' style='padding: 6px 12px;'>";
        var wrapper_3_2 = "<option value='0' selected='true' disabled='true'>按天</option>";
        var wrapper_3_3 = "<option value='0'>按天</option>";
        var wrapper_3_4 = "</select></form>";
        var wrapper_3 = wrapper_3_1 + wrapper_3_2 + wrapper_3_3 + wrapper_3_4;

        //业务类型
        var wrapper_4_1 = "<form class='form_drop_down'><select id='Bustype' style='padding: 6px 12px;'>";
        var wrapper_4_2 = "<option value='0' selected='true' disabled='true'>移动</option>";
        var wrapper_4_3 = "<option value='0'>移动</option><option value='1'>宽带</option><option value='2'>终端</option>";
        var wrapper_4_4 = "</select></form><a id='table2_2_search' class='button green'>搜索</a></div></div>";
        var wrapper_4 = wrapper_4_1 + wrapper_4_2 + wrapper_4_3 + wrapper_4_4;

        //统计结果
        var wrapper_5_1 = "<div class='Detailed_box Detailed_box2_2'><ul>";
        var wrapper_5_2 = "<li><span>日期</span><span id='span_bustype'>库存</span></li>";
        var wrapper_5_3 = "<ul><li><span>00:00</span><span>12</span></li>";
        var wrapper_5_4 = "<li><span>00:10</span><span>43</span></li>";
        var wrapper_5_5 = "<li><span>00:20</span><span>34</span></ul></ul></div>";
        var wrapper_5 = wrapper_5_1 + wrapper_5_2 + wrapper_5_3 + wrapper_5_4 + wrapper_5_5;

        var wrapper_end = "</div><script src='js/lib/Echarts/echarts.js'></script>";

        var head = head1;
        var wrapper = wrapper_1 + wrapper_2 + wrapper_5 + wrapper_end;

        $(".header").html(head);
        $(".container").html(wrapper);
        Set_Page_Info.set_page2_4info();
        click_Evrnt.page_convert();
    },
    setPage_myTable_2_5: function () {
        //第3页
        var head1 = "<button data-effect='st-effect' class='back' name='page_to_2'><i class='icon-ic_keyboard_arrow_left_24px'></i></button><span>零销售预警统计</span>";
        //图标区域
        var wrapper_1_1 = "<div class='w-container clearfix'>";
        var wrapper_1_2 = "<div class='Flow_table' id='echart'></div>";
        var wrapper_1 = wrapper_1_1;

        //统计结果
        var wrapper_5_1 = "<div class='Detailed_box Detailed_box2_2'><ul>";
        var wrapper_5_2 = "<li><span>门店名称</span><span id='span_bustype'>累计天数</span></li>";
        var wrapper_5_3 = "<ul><li><span>黄陂南路店</span><span>12</span></li>";
        var wrapper_5_4 = "<li><span>黄陂南路店</span><span>43</span></li>";
        var wrapper_5_5 = "<li><span>黄陂南路店</span><span>34</span></ul></ul></div>";
        var wrapper_5 = wrapper_5_1 + wrapper_5_2 + wrapper_5_3 + wrapper_5_4 + wrapper_5_5;

        var wrapper_end = "</div><script src='js/lib/Echarts/echarts.js'></script>";

        var head = head1;
        var wrapper = wrapper_1 + wrapper_5 + wrapper_end;

        $(".header").html(head);
        $(".container").html(wrapper);
        Set_Page_Info.set_page2_5info();

        click_Evrnt.page_convert();
    },
    setPage_myTable_2_6: function () {
        //第3页
        var head1 = "<button data-effect='st-effect' class='back' name='page_to_2'><i class='icon-ic_keyboard_arrow_left_24px'></i></button><span>排队机客流监控</span>";
        //图标区域
        var wrapper_1_1 = "<div class='w-container clearfix'><ul id='list' class='machine_flow'>";
        var wrapper_1_2 = "<li><span>预警线:  27分钟</span><span>(超出部分红色显示)</span></li>";
        var wrapper_1_3 = "<li><div><i class='icon-file_xybk icon_xybk_6'></i><p>统计时间</p>";
        var wrapper_1_4 = "<form class='form_drop_down'><input id='Date_input' type='date' placeholder=''></form></div></li>";
        var wrapper_1 = wrapper_1_1 + wrapper_1_2 + wrapper_1_3 + wrapper_1_4;

        //所属时段
        var wrapper_2_1 = "<li><a  class='next button green' id='Storetop10'>搜  索</a></li></ul>";
        var wrapper_2_2 = "<div class='Detailed_box machine_flow_Detailed'><ul>";
        var wrapper_2_3 = "<li><div><span>Ranking</span><span>1</span></div><div>";
        var wrapper_2_4 = "<div><span>泰兴路营业厅</span></div>";
        var wrapper_2_5 = "<div><i class='icon-file_xybk2 icon_xybk_13'></i><span>平均等待时间:</span><span>33分钟</span></div>";
        var wrapper_2_6 = "<div><i class='icon-file_xybk2 icon_xybk_14'></i><span>同比等待时间:</span><span>34分钟</span></div></div></li>";

        var wrapper_2 = wrapper_2_1 + wrapper_2_2;

        var wrapper_end = "</ul></div></div>";

        var head = head1;
        var wrapper = wrapper_1 + wrapper_2 + wrapper_end;

        $(".header").html(head);
        $(".container").html(wrapper);

        Set_Page_Info.set_page2_6info();
        click_Evrnt.page_convert();
    }
};

//动画class初始化
animate_index = {
    fadeOutUp: 'animated fadeOutUpBig',
    fadeInDown: 'animated fadeInDown',
    fadeOutLeft: 'animated fadeOutLeftBig',
    fadeOutRight: 'animated fadeOutRightBig',
    fadeInRight: 'animated fadeInRight',
    fadeInLeft: 'animated fadeInLeft',
    fadeOutDown: 'animated fadeOutDownBig',
    fadeInUp: 'animated fadeInUp',
    slideInUp: 'animated slideInUp',
    slideOutDown: 'animated slideOutDown',
    animationEnd: 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
    animate_next: function () {
        $('div.container,div.header').addClass(animate_index.fadeOutLeft).one(animate_index.animationEnd, function () {
            $(this).removeClass(animate_index.fadeOutLeft);
            $(this).addClass(animate_index.fadeInRight).one(animate_index.animationEnd, function () {
                $(this).removeClass(animate_index.fadeInRight);
            });
        });
    },
    animate_back: function () {
        $('div.container,div.header').addClass(animate_index.fadeOutRight).one(animate_index.animationEnd, function () {
            $(this).removeClass(animate_index.fadeOutRight);
            $(this).addClass(animate_index.fadeInLeft).one(animate_index.animationEnd, function () {
                $(this).removeClass(animate_index.fadeInLeft);
            });
        });
    }
}

var click_Evrnt = {
    //click 自身事件
    click_self: function (btname) {
        $(btname).click(function () {
            alert("刷新列表");
        });
    },
    //click显示方法
    click_display: function (btname, othername, display) {
        $(btname).click(function () {
            $(othername).css("display", display);
        });
    },
    //click开关方法
    click_toogle: function (btname, othername) {
        $(btname).click(function () {
            $(othername).toggle(100);
        });

    },
    //点击空白处清楚搜索框
    clickempty: function (btname, ergname) {
        console.log("1");
        $(document).off('click').on("click", function (e) {
            if ($('.' + btname).length > 0) {
                var parentEls = $(e.target).parents()
                        .map(function () {
                            return this.className;
                        }).get().join(", ");
                var ownEls = $(e.target).map(function () {
                    return this.className;
                }).get().join(", ");

                if (ownEls.indexOf(ergname) < 0) {
                    console.log($('.' + btname).length);
                    if ((parentEls.indexOf(btname) < 0) && (ownEls.indexOf(btname) < 0)) {
                        $('.' + btname).css("display", "none");
                        //清空初入框的内容
                        $("#search_input").val("");
                    }
                }
            }
        })
    },
//切换页面动画
    page_convert: function () {

        /*        $('.next').off('click').on('click', function (e) {
         var pageindex=$(this).attr("name");
         //animate_index.animate_next();
         //跳转到第2页面
         if(pageindex=="page_to_2"){
         setTimeout("myTable.setPage_myTable_2()",200);
         }else if(pageindex=="page_to_2_1"){
         setTimeout("myTable.setPage_myTable_2_1()",200);
         }else if(pageindex=="page_to_2_2"){
         setTimeout("myTable.setPage_myTable_2_2()",200);
         }else if(pageindex=="page_to_2_3"){
         setTimeout("myTable.setPage_myTable_2_3()",200);
         }else if(pageindex=="page_to_2_4"){
         setTimeout("myTable.setPage_myTable_2_4()",200);
         } else if(pageindex=="page_to_2_5"){
         setTimeout("myTable.setPage_myTable_2_5()",200);
         }else if(pageindex=="page_to_2_6"){
         setTimeout("myTable.setPage_myTable_2_6()",200);
         }
         });*/

        $('.back').off('click').on('click', function (e) {
            var pageindex = $(this).attr("name");
            //animate_index.animate_next();
            //跳转到第2页面
            if (pageindex == "page_to_2") {
                setTimeout("Set_Page_Info.set_page2_info()", 200);
            } else if (pageindex == "page_to_1") {
                setTimeout("Set_Page_Info.set_page1_info()", 200);
            }
        });
    },
    //当输入框获取焦点
    input_focus: function (inputname, othername) {
        $(inputname).focus(function () {
            $(othername).css("display", "block");
        });
    },
    //当输入框失去焦点
    input_blur: function (inputname, othername) {
        $(inputname).blur(function () {
            $(othername).css("display", "none");
        });
    },
    select_DateType: function () {
        var a = "<option value='0' selected='true' disabled='true'>时间类型</option><option value='0'>按天</option>";
        var b = "<option value='0' selected='true' disabled='true'>时间类型</option><option value='0'>按天</option><option value='1'>按周</option>";
        var c = "<option value='0' selected='true' disabled='true'>时间类型</option><option value='1'>按周</option><option value='2'>按月</option>";
        $("#Mon_mun").change(function () {
            if ((getinfo.page_2_2_month_select()) == 0) {
                $("#Data_type").html(a);
            } else if ((getinfo.page_2_2_month_select()) == 1) {
                $("#Data_type").html(b);
            } else if ((getinfo.page_2_2_month_select()) == 3) {
                $("#Data_type").html(c);
            }
        });
    }
}

//loading动画
function loading(event) {
    if (event == "add") {
        $(".st-pusher").append("<div id='loader'><p>加载中...</p><span></span><span></span><span></span><span></span></div>");
    } else
    if (event == "remove") {
        $("#loader").remove();
    }
}

////我的门店的面向对象方法 GET,发送服务器内容
var getinfo = {
    page_1_CHANNELLIST_index: function () {
        var info = $("#list li:eq(" + index + ") select option").index(this);
        return info;
    },
    //page1_渠道类型:0,所属区局:1,所属分局:2,代理商:3,门店:4
    page_1_ContentText_select: function (index) {
        var info = $("#list li:eq(" + index + ") select option:selected").text();
        return info;
    },
    page_1_ContentID_select: function (index) {
        var info = $("#list li:eq(" + index + ") select option:selected").attr("value");
        return info;
    },
    page_1_ContentName_select: function (index) {
        var info = $("#list li:eq(" + index + ") select option:selected").attr("name");
        return info;
    },
    page_2_2_month_select: function () {
        var info = $("#Mon_mun option:selected").attr("value");
        return info;
    },
    page_2_2_Datatype_select: function () {
        var info = $("#Data_type option:selected").text();
        return info;
    },
    page_2_2_Bustype_select: function () {
        var info = $("#Bustype option:selected").attr("name");
        return info;
    },
    page_2_2_titleDisplay: function () {
        var info = $("#Bustype option:selected").text();
        return info;
    },
    page_2_4_Date_select: function () {
        var info = $("#Date_select_2_4 option:selected").attr("value");
        return info;
    },
    page_2_6_Date: function () {
        var info = $("#Date_input").val();
        return info;
    }

    /*  //返回第1页,我的地盘首页的地图初入框的值
     page_1_search:function(){
     var info= $("#search_input").val();
     return info;
     },
     //返回第3页,选择的负责人的名称
     page_4_changeleader:function(){
     var info= $("#leader_val option:selected").text();
     return info;
     },
     
     //返回第3页,选择的负责人的名称,数组对象
     page_4_datetime:function(){
     var info=[];
     var a= $("#start_date").val();
     var b= $("#end_date").val();
     info.push([a,b]);
     return info;
     }*/
}