// JavaScript Document

//banner
(function (d, D, v) {
    d.fn.responsiveSlides = function (h) {
        var b = d.extend({
                auto: !0,
                speed: 1E3,
                timeout: 100E3,
                pager: !1,
                nav: !1,
                random: !1,
                pause: !1,
                pauseControls: !1,
                prevText: "Previous",
                nextText: "Next",
                maxwidth: "",
                controls: "",
                namespace: "rslides",
                before: function () {
                },
                after: function () {
                }
            },
            h);
        return this.each(function () {
            v++;
            var e = d(this),
                n,
                p,
                i,
                k,
                l,
                m = 0,
                f = e.children(),
                w = f.size(),
                q = parseFloat(b.speed),
                x = parseFloat(b.timeout),
                r = parseFloat(b.maxwidth),
                c = b.namespace,
                g = c + v,
                y = c + "_nav " + g + "_nav",
                s = c + "_here",
                j = g + "_on",
                z = g + "_s",
                o = d("<ul class='" + c + "_tabs " + g + "_tabs' />"),
                A = {
                    "float": "left",
                    position: "relative"
                },
                E = {
                    "float": "none",
                    position: "absolute"
                },
                t = function (a) {
                    b.before();
                    f.stop().fadeOut(q,
                        function () {
                            d(this).removeClass(j).css(E)
                        }).eq(a).fadeIn(q,
                        function () {
                            d(this).addClass(j).css(A);
                            b.after();
                            m = a
                        })
                };
            b.random && (f.sort(function () {
                return Math.round(Math.random()) - 0.5
            }), e.empty().append(f));
            f.each(function (a) {
                this.id = z + a
            });
            e.addClass(c + " " + g);
            h && h.maxwidth && e.css("max-width", r);
            f.hide().eq(0).addClass(j).css(A).show();
            if (1 < f.size()) {
                if (x < q + 100) return;
                if (b.pager) {
                    var u = [];
                    f.each(function (a) {
                        a = a + 1;
                        u = u + ("<li><a href='#' class='" + z + a + "'>" + a + "</a></li>")
                    });
                    o.append(u);
                    l = o.find("a");
                    h.controls ? d(b.controls).append(o) : e.after(o);
                    n = function (a) {
                        l.closest("li").removeClass(s).eq(a).addClass(s)
                    }
                }
                b.auto && (p = function () {
                    k = setInterval(function () {
                            var a = m + 1 < w ? m + 1 : 0;
                            b.pager && n(a);
                            t(a)
                        },
                        x)
                },
                    p());
                i = function () {
                    if (b.auto) {
                        clearInterval(k);
                        p()
                    }
                };
                b.pause && e.hover(function () {
                        clearInterval(k)
                    },
                    function () {
                        i()
                    });
                b.pager && (l.bind("click",
                    function (a) {
                        a.preventDefault();
                        b.pauseControls || i();
                        a = l.index(this);
                        if (!(m === a || d("." + j + ":animated").length)) {
                            n(a);
                            t(a)
                        }
                    }).eq(0).closest("li").addClass(s), b.pauseControls && l.hover(function () {
                        clearInterval(k)
                    },
                    function () {
                        i()
                    }));
                if (b.nav) {
                    c = "<a href='#' class='" + y + " prev'>" + b.prevText + "</a><a href='#' class='" + y + " next'>" + b.nextText + "</a>";
                    h.controls ? d(b.controls).append(c) : e.after(c);
                    var c = d("." + g + "_nav"),
                        B = d("." + g + "_nav.prev");
                    c.bind("click",
                        function (a) {
                            a.preventDefault();
                            if (!d("." + j + ":animated").length) {
                                var c = f.index(d("." + j)),
                                    a = c - 1,
                                    c = c + 1 < w ? m + 1 : 0;
                                t(d(this)[0] === B[0] ? a : c);
                                b.pager && n(d(this)[0] === B[0] ? a : c);
                                b.pauseControls || i()
                            }
                        });
                    b.pauseControls && c.hover(function () {
                            clearInterval(k)
                        },
                        function () {
                            i()
                        })
                }
            }
            if ("undefined" === typeof document.body.style.maxWidth && h.maxwidth) {
                var C = function () {
                    e.css("width", "100%");
                    e.width() > r && e.css("width", r)
                };
                C();
                d(D).bind("resize",
                    function () {
                        C()
                    })
            }
        })
    }
})(jQuery, this, 0);

//不同终端调用不同参数
$(function () {

    var WHITH = $(window).width();

    if (WHITH > 768) {
        var swiper = new Swiper('.moviesPhoto', {
            nextButton: '.theMoves .mov-next',
            prevButton: '.theMoves .mov-prev',
            paginationClickable: true,
            spaceBetween: 20,
            slidesPerView: 5,
        });
        var swiper = new Swiper('.starphoto', {
            nextButton: '.starPeople .star-next',
            prevButton: '.starPeople .star-prev',
            paginationClickable: true,
            spaceBetween: 40,
            slidesPerView: 4,
        });
        var swiper = new Swiper('.peophoto', {
            nextButton: '.teamPhoto .team-next',
            prevButton: '.teamPhoto .team-prev',
            paginationClickable: true,
            spaceBetween: 0,
            slidesPerView: 5,
        });
        var swiper = new Swiper('.newList', {
            pagination: '.newFyq',
            paginationType: 'fraction',
            nextButton: '.right_list_cont .news-next',
            prevButton: '.right_list_cont .news-prev',
            paginationClickable: true,
            spaceBetween: 10,
            slidesPerView: 1,
            loop: true,
            speed: 1000,
        });
        var swiper = new Swiper('.smlHistory', {
            pagination: '.listHitst',
            paginationClickable: true,
            spaceBetween: 0,
            slidesPerView: 1,
            loop: true,
            speed: 1000,
        });
        var swiper = new Swiper('.theTeam', {
            pagination: '.teamList',
            nextButton: '.boxteam .tea-next',
            prevButton: '.boxteam .tea-prev',
            paginationClickable: true,
            spaceBetween: 0,
            slidesPerView: 1,
            speed: 800,
            effect: 'cube',
        });
    }
    else if (WHITH <= 768 && WHITH > 640) {
        var swiper = new Swiper('.moviesPhoto', {
            nextButton: '.theMoves .mov-next',
            prevButton: '.theMoves .mov-prev',
            slidesPerView: 2,
            spaceBetween: 10,
            loop: true,
        });
        var swiper = new Swiper('.starphoto', {
            nextButton: '.starPeople .star-next',
            prevButton: '.starPeople .star-prev',
            spaceBetween: 10,
            slidesPerView: 2,
            loop: true,
        });
        var swiper = new Swiper('.peophoto', {
            nextButton: '.teamPhoto .team-next',
            prevButton: '.teamPhoto .team-prev',
            spaceBetween: 0,
            slidesPerView: 2,
            loop: true,
        });
        var swiper = new Swiper('.newList', {
            pagination: '.newFyq',
            nextButton: '.right_list_cont .news-next',
            prevButton: '.right_list_cont .news-prev',
            spaceBetween: 5,
            slidesPerView: 1,
            loop: true,
            speed: 1000,
        });
        var swiper = new Swiper('.smlHistory', {
            pagination: '.listHitst',
            spaceBetween: 10,
            slidesPerView: 1,
            loop: true,
            speed: 1000,
        });
        var swiper = new Swiper('.theTeam', {
            pagination: '.teamList',
            nextButton: '.boxteam .tea-next',
            prevButton: '.boxteam .tea-prev',
            spaceBetween: 0,
            slidesPerView: 1,
            speed: 800,
            effect: 'cube',
        });
        var swiper = new Swiper('.contch', {
            spaceBetween: 0,
            slidesPerView: 1.5,
            speed: 800,
        });


    }
    else if (WHITH <= 640) {
        var swiper = new Swiper('.moviesPhoto', {
            nextButton: '.theMoves .mov-next',
            prevButton: '.theMoves .mov-prev',
            slidesPerView: 2,
            spaceBetween: 10,
            loop: true,
        });
        var swiper = new Swiper('.starphoto', {
            nextButton: '.starPeople .star-next',
            prevButton: '.starPeople .star-prev',
            spaceBetween: 10,
            slidesPerView: 2,
            loop: true,
        });
        var swiper = new Swiper('.peophoto', {
            nextButton: '.teamPhoto .team-next',
            prevButton: '.teamPhoto .team-prev',
            spaceBetween: 0,
            slidesPerView: 2,
            loop: true,
        });
        var swiper = new Swiper('.newList', {
            pagination: '.newFyq',
            nextButton: '.right_list_cont .news-next',
            prevButton: '.right_list_cont .news-prev',
            spaceBetween: 5,
            slidesPerView: 1,
            loop: true,
            speed: 1000,
        });
        var swiper = new Swiper('.smlHistory', {
            pagination: '.listHitst',
            spaceBetween: 10,
            slidesPerView: 1,
            loop: true,
            speed: 1000,
        });
        var swiper = new Swiper('.theTeam', {
            pagination: '.teamList',
            nextButton: '.boxteam .tea-next',
            prevButton: '.boxteam .tea-prev',
            spaceBetween: 0,
            slidesPerView: 1,
            speed: 800,
            effect: 'cube',
        });
        var swiper = new Swiper('.contch', {
            spaceBetween: 0,
            slidesPerView: 1.5,
            speed: 800,
        });
    }

});
//phoneNav


//number
$(function ($) {
    $.fn.XNumber = function (numbers, blue) {
        var Numbers = String(numbers);
        var Numlength = Numbers.length;
        var This = $(this);
        // 写入HTML
        if (This.html()) {
        } else {
            // 创建移动滑块
            var Num = ['NumGe', 'NumShi', 'NumBai', 'NumQian', 'NumWan'];//个十百千万
            // html 变量
            var Numbox = '', NumMax = '';
            for (var i = 0; i < 10; i++) {
                Numbox = Numbox + '<div class="Txt">' + i + '</div>';
            }
            for (var i = 0; i < Numlength; i++) {
                NumMax = NumMax + '<div class="' + Num[Numlength - 1 - i] + '">' + Numbox + '</div>';
            }
            This.append('<div class="NumContent">' + NumMax + '</div>');
        }
        //获取每个高
        $height = This.find('.Txt').height();
        //根据获取字符串长度 执行函数修改
        var numi = [];
        for (var i = 0; i < Numlength; i++) {
            numi[i] = Numbers.substring(i, i + 1);
        }
        //判断blue值
        if (blue === true) {
            for (var i = 0; i < Numlength; i++) {
                This.children('.NumContent').children().eq(i).css({'transform': 'translateY(' + -parseInt(numi[i]) * $height + 'px)'});
            }
        } else if (blue === false) {
            This.children('.NumContent').children().css({'transform': 'translateY(0px)'});
        } else {
            return false;
        }
    }
}(jQuery));
$(function () {
    $('.nub').eq(0).XNumber(2012, true);
    $('.nub').eq(1).XNumber(2014, true);
    $('.nub').eq(2).XNumber(2015, true);
    $('.nub').eq(3).XNumber(2016, true);
});
//二级获取屏幕宽高
$(function () {
    var WIT = $(window).width();
    var HIT = $(window).height();
    var CONT = $('.control');
    CONT.width(WIT).height(HIT);
    $('.nextscreenB>a').click(function () {
        $('html,body').animate({scrollTop: HIT}, 500);
    });
    $(window).resize(function () {
        var WIT = $(window).width();
        var HIT = $(window).height();
        var CONT = $('.control');
        CONT.width(WIT).height(HIT);
    });
});
//公司团队点击
$(function () {
    var _INDEX = $('.theTeam .swiper-slide');
    var _INDES = $('.sub-team-people ul li');
    var This;

    function ANIMATE() {
        _INDEX.eq(This.index()).addClass('swiper-slide-active').siblings().removeClass('swiper-slide-active');
        _INDES.eq(This.index()).addClass('on').siblings().removeClass('on');
    }

    _INDEX.click(function () {
        This = $(this);
        ANIMATE();
    })
    _INDES.click(function () {
        This = $(this);
        ANIMATE();
    });
});

function mySkillFunc() {
    var snBtnCon = $('#snBtnCon'), snBtnBg = $('#snBtnBg'), skillNav = $('#skillNav'), strName = $('#strName'),
        strNum = $('#strNum');
    var arrX = strName.val().split(','), arrY = strNum.val().split(','), arrTitle = '前端语言';
    skillShow(arrX, arrY, arrTitle);
    skillNav.find('span').width(parseInt($('#snBtn0').width()) + 50);
    snBtnCon.find('a').each(function (i) {
        $('#snBtn' + i).mouseover(function () {
            var theId = $(this).attr('id').substring(5);
            var cssLeft = $(this).position().left;
            snBtnCon.find('a').removeClass('focus');
            $(this).addClass('focus');
            snBtnBg.width($(this).width() + 50);
            snBtnBg.animate({'left': cssLeft}, 300);
            if (theId == 0) {
                strName.val('HTML4+CSS2,HTML5+CSS3,JQUERY,JAVASCRIPT,JQUERYMOBILE,ACTIONSCRIPT');
                strNum.val('95, 80, 90, 80, 70, 60');
            }
            else if (theId == 1) {
                strName.val('DREAMWEAVER,PHOTOSHOP,FLASH,POWERPOINT,ILLUSTRAOR,WEBSTORM');
                strNum.val('95,95,80,85,60,80');
            }
            else if (theId == 2) {
                strName.val('AFTEREFFECTS,AUDITION,MAYA,PREMIERE,PARTICLEILLUSION');
                strNum.val('85,75,60,70,75');
            }
            var arrX = strName.val().split(',');
            var arrY = strNum.val().split(',');
            var arrTitle = $(this).text();
            skillShow(arrX, arrY, arrTitle);
            return false;
        });
    });
}
































