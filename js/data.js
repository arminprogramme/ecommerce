let $ = document
let buttonWrapper = $.querySelector('.buttonWrapper')
let tabButtons = $.querySelectorAll('.tab-button')
let contents = $.querySelectorAll('.content')
let ctx = document.getElementById('myChart')
let titleImg = $.querySelector('#name-product')
let imgProduct = $.querySelector('.img-big')

//
// data base of our product
let allProduct = [
    { id: 'clothes1', Src: 'images/women-03.jpg', Cost: 455, Count: 1, Text: 'Best Nike in 2023' },
    { id: 'clothes2', Src: 'images/women-02.jpg', Cost: 400, Count: 1, Text: 'Best Nike in 2023' },
    { id: 'clothes3', Src: 'images/kid-01.jpg', Cost: 780, Count: 1, Text: 'Best Nike in 2023' },
    { id: 'clothes4', Src: 'images/kid-02.jpg', Cost: 2000, Count: 1, Text: 'Best Nike in 2023' },
    //.jpg
    { id: 'clothes5', Src: 'images/kid-03.jpg', Cost: 800, Count: 1, Text: 'Best Nike in 2023' },
    { id: 'clothes6', Src: 'images/men-03.jpg', Cost: 900, Count: 1, Text: 'Best Nike in 2023' },
    { id: 'clothes7', Src: 'images/men-02.jpg', Cost: 4225, Count: 1, Text: 'Best Nike in 2023' },
    { id: 'clothes8', Src: 'images/men-01.jpg', Cost: 4200, Count: 1, Text: 'Best Nike in 2023' },
    //.jpg
    { id: 'clothes9', Src: 'images/banner-1.jpg', Cost: 4599, Count: 1, Text: 'Best Nike in 2023' },
    { id: 'clothes10', Src: 'images/him.png', Cost: 8522, Count: 1, Text: 'Best Nike in 2023' },
    { id: 'clothes11', Src: 'images/fashion-blog-2.png', Cost: 9000, Count: 1, Text: 'Best Nike in 2023' },
    { id: 'clothes12', Src: 'images/spring-dress-blog-3.png', Cost: 9777, Count: 1, Text: 'Best Nike in 2023' },
    //--------

    { id: 'clothes13', Src: 'images/kid-03.jpg', Cost: 800, Count: 1, Text: 'Best Nike in 2023' },
    { id: 'clothes14', Src: 'images/men-03.jpg', Cost: 900, Count: 1, Text: 'Best Nike in 2023' },
    { id: 'clothes15', Src: 'images/men-02.jpg', Cost: 4225, Count: 1, Text: 'Best Nike in 2023' },
    { id: 'clothes16', Src: 'images/men-01.jpg', Cost: 4200, Count: 1, Text: 'Best Nike in 2023' },
    //.jpg
    { id: 'clothes17', Src: 'images/banner-1.jpg', Cost: 4599, Count: 1, Text: 'Best Nike in 2023' },
    { id: 'clothes18', Src: 'images/him.png', Cost: 8522, Count: 1, Text: 'Best Nike in 2023' },
    { id: 'clothes19', Src: 'images/fashion-blog-2.png', Cost: 9000, Count: 1, Text: 'Best Nike in 2023' },
    { id: 'clothes20', Src: 'images/spring-dress-blog-3.png', Cost: 9777, Count: 1, Text: 'Best Nike in 2023' },

    //--
    { id: 'clothes21', Src: 'images/women-03.jpg', Cost: 455, Count: 1, Text: 'Best Nike in 2023' },
    { id: 'clothes22', Src: 'images/women-02.jpg', Cost: 400, Count: 1, Text: 'Best Nike in 2023' },
    { id: 'clothes23', Src: 'images/kid-01.jpg', Cost: 780, Count: 1, Text: 'Best Nike in 2023' },
    { id: 'clothes24', Src: 'images/kid-02.jpg', Cost: 2000, Count: 1, Text: 'Best Nike in 2023' },
    //.jpg
]




//dynamic rout of project
let locationParams = new URLSearchParams(location.search)
let mainProductId = locationParams.get('id')

let productFinder = allProduct.find(function(product) {
    return product.id == mainProductId
})

if (productFinder) {
    titleImg.innerHTML = productFinder.id
    imgProduct.src = productFinder.Src
}


// tab change of project
buttonWrapper.addEventListener('click', event => {

    let mainContentID = event.target.dataset.id
    let mainContent = $.querySelector(`#${mainContentID}`)

    tabButtons.forEach(btn => btn.classList.remove('active'))
    event.target.classList.add('active')

    contents.forEach(content => content.classList.remove('active'))
    mainContent.classList.add('active')
})



//chart js 
new Chart(ctx, {
    type: 'line',
    data: {
        labels: [2015, 2016, 2019, 2020, 2021, 2022],
        datasets: [{
            label: '# of Votes',
            data: [1200, 1900, 1000, 1500, 2000, 1300],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },

    }
});