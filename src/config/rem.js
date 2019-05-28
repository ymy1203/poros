(function(doc, win) {
  var docEl = doc.documentElement;
  // isIOS = navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
  // dpr = isIOS ? Math.min(win.devicePixelRatio, 3) : win.devicePixelRatio,
  // dpr = window.top === window.self ? dpr : 1, //被iframe引用时，禁止缩放
  var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
  var dpr = window.devicePixelRatio;
  
  docEl.dataset.dpr = dpr;
  var recalc = function() {
  var width = docEl.clientWidth;
  if (width / dpr > 720) {
  width = 720 * dpr;
  }
  docEl.dataset.width = width
  docEl.dataset.percent = 20 * (width / 720);
  docEl.style.fontSize = 20 * (width / 720) + 'px';
  
  sessionStorage.text012 = "width="+width+",clientWidth="+ docEl.clientWidth+",dpr="+ dpr;
  };
  recalc()
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  })(document, window);
