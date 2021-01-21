// // importing gsap-timeline
// ANIMATIONS
var tl = gsap.timeline();



// COURSEL
var coursel = document.body.querySelector(".main")
var child = document.body.querySelectorAll(".background__image")
for (var i = 0; i < 5; i++) {

    child[i].style.background = `url(./assets/images/img${i + 1}.jpg) no-repeat center/cover`;
    // child[i].style.backgroundColor = "red";

}

// HORIZONTAL SCROLL 
document.querySelector("body").addEventListener("mousewheel", (e) => {
    if (e.deltaY > 0) coursel.scrollLeft += 100;
    else coursel.scrollLeft -= 100;

})

var card = document.body.querySelectorAll(".des-mini")
var main_2 = document.body.querySelector(".main")
var main = document.body.querySelector(".coursel")

for (var cards_index = 0; cards_index < card.length; cards_index++) {
    card[cards_index].addEventListener("click", function (e) {
        var new_ele = this.innerHTML;
        var new_div = document.createElement("div")
        new_div.style.zIndex = 100;
        new_div.classList.add("destination");
        new_div.innerHTML += new_ele
        var ele_pos = this.getBoundingClientRect()
        main_2.appendChild(new_div)
        main_2.removeChild(main_2.childNodes[0])

        tl.fromTo(".main #bg-img", { height: ele_pos.height, width: ele_pos.width, x: ele_pos.x, y: ele_pos.y }, { ease: "expo-out", height: "100vh", width: "100vw", duration: 1, x: 0, y: 0 })
        tl.fromTo(".main #sub-hed", { x: -250, opacity: 0 }, { delay: 0.5, duration: 0.5, x: 0, opacity: 1 });
        tl.fromTo(".main #main-hed", { x: -300, scale: 0, opacity: 0 }, { delay: 0.1, duration: 0.6, x: 0, scale: 1, opacity: 1 });
        tl.fromTo(".main #pl-descrip", { height: "0px" }, { delay: 0.1, duration: 0.3, height: "50px" });




    })
}
