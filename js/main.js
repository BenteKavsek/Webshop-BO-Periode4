// REVIEWS
let arrowButtons = document.getElementsByClassName("arrow");
let reviews = document.getElementsByClassName("review");
let modus = "one-two-three";

for (let i = 0; arrowButtons.length; i++) {
    arrowButtons[i].onclick = function () {
        if (modus === "one-two-three") {
            reviews[0].style.display = "none";
            reviews[1].style.display = "none";
            reviews[2].style.display = "none";
            reviews[3].style.display = "block";
            reviews[4].style.display = "block";
            reviews[5].style.display = "block";
            modus = "four-five-six";
        }
        else {
            reviews[0].style.display = "block";
            reviews[1].style.display = "block";
            reviews[2].style.display = "block";
            reviews[3].style.display = "none";
            reviews[4].style.display = "none";
            reviews[5].style.display = "none";
            modus = "one-two-three";
        }

    }
}

// INDIVIDUAL PRODUCT CHOISES
let variations = document.querySelectorAll('.variation');
variations.forEach(element => {
    element.addEventListener("click", function () {
        variations.forEach(btn => btn.classList.remove("active"))
        this.classList.add("active");
    })
})

function changeVar(filename) {
    let img = document.querySelector("#productIMG");
    img.setAttribute("src", filename);
}


// fetch('./js/products.json')
//   .then(response => response.json())
//   .then(data => {
//     for (let i in data) {
//       if (data.hasOwnProperty(i)) {

//         console.log(data[i][0].name);
//         console.log(data[i][0].price);
//       }
//     }
// });

fetch('./js/products.json')
  .then(response => response.json())
  .then(data => {
    const productList = document.getElementsByClassName('product');
    
    for (let i = 0; i < 12; i++) {
        
        let productName = data.products[i].name;
        let productPrice = data.products[i].price;
        let productImg = data.products[i].img;
          
        
        let listItem = productList[i].children;

        let nameElement = listItem[1];
        let priceElement = listItem[2];
        let imgElement = [0];

        nameElement.textContent = productName;
        priceElement.textContent = productPrice;
        imgElement.src = productImg;

          }
})