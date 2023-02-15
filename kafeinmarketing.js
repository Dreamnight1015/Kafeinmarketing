$(document).ready(function(){
    var lastWidth = $(window).width();
    $(window).resize(function(){
        if($(window).width()!=lastWidth){
            location.reload();
            lastWidth = $(window).width();
            return false;
        };
    });
    $('.sec4 .part1 .resulttext .result1').click(function(){
        $('.sec4 .part3 .resultpcimage .result1pcimage').attr('src','./result1.png');
        $('.sec4 .part3 .resultmobileimage .result1mobileimage').attr('src','./result1m.png');
        $('.sec4 .part2 .mobile .mobileimage').css('transform','none');
        $('.sec4 .part2 .mobile .mobileimage').css('margin','360px 0 0 0');
        $('.sec4 .part3 .resultmobileimage .result1mobileimage').css('width','172px');
        $('.sec4 .part3 .resultmobileimage .result1mobileimage').css('height','285px');
        $('.sec4 .part3 .resultmobileimage .result1mobileimage').css('right','40.7%');
        $('.sec4 .part3 .resultmobileimage .result1mobileimage').css('margin','400px 0 0 0');
        $('.sec4 .part1 .resulttext .result1').css('color','#7e91cb');
        $('.sec4 .part1 .resulttext .result2').css('color','#000000');
        $('.sec4 .part1 .resulttext .result3').css('color','#000000');
        $('.sec4 .part1 .resulttext .result4').css('color','#000000');
        $('.sec4 .part1 .resulttext .result5').css('color','#000000');
    })
    $('.sec4 .part1 .resulttext .result2').click(function(){
        $('.sec4 .part3 .resultpcimage .result1pcimage').attr('src','./result2.png');
        $('.sec4 .part3 .resultmobileimage .result1mobileimage').attr('src','./result2m.png');
        $('.sec4 .part2 .mobile .mobileimage').css('transform','none');
        $('.sec4 .part2 .mobile .mobileimage').css('margin','360px 0 0 0');
        $('.sec4 .part3 .resultmobileimage .result1mobileimage').css('width','172px');
        $('.sec4 .part3 .resultmobileimage .result1mobileimage').css('height','285px');
        $('.sec4 .part3 .resultmobileimage .result1mobileimage').css('right','40.7%');
        $('.sec4 .part3 .resultmobileimage .result1mobileimage').css('margin','400px 0 0 0');
        $('.sec4 .part1 .resulttext .result2').css('color','#7e91cb');
        $('.sec4 .part1 .resulttext .result1').css('color','#000000');
        $('.sec4 .part1 .resulttext .result3').css('color','#000000');
        $('.sec4 .part1 .resulttext .result4').css('color','#000000');
        $('.sec4 .part1 .resulttext .result5').css('color','#000000');
    })
    $('.sec4 .part1 .resulttext .result3').click(function(){
        $('.sec4 .part3 .resultpcimage .result1pcimage').attr('src','./result3.png');
        $('.sec4 .part3 .resultmobileimage .result1mobileimage').attr('src','./result3m.png');
        $('.sec4 .part2 .mobile .mobileimage').css('transform','none');
        $('.sec4 .part2 .mobile .mobileimage').css('margin','360px 0 0 0');
        $('.sec4 .part3 .resultmobileimage .result1mobileimage').css('width','172px');
        $('.sec4 .part3 .resultmobileimage .result1mobileimage').css('height','285px');
        $('.sec4 .part3 .resultmobileimage .result1mobileimage').css('right','40.7%');
        $('.sec4 .part3 .resultmobileimage .result1mobileimage').css('margin','400px 0 0 0');
        $('.sec4 .part1 .resulttext .result3').css('color','#7e91cb');
        $('.sec4 .part1 .resulttext .result2').css('color','#000000');
        $('.sec4 .part1 .resulttext .result1').css('color','#000000');
        $('.sec4 .part1 .resulttext .result4').css('color','#000000');
        $('.sec4 .part1 .resulttext .result5').css('color','#000000');
    })
    $('.sec4 .part1 .resulttext .result4').click(function(){
        $('.sec4 .part3 .resultpcimage .result1pcimage').attr('src','./result4-1.png');
        $('.sec4 .part3 .resultmobileimage .result1mobileimage').attr('src','./result4-2.png');
        $('.sec4 .part2 .mobile .mobileimage').css('transform','rotate(270deg)');
        $('.sec4 .part2 .mobile .mobileimage').css('margin','450px 0 0 0');
        $('.sec4 .part3 .resultmobileimage .result1mobileimage').css('width','285px');
        $('.sec4 .part3 .resultmobileimage .result1mobileimage').css('height','172px');
        $('.sec4 .part3 .resultmobileimage .result1mobileimage').css('right','38.2%');
        $('.sec4 .part3 .resultmobileimage .result1mobileimage').css('margin','565px 0 0 0');
        $('.sec4 .part1 .resulttext .result4').css('color','#7e91cb');
        $('.sec4 .part1 .resulttext .result2').css('color','#000000');
        $('.sec4 .part1 .resulttext .result3').css('color','#000000');
        $('.sec4 .part1 .resulttext .result1').css('color','#000000');
        $('.sec4 .part1 .resulttext .result5').css('color','#000000');
    })
    $('.sec4 .part1 .resulttext .result5').click(function(){
        $('.sec4 .part3 .resultpcimage .result1pcimage').attr('src','./result5.png');
        $('.sec4 .part3 .resultmobileimage .result1mobileimage').attr('src','./result5m.png');
        $('.sec4 .part2 .mobile .mobileimage').css('transform','none');
        $('.sec4 .part2 .mobile .mobileimage').css('margin','360px 0 0 0');
        $('.sec4 .part3 .resultmobileimage .result1mobileimage').css('width','172px');
        $('.sec4 .part3 .resultmobileimage .result1mobileimage').css('height','285px');
        $('.sec4 .part3 .resultmobileimage .result1mobileimage').css('right','40.7%');
        $('.sec4 .part3 .resultmobileimage .result1mobileimage').css('margin','400px 0 0 0');
        $('.sec4 .part1 .resulttext .result5').css('color','#7e91cb');
        $('.sec4 .part1 .resulttext .result2').css('color','#000000');
        $('.sec4 .part1 .resulttext .result3').css('color','#000000');
        $('.sec4 .part1 .resulttext .result4').css('color','#000000');
        $('.sec4 .part1 .resulttext .result1').css('color','#000000');
    })
});