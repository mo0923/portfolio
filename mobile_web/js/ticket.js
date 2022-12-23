$('#myBtn').on('click',myfunction);


function myfunction(){
    var dots = $('#dots');
    var moreButton = $('#more');
    var textButton = $('#myBtn');
    var result = $('#dots').css('display');

    // 초기상태 코딩
    if(result==='none'){
        dots.css({display:'inline'});
        textButton.text('+MORE');
        moreButton.CSS({display:'none'});
    }else{
        // 초기 로딩상태에서 시작
        dots.css({display:'none'});
        textButton.text('-CLOSE');
        moreButton.css({display:'inline'});
    }
}

$('.header label').click(function(){
    $('.banner img').stop().toggle();
});
