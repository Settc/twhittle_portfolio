const contact = document.getElementById("contactContainer")
const card = document.getElementById("cardContainer")
const returnMain = document.getElementById("returnMain")

window.onload = function() {
   
    transition.begin(contact, [
        "opacity 0 1 2s linear",
        "transform translateX(-200px) translateX(0) 1s linear"
    ])   
    transition.begin(card, ["opacity 0 1 2s linear"]) 
    transition.begin(card, ["transform translateX(-100px) translateX(0) 1s linear"])
}

returnMain.addEventListener("click", mainPage)

function mainPage() {
    transition.begin(contact, [
        "opacity 1 0 1s linear"
    ])
    transition.begin(card, [
        "opacity 1 0 1s linear"
    ],  {
        onTransitionEnd: function(card, finished) {
           window.location.href = "index.html" 
        }
    })
}

