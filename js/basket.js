let $ = document
let itemsDiv = $.querySelector('.cart-items')
let btnPurchase = $.querySelector('.purchase')
let spanTotal = $.querySelector('.cart-total-price')
let userBasket = JSON.parse(localStorage.getItem('todoObject'))



//make product of web with foreach
function itemShop(userBasket) {

    itemsDiv.innerHTML = ''



    let fragment = $.createDocumentFragment()

    userBasket.forEach(function(item) {

        let cartDiv = $.createElement('div')
        cartDiv.className = 'row cart-rows align-items-center'

        //part-1
        let cartItem = $.createElement('div')
        cartItem.className = 'col-4 cart-column cart-item'

        let imgCart = $.createElement('img')
        imgCart.src = item.Src

        let itemTitle = $.createElement('span')
        itemTitle.className = 'cart-item-title'
        itemTitle.innerHTML = item.id



        //part-2
        let spanPrice = $.createElement('span')
        spanPrice.className = 'col-4 cart-column cart-price'
        spanPrice.innerHTML = item.Cost + '$'


        //part-3
        let divQuantity = $.createElement('div')
        divQuantity.className = 'col-4 cart-column cart-quantity'

        let inputCount = $.createElement('input')
        inputCount.type = 'number'
        inputCount.value = 1
        inputCount.min = 1
        inputCount.max = 10

        let btnRemove = $.createElement('button')
        btnRemove.className = 'btn btn-outline-danger'
        btnRemove.innerHTML = 'Remove'


        //events

        btnRemove.addEventListener('click', function() {
            removeEvent(item.id)
        })

        inputCount.addEventListener('change', function() {
            fixValue(item.id, inputCount.value)
        })


        //appending
        cartItem.append(imgCart, itemTitle)
        divQuantity.append(inputCount, btnRemove)
        cartDiv.append(cartItem, spanPrice, divQuantity)

        fragment.append(cartDiv)

        itemsDiv.append(fragment)


        totalPrice(userBasket)
    })
}




//remove item from basket 
function removeEvent(productId) {
    userBasket = userBasket.filter(function(product) {
        if (product.id === productId) {
            product.Count = 1
        }
        return product.id !== productId
    })
    if (itemsDiv.innerHTML = '') {
        spanTotal.innerHTML = ' 00$'
    }

    localStorage.setItem('todoObject', JSON.stringify(userBasket))
    itemShop(userBasket)
}


//purchase the product
btnPurchase.addEventListener('click', function() {
    itemsDiv.innerHTML = ''
    userBasket = []
    spanTotal.innerHTML = 0 + '$'
    localStorage.setItem('todoObject', JSON.stringify(userBasket))
    Swal.fire({
        icon: 'success',
        title: 'The transaction was successful'
    })
    addToTable(userBasket)
})



//round and calc the total pice
function fixValue(productId, newCount) {
    userBasket.forEach(function(product) {
        if (product.id == productId) {
            return product.Count = newCount
        }
    })
    totalPrice(userBasket)
}

function totalPrice(userBasket) {
    let sum = 0
    userBasket.forEach(function(product) {
        return sum += product.Cost * product.Count
    })
    spanTotal.innerHTML = sum.toFixed(1) + '$'
}



itemShop(userBasket)