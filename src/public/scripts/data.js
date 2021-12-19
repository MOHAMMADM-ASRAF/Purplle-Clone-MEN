
async function products() {

    const res = await fetch('http://localhost:8585/products')
    const data = await res.json();
    console.log(data)
    showProducts(data.products)

}
products()
// https://fakestoreapi.com/products


// fetch('http://localhost:8585/products')
// .then(function(res) {
//     return res.json();
// })
// .then(function(res) {
//     console.log('res:', res);
//     showProducts(res.products)

// })


let productDiv = document.getElementById('pro');

function showProducts(products) {
    products.forEach(function(product) {

        let div = document.createElement('div');

        let img = document.createElement('img');
        img.src = product.image;

        let name = document.createElement('p');
        name.textContent = product.product_name;

        let price = document.createElement('p');
        price.textContent = product.price;

        div.append(img,name,price)
        productDiv.append(div)

    }) 

}


