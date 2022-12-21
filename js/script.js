// ---------- navigation menu

const menutoggle = document.querySelector(".menutoggle");

const navbar = document.querySelector(".navbar");

menutoggle.addEventListener("click", () => {

    menutoggle.classList.toggle("active");

    navbar.classList.toggle("active");

})

//------------banner slider

var slideimg = document.getElementById("slideimg");

var images = new Array(

     "images/banner1.png",
     "images/banner2.png" ,
     "images/banner3.png" 
  
);

var len = images.length;

var i = 0;

function slider (){

if(i > len-1){
   
i= 0;
}
slideimg.src = images[i];
i++;
    setTimeout('slider ()' , 3000)
}

// ------------- counter.js

$(document).ready(function () {

    $(".counter").counterUp({

        delay: 10,
        time: 1800,

    });


});

// ----------swiper testimonial slider

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    // },
    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    // },
});
















