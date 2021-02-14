//좌측 메뉴
function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

//스마트폰 서브메뉴
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "60px";
    } else {
        document.getElementById("navbar").style.top = "0px";
    }
    prevScrollpos = currentScrollPos;
}
