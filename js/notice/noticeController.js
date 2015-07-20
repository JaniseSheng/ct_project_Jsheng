/* global CryptoJS */
/* global noticeView, noticeModule */

var noticeController = (function () {
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
	/**
	 * 公告列表页
	 */
	function pageOne() {
		var currentPage = obj.bbsList.currentPage;

		noticeView.setPage_mynotice1();

		// setTimeout(function () {
			noticeModule.getBBSList(user, currentPage, function (rs) {
				console.log(rs);
				obj.bbsList.data = rs;
				//加载公告列表
				var div = element.getBsListEl(rs);
				$('#list').html(div);
				//进入公告详情页
				var li = $('.more-content');
				li.on('click', function () {
					var index = li.index(this);
					console.log(index);
					pageTwo(rs.LIST[index]);
				});
			});
		// }, 200);
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
		var div = element.getNoticeDetailEl(data);
		$('#notice-content div:first').html(div);

		//获取公告评论
		noticeModule.getBBSComment(user, data.NOTICE_ID, obj.comment.currentPage, function (rs) {
			obj.comment.data = rs;
			// obj.comment.currentPage = rs.TOTALPAGE;
			console.log(rs);
			var div = element.getCommentEl(obj.comment.data);
			$('#comment').html(div);
		});

		$("a:last").on("click", function () {
			var str = $("input:last").val();
			if (str !== "") {
				var st;
				try {
					st = strCrypto.encrypt(str);
				} catch (error) {
					throw error;
				}
				noticeModule.uploadComment(user, data.NOTICE_ID, st, function (rs) {
					console.log(rs);
					pageTwo(obj.bbsDetail.data);
				});
			}
		});

		$('.back').on('click', function () {
			pageOne();
		});
	}

	return {
		setUser: setUser,
		pageOne: pageOne
	};
})();