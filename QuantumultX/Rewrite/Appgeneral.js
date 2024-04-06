[rewrite_local]
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

^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/Guding88/Script/main/Picsew.js

# > 百度网盘_开屏广告@ddgksf2013
^https?:\/\/pan\.baidu\.com\/api\/getsyscfg url script-response-body https://gist.githubusercontent.com/ddgksf2013/f43026707830c7818ee3ba624e383c8d/raw/baiduCloud.vip.js
# > 百度网盘_设置信息流@ddgksf2013
^https?:\/\/pan\.baidu\.com\/act\/v\d\/(bchannel|welfare)\/list url reject-200
# > 百度网盘_通用广告@ddgksf2013
^https?:\/\/pan\.baidu\.com\/rest\/.*\/pcs\/ad url reject-200
# > 百度网盘_活动推广@ddgksf2013
^https?:\/\/pan\.baidu\.com\/act\/api\/activityentry url reject-200
# > 百度网盘_会员权益@ddgksf2013
^https:\/\/pan\.baidu\.com\/rest\/.*\/membership\/user\?app_id url script-response-body https://gist.githubusercontent.com/ddgksf2013/f43026707830c7818ee3ba624e383c8d/raw/baiduCloud.vip.js

^https?:\/\/(api-\w+|xiaoshuo)\.wtzw\.com\/api\/v\d\/ url script-response-body https://raw.githubusercontent.com/I-am-R-E/QuantumultX/main/JavaScript/QiMaoXiaoShuo.js

https://xluser-ssl.xunlei.com/xluser.core.login/v3/getuserinfo url script-response-body https://raw.githubusercontent.com/Marol62926/MarScrpt/main/xunlei.js


  
[mitm]
hostname = *.xiuxiu.meitu.com, api.posters.meitu.com, api-sub.meitu.com, *.camscanner.com, *.intsig.net, api.alipan.com, member.aliyundrive.com, member.alipan.com, api.aliyundrive.com, buy.itunes.apple.com, pan.baidu.com, *.wtzw.com, xluser-ssl.xunlei.com
