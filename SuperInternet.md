# Converting GL.iNet MT2500 from CN to Global
> 操作参考自[OpenWrt论坛的一张帖子](https://forum.openwrt.org/t/converting-gl-inet-mt3000-beryl-ax-from-cn-to-global/165159)，未实际验证。
## 方法一    *[form markusl](https://forum.openwrt.org/t/converting-gl-inet-mt3000-beryl-ax-from-cn-to-global/165159/4)*
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
## 方法二    *[form shi05275](https://forum.openwrt.org/t/converting-gl-inet-mt3000-beryl-ax-from-cn-to-global/165159/7)*
进入SSH，执行以下操作：
```shell
echo 0 > /sys/block/mmcblk0boot1/force_ro
echo "US" |dd of=/dev/mmcblk0boot1 bs=1 seek=136
sync
reboot
```

