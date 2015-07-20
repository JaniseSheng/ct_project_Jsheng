/**
 * @description 营销活动模型模块
 * @type activityModule_L4.activityModuleAnonym$0|Function
 */
var activityModule = (function(queryData, $, window) {
//    "use strict";
    /**
     * @description 营销活动列表
     * @param  {[type]}   loginid     登录id
     * @param  {[type]}   currentpage 索引页数
     * @param  {Function} callback    返回列表数据json
     * @return {[type]}               [description]
     */
    var marketList = function(loginid, currentpage, callback) {
        var _tmpdata = {
            USER_ID: loginid,
            PAGE_SIZE: 10 * currentpage,
            CURRENT_PAGE: 1
        };
        queryData.ajax(_tmpdata, "/service/1/marketBasicListApi/list", function(e) {
            callback(e);
        });
    };
    /**
     * 营销活动详情
     * @param  {[type]}   eventid  [description]
     * @param  {Function} callback 回调返回json数据
     * @return {[type]}            [description]
     */
    var marketBasic = function(eventid, callback) {
        var _id = {
            EVENT_ID: eventid
        };
        queryData.ajax(_id, '/service/1/marketBasicListApi/view', function(e) {
            callback(e);
        });
    };
    /**
     * 话术脚本列表
     * @param  {[type]}   loginid     登录id
     * @param  {[type]}   eventid     活动ID
     * @param  {[type]}   currentpage 索引页数
     * @param  {Function} callback    回调返回的json数据
     * @return {[type]}               [description]
     */
    var scriptList = function(loginid, eventid, currentpage, callback) {
        var _tmpdata = {
            EVENT_ID: eventid,
            USER_ID: loginid,
            PAGE_SIZE: 10 * currentpage,
            CURRENT_PAGE: 1
        };
        queryData.ajax(_tmpdata, "/service/1/marketScriptApi/scriptList", function(e) {
            callback(e);
        });
    };
    /**
     * 话术详情
     * @param  {[type]}   scriptid 话术ID
     * @param  {Function} callback 回调返回的json数据
     * @return {[type]}            [description]
     */
    var scriptinfo = function(scriptid, callback) {
        var _tmpdata = {
            SCRIPT_ID: scriptid
        };
        queryData.ajax(_tmpdata, "/service/1/marketScriptApi/scriptView", function(e) {
            callback(e);
        });
    };
    /**
     * 物料信息
     * @param  {[type]}   eventid  活动ID
     * @param  {Function} callback 回调返回的json数据
     * @return {[type]}            [description]
     */
    var goodsInfo = function(eventid, callback) {
        var _tmpdata = {
            EVENT_ID: eventid
        };
        queryData.ajax(_tmpdata, "/service/1/marketGoodsApi/goodsInfo", function(e) {
            callback(e);
        });
    };
    /**
     * 在线培训列表
     * @param  {[type]}   eventid     活动ID
     * @param  {[type]}   currentpage 索引页数
     * @param  {Function} callback    回调返回的json数据
     * @return {[type]}               [description]
     */
    var trainList = function(eventid, currentpage, callback) {
        var _tmpdata = {
            EVENT_ID: eventid,
            PAGE_SIZE: 10 * currentpage,
            CURRENT_PAGE: 1
        };
        queryData.ajax(_tmpdata, "/service/1/marketTrainListApi/queryTrain", function(e) {
            callback(e);
        });
    };
    /**
     * 在线培训详情
     * @param  {[type]}   trainid  培训ID
     * @param  {Function} callback 回调返回的json数据
     * @return {[type]}            [description]
     */
    var trainInfo = function(trainid, callback) {
        var _tmpdata = {
            TRAIN_ID: trainid
        };
        queryData.ajax(_tmpdata, "/service/1/marketTrainListApi/trainInfo", function(e) {
            callback(e);
        });
    };
    /**
     * 在线测试列表
     * @param  {[type]}   loginid  登录id
     * @param  {[type]}   eventid  活动ID
     * @param  {Function} callback 回调返回的JSON数据
     * @return {[type]}            [description]
     */
    var testList = function(loginid, eventid, callback) {
        var _tmpdata = {
            EVENT_ID: eventid,
            LOGIN_ID: loginid
        };
        queryData.ajax(_tmpdata, "/service/1/marketTestListApi/queryTestList", function(e) {
            callback(e);
        });
    };
    /**
     * @description 营销活动目标
     * @param {string} loginid 登录用户ID
     * @param {string} eventid 活动ID
     * @param {number} currentpage 索引页数
     * @param {json} callback 回调返回的JSON数据
     * @returns {undefined}
     */
    var targetList = function(loginid, eventid, currentpage, callback) {
        var _tmpdata = {
            EVENT_ID: eventid,
            USER_ID: loginid,
            PAGE_SIZE: currentpage * 10,
            CURRENT_SIZE: 1
        };
        queryData.ajax(_tmpdata, "/service/1/marketBasicListApi/targetList", function(e) {
            callback(e);
        });
    };
    /**
     * @description 其他信息
     * @param {string} eventid 活动ID
     * @param {type} callback 回调返回的json
     * @returns {undefined}
     */
    var otherTask = function(eventid, callback) {
        var _tmpdata = {
            EVENT_ID: eventid
        };
        queryData.ajax(_tmpdata, "/service/1/marketGoodsApi/marketOthertask", function(e) {
            callback(e);
        });
    };

    var modelCountSet = function(user, eventId, modelId, callback) {
        var _tmpdata = {
            USER_ID: user.LOGIN_ID,
            EVENT_ID: eventId,
            MODEL_ID: modelId
        };
        queryData.ajax(_tmpdata, "/service/1/marketBasicListApi/modelCountSet", function(e) {
            callback(e);
        });
    };

    return {
        marketList: marketList,
        marketBasic: marketBasic,
        scriptList: scriptList,
        scriptinfo: scriptinfo,
        goodsInfo: goodsInfo,
        trainList: trainList,
        trainInfo: trainInfo,
        testList: testList,
        targetList: targetList,
        otherTask: otherTask,
        modelCountSet: modelCountSet
    };

})(queryData, jQuery, window);