var home = document.getElementById("home");
var about = document.getElementById("about");
var contact = document.getElementById("contact");
var clothesbtn = document.getElementById("clothes");
var mackupbtn = document.getElementById("make");
var skincarebtn = document.getElementById("skincare");
var accesoresbtn = document.getElementById("accesores");
var catrgory = document.getElementById("catgory");
var articl1 = document.getElementById("dress");
var articl2 = document.getElementById("makeup");
var articl3 = document.getElementById("care");
var articl4 = document.getElementById("acces");
var span = document.getElementById("span");
// slider action
var slideIndex = 1;
function plusSlides(n) {
    show(slideIndex += n);
}
function show(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}
show(slideIndex);
var slide = 0;
var slaidinterval;
function play() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slide++;
    if (slide > slides.length) { slide = 1 }
    slides[slide - 1].style.display = "block";
    slaidinterval = setTimeout(play, 2000);
}
play();
// action catrgory 
(function init() {
    articl2.innerHTML = "";
    articl3.innerHTML = "";
    articl4.innerHTML = "";
    articl1.innerHTML +=
        `<div class="clothes">
    <img src="d1.jpg" class="dressimge">
    <button class="add" >add</button>
</div>
<div class="clothes">
    <img src="d3.jpg" class="dressimge">
    <button class="add">add</button>
</div >
<div class="clothes">
    <img src="d4.jpg" class="dressimge">
    <button class="add">add</button>
</div>
<div class="clothes">
    <img src="d5.jpg" class="dressimge">
    <button class="add">add</button>
</div>
<div class="clothes">
    <img src="d6.jpg" class="dressimge" >
    <button class="add" >add</button>
</div>
<div class="clothes">
    <img src="d7.jpg" class="dressimge">
    <button class="add">add</button>
</div>
<div class="clothes">
    <img src="d8.jpg" class="dressimge">
    <button class="add">add</button>
</div>
<div class="clothes">
    <img src="d9.jpg" class="dressimge">
    <button class="add">add</button>
</div>
<div class="clothes">
    <img src="d10.jpg" class="dressimge">
    <button class="add">add</button>
</div>
<div class="clothes">
    <img src="d1.jpg" class="dressimge">
    <button class="add">add</button>
</div>
<div class="clothes">
    <img src="d13.jpg" class="dressimge">
    <button class="add">add</button>
</div>
<div class="clothes">
    <img src="d14.jpg" class="dressimge">
    <button class="add">add</button>
</div>`;
    addbtn = document.getElementsByClassName("add");
    actionButton();
}());
clothesbtn.addEventListener("click", () => {
    init()
});

mackupbtn.addEventListener("click", () => {
    articl1.innerHTML = "";
    articl3.innerHTML = "";
    articl4.innerHTML = "";
    articl2.innerHTML +=
        ` <div class="makeup">
    <img src="makeup1.jpg" class="makeupimage">
    <button class="add" >add</button>
</div>
<div class="makeup">
    <img src="makeup13.jpg" class="makeupimage">
    <button class="add">add</button>
</div>
<div class="makeup">
    <img src="makeup3.jpg" class="makeupimage">
    <button class="add">add</button>
</div>
<div class="makeup">
    <img src="makeup4.jpg" class="makeupimage">
    <button class="add">add</button>
</div>
<div class="makeup">
    <img src="makeup5.jpg" class="makeupimage" >
    <button class="add" >add</button>
</div>
<div class="makeup">
    <img src="makeup6.jpg" class="makeupimage">
    <button class="add">add</button>
</div>
<div class="makeup">
    <img src="makeup7.jpg" class="makeupimage">
    <button class="add">add</button>
</div>
<div class="makeup">
    <img src="makeup8.jpg" class="makeupimage">
    <button class="add">add</button>
</div>
<div class="makeup">
    <img src="makeup9.jpg" class="makeupimage">
    <button class="add">add</button>
</div>
<div class="makeup">
    <img src="makeup10.jpg"class="makeupimage">
    <button class="add">add</button>
</div>
<div class="makeup">
    <img src="makeup11.jpg" class="makeupimage">
    <button class="add">add</button>
</div>
<div class="makeup"> 
    <img src="makeup12.jpg" class="makeupimage">
    <button class="add">add</button>
</div>`;
    addbtn = document.getElementsByClassName("add");
    actionButton();
});

skincarebtn.addEventListener("click", () => {
    articl1.innerHTML = "";
    articl2.innerHTML = "";
    articl4.innerHTML = "";
    articl3.innerHTML +=
        ` <div class="skin">
    <img src="skin1.jpg" class="skincareimage">
    <button class="add" >add</button>
</div>
<div class="skin">
    <img src="skin2.jpg" class="skincareimage">
    <button class="add">add</button>
</div>
<div class="skin">
    <img src="skin3.jpg" class="skincareimage">
    <button class="add">add</button>
</div>
<div class="skin">
    <img src="skin4.jpg" class="skincareimage">
    <button class="add">add</button>
</div>
<div class="skin">
    <img src="skin5.jpg" class="skincareimage" >
    <button class="add" >add</button>
</div>
<div class="skin">
    <img src="skin6.jpg" class="skincareimage">
    <button class="add">add</button>
</div>
<div class="skin">
    <img src="skin7.jpg" class="skincareimage">
    <button class="add">add</button>
</div>
<div class="skin">
    <img src="skin8.jpg" class="skincareimage">
    <button class="add">add</button>
</div>
<div class="skin">
    <img src="skin10.jpg" class="skincareimage">
    <button class="add">add</button>
</div>
<div class="skin">
    <img src="skin10.jpg"class="skincareimage">
    <button class="add">add</button>
</div>
<div class="skin">
    <img src="skin11.jpg" class="skincareimage">
    <button class="add">add</button>
</div>
<div class="skin">
    <img src="skin12.jpg" class="skincareimage">
    <button class="add">add</button>
</div>
    `
    addbtn = document.getElementsByClassName("add");
    actionButton();
});
var addbtn = [];
accesoresbtn.addEventListener("click", () => {
    articl1.innerHTML = "";
    articl2.innerHTML = "";
    articl3.innerHTML = "";
    articl4.innerHTML +=
        `<div class="accesores">
    <img src="acc1.jpg" class="accesoresimage">
    <button class="add" >add</button>
</div>
<div class="accesores">
    <img src="acc2.jpg" class="accesoresimage">
    <button class="add">add</button>
</div>
<div class="accesores">
    <img src="acc3.jpg" class="accesoresimage">
    <button class="add">add</button>
</div>
<div class="accesores">
    <img src="acc4.jpg" class="accesoresimage">
    <button class="add">add</button>
</div>
<div class="accesores">
    <img src="acc5.jpg" class="accesoresimage" >
    <button class="add" >add</button>
</div>
<div class="accesores">
    <img src="acc6.jpg" class="accesoresimage">
    <button class="add">add</button>
</div>
<div class="accesores">
    <img src="acc7.jpg" class="accesoresimage">
    <button class="add">add</button>
</div>
<div class="accesores">
    <img src="acc8.jpg" class="accesoresimage">
    <button class="add">add</button>
</div>
<div class="accesores">
    <img src="acc9.jpg" class="accesoresimage">
    <button class="add">add</button>
</div>
<div class="accesores">
    <img src="acc10.jpg"class="accesoresimage">
    <button class="add">add</button>
</div>
<div class="accesores">
    <img src="acc11.jpg" class="accesoresimage">
    <button class="add">add</button>
</div>
<div class="accesores">
    <img src="acc12.jpg" class="accesoresimage">
    <button class="add">add</button>
</div>
    `;
    addbtn = document.getElementsByClassName("add");
    actionButton();
});

function actionButton() {

    console.log('test', addbtn.length);
    for (var i = 0; i < addbtn.length; i++) {
        addbtn[i].addEventListener("click", () => {
            if (sessionStorage.clickcount) {
                sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
            } else {
                sessionStorage.clickcount = 1;
            }
            console.log("added");
            span.textContent = Number(sessionStorage.clickcount) + "";
            console.log(span.textContent);
        });
    }
}
// action top nav
// home.setAttribute("href='home.html'");
// about.setAttribute("href='about.html'");
// contact.setAttribute("href='contact.html'");