/* global queryData */
"user strict";

var loginController = (function (queryData, $) {
    var _tmpUser = {};
    /**
     * 登录
     * @param {obj} user 用户
     * @param {type} callback
     * @returns {undefined}
     */
    function doLogin(user, callback) {
        _tmpUser = {
            LOGIN_NAME: user.LOGIN_NAME,
            LOGIN_PWD: user.LOGIN_PWD,
            DATE_TYPE: user.DATE_TYPE,
            LOGIN_CRM: user.LOGIN_CRM
            //            LOGIN_ID: user.LOGIN_ID
        };
        queryData.ajax(_tmpUser, "/service/1/auth/login", callback);
    }

    /**
     *  判断登录是否成功
     * @param {type} data
     * @param {type} callback
     * @returns {undefined}
     */
    function loginResult(data, callback) {
        console.log(data);
        if (data.LOGIN_ID !== undefined) {
            callback(data);
        } else {
            alert(data.RESPMSG);
        }
    }

    return {
        doLogin: doLogin,
        loginResult: loginResult
    };

})(queryData, jQuery);
