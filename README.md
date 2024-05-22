<details>
  <summary>个人手机用脚本推荐</summary>
## 个人手机用脚本推荐
脚本主要来自[Greasy Fork](https://greasyfork.org/)，可到网站上面去搜索看有没自己主要的。
1. HTML5视频播放器增强脚本
<br>[脚本页面](https://greasyfork.org/scripts/381682) | [安装脚本](https://greasyfork.org/scripts/381682/code/script.user.js)
2. 【屏蔽广告】屏蔽谷歌广告、百度广告、知乎广告、隐藏谷歌和百度搜索增强百度搜索结果的各种广告等等（过滤所有采用谷歌联盟和百度联盟等广告联盟的广告）
<br>[脚本页面](https://greasyfork.org/scripts/460743) | [安装脚本](https://greasyfork.org/scripts/460743/code/script.user.js)
3. 骚扰拦截
<br>[脚本页面](https://greasyfork.org/scripts/440871) | [安装脚本](https://greasyfork.org/scripts/440871/code/script.user.js)
4. CSDN/知乎/哔哩哔哩/简书免登录去除弹窗广告 🛡
<br>[脚本页面](https://greasyfork.org/scripts/428960) | [安装脚本](https://greasyfork.org/scripts/428960/code/script.user.js)
5. Picviewer CE+
<br>[脚本页面](https://greasyfork.org/scripts/24204) | [安装脚本](https://greasyfork.org/scripts/24204/code/script.user.js)
6. 聚合搜索引擎切换导航[手机版][移动端]
<br>[脚本页面](https://greasyfork.org/scripts/462130) | [安装脚本](https://greasyfork.org/scripts/462130/code/script.user.js)
7. Github 增强 - 高速下载
<br>[脚本页面](https://greasyfork.org/scripts/412245) | [安装脚本](https://greasyfork.org/scripts/412245/code/script.user.js)
8. 网页限制解除(改)
<br>[脚本页面](https://greasyfork.org/scripts/28497) | [安装脚本](https://greasyfork.org/scripts/28497/code/script.user.js)
9. 大人的Greasyfork
<br>[脚本页面](https://greasyfork.org/scripts/23840) | [安装脚本](https://greasyfork.org/scripts/23840/code/script.user.js)
10. Greasy Fork 增强
<br>[脚本页面](https://greasyfork.org/scripts/467078) | [安装脚本](https://greasyfork.org/scripts/467078/code/script.user.js)
11. 图聚合展示by xhua
<br>[脚本页面](https://greasyfork.org/scripts/442098) | [安装脚本](https://greasyfork.org/scripts/442098/code/script.user.js)
12. anti-redirect 去除重定向
<br>[脚本页面](https://greasyfork.org/scripts/11915) | [安装脚本](https://greasyfork.org/scripts/11915/code/anti-redirect.user.js)

## 自写自用的两个脚本
1. NGA网址重定向
<br>[脚本页面](https://greasyfork.org/scripts/22508) | [安装脚本](https://greasyfork.org/scripts/22508/code/script.user.js)
2. UA自由切
<br>[脚本页面](https://greasyfork.org/scripts/490764) | [安装脚本](https://greasyfork.org/scripts/490764/code/script.user.js)

</details>
<details>
  <summary>Converting GL.iNet MT2500 from CN to Global</summary>
## Converting GL.iNet MT2500 from CN to Global
> 操作参考自[OpenWrt论坛的一张帖子](https://forum.openwrt.org/t/converting-gl-inet-mt3000-beryl-ax-from-cn-to-global/165159)，未实际验证。
### 方法一    *[form markusl](https://forum.openwrt.org/t/converting-gl-inet-mt3000-beryl-ax-from-cn-to-global/165159/4)*
1. 从[国际官网](https://dl.gl-inet.com/?model=mt2500)获取Global版uboot固件，并在路由器中进行刷机更新。
2. 完成此操作后，登录到刷机完的路由器并重新设置密码。

**如果您在路由器UI中看到CN，如下所示，则需要按照以下步骤**

3. 通过 SSH 在终端中运行以下命令：
```shell
echo US > /tmp/country_code
mount --bind /tmp/country_code /proc/gl-hw-info/country_code
cat /proc/gl-hw-info/country_code
```
刷新 UI，路由器现在应显示为Global，直到下次重新启动。
4. 要使其永久化，请执行以下操作：
```shell
cat /etc/rc.local
# Check that you haven't already added the below, then proceed
sed -i '1i\echo US > /tmp/country_code\nmount --bind /tmp/country_code /proc/gl-hw-info/country_code' /etc/rc.local
cat /etc/rc.local
# Verify that the lines were added, at next boot the system will still be the global version
```
5. 尝试重新启动并验证您是否拥有了Global版版本！
6. 固件更新后，您可能需要重复以上操作。
### 方法二    *[form shi05275](https://forum.openwrt.org/t/converting-gl-inet-mt3000-beryl-ax-from-cn-to-global/165159/7)*
进入SSH，执行以下操作：
```shell
echo 0 > /sys/block/mmcblk0boot1/force_ro
echo "US" |dd of=/dev/mmcblk0boot1 bs=1 seek=136
sync
reboot
```
</details>
