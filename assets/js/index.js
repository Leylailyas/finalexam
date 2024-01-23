const productList = document.getElementById('productList')

function getProducts () {
    limit = 3
    page = 1
    axios.get(`https://6568118f9927836bd9740ce4.mockapi.io/basket/products?page=${page}&limit=${limit}`)
    .then(res => {
        db = res.data
        db.map(item => {
            const box = document.createElement('div')
            box.className = 'boxDiv col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12'
            box.innerHTML = `
            <img src="${item.image}" alt="">
            <p>${item.name}</p>
            <p>${item.price}</p>
            <button class='addtobasket' onclick="addToBasket(${item.id})">Add To Basket</button>
            <button class ='addtowishlist' onclick="addToWishlist(${item.id})"><i class="fa-solid fa-heart"></i></button> 
            `
            productList.appendChild(box)
        })
    })
}
getProducts()

function addToBasket (id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    let product = cart.find(item => item.id == id)
    if(product){
        product.count = (product.count || 1) +1
    }
    else{
        let newItem = {...db.find(item => item.id == id), count: 1}
        cart.push(newItem)
    }
    localStorage.setItem('cart', JSON.stringify(cart))
}

function addToWishlist (id) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
    let product = wishlist.find(item => item.id == id)
    if(product){
        alert('bu mehsul artiq elave edilib')
    }
    else{
        wishlist.push(db.find(item => item.id == id))
        localStorage.setItem('wishlist', JSON.stringify(wishlist))
    }
}