// ==UserScript==
// @name Disable Video AutoPlay
// @namespace https://mt25cyb.github.io/
// @icon data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iIzc1NzU3NSIgZD0ibTIzIDE3LjN2My41YzAgLjYtLjYgMS4yLTEuMyAxLjJoLTUuNWMtLjYgMC0xLjItLjYtMS4yLTEuM3YtMy41YzAtLjYuNi0xLjIgMS4yLTEuMnYtMS41YzAtMS40IDEuNC0yLjUgMi44LTIuNXMyLjggMS4xIDIuOCAyLjV2MS41Yy42IDAgMS4yLjYgMS4yIDEuM20tMi41LTIuOGMwLS44LS43LTEuMy0xLjUtMS4zcy0xLjUuNS0xLjUgMS4zdjEuNWgzem0tMi41LTkuNWgtMTR2MTRoOXYyaC05Yy0xLjExIDAtMi0uOS0yLTJ2LTE0YzAtMS4xMS44OS0yIDItMmgxNGMxLjEgMCAyIC44OSAyIDJ2NS4xbC0xLS4xLTEgLjF6bS05IDMgNSA0LTUgNHoiLz48L3N2Zz4=
// @description Turn off AutoPlay for all HTML5 videos on the page
// @description:zh-CN 关闭页面上所有HTML5视频的自动播放
// @version 0.0.2
// @match *://*/*
// ==/UserScript==


(function() {
  var videoTags = document.querySelectorAll('video');
  for (var i = videoTags.length - 1; i >= 0; i--) {
    var videoTag = videoTags[i];
    console.log('Disable Video AutoPlay:', videoTag);
    videoTag.autoplay = false;
    videoTag.pause();
  }
})();
