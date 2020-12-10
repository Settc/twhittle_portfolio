const work = document.getElementById("work")
const contact = document.getElementById("contact")
const workInfo = document.getElementById("workInfo")
const contactInfo = document.getElementById("contactInfo")

function animate(el) {
    transition.begin(el, ["transform translateY(0) translateY(200px) 1s linear",
    "opacity 1 0 1s linear"  
    ], {
        onTransitionEnd: function(el, finished) {
           window.location.href = "develop/contact.html" 
        }
    })
}

contact.addEventListener("click", () => {
    contactInfo.appendChild
    animate(document.body)
})
