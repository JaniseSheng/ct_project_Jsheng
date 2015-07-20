$(function() {
    FastClick.attach(document.body);
});

var myNoticeInfo = {
    content01: "<div id='st-trigger-effects'><div class='w-container header'><button data-effect='st-effect' name='page_to_1' class='back'><i class='icon-ic_keyboard_arrow_left_24px'></i></button><span>系统公告</span></div></div>",
    content02: "<div id='wrapper' class='container'><div id='notice-content' class='w-container clearfix'><div><div><img src='images/bgimg1.png'/></div><div>",
    content03: "<p>blue</p><div class='notice-head'><p> 手机短信包为天翼手机客户提供3种短信包月优惠产品，您可根据平时的短信发送量，选择适合的短信套餐包。</p></div>",
    content04: "<div><span>2015-06-15/08:00</span><i class='icon-chat_reply'></i></div></div></div>",
    content05: "<ul><li><p>Bany:</p><span>回复收到</span></li><p>2015-06-15/08:00</p></ul></div>",
    content06: "<div class='send_message'><form><input type='text' name='send' maxlength='50' size='18'></form><a class='button yellow'>发  送</a></div></div>",

    list01: "<div id='st-trigger-effects'><div class='w-container header'>",
    list02: "<button data-effect='st-effect'><i class='icon-ic_menu_24px'></i></button><span>系统公告</span></div></div>",
    list03: "<div class='container'><div class='w-container clearfix'><ul id='list' class='system_notice'></ul></div></div>",
    list04: "<script src='js/lib/sidebarEffects.js'></script><script src='js/lib/classie.js'></script>"
};


var noticeView = (function() {
    function setPage_mynotice1() {
        var str = myNoticeInfo.list01 + myNoticeInfo.list02 + myNoticeInfo.list03 + myNoticeInfo.list04;
        $(".st-pusher").html(str);
        click_Evrnt.page_convert();
    }

    function setPage_mynotice2() {
        var str = myNoticeInfo.content01 + myNoticeInfo.content02 + myNoticeInfo.content03 + myNoticeInfo.content04 + myNoticeInfo.content05 + myNoticeInfo.content06;
        $(".st-pusher").html(str);
        click_Evrnt.page_convert();
    }
    return {
        setPage_mynotice1: setPage_mynotice1,
        setPage_mynotice2: setPage_mynotice2
    };
})();

var click_Evrnt = {
    page_convert: function() {
        $('.next').off('click').on('click', function(e) {
            var pageindex = $(this).attr("name");
            //animate_index.animate_next();
            //跳转到第2页面
            if (pageindex == "page_to_2") {
                setTimeout("noticeView.setPage_mynotice2()", 200);
            }
        });

        $('.back').off('click').on('click', function(e) {
            var pageindex = $(this).attr("name");
            //animate_index.animate_next();
            //跳转到第2页面
            if (pageindex == "page_to_1") {
                setTimeout("noticeView.setPage_mynotice1()", 200);
            }
        });
    }
}

//动画class初始化
animate_index = {
    fadeOutUp: 'animated fadeOutUpBig',
    fadeInDown: 'animated fadeInDown',
    fadeOutLeft: 'animated fadeOutLeftBig',
    fadeOutRight: 'animated fadeOutRightBig',
    fadeInRight: 'animated fadeInRight',
    fadeInLeft: 'animated fadeInLeft',
    fadeOutDown: 'animated fadeOutDownBig',
    fadeInUp: 'animated fadeInUp',
    slideInUp: 'animated slideInUp',
    slideOutDown: 'animated slideOutDown',
    animationEnd: 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
    animate_next: function() {
        $('div.container,div.header').addClass(animate_index.fadeOutLeft).one(animate_index.animationEnd, function() {
            $(this).removeClass(animate_index.fadeOutLeft);
            $(this).addClass(animate_index.fadeInRight).one(animate_index.animationEnd, function() {
                $(this).removeClass(animate_index.fadeInRight);
            });
        });
    },
    animate_back: function() {
        $('div.container,div.header').addClass(animate_index.fadeOutRight).one(animate_index.animationEnd, function() {
            $(this).removeClass(animate_index.fadeOutRight);
            $(this).addClass(animate_index.fadeInLeft).one(animate_index.animationEnd, function() {
                $(this).removeClass(animate_index.fadeInLeft);
            });
        });
    }
}