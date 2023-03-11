$(function () {


    /////// 헤더 배너 ////////////
    const headerbanner = new Swiper(".headerbanner", {
        effect: "fade",
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });

    // 헤더 배너 끝////////////

    /////// 주요 슬라이드 /////////////
    const slide1 = new Swiper(".main-slide", {
        effect: "fade",
        speed: 1000,
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
    /////// 주요 슬라이드 끝/////////////


    // 레깅스, 브라탑, 세트 ,,, //////////
    var swiper = new Swiper(".bannerswiper", {
        slidesPerView: 2.2,
        spaceBetween: 10,
        freeMode: true,

    });
    // 레깅스, 브라탑, 세트 ,,, //////////



    $(window).scroll(function () {
        const curr = $(this).scrollTop(); /* 스크롤 했을 때 */
        const header = $('.header-inner');
        (curr > 0) ? header.addClass('fixed'): header.removeClass('fixed');

    })

    // 슬라이드 된 상태로 냅두기 위해
    $(window).trigger('scroll'); /* 강제실행 trigger */

    $('.group-gnb .btn-all').click(function (e) {
        e.preventDefault();



        $('.group-gnb').toggleClass('active');
        $('.all-area').stop().slideToggle();
    })




    // hamburger, close
    $('.header .btn-menu').click(function (e) {
        e.preventDefault();

        $('.side-nav').addClass('active');
        $('body').addClass('overflow');
        /* body 스크롤 안되게 */
    })
    // hamburger, close

    $('.side-nav .btn-close, .dimmed').click(function (e) {
        e.preventDefault();
        $('.side-nav').removeClass('active')
        $('body').removeClass('overflow')
    }) ////////////

    //
    $('.side-nav .category').click(function (e) {
        e.preventDefault();

        $(this).siblings('.sub').stop().slideToggle();
        $(this).toggleClass('active');
    }) ////////


    ////////////////////검색////////////////////////
    $('.btn-search').click(function (e) {
        e.preventDefault();

        $('.search-area').addClass('active');
    })

    $('.btn-before').click(function (e) {
        e.preventDefault();
        $('.search-area').removeClass('active');
    })

    ////////////////////검색////////////////////////


    // top-button
    function scrollup(){
        $('html, body').animate({scrollTop:0}, 'slow', function(){
            $('.gototop-box').fadeOut();
        });
    }
    function scrolldown(){
        $('html, body').animate({scrollTop:$(document).height()}, 'slow');
    }
    
    $(function(){
        var scroll_ing;
        var last = 0;
        var space = 5;
        $(window).scroll(function(event){
            scroll_ing = true;
        });
        setInterval(function() {
            if (scroll_ing) {
                scroll_ed();
                scroll_ing = false;
            }
        }, 250);
        function scroll_ed() {
            var st = $(this).scrollTop();
            if(Math.abs(last - st) <= space)
                return;
            if (st > last){	// 스크롤 down
                $('.gototop-box').fadeOut();
            } else {
                if(st + $(window).height() < $(document).height()){	// 스크롤 up
                    if( st == 0 ){
                        $('.gototop-box').fadeOut();
                    }
                    else {
                        $('.gototop-box').fadeIn();
                    }
                    
                }
            }
            last = st;
        }
    });


})

