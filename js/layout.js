
$(document).ready(function () {
    $(window).width() <= 1120 && $(".wrapper").removeClass("affix"),
        $(window).resize(function () {
            $(window).width() <= 1120 && $(".wrapper").removeClass("affix");
        }),
        1121 <= $(window).width() && (480 < $(window).scrollTop() ? $(".wrapper").addClass("affix") : $(".wrapper").removeClass("affix")),
        $(window).scroll(function () {
            1121 <= $(window).width() && (480 < $(window).scrollTop() ? $(".wrapper").addClass("affix") : $(".wrapper").removeClass("affix"));
        }),
        $(".sc-btn").on("mouseover", function () {
            $(this).siblings(".sc-btn").addClass("off");
        }),
        $(".sc-btn").on("mouseout", function () {
            $(".sc-btn").removeClass("off");
        }),
        $(".slot-toggle").on("click", function () {
            $(this).addClass("active"),
                $(this).siblings("button").removeClass("active"),
                $(".slot-section").addClass("active"),
                $(".casino-section").removeClass("active"),
                $(".sc-card").removeClass("is-flipped"),
                1180 <= $(window).width()
                    ? $("html, body").animate(
                          {
                              scrollTop: $(".page-content").offset().top - 87,
                          },
                          500
                      )
                    : $("html, body").animate(
                          {
                              scrollTop: $(".page-content").offset().top - 97,
                          },
                          500
                      );
        }),
        $(".casino-toggle").on("click", function () {
            $(this).addClass("active"),
                $(this).siblings("button").removeClass("active"),
                $(".casino-section").addClass("active"),
                $(".slot-section").removeClass("active"),
                $(".sc-card").addClass("is-flipped"),
                501 <= $(window).width()
                ? $("html, body").animate(
                        {
                            scrollTop: $(".page-content").offset().top - 87,
                        },
                        500
                    )
                : $("html, body").animate(
                        {
                            scrollTop: $(".page-content").offset().top - 97,
                        },
                        500
                    );
        });
    var e = 0;
    $(".casino-section .sc-btn").each(function () {
        $(this).css("animation-delay", e + "s"), (e += 0.1);
    });
    var t = 0;
    $(".slot-section .sc-btn").each(function () {
        $(this).css("animation-delay", t + "s"), (t += 0.1);
    }),
    $(window).scroll(function () {
        100 < $(this).scrollTop() ? $(".scroll-top").fadeIn() : $(".scroll-top").fadeOut();
      
        if ($(window).width() < 1280) {
            if ($(this).scrollTop() > 100) {
                $('.new-logo').css('width', '145px');
            } else {
                $('.new-logo').css('width', '160px');
            }
        } else {
            if ($(this).scrollTop() > 100) {
                $('.new-logo').css('width', '210px');
            } else {
                $('.new-logo').css('width', '240');
            }
        }
    }),
    $(".scroll-top").on("click", function () {
        return (
            $("html, body").animate(
                {
                    scrollTop: 0,
                },
                600
            ),
            !1
        );
    }),
    $(".scroll-top").on("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
    $('.showbefore-login').click(function() {
        var _this = $(this);

        var _mobile = _this.parent().parent().find('.bal-container');
        _mobile.addClass('show');
        $('.sidenav').removeClass('active');
        $('.overlay').show();
    });
    $('.showSideNav').click(function() {
        var _this = $(this);
        $('.overlay').show();
        $('.sidenav').addClass('active');
        $('.bal-container').removeClass('show');
    });

    $('html body').on('click', '.overlay', function() {
        $(this).hide();
        $('.sidenav').removeClass('active');
        $('.bal-container').removeClass('show');
    });

    $(window).resize(function() {
        var _sidenav = $('.sidenav');
        var _overlay = $('.overlay');
        var _mobile = $('.bal-container');
        if ($(window).width() > 1280) {
            if (_sidenav.is(':visible') || _mobile.is(':visible') || _overlay.is(':visible')) {
                _sidenav.removeClass('active');
                _mobile.removeClass('show');
                _overlay.remove();
                _sidenav.remove();
                //_mobile.hide();
            }
        } else {
            // if (!_sidenav.length) {
            //     ui.sidenav();
            // }
            // if (!_overlay.length) {
            //     ui.overlay();
            // }
            // if (_mobile.is(':hidden')) {
            //     _mobile.show();
            // }
        }
    });
   
    if ($(window).width() < 1280) {
        // ui.sidenav();
        // ui.overlay();
    } else {
        $('.sidenav').remove();
        $('.overlay').remove();
    }

    $('html body').on('click', 'button.login-btn', function (e) {
        e.preventDefault();
        $('.before-login').removeClass('active');
        document.location.href = 'home.html';
    });
    $('html body').on('click', 'button.login-link', function (e) {
        e.preventDefault();
        document.location.href = 'login.html';
    });
    $('html body').on('click', '.action.logout', function (e) {
        e.preventDefault();
        document.location.href = 'index.html';
    });
    $('html body').on('click', '.user-avatar', function (e) {
        e.preventDefault();
        document.location.href = 'mypage.html';
    });
    $('html body').on('click', 'button.join-link', function (e) {
        e.preventDefault();
        document.location.href = 'join.html';
    });
    $('html body').on('click', 'button.login-link', function (e) {
        e.preventDefault();
        document.location.href = 'login.html';
    });
});
