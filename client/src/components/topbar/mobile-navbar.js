document.addEventListener('DOMContentLoaded', function (){
class MobileNavBar{
    constructor(mobileMenu, topList) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.topList = document.querySelector(topList);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.topList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if(this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavBar = new MobileNavBar(
    ".mobile-menu",
    ".topList",
    ".topList li",
);
mobileNavBar.init();
});