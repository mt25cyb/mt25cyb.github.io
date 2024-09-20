// ==UserScript==
// @name Remove Footers
// @namespace https://mt25cyb.github.io/
// @icon data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iIzc1NzU3NSIgZD0ibTIwLjUgMTFoLTEuNXYtNGMwLTEuMTEtLjktMi0yLTJoLTR2LTEuNWEyLjUgMi41IDAgMCAwIC0yLjUtMi41IDIuNSAyLjUgMCAwIDAgLTIuNSAyLjV2MS41aC00YTIgMiAwIDAgMCAtMiAydjMuOGgxLjVjMS41IDAgMi43IDEuMiAyLjcgMi43cy0xLjIgMi43LTIuNyAyLjdoLTEuNXYzLjhhMiAyIDAgMCAwIDIgMmgzLjh2LTEuNWMwLTEuNSAxLjItMi43IDIuNy0yLjdzMi43IDEuMiAyLjcgMi43djEuNWgzLjhhMiAyIDAgMCAwIDItMnYtNGgxLjVhMi41IDIuNSAwIDAgMCAyLjUtMi41IDIuNSAyLjUgMCAwIDAgLTIuNS0yLjV6Ii8+PC9zdmc+Cg==
// @description Remove cookie notices, email prompts, and other annoyances from websites. Not guaranteed to be 100% effective.
// @description:zh-CN 从网站上删除cookie通知、电子邮件提示和其他一些烦人的内容。不能保证100%有效。
// @version 0.0.2
// @match *://*/*
// ==/UserScript==

(function() {
  let i, elements = document.querySelectorAll('body *');
  for (i = 0; i < elements.length; i++) {
    if(getComputedStyle(elements[i]).position === 'fixed' || getComputedStyle(elements[i]).position === 'sticky') {
      elements[i].parentNode.removeChild(elements[i]);
    }
  }
  document.body.style.overflow = "auto";
  document.body.style.position = "static";
})();
