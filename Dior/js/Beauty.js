$('aside .top_sub>p:nth-child(3)').on().click(function(){
    $('aside').stop().hide();
});
$('aside .top_sub>p:nth-child(2) img').on().click(function(){
    $('aside .top_sub>p:nth-child(2)').stop().hide();
});


// 1depth 클릭시 2depth 서브메뉴 나옴
$('.sec_08 .real_time #one').on().click(function(){
    $('.re_view img:nth-child(1)').stop().show();
});


$('.sec_08 .real_time #two').on().click(function(){
    $('.re_view img:nth-child(2)').stop().toggle();
});

$('.sec_08 .real_time #three').on().click(function(){
    $('.re_view img:nth-child(3)').stop().toggle();
});

$('.sec_08 .real_time #four').on().click(function(){
    $('.re_view img:nth-child(4)').stop().toggle();
});






// // 닫기 버튼 클릭시 2depth 서브메뉴 사라짐
// $('.sec_08 .real_time li a').click(function(){
//     $('.re_view img').hide();
// });



// $('.gnb li').mouseenter(function(){
//     $(this).children('div').stop().slideDown();
// });
// $('.gnb li').mouseleave(function(){
//     $(this).find('div:visible').stop().slideUp();
// });