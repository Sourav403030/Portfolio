const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,

});



var tl = gsap.timeline();


tl.to("#loader",{
    height: 0,
    duration: 4,
    ease: Expo.easeInOut,
    delay: 3.6,
})

tl.to("#green",{
    height: "100%",
    duration: 2,
    delay: -3.2,
    ease: Expo.easeInOut,
    timeScale: 2,
})



gsap.to(".reveal",{
    opacity: 1,
    x: "-10%",
    duration: 2,
    delay: 1,
    stagger: 0.5,
    ease: Circ.easeInOut,
})

gsap.to(".reveal",{
    y: "-200px",
    duration: 1,
    stagger: 0.5,
    opacity: 0,
    ease: Circ.easeInOut,
    delay: 3
})




let cursor = document.querySelector(".cursor");
let rejouice = document.querySelector("#rejouice");
let images = document.querySelector("#images");
let sundown = document.querySelector("#sundown");
let cursor2 = document.querySelector(".cursor2");
let cursor3 = document.querySelector(".cursor3");
let works = document.querySelector("#works-studio");
let cursor4= document.querySelector(".cursor4");
let visionpro = document.querySelector("#apple-vision-pro");
rejouice.addEventListener("mousemove", function(event){
    gsap.to(cursor, {
        x: event.x,
        y: event.y

    })
    
})
rejouice.addEventListener("mouseenter",function(event){
    gsap.to(cursor, {
        opacity: 1,
        display: "block"
    })
})
rejouice.addEventListener("mouseleave",function(event){
    gsap.to(cursor,{
        display: "none"
    })
})

sundown.addEventListener("mousemove", function(event){
    gsap.to(cursor2, {
        x: event.x,
        y: event.y

    })
    
})
sundown.addEventListener("mouseenter",function(event){
    gsap.to(cursor2, {
        opacity: 1,
        display: "block"
    })
})
sundown.addEventListener("mouseleave",function(event){
    gsap.to(cursor2,{
        display: "none"
    })
})

works.addEventListener("mousemove", function(event){
    gsap.to(cursor3, {
        x: event.x,
        y: event.y

    })
    
})
works.addEventListener("mouseenter",function(event){
    gsap.to(cursor3, {
        opacity: 1,
        display: "block"
    })
})
works.addEventListener("mouseleave",function(event){
    gsap.to(cursor3,{
        display: "none"
    })
})

visionpro.addEventListener("mousemove", function(event){
    gsap.to(cursor4, {
        x: event.x,
        y: event.y

    })
    
})
visionpro.addEventListener("mouseenter",function(event){
    gsap.to(cursor4, {
        opacity: 1,
        display: "block"
    })
})
visionpro.addEventListener("mouseleave",function(event){
    gsap.to(cursor4,{
        display: "none"
    })
})

// document.getElementById("linked-in").onclick = function () {
//     location.href = "https://www.linkedin.com/in/sourav-sanjay-186259287/";
// };


document.getElementById("linked-in").onclick = function () {
    window.open("https://www.linkedin.com/in/sourav-sanjay-186259287/", "_blank");
};

document.getElementById("instagram").onclick = function () {
    window.open("https://www.instagram.com/__.so_ur_av.__/", "_blank");
};

document.getElementById("github").onclick = function () {
    window.open("https://github.com/Sourav403030", "_blank");
};

document.getElementById("gmail").onclick = function () {
    window.open("https://mail.google.com/mail/u/0/#inbox?compose=CllgCJvmZZnfMcTzmKSfDCxwsHTtbxgSVQMjlwHnjkrNCzVfRkVMlhwlWzqLFCqxddZVfMDNngB", "_blank");
};

document.getElementById("rejouice").onclick = function () {
    window.open("https://sourav403030.github.io/rejouice-clone/", "_blank");
};

document.getElementById("sundown").onclick = function () {
    window.open("https://sourav403030.github.io/Sundown/", "_blank");
};

document.getElementById("works-studio").onclick = function () {
    window.open("https://sourav403030.github.io/W-RKS/", "_blank");
};

document.getElementById("apple-vision-pro").onclick = function () {
    window.open("https://sourav403030.github.io/apple-vision-clone/", "_blank");
};


gsap.from("#nav a",{
    top: "-100%",
    stagger: 0.3,
    duration: 1,
    delay: 6
})

gsap.to("#main-content ",{
    opacity: 1,
    duration:2,
    delay: 6
})

gsap.to("#img-left h1",{
    top:"-100%",
    stagger: 0.3,
    delay:3,
    duration:0.5
})