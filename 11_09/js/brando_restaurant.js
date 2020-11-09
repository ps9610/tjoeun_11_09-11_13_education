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
            
            var cnt = -1;

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
                $(".slide").css({ zIndex:1 }).stop().animate({ opacity:1 },0); //3장의 슬라이드가 opacity 1로 겹쳐져서 준비되어있음
                $(".slide").eq( cnt ).css({ zIndex:3 }).stop().animate({ opacity:0 },1000); //가장 먼저 1번 슬라이드가 zIndex 3번으로 제일 먼저 보이고, opacity가 0으로 변하면서 2번 슬라이드가 보임
                 console.log(cnt);
                $(".slide").eq( cnt==2? 0:cnt+1 ).css({ zIndex:2 }).stop().animate({ opacity:1 },0); //1번 슬라이드가 opacity 0이 되어갈 때 2번 슬라이드는 opacity 1이기 때문에 점점 보여짐
                // cnt가 마지막이면(슬라이드2번), 첫번째 슬라이드로 변경
                 console.log( cnt+1 ); //-> 연산이 앞에서 안 먹어서 뒤에서 계산하게끔 조건문을 바꿔줌
                // cnt = (앞) 1 : 2 (뒤)
                // cnt = (앞) 2 : 0 (뒤)
                // cnt = (앞) 0 : 1 (뒤)
                // cnt = (앞) 1 : 2 (뒤)
            }
            function mainPrevSlideFn(){
                $(".slide").css({ zIndex:1 }).stop().animate({ opacity:1 },0); //3장의 슬라이드가 opacity 1로 겹쳐져서 준비되어있음
                $(".slide").eq( cnt ).css({ zIndex:2 }).stop().animate({ opacity:1 },0); //1번 슬라이드가 opacity 0이 되어갈 때 2번 슬라이드는 opacity 1이기 때문에 점점 보여짐
                console.log( cnt==-1? 0:cnt );
                // cnt가 마지막이면(슬라이드2번), 첫번째 슬라이드로 변경
                $(".slide").eq( cnt-1 ).css({ zIndex:3 }).stop().animate({ opacity:0 },1000); //가장 먼저 1번 슬라이드가 zIndex 3번으로 제일 먼저 보이고, opacity가 0으로 변하면서 2번 슬라이드가 보임
                 console.log(cnt);
                // cnt = (앞) 0 : 2 (뒤)
                // cnt = (앞) 2 : 1 (뒤)
                // cnt = (앞) 1 : 0 (뒤)
                // cnt = (앞) 2 : 1 (뒤)
            }
            function countNextFn(){
                cnt++;
                if(cnt>2){cnt=0};
                mainNextSlideFn();
            }
            function countPrevFn(){
                cnt--;
                if(cnt<0){cnt=2};
                mainPrevSlideFn();
            }
            setInterval(countPrevFn, 3000)
        },
        // .slide-wrap .slide {z-index:1;position:absolute;top:0;left:0;width:100%;height:100%;}
        // .slide-wrap .slide0 {z-index:3;opacity:0;} 눈에 보이는 슬라이드 z-index:3;
        // .slide-wrap .slide1 {z-index:2;}
        
        // [ 페이드 인/아웃 슬라이드 ]
        //1. 메인 슬라이드 함수 : function mainSlideFn(){}
        //2. 카운트 해주는 함수 : function countNextFn(){}
        //                      function countPrevFn(){}

        section234Fn:    function(){
         
            var rl = (windowWidth-boxWidth)/2;
            var windowWidth = $(window).width(); //1170
            var windowHeight = $(window).height(); //969
            var section234Height = windowHeight; 
            var boxTop = (windowHeight-boxHeight)/2; //(969-550)/2 = 209.5
            var boxWidth = $(".content-wrap").width(); //450
            var boxHeight = boxWidth * 1.22222;
            //            = $(".content-wrap").height(); //550
            var fontSizeH3 = rateH3 * textW;   //비율(rateH3)  * 텍스트박스 내부 넓이(textW)
            var rateH3 = 0.096551724
            var textW = $(".text-wrap").width();
            var fontSizeH4 = rateH4 * textW;    //비율(rateH4)  * 텍스트박스 내부 넓이(textW)
            var rateH4 = 0.037931034
            var fontSizeP = rateP * textW;      //비율(rateP)  * 텍스트박스 내부 넓이(textW)
            var rateP = 0.048275862 

            setTimeout(resizeFn,100);

            function resizeFn(){
                
                rl = (windowWidth-boxWidth)/2;
                //창너비에 따라서 left, right 위치 가운데 정렬 계산
                windowWidth = $(window).width(); //1170
                //창높이 기준으로 섹션높이 변경
                windowHeight = $(window).height(); //969
                //창너비가 섹션높이
                section234Height = windowHeight;
                //박스너비에 따라서 비율로 높이 변경
                boxWidth = $(".content-wrap").width(); //450
                //박스높이
                boxHeight = boxWidth * 1.22222;
                // boxTop = (windowHeight-boxHeight)/2; //(969-550)/2 = 209.5

                if(windowHeight < boxHeight+60){
                    section234Height = boxHeight+60;
                    boxTop = 30;
                }
                else{
                    section234Height = windowHeight;
                    boxTop = (windowHeight-boxHeight)/2;
                }
                //폰트 사이즈 반응형
                textW = $(".text-wrap").width();
                fontSizeH3 = rateH3 * textW;
                fontSizeH4 = rateH4 * textW;  
                fontSizeP = rateP * textW;    

                $('.text-wrap h3').css({ fontSize:fontSizeH3 });
                $('.text-wrap h4').css({ fontSize:fontSizeH4 });
                $('.text-wrap p').css({ fontSize:fontSizeP });

                
            //console.log( boxHeight );
            $(".content-wrap").css({ top:boxTop, height:boxHeight }); //박스 탑, 박스 높이
            $(".section234").css({ height:section234Height }); //섹션 높이
            
                if( windowWidth <= 1170 ){
                    $("#section02 .content-wrap, #section04 .content-wrap").stop().animate({ right:rl-15 },300);
                    $("#section03 .content-wrap").stop().animate({ left:rl-15 },300); // left, right 각각 마진 안 맞아서 삭제->미디어 쿼리에서 조정할거임
                }
                else{
                    $("#section02 .content-wrap, #section04 .content-wrap").stop().animate({ right:0 },100);
                    $("#section03 .content-wrap").stop().animate({ left:0 },100);
                }
            };
            //font-size = 비율 * 텍스트박스 너비 (텍스트박스가 작아진 만큼 비율을 곱하면 됨)
            // image, font-size는 전체박스의 비율이든 텍스트박스 너비 비율이든 상관없음
            // 근데 패딩, 마진은 부모요소 반드시 고려
            //.text-wrap > h3 {font-size:28px; 9.655172%  [0.096551724] = 변수 fontSizeH3 }
            //.text-wrap > h4 {font-size:11px; 3.793103%  [0.037931034] = 변수 fontSizeH4 }
            //.text-wrap > p  {font-size:14px; 4.827586%  [0.048275862] = 변수 fontSizeP }

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