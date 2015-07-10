/* global activityController, loginUser,$ */

$(function () {
//	FastClick.attach(document.body);

    if ($.cookie('name') === null || $.cookie('loginId') === null) {
        window.location.href = 'index.html';
    }
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
        activityController.pageMarketList(user);
    }
});