// NAAM PRIJS EN PLAATJE LATEN ZIEN
fetch('./json/spellen-products.json')
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
        let imgElement = listItem[0];

        nameElement.innerText = productName;
        priceElement.innerText = "€" + productPrice;
        imgElement.src = productImg;
        }
      })


for (let i = 0; i < arrowButtons.length; i++){

}
      
      // STAPPENPLAN PRIJSFILTER
      // 1. haal alle prijzen uit json
      // 2. krijg de min en max prijs uit de filter van HTML
      // 3. vergelijk de prijzen uit json met de min en max prijzen van HTML
      // 4. maak een if else voor welke display flex en dsiplay none hebben
      // 5. zorg dat hij elke keer refereshed als er iets in die filter word aangeklikt 
     
      function prijsFilter(minPrice, maxPrice){
          fetch('./json/spellen-products.json')
          .then(response => response.json())
          .then(data => {

            const products = document.getElementsByClassName("product");
            
            for (let i = 0; i < products.length; i++) {
                
                if (data.products[i].price >= minPrice && data.products[i].price <= maxPrice) {
                products[i].style.display = "flex";
              }
              else{
                products[i].style.display = "none";
              }}

      })};


function filter_spel(clickedElement) {
  const a = document.getElementsByClassName('filter');
  for (let i = 0; i < a.length; i++) {
    if (a[i] === clickedElement) {
      a[i].classList.add('active');
    } else {
      a[i].classList.remove('active');
    }
  }
}

function showPopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "flex";
  setTimeout(function() {
    hidePopup();
  }, 1500);
}

function hidePopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "none";
}


  