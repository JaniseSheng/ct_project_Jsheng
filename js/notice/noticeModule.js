/* global queryData */
"user strict";
/**
 * 公告
 * @type Function|noticeModule_L5.noticeModuleAnonym$0
 */
var noticeModule = (function (queryData) {
    var _tmpdata = {};
    /**
     * 读取公告列表
     * @param {type} loginUser
     * @param {type} currentPage
     * @param {type} callback
     * @returns {undefined}
     */
    function getBBSList(loginUser, currentPage, callback) {
        var pageSize = 10;
        _tmpdata = {
            LOGIN_ID: loginUser.LOGIN_ID,
            PAGE_SIZE: pageSize * currentPage,
            CURRENT_PAGE: 1
        };
        queryData.ajax(_tmpdata, "/service/1/bbs/read", callback);
    }
    /**
     * 修改公告已读设置
     * @param {type} loginUser
     * @param {type} noticeId
     * @param {type} callback
     * @returns {undefined}
     */
    function setBBSRead(loginUser, noticeId, callback) {
        _tmpdata = {
            NOTICE_ID: noticeId,
            LOGIN_ID: loginUser.LOGIN_ID
        };
        queryData.ajax(_tmpdata, "/service/1/bbs/readOn", callback);
    }
    /**
     * 读取公告评论
     * @param {type} loginUser
     * @param {type} noticeId
     * @param {type} currentPage
     * @param {type} callback
     * @returns {undefined}
     */
    function getBBSComment(loginUser, noticeId, currentPage, callback) {
        var pageSize = 10;
        _tmpdata = {
            LOGIN_ID: loginUser.LOGIN_ID,
            NOTICE_ID: noticeId,
            PAGE_SIZE: pageSize * currentPage,
            CURRENT_PAGE: 1
        };
        queryData.ajax(_tmpdata, "/service/1/bbs/readComment", callback);
    }
    /**
     * 提交用户评论
     * @param {type} loginUser
     * @param {type} noticeId
     * @param {type} content 评论内容
     * @param {type} callback
     * @returns {undefined}
     */
    function uploadComment(loginUser, noticeId, content, callback) {
        _tmpdata = {
            LOGIN_ID: loginUser.LOGIN_ID,
            NOTICE_ID: noticeId,
            CONTENT: content
        };
        queryData.ajax(_tmpdata, "/service/1/bbs/userComment", callback);
    }
    /**
     * 发布公告
     * @param {type} loginUser
     * @param {type} content
     * @param {type} callback
     * @returns {undefined}
     */
    function addBBS(loginUser, content, callback) {
        _tmpdata = {
            LOGIN_ID: loginUser.LOGIN_ID,
            CONTENT: content
        };
        queryData.ajax(_tmpdata, "/service/1/bbs/add", callback);
    }
    return {
        getBBSList: getBBSList,
        setBBSRead: setBBSRead,
        getBBSComment: getBBSComment,
        uploadComment: uploadComment,
        addBBS: addBBS
    };
})(queryData);