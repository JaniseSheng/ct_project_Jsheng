/* global warningModule, elementModule, warningView */
"user strict";
var warningController = (function () {
    var user = {};
    var obj = {};
    obj.list = [];

    //保存用户信息到backpackController
    function setUser(loginUser) {
        user = loginUser;
    }
    //显示预警派单列表
    function pageList() {
        warningView.setPageList();
        warningModule.getNotFeedbackTaskList(user, function (rs) {
            console.log(rs);
            var taskList = elementModule.getListElement(rs);
            obj.list = taskList.list;
            $('#js_task_0').html(taskList.div);

            var li = $(".next");
            li.on('click', function () {
                var id = li.index(this);
                console.log(id);
                taskDetail(obj.list[id]);
            });
        });
    }
    //显示预警派单详情页
    function taskDetail(data) {
        warningView.setPageDetail();
        var a = $("a:last");
        a.html("确认接收");
        $('.back').on('click', function () {
            pageList();
        });
        //取得任务详情
        warningModule.getTaskDetail(user, data.TASK_ID, function (rs) {
            console.log(rs);
            //显示任务内容
            elementModule.setDetailElement(rs);
            if (rs.STATUS === "0") {
                //确认接收
                a.on("click", function () {
                    //提交确认接收
                    if (confirm("是否确认接收?")) {
                        warningModule.acceptTask(user, rs.TASK_ID, function (e) {
                            console.log(e);
                            //显示输入页面
                            $("#panel1").addClass("activ");
                            a.html("提交");
                            //更改状态
                            $("#js_status").css("background-color", "#3498db");
                            $("#js_status").html("已接收");
                            //提交反馈信息
                            a.unbind().on("click", function () {
                                var cause, rectification, remarks;
                                cause = $("textarea")[0].value;
                                rectification = $("textarea")[1].value;
                                remarks = $("textarea")[2].value;
                                if (confirm("是否提交?")) {
                                    warningModule.submitTask(user, rs.TASK_ID, cause, rectification, remarks, function (e) {
                                        console.log(e);
                                        warningController.pageList();
                                    });
                                }
                            });
                        });
                    }
                });
            }
            if (rs.STATUS === "1") {
                //显示输入页面
                $("#panel1").addClass("activ");
                a.show();
                a.html("提交");
                //更改状态
                $("#js_status").css("background-color", "#3498db");
                $("#js_status").html("已接收");
                //提交反馈信息
                a.unbind().on("click", function () {
                    var cause, rectification, remarks;
                    cause = $("textarea")[0].value;
                    rectification = $("textarea")[1].value;
                    remarks = $("textarea")[2].value;
                    if (confirm("是否提交?")) {
                        warningModule.submitTask(user, rs.TASK_ID, cause, rectification, remarks, function (e) {
                            console.log(e);
                            warningController.pageList();
                        });
                    }
                });
            }
            if (rs.STATUS === "2") {

            }

        });
    }
    return {
        setUser: setUser,
        pageList: pageList
    };
})();