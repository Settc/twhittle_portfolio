const contact = document.getElementById("contactContainer")
const list = document.getElementById("list")
const li = document.querySelectorAll(".list-group-item")
window.onload = function() {
   
    transition.begin(contact, [
        "opacity 0 1 2s linear",
        "transform translateX(-200px) translateX(0) 1s linear"
    ])   
    transition.begin(list, ["opacity 0 1 2s linear"]) 
    transition.begin(list, ["transform translateX(-100px) translateX(0) 1s linear"])
}

