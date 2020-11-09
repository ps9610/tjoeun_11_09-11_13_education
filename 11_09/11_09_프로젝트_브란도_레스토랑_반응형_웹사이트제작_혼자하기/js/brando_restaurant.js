;(function(window,document,$,undefined){ //항상 밑에서 위로 보기(업데이트 항목은 위로 써줌)

    var brando = {
        init:           function(){ 
            var that=this;
                that.headerFn();
                that.section01Fn();
                that.section234Fn();
                /* 
                that.section234Fn(); 
                 =  that.section02Fn();
                    that.section03Fn();
                    that.section04Fn();
                */
                that.section05Fn();
                that.section06Fn();
                that.section07Fn();
                that.section08Fn();
                that.section09Fn();
                that.section10Fn();
                that.section11Fn();
                that.section12Fn();
                that.section13Fn();
                that.section14Fn();
                that.footerFn();
        },//브란도에서 최초 실행될 js

        headerFn:       function(){
            var url = null; 
            $(".smooth-btn").on({ 
                click : function(event){ 
                    event.preventDefault();
                    url = $(this).attr("href");
                   $("html,body").stop().animate({ scrollTop: $( url ).offset().top },800) 
                   $(".mobile-btn").removeClass("addClose");
                }
            });

            //scrolling
            $(window).scroll(function(){
                if( $(window).scrollTop()>=30 ){
                    $("#header").addClass("addMobile")
                    $(".goTop").addClass("addGotop")
                }
                else{
                    $("#header").removeClass("addMobile")
                    $(".goTop").removeClass("addGotop")
                }
            });

            //resize
            var winW = 0;

            $(window).resize(function(){
                winW = $(window).width();
                if( winW>990 ){
                    $(".mobile-menu").stop().slideUp(0);
                }
            });

            //btn-click
            $(".mobile-btn").on({
                click : function(event){
                    event.preventDefault();
                    $(this).toggleClass("addClose");
                    $(".mobile-menu").stop().slideToggle(300);
                }
            });


        },//헤더의 js

        section01Fn:    function(){

            var winH = 969;
            var imgH = $(".hungry").height();
            var imgTop = (winH-imgH)/2;
    
            setTimeout(resizeFn,100);
            function resizeFn(){                
                winH = $(window).height();
                $("#section01").css({ height:winH });
                
                imgH = $(".hungry").height();
                imgTop = (winH-imgH)/2;
                $(".hungry").css({ top:imgTop });
            };

            //Smooth Scrolling Event
            $(".arrow-down-btn").on({
                click : function(){
                    $("html,body").stop().animate({ scrollTop : $("#section02").offset().top},700);
                }
            });

            $(window).resize(function(){
                resizeFn();
            });
        },
        section234Fn:    function(){
         
            var rl = (windowWidth-boxWidth)/2;
            var windowWidth = $(window).width(); //1170
            var windowHeight = $(window).height(); //969
            var section234Height = windowHeight; 
            var boxTop = (windowHeight-boxHeight)/2; //(969-550)/2 = 209.5
            var boxWidth = $(".content-wrap").width(); //450
            var boxHeight = boxWidth * 1.22222;
            //            = $(".content-wrap").height(); //550
            
            // 폰트사이즈 =  폰트를 감싸고 있는 텍스트 박스 넓이 * 폰트크기비율
            // h3 {font-size:28px;} 0.096551724[폰트크기비율(rateH3)]
            // h4 {font-size:11px;} 0.037931034[폰트크기비율(rateH3)]
            // p  {font-size:14px;} 0.048275862[폰트크기비율(rateP)]

            var textBox = $(".text-wrap").width();

            var rateH3 = 0.096551724;
            var rateH4 = 0.037931034;
            var rateP = 0.048275862;

            var fontSizeH3 = textBox * rateH3;
            var fontSizeH4 = textBox * rateH4;
            var fontSizeP = textBox * rateP;


            setTimeout(resizeFn,100);

            function resizeFn(){
                
                textBox = $(".text-wrap").width();
                rateH3 = 0.096551724;
                rateH4 = 0.037931034;
                rateP = 0.048275862;
                fontSizeH3 = textBox * rateH3;
                fontSizeH4 = textBox * rateH4;
                fontSizeP = textBox * rateP;

                rl = (windowWidth-boxWidth)/2;
                windowWidth = $(window).width(); //1170
                windowHeight = $(window).height(); //969
                section234Height = windowHeight;
                boxWidth = $(".content-wrap").width(); //450
                boxHeight = boxWidth * 1.22222;
                // boxTop = (windowHeight-boxHeight)/2; //(969-550)/2 = 209.5

                if(windowHeight < boxHeight+60){
                    section234Height = boxHeight+60;
                    boxTop = 0+30;
                }
                else{
                    section234Height = windowHeight;
                    boxTop = (windowHeight-boxHeight)/2;
                }
                
            $(".content-wrap").css({ top:boxTop, height:boxHeight });
            $(".section234").css({ height:section234Height });
            
                if( windowWidth <= 1170 ){
                    $("#section02 .content-wrap, #section04 .content-wrap").stop().animate({ right:rl-15 },300);
                    // $("#section02 .content-wrap, #section04 .content-wrap").css({ right:rl-15 }) : 애니메이션 하기 전
                    // $("#section02 .content-wrap, #section04 .content-wrap").css({ right:rl-15 = 마진값 빼줘야 한쪽으로 안 치우치고 중앙에 옴});
                    $("#section03 .content-wrap").stop().animate({ left:rl-15 },300);
                }
                else{
                    $("#section02 .content-wrap, #section04 .content-wrap").stop().animate({ right:0 },100);
                    $("#section03 .content-wrap").stop().animate({ left:0 },100);
                }

                $(".text-wrap h3").css({ fontSize : fontSizeH3 })
                $(".text-wrap h4").css({ fontSize : fontSizeH4 })
                $(".text-wrap p").css({ fontSize : fontSizeP })
            };

            $(window).resize(function(){
                resizeFn();
            })
        },
/*        section234Fn:    function(){} =
                section02Fn:function(){},
                section03Fn:function(){},
                section04Fn:function(){},
*/
        section05Fn:    function(){
            
        },
        section06Fn:    function(){
            
        },
        section07Fn:    function(){
            
        },
        section08Fn:    function(){
            
        },
        section09Fn:    function(){
            
        },
        section10Fn:    function(){
            
        },
        section11Fn:    function(){
            
        },
        section12Fn:    function(){
            
        },
        section13Fn:    function(){
            
        },
        section14Fn:    function(){
            
        },
        footerFn:         function(){
            
        }
    }; 

//위에서 함수를 만들고 밑에서 함수를 실행한다.
    brando.init();

})(window,document,jQuery);