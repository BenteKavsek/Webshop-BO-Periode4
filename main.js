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
    element.addEventListener("click", function(){
        variations.forEach(btn=>btn.classList.remove("active"))
        this.classList.add("active");
    })
})

function changeVar(filename) {
    let img = document.querySelector("#productIMG");
    img.setAttribute("src", filename);
}

