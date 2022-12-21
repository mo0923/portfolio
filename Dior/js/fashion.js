// $('.sec_04_div img').eq(0).hover(function() {
//     $('.div1').stop().slideDown();
// });

// $('.sec_04_div img').eq(0).mouseleave(function(){
//     $('.div1').stop().slideUp();
// });

// $('.sec_04_div img:first-child').mouseenter(function(e){
//     $(".div1").show();
// });
// $('.sec_04_div img:first-child').mouseleave(function(e){
//     $(".div1").hide();
// });    


$('.sec_06_div li:first-child').mouseenter(function(){
    $('.sub').stop().show();
});
$('.sec_06_div li:first-child').mouseleave(function(){
    $('.sub').stop().hide();
});


$('.sec_06_div li:last-child').mouseenter(function(){
    $('.sub2').stop().show();
});
$('.sec_06_div li:last-child').mouseleave(function(){
    $('.sub2').stop().hide();
});
