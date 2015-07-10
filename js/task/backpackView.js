"use strict";

var backpackView = (function () {

//我的门店的面向对象方法 SET,显示html方法
//    var myBackPack = {
//        var pageindex= "";
    //今日任务 我的计划
    var setPage_myBackPack_1 = function () {

        var head_1 = "<button data-effect='st-effect'><i class='icon-ic_menu_24px'></i></button><span>我的背包</span><a id='reg'><i class='icon-id'></i></a>";
        var head_2 = "<ul id='dd-reg' class='dd-reg'><li><a class='next' name='page_to_1_1'>签 到</a></li><li><a class='next' name='page_to_1_2'>签 出</a></li></ul>";

        var wrapper_1 = "<div class='w-container clearfix'><div class='tab-panels'><ul id='bp-tabs' class='tabs'><li><a id='js_tadyTask' rel='panel1' href='#' class='tab activ'>今日任务</a></li><li><a id='js_myPlan' rel='panel2' href='#' class='tab'>我的计划</a></li></ul>";
        //panel1部分---今日任务
        var panel1_head = "<div class='panel activ'><ul id='list'>";

        //日常任务
        var panel1_content_1_1 = "<li><h2>日常任务</h2><ul id='js_task0'>";
        var panel1_content_1_2 = "<li class='sub-content'><a class='next' name='page_to_2'><i class='icon-check_o'></i><p>暂无信息......</p><span>2015-05-12</span></a></li>";
        var panel1_content_1_3 = "</ul></li>";
        var panel1_content_1 = panel1_content_1_1 + panel1_content_1_2 + panel1_content_1_3;
        //日常任务
        var panel1_content_2_1 = "<li><h2>周期任务</h2><ul id='js_task1'>";
        var panel1_content_2_2 = "<li class='sub-content'><a class='next' name='page_to_2'><i class='icon-check_o'></i><p>暂无信息......</p><span>2015-05-12</span></a></li>";
        var panel1_content_2_3 = "</ul></li>";
        var panel1_content_2 = panel1_content_2_1 + panel1_content_2_2 + panel1_content_2_3;
        //专项任务
        var panel1_content_3_1 = "<li><h2>专项任务</h2><ul id='js_task2'>";
        var panel1_content_3_2 = "<li class='sub-content'><a class='next' name='page_to_2'><i class='icon-check_o'></i><p>暂无信息......</p><span>2015-05-12</span></a></li>";
        var panel1_content_3_3 = "</ul></li>";
        var panel1_content_3 = panel1_content_3_1 + panel1_content_3_2 + panel1_content_3_3;
        //整体列表可做循环处理
        var panel1_content = panel1_content_1 + panel1_content_2 + panel1_content_3;
        var panel1_end = "</ul></div>";
        var panel1 = panel1_head + panel1_content + panel1_end;
        //panel2部分---我的计划
        var panel2_head = "<div class='panel'><div class='sub-tab-panels'><ul class='sub-tabs'><li id='js_cld'><a id='js_Calendar' rel='sub-panel1' class='sub-tab activ'>日 历</a></li><li><a id='js_Search' rel='sub-panel2' class='sub-tab'>搜 索</a></li></ul>";
        //日历
        var panel2_sub_panel1_1 = "<div class='sub-panel activ'><div class='calendar' id='fullcalendar'></div><div id='calendar_state'><span>未完成</span><span>已完成</span><span>今天</span></div><ul id='list'>";
        var panel2_sub_panel1_2_1 = "<li><h2>搜索结果</h2><ul id='js_trouble'>";
        var panel2_sub_panel1_2_2 = "<li class='sub-content'><a class='next' name='page_to_2'><i class='icon-check_o'></i><p>上海电信泰兴路营业厅上海电信泰兴路营业厅</p><span>2015-05-12</span></a></li>";
        var panel2_sub_panel1_2_3 = "</ul></li><li><h2>专项任务</h2><ul id = 'js_special'><ul></li>";
        var panel2_sub_panel1_2 = panel2_sub_panel1_2_1 + panel2_sub_panel1_2_2 + panel2_sub_panel1_2_3;
        var panel2_sub_panel1 = panel2_sub_panel1_1 + panel2_sub_panel1_2;
        //搜索
        var panel2_sub_panel2_1 = "</ul></div><div class='sub-panel'><div class='details'>";
        //巡店人员
        var panel2_sub_panel2_2_1 = "<div><i class='icon-user'></i><p>巡店人员:</p></div><form><i class='icon-ic_keyboard_arrow_down_24px'></i><select id='js_plan_Employee'>";
        var panel2_sub_panel2_2_2 = "<option value=''>Select a Dinner</option>";
        //巡店类型
        var panel2_sub_panel2_3_1 = "</select></form><div><i class='icon-approximately'></i><p>巡店类型:</p></div><form><i class='icon-ic_keyboard_arrow_down_24px'></i><select id='js_plan_Type'>";
        var panel2_sub_panel2_3_2 = " <option value=''>Select a Dinner</option>";
        //巡店状态
        var panel2_sub_panel2_4_1 = "</select></form><div><i class='icon-walking'></i><p>巡店状态:</p></div><form><i class='icon-ic_keyboard_arrow_down_24px'></i><select id='js_plan_State'>";
        var panel2_sub_panel2_4_2 = "<option value=''>Create a drop-down list with four options:</option>";
        //巡店时间
        var panel2_sub_panel2_5_1 = "</select></form><div><i class='icon-calendar'></i><p>巡店时间：</p></div><form><input id='js_plan_Starttime' type='date' name='time' placeholder='起始日期'/><input id='js_plan_endtime' type='date' name='time' placeholder='结束日期'/></form><a id='js_plan_Search' class='button green next' name='page_to_2'>搜 索</a><ul id='sub-list'>";
        //计划任务
        var panel2_sub_panel2_6_1 = "<li><h2>计划任务</h2><ul>";
//        var panel2_sub_panel2_6_2 = "<li class='sub-content'><a class='next' name='page_to_2'><i class='icon-check_o'></i><p>上海电信泰兴路营业厅上海电信泰兴路营业厅</p><span>2015-05-12</span></a></li>";
        var panel2_sub_panel2 = panel2_sub_panel2_1 + panel2_sub_panel2_2_1 + panel2_sub_panel2_2_2 + panel2_sub_panel2_3_1 + panel2_sub_panel2_3_2 + panel2_sub_panel2_4_1 + panel2_sub_panel2_4_2 + panel2_sub_panel2_5_1 + panel2_sub_panel2_6_1;

        var panel2 = panel2_head + panel2_sub_panel1 + panel2_sub_panel2;
        var wrapper_End = "</ul></li></ul></div></div></div></div></div><script src='js/lib/sidebarEffects.js'></script></div>";

        var head = head_1 + head_2;
        var wrapper = wrapper_1 + panel1 + panel2 + wrapper_End;
        $("#st-trigger-effects .header").html(head);
        $(".container").html(wrapper);

        //添加日历
        //设置签到签出效果
        click_Evrnt.click_checkin("#reg", "ul.dd-reg");

        //控制今日任务 和 我的计划板块的切换
        click_Evrnt.select_tab_panel("li .tab", "div .panel");
        //控制日历 和 搜索的板块切换
        click_Evrnt.select_tab_panel("li .sub-tab", "div .sub-panel");

        //页面跳转
//            click_Evrnt.page_convert();
    };
    //签到页面
    var setPage_myBackPack_1_1 = function () {

        var head_1 = "<button data-effect='st-effect' class='back' name='page_to_1'><i class='icon-ic_keyboard_arrow_left_24px'></i></button><span>门店签到</span>";

        var wrapper_head = "<div class='w-container clearfix'><ul class='act-grid'>";
        var wrapper_content_1 = "<li><p>签到地点</p><form><select id='js_select' style='padding: 6px 12px;'>";
        var wrapper_content_2 = "<option value='' selected='true' disabled='true'>选择签到门店</option>";
        var wrapper_content_3 = "<option value=''>门店1</option><option value=''>门店2</option><option value=''>门店3</option></select></form></li>";
        var wrapper_content_4 = "<li><p>目的地址</p><span id='js_address'>静安区泰兴路218号</span></li>";
        var wrapper_content_5 = "<li><p>我的位置</p><span>获取中......</span></li></ul><div class='store_sgin'>";
        var wrapper_content_6 = "<div><a class='button purple'>定&nbsp;&nbsp;&nbsp;&nbsp;位</a></div>";
        var wrapper_content_7 = "<a class='pic_file button yellow'><form id='js_img' enctype='multipart/form-data'><input class='file_input' type='file' id='js_img_1' name='IMAGEFILE'  accept='image/*' capture'camera'></form>拍  照</a>";
        var wrapper_content_8 = "<mark>使用帮助:</mark><mark>使用定位功能前,请确保打开手机的GPS功能</mark>";
        var wrapper_End = "</div></div>";

        var head = head_1;
        var wrapper = wrapper_head + wrapper_content_1 + wrapper_content_2 + wrapper_content_3 + wrapper_content_4 + wrapper_content_5 + wrapper_content_6 + wrapper_content_7 + wrapper_content_8 + wrapper_End;
        $("#st-trigger-effects .header").html(head);
        $(".container").html(wrapper);

        //页面跳转
//            click_Evrnt.page_convert();
    };
    //签出页面
    var setPage_myBackPack_1_2 = function () {

        var head_1 = "<button data-effect='st-effect' class='back' name='page_to_1'><i class='icon-ic_keyboard_arrow_left_24px'></i></button><span>门店签出</span>";


        var wrapper_head = "<div class='w-container clearfix'><ul class='act-grid'>";
        var wrapper_content_1 = "<li><p>签出地点</p><form><select style='padding: 6px 12px;'>";
        var wrapper_content_2 = "<option value='' selected='true' disabled='true'>选择签到出店</option>";
        var wrapper_content_3 = "<option value=''>门店1</option><option value=''>门店2</option><option value=''>门店3</option></select></form></li>";
        var wrapper_content_4 = "<li><p>目的地址</p><span>静安区泰兴路218号</span></li>";
        var wrapper_content_5 = "<li><p>我的位置</p><span>获取中......</span></li></ul><div class='store_sgin'>";
        var wrapper_content_6 = "<div><a class='button purple'>定&nbsp;&nbsp;&nbsp;&nbsp;位</a></div>";
        var wrapper_content_7 = "<div><a class='button green'>确认签出</a></div>";
        var wrapper_content_8 = "<mark>使用帮助:</mark><mark>使用定位功能前,请确保打开手机的GPS功能</mark>";
        var wrapper_End = "</div></div>";

        var head = head_1;
        var wrapper = wrapper_head + wrapper_content_1 + wrapper_content_2 + wrapper_content_3 + wrapper_content_4 + wrapper_content_5 + wrapper_content_6 + wrapper_content_7 + wrapper_content_8 + wrapper_End;
        $("#st-trigger-effects .header").html(head);
        $(".container").html(wrapper);

        //页面跳转
//            click_Evrnt.page_convert();
    };
    //搜索 和 日历
    var setPage_myBackPack_2 = function () {
        //第2页

        var head_1 = "<button data-effect='st-effect' class='back' name='page_to_1'><i class='icon-ic_keyboard_arrow_left_24px'></i></button><span>巡店任务</span><a id='upload'><i class='icon-ic_backup_24px'></i></a>";

        var wrapper_1 = "<div id='scroller' class='w-container clearfix'><ul class='infor'>";
        //所在门店
        var store_1 = "<li><i class='icon-home'></i><p>所在门店：</p><span>共连上海莲花南路营业厅</span></li>";
        //所属渠道
        var store_2 = "<li><i class='icon-net_closed'></i><p>所属渠道：</p><span>共连上海莲花南路营业厅</span></li>";
        //门店地址
        var store_3 = "<li><i class='icon-map_route'></i><p>门店地址：</p><span>莲花南路1098号莲花南路1098号莲花南路1098号莲花南路1098号莲花南路1098号</span></li>";
        //负责导购
        var store_4 = "<li><i class='icon-user'></i><p>负责导购：</p><span>共连上海莲花南路营业厅</span></li>";
        //storeh合集
        var store = store_1 + store_2 + store_3 + store_4;
        //tab_panel1_head
        var tab_panel_head = "</ul><div class='tab-panels'><ul id='con-tabs' class='tabs'>";
        //tabpanel列表部分
        var tab_panel1_li = "<li><a rel='panel1' class='SearchStore tab activ'>活动露出</a></li>";
        var tab_panel2_li = "<li><a rel='panel2' class='SearchStore tab'>活动执行</a></li>";
        var tab_panel3_li = "<li><a rel='panel3' class='SearchStore tab'>销售方法</a></li>";
        var tab_panel4_li = "<li><a rel='panel4' class='SearchStore tab'>终端上柜及备货</a></li>";
        var tab_panel5_li = "<li><a rel='panel4' class='SearchStore tab'>专项工作</a></li>";
        var tab_panel_end = "</ul>";
        //tabpanel合集
        var tab_panel = tab_panel_head + tab_panel1_li + tab_panel2_li + tab_panel3_li + tab_panel4_li + tab_panel5_li + tab_panel_end;

        //panel1内容部分
        var panel1_div_head = "<div id = 'js_data'><div class='panel activ'><ul class='assessment'>";
        var panel1_div_li_head = "<li><h2>检查终端库存是否达到要求</h2><form><select>";
        var panel1_div_li_option = "<option value=''>0</option>";
        var panel1_div_li_content = "</select></form><span>少一台扣1分，扣完为止</span><textarea name='content' placeholder='备注:'></textarea><mark class='form-message'>Statement Or Account Of The Main Points Of Something</mark></li>";
        var panel1_div_end = "</ul></div>";
        //此列表内容可以循环添加使用
        var panel1_div_li = panel1_div_li_head + panel1_div_li_option + panel1_div_li_content;
        //panel1 div内容合集
        var panel1_div = panel1_div_head + panel1_div_li + panel1_div_end;

        //panel2内容部分
        var panel2_div_head = "<div class='panel'><ul class='assessment'>";
        var panel2_div_li_head = "<li><h2>检查终端库存是否达到要求</h2><form><select>";
        var panel2_div_li_option = "<option value=''>0</option>";
        var panel2_div_li_content = "</select></form><span>少一台扣1分，扣完为止</span><textarea name='content' placeholder='备注:'></textarea><mark class='form-message'>Statement Or Account Of The Main Points Of Something</mark></li>";
        var panel2_div_end = "</ul></div>";
        //此列表内容可以循环添加使用
        var panel2_div_li = panel2_div_li_head + panel2_div_li_option + panel2_div_li_content;
        //panel1 div内容合集
        var panel2_div = panel2_div_head + panel2_div_li + panel2_div_end;

        //panel3内容部分
        var panel3_div_head = "<div class='panel'><ul class='assessment'>";
        var panel3_div_li_head = "<li><h2>检查终端库存是否达到要求</h2><form><select>";
        var panel3_div_li_option = "<option value=''>0</option>";
        var panel3_div_li_content = "</select></form><span>少一台扣1分，扣完为止</span><textarea name='content' placeholder='备注:'></textarea><mark class='form-message'>Statement Or Account Of The Main Points Of Something</mark></li>";
        var panel3_div_end = "</ul></div>";
        //此列表内容可以循环添加使用
        var panel3_div_li = panel3_div_li_head + panel3_div_li_option + panel3_div_li_content;
        //panel3 div内容合集
        var panel3_div = panel3_div_head + panel3_div_li + panel3_div_end;

        //panel4内容部分
        var panel4_div_head = "<div class='panel'><ul class='assessment'>";
        var panel4_div_li_head = "<li><h2>检查终端库存是否达到要求</h2><form><select>";
        var panel4_div_li_option = "<option value=''>0</option>";
        var panel4_div_li_content = "</select></form><span>少一台扣1分，扣完为止</span><textarea name='content' placeholder='备注:'></textarea><mark class='form-message'>Statement Or Account Of The Main Points Of Something</mark></li>";
        var panel4_div_end = "</ul></div>";
        //此列表内容可以循环添加使用
        var panel4_div_li = panel4_div_li_head + panel4_div_li_option + panel4_div_li_content;
        //panel4 div内容合集
        var panel4_div = panel4_div_head + panel4_div_li + panel4_div_end;

        //panel5内容部分
        var panel5_div_head = "<div class='panel'><h2 id='real_Name'>实名制</h2><ul class='assessment'>";
        var panel5_div_li_head = "<li><h2>检查终端库存是否达到要求</h2><form><select>";
        var panel5_div_li_option = "<option value=''>0</option>";
        var panel5_div_li_content = "</select></form><span>少一台扣1分，扣完为止</span><textarea name='content' placeholder='备注:'></textarea><mark class='form-message'>Statement Or Account Of The Main Points Of Something</mark></li>";
        var panel5_div_end = "</ul></div></div>";

        //此列表内容可以循环添加使用
        var panel5_div_li = panel5_div_li_head + panel5_div_li_option + panel5_div_li_content;
        //panel4 div内容合集
        var panel5_div = panel5_div_head + panel5_div_li + panel5_div_end;

        var submit_button = "<a id='js_submit' class='button green'>提 交</a>";
        var wrapper_end = "</div></div>";


        var head = head_1;
        var wrapper = wrapper_1 + store + tab_panel + panel1_div + panel2_div + panel3_div + panel4_div + panel5_div + submit_button + wrapper_end;
        $("#st-trigger-effects .header").html(head);
        $(".container").html(wrapper);

        //切换任务巡店板块
        click_Evrnt.select_tab_panel("li .tab", "div .panel");
        //页面跳转
//            click_Evrnt.page_convert();
    };
//    };





    //点击空白处清楚搜索框
    function clickempty(btname, ergname) {
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
                        //$("#search_input").val("");
                    }
                }
            }
        });
    }

////我的背包的面向对象方法 GET,发送服务器内容
    var getinfo = {
        //我的计划-搜索-巡店人员
        plan_Employee: function () {
            var info = $(".activ #js_plan_Employee").find("option:selected").text();
            return info;
        },
        //我的计划-搜索-巡店类型
        plan_type: function () {
            var info = $(".activ #js_plan_Type").find("option:selected").text();
            return info;
        },
        //我的计划-搜索-巡店状态
        plan_state: function () {
            var info = $(".activ #js_plan_State").find("option:selected").text();
            return info;
        },
        //我的计划-搜索-巡店时间
        plan_datatime: function () {
            var info = [];
            var a = $(".activ #js_plan_Starttime").val();
            var b = $(".activ #js_plan_endtime").val();
            info.push([a, b]);
            return info;
        },
        //返回巡店任务提交内容
        plan_task: function () {
            var info = [];
            var li_length = $(".activ .assessment li").length;

            for (var i = 0; i < li_length; i++) {
                var info1 = $(".activ .assessment li form select").eq(i).find("option:selected").text();
                var info2 = $(".activ .assessment li textarea").eq(i).val();
                info.push([info1, info2]);
            }
            return info;
        }
    };

    window.animate_index = {
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
    };

    return {
        setPage_myBackPack_1: setPage_myBackPack_1,
        setPage_myBackPack_1_1: setPage_myBackPack_1_1,
        setPage_myBackPack_1_2: setPage_myBackPack_1_2,
        setPage_myBackPack_2: setPage_myBackPack_2
    };
})();

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
    click_checkin: function (btname, othername) {
        $(btname).click(function () {
            $(othername).toggle(100);
            $(othername).addClass(animate_index.fadeInDown).one(animate_index.animationEnd, function () {
                $(this).removeClass(animate_index.fadeInDown);
            });
        });
        $("ul.dd-reg li:first").on('click', function () {

            $(othername).css("display", "none");
        });
        $("ul.dd-reg li:last").on('click', function () {

            $(othername).css("display", "none");
        });
    },
    //点击今日任务,我的计划,日历,搜索的按钮效果及其板块切换
    select_tab_panel: function (tab_name, panelname) {
        $(tab_name).on('click', function () {
            var index_mun = $(tab_name).index(this);
            $(this).addClass("activ");
            $(tab_name).slice(0, index_mun).removeClass("activ");
            $(tab_name).slice(index_mun + 1).removeClass("activ");
            //tab对应的panel,控制其显示消失
            $(panelname).eq(index_mun).addClass("activ");
            $(panelname).slice(0, index_mun).removeClass("activ");
            $(panelname).slice(index_mun + 1).removeClass("activ");
        });
    },
    // page_convert: function () {

    //     $('.next').off('click').on('click', function (e) {
    //         var pageindex = $(this).attr("name");
    //         animate_index.animate_next();
    //         //跳转到第2页面
    //         if (pageindex == "page_to_2") {
    //             setTimeout(setPage_myBackPack_2, 200);
    //         } else if (pageindex == "page_to_1_1") {
    //             setTimeout(setPage_myBackPack_1_1, 200);
    //         } else if (pageindex == "page_to_1_2") {
    //             setTimeout(setPage_myBackPack_1_2, 200);
    //         }
    //     });

    //     $('.back').off('click').on('click', function (e) {
    //         var pageindex = $(this).attr("name");
    //         animate_index.animate_next();
    //         //跳转到第2页面
    //         if (pageindex == "page_to_1") {
    //             setTimeout(setPage_myBackPack_1, 200);
    //         }
    //     });
    // }
};