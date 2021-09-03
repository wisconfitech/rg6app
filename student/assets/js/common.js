//좌측 메뉴
function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// var prevScrollpos = window.pageYOffset;
// window.onscroll = function () {
//     var currentScrollPos = window.pageYOffset;
//     if (prevScrollpos > currentScrollPos) {
//         document.getElementById("navbar").style.top = "60px";
//     } else {
//         document.getElementById("navbar").style.top = "0px";
//     }
//     prevScrollpos = currentScrollPos;
// }

//스마트폰 하단 메뉴 애니메이션
var lastScrollTop = 0;
var delta = 5;
var fixBox = document.getElementById('mPubMenu');
var fixBoxHeight = fixBox.offsetHeight;
var didScroll;

window.onscroll = function (e) {
    didScroll = true;
};

setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var nowScrollTop = window.scrollY;
    if (Math.abs(lastScrollTop - nowScrollTop) <= delta) {
        return;
    }
    if (nowScrollTop > lastScrollTop && nowScrollTop > fixBoxHeight) {
        //Scroll down
        $('#mPubMenu').slideUp();
    } else {
        if (nowScrollTop + window.innerHeight < document.body.offsetHeight) {
            //Scroll up
            $('#mPubMenu').slideDown();
        }
    }
    lastScrollTop = nowScrollTop;
};