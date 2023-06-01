// INDIVIDUELE PRODUCT KEUZES
let variations = document.querySelectorAll('.variation');
variations.forEach(element => {
    element.addEventListener("click", function () {
        variations.forEach(btn => btn.classList.remove("active"))
        this.classList.add("active");
    })
})

// PLAATJE VERANDERD MEE MET KEUZE
function changeVar(filename) {
    let img = document.querySelector("#productIMG");
    img.setAttribute("src", filename);
}