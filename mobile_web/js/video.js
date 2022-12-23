// 브라우저 너비, 높이 변수할당 콘솔 확인
var bw = $(window).width();
var bh = $(window).height();
console.log("브라우저 너비는 :" +bw);
console.log("브라우저 높이는 :" +bh);
$('#wrap').css({height:bh});
// 브라우저 높이의 half
var halfheight = bh/2;
$('.youtube').css({'margin-top':halfheight});
