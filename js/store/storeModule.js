/* global queryData */
/**
 * 我的门店
 * @type storeModule_L101.storeModuleAnonym$0|Function
 */
var storeModule = (function (queryData) {
    var _tmpdata = {};
    /**
     * 门店列表
     * @param {type} loginUser
     * @param {type} current_page
     * @param {type} keyword
     * @param {type} callback
     * @returns {undefined}
     */
    function queryStore(loginUser, current_page, keyword, callback) {
        page_size = current_page * 10;
        _tmpdata = {
            USER_ID: loginUser.LOGIN_ID,
            PAGE_SIZE: page_size,
            CURRENT_PAGE: "1",
            CHANNEL_ID: "",
            AGENT_ID: "",
            IS_SUPERVISOR: "",
            AREA_ID: "",
            SUBAREA_ID: "",
            KEYWORD: keyword
        };
        queryData.ajax(_tmpdata, "/service/1/store/queryStore", callback);
    }
    /**
     * 门店详情
     * @param {type} loginUser
     * @param {type} store_id
     * @param {type} callback
     * @returns {undefined}
     */
    function queryStoreDetail(loginUser, store_id, callback) {
        _tmpdata = {
            USER_ID: loginUser.LOGIN_ID,
            STORE_ID: store_id
        };
        queryData.ajax(_tmpdata, "/service/1/store/queryStoreDetail", callback);
    }
    /**
     * 门店负责人查询
     * @param {type} store_id
     * @param {type} callback
     * @returns {undefined}
     */
    function queryStoreManager(store_id, callback) {
        _tmpdata = {
            STORE_ID: store_id
        };
        queryData.ajax(_tmpdata, "/service/1/store/queryStoreManager", callback);
    }
    /**
     * 门店图片上传
     * @param {type} loginUser
     * @param {type} storeId
     * @param {type} position
     * @param {type} imageId
     * @param {type} callback
     * @returns {undefined}
     */
    function uploadImage(loginUser, storeId, position, imageId, callback) {
        _tmpdata = {
            LOGIN_ID: loginUser.LOGIN_ID,
            STORE_ID: storeId,
            POSITION: position,
            IMAGE_ID: imageId
        };
        queryData.ajax(_tmpdata, "/service/1/imageRelate/store", callback);
    }
    /**
     * 门店负责人更改
     * @param {type} loginUser
     * @param {type} storeId
     * @param {type} salsesmainId
     * @param {type} startDate
     * @param {type} endDate
     * @param {type} callback
     * @returns {undefined}
     */
    function updateStoreManager(loginUser, storeId, salsesmainId, startDate, endDate, callback) {
        _tmpdata = {
            LOGIN_ID: loginUser.LOGIN_ID,
            STORE_ID: storeId,
            SALSESMAIN_ID: salsesmainId,
            STARTDATE: startDate,
            ENDDATE: endDate
        };
        queryData.ajax(_tmpdata, "/service/1/store/updateStoreManager", callback);
    }

    return {
        queryStore: queryStore,
        queryStoreDetail: queryStoreDetail,
        queryStoreManager: queryStoreManager,
        uploadImage: uploadImage,
        updateStoreManager: updateStoreManager
    };
})(queryData);