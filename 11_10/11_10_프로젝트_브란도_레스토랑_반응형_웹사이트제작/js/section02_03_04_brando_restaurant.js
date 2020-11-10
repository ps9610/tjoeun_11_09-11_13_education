;(function(window,document,$,undefined){ //항상 밑에서 위로 보기(업데이트 항목은 위로 써줌)

    var brando = {
        init:           function(){ 
            var that = this;
                that.headerFn();
                that.section01Fn();
                that.section234Fn();
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
        },
        headerFn:       function(){

            var url = null;

            $(".smooth-btn").on({ 
                click : function(event){ 
                    event.preventDefault();
                    url = $(this).attr("href"); 
                   $("html,body").stop().animate({ scrollTop: $( url ).offset().top },800) 
                                            
                   $(".mobile-menu").hide();
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
                    $(".mobile-btn").removeClass("addClose");
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
        },
        section01Fn:    function(){

            var winH = 969;
            var imgH = $(".hungry").height();
            var imgTop = (winH-imgH)/2;
    
            setTimeout(resizeFn,100);
            function resizeFn(){                
                winH = $(window).height();
                imgH = $(".hungry").height();
                imgTop = (winH-imgH)/2;
                $("#section01").css({ height:winH });
                $(".hungry").css({ top:imgTop });
            }
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

            // 1. 화면 줄어들면 박스 위/아래 여백 똑같이 남게 설정하기
            //  ㄴ> 화면 줄어들고 늘어날 때 창 값 = 변수 winH = $(window).height();
            //  ㄴ> 화면에 따라 줄어들고 늘어나는 여백값 = 
            //      ㄴ> css에서 top값으로 위/아래 여백 잡아준거 사용
            //      ㄴ> (창 값 - 박스(전체)높이 값) / 2 = = winH-boxT/2;
            //                  ㄴ> 변수 boxH = $(".content-box").css({height});
            //      ㄴ> 변수 boxT = winH-boxH/2;
            // ㄴ> 화면 늘어나고 줄어드는 resize 함수 생성하기 $(window).resize(function(){});
            // ㄴ> funtion resizeFn(){};이라는 함수 안에 위의 모든 내용 넣고 resize함수에 넣기
            // ㄴ> 변수 먼저 모아주고 함수,조건문끼리 모아주고 DOM구조끼리 모아주기
            // = 너비말고 높이를 줄이면 박스 위,아래 여백 같이 줄어들음

            // 2. 근데 줄어들다가 점점 박스가 아래 섹션으로 내려옴
            //  ㄴ> 여백을 똑같이 줄어들게 설정했는데 박스가 내려오는 이유:
            //      ㄴ> 여백이 줄면서 창의 높이 값은 줄어드는데 박스의 높이는 줄어들지 않기 때문
            //  ㄴ> 그러니까 2번에선 박스 높이를 창에 맞춰서 줄어들고 늘어나게 조절하면 됨
            //  ㄴ> = 창이 줄어들다가 박스 높이가 창 높이랑 같아지고 나서 박스 높이랑 창 높이랑 같이 줄어들어야 됨
            //  ㄴ> = 창이 늘어나면 원래대로 돌아가야 함 = 박스의 top값 만큼 위 아래 여백을 가져야 함
            //  ㄴ> 조건문으로 써보기
            //      ㄴ> if(창 높이 값 < 박스 높이값){
            //              창 높이 값 = 박스 높이값
            //                          ㄴ> 이미 정한 변수 boxH 사용
            //          }
            //          else{
            //              창 높이 값 = (창 높이 값 -박스 높이 값)/2;
            //              ㄴ> section의 높이 값
            //                      ㄴ> 변수 설정 var section234H = $(".section02, .section03, .section04").height();
            //                      ㄴ> 이때 section01:funtion에서 설정해준 $("#section01, #section02, #section03, #section04").css({ height:winH });를 수정해야함
            //                          = section2, 3, 4는 지우기 
            //👍
            //                     (ㄴ> 여기서 필요한 변수는 section234H, winH, boxH 3개인데 위의 설정에선 높이가 winH(윈도우 창높이)로 지정되어 있어서 
            //                          section234H = winH이 되기 때문에 변수 설정이 무의미해짐)
            //                          -> 조건문 걸어서 박스 높이냐, 창 높이냐로 정해줄거임
            //          }
            //  3. 화면을 어느 정도 줄여주면 박스가 가운데로 오게 설정해줌
            //  ㄴ> css의 position, right:0 준거 생각해서 animate 이용하여 스르륵 움직이게 할 예정
            //  ㄴ> 만약 창 넓이가 1170보다 작거나 같다면, 박스를 (창 넓이에서 박스 넓이를 뺀 값을 2로 나눈 값)만큼 움직이게 한다.
            //                                                  ㄴ> 박스 옆 쪽 공간 크기를 변수로 정해서 움직이게 하려고
            //  👍             👇 박스 전체 넓이가 1170px이라서 1170으로 정해준것
            //  ㄴ> if(윈도우 창 넓이 <= 1170){
            //  ㄴ> $(".content-wrap").stop().animate({ (윈도우 창 넓이 - 박스 넓이) / 2 - 오른쪽에 있는 마진값 15 })
            //  ㄴ> 변수 윈도우 창 넓이 설정 -> var winW = $(window).width();
            //  ㄴ> 변수 (윈도우 창 넓이 - 박스 넓이) / 2 -> var right = (winW - boxW) / 2;
            //                              ㄴ> var boxW = $(".content-wrap").width();
            //      }
            //  ㄴ> 그렇지 않으면 박스는 다시 원래의 위치로 빠르게 움직인다.
            //      else{
            //      $(".content-wrap").stop().animate({right:0})                
            //      }
            //  ㄴ> section03은 left로 바꿔줘야하니까 $(".content-wrap").stop().animate에 #section 넣어서 구분해주기
            //  4. 화면을 줄이다 보면 높이만 안 잡혀진채로 너비 줄고 가운데로 옴
            //  ㄴ> 너비가 줄여짐에 따라서 높이도 같은 비율로 줄어든다
            //  ㄴ> 너비와 높이의 비율을 구해서 상자 높이변수 boxH에 비율값을 넣어주고 
            //          ㄴ>너비 450일때 높이 550 = 1.22222%(약 122%)
            //          ㄴ>변수 boxH = $(".content-wrap").height(); = boxW*1.22222
            //  ㄴ> content-wrap height:boxH로 설정해준다.
            //  ㄴ> section02, 03, 04의 높이도 변수 section234H로 설정해준다

            var right = (winW-boxW)/2;
            var boxW = $(".content-wrap").width();
            var winW = $(window).width();
            var winH = $(window).height();
            //var boxH = $(".content-wrap").height();
            var boxH = boxW*1.22222;
            var boxT = (winH-boxH)/2;
            var section234H = winH;

            function resizeFn(){
                right = (winW-boxW)/2;
                boxW = $(".content-wrap").width();
                winW = $(window).width();
                winH = $(window).height();
                boxH = boxW*1.22222;
                boxT = (winH-boxH)/2;
                section234H = winH;

                if(winH < boxH){
                    section234H = boxH;
                    boxT = 0;
                }
                else{
                    section234H = winH;
                    boxT = (winH-boxH)/2;
                }
                if(winW <= 1170){
                    $("#section02 .content-wrap, #section04 .content-wrap").stop().animate({right:right-15},300);
                    $("#section03 .content-wrap").stop().animate({left:right-15},300);
                }
                else{
                    $("#section02 .content-wrap, #section04 .content-wrap").stop().animate({right:0},100);
                    $("#section03 .content-wrap").stop().animate({left:0},100);
                }
            };
            
            $(".content-wrap").css({top:boxT, height:boxH});
            $(".section234").css({height:section234H});
            $(window).resize(function(){
                resizeFn();
            });
        },
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