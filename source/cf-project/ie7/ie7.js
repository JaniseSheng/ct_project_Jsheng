/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'cf-project\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-ic_camera_alt_24px': '&#xe638;',
		'icon-ic_backup_24px': '&#xe639;',
		'icon-ic_info_outline_24px': '&#xe63a;',
		'icon-ic_star_outline_24px': '&#xe63b;',
		'icon-ic_star_24px': '&#xe63c;',
		'icon-ic_check_box_outline_blank_24px': '&#xe63d;',
		'icon-ic_check_box_24px': '&#xe63e;',
		'icon-ic_notifications_none_24px': '&#xe63f;',
		'icon-ic_notifications_24px': '&#xe640;',
		'icon-ic_arrow_back_24px': '&#xe641;',
		'icon-ic_arrow_forward_24px': '&#xe642;',
		'icon-ic_arrow_drop_down_24px': '&#xe643;',
		'icon-ic_close_24px': '&#xe644;',
		'icon-ic_apps_24px': '&#xe645;',
		'icon-ic_menu_24px': '&#xe646;',
		'icon-ic_insert_emoticon_24px': '&#xe647;',
		'icon-ic_keyboard_control_24px': '&#xe648;',
		'icon-ic_keyboard_arrow_down_24px': '&#xe649;',
		'icon-ic_keyboard_arrow_up_24px': '&#xe64a;',
		'icon-ic_keyboard_arrow_right_24px': '&#xe64b;',
		'icon-ic_keyboard_arrow_left_24px': '&#xe64c;',
		'icon-check_o': '&#xe600;',
		'icon-check': '&#xe601;',
		'icon-target': '&#xe602;',
		'icon-file': '&#xe603;',
		'icon-documents': '&#xe604;',
		'icon-alarm': '&#xe605;',
		'icon-microphone': '&#xe606;',
		'icon-printer': '&#xe607;',
		'icon-mac': '&#xe608;',
		'icon-iphone': '&#xe609;',
		'icon-iphone_chat': '&#xe60a;',
		'icon-telephone_signal': '&#xe60b;',
		'icon-mobile_signal': '&#xe60c;',
		'icon-ui_www': '&#xe60d;',
		'icon-email': '&#xe60e;',
		'icon-search': '&#xe60f;',
		'icon-trash': '&#xe610;',
		'icon-world_times': '&#xe611;',
		'icon-upload': '&#xe612;',
		'icon-download': '&#xe613;',
		'icon-bar_chart': '&#xe614;',
		'icon-presentation': '&#xe615;',
		'icon-id': '&#xe616;',
		'icon-information': '&#xe617;',
		'icon-information_c': '&#xe618;',
		'icon-bullet_list': '&#xe619;',
		'icon-pencil': '&#xe61a;',
		'icon-sad_face': '&#xe61b;',
		'icon-flag_swallowtail': '&#xe61c;',
		'icon-happy_face': '&#xe61d;',
		'icon-chat_reply': '&#xe61e;',
		'icon-more': '&#xe61f;',
		'icon-near': '&#xe620;',
		'icon-favorites': '&#xe621;',
		'icon-next': '&#xe622;',
		'icon-previous': '&#xe623;',
		'icon-contacts': '&#xe624;',
		'icon-near2': '&#xe625;',
		'icon-file_calendar': '&#xe626;',
		'icon-approximately': '&#xe627;',
		'icon-net_closed': '&#xe628;',
		'icon-cloud_upload': '&#xe629;',
		'icon-user': '&#xe62a;',
		'icon-home': '&#xe62b;',
		'icon-map_route': '&#xe62c;',
		'icon-map_pin': '&#xe62d;',
		'icon-power': '&#xe62e;',
		'icon-calendar': '&#xe62f;',
		'icon-file_information': '&#xe630;',
		'icon-users_three': '&#xe631;',
		'icon-winners_podium': '&#xe632;',
		'icon-walking': '&#xe633;',
		'icon-electronic_megaphone': '&#xe634;',
		'icon-cogs': '&#xe635;',
		'icon-satchel': '&#xe636;',
		'icon-pie_chart': '&#xe637;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
