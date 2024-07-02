// var main_slide = new Swiper(".menu-option .swiper", {
//     // loop: true,
//     speed: 1000,
//     slidesPerView: 1.9,
//     spaceBetween: 10,
//     on:{
//         init: function(swiper){
//             swiper.slideTo(0);
//         }
//     }
// });

document.querySelectorAll(".menu-option .swiper").forEach(function(ele,index){
    var slide = new Swiper(ele,{
        speed: 1000,
        slidesPerView: 1.9,
        spaceBetween: 10,
        pagination: {
            el: ele.parentElement.querySelector(".pagination"),
            clickable: true,
        },
        on:{
            init: function(swiper){
                swiper.slideTo(0);
            }
        }
    })
});

document.querySelector(".popup_test").addEventListener("click",function(e){
    e.preventDefault();
    document.querySelector(".popup").classList.add("active");
    document.querySelector(".dark-bg").classList.add("active");
});

document.querySelector(".popup .popup-close").addEventListener("click",function(e){
    e.preventDefault();
    document.querySelector(".popup").classList.remove("active");
    document.querySelector(".dark-bg").classList.remove("active");
});