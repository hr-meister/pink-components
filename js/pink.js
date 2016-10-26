window.onload = function () {
    
    var mobileMenu = {};
    
    mobileMenu.pageHeader = document.querySelector(".page-header");
    
    mobileMenu.mainNavigation = mobileMenu.pageHeader.querySelector(".navigation-menu--main");
    
    mobileMenu.buttonBox = mobileMenu.pageHeader.querySelector(".main-navigation-button");
    
    mobileMenu.button = mobileMenu.buttonBox.querySelector(".button--main-navigation");
    
    mobileMenu.toggleButton = function () {
        
        mobileMenu.buttonBox.classList.toggle("sandwich");
        mobileMenu.buttonBox.classList.toggle("close");
        mobileMenu.pageHeader.classList.toggle("nav-bg-color");
        
    };
    
    mobileMenu.button.addEventListener("click", mobileMenu.toggleButton, false);
    
}