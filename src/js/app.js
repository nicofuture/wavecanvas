var widthForMobileSection = '12',
    widthForMobileSectionExpanded = '64',
    fontSize = '25',
    fontSizeMobile = '15';

var $uno = $('#uno'),
    $dos = $('#dos'),
    $cuatro = $('#cuatro'),
    $tres = $('#tres'),
    $box = $('.box'),
    $section_expanded_portrait = widthForMobileSectionExpanded + "%",
    $section_portrait = widthForMobileSection + "%",
    $font_size = fontSize + "px",
    $font_size_mobile = fontSizeMobile + "px",
    animeSpeed = 1.2,
    browserIsSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor),
    transitionEnd = browserIsSafari ? 'webkitTransitionEnd' : 'transitionend';

function activate_elm_modification($el){

    TweenLite.to($el.find('.content'), animeSpeed, {
        scaleX: '1',
        scaleY: '1',
        opacity: '1'
    });
    TweenLite.to($el.find('.hover-text'), animeSpeed, {
        opacity: '0',
        fontSize: '1px'
    });
}

function animateBox($el) {
    var orientationPortrait = $(window).width() <= $(window).height(),
        orientationMobile = (orientationPortrait && $(window).width() <= 480) || (!orientationPortrait && $(window).width() <= 757);

    $box.removeClass('active inactive-side inactive-up-down');
    $box.not($el).addClass('small');

    $el.addClass('active');
    TweenLite.to($('.content:not(.content-uno)'), animeSpeed -0.3, {
        opacity: '0'
    });
    TweenLite.to($box.not('.active').find('.content:not(.content-uno)'), animeSpeed, {
        scaleX: '0.01',
        scaleY: '0.01'
    });
    TweenLite.to($box.not('.active').find('.hover-text'), animeSpeed, {
        opacity: '1',
        fontSize: orientationMobile ? $font_size_mobile : $font_size
    });
    TweenLite.to($box.not('.active').find('.content-uno'), animeSpeed, {
        scaleX: '1',
        scaleY: '1'
    });

    $box.find('.content-uno')[!$el.is('#uno') ? 'addClass' : 'removeClass']('content-uno-not-active');
    if(!orientationPortrait){
        if( $(window).width() > 1023) {
            if ($el.is('#uno')) {
                TweenLite.to($el, animeSpeed, {
                    height: '80%',
                    bottom: '20%',
                    right: '20%',
                    width: '80%'
                });
                TweenLite.to($dos, animeSpeed, {
                    height: '80%',
                    bottom: '20%',
                    left: '80%',
                    width: '20%'
                });
                TweenLite.to($cuatro, animeSpeed, {
                    height: '20%',
                    right: '20%',
                    top: '80%',
                    width: '80%'
                });
                TweenLite.to($tres, animeSpeed, {
                    height: '20%',
                    left: '80%',
                    top: '80%',
                    width: '20%'
                });
                activate_elm_modification($el);
            } else if ($el.is('#dos')) {
                TweenLite.to($el, animeSpeed, {
                    height: '80%',
                    bottom: '20%',
                    left: '20%',
                    width: '80%'
                });
                TweenLite.to($uno, animeSpeed, {
                    height: '80%',
                    bottom: '20%',
                    right: '80%',
                    width: '20%'
                });
                TweenLite.to($cuatro, animeSpeed, {
                    height: '20%',
                    right: '80%',
                    top: '80%',
                    width: '20%'
                });
                TweenLite.to($tres, animeSpeed, {
                    height: '20%',
                    left: '20%',
                    top: '80%',
                    width: '80%'
                });
                activate_elm_modification($el);
            } else if ($el.is('#cuatro')) {
                TweenLite.to($el, animeSpeed, {
                    height: '80%',
                    right: '20%',
                    top: '20%',
                    width: '80%'
                });
                TweenLite.to($uno, animeSpeed, {
                    height: '20%',
                    bottom: '80%',
                    right: '20%',
                    width: '80%'
                });
                TweenLite.to($dos, animeSpeed, {
                    height: '20%',
                    left: '80%',
                    bottom: '80%',
                    width: '20%'
                });
                TweenLite.to($tres, animeSpeed, {
                    height: '80%',
                    top: '20%',
                    left: '80%',
                    width: '20%'
                });
                activate_elm_modification($el);
            } else if ($el.is('#tres')) {
                TweenLite.to($el, animeSpeed, {
                    height: '80%',
                    left: '20%',
                    top: '20%',
                    width: '80%'
                });
                TweenLite.to($uno, animeSpeed, {
                    height: '20%',
                    bottom: '80%',
                    right: '80%',
                    width: '20%'
                });
                TweenLite.to($dos, animeSpeed, {
                    height: '20%',
                    left: '20%',
                    bottom: '80%',
                    width: '80%'
                });
                TweenLite.to($cuatro, animeSpeed, {
                    height: '80%',
                    top: '20%',
                    right: '80%',
                    width: '20%'
                });
                activate_elm_modification($el);
            }
        }

    }else{
        if ($el.is('#uno')) {
            TweenLite.to($el, animeSpeed, {
                height: $section_expanded_portrait
            });
            TweenLite.to($dos, animeSpeed, {
                height: $section_portrait
            });
            TweenLite.to($cuatro, animeSpeed, {
                height: $section_portrait
            });
            TweenLite.to($tres, animeSpeed, {
                height: $section_portrait
            });
            activate_elm_modification($el);
        } else if ($el.is('#dos')) {
            TweenLite.to($el, animeSpeed, {
                height: $section_expanded_portrait
            });
            TweenLite.to($uno, animeSpeed, {
                height: $section_portrait
            });
            TweenLite.to($cuatro, animeSpeed, {
                height: $section_portrait
            });
            TweenLite.to($tres, animeSpeed, {
                height: $section_portrait
            });
            activate_elm_modification($el);
        } else if ($el.is('#cuatro')) {
            TweenLite.to($el, animeSpeed, {
                height: $section_expanded_portrait
            });
            TweenLite.to($uno, animeSpeed, {
                height: $section_portrait
            });
            TweenLite.to($dos, animeSpeed, {
                height: $section_portrait
            });
            TweenLite.to($tres, animeSpeed, {
                height: $section_portrait
            });
            activate_elm_modification($el);
        } else if ($el.is('#tres')) {
            TweenLite.to($el, animeSpeed, {
                height: $section_expanded_portrait
            });
            TweenLite.to($uno, animeSpeed, {
                height: $section_portrait
            });
            TweenLite.to($dos, animeSpeed, {
                height: $section_portrait
            });
            TweenLite.to($cuatro, animeSpeed, {
                height: $section_portrait
            });
            activate_elm_modification($el);
        }

    }

}

function onResizeEvent(){
    var elemActiveId;
    var orientationPortrait = $(window).width() <= $(window).height();

    if( !orientationPortrait){
        if( $(window).width() <= 1023){
            $box.css("display", "none");
            $(".active").css("display", "block");
            $(".active").css("width", "100%");
            $(".active").css("height", "100%");
            $(".active").css("left", "0");
            $(".active").css("top", "0");
            $(".active").css("right", "0");
        } else{
            $box.css("display", "block");
            elemActiveId = $(".active").eq(0).attr('id');
            switch(elemActiveId){
                case 'uno':case 'dos':
                    $uno.css("height", "80%");
                    $dos.css("height", "80%");
                    $tres.css("height", "20%");
                    $cuatro.css("height", "20%");
                    $tres.css("top", "80%");
                    $cuatro.css("top", "80%");
                break;
                case 'tres':case 'cuatro':
                    $uno.css("height", "20%");
                    $dos.css("height", "20%");
                    $tres.css("height", "80%");
                    $cuatro.css("height", "80%");
                    $tres.css("top", "20%");
                    $cuatro.css("top", "20%");
                break;
            }
            switch(elemActiveId){
                case 'uno':case 'cuatro':
                    $uno.css("right", "20%");
                    $dos.css("left", "80%");
                    $tres.css("left", "80%");
                    $cuatro.css("right", "20%");

                    $uno.css("width", "80%");
                    $dos.css("width", "20%");
                    $tres.css("width", "20%");
                    $cuatro.css("width", "80%");
                break;
                case 'dos':case 'tres':
                    $uno.css("right", "80%");
                    $dos.css("left", "20%");
                    $tres.css("left", "20%");
                    $cuatro.css("right", "80%");

                    $uno.css("width", "20%");
                    $dos.css("width", "80%");
                    $tres.css("width", "80%");
                    $cuatro.css("width", "20%");
                break;
            }
        }
    } else {
        $box.css("display", "block");
        elemActiveId = $(".active").eq(0).attr('id');
        $box.css("height", widthForMobileSection + "%");
        $box.css("left", "0");
        $box.css("top", "0");
        $box.css("width", "100%");
        $("#" + elemActiveId).css("height", widthForMobileSectionExpanded + "%");
    }

}

$box.on('mouseover', function(e) {
    var $this_ = $(this);

    if(!$this_.hasClass('active')) {
        animateBox($this_);

        e.stopPropagation();
        e.stopImmediatePropagation();

    }

});

window.onresize = function(event) {
    onResizeEvent();
};
