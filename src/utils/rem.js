const resize = function() {
  const designSize = 11520; //默认设计图尺寸 11520*2160
  const html = document.documentElement;
  // let wW = html.clientWidth; //窗口宽度
  const wW = 11520; //窗口宽度
  // let rem = (wW*1000)/designSize;
  const rem = (wW * 500) / designSize;
  html.style.fontSize = rem + "px";
};
resize(); //初始化
window.addEventListener("resize", resize, false); //绑定到窗口事件中
