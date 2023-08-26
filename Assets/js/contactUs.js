var btnSearch = document.querySelector('.contactUs__container-questionContainer-searchBox-btn')
var switchInfoSubHolder = document.querySelector('.contactUs__container-questionContainer-switchInfoSubHolder')
var switchInfoSubHolder2 = document.querySelector('.contactUs__container-questionContainer-switchInfoSubHolder2')
var switchInfoSubHolder3 = document.querySelector('.contactUs__container-questionContainer-switchInfoSubHolder3')
var contentInfoInSubHolder = document.querySelector('.contactUs__container-questionContainer-switch1Content')
var contentInfoInSubHolder2 = document.querySelector('.contactUs__container-questionContainer-switch2Content')
var contentInfoInSubHolder3 = document.querySelector('.contactUs__container-questionContainer-switch3Content')
var tittleSearchBox = document.querySelector('.contactUs__container-questionContainer-tittle-searchBox')
var iconInfoDic = document.querySelector('.contactUs__container-questionContainer-switch1IconHolder')
var iconInfoDic2 = document.querySelector('.contactUs__container-questionContainer-switch2IconHolder')
var iconInfoDic3 = document.querySelector('.contactUs__container-questionContainer-switch3IconHolder')








var switchInfo_main_Holder = document.querySelector('.contactUs__container-questionContainer-switchInfoHolder')


// Search Box
btnSearch.addEventListener('click', function(){
    this.parentElement.classList.toggle('open')
    tittleSearchBox.classList.toggle('open')
})


//---------------Switch Info------------------
var switchInfo_btn = document.querySelector('.contactUs__container-questionContainer-switch1Button')

switchInfo_btn.addEventListener('click', function() {
    switchInfoSubHolder.classList.toggle('switchInfoSubHolder-Change')
    contentInfoInSubHolder.classList.toggle('switchInfoSubHolder-Change')
    iconInfoDic.classList.toggle('switchInfoSubHolder-Change')
})

var switchInfo_btn = document.querySelector('.contactUs__container-questionContainer-switch2Button')

switchInfo_btn.addEventListener('click', function() {
    switchInfoSubHolder2.classList.toggle('switchInfoSubHolder-Change2')
    contentInfoInSubHolder2.classList.toggle('switchInfoSubHolder-Change2')
    iconInfoDic2.classList.toggle('switchInfoSubHolder-Change2')
})

var switchInfo_btn = document.querySelector('.contactUs__container-questionContainer-switch3Button')

switchInfo_btn.addEventListener('click', function() {
    switchInfoSubHolder3.classList.toggle('switchInfoSubHolder-Change3')
    contentInfoInSubHolder3.classList.toggle('switchInfoSubHolder-Change3')
    iconInfoDic3.classList.toggle('switchInfoSubHolder-Change3')
})


//================================ Message Fixed Button========================

var messageButton = document.querySelector('.contactUs__container-COntainerFixedButton-btn')
var messageBlock = document.querySelector('.contactUs__container-COntainerFixedButton')
var contactUs__container_COntainerFixedButton_nav_btn = document.querySelector('.contactUs__container-COntainerFixedButton-nav-btn') 

messageButton.addEventListener('click', function() {
    messageBlock.classList.add('appearBlock')
})

contactUs__container_COntainerFixedButton_nav_btn.addEventListener('click', function() {
    messageBlock.classList.remove('appearBlock')
})

// ------------------------------Login Nofitication----------------------------

var contactUs__container_LoginNofitication = document.querySelector('.contactUs__container-LoginNofitication')
var contactUs_nav_listContainer_item_LoginBtn = document.querySelector('.contactUs__nav-listContainer-item-LoginBtn')
var contactUs__nav_listContainer_item_LoginBtn2 = document.querySelector('.contactUs__nav-listContainer-item-LoginBtn2')
var contactUs__container_LoginNofitication_btn = document.querySelector('.contactUs__container-LoginNofitication-btn')

contactUs_nav_listContainer_item_LoginBtn.addEventListener('click', function() {
    contactUs__container_LoginNofitication.classList.toggle('appearNofitication')
})

contactUs__container_LoginNofitication_btn.addEventListener('click', function() {
    contactUs__container_LoginNofitication.classList.remove('appearNofitication')
})

contactUs__nav_listContainer_item_LoginBtn2.addEventListener('click', function() {
    contactUs__container_LoginNofitication.classList.toggle('appearNofitication')
})

var contactUs__nav_listContainer_Menubtn = document.querySelector('.contactUs__nav-listContainer-Menubtn')
var contactUs__nav_listContainer2 = document.querySelector('.contactUs__nav-listContainer2')

contactUs__nav_listContainer_Menubtn.addEventListener('click', function() {
    contactUs__nav_listContainer2.classList.toggle("openMenu")
})


// =================Toan's Nav========================
let navbar = document.querySelector(".navbar");

let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}

let productsArrow = document.querySelector(".products-arrow");
productsArrow.onclick = function() {
 navLinks.classList.toggle("show1");
}