// 为元素添加 WOW 动效类
['recent-post-item', 'card-widget', 'container'].forEach(function(className) {
  var arr = document.getElementsByClassName(className);
  for (var i = 0; i < arr.length; i++) {
    arr[i].classList.add('wow');
    arr[i].classList.add('animate__zoomIn');
    arr[i].setAttribute('data-wow-duration', '1500ms');
    arr[i].setAttribute('data-wow-delay', '0ms');
    arr[i].setAttribute('data-wow-offset', '0');
    arr[i].setAttribute('data-wow-iteration', '1');
  }
});

wow = new WOW({
  boxClass: 'wow',
  animateClass: 'animate__animated',
  offset: 0,
  mobile: false,
  live: true
})
wow.init();