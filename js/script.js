let $ = document
let app = $.querySelector('.title-header-top');
let wrapper = $.querySelectorAll('.wrapper')
let iconWrapper = $.querySelectorAll('i.fa-plus')
let buttonWrapper = $.querySelectorAll('.toggle')
let contentWrapper = $.querySelectorAll('.content')


//------------------------FAQ part
wrapper.forEach(function(item) {


    function itemHandler() {
        defaultBtn()
        let iconWrapper = item.querySelector('.icon')
        let buttonWrapper = item.querySelector('.toggle')
        let contentWrapper = item.querySelector('.content')

        contentWrapper.style.height = contentWrapper.scrollHeight + 'px'
        contentWrapper.style.transition = '0.5s'
        buttonWrapper.style.color = 'blue'
        iconWrapper.classList.replace('fa-plus', 'fa-minus')
        iconWrapper.style.color = 'blue'

    }

    item.addEventListener('click', itemHandler)


})


function defaultBtn() {
    contentWrapper.forEach(function(content) {
        content.style.height = '0px'
    })
    iconWrapper.forEach(function(icon) {
        icon.classList.replace('fa-minus', 'fa-plus')
        icon.style.color = "#000"
    })
    buttonWrapper.forEach(function(btn) {
        btn.style.color = '#000'
    })
}





//---------------------type writer library

let typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Best app for your <br class="d-block d-lg-none d-xl-block">modern lifestyle')
    .pauseFor(2500)
    .deleteAll()
    .typeString('To enjoy Your time with your family')
    .pauseFor(2000)
    .start();