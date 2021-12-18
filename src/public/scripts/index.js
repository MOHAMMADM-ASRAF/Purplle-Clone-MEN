

//scrollbar start
var counter = 1;
setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 3000)
//scrollbar end

//set timeout start
var i = 0;
var time = 1500;
var images = [];
images[0] = './img/web1.gif';
images[1] = './img/web2.gif';
images[2] = './img/web3.jpg';
images[4] = './img/web4.jpg';

function changeImg() {
    document.slide.src = images[i];
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout("changeImg()", time);
}
window.onload = changeImg
//set - timeout end



// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// sign

// Get the modal
var modal2 = document.getElementById("myModal2");

// Get the button that opens the modal
var btn2 = document.getElementById("myBtn2");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks the button, open the modal 
btn2.onclick = function() {
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
  modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}

// sign

// Get the modal
var modal2 = document.getElementById("myModal2");

// Get the button that opens the modal
var btn2 = document.getElementById("myBtn2");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks the button, open the modal 
btn2.onclick = function() {
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
  modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}


// debounce

var timerId;
let product_div = document.getElementById("prod")



async function searchProducts(products_name) {
    try{
        // let res = await fetch(`http://www.omdbapi.com/?apikey=9edee339&s=${products_name}`)


        let res = await fetch(`https://fakestoreapi.com/products/?`)

    
        let data = await res.json();

        return data;
        // console.log(data);
    }

    catch(err) {
        console.log(err)
    }
}



product_div.innerHTML = null;
function appendProducts(products) {
    if(products === undefined) {
        return false;
    }

    products.forEach(function(product) {
        let p = document.createElement("p");

        // p.innerText =product.Title;
        p.innerText = product.product_name;

       

        product_div.append(p);
    })
}



async function main() {
    let name = document.getElementById("product").value;

    if(name.length < 3) {
        return false;
    }

    let res = await searchProducts(name);

    let movies_data = res.Search;
    appendProducts(movies_data);
    console.log(res)
}

function debounce(func,delay) {
    if(timerId) {
        clearTimeout(timerId);
    }

    timerId = setTimeout(function() {
        func();

    },delay);
}



