


const proList = document.getElementById('proList')

function getBasket () {
    proList.innerHTML = ''
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
    wishlist.map((item, index) => {
        const box = document.createElement('div')
        box.innerHTML = `
        <img src="${item.image}" alt="">
        <p>${item.name}</p>
        <p>${item.price}</p>
        <p>${item.count}</p>
        <button class="remove" onclick="removeBtn(${item.index})">remove</button>

        `
        proList.appendChild(box)
    })
}
getBasket()

function removeBtn (index) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
    wishlist.splice(index, 1)
    localStorage.setItem('wishlist', JSON.stringify(wishlist))
    getBasket()
}
