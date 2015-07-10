/* global loginUser, storeModule, storeController */
$(function () {

    // FastClick.attach(document.body);
    $('.logout').on('click', function () {
        if (confirm("是否登出")) {
            loginUser.loginOut();
        }
    });

    if (!loginUser.isLogin()) {
        loginUser.loginOut();
    } else {
        var user = loginUser.getUserFromCookie();
        $("#js_UserName").html(user.NAME);
        storeController.pageOne(user);
    }

});