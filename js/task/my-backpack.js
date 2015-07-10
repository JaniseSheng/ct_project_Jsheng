/* global backpackController, loginUser */
$(function () {
    "use strict";
//    FastClick.attach(document.body);
    $('.logout').on('click', function () {
        if (confirm("是否登出")) {
            loginUser.loginOut();
        }
    });

    if (!loginUser.isLogin()) {
        window.location.href = 'index.html';
    }

    var user = loginUser.getUserFromCookie();

    $("#js_UserName").html(user.NAME);

    backpackController.setUser(user);
    backpackController.pageToday();
});