var elementModule = (function () {
    function getListElement(data) {
        var div = '', createDate, status, taskId, taskName, list = [];
        lists = data;
        for (var i = 0, l = lists.length; i < l; i++) {
            list.push(lists[i]);
            createDate = lists[i].CREATE_DATE;
            status = lists[i].STATUS;
            taskId = lists[i].TASK_ID;
            taskName = lists[i].TASK_NAME;
            div += '<li class="sub-content"><a class="next" name="page_to_2"><i class="icon-information"></i><p>' + taskName + '</p><span>' + createDate + '</span></a></li>';
        }

        return {
            div: div,
            list: list
        };
    }

    function setDetailElement(data) {
        var task = data;
        var comment, createDate, endDate, remark, status, storeId, storeName, taskId, taskName, warningCondition;
        comment = task.COMMENT;
        createDate = task.CREATE_DATE;
        endDate = task.ENDDATE;
        remark = task.REMARK;
        status = task.STATUS;
        storeId = task.STORE_ID;
        storeName = task.STORE_NAME;
        taskId = task.TASK_ID;
        taskName = task.TASK_NAME;
        warningCondition = task.WARNING_CONDITION;
        $("#js_comment").html(comment);
        $("#js_create_date").html(createDate);
        $("#js_end_date").html(endDate);
        $("#js_remark").html(remark);
        if (status === "0") {
            $("#js_status").css("background-color", "gray");
            $("#js_status").html("未接收");
        } else {
            $("#js_status").css("background-color", "#3498db");
            $("#js_status").html("已接收");
        }
        $("#js_store_name").html(storeName);
        $("#js_task_name").html(taskName);
        $("#js_warning_condition").html(warningCondition);
    }

    return {
        getListElement: getListElement,
        setDetailElement: setDetailElement
    };
})();