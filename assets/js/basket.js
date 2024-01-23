const proList = document.getElementById('proList')

function getBasket () {
    proList.innerHTML = ''
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.map((item, index) => {
        const box = document.createElement('div')
        box.className = 'boxDiv col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12'
        box.innerHTML = `
        <img src="${item.image}" alt="">
        <p>${item.name}</p>
        <p>${item.price}</p>
        <button class='addtobasket' onclick="remove(${index})">Remove</button>
        `
        proList.appendChild(box)
    })
}
getBasket()

function remove (index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.splice(index, 1)
    localStorage.setItem('cart', JSON.stringify(cart))
    getBasket()
}

