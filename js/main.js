let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if(document.documentElement.scrollTop > 20) {
        nav.classList.add("header-scroll");
    }else {
        nav.classList.remove("header-scroll");
    }
}