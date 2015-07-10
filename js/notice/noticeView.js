$(function () {
    FastClick.attach(document.body);
});


var noticeView = (function(){
    function setPage_mynotice1() {
        var str = getTemplate("tpl/notice/notice_list.html");
        $(".st-pusher").html(str);
        click_Evrnt.page_convert();
    }

    function setPage_mynotice2() {
        var str = getTemplate("tpl/notice/notice_content.html");
        $(".st-pusher").html(str);
        click_Evrnt.page_convert();
    }
    return {
        setPage_mynotice1:setPage_mynotice1,
        setPage_mynotice2:setPage_mynotice2
    };
})();

var click_Evrnt = {
    page_convert: function () {
                $('.next').off('click').on('click', function (e) {
         var pageindex=$(this).attr("name");
         //animate_index.animate_next();
         //跳转到第2页面
         if(pageindex=="page_to_2"){
         setTimeout("noticeView.setPage_mynotice2()",200);
         }
         });

        $('.back').off('click').on('click', function (e) {
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
    animate_next: function () {
        $('div.container,div.header').addClass(animate_index.fadeOutLeft).one(animate_index.animationEnd, function () {
            $(this).removeClass(animate_index.fadeOutLeft);
            $(this).addClass(animate_index.fadeInRight).one(animate_index.animationEnd, function () {
                $(this).removeClass(animate_index.fadeInRight);
            });
        });
    },
    animate_back: function () {
        $('div.container,div.header').addClass(animate_index.fadeOutRight).one(animate_index.animationEnd, function () {
            $(this).removeClass(animate_index.fadeOutRight);
            $(this).addClass(animate_index.fadeInLeft).one(animate_index.animationEnd, function () {
                $(this).removeClass(animate_index.fadeInLeft);
            });
        });
    }
}
