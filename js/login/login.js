/* global loginUser, loginController */
"user strict";

$(function () {
    document.addEventListener('touchmove', function (e) {
        e.preventDefault();
    }, false);

    if ($.cookie("saved") === "true") {
        $("#checkboxG1").attr("checked", "checked");
        $("#js_username").val($.cookie("LOGIN_NAME"));
//        $("#js_password").val($.cookie("PASSWORD"));
    }

    //登录信息提交
    $("#js_submit").on('click', function () {
        var name = $('#js_username').val();
        var pwd = $('#js_password').val();
        loginUser.setUser(name, pwd);

        var ck = $("#checkboxG1");
        if (ck.prop("checked") === true) {
            console.log("true");
            $.cookie("saved", "true");
        } else {
            console.log("false");
            $.cookie("saved", "false");
        }

        //登录
        loginController.doLogin(loginUser.getUser(), function (e) {
            //判断是否登录成功
            loginController.loginResult(e, function (rs) {
                console.log(rs);

                loginUser.updateUser(rs);
                var user = loginUser.getUser();

                //设置cookie
                //var expiresDate = new Date();
                // 设置为一小时后cookie失效,第一个60为分钟
                // expiresDate.setTime(expiresDate.getTime() + (60 * 60 * 1000));
                // $.cookie('loginName',loginUser.LOGIN_NAME,{expires:expiresDate});
                // $.cookie('loginId',loginUser.LOGIN_ID,{expires:expiresDate});
                // $.cookie('name',loginUser.NAME,{expires:expiresDate});
                //关闭浏览器后cookie失效
                $.cookie('LOGIN_NAME', user.LOGIN_NAME);
                $.cookie('LOGIN_ID', user.LOGIN_ID);
                $.cookie('NAME', user.NAME);
                $.cookie('PULISH_PERMISSION', user.PULISH_PERMISSION);
                $.cookie('PULISH_PERMISSION', user.PULISH_PERMISSION);
                $.cookie('ALIAS_STATE', user.ALIAS_STATE);
//                $.cookie("PASSWORD",user.LOGIN_PWD);
                console.log(user);
                //页面转到我的
                window.location.href = "my-backpack.html";
            });
        });
    });

});