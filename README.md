
## 特别声明
1. 所有规则数据都来自互联网，感谢开源规则项目作者的辛勤付出。
2. 此项目只是自留备份用。



### <a id="TikTok"> TikTok </a>

* iOS系统版本：17.0 Beta （支持向下兼容）
* TikTok Version : 30.4.0（前置操作：从 [iTunes for Windows V 12.6.5.3](https://secure-appldnld.apple.com/itunes12/091-87820-20180912-69177170-B085-11E8-B6AB-C1D03409AD2A5/iTunesSetup.exe) 抓包 TikTok Version 21.1.0 安装，登陆后观看视频、直播、评论、点赞、发布视频等模块都正常使用后，再从 App Store 升级至最新版方可使用！）
### <a id="Quantumult-X"> Quantumult X </a>

**关于换区**


* 解锁并换区：将`CN`改为想看的国家/地区的2位`大写`英文简写，

    * 在`HTTP复写`中，将`CN`的替换值改为`SG`、`MO`、`TW`等即可换区


**操作步骤**

1、打开`Quantumult X`  

2、开启**MitM**并**信任**Quantumult X证书：
    * `设置` → `MitM` → 开启`MitM` → `生成密钥及证书` → 右上角点`保存` → `允许`安装描述文件 → `关闭` → 前往手机的`设置`，不在Quantumult X了 → 看到`已下载描述文件` → `安装` → 输入手机的解锁密码 → `安装` → `安装` → 前往手机的`设置` → `通用` → `关于本机` → `证书信任设置` → 找到`Quantumult X Custom Root Certificate…`点绿它以信任该根证书 → `继续`  

**方法一：**

3、配置文件点击`编辑`找到`[rewrite_remote]`添加下面对应国家的复写


**日本**
```
https://raw.githubusercontent.com/Semporia/TikTok-Unlock/master/Quantumult-X/TikTok-JP.conf, tag=TikTok, update-interval=86400, opt-parser=false, enabled=true
```

**台湾**
```
https://raw.githubusercontent.com/Semporia/TikTok-Unlock/master/Quantumult-X/TikTok-TW.conf, tag=TikTok, update-interval=86400, opt-parser=false, enabled=true
```

**韩国**
```
https://raw.githubusercontent.com/Semporia/TikTok-Unlock/master/Quantumult-X/TikTok-KR.conf, tag=TikTok, update-interval=86400, opt-parser=false, enabled=true
```

**美国**
```
https://raw.githubusercontent.com/Semporia/TikTok-Unlock/master/Quantumult-X/TikTok-US.conf, tag=TikTok, update-interval=86400, opt-parser=false, enabled=true
```


**方法二：**

3、在`[rewrite_local]`中添加以下重写

```
(?<=_region=)CN(?=&) url 307 KR
(?<=&mcc_mnc=)4 url 307 2
^(https?:\/\/(tnc|dm)[\w-]+\.\w+\.com\/.+)(\?)(.+) url 302  $1$3
(?<=\d\/\?\w{7}_\w{4}=)1[6-9]..(?=.?.?&) url 307 17
```

3.1、在`[mitm]`中添加

```
hostname = *.tiktokv.com, *.byteoversea.com, *.tik-tokapi.com
```

4、找到`[filter_remote]`添加下句分流(无论使用方法一或是方法二，此分流都需要添加！)

```
https://raw.githubusercontent.com/Semporia/TikTok-Unlock/master/Quantumult-X/TikTok.list, tag=TikTok, force-policy=TikTok, update-interval=86400, opt-parser=false, enabled=true
```

5、换区：在[rewrite_local]中添加下句重写，并将`CN`改为想看的国家/地区的2位`大写`英文简写 JP（日本）｜KR（韩国）｜UK（英国）｜US（美国）｜TW（台湾）


```
(?<=_region=)CN(?=&) url 307 CN
```
### <a id="Shadowrocket"> Shadowrocket </a>


**操作步骤**

1、打开`Shadowrocket`  

2、开启**HTTPS解密**并**安装、信任**Shadowrocket证书：
    * `配置` → 你使用的配置文件后的`i` → `HTTPS解密` → 开启`HTTPS解密` → `生成新的CA证书` → 允许 → 返回点击`安装证书`，并点击`允许` → 前往手机的`设置`，不是Shadowrocket的 → 看到`已下载描述文件` → `安装` → 输入手机的解锁密码 → `安装` → `安装` → 前往手机的`设置` → `通用` → `关于本机` → `证书信任设置` → 找到`Shadowrocket…`点绿它以信任该根证书 → `继续`  

3、点击`配置` → `模块` → 右上角加号，添加想看国家的对应模块。

**日本**
```
https://raw.githubusercontent.com/Semporia/TikTok-Unlock/master/Shadowrocket/TiKTok-JP.conf
```

**台湾**
```
https://raw.githubusercontent.com/Semporia/TikTok-Unlock/master/Shadowrocket/TiKTok-TW.conf
```

**韩国**
```
https://raw.githubusercontent.com/Semporia/TikTok-Unlock/master/Shadowrocket/TiKTok-KR.conf
```

**美国**
```
https://raw.githubusercontent.com/Semporia/TikTok-Unlock/master/Shadowrocket/TiKTok-US.conf
```

4、添加以下`分流`，点击`配置` → 你使用的配置后的`i` → `规则` → 右上角加号 → `类型` → 选择`RULE-SET` → 策略 → 选择`PROXY`或者其他你想使用的策略（一般是对应地区的代理服务器节点） → 规则集URL文本框内填写

```
https://raw.githubusercontent.com/Semporia/TikTok-Unlock/master/Shadowrocket/TikTok.list
```

### <a id="抓包降级"> 抓包降级 TikTok 21.1.0 </a>

* [教程](https://semporia.github.io/iTunes.html)
* [备用地址](https://semporia.blogspot.com/2022/06/tiktok-2110.html)

### <a id="抖音"> 抖音无法观看 </a>

在hostname中加上以下兩條
```
-*snssdk.com, -*amemv.com
```

### <a id="抖音IP代理"> 抖音IP代理 </a>

订阅分流

```
https://raw.githubusercontent.com/Semporia/Quantumult-X/master/Filter/DouYin.list
```
# 特别感谢
以下排名不分先后
[@BaileyZyp](https://github.com/BaileyZyp) [@Mazeorz](https://github.com/Mazeorz) [@LuzMasonj](https://github.com/LuzMasonj) [@chouchoui](https://github.com/chouchoui)  [@ypannnn](https://github.com/ypannnn)  [@echizenryoma](https://github.com/echizenryoma)  [@zirawell](https://github.com/zirawell)  [@urzz](https://github.com/urzz)  [@ASD-max](https://github.com/ASD-max) [*@ddgksf2013*](https://t.me/ddgksf2013_bot)
[*@Blackmatrix7*](https://github.com/blackmatrix7/ios_rule_script) [*@DivineEngine*](https://github.com/DivineEngine) [*@App2smile*](https://github.com/app2smile/rules)  [*@Peng-YM*](https://github.com/Peng-YM) [*@Nick-workflow*](https://github.com/Nick-workflow) [*@KOP-XIAO*](https://github.com/KOP-XIAO) [*@NobyDa*](https://github.com/NobyDa) [*@Neurogram-R*](https://github.com/Neurogram-R) [*@zmqcherish*](https://github.com/zmqcherish) [*@Qure*](https://github.com/Koolson/Qure) [*@Orz-3*](https://github.com/Orz-3) [*@kyle*](https://github.com/Xirou) [*@HotKids*](https://github.com/hotKids) [*@langkach*](https://github.com/langkhach270389) [*@lxk0301*](https://github.com/lxk0301) [*@zqzess*](https://github.com/zqzess/rule_for_quantumultX) [*@Anti-AD*](https://github.com/privacy-protection-tools/anti-AD) [*@VirgilClyne*](https://github.com/VirgilClyne/iRingo#iringo) [*@zZPiglet*](https://github.com/zZPiglet/Task/tree/master) [*@Chavyleung*](https://github.com/chavyleung) [*@tugepaopao*](https://github.com/tugepaopao/Image-Storage) [*@Yuanxsxs*](https://github.com/Yuanxsxs) [*@LovedGM*](https://github.com/LovedGM/Quantumult-X-TuBiao) [*@Semporia*](https://github.com/Semporia) [*@Koolson*](https://github.com/Koolson)
