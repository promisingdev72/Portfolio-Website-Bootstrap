var mobileMenu = document.querySelector('.mobile-menu-wrapper');
var isNavbarOpen = false;
function toogleMenu(){
    if(isNavbarOpen == false){
        mobileMenu.classList.add('show');
        isNavbarOpen = true;

        var toAnimate = mobileMenu.querySelectorAll('.animate-it');
        toAnimate.forEach(function(element){
            element.classList.remove('animated');
        });
        toAnimate.forEach(function(element){
            element.classList.add('animated');
        });

    }else{
        mobileMenu.classList.remove('show');
        isNavbarOpen = false;
    }
}

var requestBox = document.querySelector('.request-wrapper');
var isRequestBoxOpen = false;
function toogleRequestBox(){
    if(isRequestBoxOpen == false){
        requestBox.classList.add('show');
        isRequestBoxOpen = true;
        if(isNavbarOpen == true){
            toogleMenu();
        }
    }else{
        requestBox.classList.remove('show');
        isRequestBoxOpen = false;
    }
}

var scrollToTopButton = document.querySelector('.back-to-top');
scrollToTopButton.addEventListener('click', function(){
    window.scrollTo(0,0);
});
scrollToTopButton.addEventListener('touchend', function(){
    window.scrollTo(0,0);
});
var toAnimate = document.querySelectorAll('.animate-it');
var toStick = document.querySelector('.pos-fix');
var toStickTopPosition = toStick.offsetTop;

document.onscroll = function(){

    toAnimate.forEach(function(element){
        var rect = element.getBoundingClientRect();
        if(rect.top >= 0 && (rect.bottom) <= (window.innerHeight || document.documentElement.clientHeight)){
            element.classList.add('animated');
        }
    });

    var documentHeight = document.body.clientHeight;
    var scrollY = window.scrollY;
    if((scrollY*100)/documentHeight > 15){
        scrollToTopButton.classList.add('show');
    }else{
        scrollToTopButton.classList.remove('show');    
    }

    if (window.pageYOffset  >= toStickTopPosition && window.scrollY > 0) {
        toStick.classList.add("pos-show");
        toStick.style.paddingTop = toStick.offsetHeight+'px';
    }else{
        toStick.classList.remove("pos-show");
        toStick.style.paddingTop = '0px';
    }

}

window.addEventListener("load", function(){
    document.querySelector('.preloader').remove();
});
