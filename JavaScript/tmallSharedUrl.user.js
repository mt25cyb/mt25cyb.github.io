// ==UserScript==
// @name         Tmall URL Redirect
// @namespace    https://mt25cyb.github.io/
// @version      0.3
// @description  Tmall URL Redirect
// @author       martin
// @match        https://*.tmall.com/*
// @match        https://*.taobao.com/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  // 获取原网址的商品 ID
  const urlParams = new URLSearchParams(window.location.search);
  const itemId = urlParams.get('id');

  // 检查是否包含商品 ID 且不匹配排除的网址
  if (itemId && window.location.href !== 'https://main.m.taobao.com/detail/index.html?id=' + itemId) {
    // 构建新的 Taobao 网址
    const newUrl = `https://main.m.taobao.com/detail/index.html?id=${itemId}`;

    // 跳转到新的网址
    window.location.href = newUrl;
  }
})();
