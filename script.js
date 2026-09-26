/* 渐进增强，纯附加：即使这个文件完全没有加载，页面内容也完整可见、可点击、可键盘操作。 */
(function () {
  'use strict';

  /* 1. 页脚年份 */
  var year = document.getElementById('year');
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  /* 2. 滚动后给顶栏补一条分隔线：只切换一个 class，滚动处理走 rAF。 */
  var header = document.querySelector('.site-header');
  if (header) {
    var ticking = false;
    var apply = function () {
      header.classList.toggle('is-scrolled', window.scrollY > 8);
      ticking = false;
    };
    window.addEventListener(
      'scroll',
      function () {
        if (!ticking) {
          ticking = true;
          window.requestAnimationFrame(apply);
        }
      },
      { passive: true }
    );
    apply();
  }
})();
