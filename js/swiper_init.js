// 等待插件注入轮播 HTML 后再初始化 Swiper
var swiper = new Swiper('.blog-slider', {
  passiveListeners: true,
  spaceBetween: 30,
  effect: 'fade',
  loop: true,
  autoplay: {
    disableOnInteraction: true,
    delay: 3000
  },
  mousewheel: true,
  pagination: {
    el: '.blog-slider__pagination',
    clickable: true,
  }
});

var container = document.getElementById('swiper_container');
if (container !== null) {
  container.onmouseenter = function() {
    swiper.autoplay.stop();
  };
  container.onmouseleave = function() {
    swiper.autoplay.start();
  }
}