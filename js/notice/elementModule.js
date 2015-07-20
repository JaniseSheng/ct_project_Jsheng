var element = (function () {
	
	/**
	 * 返回系统公告列表页面组件
	 * @param  {obj} data 后台返回的公告列表数据
	 * @return {string}      [description]
	 */
	function getBsListEl(data) {
		var arr = data.LIST;
		var div, noticeContent, noticeRead, noticeTime, noticeTitle, noticeUserId, noticeUserName;
		div = "";
		for (var i = 0; i < arr.length; i++) {
			noticeRead = arr[i].NOTICE_READ;
			noticeTime = arr[i].NOTICE_TIME;
			noticeTitle = arr[i].NOTICE_TITLE;
			noticeUserId = arr[i].NOTICE_USER_ID;
			noticeUserName = arr[i].NOTICE_USER_NAME;
			noticeContent = arr[i].NOTICE_CONTENT;

			div += '<li class="more-content"><a name="page_to_2" class="next"><i class="icon-electronic_megaphone"></i><p>' + noticeTitle + '</p><span>创建时间: ' + noticeTime + '</span></a></li>';
		}

		return div;
	}
	
	/**
	 * 系统公告内容
	 * @param  {obj} data [description]
	 * @return {string}      [description]
	 */
	function getNoticeDetailEl(data) {
		var noticeContent, noticeRead, noticeTime, noticeTitle, noticeUserId, noticeUserName;
		var div = "";
		noticeRead = data.NOTICE_READ;
		noticeTime = data.NOTICE_TIME;
		noticeTitle = data.NOTICE_TITLE;
		noticeUserId = data.NOTICE_USER_ID;
		noticeUserName = data.NOTICE_USER_NAME;
		noticeContent = data.NOTICE_CONTENT

		var str;
		try {
			str = strCrypto.decode(noticeContent);
		} catch (error) {
			throw error;
		}
		// div += '<div><img src="images/bgimg1.png"/></div>';
		div += '<div><p>' + noticeTitle + '</p><div class="notice-head"><p>' + str + '</p></div><div><span>' + noticeTime + '</span><i class="icon-chat_reply"></i></div></div>';

		return div;
	}
	
	/**
	 * 公告评论
	 * @param {obj} data 评论内容
	 * @return {string}
	 */
	function getCommentEl(data) {
		var loginId, loginName, addTime, content;
		var arr = data.LIST;
		var div = '';
		var i;
		for (i = 0; i < arr.length; i++) {
			loginId = arr[i].LOGIN_ID;
			loginName = arr[i].LOGIN_NAME;
			addTime = arr[i].ADDTIME;
			content = arr[i].CONTENT;
			var str;
			try {
				 str = strCrypto.decode(content);
			} catch (error) {
				throw error;
			}

			div += '<li><p>' + loginName + ':</p><span>' + str + '</span></li><p>'+addTime+'</p>';
		}

		return div;
	}

	return {
		getBsListEl: getBsListEl,
		getNoticeDetailEl: getNoticeDetailEl,
		getCommentEl: getCommentEl
	}
})()