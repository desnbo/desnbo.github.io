/**
 * 播放列表
 * @type {Array}
 * 请用数组来定义总列表
 * 再用二维数组定义每个列表
 * 其中列表里的每首歌需用对象定义
 * 请在每个列表中的第一个元素定义列表信息（必须位于第一位）
 * 列表信息必须有一个basic属性，值为true
 * 还要有一个name属性，值为列表名称
 * 可选参数为singer、image，用于为定义的该属性的歌曲调用
 * 每首歌必须有name、src、lrc三个属性
 * src为歌曲相对于index.html的相对路径或绝对路径
 * 可选singer和image属性
 * 在每首歌没有定义singer或image时将使用列表的singer或image
 * 请确保一定有一个被定义
 * 其中name为歌曲名称
 * src为歌曲文件路径
 * lrc为歌词，请用\n或\r将每行歌词隔开，否则无法识别
 */
var mplayer_song = [
    [{
        "basic": true,
        "name": "2016单曲集",
        "singer": "许嵩",
        "img": "https://y.gtimg.cn/music/photo_new/T001R300x300M000000CK5xN3yZDJt.jpg"
    }, {
        "name": "一睁眼",
        "singer": "沈玮琦",
       	"img": "http://imgcache.qq.com/music/photo/album_500/51/500_albumpic_1796451_0.jpg",
        "src": "http://ws.stream.qqmusic.qq.com/200254836.m4a?fromtag=46",
        "lrc": "[ti:一睁眼]\n[ar:沈玮琦]\n[al:一睁眼]\n[by:]\n[offset:0]\n[00:02.65]一睁眼&#32;&#45;&#32;沈玮琦\n[00:03.36]词：许嵩\n[00:03.49]曲：许嵩\n[00:08.13]一睁眼\n[00:08.99]新的一天\n[00:10.84]跳出了多梦的一夜\n[00:13.71]可能旅店的枕垫\n[00:15.78]太软了一些\n[00:19.26]洗好脸走到窗边\n[00:22.08]有风轻轻掀动纱帘\n[00:24.90]心也\n[00:25.90]心也软了一些\n[00:30.58]一睁眼\n[00:31.56]新的一天\n[00:33.36]计划太多会添纠结\n[00:36.24]要不要试着接受\n[00:38.41]快乐一时是一时的哲学\n[00:41.92]没有你在我身边\n[00:44.72]我的幽默渐渐不见\n[00:47.56]雨斜斜&#32;歌绵绵\n[00:50.42]闭关修炼\n[00:52.95]昨晚的梦里面\n[00:55.63]楼台杏花琴弦\n[00:58.47]场面有些古典\n[01:01.02]谁飞扬了裙边\n[01:03.84]你抱着我转圈\n[01:06.40]在南方的雨天\n[01:09.44]怎么雨水都甜\n[01:12.19]怎么回忆都咸\n[01:15.43]昨晚的梦里面\n[01:18.29]时光倒回从前\n[01:21.07]心动还能重演\n[01:23.62]是爱情在身边\n[01:26.44]你送我的项链\n[01:29.23]戴上叫做想念\n[01:31.97]怎么没说再见\n[01:34.92]还没好好告别\n[01:36.95]已睁眼\n[02:06.76]一睁眼\n[02:07.61]新的一天\n[02:09.46]跳出了多梦的一夜\n[02:12.23]可能旅店的枕垫\n[02:14.31]太软了一些\n[02:17.89]洗好脸走到窗边\n[02:20.69]有风轻轻掀动纱帘\n[02:23.43]心也\n[02:24.44]心也软了一些\n[02:29.19]一睁眼\n[02:30.23]新的一天\n[02:32.08]计划太多会添纠结\n[02:34.81]要不要试着接受\n[02:36.96]快乐一时是一时的哲学\n[02:40.49]没有你在我身边\n[02:43.28]我的幽默渐渐不见\n[02:46.16]雨斜斜&#32;歌绵绵\n[02:48.92]闭关修炼\n[02:51.46]昨晚的梦里面\n[02:54.20]楼台杏花琴弦\n[02:57.01]场面有些古典\n[02:59.78]谁飞扬了裙边\n[03:02.38]你抱着我转圈\n[03:05.19]在南方的雨天\n[03:08.07]怎么雨水都甜\n[03:10.84]怎么回忆都咸\n[03:13.98]昨晚的梦里面\n[03:16.76]时光倒回从前\n[03:19.59]心动还能重演\n[03:22.09]是爱情在身边\n[03:24.94]你送我的项链\n[03:27.60]戴上叫做想念\n[03:30.60]怎么没说再见\n[03:33.38]还没好好告别\n[03:35.48]已睁眼\n[03:39.94]一睁眼\n[03:51.23]一睁眼\n[03:57.34]新的一天"
    }, {
        "name": "书香年华",
        "sing": "许嵩 & 孙涛",
        "src": "http://ws.stream.qqmusic.qq.com/105606046.m4a?fromtag=46",
       "img": "http://imgcache.qq.com/music/photo/album_500/44/500_albumpic_1286244_0.jpg",
        "lrc": "[ti:书香年华][ar:许嵩\/孙涛][al:书香年华][by:][offset:0][00:00.79]书香年华 - 许嵩&孙涛[00:01.86]词：许嵩&车万育[00:03.40]曲：许嵩[00:04.08]编曲：许嵩[00:05.72]童声：云对雨雪对风晚照对晴空[00:11.96]来鸿对去燕宿鸟对鸣虫[00:17.96]三尺剑六钧弓岭北对江东[00:24.04]人间清暑殿天上广寒宫[00:32.59]许：多久没有提笔为你写一首诗[00:39.07]对偶平仄押韵难道都在故纸[00:45.09]常常欲言又止表达缺乏情致[00:50.65]书到用时才恨少还真那么回事[00:56.68]孙：梦里一记钟声恍然敲回古时[01:02.97]花明柳媚春日书院里又添学子[01:09.06]苦读百卷经史不止为功名之资[01:14.66]学问里自有传承和坚持[01:19.75]合：琅琅书声如春风[01:22.79]拂过千年时空[01:25.88]少年啊壮志在胸赋首辞让人感动[01:31.91]借一场古典的梦[01:34.88]与东坡热情相拥[01:38.80]没告诉他将被千古传颂[01:45.23]童声：云对雨雪对风晚照对晴空[01:50.90]来鸿对去燕宿鸟对鸣虫[01:56.98]三尺剑六钧弓岭北对江东[02:02.95]人间清暑殿天上广寒宫[02:08.97]孙：梦里一记钟声恍然敲回古时[02:15.03]花明柳媚春日书院里又添学子[02:21.10]许：苦读百卷经史不止为功名之资[02:26.65]学问里自有传承和坚持[02:32.05]合：琅琅书声如春风[02:34.84]拂过千年时空[02:37.90]少年啊壮志在胸赋首辞让人感动[02:43.83]借一场古典的梦[02:46.81]与东坡热情相拥[02:50.63]没告诉他将被千古传颂[02:56.60]没告诉他将被千古传颂"
    }],
    [{
        "basic": true,
        "name": "青年晚报",
        "singer": "许嵩",
        "img": "http://imgcache.qq.com/music/photo/album_500/97/500_albumpic_1492897_0.jpg"
    }, {
        "name": "平行宇宙",
        "src": "http://ws.stream.qqmusic.qq.com/107506656.m4a?fromtag=46",
        "lrc": "[ar:许嵩]\n[ti:平行宇宙]\n[00:00.45]作曲 : 许嵩\n[00:01.76]作词 : 许嵩\n[00:03.58]我梦见我轻盈自由的腾空\n[00:09.70]随后画面切到我背着你遨游\n[00:15.89]你眼睛开始闪烁点点星光\n[00:22.60]可能是美梦来的太突然了吧\n[00:28.11]那时候在一起的时间很多\n[00:34.26]只不过珍惜的意义还没搞懂\n[00:40.55]虽然说 如今已经分开很久\n[00:46.92]有时候 还是不经意想你的笑容\n[00:55.78]深爱过 所以没有再联络\n[01:02.05]不回头 因为勉强的笑很难受\n[01:08.01]深爱过 真心感谢你陪我度过\n[01:14.50]那几年 苦中有甜的生活\n[01:29.62]床头柜 躺着一本老旧相册\n[01:35.79]也就是 闲极的时候才翻一翻\n[01:41.91]还养着你走时留下的小狗\n[01:48.54]长大后 它心事重重不太活泼\n[01:54.21]这条路我们没能走到最后\n[02:00.42]朋友说 是个意外的意料之中\n[02:06.48]有时相信在某个平行的宇宙\n[02:13.08]你的爱还一如既往陪在我左右\n[02:21.86]深爱过 所以没有再联络\n[02:28.03]不回头 因为勉强的笑很难受\n[02:34.24]深爱过 真心感谢你陪我度过那几年\n[02:43.60]深爱过 所以没有再联络\n[02:49.66]不回头 因为勉强的笑很难受\n[02:55.68]深爱过 真心感谢你陪我度过\n[03:01.90]那几年 苦中有甜的生活\n[03:08.18]多年后再想起你\n[03:12.28]镜子里一副流泪的笑容",
        "time": "03:29"

    }, {
        "name": "摆脱",
        "src": "http://ws.stream.qqmusic.qq.com/107506657.m4a?fromtag=46",
        "lrc": "[ar:许嵩]\n[ti:摆脱]\n[00:00.21]许嵩 - 摆脱\n[00:01.62]作曲 : 许嵩\n[00:03.29]作词 : 许嵩\n[00:22.19]摆脱了二十出头的叛逆\n[00:24.77]摆脱不了倔强的脾气\n[00:27.35]摆脱了十足乏味的交际\n[00:29.93]摆脱不了群居属性\n[00:32.55]摆脱了听到谣言的揪心\n[00:35.13]摆脱不了听美言的暗喜\n[00:37.70]摆脱得了儿女私情\n[00:40.24]摆脱不了内分泌\n[00:42.65]谁有天大力气\n[00:44.63]可以拎着自己飞呀\n[00:47.81]拎着自己头发直到双脚都离地\n[00:53.07]谁有天大力气\n[00:54.94]可以拎着自己飞呀\n[00:58.22]所有力不从心都是摆脱不了自己\n[01:14.37]摆脱了对健康的在意\n[01:16.85]摆脱不了对死亡的恐惧\n[01:19.43]摆脱了生活的压力\n[01:21.96]摆脱不了人似浮萍\n[01:24.68]摆脱了那些世俗的追求\n[01:27.31]摆脱不了无求所引发的孤寂\n[01:29.91]这首歌摆脱了锻字练句\n[01:32.34]摆脱不了小心机\n[01:34.87]谁有天大力气\n[01:36.68]可以拎着自己飞呀\n[01:39.97]拎着自己头发直到双脚都离地\n[01:45.23]谁有天大力气\n[01:47.10]可以拎着自己飞呀\n[01:50.39]所有力不从心都是摆脱不了自己\n[02:27.10]谁有天大力气\n[02:28.88]可以拎着自己飞呀\n[02:32.12]拎着自己头发直到双脚都离地\n[02:37.27]谁有天大力气\n[02:39.10]可以拎着自己飞呀\n[02:42.28]所有力不从心都是摆脱不了自己\n[02:47.78]谁有天大力气\n[02:49.70]可以拎着自己飞呀\n[02:52.89]拎着自己头发直到双脚都离地\n[02:58.16]谁有天大力气\n[03:00.03]可以拎着自己飞呀\n[03:03.31]所有力不从心都是摆脱不了自己\n[03:08.78]谁有天大力气\n[03:10.55]可以拎着自己飞呀\n[03:13.73]拎着自己头发直到双脚都离地\n[03:19.05]谁有天大力气\n[03:21.07]可以拎着自己飞呀\n[03:24.00]所有力不从心都是摆脱不了自己"
    }]

];
