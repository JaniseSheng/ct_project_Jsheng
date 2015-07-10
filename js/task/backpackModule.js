/* global queryData */
"use strict";

var backpackModule = (function (queryData) {
    /**
     * 今日任务
     * @param {obj} loginUser 登录用户
     * @param {type} callback
     * @returns {undefined}
     */
    var todayTask = function (loginUser, callback) {
        var _tmpdata = {
            USER_ID: loginUser.LOGIN_ID
        };
        queryData.ajax(_tmpdata, "/service/1/mytask/query", callback);
    };
    /**
     * 巡店计划
     * @param {string} userid 巡店人员id
     * @param {type} startdate 起始时间
     * @param {type} enddate 结束时间
     * @param {type} callback
     * @returns {undefined}
     */
    var planTask = function (userid, startdate, enddate, callback) {
        var _tmpdata = {
            USER_ID: userid,
            STARTDATE: startdate,
            ENDDATE: enddate
        };
        queryData.ajax(_tmpdata, "/service/1/plan/query", callback);
    };
    /**
     * 巡店人员查询
     * @param {obj} loginUser
     * @param {type} callback
     * @returns {undefined}
     */
    var planUser = function (loginUser, callback) {
        var _tmpdata = {
            LOGIN_ID: loginUser.LOGIN_ID
        };
        queryData.ajax(_tmpdata, "/service/1/store/queryUser", callback);
    };
    /**
     * 巡店计划搜索
     * @description 传6个参数:loginUser,startdate,enddate,type,state,callback
     * @description 传7个参数:loginUser,,userid,startdate,enddate,type,state,callback
     * @returns {undefined}
     */
    var planSearch = function () {
        var _tmpdata = {};
        if (arguments.length === 6) {
            _tmpdata = {
                USER_ID: arguments[0].LOGIN_ID,
                TOURPERSON: "",
                STARTDATE: arguments[1],
                ENDDATE: arguments[2],
                TOURTYPE: arguments[3],
                TOURSTATE: arguments[4]
            };
            queryData.ajax(_tmpdata, "/service/1/plan/search", arguments[5]);
        } else if (arguments.length === 7) {
            _tmpdata = {
                USER_ID: arguments[0].LOGIN_ID,
                TOURPERSON: arguments[1],
                STARTDATE: arguments[2],
                ENDDATE: arguments[3],
                TOURTYPE: arguments[4],
                TOURSTATE: arguments[5]
            };
            queryData.ajax(_tmpdata, "/service/1/plan/search", arguments[6]);
        }
    };
    /**
     * 填表查询
     * @param {type} loginUser
     * @param {type} taskid 任务id
     * @param {type} callback
     * @returns {undefined}
     */
    var tourShop = function (loginUser, taskid, callback) {
        var _tmpdata = {
            LOGIN_ID: loginUser.LOGIN_ID,
            TASK_ID: taskid
        };
        queryData.ajax(_tmpdata, "/service/1/tourShop/query", callback);
    };
    /**
     * 填表数据上传
     * @param {type} loginUser
     * @param {type} store_id 门店id
     * @param {type} task_type 任务类型 见回传任务类型
     * @param {type} task_result_id 任务查询id 从签到得到
     * @param {type} json 上传的json对象
     * @param {type} callback
     * @returns {undefined}
     */
    var uploadTask = function(loginUser,store_id,task_type,task_result_id,json,callback){
        var _tmpdata ={
            LOGIN_ID:loginUser.LOGIN_ID,
            STORE_ID:store_id,
            TASK_TYPE:task_type,
            TASK_RESULT_ID: task_result_id,
            RESULT:JSON.stringify(json)
        };
        queryData.ajax(_tmpdata,"/service/1/plan/dataUpload",callback);  
    };
    /**
     * 填表历史结果查询
     * @param {type} loginUser
     * @param {type} taskresultid 任务查询id
     * @param {type} callback
     * @returns {undefined}
     */
    var tourHistory = function (loginUser, taskresultid, callback) {
        var _tmpdata = {
            LOGIN_ID: loginUser.LOGIN_ID,
            TASK_RESULT_ID: taskresultid
        };
        queryData.ajax(_tmpdata, "/service/1/tourstore_result_search/history", callback);
    };
    /**
     * 专项任务列表
     * @param {type} loginUser
     * @param {type} startdate 起始时间
     * @param {type} enddate 结束时间
     * @param {type} callback
     * @returns {undefined}
     */
    var specialPlanList = function (loginUser, startdate, enddate, callback) {
        var _tmpdata = {
            LOGIN_ID: loginUser.LOGIN_ID,
            STARTDATE: startdate,
            ENDDATE: enddate
        };
        queryData.ajax(_tmpdata, "/service/1/zxplan/zxPlanList", callback);
    };
    /**
     * 未完成的专项任务
     * @param {type} loginUser
     * @param {type} taskid 任务id
     * @param {type} callback
     * @returns {undefined}
     */
    var specialPlanUnFinish = function (loginUser, taskid, callback) {
        var _tmpdata = {
            LOGIN_ID: loginUser.LOGIN_ID,
            TASK_ID: taskid
        };
        queryData.ajax(_tmpdata, "/service/1/zxplan/zxPlanNoFinish", callback);
    };
    /**
     * 已完成的专项任务
     * @param {type} loginUser
     * @param {type} taskid
     * @param {type} callback
     * @returns {undefined}
     */
    var specialPlanFinish = function (loginUser, taskid, callback) {
        var _tmpdata = {
            LOGIN_ID: loginUser.LOGIN_ID,
            TASK_ID: taskid
        };
        queryData.ajax(_tmpdata, "/service/1/zxplan/zxPlan/zxPlanfinished", callback);
    };
    /**
     * 专项任务上传数据（专项模版）
     * @param {type} loginUser
     * @param {type} taskId
     * @param {type} contentType
     * @param {type} result
     * @param {type} callback
     * @returns {undefined}
     */
    var uploadSpecialTaskData = function (loginUser,taskId,contentType,result,callback){
        var _tempdata = {
            LOGIN_ID: loginUser.LOGIN_ID,
            TASK_RESULT_ID: taskId,
            RESULT: result,
            CONTENT_TYPE: contentType
        };
        queryData.ajax(_tempdata,"/service/1/zxplan/zxPlanDataUpload",callback);
    };
    /**
     * 专项任务上传数据(自定义模版)
     * @param {type} loginUser
     * @param {type} taskId
     * @param {type} contentType
     * @param {type} result
     * @param {type} callback
     * @returns {undefined}
     */
    var uploadSpecialSimpleTaskData = function(loginUser,taskId,contentType,result,callback){
        var _tempdata = {
            LOGIN_ID:loginUser.LOGIN_ID,
            TASK_RESULT_ID: taskId,
            CONTENT_TYPE: contentType,
            REMARK: result
        };
        queryData.ajax(_tempdata,"/service/1/zxplan/zxPlanDataUploadByCus",callback);
    };
    /**
     * 签到门店名称查询
     * @param {type} loginUser
     * @returns {undefined}
     */
    var signStoreName = function (loginUser, userid,callback) {
        var _tmpdata = {
            LOGIN_ID: loginUser.LOGIN_ID,
            USER_ID:userid
        };
        queryData.ajax(_tmpdata, "/service/1/store/querySignStoreName", callback);
    };
    /**
     * 巡店签到
     * @param {type} loginUser
     * @param {type} storeid 签到门店id
     * @param {type} signlat 签到纬度
     * @param {type} signlng 签到经度
     * @param {type} storeimage 签到图片
     * @param {type} callback
     * @returns {undefined}
     */
    var accept = function (loginUser, storeid, signlat, signlng, storeimage, callback) {
        var _tmpdata = {
            LOGIN_ID: loginUser.LOGIN_ID,
            STORE_ID: storeid,
            SIGN_LAT: signlat,
            SIGN_LNG: signlng,
            STORE_IMAGE: storeimage
        };
        queryData.ajax(_tmpdata, "/service/1/sign/accept", callback);
    };
    /**
     * 巡店签出
     * @param {type} loginUser
     * @param {type} storeid 签出门店id
     * @param {type} signlat 签出纬度
     * @param {type} signlng 签出经度
     * @param {type} callback
     * @returns {undefined}
     */
    var acceptOut = function (loginUser, storeid, signlat, signlng, callback) {
        var _tmpdata = {
            LOGIN_ID: loginUser.LOGIN_ID,
            STORE_ID: storeid,
            SIGN_LAT: signlat,
            SIGN_LNG: signlng
        };
        queryData.ajax(_tmpdata, "/service/1/sign/acceptout", callback);
    };
    /**
     * 检测是否签到
     * @param {type} loginUser
     * @param {type} storeid 门店id
     * @param {type} callback
     * @returns {undefined}
     */
    var signUp = function (loginUser, storeid, callback) {
        var _tmpdata = {
            LOGIN_ID: loginUser,
            STORE_ID: storeid
        };
        queryData.ajax(_tmpdata, "/service/1/signUp/query", callback);
    };
    return {
        todayTask: todayTask,
        planTask: planTask,
        planUser: planUser,
        planSearch: planSearch,
        tourShop: tourShop,
        tourHistory: tourHistory,
        specialPlanList: specialPlanList,
        specialPlanUnFinish: specialPlanUnFinish,
        specialPlanFinish: specialPlanFinish,
        signStoreName: signStoreName,
        accept: accept,
        acceptOut: acceptOut,
        signUp:signUp,
        uploadTask:uploadTask,
        uploadSpecialTaskData:uploadSpecialTaskData,
        uploadSpecialSimpleTaskData:uploadSpecialSimpleTaskData
    };

})(queryData);
