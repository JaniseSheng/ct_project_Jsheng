var activityView = (function ($, window) {

    //我的门店的面向对象方法 SET,显示html方法
    var myActive = {
        pageindex: "",
        //我的活动 标签页1
        setPage_myActive_1: function () {
            var head_1 = " <button data-effect='st-effect'><i class='icon-ic_menu_24px'></i></button><span>我的活动</span>";

            var wrapper_head = "<div class='w-container clearfix'><ul id='list'>";
            var wrapper_content_1 = "<li class='more-content'><a class='next' name='page_to_2'><i class='icon-file_calendar'></i>";
            var wrapper_content_2 = "<p>上海电信泰兴路营业厅上海电信泰兴路营业厅</p>";
            var wrapper_content_3 = "<span>2015-05-12</span>";
            var wrapper_content_4 = "<div class='active_state state state_progress'>进行中</div></a>";
            var wrapper_content_5 = "<i class='icon-ic_keyboard_arrow_right_24px'></i><div class='num'>8</div></li>";
            var wrapper_end = "</ul><a id='js_load_more' class='load-more'>加载更多...</a></div><script src='js/lib/sidebarEffects.js'></script>";

            var head = head_1;
            var wrapper_content = wrapper_content_1 + wrapper_content_2 + wrapper_content_3 + wrapper_content_4 + wrapper_content_5;
            var wrapper = wrapper_head + wrapper_content + wrapper_end;
            // wrapper_content
            $("#st-trigger-effects .header").html(head);
            $(".container").html(wrapper);

            //页面跳转
            // click_Evrnt.page_convert();

        },
        //营销活动管理 标签页2
        setPage_myActive_2: function () {
            var head_1 = " <button data-effect='st-effect' class='back' name='page_to_1'><i class='icon-ic_keyboard_arrow_left_24px'></i></button><span>营销活动管理</span>";
            var head_2 = "<a id='js_read' style='top: 0'><div class='js_is_read dot'></div><span>未读</span></a>";
            var wrapper_head = "<div class='w-container clearfix'><ul class='my-activity'>";
            var wrapper_content_1 = "<li id='js_sub_1'><a class='next' id='page_to_2_1' name='page_to_2_1'><div class='event-ic icon1'></div><h2 id='js_event_name'>低销零销门店管控（1.1-1.22）</h2><span id='js_event_start_time'>开始时间：2015-01-01</span></a></li>";
            //活动目标
            var wrapper_content_2 = "<li id='js_sub_2' style='display:none;'><a class='next' name='page_to_2_2'><div class='event-ic icon2'></div><p>活动目标</p></a></li>";
            //话术&脚本
            var wrapper_content_3 = "<li id='js_sub_3' style='display:none;'><a class='next' name='page_to_2_3'><div class='event-ic icon3'></div><p>话术&脚本</p></a></li>";
            //在线培训
            var wrapper_content_4 = "<li id='js_sub_4' style='display:none;'><a class='next' name='page_to_2_4'><div class='event-ic icon4'></div><p>在线培训</p></a></li>";
            //营销物料
            var wrapper_content_5 = "<li id='js_sub_5' style='display:none;'><a class='next' name='page_to_2_5'><div class='event-ic icon5'></div><p>在线考试</p></a></li>";
            //在线考试
            var wrapper_content_6 = "<li id='js_sub_6' style='display:none;'><a class='next' name='page_to_2_6'><div class='event-ic icon6'></div><p>营销物料</p></a></li>";
            //其他信息
            var wrapper_content_7 = "<li id='js_sub_7' style='display:none;'><a class='next' name='page_to_2_7'><div class='event-ic icon7'></div><p>其他信息</p></a></li>";
            var wrapper_end = "</ul></div>";

            var head = head_1 + head_2;
            var wrapper_content = wrapper_content_1 + wrapper_content_2 + wrapper_content_3 + wrapper_content_4 + wrapper_content_5 + wrapper_content_6 + wrapper_content_7;
            var wrapper = wrapper_head + wrapper_content + wrapper_end;
            $("#st-trigger-effects .header").html(head);
            $(".container").html(wrapper);
            //页面跳转
            // click_Evrnt.page_convert();
        },
        //营销活动管理_基础信息 标签页21
        setPage_myActive_2_1: function () {
            var head_1 = "<button data-effect='st-effect' class='back' name='page_to_2'><i class='icon-ic_keyboard_arrow_left_24px'></i></button><span>基础信息</span>";
            var head_2 = "<a id='js_read' style='top: 0'><div class='js_is_read dot'></div><span>未读</span></a>";
            var wrapper_head = "<div class='w-container clearfix'><ul class='act-grid'>";
            var wrapper_content_1 = "<li><p>营销活动名称 :</p><span id='js_event_name'>[专营活动]双节营销活动工作布置V2</span></li>";
            //活动目标
            var wrapper_content_2 = "<li><p>营销活动开始时间 :</p><span id='js_event_starttime'>2015-05-12</span></li>";
            //话术&脚本
            var wrapper_content_3 = "<li><p>营销活动结束时间 :</p><span id='js_event_endtime'>2015-05-12</span></li>";
            var wrapper_content_4 = "</ul><div class='outer'>";
            var wrapper_content_5 = "<div><span>营销活动描述</span><div id='js_active_Dsescription'><span id='js_event_description'>暂无信息.....</span></div></div>";
            var wrapper_content_6 = "<div><span>激励政策</span><div id='js_active_Incentive'><span id='js_event_incentive'>暂无信息.....</span></div></div>";
            var wrapper_content_7 = "<div><span>渠道销售准备要求</span><div id='js_active_Requirement'><span id='js_event_require'>暂无信息.....</span></div>";
            var wrapper_end = "</div></div></div>";

            var head = head_1 + head_2;
            var wrapper_content = wrapper_content_1 + wrapper_content_2 + wrapper_content_3 + wrapper_content_4 + wrapper_content_5 + wrapper_content_6 + wrapper_content_7;
            var wrapper = wrapper_head + wrapper_content + wrapper_end;
            $("#st-trigger-effects .header").html(head);
            $(".container").html(wrapper);
            //页面跳转
            // click_Evrnt.page_convert();
        },
        //营销活动管理_活动目标 标签页22
        setPage_myActive_2_2: function () {
            var head_1 = "<button data-effect='st-effect' class='back' name='page_to_2'><i class='icon-ic_keyboard_arrow_left_24px'></i></button><span>活动目标</span>";
            var head_2 = "<a id='js_read' style='top: 0'><div class='js_is_read dot'></div><span>未读</span></a>";
            var wrapper_head = "<div class='w-container clearfix'><ul id='list'>";
            var wrapper_content_1 = "<li class='target-content'><a name='page_to_2_'><i class='yellow icon-ic_star_outline_24px'></i>";
            //位置信息
            var wrapper_content_2 = "<p>专营渠道</p><p>北区</p><p>上海电信泰兴路营业厅上海电信泰兴路营业厅</p>";
            //数量信息
            var wrapper_content_3 = "<ul><li><h4>阶段:</h4><span>第1阶段</span></li><li><h4>数量:</h4><span>200</span></li></ul>";
            //时间信息
            var wrapper_content_4 = "<ul><li><span>2015-05-12</span></li><li><span>2015-05-12</span></li></ul>";

            var wrapper_end = "<div class='state'></div></a></li></ul><a class='load-more'>加载更多...</a></div>";

            var head = head_1 + head_2;
            var wrapper_content = wrapper_content_1 + wrapper_content_2 + wrapper_content_3 + wrapper_content_4;
            var wrapper = wrapper_head + wrapper_content + wrapper_end;
            $("#st-trigger-effects .header").html(head);
            $(".container").html(wrapper);
            //页面跳转
            // click_Evrnt.page_convert();
        },
        //营销活动管理_话术&脚本 标签页23
        setPage_myActive_2_3: function () {
            var head_1 = "<button data-effect='st-effect' class='back' name='page_to_2'><i class='icon-ic_keyboard_arrow_left_24px'></i></button><span>话术&脚本</span><a><span>已读</span></a>";
            var wrapper_head = "<div class='w-container clearfix'><ul id='list'>";
            var wrapper_content_1 = "<li class='more-content'><a class='next' name='page_to_2_3_1' ><i class='yellow icon-ic_star_24px'></i>";
            var wrapper_content_2 = "<p>[专营活动]双节营销活动工作布置V2</p><span>更新时间: 2015-05-12</span><span>袁俊</span></a></li>";
            var wrapper_end = "</ul><a class='load-more'>加载更多...</a></div>";

            var head = head_1;
            var wrapper_content = wrapper_content_1 + wrapper_content_2;
            var wrapper = wrapper_head + wrapper_content + wrapper_end;
            $("#st-trigger-effects .header").html(head);
            $(".container").html(wrapper);
            //页面跳转
            // click_Evrnt.page_convert();
        },
        //营销活动管理_话术&脚本_详细页 标签页231
        setPage_myActive_2_3_1: function () {
            var head_1 = " <button data-effect='st-effect' class='back' name='page_to_2_3'><i class='icon-ic_keyboard_arrow_left_24px'></i></button><span>话术&脚本</span>";
            var head_2 = "<a id='js_read' style='top: 0'><div class='js_is_read dot'></div><span>未读</span></a>";
            var wrapper_head = "<div class='w-container clearfix' id='js_scriptinfo'><ul class='act-grid'>";
            var wrapper_content_1 = "<li><p>活动名称</p><span>[专营活动]双节营销活动工作布置V2</span></li>";
            var wrapper_content_2 = "<li><p>更新人</p><span>袁俊</span></li>";
            var wrapper_content_3 = "<li><p>更新时间</p><span>2015-05-12</span></li>";
            var wrapper_content_4 = "</ul><div class='outer'>";
            var wrapper_content_5 = "<div><span>话术&脚本描述</span><div id='js_active_Script'><span>暂无信息.....</span></div></div>";
            var wrapper_end = "</div></div>";

            var head = head_1 + head_2;
            var wrapper_content = wrapper_content_1 + wrapper_content_2 + wrapper_content_3 + wrapper_content_4 + wrapper_content_5;
            var wrapper = wrapper_head + wrapper_content + wrapper_end;
            $("#st-trigger-effects .header").html(head);
            $(".container").html(wrapper);
            //页面跳转
            // click_Evrnt.page_convert();
        },
        //营销活动管理_在线培训 标签页24
        setPage_myActive_2_4: function () {
            var head_1 = "<button data-effect='st-effect' class='back' name='page_to_2'><i class='icon-ic_keyboard_arrow_left_24px'></i></button><span>在线培训</span>";
            var wrapper_head = "<div class='w-container clearfix'><ul id='list'>";
            var wrapper_content_1 = "<li class='more-content'><a class='next' name='page_to_2_4_1' ><i class='yellow icon-ic_star_24px'></i>";
            var wrapper_content_2 = "<p>[专营活动]双节营销活动工作布置V2</p>";
            var wrapper_content_3 = "<span>开始于: 2015-05-12</span><span>结束于: 2015-05-13</span>";
            var wrapper_content_4 = "</a></li></ul><a class='load-more'>加载更多...</a>";
            var wrapper_end = "</div>";

            var head = head_1;
            var wrapper_content = wrapper_content_1 + wrapper_content_2 + wrapper_content_3 + wrapper_content_4;
            var wrapper = wrapper_head + wrapper_content + wrapper_end;
            $("#st-trigger-effects .header").html(head);
            $(".container").html(wrapper);
            //页面跳转
            // click_Evrnt.page_convert();
        },
        //营销活动管理_在线培训_详细 标签页241
        setPage_myActive_2_4_1: function () {
            var head_1 = "<button data-effect='st-effect' class='back' name='page_to_2_4'><i class='icon-ic_keyboard_arrow_left_24px'></i></button><span>在线培训</span>";
            var head_2 = "<a id='js_read' style='top: 0'><div class='js_is_read dot'></div><span>未读</span></a>";
            var wrapper_head = "<div class='w-container clearfix'><ul class='act-grid'>";
            var wrapper_content_1 = "<li><p>培训主题</p><span>[专营活动]双节营销活动工作布置V2</span></li>";
            var wrapper_content_2 = "<li><p>培训类型</p><span>类型一</span></li>";
            var wrapper_content_3 = "<li><p>开始时间</p><span>2015-05-12</span></li>";
            var wrapper_content_4 = "<li><p>结束时间</p><span>2015-05-13</span></li>";
            var wrapper_content_5 = "</ul><div class='outer'>";
            var wrapper_content_6 = "<div><span>培训描述</span><div id='js_active_Script'><span>暂无信息.....</span></div></div>";
            var wrapper_end = "</div></div>";

            var head = head_1 + head_2;
            var wrapper_content = wrapper_content_1 + wrapper_content_2 + wrapper_content_3 + wrapper_content_4 + wrapper_content_5 + wrapper_content_6;
            var wrapper = wrapper_head + wrapper_content + wrapper_end;
            $("#st-trigger-effects .header").html(head);
            $(".container").html(wrapper);
            //页面跳转
            // click_Evrnt.page_convert();
        },
        //营销活动管理_营销物料 标签页25
        setPage_myActive_2_5: function () {
            var head_1 = "<button data-effect='st-effect' class='back' name='page_to_2'><i class='icon-ic_keyboard_arrow_left_24px'></i></button><span>营销物料</span>";
            var head_2 = "<a id='js_read' style='top: 0'><div class='js_is_read dot'></div><span>未读</span></a>";
            var wrapper_head = "<div class='w-container clearfix'><ul class='act-grid'>";
            var wrapper_content_1 = "<li><p>物料种类及数量 :</p><span>100个</span></li>";
            var wrapper_content_2 = "<li><p>物料配比原则</p><span>原则一</span></li>";
            var wrapper_content_3 = "<li><p>物料摆放原则</p><span>原则一</span></li>";
            var wrapper_content_4 = "<li><p>物料签收及联系人</p><span>李三</span></li>";
            var wrapper_content_5 = "<li><p>物料签管理人</p><span>张三</span></li>";
            var wrapper_end = "</ul></div>";

            var head = head_1 + head_2;
            var wrapper_content = wrapper_content_1 + wrapper_content_2 + wrapper_content_3 + wrapper_content_4 + wrapper_content_5;
            var wrapper = wrapper_head + wrapper_content + wrapper_end;
            $("#st-trigger-effects .header").html(head);
            $(".container").html(wrapper);
            //页面跳转
            // click_Evrnt.page_convert();
        },
        //营销活动管理_在线考试 标签页26
        setPage_myActive_2_6: function () {
            var head_1 = "<button data-effect='st-effect' class='back' name='page_to_2'><i class='icon-ic_keyboard_arrow_left_24px'></i></button><span>在线考试</span>";
            var wrapper_head = "<div class='w-container clearfix'><ul class='act-grid'><li>";
            var wrapper_content_1 = "<p>选择试卷</p>";
            var wrapper_content_2 = "<form><select style='padding: 6px 12px;'><option value=''>双节营销</option><option value=''>单节营销</option></select></form></li>";
            var wrapper_content_3 = "<li><p>测试主题</p><span>类型一</span></li>";
            var wrapper_content_4 = "<li><p>开始时间</p><span>2015-05-12</span></li>";
            var wrapper_content_5 = "<li><p>结束时间</p><span>2015-05-13</span></li>";
            var wrapper_content_6 = "<li><p>是否做过</p><span>已做</span></li>";
            var wrapper_content_7 = "</ul><div style='margin-bottom: 24px'><a href='#' target='_blank' class='button green'>进入考试系统</a>";
            var wrapper_end = "</div></div>";

            var head = head_1;
            var wrapper_content = wrapper_content_1 + wrapper_content_2 + wrapper_content_3 + wrapper_content_4 + wrapper_content_5 + wrapper_content_6 + wrapper_content_7;
            var wrapper = wrapper_head + wrapper_content + wrapper_end;
            $("#st-trigger-effects .header").html(head);
            $(".container").html(wrapper);
            //页面跳转
            // click_Evrnt.page_convert();
        },
        //营销活动管理_其他 标签页27
        setPage_myActive_2_7: function () {
            var head_1 = "<button data-effect='st-effect' class='back' name='page_to_2'><i class='icon-ic_keyboard_arrow_left_24px'></i></button><span>其他</span>";
            var head_2 = "<a id='js_read' style='top: 0'><div class='js_is_read dot'></div><span>未读</span></a>";
            var wrapper_head = "<div class='w-container clearfix'>";
            var wrapper_content_1 = "<div style='display: inline-block;margin-top: 24px;margin-bottom: 24px'><span>其他描述</span>";
            var wrapper_end = "</div></div>";
            var head = head_1 + head_2;
            var wrapper_content = wrapper_content_1;
            var wrapper = wrapper_head + wrapper_content + wrapper_end;
            $("#st-trigger-effects .header").html(head);
            $(".container").html(wrapper);
            //页面跳转
            // click_Evrnt.page_convert();
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
                    console.log("动作完成");
                });
            });
        },
        animate_back: function () {
            $('div.container,div.header').addClass(animate_index.fadeOutRight).one(animate_index.animationEnd, function () {
                $(this).removeClass(animate_index.fadeOutRight);
                $(this).addClass(animate_index.fadeInLeft).one(animate_index.animationEnd, function () {
                    $(this).removeClass(animate_index.fadeInLeft);
                    console.log("动作完成");
                });
            });
        }

    };

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
                alert("发送签到信息");
                $(othername).css("display", "none");
            });
            $("ul.dd-reg li:last").on('click', function () {
                alert("发送签出信息");
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
        page_convert: function () {

            $('.next').off('click').on('click', function (e) {
                var pageindex = $(this).attr("name");
                animate_index.animate_next();
                //跳转到第2页面
                if (pageindex == "page_to_2") {
                    setTimeout("myActive.setPage_myActive_2()", 200);
                } else if (pageindex == "page_to_2_1") {
                    setTimeout("myActive.setPage_myActive_2_1()", 200);
                } else if (pageindex == "page_to_2_2") {
                    setTimeout("myActive.setPage_myActive_2_2()", 200);
                } else if (pageindex == "page_to_2_3") {
                    setTimeout("myActive.setPage_myActive_2_3()", 200);
                } else if (pageindex == "page_to_2_3_1") {
                    setTimeout("myActive.setPage_myActive_2_3_1()", 200);
                } else if (pageindex == "page_to_2_4_1") {
                    setTimeout("myActive.setPage_myActive_2_4_1()", 200);
                } else if (pageindex == "page_to_2_4") {
                    setTimeout("myActive.setPage_myActive_2_4()", 200);
                } else if (pageindex == "page_to_2_5") {
                    setTimeout("myActive.setPage_myActive_2_5()", 200);
                } else if (pageindex == "page_to_2_6") {
                    setTimeout("myActive.setPage_myActive_2_6()", 200);
                } else if (pageindex == "page_to_2_7") {
                    setTimeout("myActive.setPage_myActive_2_7()", 200);
                }
            });

            $('.back').off('click').on('click', function (e) {
                var pageindex = $(this).attr("name");
                animate_index.animate_next();
                //跳转到第2页面
                if (pageindex == "page_to_2") {
                    setTimeout("myActive.setPage_myActive_2()", 200);
                } else if (pageindex == "page_to_1") {
                    setTimeout("myActive.setPage_myActive_1()", 200);
                } else if (pageindex == "page_to_2_4") {
                    setTimeout("myActive.setPage_myActive_2_4()", 200);
                } else if (pageindex == "page_to_2_3") {
                    setTimeout("myActive.setPage_myActive_2_3()", 200);
                }
            });
        }
    };

    return myActive;
})($, window);


//state 状态事件切换
var mystate = {
    /*    第一页配置内容*/
    //进行中或者已结束状态切换 0是进行中,1是以结束
//    state_Progress: function (state) {
//        switch (state) {
//            case 0:
//            {
//                $(".active_state").removeClass("state_end").addClass("state_progress");
//                $(".active_state").text("进行中");
//                break;
//            }
//            case 1:
//            {
//                $(".active_state").removeClass("state_progress").addClass("state_end");
//                $(".active_state").text("已结束");
//                break;
//            }
//        }
//    },
//    //红色球内的数字
//    state_Mum: function (index) {
//        if (index > 0) {
//            $("#list .more-content div.num").css("visibility", "visible");
//            $("#list .more-content div.num").text(index);
//        } else {
//            $("#list .more-content div.num").css("visibility", "hidden");
//        }
//    },
    //营销活动管理 已读状态 0是未读,1是已读
    state_read: function (state) {
        switch (state) {
            case "0":
            {
                $(".js_is_read").removeClass("done_read");
                $(".js_is_read").next().text("未读");
                break;
            }
            case "1":
            {
                $(".js_is_read").addClass("done_read");
                $(".js_is_read").next().text("已读");
                break;
            }
        }
    }
};