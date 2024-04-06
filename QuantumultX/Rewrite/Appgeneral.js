[rewrite_local]

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



# 番茄小说

DOMAIN p6-ad-sign.byteimg.com REJECT

DOMAIN p9-ad-sign.byteimg.com REJECT

DOMAIN-SUFFIX byteimg.com DIRECT

DOMAIN i.snssdk.com REJECT

DOMAIN i-lq.snssdk.com REJECT

DOMAIN dig.bdurl.net REJECT

DOMAIN-KEYWORD zijieapi REJECT

DOMAIN activity-ag.awemeughun.com REJECT



DOMAIN mcs.snssdk.com REJECT

DOMAIN tnc3-alisc1.snssdk.com REJECT

DOMAIN security-lq.snssdk.com REJECT

DOMAIN tnc3-aliec2.snssdk.com REJECT

DOMAIN is.snssdk.com REJECT

DOMAIN i.snssdk.com REJECT



DOMAIN v6-novelapp.ixigua.com REJECT

DOMAIN *novelapp.ixigua.com REJECT

DOMAIN *default.ixigua.com REJECT

DOMAIN msync-im1-vip6-std.easemob.com REJECT

DOMAIN apd-pcdnwxlogin.teg.tencent-cloud.net REJECT

DOMAIN api.iegadp.qq.com REJECT

DOMAIN sf3-ttcdn-tos.pstatp.com REJECT

DOMAIN-SUFFIX pglstatp-toutiao.com REJECT





DOMAIN-SUFFIX byteorge.com REJECT

DOMAIN-SUFFIX bytegoofy.com REJECT

DOMAIN-SUFFIX bytedance.com REJECT



IP-CIDR 49.71.37.101/32 REJECT no-resolve

IP-CIDR 117.71.105.23/32 REJECT no-resolve

IP-CIDR 218.94.207.205/32 REJECT no-resolve

IP-CIDR 117.92.229.188/32 REJECT no-resolve

IP-CIDR 101.36.166.16/32 REJECT no-resolve

IP-CIDR 180.96.2.114/32 REJECT no-resolve

# 番茄小说去章末广告

^https?:\/\/.+\.pangolin-sdk-toutiao\.com\/api\/ad\/union\/sdk\/(geturlads|stats|settings)\/ url reject

^https?:\/\/.+\.pglstatp-toutiao\.com\/.+\/toutiao\.mp4 url reject

^https?:\/\/.+\.(pglstatp-toutiao|pstatp)\.com\/(obj|img)\/(ad-app-package|ad)\/.+ url reject

^https?:\/\/.+\.(pglstatp-toutiao|pstatp)\.com\/(obj|img)\/web\.business\.image\/.+ url reject

^https?:\/\/.+\.(pglstatp-toutiao|pstatp)\.com\/obj\/ad-pattern\/renderer url reject

^https?:\/\/gurd\.snssdk\.com\/src\/server\/v3\/package url reject

^https?:\/\/.+\.byteimg.com/tos-cn-i-1yzifmftcy\/(.+)-jpeg\.jpeg url reject

^https?:\/\/.+\.pstatp\.com\/obj\/mosaic-legacy\/.+\?from\=ad url reject

^https?:\/\/.+\.pstatp\.com\/bytecom\/resource\/trackurllog\/src\/.+ url reject

^https?:\/\/.+\.snssdk\.com\/video\/play\/1\/toutiao\/.+\/mp4 url reject

^https?:\/\/.+\.snssdk.com\/api\/ad\/.+ url reject

^http:\/\/.+\.byteimg\.com\/ad-app-package url reject

^http:\/\/.+\.byteimg\.com\/web\.business\.image url reject

# .+web\.business\.image url reject
  
^https?:\/\/.+?\.snssdk\.com\/motor\/operation\/activity\/display\/config\/V2\/ url reject













  
[mitm]
hostname = spclient.wg.spotify.com, *.xiuxiu.meitu.com, api.posters.meitu.com, api-sub.meitu.com, *.camscanner.com, *.intsig.net, api.alipan.com, member.aliyundrive.com, member.alipan.com, api.aliyundrive.com, buy.itunes.apple.com, pan.baidu.com, *.wtzw.com, xluser-ssl.xunlei.com, *.pangolin-sdk-toutiao *.pangolin-sdk-toutiao.* *.pstatp.com *.pstatp.com.* *.pglstatp-toutiao.com.* *.pglstatp-toutiao.com gurd.snssdk.com gurd.snssdk.com.* *default.ixigua.com

