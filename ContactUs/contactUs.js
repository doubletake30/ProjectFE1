var btnSearch = document.querySelector('.contactUs__container-questionContainer-searchBox-btn')

btnSearch.addEventListener('click', function(){
    this.parentElement.classList.toggle('open')
})