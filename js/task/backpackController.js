/* global template */
/* global $ */
/* global saveData */
/* global BMAP_STATUS_SUCCESS */
/* global console, backpackView, backpackModule, dateTools, moment, storeModule, click_Evrnt, imgInterface, queryData, GetDistance, BMap, imgInterfacece, */

"use strict";

var backpackController = (function (backpackModule, backpackView, storeModule, element, baiduMap) {

    var user;

    window.saveData = window.saveData || {};
    saveData.today = {};
    saveData.myPlan = {};
    saveData.myPlan.planTask = {};

    //保存用户信息到backpackController
    function setUser(loginUser) {
        user = loginUser;
    }


    function pageToday() {
        backpackView.setPage_myBackPack_1();
        //今日任务
        backpackModule.todayTask(user, function (rs) {
            console.log(rs);
            var html = element.getTodayTasksPage(rs);
            $('#list').html(html);
            //专项任务;
            var today = dateTools.formatDate(new Date());
            backpackModule.specialPlanList(user, today, today, function (e) {
                console.log(e);
                var html = element.getTodaySpecialTasksPage(e);
                $('#js_task_2').html(html);

                //专项任务
                $('#js_task_2 li').on('click', function () {
                    var id = $('#js_task_2 li').index(this);
                    console.log(id);
                    var taskInfo = e[id];
                    pageTask(taskInfo);
                });
            });


            //日常任务
            $('#js_task_0 li').on('click', function () {
                var id = $('#js_task_0 li').index(this);
                console.log(id);
                var taskInfo = rs[0].ITEMLIST[id];
                pageTask(taskInfo);

            });
            //周期任务
            $('#js_task_1 li').on('click', function () {
                var id = $('#js_task_1 li').index(this);
                console.log(id);
                var taskInfo = rs[1].ITEMLIST[id];
                pageTask(taskInfo);
            });
        });



        //我的计划，日历
        $('#js_myPlan').one('click', function () {
            setTimeout(function () {
                showCalendar();
            }, 200);
        });

        //搜索
        $('#js_Search').one('click', function () {
            searchTasks(user);
        });

        //签到签出
        $('#dd-reg li:first-child').on('click', function () {
            accetp("signIn");
            console.log("签到页面");

            $('.back').on('click', function () {
                pageToday();
            });
        });
        $('#dd-reg li:last-child').on('click', function () {
            accetp("signOut");
            console.log("签出页面");

            $('.back').on('click', function () {
                pageToday();
            });
        });
    }

    //任务详情页
    function pageTask(data) {
        var taskinfo = data;
        var taskData = [];

        //日常任务和周期任务
        if (taskinfo.TASKTYPE === "0" || taskinfo.TASKTYPE === "1") {
            //显示页面
            backpackView.setPage_myBackPack_2();
            //门店信息
            storeModule.queryStoreDetail(user, taskinfo.STOREID, function (rs) {
                console.log(rs);
                var html = element.getStoreInfoPage(rs);
                $('.infor').html(html);
            });
            //请求任务填表信息
            backpackModule.tourShop(user, taskinfo.TASKID, function (rs) {
                console.log(rs);

                var taskHtml = element.getTaskDetailPage(rs);
                console.log(taskHtml.taskRs);

                taskData = taskHtml.taskRs;
                //显示页面
                $('#con-tabs').html(taskHtml.titleTable);
                $('#con-tabs li:first-child a').addClass("activ");
                $('#js_data').html(taskHtml.infoTable);
                $('#js_data div:first-child').addClass("activ");
                click_Evrnt.select_tab_panel("li .tab", "div .panel");
                //绑定上传图片
                $("form#js_img").bind('change', function () {
                    console.log();
                    uploadImage('js_img', function (e) {
                        console.log(e.IMAGEID);
                        var imageid = e.IMAGEID;
                        $("form#js_img").find(":input").attr("data", imageid);
                    });
                });
            });
            //专项任务
        } else if (taskinfo.TASKTYPE === "2") {

            $('.infor').hide();
            backpackModule.specialPlanUnFinish(user, taskinfo.TASKID, function (rs) {
                console.log(rs);
                if (rs === "" || rs === undefined) {
                    
                    return null;
                }
                //显示页面
                backpackView.setPage_myBackPack_2();
                //自定义页面模版
                if (rs.type === 1) {
                    var taskHtml = element.getSimpleSpecialTaskDetailPage(rs);
                    taskData = taskHtml.taskRs;
                    $("#con-tabs").hide();
                    //备注
                    var div = '<br/><hr/><div class="panel activ"><ul class="assessment"><li><h2>备注：</h2><textarea class="js_textarea" name="content" placeholder="备注:"></textarea></li></ul></div>';
                    $("#js_data").html(taskHtml.info).append(div);
                    //提交专项任务(自定义模版);
                    $("#js_submit").unbind().on("click", function () {
                        console.log(taskData);
                        var result = $(".js_textarea").val();
                        backpackModule.uploadSpecialSimpleTaskData(user, taskinfo.TASKID, taskData.patrolContentType, result, function (e) {
                            console.log(e);
                        });
                    });

                    //套用日常和周期任务页面模版
                } else if (rs.type === 2) {
                    var taskHtml = element.getTaskDetailPage(rs);
                    taskData = taskHtml.taskRs;
                    //显示页面
                    $('#con-tabs').html(taskHtml.titleTable);
                    $('#con-tabs li:first-child a').addClass("activ");
                    $('#js_data').html(taskHtml.infoTable);
                    $('#js_data div:first-child').addClass("activ");
                    click_Evrnt.select_tab_panel("li .tab", "div .panel");
                    //绑定上传图片
                    $("form#js_img").bind('change', function () {
                        console.log();
                        uploadImage('js_img', function (e) {
                            console.log(e.IMAGEID);
                            var imageid = e.IMAGEID;
                            $("form#js_img").find(":input").attr("data", imageid);

                        });
                    });
                    //提交专项任务(专项模版);
                    $("#js_submit").unbind().on("click", function () {
                        console.log(taskData);
                        //模版类型(1.自定义模版,2.专项模版)
                        var contentType = "2";
                        backpackModule.uploadSpecialTaskData(user, taskinfo.TASKID, contentType, taskData, function (e) {
                            console.log(e);
                        });
                    });
                }
            });
        }
        //提交日常任务和周期任务
        $('#js_submit').on("click", function () {
            console.log(taskData);
            console.log("提交任务");

            var result = getTaskData(taskData);
            console.log(result);
            backpackModule.uploadTask(user, taskinfo.STOREID, taskinfo.TASKTYPE, taskinfo.TASKID, result, function (rs) {
                console.log(rs);
            });
        });

        $('.back').on('click', function () {
            pageToday();
        });
    }
    //日常任务和周期任务处理上传数据
    function getTaskData(data) {
        var rs = data;
        var arr = gettraverse("ID", rs);
        for (var i = 0; i < arr.length; i++) {
            var item = arr[i];
            if (item.ID !== undefined) {
                var select = '#' + item.ID + ' select';
                var textArea = "#" + item.ID + ' textarea';
                var image = '#img' + item.ID;
                //输出是否项或分数项
                if (item.ITEMTYPE === "0") {

                    item.QUALIFIED = $(select).val();
                } else if (item.ITEMTYPE === "1") {
                    item.SCORE = $(select).val();
                }
                item.REMARK = $(textArea).val();
                item.IMAGEID.push($(image).attr("data"));
            }
        }
        return rs;
    }
    //显示任务历史结果页面
    function pageTaskHistory(data) {
        var taskinfo = data;


        //日常任务
        if (taskinfo.TASKTYPE === "0" || taskinfo.TASKTYPE === "1") {
            backpackView.setPage_myBackPack_2();
            $('#js_submit').hide();
            //门店信息
            storeModule.queryStoreDetail(user, taskinfo.STOREID, function (rs) {
                console.log(rs);
                var html = element.getStoreInfoPage(rs);
                $('.infor').html(html);
            });

            backpackModule.tourHistory(user, taskinfo.TASKID, function (rs) {
                console.log(rs);
                var taskHtml = element.getTaskHistDetailPage(rs);
                console.log(taskHtml.taskRs);
                $('#con-tabs').html(taskHtml.titleTable);
                $('#con-tabs li:first-child a').addClass("activ");
                $('#js_data').html(taskHtml.infoTable);
                $('#js_data div:first-child').addClass("activ");
                click_Evrnt.select_tab_panel("li .tab", "div .panel");
            });

            //专项任务
        } else if (taskinfo.TASKTYPE === "2") {
            console.log(taskinfo);
            backpackView.setPage_myBackPack_2();
            $('.infor').hide();
            $('#js_submit').hide();

            backpackModule.specialPlanFinish(user, taskinfo.TASKID, function (rs) {
                console.log(rs);
            });
        }

        $('.back').on('click', function () {
            pageToday();
        });
    }

    /**
     * 签到签出页面
     * @param {type} user
     * @returns {undefined}
     */
    var accetp = function (act) {
        if (act === "signIn") {
            backpackView.setPage_myBackPack_1_1();
            $('.button.green').attr('class', 'button gray');
        } else if (act === "signOut") {
            backpackView.setPage_myBackPack_1_2();
            $('.button.green').attr('class', 'button gray');
        }

        $("#js_img").hide();
        backpackModule.signStoreName(user, user.LOGIN_ID, function (e) {
            console.log("签到门店id");
            console.log(e);
            var info = e;
            var select = $('form select');
            var div = '';
            for (var i = 0; i < info.length; i++) {
                var store_id = info[i].STORE_ID;
                var store_name = info[i].STORE_NAME;
                div += '<option value="' + store_id + '">' + store_name + '</option>';
            }
            select.html(div);
            $('#js_select option:first').attr("selected", "true");

            select.store = info[0];

            select.bind('change', function () {
                var q = select.val();
                console.log(q);
                for (var m = 0; m < info.length; m++) {
                    if (q === info[m].STORE_ID) {
                        select.store = info[m];
                    }
                }
                $('#js_address').html(select.store.STORE_ADDRESS);
            });

            $('.button.purple').on('click', function () {
                //定位
                baiduMap.positioning(function (e) {
                    console.log(e);
                    var p1 = {
                        lat: select.store.STORE_LAT,
                        lng: select.store.STORE_LNG
                    };
                    var p2 = {
                        lat: e.point.lat,
                        lng: e.point.lng
                    };

                    //获取地址信息
                    baiduMap.getLocation(e.point.lat, e.point.lng, function (e) {
                        //显示地址
                        console.log(e);
                        $('.act-grid li:last span').html(e.address);
                    });

                    //判断门店和登录用户的距离，默认小于5(千米)
                    if (GetDistance(p1.lat, p1.lng, p2.lat, p2.lng) < 5) {
                        //签到动作
                        if (act === "signIn") {
                            $('#js_img').show();
                            $('input').bind('change', function () {
                                //上传图片及签到
                                if (confirm("是否上传照片并签到") === true) {
                                    uploadImage("js_img", function (e) {
                                        console.log("上传照片成功");
                                        console.log(e);
                                        var imgid = e.IMAGEID;
                                        backpackModule.accept(user, select.store.STORE_ID, p2.lat, p2.lng, imgid, function (rs) {
                                            console.log('签到成功');
                                            backpackController.pageToday();
                                        });

                                    });
                                }
                            });
                            //签出动作
                        } else if (act === "signOut") {
                            $('.button.gray').attr('class', 'button green');
                            $('.button.green').on('click', function () {
                                console.log("签出");
                                backpackModule.acceptOut(user, select.store.STORE_ID, p2.lat, p2.lng, function (rs) {
                                    console.log('签出成功');
                                    alert("签出成功");
                                    pageToday();
                                });
                            });
                        }

                    } else {
                        alert("请到门店附近进行签到和签出");
                    }
                });
            });
        });

    };

    //显示日历
    function showCalendar() {
        //        console.log(events);
        $('#fullcalendar').fullCalendar({
            // weekMode:"variable",
            lang: 'zh-cn',
            aspectRatio: "0.75",
            handleWindowResize: true,
            eventLimit: true,
            dayClick: function (data, allDay, jsEvent, view) {
                //                console.log(moment(data).format("YYYYMMDD"));
                upTaskPage(saveData.myPlan.planTask.data, moment(data).format("YYYYMMDD"));
            },
            eventClick: function (event, jsEvent, view) {
                //                console.log(event._start._d);
                upTaskPage(saveData.myPlan.planTask.data, moment(event._start._d).format("YYYYMMDD"));
            }
            //            events: saveData.myPlan.planTask.events
        });


        //当月的起始时间和结束时间
        var startdate = dateTools.getMonthStartDate();
        var enddate = dateTools.getMonthEndDate();

        upEvents(startdate, enddate, function () {

        });
        //上个月
        $('.fc-button-group .fc-corner-left').click(function () {
            var t = $('#fullcalendar').fullCalendar('getDate').format().slice(0, 10);

            console.log(dateTools.getMonthStartDate(t));
            console.log(dateTools.getMonthEndDate(t));

            upEvents(dateTools.getMonthStartDate(t), dateTools.getMonthEndDate(t), function () {
                console.log(saveData.myPlan.planTask.events);
            });
        });
        //下个月
        $('.fc-button-group .fc-corner-right').click(function () {
            var t = $('#fullcalendar').fullCalendar('getDate').format().slice(0, 10);

            console.log(dateTools.getMonthStartDate(t));
            console.log(dateTools.getMonthEndDate(t));
            upEvents(dateTools.getMonthStartDate(t), dateTools.getMonthEndDate(t), function () {
                console.log(saveData.myPlan.planTask.events);
            });
        });

        //今天
        $('.fc-right .fc-today-button').click(function () {
            var t = $('#fullcalendar').fullCalendar('getDate').format().slice(0, 10);
            upEvents(dateTools.getMonthStartDate(t), dateTools.getMonthEndDate(t), function () {
                console.log(saveData.myPlan.planTask.events);
            });
        });
    }

    //更新事件列表
    function upEvents(startdate, enddate, callback) {
        //日常，周期任务
        backpackModule.planTask(user.LOGIN_ID, startdate, enddate, function (e) {
            var info = e;
            var todaydate = dateTools.formatDate(new Date());

            console.log("巡店计划查询");
            console.log(e);

            saveData.myPlan.planTask.data = e;
            saveData.myPlan.planTask.events = [];
            for (var n = 0; n < info.length; n++) {
                var evt = {};
                evt.start = dateTools.strToDateFormat(info[n].TASKDATE);
                evt.end = dateTools.strToDateFormat(info[n].TASKDATE);
                evt.title = info[n].TASKTITLE;
                evt.allDay = true;
                evt.backgroundColor = "";
                if (info[n].ISFINISH === "1") {
                    evt.backgroundColor = "#918a8e";
                } else if (info[n].ISFINISH === "0") {
                    evt.backgroundColor = "#43ff4b";
                }
                saveData.myPlan.planTask.events.push(evt);
                $('#fullcalendar').fullCalendar('renderEvent', evt);
            }

            //专项任务
            backpackModule.specialPlanList(user, startdate, enddate, function (e) {
                var info = e;
                console.log("专项计划查询");
                console.log(e);
                for (var i = 0, l = e.length; i < l; i++) {
                    saveData.myPlan.planTask.data.push(e[i]);
                }
                for (var n = 0; n < info.length; n++) {
                    var evt = {};
                    evt.start = dateTools.strToDateFormat(info[n].TASKDATE);
                    evt.end = dateTools.strToDateFormat(info[n].TASKDATE);
                    evt.title = info[n].TASKTITLE;
                    evt.allDay = true;
                    evt.backgroundColor = "";
                    if (info[n].ISFINISH === "1") {
                        evt.backgroundColor = "#918a8e";
                    } else if (info[n].ISFINISH === "0") {
                        evt.backgroundColor = "#43ff4b";
                    }
                    saveData.myPlan.planTask.events.push(evt);
                    $('#fullcalendar').fullCalendar('renderEvent', evt);
                }

                upTaskPage(saveData.myPlan.planTask.data, todaydate);

            });
            callback();
        });
    }
    //刷新搜索结果页面
    function upTaskPage(data, dateStr) {
        var info = data;
        var div0 = '',
                div1 = '',
                arr0 = [],
                arr1 = [];
        if (info.length > 0) {
            for (var i = 0; i < info.length; i++) {
                var _taskdate = dateTools.strToDateFormat(info[i].TASKDATE);
                var _tasktitle = info[i].TASKTITLE;

                if (info[i].TASKDATE === dateStr) {
                    var icon = '<i class="icon-check_o"></i>';
                    if (info[i].ISFINISH === "1") {
                        icon = '<i class="icon-information"></i>';
                    }
                    //日常任务，周期任务
                    if (info[i].TASKTYPE === "0" || info[i].TASKTYPE === "1") {

                        div0 += '<li class="sub-content"><a class="next" name="page_to_2">' + icon + '<p>' + _tasktitle + '</p><span>' + _taskdate + '</span></a></li>';
                        arr0.push(info[i]);
                        //专项任务
                    } else if (info[i].TASKTYPE === "2") {
                        div1 += '<li class="sub-content"><a class="next" name="page_to_2">' + icon + '<p>' + _tasktitle + '</p><span>' + _taskdate + '</span></a></li>';
                        arr1.push(info[i]);
                    }
                }
            }
        }

        $('#js_trouble').html(div0);
        $('#js_special').html(div1);

        var trouble = $("#js_trouble li>a");
        var special = $("#js_special li>a");
        trouble.on('click', function () {
            var s = trouble.index(this);
            //            console.log(arr0[s]);
            if (new Date(dateTools.strToDateFormat(arr0[s].TASKDATE)).getTime() + (1000 * 60 * 60 * 24) < new Date().getTime() && arr0[s].ISFINISH === "1") {
                alert("任务已过期");
                return;
            }
            if (arr0[s].ISFINISH === "0") {
                console.log("查看任务历史");
                pageTaskHistory(arr0[s]);
            } else {
                console.log("任务编辑");
                pageTask(arr0[s]);
            }
        });

        special.on('click', function () {
            var s = special.index(this);
            if (arr1[s].ISFINISH === "0") {
                console.log("查看任务历史");
                pageTaskHistory(arr1[s]);
            } else {
                console.log("任务编辑");
                pageTask(arr1[s]);
            }
        });
    }

    function searchTasks(user) {
        //请求巡店人员
        backpackModule.planUser(user, function (rs) {
            console.log(rs);
            var dinners = rs;
            var div = '';
            for (var i = 0, l = dinners.length; i < l; i++) {
                div += '<option value="' + dinners[i].ID + '">' + dinners[i].NAME + '</option>';
            }
            var employeeEl = $('#js_plan_Employee');
            var typeEl = $('#js_plan_Type');
            var stateEl = $('#js_plan_State');
            //巡店人员
            employeeEl.html(div);
            //巡店类型
            typeEl.html('<option value="0">日常</option><option value="1">巡店</option><option value="2">专项</option>');
            //巡店状态
            stateEl.html('<option value="0">已完成</option><option value="1">未完成</option>');
            //搜索
            $('#js_plan_Search').on('click', function () {
                var id, type, state, startDate, endDate;
                id = employeeEl.val();
                type = typeEl.val();
                state = stateEl.val();
                startDate = ($('#js_plan_Starttime').val()).replace(/-/g, "");
                endDate = ($('#js_plan_endtime').val()).replace(/-/g, "");
                if ($('#js_plan_Starttime').val() > $('#js_plan_endtime').val()) {
                    alert("起始时间大于结束时间，请重试");
                    return;
                }
                //通过条件搜索任务
                backpackModule.planSearch(user, id, startDate, endDate, type, state, function (e) {
                    console.log(e);
                    var tasks = e;
                    var html = '';
                    // var ul = $('#sub-list ul');
                    for (var s = 0, m = tasks.length; s < m; s++) {
                        html += '<li class="sub-content"><a class="next" name="page_to_2">';
                        if (tasks[s].ISFINISH === "1") {
                            html += '<i class="icon-check_o"></i>'
                        } else if (tasks[s].ISFINISH === "0") {
                            html += '<i class="icon-check_o"></i>'
                        }
                        html += '<p>' + tasks[s].NAME + '</p><span>' + tasks[s].TOURDATE + '</span></a></li>';
                    }
                    //页面显示返回的门店列表
                    $('#sub-list ul').html(html);

                    $('.sub-content .next').on('click', function () {
                        var id = $('.sub-content .next').index(this);
                        console.log(id);
                        pageTaskHistory(tasks[id]);
                    });
                });
            });
        });
    }

    return {
        setUser: setUser,
        pageToday: pageToday
    };
})(backpackModule, backpackView, storeModule, element, baiduMap);