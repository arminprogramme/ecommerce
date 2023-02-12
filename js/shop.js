let $ = document
let shopContainer = $.querySelector('.product-row')
let pagination = $.querySelector('.pagination')
let userBasket = JSON.parse(localStorage.getItem('todoObject')) || []


let rows = 12
let currentPage = 1


// all product of our shop
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

//sweet alert library
let toastAlert = Swal.mixin({

    timerProgressBar: true,
    icon: 'success',
    position: 'top-start',
    toast: true,
})


//make template of our project and make pagination

function displayList(wrapper, productArrays, rowsProduct, page) {
    wrapper.innerHTML = ""

    let end = rowsProduct * page
    let start = end - rowsProduct
    let selectProduct = productArrays.slice(start, end)


    selectProduct.forEach(function(product) {
        let fragment = $.createDocumentFragment()
            //container
        let item = $.createElement('div')
        item.className = "col-xl-3 col-md-6"

        let cardItem = $.createElement('div')
        cardItem.className = 'card m-3 shadow-lg'

        let imgCard = $.createElement('img')
        imgCard.src = product.Src
        imgCard.className = 'card-img-top'


        let cardBody = $.createElement('div')
        cardBody.className = 'card-body'


        let headerCard = $.createElement('h5')
        headerCard.innerHTML = product.id
        headerCard.className = 'card-title'


        let cardText = $.createElement('p')
        cardText.className = 'card-text'
        cardText.innerHTML = product.Text

        let divPrice = $.createElement('div')
        divPrice.className = 'cart-price card-title'
        divPrice.innerHTML = product.Cost + '$'

        let btnAdd = $.createElement('button')
        btnAdd.className = 'btn btn-success'
        btnAdd.innerHTML = 'Add To Basket'

        //footer cart


        let cardFooter = $.createElement('div')
        cardFooter.className = 'card-footer'

        let showData = $.createElement('a')
        showData.innerHTML = 'Show More'
        showData.href = 'data.html' + '?id=' + product.id


        //appending
        cardFooter.append(showData)
        cardBody.append(headerCard, cardText, divPrice, btnAdd)
        cardItem.append(imgCard, cardBody, cardFooter)
        item.append(cardItem)
        fragment.append(item)



        btnAdd.addEventListener('click', function() {
            findProduct(product.id, selectProduct)
        })
        shopContainer.append(fragment)

    })

}

function findProduct(productId, selectProduct) {
    let finder = selectProduct.find(function(product) {
        return product.id == productId
    })
    let check = userBasket.some(function(product) {
        if (product.id == productId) {
            return Swal.fire({
                timer: 2000,
                html: '<b>This product has already been added to your shopping cart, you can see in your <a href = "basket.html">Basket</a></b>',
                timerProgressBar: true,
                icon: 'error',
                position: 'top-start',
                toast: true,
            })

        }
    })
    if (!check) {
        userBasket.push(finder)
        Swal.fire({
            timer: 2000,
            html: '<b>The product has been added to your shopping cart , you can see in your <a href = "basket.html">Basket</a></b>',
            timerProgressBar: true,
            icon: 'success',
            position: 'top-start',
            toast: true,
        })

        localStorage.setItem('todoObject', JSON.stringify(userBasket))
        console.log(userBasket);
    }
}


function setupList(pagination, rowsProduct, page) {
    let maxProduct = Math.ceil(allProduct.length / rows)
    console.log(maxProduct);
}

// pagination part

function setupList(pagination, rowsProduct, page) {
    pagination.innerHTML = ''
    let maxProduct = Math.ceil(allProduct.length / rowsProduct)
    for (i = 1; i < maxProduct + 1; i++) {
        numberBtn(i, pagination, page)
    }
}

function numberBtn(number, pagination, currentPage) {
    let button = $.createElement('button')
    button.className = 'pagination-button'
    button.innerHTML = number

    if (number == currentPage) {
        button.classList.add('active')
    }

    button.addEventListener('click', function() {
        currentPage = number
        let activePage = $.querySelectorAll('.pagination .active')
        activePage.forEach(function(page) {
            page.classList.remove('active')
        })

        displayList(shopContainer, allProduct, rows, currentPage)
        button.classList.add('active')
    })
    pagination.append(button)
}







displayList(shopContainer, allProduct, rows, currentPage)
setupList(pagination, rows, currentPage)