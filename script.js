(function() {
  // 超时时间（毫秒）
  const TIMEOUT = 5000;

  // 使用同源策略获取重定向地址
  const getRedirectUrl = async (url) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = url;
      script.onload = () => {
        resolve(window.redirectUrl);  // 假设目标服务器返回一个名为 "redirectUrl" 的全局变量
        document.body.removeChild(script);
      };
      script.onerror = () => {
        reject('获取重定向地址失败：网络错误。');
      };
      document.head.appendChild(script);  // 将脚本添加到头部，而不是主体
    });
  };

  // 更新显示结果
  const updateResult = (result) => {
    document.getElementById('result').textContent = result;
  };

  // 获取并显示重定向地址
  const fetchAndDisplayRedirectUrl = async (url) => {
    try {
      const redirectUrl = await getRedirectUrl(url);
      updateResult(redirectUrl);
      window.location.href = redirectUrl;  // 直接唤起下载
    } catch (error) {
      updateResult('获取重定向地址失败：' + error);
    }
  };

  // 主函数
  const main = async () => {
    const url = 'http://koa-download.kingsgroup.cn/koa.apk';
    fetchAndDisplayRedirectUrl(url);
  };

  // 启动主函数
  main();
})();
