$(document).ready(function(){
    // 브라우저 너비 높이값 변수 할당
    var brw = $(window).width();
    var brh = $(window).height();
    console.log('브라우저 너비값 :' +brw);
    console.log('브라우저 높이값 :' +brh);
    // DOM # wrap에 동적 높이값 적용
    $('#wrap').css({height:brh});
});