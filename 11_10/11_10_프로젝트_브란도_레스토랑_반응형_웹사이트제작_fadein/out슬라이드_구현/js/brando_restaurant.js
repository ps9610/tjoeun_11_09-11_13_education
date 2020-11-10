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
            
            var n = $(".slide").length-1; // 슬라이드 전체 갯수, 슬라이드 추가/삭제할때마다 변경하기 싫어서, index번호는 0부터 시작하니까 -1해주기
            var cnt = 0;
            
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

            function mainNextSlideFn(){
                // 현재 슬라이드 위에 다음 슬라이드가 올라옴
                // 덮으려면 opacity가 없던 상태에서 1인 상태가 되어야 함 [움직이는 대상] = cnt
                $(".slide").css({zIndex:1}).stop().animate({opacity:1},0);
                $(".slide").eq(cnt).css({zIndex:2})
                $(".slide").eq(cnt).css({zIndex:3}).stop().animate({opacity:0},0).animate({opacity:1},600);
                // z-index:3에 있는 게 현재 슬라이드
                // 다음 슬라이드는 보이지 않는 opacity=0인 상태이지만, 현재 슬라이드 뒤에 존재함
                // 현재 슬라이드에서 opacity 1로
            }
            // 0
            // 4
            // 3
            // 2
            // 1

            function mainPrevSlideFn(){

            }
            function nextSlideFn(){
                cnt++;
                if(cnt>4){cnt=0};
                mainNextSlideFn();
            }
            function prevSlideFn(){
                cnt--;
                mainPrevSlideFn();
            }
            $("#section01").swipe({
                swipeLeft : function(){
                    nextSlideFn();
                },
                swipeRight : function(){
                    prevSlideFn();
                }
            })
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
            var fontSizeH3 = rateH3 * textW;
            var rateH3 = 0.096551724
            var textW = $(".text-wrap").width();
            var fontSizeH4 = rateH4 * textW;   
            var rateH4 = 0.037931034
            var fontSizeP = rateP * textW;     
            var rateP = 0.048275862 

            setTimeout(resizeFn,100);

            function resizeFn(){
                
                rl = (windowWidth-boxWidth)/2;
                windowWidth = $(window).width();
                windowHeight = $(window).height();
                section234Height = windowHeight;
                boxWidth = $(".content-wrap").width();
                boxHeight = boxWidth * 1.22222;

                if(windowHeight < boxHeight+60){
                    section234Height = boxHeight+60;
                    boxTop = 30;
                }
                else{
                    section234Height = windowHeight;
                    boxTop = (windowHeight-boxHeight)/2;
                }
                
                textW = $(".text-wrap").width();
                fontSizeH3 = rateH3 * textW;
                fontSizeH4 = rateH4 * textW;  
                fontSizeP = rateP * textW;    

                $('.text-wrap h3').css({ fontSize:fontSizeH3 });
                $('.text-wrap h4').css({ fontSize:fontSizeH4 });
                $('.text-wrap p').css({ fontSize:fontSizeP });

                $(".content-wrap").css({ top:boxTop, height:boxHeight });
                $(".section234").css({ height:section234Height });
            
                if( windowWidth <= 1170 ){
                    $("#section02 .content-wrap, #section04 .content-wrap").stop().animate({ right:rl-15 },300);
                    $("#section03 .content-wrap").stop().animate({ left:rl-15 },300);  
                }
                else{
                    $("#section02 .content-wrap, #section04 .content-wrap").stop().animate({ right:0 },100);
                    $("#section03 .content-wrap").stop().animate({ left:0 },100);
                }
            };
            
            $(window).resize(function(){
                resizeFn();
            });


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