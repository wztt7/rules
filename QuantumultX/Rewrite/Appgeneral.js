
[rewrite_local]

^https:\/\/www\.google\.com(?:\.[a-z]+|)\/(?:search\?(?:|.+?&)q=|$) url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/Google_CAPTCHA.js


  
^https:\/\/spclient\.wg\.spotify\.com\/(bootstrap\/v1\/bootstrap|user-customization-service\/v1\/customize)$ url script-response-body https://raw.githubusercontent.com/app2smile/rules/master/js/spotify-proto.js
^https:\/\/spclient\.wg\.spotify\.com\/(artistview\/v1\/artist|album-entity-view\/v2\/album)\/ url script-request-header https://raw.githubusercontent.com/app2smile/rules/master/js/spotify-json.js
  
^https?:\/\/((h5|api)\.xiuxiu|api-sub|api\.posters)\.meitu\.com\/.+\/(vip|user|h\d|center|home) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/mtxx.js

^https:\/\/.*\.(intsig\.net|camscanner\.com) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/CamScanner.js

^https?:\/\/api\.(aliyundrive|alipan)\.com\/business\/v1\.1\/users\/me\/vip\/info url script-response-body https://gist.githubusercontent.com/ddgksf2013/f4752e632fd3375ea2811985c5b635dc/raw/alicloud.js
^https?:\/\/member\.(aliyundrive|alipan)\.com\/v1\/users\/tools url script-response-body https://gist.githubusercontent.com/ddgksf2013/f4752e632fd3375ea2811985c5b635dc/raw/alicloud.js
^https?:\/\/member\.(aliyundrive|alipan)\.com\/v1\/users\/me url script-response-body https://gist.githubusercontent.com/ddgksf2013/f4752e632fd3375ea2811985c5b635dc/raw/alicloud.js
^https?:\/\/api\.(aliyundrive|alipan)\.com\/business\/v1\.0\/users\/vip\/info url script-response-body https://gist.githubusercontent.com/ddgksf2013/f4752e632fd3375ea2811985c5b635dc/raw/alicloud.js
^https?:\/\/api\.(aliyundrive|alipan)\.com\/business\/v1\.0\/users\/feature\/list url script-response-body https://gist.githubusercontent.com/ddgksf2013/f4752e632fd3375ea2811985c5b635dc/raw/alicloud.js
^https?:\/\/api\.(aliyundrive|alipan)\.com\/apps\/v2\/users\/home\/widgets url script-response-body https://gist.githubusercontent.com/ddgksf2013/f4752e632fd3375ea2811985c5b635dc/raw/alicloud.js
^https?:\/\/member\.(aliyundrive|alipan)\.com\/v1\/users\/onboard_list url reject
^https?:\/\/user\.(aliyundrive|alipan)\.com\/v2\/user\/get url script-response-body https://gist.githubusercontent.com/ddgksf2013/f4752e632fd3375ea2811985c5b635dc/raw/alicloud.js
^https?:\/\/api\.(aliyundrive|alipan)\.com\/adrive\/v2\/backup\/device url reject
^https?:\/\/member\.(aliyundrive|alipan)\.com\/v2\/activity\/sign_in_info url script-response-body https://gist.githubusercontent.com/ddgksf2013/f4752e632fd3375ea2811985c5b635dc/raw/alicloud.js

^https?:\/\/pan\.baidu\.com\/api\/getsyscfg url script-response-body https://gist.githubusercontent.com/ddgksf2013/f43026707830c7818ee3ba624e383c8d/raw/baiduCloud.vip.js
^https?:\/\/pan\.baidu\.com\/act\/v\d\/(bchannel|welfare)\/list url reject-200
^https?:\/\/pan\.baidu\.com\/rest\/.*\/pcs\/ad url reject-200
^https?:\/\/pan\.baidu\.com\/act\/api\/activityentry url reject-200
^https:\/\/pan\.baidu\.com\/rest\/.*\/membership\/user\?app_id url script-response-body https://gist.githubusercontent.com/ddgksf2013/f43026707830c7818ee3ba624e383c8d/raw/baiduCloud.vip.js

^https?:\/\/(api-\w+|xiaoshuo)\.wtzw\.com\/api\/v\d\/ url script-response-body https://raw.githubusercontent.com/I-am-R-E/QuantumultX/main/JavaScript/QiMaoXiaoShuo.js

https://xluser-ssl.xunlei.com/xluser.core.login/v3/getuserinfo url script-response-body https://raw.githubusercontent.com/Marol62926/MarScrpt/main/xunlei.js

^https?:\/\/translator\.felo\.me\/api\/plan\/current url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/Felo.js

^https?:\/\/baimiao\.uzero\.cn\/api\/.+\/(appLaunchWithUser|getAnnouncement|checkLoginClient) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/baimiao.js

# https://raw.githubusercontent.com/RuCu6/QuanX/main/Rewrites/Cube/cnftp.snippet
^http[s]?:\/\/mobile\.api\.mgtv\.com\/v[0-9]\/(playlist|video\/album|video\/relative|video\/list).*$ url script-request-header https://raw.githubusercontent.com/Yu9191/Rewrite/main/mgtv1.js
https://mobile-stream.api.mgtv.com/v1/video/source? url script-request-header https://raw.githubusercontent.com/Yu9191/Rewrite/main/MGTV.js
https://nuc.api.mgtv.com/GetUserInfo url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/mgtv.js
https://mobile-stream.api.mgtv.com/v1/video/source url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/mgtv.js
#港区
^https://mobile.api.mgtv.com/v8/video/getSource url script-request-header https://raw.githubusercontent.com/Yu9191/Rewrite/main/MGTV.js
#播放页开通提示移除
http://vip.bz.mgtv.com/client/dynamic_entry url reject
https://pcc.api.mgtv.com/video/getSource url script-request-header https://raw.githubusercontent.com/Yu9191/Rewrite/main/MGTV.js
https://pad.api.mgtv.com/v8/video/getSource url script-request-header https://raw.githubusercontent.com/Yu9191/Rewrite/main/MGTV.js

# https://github.com/WeiGiegie/666/blob/main/zmfy.js
^https?:\/\/zimu.yunmiaomiao.cn\/api\/user\/index url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/zmfy.js



  
[mitm]
hostname = www.google.com*,spclient.wg.spotify.com, *.xiuxiu.meitu.com, api.posters.meitu.com, api-sub.meitu.com, *.camscanner.com, *.intsig.net, api.alipan.com, member.aliyundrive.com, member.alipan.com, api.aliyundrive.com, pan.baidu.com, *.wtzw.com, xluser-ssl.xunlei.com, translator.felo.me, baimiao.uzero.cn, *.mgtv.com, pad.api.mgtv.com, pcc.api.mgtv.com, zimu.yunmiaomiao.cn
