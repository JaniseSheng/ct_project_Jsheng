"user strict";
/**
 * 登录用户
 * @type Function|loginUser_L38.loginUserAnonym$0
 */
var loginUser = (function($) {
    var user = {
        LOGIN_NAME: "", //登录名
        LOGIN_PWD: "", //登录密码
        LOGIN_CRM: "", //系统CRM
        DEVIVE_TYPE: "android", //设备类型 ios，android
        DEVICE_NAME: "", //设备名称
        DEVICE_VERSION: "", //设备版本号
        APP_VERSION: "", //app版本号
        LOGIN_ID: "", //登录用户ID
        ALIAS_STATE: "", //别名与服务器绑定状态
        NAME: "", //页面显示用户名称（后台返回的LOGIN_ID）
        PULISH_PERMISSION: "", //发表公告权限
        RESOLVE_PERMISSION: "", //解决日常权限
        UPLOAD_PERMISSION: "", //上传图片权限
    };
    /**
     * 保存用户信息
     * @param {type} loginName 登录名称
     * @param {type} loginPassword 登录密码
     * @returns {undefined}
     */
    function setUser(loginName, loginPassword) {
        user.LOGIN_NAME = loginName;
        user.LOGIN_PWD = loginPassword;
        user.LOGIN_CRM = loginName;
    }
    /**
     * 后台返回数据，更新用户信息
     * @param {type} json
     * @returns {undefined}
     */
    function updateUser(json) {
        user.ALIAS_STATE = json.ALIAS_STATE;
        user.LOGIN_ID = json.LOGIN_ID;
        user.NAME = json.LOGIN_NAME;
        user.PULISH_PERMISSION = json.PULISH_PERMISSION;
        user.RESOLVE_PERMISSION = json.RESOLVE_PERMISSION;
        user.UPLOAD_PERMISSION = json.UPLOAD_PERMISSIO;
    }

    /**
     * 从cookie获取用户信息保存到对象中
     * @returns {loginUser}
     */
    function getUserFromCookie() {
        user.LOGIN_NAME = $.cookie('LOGIN_NAME');
        user.LOGIN_ID = $.cookie('LOGIN_ID');
        user.NAME = $.cookie('NAME');
        user.PULISH_PERMISSION = $.cookie('PULISH_PERMISSION');
        user.PULISH_PERMISSION = $.cookie('PULISH_PERMISSION');
        user.ALIAS_STATE = $.cookie('ALIAS_STATE');
//        user.LOGIN_PWD = $.cookie("PASSWORD");
        return user;
    }
    /**
     * 判断用户是否已经登录
     * @returns {Boolean}
     */
    function isLogin() {

        if($.cookie('LOGIN_ID') === null ||$.cookie('LOGIN_ID') === undefined){
            return false;
        }
        return true;

    }
    /**
     * 获取用户信息
     * @returns {loginUser}
     */
    function getUser() {
        return user;
    }
    /**
     * 登出
     * @returns {String}
     */
    function loginOut() {
//        $.cookie('LOGIN_NAME', null);
        $.cookie('LOGIN_ID', null);
//        $.cookie('NAME', null);
//        $.cookie('PULISH_PERMISSION', null);
//        $.cookie('PULISH_PERMISSION', null);
//        $.cookie('ALIAS_STATE', null);
        user = null;
        window.location.href = "index.html";
        return ("loginOut");
    }

    return {
        setUser: setUser,
        getUserFromCookie: getUserFromCookie,
        updateUser: updateUser,
        getUser: getUser,
        isLogin: isLogin,
        loginOut: loginOut
    };
})(jQuery);