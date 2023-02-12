let $ = document

//variables....
let buttonWrapper = $.querySelector('.buttonWrapper')
let tabButtons = $.querySelectorAll('.tab-button')
let contents = $.querySelectorAll('.content')
let hideShow = $.querySelectorAll('p');
let inputCode = $.querySelector('.input-code')
let signButton = $.querySelector('.btn-sign')
let buttonCode = $.querySelector('#button-send-code')
let hidePassword = true



//Events




//send security code event with sweet alert 2
function codeHandler(event) {

    let codeNumber = Math.floor(Math.random() * 100000)

    toastAlert.fire({
        title: 'Your code is ' + codeNumber,
    })

    inputCode.value = codeNumber

}






let toastAlert = Swal.mixin({
    timerProgressBar: true,
    timer: 3000,
    position: 'top-start',
    toast: true,
    icon: 'info',
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})






//hide show password event
hideShow.forEach(function(p) {

    function pHandler(event) {
        if (hidePassword) {
            let inputPass = event.target.previousElementSibling
            inputPass.type = 'text'
            event.target.style.textDecoration = 'line-through'
            hidePassword = false
        } else {
            let inputPass = event.target.previousElementSibling
            inputPass.type = 'password'
            event.target.style.textDecoration = 'none'
            hidePassword = true
        }
    }
    p.addEventListener('click', pHandler)
})




//tab menu event
buttonWrapper.addEventListener('click', event => {

    let mainContentID = event.target.dataset.id
    let mainContent = $.querySelector(`#${mainContentID}`)

    tabButtons.forEach(btn => btn.classList.remove('active'))
    event.target.classList.add('active')

    contents.forEach(content => content.classList.remove('active'))
    mainContent.classList.add('active')

})


//sign btn











buttonCode.addEventListener('click', codeHandler)
signButton.addEventListener('click', signHandler)