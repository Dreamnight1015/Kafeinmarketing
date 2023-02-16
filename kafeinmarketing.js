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
    $(document).ready(function () {
        setFlowBanner();  
    })
    
    function setFlowBanner(){
        const $wrap = $('.flow_banner');
        const $list = $('.flow_banner .list');
        let wrapWidth = ''; //$wrap의 가로 크기
        let listWidth = ''; //$list의 가로 크기
        const speed = 92; //1초에 몇픽셀 이동하는지 설정
    
        //리스트 복제
        let $clone = $list.clone();
        $wrap.append($clone);
        flowBannerAct()
    
        //반응형 :: 디바이스가 변경 될 때마다 배너 롤링 초기화
        let oldWChk = window.innerWidth > 1279 ? 'pc' : window.innerWidth > 767 ? 'ta' : 'mo';
        $(window).on('resize', function() {
            let newWChk = window.innerWidth > 1279 ? 'pc' : window.innerWidth > 767 ? 'ta' : 'mo';
            if (newWChk != oldWChk) {
                oldWChk = newWChk;
                flowBannerAct();
            }
        });
    
        //배너 실행 함수
        function flowBannerAct() {
            //배너 롤링 초기화
            if(wrapWidth != ''){
                $wrap.find('.list').css({ 'animation': 'none' });
                $wrap.find('.list').slice(2).remove();
            }
            wrapWidth = $wrap.width();
            listWidth = $list.width();
    
            //무한 반복을 위해 리스트를 복제 후 배너에 추가
            if (listWidth < wrapWidth) {
                const listCount = Math.ceil(wrapWidth * 2 / listWidth);
                for (let i = 2; i < listCount; i++) {
                    $clone = $clone.clone();
                    $wrap.append($clone);
                }
            }
            $wrap.find('.list').css({ 'animation': `${listWidth / speed}s linear infinite flowRolling` }); 
        } 
    }
    $(document).ready(function() {
        $('.flow_banner .list').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0,1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function(item) {
                    return item.el.attr('title') + '<small>이수안 대표 수상 이력</small>';
                }
            }
        });
    });
});