var warningView = (function () {
    function setPageList() {
        var head = '<button data-effect="st-effect" class="back"><i class="icon-ic_keyboard_arrow_left_24px"></i></button>';
        var spt = '<script src="js/lib/sidebarEffects.js"></script>';
        $('.w-container.header').prepend(head);
        var list = getTemplate("tpl/warning/list.html");
        $('#scroller').html(list);
        $('#scroller').append(spt);
    }
    function setPageDetail() {
        var head = '<button data-effect="st-effect" class="back"><i class="icon-ic_keyboard_arrow_left_24px"></i></button>';
        var spt = '<script src="js/lib/sidebarEffects.js"></script>';
         $('.w-container button').remove();
        $('.w-container.header').prepend(head);
        var list = getTemplate("tpl/warning/detail.html");
        $('#scroller').html(list);
    }
    return {
        setPageList: setPageList,
        setPageDetail:setPageDetail
    };
})();