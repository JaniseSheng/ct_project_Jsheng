/* global noticeView, noticeModule */

var noticeController = (function() {
	var user;
	window.obj = {};
	//公告列表
	obj.bbsList = {};
	obj.bbsList.data = {};
	obj.bbsList.currentPage = 1;
	//公告内容
	obj.bbsDetail = {};
	obj.bbsDetail.data = {};
	// obj.bbsDetail.currentPage = 1;
	//公告评论信息
	obj.comment = {};
	obj.comment.data = {};
	obj.comment.currentPage = 1;

	function setUser(loginUser) {
		user = loginUser;
	}

	function pageOne() {
		var currentPage = obj.bbsList.currentPage;

		noticeView.setPage_mynotice1();

		noticeModule.getBBSList(user, currentPage, function(rs) {
			console.log(rs);
			obj.bbsList.data = rs;
			//加载公告列表
			var div = getBsListPage(rs);
			$('#list').html(div);
			//进入公告详情页
			var li = $('.more-content');
			li.on('click', function() {
				var index = li.index(this);
				console.log(index);
				pageTwo(rs.LIST[index]);
			});
		});
	}
	/**
	 * 返回系统公告列表页面组件
	 * @param  {[obj]} data 后台返回的公告列表数据
	 * @return {[string]}      [description]
	 */
	function getBsListPage(data) {
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
	 * 公告详情页
	 * @param  {[type]} data [description]
	 * @return {[type]}      [description]
	 */
	function pageTwo(data) {
		obj.bbsDetail.data = data;
		console.log(data);

		noticeView.setPage_mynotice2();

		$('#notice-content div:first').html(getNoticeDetailPage(data));

		//获取公告评论
		noticeModule.getBBSComment(user, data.NOTICE_ID, obj.comment.currentPage, function(rs) {
			obj.comment.data = rs;
			console.log(rs);
		});
	}
	/**
	 * 系统公告内容
	 * @param  {[type]} data [description]
	 * @return {[type]}      [description]
	 */
	function getNoticeDetailPage(data) {
		var noticeContent, noticeRead, noticeTime, noticeTitle, noticeUserId, noticeUserName;
		var div = "";
		noticeRead = data.NOTICE_READ;
		noticeTime = data.NOTICE_TIME;
		noticeTitle = data.NOTICE_TITLE;
		noticeUserId = data.NOTICE_USER_ID;
		noticeUserName = data.NOTICE_USER_NAME;
		noticeContent = data.NOTICE_CONTENT;
		div = '<div><p>' + noticeTitle + '</p><div class="notice-head"><p>' + noticeContent + '</p></div><div><span>' + noticeTime + '</span><i class="icon-chat_reply"></i></div></div>';

		return div;
	}

	function getCommentPage(data) {
		var loginId, loginName, addTime, content;
		var arr = data.LIST;
		var div = '';
		var i;
		for (i = 0; i < arr.length; i++) {
			loginId = arr[i].LOGIN_ID;
			loginName = arr[i].LOGIN_NAME;
			addTime = arr[i].ADDTIME;
			content = arr[i].CONTENT;
			div += '<li><p>'+loginName+'</p><span>:<span>'+content+'</span></span></li>';
		}

		return div;
	}

	return {
		setUser: setUser,
		pageOne: pageOne
	};
})();