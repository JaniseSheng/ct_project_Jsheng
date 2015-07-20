/* global baseQuestUrl */

var element = (function () {
    /**
     * 返回今日任务列表页面组件
     * @param {type} data
     * @returns {String}
     */
    function getTodayTasksPage(data) {
        var name, itemList, taskId, taskTitle, taskDate, isFinish, storeId, taskType;
        var div = '';
        var rs = data;
        for (var i = 0; i < rs.length; i++) {
            name = rs[i].NAME;
            itemList = rs[i].ITEMLIST;
            div += '<li><h2>' + name + '</h2><ul id="js_task_' + i + '">';
            for (var s = 0; s < itemList.length; s++) {
                taskId = itemList[s].TASKID;
                taskTitle = itemList[s].TASKTITLE;
                taskDate = itemList[s].TASKDATE;
                isFinish = itemList[s].ISFINISH;
                storeId = itemList[s].STOREID;
                taskType = itemList[s].TASKTYPE;
                div += '<li class="sub-content"><a class="next" name="page_to_2"><i class="icon-information"></i><p>' + taskTitle + '</p><span>' + taskDate + '</span></a></li>';
            }
            div += '</ul></li>';
        }
        div += '</ul></div>';
        return div;
    }
    /**
     * 返回今日专项任务列表页面组件
     * @param {type} data
     * @returns {String}
     */
    function getTodaySpecialTasksPage(data) {
        var div = '', isFinish, taskDate, taskId, taskTitle, taskType;
        var tasks = data;
        for (var i = 0, l = tasks.length; i < l; i++) {
            isFinish = tasks[i].ISFINISH;
            taskDate = tasks[i].TASKDATE;
            taskId = tasks[i].TASKID;
            taskTitle = tasks[i].TASKTITLE;
            taskType = tasks[i].TASKTYPE;
            if (isFinish === "0") {
                div += '<li class="sub-content" style="display:none;"><a class="next" name="page_to_2"><i class="icon-information"></i><p>' + taskTitle + '</p><span>' + taskDate + '</span></a></li>';
            } else {
                div += '<li class="sub-content"><a class="next" name="page_to_2"><i class="icon-information"></i><p>' + taskTitle + '</p><span>' + taskDate + '</span></a></li>';
            }

        }
        return div;
    }
    /**
     * 返回门店信息页面组件
     * @param {type} data
     * @returns {String}
     */
    function getStoreInfoPage(data) {
        var storeAddress, storeArea, storeDepartment, storeManager, storeName;
        var store = data;
        storeAddress = store.STORE_ADDRESS;
        storeArea = store.STORE_AREA;
        storeDepartment = store.STORE_DEPARTMENT;
        storeManager = store.STORE_MANAGER;
        storeName = store.STORE_NAME;
        var div = '';
        div += '<li><i class="icon-home"></i><p>所在门店：</p><span>' + storeName + '</span></li><li><i class="icon-net_closed"></i><p>所属渠道：</p><span>' + storeDepartment + '</span></li>';
        div += '<li><i class="icon-map_route"></i><p>门店地址：</p><span>' + storeAddress + '</span></li><li><i class="icon-user"></i><p>负责导购：</p><span>' + storeManager + '</span></li>';
        return div;
    }

    /*********************************                      编辑任务页面                  ****************************************************/
    /**
     * 返回任务详情页面组件
     * @param {type} data
     * @returns {elementModule_L1.getTaskDetailPage.elementModuleAnonym$5}
     */
    function getTaskDetailPage(data) {
        //        var defaultScore, forckRemark, id, introduce, isNeedPhoto, isSpecial, itemType, scoreFloor, scoreUpper, title, options;
        //用来保存提交数据;
        var rs, taskRs = [];
        var itemList, childrenList;

        //判断是日常、巡店任务还是专项任务
        if (data.zxPlanContent === undefined) {
            rs = data;
        } else if (data.zxPlanContent !== undefined) {
            rs = data.zxPlanContent;
        }
        var div = '', div1 = '';
        for (var i = 0; i < rs.length; i++) {
            var task = rs[i];
            var taskId = rs[i].ID;
            var taskName = rs[i].NAME;
            //ITEMLIST
            if (task.ITEMLIST.length > 0) {
                div += '<li><a rel="panel' + i + '" class="SearchStore tab">' + taskName + '</a></li>';
                div1 += '<div class="panel" id = "js_task_' + i + '"><ul class="assessment">';
                taskRs.push({
                    CLASSID: taskId,
                    CLASSNAME: taskName,
                    ITEMLIST: []
                });
                for (var n = 0; n < task.ITEMLIST.length; n++) {
                    var itemList = task.ITEMLIST[n];
                    var title = itemList.TITLE;
                    var id = itemList.ID;
                    var introduce = itemList.INTRODUCE;
                    var itemType = itemList.ITEM_TYPE;
                    taskRs[i].ITEMLIST.push({
                        ID: id,
                        REMARK: "",
                        SCORE: "0",
                        QUALIFIED: "0",
                        ITEMTYPE: itemType,
                        IMAGEID: []
                    });

                    var subPage = getSubsTypePage(itemList);

                    div1 += '<li id = "' + id + '"><h2>' + subPage.specialHtml + title + '</h2>';
                    div1 += '<form><select class="js_select">' + subPage.optionsHtml + '</select></form>';
                    div1 += '<span>' + introduce + '</span><textarea class="js_textarea" name="content" placeholder="备注:"></textarea>' + subPage.needPhotoHtml + '</li>';
                }
                div1 += '</ul></div>';
                //CHILDRENLIST
            } else if (task.CHILDRENLIST.length > 0) {
                childrenList = task.CHILDRENLIST;
                div += '<li><a rel="panel' + i + '" class="SearchStore tab">' + taskName + '</a></li>';
                div1 += '<div class="panel" id="js_task_' + i + '"><ul class="assessment">';
                taskRs.push({
                    CLASSID: taskId,
                    CLASSNAME: taskName,
                    CHILDRENLIST: []
                });
                for (var a = 0; a < childrenList.length; a++) {
                    var name = childrenList[a].NAME;
                    var id = childrenList[a].ID;
                    var itemList1 = childrenList[a].ITEMLIST;
                    taskRs[i].CHILDRENLIST.push({
                        CLASSID: id,
                        CLASSNAME: name,
                        ITEMLIST: []
                    });
                    div1 += '<li><h4 id="real_Name">' + name + '</h4><ul class="subul">';
                    for (var b = 0; b < itemList1.length; b++) {
                        var title = itemList1[b].TITLE;
                        var introduce = itemList1[b].INTRODUCE;
                        var itemType = itemList1[b].ITEM_TYPE;
                        var id = itemList1[b].ID;

                        taskRs[i].CHILDRENLIST[a].ITEMLIST.push({
                            ID: id,
                            REMARK: "",
                            SCORE: "0",
                            QUALIFIED: "0",
                            ITEMTYPE: itemType,
                            IMAGEID: []
                        });

                        var subPage = getSubsTypePage(itemList1[b]);

                        div1 += '<li id = "' + id + '"><h5>' + subPage.specialHtml + title + '</h5><form><select class="js_select" style="float:right">' + subPage.optionsHtml + '</select></form>';
                        div1 += '<span>' + introduce + '</span><textarea class="js_textarea" name="content" placeholder="备注:"></textarea>' + subPage.needPhotoHtml + '</li>';
                    }
                    div1 += '</ul></li>';
                }
                div1 += '</ul></div>';
            }
        }
        return {
            titleTable: div,
            infoTable: div1,
            taskRs: taskRs
        };
    }
    //
    /**
     * 判断子项类型生成html字符串
     * @param {type} itemList
     * @returns {needPhotoHtml,optionsHtml,specialHtml}
     */
    function getSubsTypePage(itemList) {
        var defaultScore = itemList.DEFAULT_SCORE;
        var id = itemList.ID;
        var isNeedPhoto = itemList.IS_NEED_PHOTO;
        var isSpecial = itemList.IS_SPECIAL;
        var itemType = itemList.ITEM_TYPE;
        var scoreFloor = itemList.SCORE_FLOOR;
        var scoreUpper = itemList.SCORE_UPPER;
        var needPhotoHtml = '', optionsHtml = '', specialHtml = '';
        //加分项
        if (isSpecial === "1") {
            specialHtml += '<span class="icon-favorites"></span>';
        }
        //判断是否拍照
        if (isNeedPhoto === "1") {
            needPhotoHtml = '<a class="pic_file button yellow"><form class="js_form" id="js_img" enctype="multipart/form-data"><input class="file_input" type="file" id="' + "img" + id + '" name="IMAGEFILE" accept="image/*" capture="camera"/>上传照片</form></a>';
        }
        //生成select的option项
        if (itemType === "0") {
            //是否项 
            if (defaultScore === '0' || defaultScore === "") {
                optionsHtml += '<option value="0" selected="selected">不合格</option>';
                optionsHtml += '<option value="1">合格</option>';
            } else if (defaultScore === '1') {
                optionsHtml += '<option value="0">不合格</option>';
                optionsHtml += '<option value="1" selected="selected">合格</option>';
            }
        } else if (itemType === "1") {
            //打分项
            for (var m = parseInt(scoreFloor); m < parseInt(scoreUpper) + 1; m++) {
                if (defaultScore == m) {
                    optionsHtml += '<option value="' + defaultScore + '" selected = "selected">' + defaultScore + '</option>';
                } else {
                    optionsHtml += '<option value="' + m + '">' + m + '</option>';
                }
            }
        }
        return {
            needPhotoHtml: needPhotoHtml,
            optionsHtml: optionsHtml,
            specialHtml: specialHtml
        };
    }
    /**
     * 专项任务通用页面组件
     * @param {type} data
     * @returns {undefined}
     */
    function getSimpleSpecialTaskDetailPage(data) {
        var patrolContentType, planContent, planContentId, planId, planName;
        var rs = data.zxPlanContent;
        patrolContentType = rs.patrolContentType;
        planContent = rs.planContent;
        planContentId = rs.planContentId;
        planId = rs.planId;
        planName = rs.planName;
        var div = planContent;
        var taskRs = {
            patrolContentType: patrolContentType,
            planContentId: planContentId,
            planId: planId,
            planName: planName
        };
        return {
            info: div,
            taskRs: taskRs
        };
    }


    /*********************************                      任务历史结果页面                  ****************************************************/
    /**
     * 
     * @param {type} data
     * @returns {titleTable,infoTable,taskRs}
     */
    function getTaskHistoryDetailPage(data) {
        //        var defaultScore, forckRemark, id, introduce, isNeedPhoto, isSpecial, itemType, scoreFloor, scoreUpper, title, options;
        //用来保存提交数据;
        //        var taskRs = [];
        var itemList, childrenList;
        var rs = data;
        var div = '', div1 = '';
        for (var i = 0; i < rs.length; i++) {
            var task = rs[i];
            var taskId = rs[i].ID;
            var taskName = rs[i].NAME;
            if (task.ITEMLIST !== undefined && task.ITEMLIST.length > 0) {
                div += '<li><a rel="panel' + i + '" class="SearchStore tab">' + taskName + '</a></li>';
                div1 += '<div class="panel" id = "js_task_' + i + '"><ul class="assessment">';
                //                taskRs.push({
                //                    CLASSID: taskId,
                //                    CLASSNAME: taskName,
                //                    ITEMLIST: []
                //                });
                for (var n = 0; n < task.ITEMLIST.length; n++) {
                    var itemList = task.ITEMLIST[n];
                    var title = itemList.TITLE;
                    var id = itemList.ID;
                    var introduce = itemList.INTRODUCE;
                    var itemType = itemList.ITEM_TYPE;
                    var remarkInfo = itemList.REMARK_INFO;
                    //                    taskRs[i].ITEMLIST.push({
                    //                        ID: id,
                    //                        REMARK: "",
                    //                        SCORE: "0",
                    //                        QUALIFIED: "0",
                    //                        ITEMTYPE: itemType,
                    //                        IMAGEID: []
                    //                    });

                    var subPage = getHistorySubsTypePage(itemList);
                    //如果返回的备注里没有内容，则不显示备注框
                    var textDispaly = "display:block";
                    // if (remarkInfo === "") {
                    //     textDispaly = "display:none";
                    // }
                    div1 += '<li><h2>' + subPage.specialHtml + title + '</h2>';
                    div1 += '<form><select disabled="disabled">' + subPage.optionsHtml + '</select></form>';
                    div1 += '<span>' + introduce + '</span><textarea name="content" style="'+textDispaly+'" placeholder="备注:">' + remarkInfo + '</textarea>' + subPage.needPhotoHtml + '</li>';
                }
                div1 += '</ul></div>';
                //CHILDRENLIST
            } else if (task.CHILDRENLIST !== undefined && task.CHILDRENLIST.length > 0) {
                childrenList = task.CHILDRENLIST;
                div += '<li><a rel="panel' + i + '" class="SearchStore tab">' + taskName + '</a></li>';
                div1 += '<div class="panel" id="js_task_' + i + '"><ul class="assessment">';
                //                taskRs.push({
                //                    CLASSID: taskId,
                //                    CLASSNAME: taskName,
                //                    CHILDRENLIST: []
                //                });
                for (var a = 0; a < childrenList.length; a++) {
                    var name = childrenList[a].NAME;
                    var id = childrenList[a].ID;
                    var itemList1 = childrenList[a].ITEMLIST;
                    //                    taskRs[i].CHILDRENLIST.push({
                    //                        CLASSID: id,
                    //                        CLASSNAME: name,
                    //                        ITEMLIST: []
                    //                    });
                    div1 += '<li><h4 id="real_Name">' + name + '</h4><ul class="subul">';
                    for (var b = 0; b < itemList1.length; b++) {
                        var title = itemList1[b].TITLE;
                        var introduce = itemList1[b].INTRODUCE;
                        // var itemType = itemList1[b].ITEM_TYPE;
                        // var id = itemList1[b].ID;
                        var remarkInfo = itemList1[b].REMARK_INFO;
                        //                        taskRs[i].CHILDRENLIST[a].ITEMLIST.push({
                        //                            ID: id,
                        //                            REMARK: "",
                        //                            SCORE: "0",
                        //                            QUALIFIED: "0",
                        //                            ITEMTYPE: itemType,
                        //                            IMAGEID: []
                        //                        });

                        var subPage = getHistorySubsTypePage(itemList1[b]);
                        //如果返回的备注里没有内容，则不显示备注框
                        var textDispaly = "display:block";
                        // if (remarkInfo === "") {
                        //     textDispaly = "display:none";
                        // }
                        div1 += '<li><h5>' + subPage.specialHtml + title + '</h5><form><select style="float:right" disabled="disabled">' + subPage.optionsHtml + '</select></form>';
                        div1 += '<span>' + introduce + '</span><textarea name="content" style="'+textDispaly+'" placeholder="备注:">' + remarkInfo + '</textarea>' + subPage.needPhotoHtml + '</li>';
                    }
                    div1 += '</ul></li>';
                }
                div1 += '</ul></div>';
            }
        }
        return {
            titleTable: div,
            infoTable: div1
            //            taskRs: taskRs
        };
    }
    //
    /**
     * 判断子项类型生成html字符串
     * @param {type} itemList
     * @returns {needPhotoHtml,optionsHtml,specialHtml}
     */
    function getHistorySubsTypePage(itemList) {

        // ID: 1422949864211
        // IMAGES: Array[0]
        // INTRODUCE: "缺一项配分扣完"
        // IS_HAVE_IMAGE: "0"
        // IS_QUALITY: ""
        // ITEM_TYPE: "1"
        // REMARK_INFO: "sf"
        // SCORE: "4"
        // TITLE: 

        // var remarkInfo = itemList.REMARK_INFO;
        var id = itemList.ID;
        var isHaveImage = itemList.IS_HAVE_IMAGE;
        var isQuality = itemList.IS_QUALITY;
        var itemType = itemList.ITEM_TYPE;
        var score = itemList.SCORE;
        var isSpecial = itemList.IS_SPECIAL;
        var images = itemList.IMAGES;
        var needPhotoHtml = '', optionsHtml = '', specialHtml = '';
        //加分项
        if (isSpecial !== undefined && isSpecial === "1") {
            specialHtml += '<span class="icon-favorites"></span>';
        }
        //判断是否存在照片
        if (isHaveImage === "1") {
            for (var t = 0; t < images.length; t++) {
                needPhotoHtml += '<img src="' + baseQuestUrl + images[t] + '" alt="">';
            }
        }
        //生成select的option项
        if (itemType === "0") {
            //是否项 
            if (isQuality === '0') {
                optionsHtml += '<option value="0" selected="selected">不合格</option>';
            } else if (isQuality === '1') {
                optionsHtml += '<option value="1" selected="selected">合格</option>';
            }
        } else if (itemType === "1") {
            //打分项
            optionsHtml += '<option value="' + score + '" selected = "selected">' + score + '</option>';
        }
        return {
            needPhotoHtml: needPhotoHtml,
            optionsHtml: optionsHtml,
            specialHtml: specialHtml
        };
    }

    return {
        getTodayTasksPage: getTodayTasksPage,
        getTodaySpecialTasksPage: getTodaySpecialTasksPage,
        getStoreInfoPage: getStoreInfoPage,
        getTaskDetailPage: getTaskDetailPage,
        getTaskHistoryDetailPage: getTaskHistoryDetailPage,
        getSimpleSpecialTaskDetailPage: getSimpleSpecialTaskDetailPage
    };
})();