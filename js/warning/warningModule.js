/* global queryData */

var warningModule = (function () {
    var _temp;
    /**
     * 取得未反馈的任务列表
     * @param {type} user
     * @param {type} callback
     * @returns {undefined}
     */
    function getNotFeedbackTaskList(user, callback) {
        _temp = {
            USER_ID: user.LOGIN_ID
        };
       queryData.ajax(_temp, "/service/1/warningDistribute/getNotFeedbackTaskList", callback);
        // $.ajax({
        //     url: "json/getNotFeedbackTaskList.json",
        //     dataType: "json",
        //     data: _temp,
        //     type: 'POST',
        //     success: function (rs) {
        //         callback(rs);
        //     }
        // });
    }
    /**
     * 取得任务详情
     * @param {type} user
     * @param {type} taskId
     * @param {type} callback
     * @returns {undefined}
     */
    function getTaskDetail(user, taskId, callback) {
        _temp = {
            USER_ID: user.LOGIN_ID,
            TASK_ID: taskId
        };
       queryData.ajax(_temp, "/service/1/warningDistribute/getTaskDetail", callback);
        // $.ajax({
        //     url: "json/getTaskDetail.json",
        //     dataType: "json",
        //     data: _temp,
        //     type: 'POST',
        //     success: function (rs) {
        //         callback(rs);
        //     }
        // });
    }
    /**
     * 接受确认
     * @param {type} user
     * @param {type} taskId
     * @param {type} callback
     * @returns {undefined}
     */
    function acceptTask(user, taskId, callback) {
        _temp = {
            USER_ID: user.LOGIN_ID,
            TASK_ID: taskId
        };
        queryData.ajax(_temp, "/service/1/warningDistribute/acceptTask", callback);
    }
    /**
     * 提交反馈
     * @param {type} user
     * @param {type} taskId
     * @param {type} cause
     * @param {type} rectification
     * @param {type} remarks
     * @param {type} callback
     * @returns {undefined}
     */
    function submitTask(user, taskId, cause, rectification, remarks, callback) {
        _temp = {
            USER_ID: user.LOGIN_ID,
            TASK_ID: taskId,
            CAUSE: cause,
            RECTIFICATION: rectification,
            REMARKS: remarks
        };
        queryData.ajax(_temp, "/service/1/warningDistribute/submitTask", callback);
    }
    return {
        getNotFeedbackTaskList: getNotFeedbackTaskList,
        getTaskDetail: getTaskDetail,
        acceptTask: acceptTask,
        submitTask: submitTask
    };
})();