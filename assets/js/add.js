const table = document.getElementById('table')

function getProducts () {
    table.innerHTML = ''
    axios.get(`https://6568118f9927836bd9740ce4.mockapi.io/basket/products`)
    .then(res => {
        db = res.data
        db.map(item => {
            let tr = document.createElement('tr')
            tr.innerHTML = `
            <td><img src="${item.image}" alt=""></td>
            <td><p>${item.name}</p></td>
            <td><p>${item.price}</p></td>
            <td><button class="remove" onclick="removeBtn(${item.id})">remove</button></td>
            `
            table.appendChild(tr)
        })
    })

}
getProducts()



const myForm = document.getElementById('myForm')
const nameInp = document.getElementById('nameInp')
const priceInp = document.getElementById('priceInp')

function postwithForm (e) {
    e.preventDefault()
    axios.post(`https://6568118f9927836bd9740ce4.mockapi.io/basket/products`,{
        name: nameInp.value,
        price: priceInp
    })
    .then(res => {
        getProducts()
        myForm.reset()
    })
}
myForm.addEventListener('submit', postwithForm)





function removeBtn (id) {
    axios.delete(`https://6568118f9927836bd9740ce4.mockapi.io/basket/products/${id}`)
    .then(res => {
        getProducts()
    })
}

const filterdata = document.getElementById('filterdata')

function sorteddataDefault () {
    table.innerHTML = ''
    let selectvalue = filterdata.value
    if(selectvalue === '1'){
        axios.get(`https://6568118f9927836bd9740ce4.mockapi.io/basket/products`)
    .then(res => {
        db = res.data
        db.map(item => {
            let tr = document.createElement('tr')
            tr.innerHTML = `
            <td><img src="${item.image}" alt=""></td>
            <td><p>${item.name}</p></td>
            <td><p>${item.price}</p></td>
            <td><button class="remove" onclick="removeBtn(${item.id})">remove</button></td>
            `
            table.appendChild(tr)
        })
    })

    }
}
filterdata.addEventListener('change', sorteddataDefault)

function sortedaz () {
    table.innerHTML = ''
    let selectvalue = filterdata.value
    if(selectvalue === '2') {
        axios.get(`https://6568118f9927836bd9740ce4.mockapi.io/basket/products`)
        .then(res => {
            db = res.data
            let sortaz = db.sort((a,b)=> a.name.localeCompare(b.name))
            sortaz.map(item => {
                let tr = document.createElement('tr')
                tr.innerHTML = `
                <td><img src="${item.image}" alt=""></td>
                <td><p>${item.name}</p></td>
                <td><p>${item.price}</p></td>
                <td><button class="remove" onclick="removeBtn(${item.id})">remove</button></td>
                `
                table.appendChild(tr)
            })
        })
    }
}
filterdata.addEventListener('change', sortedaz)


function sortza () {
    table.innerHTML = ''
    let selectvalue = filterdata.value
    if(selectvalue === '3'){
        axios.get(`https://6568118f9927836bd9740ce4.mockapi.io/basket/products`)
    .then(res => {
        db = res.data
        let sortza = db.sort((a,b)=>b.name.localeCompare(a.name))
        db.map(item => {
            let tr = document.createElement('tr')
            tr.innerHTML = `
            <td><img src="${item.image}" alt=""></td>
            <td><p>${item.name}</p></td>
            <td><p>${item.price}</p></td>
            <td><button class="remove" onclick="removeBtn(${item.id})">remove</button></td>
            `
            table.appendChild(tr)
        })
    })

    }
}
filterdata.addEventListener('change', sortza)


const searchForm = document.getElementById('searchForm')
const searchInp = document.getElementById('searchInp')

function searhByName (e) {
    e.preventDefault()
    table.innerHTML = ''
    axios.get(`https://6568118f9927836bd9740ce4.mockapi.io/basket/products`)
    .then(res => {
        db = res.data
        let searchname = db.filter((item) => item.name.toLowerCase().startsWith(searchInp.value.toLowerCase()))
        searchname.map(item => {
            let tr = document.createElement('tr')
            tr.innerHTML = `
            <td><img src="${item.image}" alt=""></td>
            <td><p>${item.name}</p></td>
            <td><p>${item.price}</p></td>
            <td><button class="remove" onclick="removeBtn(${item.id})">remove</button></td>
            `
            table.appendChild(tr)
        })
        searchInp.value = ''
    })
}

searchForm.addEventListener('submit', searhByName)


// function searhByName (e) {
//     e.preventDefault = ''
//     table.innerHTML = ''
//     axios.get(`https://6568118f9927836bd9740ce4.mockapi.io/basket/products`)
//     .then(res => {
//         db = res.data
//         let searchname = db.filter((item) => item.name.toLowerCase.startsWith(searchInp.value.toLowerCase()))
//         db.map(item => {
//             let tr = document.createElement('tr')
//             tr.innerHTML = `
//             <td><img src="${item.image}" alt=""></td>
//             <td><p>${item.name}</p></td>
//             <td><p>${item.price}</p></td>
//             <td><button class="remove" onclick="removeBtn(${item.id})">remove</button></td>
//             `
//             table.appendChild(tr)
//         })
//         searchInp.innerHTML = ''
//     })
// }

// searchForm.addEventListener('submit', searhByName)

