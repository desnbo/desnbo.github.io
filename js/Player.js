/*

	BadApplePlayerBoot [绚丽彩虹播放器引导]
	
	www.badapple.top —— 不只是一款播放器这么简单

*/

/*
	本文件为播放器启动器。
	
	如需研究播放器主js请在下面找。
*/

/* 解决编码问题：
	思路：如果当前页面编码不为UTF8，并且这个变量不为True，那么就把这个变量设为True，并且ajax重新加载Boot。
*/
var BadApplePlayerCharset;

/* 解决页面多开播放器重复问题：
	思路：使用localStorage存储一个变量，
	加载播放器后就设置True并SetInterval(5000)循环在另一个localStorage变量里设置当前时间戳，
	关闭页面就False并ClearInterval，
	
	第二次加载播放器就先判断是否True，
	如果是True就SetTimeout(1000)判断另一个播放器的时间戳是不是最近的10秒
	（这么做是为了防止有些时候结束浏览器进程导致关闭页面时没有设置False）。
*/
//是否已经加载播放器
var BadApplePlayerIsLoaded = (typeof(localStorage.getItem('xlch_player_isload')) !="undefined" ? ((localStorage.getItem('xlch_player_isload')=='True' && parseInt(localStorage.getItem('xlch_player_runningtime'))+10 > Math.round(new Date().getTime()/1000)) ? true : false) : false);
//是否要加载播放器
var BadApplePlayerIsLoad = (typeof(BadApplePlayerIsLoad) !="undefined" ? BadApplePlayerIsLoad : !BadApplePlayerIsLoaded);
(function (IsLoad){
	if(!IsLoad){
		console.info('[BadApplePlayerBoot] 取消加载播放器.原因：'+(BadApplePlayerIsLoaded ? '其他页面已加载' : '手动禁止'));
		return false;
	}

	BadApplePlayerIsLoaded=true;
	localStorage.setItem('xlch_player_isload','True');
	setInterval(function (){
		localStorage.setItem('xlch_player_runningtime',Math.round(new Date().getTime()/1000));
	},5000);
	window.onbeforeunload = function() {
		localStorage.setItem('xlch_player_isload','False');
	};
	
	var BadApplePlayerCode=
	'<div id="BadApplePlayer">'
	+'	<div class="player">'
	+'		<div class="blur-img">'
	+'			<img class="blur" style="top: 0px; display: inline;">'
	+'		</div>'
	+'		<div class="infos">'
	+'			<div class="songstyle">'
	+'				<i class="fa fa-music"></i>'
	+'				<span class="song"></span>'
	+'			</div>'
	+'			<div class="timestyle">'
	+'				<span class="time">00:00 / 00:00</span>'
	+'				<i class="fa fa-clock-o"></i></div>'
	+'			<div class="artiststyle">'
	+'				<i class="fa fa-user"></i>'
	+'				<span class="artist"></span>'
	+'				<span class="moshi">'
	+'					随机播放 <i class="fa fa-random current"></i></span>'
	+'			</div>'
	+'			<div class="artiststyle">'
	+'				<i class="fa fa-folder"></i>'
	+'				<span class="artist1"></span>'
	+'				<span class="geci"></span>'
	+'			</div>'
	+'		</div>'
	+'		<div class="control">'
	+'			<i class="playtype fa fa-retweet current" title="切换模式"></i>'
	+'			<i class="prev fa fa-backward" title="上一首"></i>'
	+'			<div class="status">'
	+'				<b>'
	+'					<i class="play fa fa-play" title="播放"></i>'
	+'					<i class="pause fa fa-pause" title="暂停"></i>'
	+'				</b>'
	+'			</div>'
	+'			<i class="next fa fa-forward" title="下一首"></i>'
	+'			<i class="search fa fa-search" title="搜索歌曲"></i>'
	+'		</div>'
	+'		<div class="bottom">'
	+'			<div class="playprogress">'
	+'				<div class="progressbg">'
	+'					<div class="progressbg1"></div>'
	+'					<div class="progressbg2"></div>'
	+'					<div class="ts"></div>'
	+'				</div>'
	+'			</div>'
	+'			<ul class="bottomright">'
	+'				<li class="ratecontrol">'
	+'					<div class="rate fa fa-play" title="播放变速"></div>'
	+'					<div class="rateprogress">'
	+'						<div class="progressbg">'
	+'							<div class="progressbg1"></div>'
	+'							<div class="ts"></div>'
	+'						</div>'
	+'					</div>'
	+'				</li>'
	+'				<li class="volumecontrol">'
	+'					<div class="volume fa fa-volume-up" title="音量控制"></div>'
	+'					<div class="volumeprogress">'
	+'						<div class="progressbg">'
	+'							<div class="progressbg1"></div>'
	+'							<div class="ts"></div>'
	+'						</div>'
	+'					</div>'
	+'				</li>'
	+'				<li class="switch-ksclrc" style="display: list-item;"><i title="歌词开关" class="fa fa-toggle-on"></i></li>'
	+'				<li class="switch-playlist"><i class="fa fa-bars" title="播放列表"></i></li>'
	+'			</ul>'
	+'			<div style="clear:both"></div>'
	+'		</div>'
	+'		<div class="cover"></div>'
	+'	</div>'
	+'	<div class="playlist">'
	+'		<div class="playlist-bd">'
	+'			<div class="album-list">'
	+'				<div class="musicheader"></div>'
	+'				<div class="list"></div>'
	+'			</div>'
	+'			<div class="song-list">'
	+'				<div class="musicheader">'
	+'					<i class="fa fa-angle-right"></i>'
	+'					<span></span>'
	+'				</div>'
	+'				<div class="list">'
	+'					<ul></ul>'
	+'				</div>'
	+'			</div>'
	+'		</div>'
	+'	</div>'
	+'	<div class="switch-player">'
	+'		<i class="fa fa-angle-right" style="margin-top: 20px;"></i>'
	+'	</div>'
	+'	<div class="searchbox"><input type="text" placeholder="输入歌手+歌曲名并回车..." /><i title="清空搜索播放列表" class="delsearchlist fa fa-trash"></i><div class="searchlistbox"><ul></ul></div></div>'
	+'</div>'
	+'<div id="BadAppleTips"></div>'
	+'<div id="BadAppleLrc"></div>'
	+'<div id="BadAppleKsc"></div>'
	+'<div class="xlch_pjax_loading_frame">'
	+'	<div class="double-bounce1"></div>'
	+'	<div class="double-bounce2"></div>'
	+'</div>'
	+'<div class="xlch_pjax_loading"></div>';

	//如果你把这个代码拆开了，别忘了加上这一句↓
	BadApplePlayerIsHttps=("https:" == document.location.protocol) ? "https:" : "http:";
	BadApplePlayerStaticUrl=BadApplePlayerIsHttps+'//static.badapple.top/';

	BadApplePlayerCharset=BadApplePlayerCharset ? BadApplePlayerCharset : document.charset;
	if(BadApplePlayerCharset != 'UTF-8'){
		BadApplePlayerCharset='UTF-8';
		$.ajax({url: BadApplePlayerStaticUrl+'BadApplePlayer/Player.js',dataType:'script'});
		console.info('[BadApplePlayerBoot] Try to fix the charset.');
		return;
	}

	//加载播放器CSS
	$("<link>").attr({href: BadApplePlayerStaticUrl+"BadApplePlayer/css/player.css",rel: "stylesheet",type: "text/css"}).appendTo("head");

	//等待DOM全部加载完，不然某些人把代码加载head里，导致body的DOM取不到
	$(document).ready(function(){
		//加入DIV
		$('body').append('<div id="XlchPlayer" style="display:none;"></div>');
		//加入代码
		$('#XlchPlayer').append(BadApplePlayerCode);
		BadApplePlayerCode=null;
		
		//加载播放器配置、歌单
		$.ajax({
			/* url: (BadApplePlayerIsHttps=="https:" ? 'https://https.api.badapple.top' : 'http://api.badapple.top')+"/WebConfig.php?Key="+XlchKey, */
			url: 'https://https.api.badapple.top'+"/WebConfig.php?Key="+XlchKey,
			dataType:"script",
			cache: false,
			async: true,
			success: function(data) {
				if(typeof($('body').mCustomScrollbar)=='undefined'){
					console.warn('[BadApplePlayerBoot] 未检测到 scrollbar.js。可能的原因：');
					console.warn('[BadApplePlayerBoot] 1.播放器代码的下面又重新加载了一遍JQuery,导致组件注册的Jquery函数被清空');
					console.warn('[BadApplePlayerBoot] 解决办法：');
					console.warn('[BadApplePlayerBoot] 1.尝试查看网页源代码，搜索"jquery"，查看是否有多个jquery被加载，如果有，请删除该jquery。');
					console.warn('[BadApplePlayerBoot] 2.加入绚丽彩虹站长群，寻找技术帮助。');
					$.ajax({
						url: BadApplePlayerStaticUrl+"BadApplePlayer/js/scrollbar.js",
						dataType:"script",
						cache: true,
						async: false,
						error: function(error) {
							console.error('[BadApplePlayerBoot] Load Fail: scrollbar.js');
						},
						success: function(data) {
							console.warn('[BadApplePlayerBoot] 已为您重新加载 scrollbar.js');
						}
					});
				}
				if(navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i) && !onphone){
					$('#XlchPlayer').html('');
				}else{
					//加载附加JS
					BadApplePlayer_LoadJs();
					
					//加载播放器JS
					$.ajax({
						url: BadApplePlayerStaticUrl+"BadApplePlayer/js/player.js",
						dataType:"script",
						cache: true,
						async: true,
						success: function(data) {
							if(typeof($('body').mCustomScrollbar)=='undefined'){
								console.warn('[BadApplePlayerBoot] 播放器由于读取不到组件 scrollbar.js 导致崩溃');
								setTimeout(function (){
									BadAppleTips.show('播放器可能已经崩溃，请按F12切换到JS控制台(Console)查看。');
								},5000);
							}
							if(typeof(cnzz_protocol) != "undefined"){
								//用了辣鸡CNZZ
								console.warn('[BadApplePlayerBoot] 系统检测到您安装了垃圾统计插件CNZZ，该插件由于编写技术人员的疏忽，某些情况下会误重新加载JQuery，将会导致某些依赖于JQuery的js类库失效，并导致播放器崩溃，建议您使用百度统计或将该统计代码移动到播放器代码的下面，以免冲突！');
								console.warn('[BadApplePlayerBoot] 在这里科普一下：这玩意就是个废物，几百年ui不更新，加广告倒是挺积极，服务器还经常boom，开发人员不专业。');
							}
							$('#XlchPlayer').show();
						},
						error: function(error) {
							console.error('[BadApplePlayerBoot] Load Fail: player.js',error);
						}
					});
				}
			},
			error: function(error) {
				console.error('[BadApplePlayerBoot] Load Fail: WebConfig.php',error);
			}
		});
	});

	function BadApplePlayer_LoadJs(){
		BadApplePlayer_LoadDrag();
	}
	function BadApplePlayer_LoadDrag(){
		jQuery.fn.extend({
			DragClose: function() {
				if (this.length) for (var a in $(this).data("options"))"dragObj" == a && $(this).data("options").dragObj.dostop()
			},
			Drag: function() {
				var a = {
					dragObj: $(this),
					parentObj: $(document),
					callback: null,
					isPhone: !1,
					lockX: !1,
					lockY: !1,
					maxWidth: 0,
					maxHeight: 0
				};
				arguments.length && (a = $.extend({}, a, arguments[0]));
				a.dragObj.data("options", a);
				var c = $(this)[0],
					b = a.dragObj,
					e = 0,
					d = 0,
					g = a.callback;
				"static" == $(this).css("position") && $(this).css("position", "relative");
				var m = 0,
					n = 0;
				a.isPhone ? (b.__start = function(f) {
					m = Math.max(a.parentObj.width(), a.maxWidth);
					n = Math.max(a.parentObj.height(), a.maxHeight);
					f = event.targetTouches[0];
					e = f.clientX - c.offsetLeft;
					d = f.clientY - c.offsetTop;
					b.on("touchmove", b.__move);
					b.on("touchend", b.__end);
					return !1
				}, b.__move = function(f) {
					touch = event.targetTouches[0];
					f = touch.clientX - e;
					var h = touch.clientX - d,
						k = c.offsetWidth,
						l = c.offsetHeight;
					0 > f ? f = 0 : f + k > m && (f = m - k);
					0 > h ? h = 0 : h + l > n && (h = n - l);
					a.lockX || (c.style.top = h + "px");
					a.lockY || (c.style.left = f + "px");
					g && g(b[0], f, h, k, l);
					return !1
				}, b.__end = function(a) {
					b.off("touchmove");
					b.off("touchend");
					_flag = !1;
					d = e = 0;
					g && g(b[0]);
					return !1
				}, b.dostart = function() {
					b.on("touchstart", b.__start)
				}, b.dostop = function() {
					b.off("touchstart");
					b.off("touchmove");
					b.off("touchend")
				}) : (b.__start = function(f) {
					m = Math.max(a.parentObj.width(), a.maxWidth);
					n = Math.max(a.parentObj.height(), a.maxHeight);
					e = f.clientX - c.offsetLeft;
					d = f.clientY - c.offsetTop;
					$(document).on("mousemove", b.__move);
					$(document).on("mouseup", b.__end);
					b[0].setCapture ? b[0].setCapture() : window.captureEvents && window.captureEvents(Event.MOUSEMOVE | Event.MOUSEUP);
					f.stopPropagation();
					f.preventDefault()
				}, b.__move = function(f) {
					var h = f.clientX - e,
						k = f.clientY - d,
						l = c.offsetWidth,
						p = c.offsetHeight;
					0 > h ? h = 0 : h + l > m && (h = m - l);
					0 > k ? k = 0 : k + p > n && (k = n - p);
					a.lockX || (c.style.top = k + "px");
					a.lockY || (c.style.left = h + "px");
					g && g(b[0], h, k, l, p);
					f.stopPropagation();
					f.preventDefault()
				}, b.__end = function(a) {
					b[0].releaseCapture ? b[0].releaseCapture() : window.releaseEvents && window.releaseEvents(Event.MOUSEMOVE | Event.MOUSEUP);
					$(document).off("mousemove");
					$(document).off("mouseup");
					d = e = 0;
					g && g(b[0]);
					a.stopPropagation();
					a.preventDefault()
				}, b.dostart = function() {
					b.on("mousedown", b.__start)
				}, b.dostop = function() {
					b.off("mousedown");
					$(document).off("mousemove");
					$(document).off("mouseup")
				});
				b.dostart()
			}
		});
	}
})(BadApplePlayerIsLoad);