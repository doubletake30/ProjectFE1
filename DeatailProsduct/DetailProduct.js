var contactUs__nav_listContainer_Menubtn = document.querySelector('.contactUs__nav-listContainer-Menubtn')
var contactUs__nav_listContainer2 = document.querySelector('.contactUs__nav-listContainer2')

contactUs__nav_listContainer_Menubtn.addEventListener('click', function() {
    contactUs__nav_listContainer2.classList.toggle("openMenu")
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