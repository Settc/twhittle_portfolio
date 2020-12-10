const work = document.getElementById("work")
const contact = document.getElementById("contact")
const workInfo = document.getElementById("workInfo")
const contactInfo = document.getElementById("contactInfo")
const accordion = document.getElementById("accordion")


contact.addEventListener("click", () => {
    
    animate(document.body)
})

work.addEventListener("click", () => {
    
    animate(document.body)
})


function animate(el) {
    transition.begin(el, ["transform translateY(0) translateY(200px) 1s linear",
    "opacity 1 0 1s linear"  
    ], {
        onTransitionEnd: function(el, finished) {
           window.location.href = "contact.html" 
        }
    })
    
}

// function accordionAnimate(el) {
//     transition.begin(el, ["opacity 1 0 500ms linear"], 
//     {
//         onTransitionEnd: function(el, finished) {
//             if (el.clicked === true) {
//                 transition.begin(el, ["opacity 0 1 500ms linear"])
//             }
//         }
//     })
// }




