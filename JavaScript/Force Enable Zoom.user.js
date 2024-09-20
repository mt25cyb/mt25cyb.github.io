// ==UserScript==
// @name Force Enable Zoom
// @namespace https://mt25cyb.github.io/
// @icon data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iIzc1NzU3NSIgZD0ibTkgMmE3IDcgMCAwIDEgNyA3YzAgMS41Ny0uNSAzLTEuMzkgNC4xOWwuOC44MWguNTlsNiA2LTIgMi02LTZ2LS41OWwtLjgxLS44Yy0xLjE5Ljg5LTIuNjIgMS4zOS00LjE5IDEuMzlhNyA3IDAgMCAxIC03LTcgNyA3IDAgMCAxIDctN20tMSAzdjNoLTN2MmgzdjNoMnYtM2gzdi0yaC0zdi0zeiIvPjwvc3ZnPgo=
// @description Force-enable zooming on a site, even on sites that disable it.
// @description:zh-CN 强制启用网站上的缩放，即使是在禁用它的网站上。
// @version 0.0.2
// @match *://*/*
// ==/UserScript==

(function() {
  // Disallowing users from changing zoom levels is a user-hostile move.
  var scalableMetaViewport = 'width=device-width, initial-scale=1';
  var metaTag = document.querySelector('meta[name=viewport]');
  if (metaTag != null) {
    metaTag.content = scalableMetaViewport;
  } else {
    var metaTag = document.createElement('meta');
    metaTag.name = 'viewport';
    metaTag.content = scalableMetaViewport;
    document.getElementsByTagName('head')[0].appendChild(metaTag);
  }

  // Force the page to pick up the changes.
  document.body.style.opacity = .9999;
  setTimeout(function(){
    document.body.style.opacity = 1;
  }, 1);
})();

