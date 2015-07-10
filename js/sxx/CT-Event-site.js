/*
 * Created by janisesheng on 15-5-29.
 */


$(function() {
    FastClick.attach(document.body);
});

//初始状态下进入页面
$(document).ready(function() {
    myStore.setPage_mySore_1();

});


//我的门店的面向对象方法 SET,显示html方法
var myStore = {
    pageindex: "",
    //门店页面地图页面
    setPage_mySore_1: function() {
        //this.pageindex=1;
        //第1页
        var head = "<button data-effect='st-effect'><i class='icon-ic_menu_24px'></i></button><span>我的地盘</span><a href='#' id='reg'><i class='icon-search'></i></a>";
        var wrapper_1 = "<div class='w-container clearfix'><div class='address-search'>";
        var wrapper_2 = "<form><input id='search_input' type='text' name='search' placeholder='搜索'/>";
        var wrapper_3 = "<a id='search_bt' href='#' class='button purple next'><span>搜索</span></a>";
        var wrapper_4 = "</form></div></div><script src='js/sidebarEffects.js'></script>";
        var wrapper = wrapper_1 + wrapper_2 + wrapper_3 + wrapper_4;
        $(".header").html(head);
        $(".container").html(wrapper);
        //点击右上角搜索按钮,显示搜索输入框
        setTimeout("click_Evrnt.click_toogle('#reg','.address-search')", 500);
        //选中输入框之后,自动开启搜索按钮
        setTimeout("click_Evrnt.input_focus('#search_input','#search_bt')", 500);
        click_Evrnt.page_convert(1);

    },

    //地图页面跳转至门店搜索结果页面
    setPage_mySore_2: function() {
        //this.pageindex=2;
        //第2页
        var head = "<button data-effect='st-effect' class='back'><i class='icon-ic_keyboard_arrow_left_24px'></i></button><span>搜索结果</span>";
        var wrapper_1 = "<div class='w-container clearfix'><ul class='search-results'>";
        var wrapper_2 = "<li class='next'><a href='#'>中国电信(苑平南路营业厅)</a><i class='icon-ic_info_outline_24px'></i></li>";
        var wrapper_3 = "</ul><a href='#' class='load-more'>加载更多...</a>";
        var wrapper_4 = "</div>";
        var wrapper = wrapper_1 + wrapper_2 + wrapper_3 + wrapper_4;
        $(".header").html(head);
        $(".container").html(wrapper);
        //刷新列表
        setTimeout("click_Evrnt.click_self('.load-more')", 500);
        click_Evrnt.page_convert(2);

    },

    //门店详情
    setPage_mySore_3: function() {
        //第3页
        //this.pageindex=3;
        var head = " <button data-effect='st-effect' class='back pageback'><i class='icon-ic_keyboard_arrow_left_24px'></i></button><span>门店详情</span><a href='#'><i></i></a>";
        var wrapper_1 = "<div id='scroller' class='w-container clearfix'><div class='details'>";
        //营业厅名称
        var wrapper_2 = "<h2>中国电信上海三鲁路营业厅</h2><img src='images/Original.jpg'/><ul>";
        //所属区域
        var wrapper_3 = "<li><p>所属区域:</p><span>莘闵电信局</span></li>";
        //营业时间
        var wrapper_4 = "<li><p>营业时间:</p><span>8:30 - 17:30</span></li>";
        //昨日销量排名
        var wrapper_5 = "<li><p>昨日销量排名:</p><span>99</span></li>";
        //门店状态
        var wrapper_6 = "<li><p>门店状态:</p><span style='background-color: #3498db' class='status'>正常</span></li>";
        //负责人
        var wrapper_7 = "<li><a href='#' class='next button purple'><span>负责人：洪颖（店长）</span></a></li>";
        //详细地址
        var wrapper_8 = "<li><p class='address'>详细地址:</p><span>沈杜公路2969号沈杜公路2969号沈杜公路2969号沈杜公路2969号沈杜公路2969号</span></li>";
        //距离你的位置
        var wrapper_9 = "<li><p>距离您当前位置:</p><span>1.2 KM</span></li>";
        //联系电话
        var wrapper_10 = "<li><p>联系电话:</p><span>021-64110535</span></li>";

        var wrapper_11 = "</ul></div><ul class='pic-content'>";
        //照片列表,需要循环加载
        var wrapper_12 = "<li><span>替换文字</span><div><i class='icon-ic_camera_alt_24px'></i><img src='images/Original.jpg'/></div></li>";
        //
        var wrapper_13 = "</ul></div>";
        var wrapper = wrapper_1 + wrapper_2 + wrapper_3 + wrapper_4 + wrapper_5 + wrapper_6 + wrapper_7 + wrapper_8 + wrapper_9 + wrapper_10 + wrapper_11 + wrapper_12 + wrapper_13;
        $(".header").html(head);
        $(".container").html(wrapper);
        click_Evrnt.page_convert(3);
    },

    //门店页面的首页-负责人
    setPage_mySore_4: function() {
        //this.pageindex=4;
        //第4页
        var head = "<button data-effect='st-effect' class='back pageback'><i class='icon-ic_keyboard_arrow_left_24px'></i></button><span>负责人：洪颖（店长）</span><a href='#'><i></i></a>";
        var wrapper_1 = "<div id='scroller' class='w-container clearfix'><div class='details'><div><i class='icon-user'></i><p>改变人员：</p></div><form><i class='icon-ic_keyboard_arrow_down_24px'></i><select id='leader_val'>";
        //选择店长人员默认名称
        var wrapper_2 = "<option value='disabled selected'>Select a Dinner</option>";
        //选择店长人员下拉列表 (需要做循环处理)
        var wrapper_3 = "<option value=''>Create a drop-down list with four options:</option>";
        //有效时间
        var wrapper_4 = "</select></form><div><i class='icon-calendar'></i><p>有效时间：</p></div>";
        //input-data设置有效时间
        var wrapper_5 = "<form><input id='start_date' type='date' name='time' placeholder='起始日期'/><input id='end_date' type='date' name='time' placeholder='结束日期'/></form>";
        //保持和取消按钮
        var wrapper_6 = "<ul class='control'><li><a href='#' class='back button gray'><span>取 消</span></a></li><li><a href='#' class='back button green'><span>保 存</span></a></li></ul>";
        var wrapper_7 = "</div></div>";

        var wrapper = wrapper_1 + wrapper_2 + wrapper_3 + wrapper_4 + wrapper_5 + wrapper_6 + wrapper_7;
        $(".header").html(head);
        $(".container").html(wrapper);
        click_Evrnt.page_convert(4);
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

    animate_next: function() {
        $('div.container,div.header').addClass(animate_index.fadeOutLeft).one(animate_index.animationEnd, function() {
            $(this).removeClass(animate_index.fadeOutLeft);
            $(this).addClass(animate_index.fadeInRight).one(animate_index.animationEnd, function() {
                $(this).removeClass(animate_index.fadeInRight);
            });
        });
    },

    animate_back: function() {
        $('div.container,div.header').addClass(animate_index.fadeOutRight).one(animate_index.animationEnd, function() {
            $(this).removeClass(animate_index.fadeOutRight);
            $(this).addClass(animate_index.fadeInLeft).one(animate_index.animationEnd, function() {
                $(this).removeClass(animate_index.fadeInLeft);
            });
        });
    }
};

var click_Evrnt = {

    //click 自身事件
    click_self: function(btname) {
        $(btname).click(function() {
            alert("刷新列表");
        });
    },
    //click显示方法
    click_display: function(btname, othername, display) {
        $(btname).click(function() {
            $(othername).css("display", display);
        });
    },
    //click开关方法
    click_toogle: function(btname, othername) {
        $(btname).click(function() {
            $(othername).toggle(100);
        });

    },

    //点击空白处清楚搜索框
    clickempty: function(btname, ergname) {
        console.log("1");
        $(document).off('click').on("click", function(e) {
            if ($('.' + btname).length > 0) {
                var parentEls = $(e.target).parents()
                    .map(function() {
                        return this.className;
                    }).get().join(", ");
                var ownEls = $(e.target).map(function() {
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
        });
    },
    //切换页面动画
    page_convert: function(pageindex) {

        $('.next').off('click').on('click', function(e) {
            animate_index.animate_next();
            switch (pageindex) {
                case 1:
                    setTimeout("myStore.setPage_mySore_2()", 1000);
                    break;
                case 2:
                    setTimeout("myStore.setPage_mySore_3()", 1000);
                    break;
                case 3:
                    setTimeout("myStore.setPage_mySore_4()", 1000);
            }
        });

        $('.back').off('click').on('click', function(e) {
            animate_index.animate_back();
            switch (pageindex) {
                case 4:
                    setTimeout("myStore.setPage_mySore_3()", 1000);
                    break;
                case 3:
                    setTimeout("myStore.setPage_mySore_2()", 1000);
                    break;
                case 2:
                    setTimeout("myStore.setPage_mySore_1()", 1000);
            }
        });
    },
    //当输入框获取焦点
    input_focus: function(inputname, othername) {
        $(inputname).focus(function() {
            $(othername).css("display", "block");
        });
    },
    //当输入框失去焦点
    input_blur: function(inputname, othername) {
        $(inputname).blur(function() {
            $(othername).css("display", "none");
        });
    }
};

//loading动画
function loading(event) {
    if (event == "add") {
        $(".container").append("<div id='loader'><p>加载中...</p><span></span><span></span><span></span><span></span></div>");
    } else
    if (event == "remove") {
        $("#loader").remove();
    }
}

////我的门店的面向对象方法 GET,发送服务器内容
var getinfo = {
    //返回第1页,我的地盘首页的地图初入框的值
    page_1_search: function() {
        var info = $("#search_input").val();
        return info;
    },
    //返回第3页,选择的负责人的名称
    page_4_changeleader: function() {
        var info = $("#leader_val option:selected").text();
        return info;
    },

    //返回第3页,选择的负责人的名称,数组对象
    page_4_datetime: function() {
        var info = [];
        var a = $("#start_date").val();
        var b = $("#end_date").val();
        info.push([a, b]);
        return info;
    }
};