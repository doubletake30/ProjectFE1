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






var settingUpButton = document.querySelector('.contactUs__container-questionContainer-buttonHolder-settingBox')
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


settingUpButton.addEventListener('click', function() {
    switchInfo_main_Holder.classList.toggle('clickSwitchButton')
   
})

var messageButton = document.querySelector('.contactUs__container-COntainerFixedButton-btn')
var messageBlock = document.querySelector('.contactUs__container-COntainerFixedButton')
var contactUs__container_COntainerFixedButton_nav_btn = document.querySelector('.contactUs__container-COntainerFixedButton-nav-btn') 

messageButton.addEventListener('click', function() {
    messageBlock.classList.add('appearBlock')
})

contactUs__container_COntainerFixedButton_nav_btn.addEventListener('click', function() {
    messageBlock.classList.remove('appearBlock')
})