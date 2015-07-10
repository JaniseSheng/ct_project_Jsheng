/* global backObj, loginUser, storeModule, storeView, baiduMap, baseQuestUrl, getinfo */
"use strict";
var storeController = (function () {
    window.obj = {
        index: 1,
        one: {
            //            storeList:{},
            keyword: "",
            listIndex: 1
        },
        two: {
            storeList: {},
            listIndex: 1
        },
        three: {},
        four: {}
    };

    var user = {};

    function pageOne(us) {
        user = us;
        storeView.setPage_mySore_1();

        //加载地图，
        baiduMap.initialize();
        //加载infoWindow
        if (obj.index === 1) {
            storeModule.queryStore(user, obj.one.listIndex, obj.one.keyword, function (rs) {
                console.log(rs);
                baiduMap.showInfoWindow(rs.LIST);
                obj.one.storeList = rs;
            });
        } else {
            baiduMap.showInfoWindow(obj.one.storeList.LIST);
        }

        //通过关键字查询门店列表
        $("#search_bt").on('click', function () {
            var keyword = "";
            keyword = getinfo.page_1_search();
            console.log(keyword);
            var listIndex = 1;
            storeController.pageTwo(listIndex, keyword);
        });
        obj.index = 1;
    }
    //传列表和关键字
    function pageTwo(listIndex, keyword, more) {

        storeView.setPage_mySore_2();

        storeController.showList(listIndex, keyword, more);

        $('.load-more').on('click', function () {
            var more = 0;
            listIndex += 1;
            console.log(listIndex);
            storeController.showList(listIndex, keyword, more);
        });
        $('.back').on('click', function () {
            storeController.pageOne(user);
        });
        obj.one.keyword = keyword;
    }
    //传门店的详细内容
    function pageThree(data) {
        // backObj.page = 3;
        //门店简介
        obj.three.info = data;
        var tmp = null;
        if (arguments.length === 0) {
            return;
        } else if (arguments.length === 1) {
            tmp = data;
        }
        console.log(tmp);

        storeModule.queryStoreDetail(user, tmp.STORE_ID, function (e) {
            console.log(e);
            var data = e;

            storeView.setPage_mySore_3();

            storeController.setPage_showStoreDetail(data, function () {
                var store_id = data.STORE_ID;
                obj.three.data = data;
                //侦听负责人按钮
                $(".next.button.purple").on('click', function (e) {
                    console.log("选择负责人");
                    console.log(e);
                    //					loading('remove');
                    storeModule.queryStoreManager(store_id, function (e) {
                        console.log(e);
                        storeController.pageFour(e, data.STORE_MANAGER);
                    });
                });
                //侦听图片,上传图片
                $(":input").change(function () {
                    // var fileElementId = this.arrt('id');
                    console.log($(this).attr('id'));
                    var fileElementId = $(this).attr('id');
                    var imgPosition = fileElementId.substr(-1);
                    console.log(imgPosition);

                    uploadImage(fileElementId, function (e) {
                        console.log(e);
                        storeModule.uploadImage(user, tmp.STORE_ID, imgPosition, e.IMAGEID, function (e) {
                            console.log(e);
                            storeController.pageThree(obj.three.info);
                            console.log("reload...");
                        });
                    });
                });
            });

            $('.back.pageback').on('click', function () {
                storeController.pageTwo(obj.two.listIndex, obj.one.keyword);
            });
        });

        obj.index = 3;
    }
    //传门店的负责人列表
    /**
     * [pageFour description]
     * @param  {[type]} 
     * @return {[type]}	
     */
    function pageFour(data, manager) {
        // backObj.page = 4;
        obj.four.data = data;
        storeView.setPage_mySore_4();
        $('#js_manager').html("负责人：" + manager);
        //重置select项,并添加把管理人员到option中
        $('#leader_val').html("");
        if (typeof (data.LIST) != 'undefined') {
            var leaders = data.LIST;
            if (leaders.length > 0) {
                $('#leader_val').append("<option value='selected'>" + leaders[0].NAME + "</option>");
                if (leaders.length > 1) {
                    for (var i = 1; i < leaders.length; i++) {
                        $('#leader_val').append("<option value='selected'>" + leaders[i].NAME + "</option>");
                    }
                }
            }

            //提交
            $(".back.button.green").on('click', function () {
                var mger = getinfo.page_4_changeleader();
                var managerId = '';
                var storeId = backObj.three.STORE_ID;
                for (var n = 0; n < leaders.length; n++) {
                    if (leaders[n].NAME == mger) {
                        managerId = leaders[n].ID;
                        break;
                        // console.log("提交修改的负责人");
                    }
                }
                var validTime = getinfo.page_4_datetime();
                var startDate = validTime[0][0].replace(/-/g, "");
                var endtDate = validTime[0][1].replace(/-/g, "");
                if (startDate === "") {
                    alert("请选择起始日期");
                    return;
                }
                if (endtDate === "") {
                    alert("请选择结束日期");
                    return;
                }
                var data = {
                    LOGIN_ID: loginUser.LOGIN_ID,
                    STORE_ID: backObj.three.STORE_ID,
                    SALSESMAIN_ID: managerId,
                    STARTDATE: startDate,
                    ENDDATE: endtDate
                };
                storeController.submitManager(data, function (e) {
                    if (e.RESPMSG == "1001") {
                        alert("提交失败!");
                        return;
                    } else {
                        alert("提交成功!");
                        storeController.pageThree(obj.three.info);
                    }
                });
            });
        }


        //返回按钮
        $('.back').on('click', function () {
            storeController.pageThree(obj.three.info);
        });

        obj.index = 4;
    }
//请求门店列表
    function showList(current_page, keyword, more) {
        //keyword !== obj.one.keyword &&obj.index ===1 ; more ===0 && obj.indx ===2 ; obj.index <2
        if ((keyword !== obj.one.keyword && obj.index === 1) || (more === 0 && obj.index === 2)) {
            storeModule.queryStore(user, current_page, keyword, function (data) {
                obj.one.storeList = data;
                var list = data.LIST;

                $(".search-results").html(setPage_showStoreList(list));
                // 侦听门店列表li 跳转到显示门店详细页面
                $(".js-storeli").on('click', function () {
                    var index = $('.js-storeli').index(this);
                    // console.log(list[index]);
                    storeController.pageThree(list[index]);
                });
            });
        } else {
            var list = obj.one.storeList.LIST;

            $(".search-results").html(setPage_showStoreList(list));
            // 侦听门店列表li 跳转到显示门店详细页面
            $(".js-storeli").on('click', function () {
                var index = $('.js-storeli').index(this);
                // console.log(list[index]);
                storeController.pageThree(list[index]);
            });
        }
        obj.index = 2;
    }
//页面加载门店列表
    function setPage_showStoreList(data) {
        // list 数组
        var list = data;
        var div = "";
        for (var i = 0; i < list.length; i++) {
            div += "<li class='next js-storeli'><a>" + list[i].STORE_NAME + "</a><i class='icon-ic_info_outline_24px'></i></li>";
        }
        return div;
    }
//门店详情-加载门店详细数据
    function setPage_showStoreDetail(data, callback) {

        var tmp = data;
        console.log(tmp);
        $("#js_storeDetailName").html(tmp.STORE_NAME);
        $("#js_storeDetailDate").html(tmp.STORE_BUSI_TIME);
        $("#js_storeDetailArea").html(tmp.STORE_AREA);
        $("#js_storeDetailAddress").html(tmp.STORE_ADDRESS);
        $("#js_storeDetailDepartment").html(tmp.STORE_DEPARTMENT);
        if (tmp.STORE_IMAGE != "") {
            $("#js_storeDetailImg").attr("src", baseQuestUrl + tmp.STORE_IMAGE);
        }
        $("#js_storeDetailManager").html("负责人:" + tmp.STORE_MANAGER);
        $("#js_storeDetailPhone").html(tmp.STORE_PHONE);
        $("#js_storeDetailNum").html(tmp.SORT_NUM);

        tmp.IMAGES = pictureList(tmp.IMAGES);
        var div = "";
        for (var i = 0; i < tmp.IMAGES.length; i++) {
            var index = tmp.IMAGES[i].POSITION;
            console.log(baseQuestUrl + tmp.IMAGES[i].IMAGEURL);
            div += "<li><span>" + tmp.IMAGES[i].TITLE + "</span><div><i class='icon-ic_camera_alt_24px'></i><img src='" + baseQuestUrl + tmp.IMAGES[i].IMAGEURL + "'style='width=100%' /><a class='pic_file button yellow'><form id='" + "js_img_" + (i + 1) + "' enctype='multipart/form-data'><input class='file_input' type='file'  id='" + "js_img_" + (i + 1) + "' name='IMAGEFILE'  accept='image/*' capture='camera'></form>拍  照</a></div></li>";
        }
        $(".pic-content").html(div);
        callback(tmp);
        obj.two.storeDetail = tmp;
    }
//提交修改的负责人
    function submitManager(data, callback) {
        console.log(data);
        if (confirm("是否提交修改?") == true) {
            queryData.ajax(data, "/service/1/store/updateStoreManager", callback);
        } else {
            return;
        }
    }

    function pictureList(images) {
        var title = ["门头", "总体布局", "业务受理台", "终端销售展示", "主推活动1", "主推活动2"];
        var arr = [];
        for (var i = 0; i < 6; i++) {
            arr.push({
                TITLE: title[i]
            });
        }
        for (var n = 0; n < images.length; n++) {
            var tmp = Number(images[n].POSITION) - 1;
            var tmptitle = arr[tmp].TITLE;
            arr[tmp] = images[n];
            arr[tmp].TITLE = tmptitle;
        }
        return arr;
    }

    return {
        pageOne: pageOne,
        pageTwo: pageTwo,
        pageThree: pageThree,
        pageFour: pageFour,
        showList: showList,
        setPage_showStoreList: setPage_showStoreList,
        setPage_showStoreDetail: setPage_showStoreDetail
    };
})();