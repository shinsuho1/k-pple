
let url = location.href.split('/')[(location.href.split('/').length - 2)];
let html = document.querySelector("html"),
    body = document.querySelector("body"),
    main = document.querySelector("main"),
    header = document.querySelector("header"),
    footer = document.querySelector("footer");

if(url == "main"){
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
        body.classList.add("active");
    });
    
    document.querySelector(".popup .popup-close").addEventListener("click",function(e){
        e.preventDefault();
        document.querySelector(".popup").classList.remove("active");
        document.querySelector(".dark-bg").classList.remove("active");
        body.classList.remove("active")
    });
    
    window.addEventListener("scroll",function(e){
        if(window.scrollY > 45){
            header.classList.add("active");
        }else{
            header.classList.remove("active");
        }
    });
    
    document.querySelectorAll(".select-menu").forEach(function(el,index){
        let value = el.querySelector(".value"),
            enable_click = true,
            count = 0;
        el.addEventListener("click",function(e){
            enable_click = false;
            e.preventDefault();
            if(value.classList.contains("view")) value.classList.remove("view");
            el.classList.add("active");
        });
        el.querySelector(".minus").addEventListener("click",function(e){
            enable_click = false;
            e.preventDefault();
            if(value.textContent <= 0) return false;
            value.textContent = Number(value.textContent) - 1;
        });
        el.querySelector(".plus").addEventListener("click",function(e){
             enable_click = false;
            e.preventDefault();
            value.textContent = Number(value.textContent) + 1;
        });
    });
    
    $(".slide-menu").click(function(e){
        e.preventDefault();
        $(this).parent().siblings(".slide").stop().slideToggle();
    });
    
    // $(".menu-option .swiper-slide").click(function(e){
    //     e.preventDefault();
    //     $(this).toggleClass("active");
    // });
    
    document.querySelector("footer .top").addEventListener("click",function(e){
        e.preventDefault();
        window.scrollTo({top:0,behavior:"smooth"})
    });
    
    
    
    window.addEventListener("DOMContentLoaded",function(){
        setTimeout(() => {
            document.querySelectorAll(".select-menu")[0].classList.add("active");
            setTimeout(() => {
                document.querySelectorAll(".select-menu")[0].classList.remove("active");            
            }, 1000);
        }, 2000);
    });
}
    