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

//박스 넓이가 바뀌면 height도 바뀌여야 함 이거 할거임
//박스 높이(고정되어있음) = 박스 너비 (450)* 높이의 비율 = 1.22222
// boxHeight = boxWidth * 1.22222
// boxWidth는 boxHeight 위 쪽으로 변수 써주기

//창 너비가 1170이하면 [조건문] 박스를 가운데 정렬하는 애니메이션 만들기
// right(또는 left) = (창너비-박스너비)/2
// 창 너비 변수 생성하기
// 그리고 right(또는 left) 변수 생성하기
            setTimeout(resizeFn,100);

            function resizeFn(){
                
                rl = (windowWidth-boxWidth)/2;
                windowWidth = $(window).width(); //1170
                windowHeight = $(window).height(); //969
                section234Height = windowHeight;
                boxWidth = $(".content-wrap").width(); //450
                boxHeight = boxWidth * 1.22222;
                // boxTop = (windowHeight-boxHeight)/2; //(969-550)/2 = 209.5

                if(windowHeight < boxHeight){
                    section234Height = boxHeight;
                    boxTop = 0;
                }
                else{
                    section234Height = windowHeight;
                    boxTop = (windowHeight-boxHeight)/2;
                }
            console.log( boxHeight );
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