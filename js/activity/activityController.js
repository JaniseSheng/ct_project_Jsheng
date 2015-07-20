/* global activityView, queryData, activityObj, activityModule, user, mystate, jQuery */
/**
 * 
 * @type activityController_L4.activityControllerAnonym$0|Function
 */
var activityController = (function (activityView, $, window, queryData) {
    //    "use strict";

    var user = {};
    var currentpage = 1;
    activityObj = {};
    //    ['营销活动', '活动目标', '话术&脚本', '在线培训', '在线考试', '营销物料', '其他信息']
    //当前页面索引值 -1:活动列表, 0:'活动基础页', 1:'活动详情页', 2:'活动目标', 3:'话术&脚本', 4:'在线培训', 5:'在线考试', 6:'营销物料', 7:'其他信息'
    activityObj.index = -1;
    //标记是否有变化，有变化值为1，无变化值为0
    activityObj.change = 1;
    //活动已读，未读状态
    activityObj.isRead = [];
    //活动列表
    activityObj.marketList = {};
    //活动基础信息
    activityObj.marketBasic = {};
    //首次进入基础页面后保存已读未读状态更新开关，0:无需更新; 1:需更新
    activityObj.marketBasic.isReadChange = 1;
    /**
     * 营销活动列表页面
     * @param {type} user
     * @returns {undefined}
     */
    var pageMarketList = function (lgUser) {
        user = lgUser;
        var user_id = user.LOGIN_ID;
        currentpage = 1;

        upPageMarketList(user_id, currentpage);
        activityObj.index = -1;
        activityObj.isRead = [];
    };
    /**
     * 营销活动基础信息页面
     * @param {type} data
     * @returns {undefined}
     */
    var pageMarketBasic = function (data) {
        console.log("营销活动简介");
        console.log(data);
        activityObj.marketBasic.data = data;

        activityView.setPage_myActive_2();

        //只有从活动列表页进入才刷新子活动的状态和显示
        if (activityObj.index === -1) {
            activityObj.marketBasic.subModelList = getSubModules(data);
        }

        activityObj.index = 0;
        //判断活动是否已读
        setRead(activityObj.index, activityObj.marketBasic.data.EVENT_ID);

        $("#js_event_name").html(data.EVENT_NAME);
        $("#js_event_start_time").html("开始时间: " + data.EVENT_STARTTIME);

        //判断子项是否存在，存在显示，不存在不显示
        if (data.MODELIDS !== undefined) {
            //判断子项是否存在，存在显示，不存在不显示
            var tmpmodelids = data.MODELIDS;
            var modelist = tmpmodelids.split(',').sort();
            var subModels = new Array(7);
            activityObj.marketBasic.modelids = tmpmodelids;
            activityObj.marketBasic.modelist = modelist;
            // var mdlist = ['营销活动', '活动目标', '话术&脚本', '在线培训', '在线考试', '营销物料', '其他信息'];
            for (var i = 0; i < modelist.length; i++) {
                var tmpIndex = Number(modelist[i].slice(0, 1)) - 1;
                var tmpState = modelist[i].slice(1, 2);
                subModels[tmpIndex] = {
                    "display": "black"
                };
            }

            activityObj.marketBasic.subModels = subModels;


            var li;
            for (var m = 0; m < subModels.length; m++) {
                if (subModels[m] !== undefined && subModels[m].display === "black") {
                    li = "#js_sub_" + (Number(m) + 1);
                    $(li).show();
                    $(li).on("click", function () {
                        var st = $(this).attr("id").slice(-1);
                        goSubitem(st, data.EVENT_ID);
                    });
                }
            }
        }



        $('#js_sub_1').on('click', function () {
            console.log("活动详情页");
            activityController.pageMarketInfo(data);
        });

        $('.back').on('click', function () {
            activityController.pageMarketList(user);
        });
    };
    /**
     * @description 营销活动详细内容页面
     * @param {type} data
     * @returns {undefined}
     */
    var pageMarketInfo = function (data) {
        var info = data;
        //        var model = "1";
        activityObj.marketInfo = {};

        activityObj.index = 1;

        activityModule.marketBasic(info.EVENT_ID, function (e) {
            var info = e;

            activityView.setPage_myActive_2_1();

            //判断活动是否已读
            setRead(activityObj.index, activityObj.marketBasic.data.EVENT_ID);

            $('#js_event_name').html(info.EVENT_NAME);
            $('#js_event_starttime').html(info.EVENT_STARTTIME);
            $('#js_event_endtime').html(info.EVENT_ENDTIME);
            $('#js_event_description').html(info.EVENT_DESCRIPTION);
            $('#js_event_incentive').html(info.INCENTIVE);
            $('#js_event_require').html(info.REQUIRE);

            $(".back").on('click', function () {
                console.log("返回上活动基础信息");
                activityController.pageMarketBasic(activityObj.marketBasic.data);
            });
        });

        console.log(info);
        activityObj.marketInfo.data = data;
    };
    /**
     * @description 活动目标列表页面
     * @param {type} data 活动id
     * @returns {undefined}
     */
    var pageTargetList = function (data) {
        var eventid = data;
        var model = '2';
        activityObj.targetlist = activityObj.targetlist || {};
        activityObj.targetlist.eventid = eventid;
        activityObj.targetlist.currentpage = 1;

        activityView.setPage_myActive_2_2();

        activityObj.index = 2;
        //判断活动是否已读
        setRead(activityObj.index, activityObj.marketBasic.data.EVENT_ID);

        upPageTargetList(eventid, activityObj.targetlist.currentpage);

        $('.load-more').on('click', function () {
            activityObj.targetlist.currentpage += 1;
            upPageTargetList(eventid, activityObj.targetlist.currentpage);
        });
        $('.back').on('click', function () {
            activityController.pageMarketBasic(activityObj.marketBasic.data);
        });
    };
    /**
     * @description 话术和脚本列表页面
     * @param {type} data 活动id
     * @returns {undefined}
     */
    var pageScriptList = function (data) {
        var eventid = data;

        activityObj.scriptlist = activityObj.scriptlist || {};
        activityObj.scriptlist.eventid = eventid;
        activityObj.scriptlist.currentpage = 1;

        activityObj.index = 3;
        //判断活动是否已读
        setRead(activityObj.index, activityObj.marketBasic.data.EVENT_ID);

        activityView.setPage_myActive_2_3();
        upPageScriptList(activityObj.scriptlist.eventid, activityObj.scriptlist.currentpage);

        $('.load-more').on('click', function () {
            activityObj.scriptlist.currentpage += 1;
            upPageScriptList(activityObj.scriptlist.eventid, activityObj.scriptlist.currentpage);
        });
        $('.back').on('click', function () {
            activityController.pageMarketBasic(activityObj.marketBasic.data);
        });
    };
    /**
     * @description 话术和脚本详情页
     * @param {type} data 脚本id
     * @returns {undefined}
     */
    var pageScriptInfo = function (data) {
        var model = '3';
        activityObj.scriptinfo = activityObj.scriptinfo || {};
        activityObj.scriptinfo.data = data;

        activityView.setPage_myActive_2_3_1();

        activityObj.index = 3;
        //判断活动是否已读
        setRead(activityObj.index, activityObj.marketBasic.data.EVENT_ID);

        activityModule.scriptinfo(data, function (e) {
            var info = e;
            console.log(e);
            var _scriptdescription = info.SCRIPT_DESCRIPTION;
            var _scriptname = info.SCRIPT_NAME;
            var _scriptupdatedate = info.SCRIPT_UPDATE_DATE;
            var _scriptupdateman = info.SCRIPT_UPDATE_MAN;
            var div = '<ul class="act-grid"><li><p>活动名称</p><span>' + _scriptname + '</span></li><li><p>更新人</p><span>' + _scriptupdateman + '</span></li><li><p>更新时间</p><span>' + _scriptupdatedate + '</span></li></ul><div class="outer"><div><span>话术&amp;脚本描述</span><div id="js_active_Script"><span>' + _scriptdescription + '</span></div></div></div>';
            $('#js_scriptinfo').html(div);
        });

        $('.back').on('click', function () {
            activityController.pageScriptList(activityObj.scriptlist.eventid);
        });
    };
    /**
     * @description 在线培训列表页面
     * @param {type} data
     * @returns {undefined}
     */
    var pageTrainList = function (data) {
        var eventid = data;
        activityObj.trainlist = activityObj.trainlist || {};
        activityObj.trainlist.eventid = eventid;
        activityObj.trainlist.currentpage = 1;

        activityView.setPage_myActive_2_4();

        activityObj.index = 4;
        //判断活动是否已读
        setRead(activityObj.index, activityObj.marketBasic.data.EVENT_ID);

        upPageTrainList(activityObj.trainlist.eventid, activityObj.trainlist.currentpage);

        $('.load-more').on('click', function () {
            activityObj.trainlist.currentpage += 1;
            upPageTrainList(activityObj.trainlist.eventid, activityObj.trainlist.currentpage);
        });
        $('.back').on('click', function () {
            activityController.pageMarketBasic(activityObj.marketBasic.data);
        });
    };
    /**
     * 在线培训详情页面
     * @param  {[type]} data 活动ID
     * @return {[type]}      [description]
     */
    var pageTrainInfo = function (data) {
        var _trainid = data;
        var model = '4';

        activityView.setPage_myActive_2_4_1();

        activityObj.index = 4;
        //判断活动是否已读
        setRead(activityObj.index, activityObj.marketBasic.data.EVENT_ID);

        activityModule.trainInfo(_trainid, function (e) {
            console.log(e);
            var info = e;
            var _train_description = info.TRAIN_DESCRIPTION;
            var _train_endtime = info.TRAIN_ENDTIME;
            var _train_name = info.TRAIN_NAME;
            var _train_starttime = info.TRAIN_STARTTIME;
            var _train_type = info.TRAIN_TYPE;
            var div = '<div class="w-container clearfix"><ul class="act-grid"><li><p>培训主题</p><span>' + _train_name + '</span></li><li><p>培训类型</p><span>' + _train_type + '</span></li><li><p>开始时间</p><span>' + _train_starttime + '</span></li><li><p>结束时间</p><span>' + _train_endtime + '</span></li></ul><div class="outer"><div><span>培训描述</span><div id="js_active_Script"><span>' + _train_description + '</span></div></div></div></div>';
            $('.container').html(div);
        });

        $('.back').on('click', function () {
            activityController.pageTrainList(activityObj.trainlist.data);
        });
    };
    /**
     * 营销物料
     * @param {type} data
     * @returns {undefined}
     */
    var pageGoodInfo = function (data) {
        var _eventid = data;
        var model = '6';
        activityView.setPage_myActive_2_5();

        activityObj.index = 6;
        //判断活动是否已读
        setRead(activityObj.index, activityObj.marketBasic.data.EVENT_ID);

        activityModule.goodsInfo(_eventid, function (e) {
            var info = e;
            var _material_allot = info.MATERIAL_ALLOT;
            var _material_id = info.MATERIAL_ID;
            var _material_linkman = info.MATERIAL_LINKMAN;
            var _material_put = info.MATERIAL_PUT;
            var _material_type = info.MATERIAL_TYPE;
            var div = '<ul class="act-grid"><li><p>物料种类及数量 :</p><span>' + _material_type + '</span></li><li><p>物料配比原则</p><span>' + _material_allot + '</span></li><li><p>物料摆放原则</p><span>' + _material_put + '</span></li><li><p>物料签收及联系人</p><span>' + _material_linkman + '</span></li></ul>';
            $('.clearfix').html(div);
        });

        $('.back').on('click', function () {
            activityController.pageMarketBasic(activityObj.marketBasic.data);
        });
    };
    /**
     * 其他信息
     * @param {type} data
     * @returns {undefined}
     */
    var pageOtherTask = function (data) {
        var eventid = data;
        var model = "7";

        activityView.setPage_myActive_2_7();

        activityObj.index = 7;
        //判断活动是否已读
        setRead(activityObj.index, activityObj.marketBasic.data.EVENT_ID);

        activityModule.otherTask(eventid, function (e) {
            console.log("其他信息详情");
            console.log(e);
            var info = e;
            var _material_attr = info.MATERIAL_ATTR;
            var div = '<div style="display: inline-block;margin-top: 24px;margin-bottom: 24px;overflow: scroll"><span>' + _material_attr + '</span></div>';
            $('.clearfix').html(div);
        });

        $('.back').on('click', function () {
            activityController.pageMarketBasic(activityObj.marketBasic.data);
        });
    };
    /*
     * 在线测试
     * @param {type} data
     * @returns {undefined}
     */
    var pageTestList = function (data) {
        var eventid = data;
        // activityView.setPage_myActive_2_6();

        // activityModule.testList(user.LOGIN_ID, eventid, function (e) {
        //     console.log("在线考试列表");
        //     console.log(e);
        // });
        activityObj.index = 5;
        //判断活动是否已读
        setRead(activityObj.index, activityObj.marketBasic.data.EVENT_ID);
    };
    /**
     * 刷新刷新在线培训列表
     * @param  {[type]} eventid     [description]
     * @param  {[type]} currentpage [description]
     * @return {[type]}             [description]
     */
    function upPageTrainList(eventid, currentpage) {
        //        loading('add');
        activityModule.trainList(eventid, currentpage, function (e) {
            var info = e.LIST;
            console.log("培训列表");
            console.log(e);
            var div = '';
            for (var i = 0; i < info.length; i++) {
                var _trainendtime = info[i].TRAIN_ENDTIME;
                var _trainid = info[i].TRAIN_ID;
                var _trainname = info[i].TRAIN_NAME;
                var _trainstarttime = info[i].TRAIN_STARTTIME;
                var _traintype = info[i].TRAIN_TYPE;
                div += '<li class="more-content"><a class="next" name="page_to_2_4_1"><i class="yellow icon-ic_star_24px"></i><p>' + _trainname + '</p><span>开始于: ' + _trainstarttime + '</span><span>结束于: ' + _trainendtime + '</span></a></li>';
            }
            $('#list').html(div);

            $('.more-content').on('click', function () {
                var _index = $('.more-content').index(this);
                var _trainid = info[_index].TRAIN_ID;
                activityController.pageTrainInfo(_trainid);
            });
            activityObj.trainlist.data = eventid;
        });
    }

    /**
     * @description 更新话术脚本列表
     * @param {type} eventid 活动id
     * @param {type} currentpage
     * @returns {undefined}
     */
    function upPageScriptList(eventid, currentpage) {
        activityModule.scriptList(user.LOGIN_ID, eventid, currentpage, function (e) {
            var info = e.LIST;
            console.log("话术和脚本列表");
            console.log(e);
            var div = '';
            for (var i = 0; i < info.length; i++) {
                var _scriptid = info[i].SCRIPT_ID;
                var _scriptname = info[i].SCRIPT_NAME;
                var _scriptupdatedate = info[i].SCRIPT_UPDATE_DATE;
                var _scriptupdateman = info[i].SCRIPT_UPDATE_MAN;
                div += '<li class="more-content"><a class="next" name="page_to_2_3_1"><i class="yellow icon-ic_star_24px"></i><p>' + _scriptname + '</p><span>更新时间:' + _scriptupdatedate + '</span><span>' + _scriptname + '</span></a></li>';
            }

            $('#list').html(div);

            $('.more-content').on('click', function () {
                var _index = $('.more-content').index(this);
                var _scriptid = info[_index].SCRIPT_ID;
                activityController.pageScriptInfo(_scriptid);
            });
            activityObj.scriptlist.data = eventid;
        });
    }
    /**
     * @description 更新活动目标列表
     * @param {type} eventid
     * @param {type} currentpage
     * @returns {undefined}
     */
    function upPageTargetList(eventid, currentpage) {
        //        loading('add');
        activityModule.targetList(user.LOGIN_ID, eventid, currentpage, function (e) {
            var info = e.LIST;
            console.log(e);

            var div = '';
            if (e.LIST.length > 0) {
                for (var i = 0; i < info.length; i++) {
                    var _areaname = info[i].AREANAME;
                    var _begindate = info[i].BEGINDATE;
                    var _channelname = info[i].CHANNELNAME;
                    var _enddate = info[i].ENDDATE;
                    var _num = info[i].NUM;
                    var _opearname = info[i].OPEARNAME;
                    var _stage = info[i].STAGE;
                    var _storename = info[i].STORENAME;
                    div += '<li class="target-content"><a name="page_to_2_"><i class="yellow icon-ic_star_outline_24px"></i><p>' + _channelname + '</p><p>北区</p><p>' + _storename + '</p><ul><li><h4>阶段:</h4><span>' + _stage + '</span></li><li><h4>数量:</h4><span>' + _num + '</span></li></ul><ul><li><span>开始时间：' + _begindate + '</span></li><li><span>结束时间：' + _enddate + '</span></li></ul><div class="state"></div></a></li>';
                }
            } else {
                div = '<li class="target-content"><a name="page_to_2_">' + "活动已结束或者无相关活动目标" + '</a></li>';
            }



            $('#list').html(div);
        });
    }

    /**
     * @description 刷新营销活动列表
     * @param {type} user_id
     * @param {type} currentpage
     * @returns {undefined}
     */
    function upPageMarketList(user_id, currentpage) {
        if (activityObj.change === 1) {
            //请求门店列表
            activityModule.marketList(user_id, currentpage, function (e) {
                activityObj.marketList.data = e;
                showMarketList(e, currentpage, user_id);
                activityObj.change = 0;
            });
        } else {
            showMarketList(activityObj.marketList.data, currentpage, user_id);
        }
    }
    /**
     * 显示营销活动列表
     * @param {type} e 后台返回的列表数据
     * @returns {undefined}
     */
    function showMarketList(e, currentpage, user_id) {
        var _list = e.LIST;
        console.log("显示活动列表");
        console.log(e);
        activityView.setPage_myActive_1();
        var div = "";
        for (var i = 0; i < _list.length; i++) {
            var _event_enddate = _list[i].EVENT_ENDDATE;
            var _event_forward = _list[i].EVENT_FORWARD;
            var _event_id = _list[i].EVENT_ID;
            var _event_manager = _list[i].EVENT_MANAGER;
            var _event_name = _list[i].EVENT_NAME;
            var _event_starttime = _list[i].EVENT_STARTTIME;
            var _event_status = _list[i].EVENT_STATUS;
            var _state = '';
            if (_event_status === "进行中") {
                _state = 'state_progress';
            } else if (_event_status === "已结束") {
                _state = 'state_end';
            }
            var _event_time = _list[i].EVENT_TIME;
            var _isleader = _list[i].ISLEADER;
            var _modelids = _list[i].MODELIDS;
            var _subisread = _list[i].SUBISREAD;
            div += '<li class="more-content"><a class="next" name="page_to_2"><i class="icon-file_calendar"></i><p>' + _event_name + '</p><span>' + _event_starttime + '</span><div class="active_state state ' + _state + '">' + _event_status + '</div></a><i class="icon-ic_keyboard_arrow_right_24px"></i><div class="num">' + _subisread + '</div></li>';
        }
        $("#list").html(div);
        $('.more-content').on('click', function () {
            var _index = $('.more-content').index(this);
            console.log(_index);
            console.log(_list[_index])
            activityController.pageMarketBasic(_list[_index]);
        });
        $('#js_load_more').on('click', function () {
            activityObj.change = 1;
            currentpage += 1;
            console.log(currentpage);
            activityObj.marketList.index = currentpage;
            upPageMarketList(user_id, currentpage);
            //                activityObj.marketList.data = e;
        });
    }
    /**
     * 查询子项内容
     * @description ['营销活动', '活动目标', '话术&脚本', '在线培训', '在线考试', '营销物料', '其他信息']
     * @param {type} index 子项索引值
     * @param {type} eventid 活动id
     * @returns {undefined}
     */
    function goSubitem(index, eventid) {
        switch (index) {
            case "2":
                //活动目标
                console.log("活动目标");
                activityController.pageTargetList(eventid);
                break;
            case "3":
                //话术&脚本
                console.log("话术&脚本");
                activityController.pageScriptList(eventid);
                break;
            case "4":
                //在线培训
                console.log("在线培训");
                activityController.pageTrainList(eventid);
                break;
            case "5":
                //在线考试
                console.log("在线考试");
                activityController.pageTestList(eventid);
                break;
            case "6":
                //营销物料
                console.log("营销物料");
                activityController.pageGoodInfo(eventid);
                break;
            case "7":
                //其他信息
                console.log("其他信息");
                activityController.pageOtherTask(eventid);
                break;
            default:
                break;
        }
    }
    /**
     * @description 设置营销活动已读
     * @param {type} user
     * @param {type} modelids
     * @param {type} eventid
     * @param {type} modelid
     * @param {type} callback
     * @returns {undefined}
     */
    function modelCountSet(user, modelids, eventid, modelid, callback) {
        var modelstr = modelids;
        var models = modelids.split(',');
        for (var i = 0; i < models.length; i++) {
            var md = models[i].slice(0, 1);
            var state = models[i].slice(1, 2);
            if (modelid === md) {
                models[i] = md + "1";
            }
        }
        modelstr = models.join(',');

        var _tmpdata = {
            USER_ID: user.LOGIN_ID,
            EVENT_ID: eventid,
            MODEL_ID: modelid
        };
        queryData.ajax(_tmpdata, '/service/1/marketBasicListApi/modelCountSet', function (e) {
            var info = e;
            console.log(e);
            if (info.SUCCESS === "1") {
                mystate.state_read("1");
                callback(modelstr);
            } else {
                mystate.state_read("0");
            }
        });
    }

    /**
     * 未读状态并通过点击进行已读操作
     * @returns {undefined}
     */
    function setRead(subId, eventId) {
        var id;
        if (subId < 2) {
            id = 0;
        } else {
            id = Number(subId) - 1;
        }
        //判断活动是否已读
        if (IsRead(subId)) {
            mystate.state_read("1");
        } else {
            mystate.state_read("0");
            //如果未读,则可通过点击进行设置已读
            $('#js_read').on('click', function () {
                if (confirm("是否已经阅读")) {
                    activityModule.modelCountSet(user, eventId, id + 1, function (rs) {
                        console.log(rs);
                        mystate.state_read("1");
                        activityObj.marketBasic.subModelList[id].isRead = "1";
                        activityObj.change = 1;
                    })
                }
            });
        }
    }
    /**
     * 判断子模块是否已读， true:已读，false:未读 ; 并保存
     * @param {type} subId 子模块索引值
     * @returns {Boolean}
     */
    function IsRead(subId) {
        var id = Number(subId) - 1;
        if (id < 1) {
            id = 0;
        }
        var subModelList = activityObj.marketBasic.subModelList;

        if (subModelList[id].isRead === "1") {
            return true;
        }

        return false;
    }
    /**
     * 获取子活动项信息：子活动名称，是否已读
     * @param  {[type]} data 活动对象
     * @return {[type]}      [description]
     */
    function getSubModules(data) {
        var subModels = [];

        var list = ['营销活动', '活动目标', '营销活动话术', '营销活动培训', '营销活动测试', '营销活动物料', '其他信息'];
        for (var i = 0; i < list.length; i++) {
            subModels.push({
                name: list[i],
                display: "none",
                isRead: "1",
            });
        }

        if (data.SUBISREAD === "0") {
            return subModels;
        } else {
            var modelids = data.MODELIDS;
            var arr = modelids.split(",").sort();
            for (var n = 0; n < arr.length; n++) {
                var sbId = Number(arr[n].slice(0, 1)) - 1;
                var sbIsRd = arr[n].slice(1, 2);
                subModels[sbId].isRead = sbIsRd;
                subModels[sbId].display = "block";
            }
        }

        console.log(subModels);
        return subModels;
    }



    return {
        pageMarketList: pageMarketList,
        pageMarketBasic: pageMarketBasic,
        pageMarketInfo: pageMarketInfo,
        pageTargetList: pageTargetList,
        pageScriptList: pageScriptList,
        pageScriptInfo: pageScriptInfo,
        pageTrainList: pageTrainList,
        pageTrainInfo: pageTrainInfo,
        pageGoodInfo: pageGoodInfo,
        pageOtherTask: pageOtherTask,
        pageTestList: pageTestList
    };
})(activityView, jQuery, window, queryData);