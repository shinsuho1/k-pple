
let url = location.href.split('/')[(location.href.split('/').length - 2)];
let html = document.querySelector("html"),
    body = document.querySelector("body"),
    main = document.querySelector("main"),
    header = document.querySelector("header"),
    footer = document.querySelector("footer");

if (url == "main") {
    document.querySelectorAll(".menu-option .swiper").forEach(function (ele, index) {
        var slide = new Swiper(ele, {
            speed: 1000,
            slidesPerView: 1.9,
            spaceBetween: 10,
            pagination: {
                el: ele.parentElement.querySelector(".pagination"),
                clickable: true,
            },
            on: {
                init: function (swiper) {
                    swiper.slideTo(0);
                }
            }
        })
    });

    document.querySelectorAll(".popup_test").forEach(function (el, index) {
        let popup = document.querySelectorAll(".popup");
        el.addEventListener("click", function (e) {
            popup[index].classList.add("active");
            document.querySelector(".dark-bg").classList.add("active");
            body.classList.add("stop_scroll")
        });
        if (popup[index].querySelector(".close_btn")) {
            popup[index].querySelector(".close_btn").addEventListener("click", function (e) {
                e.preventDefault();
                popup[index].classList.remove("active");
                document.querySelector(".dark-bg").classList.remove("active");
                body.classList.remove("stop_scroll")
            });
        }
    });

    document.querySelectorAll("main .more").forEach(function(el){
        el.addEventListener("click",function(e){
            e.preventDefault();
            document.querySelector(".dark-bg").classList.add("active");
            document.querySelector(".popup.menu-more").classList.add("active");
            body.classList.add("stop_scroll")
        });
    });
    document.querySelector(".popup.menu-more .close_btn").addEventListener("click",function(e){
        e.preventDefault();
        document.querySelector(".dark-bg").classList.remove("active");
        document.querySelector(".popup.menu-more").classList.remove("active");
        body.classList.remove("stop_scroll")
    });

    window.addEventListener("scroll", function (e) {
        if (window.scrollY > 45) {
            header.classList.add("active");
        } else {
            header.classList.remove("active");
        }
    });

    document.querySelectorAll(".select-menu").forEach(function (el, index) {
        let value = el.querySelector(".value"),
            count = 0;
        el.addEventListener("click", function (e) {
            count = 0;
            let set = setInterval(() => {
                count++;
                if (count >= 5) {
                    el.classList.remove('active');
                    if (value.textContent > 0) {
                        el.classList.add('on');
                    }
                    clearInterval(set)
                }
            }, 1000);
            if (el.classList.contains("on")) {
                el.classList.remove("on");
            }
            el.classList.add('active');
        });

        el.querySelector(".minus").addEventListener("click", function (e) {
            e.preventDefault();
            if (value.textContent <= 0) {
                return false;
            };
            value.textContent = Number(value.textContent) - 1;
        });
        el.querySelector(".plus").addEventListener("click", function (e) {
            e.preventDefault();
            value.textContent = Number(value.textContent) + 1;
        });
    });

    $(".slide-menu").click(function (e) {
        e.preventDefault();
        $(this).parent().siblings(".slide").stop().slideToggle();
    });

    // $(".menu-option .swiper-slide").click(function(e){
    //     e.preventDefault();
    //     $(this).toggleClass("active");
    // });

    document.querySelector("footer .top").addEventListener("click", function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" })
    });



    window.addEventListener("DOMContentLoaded", function () {
        setTimeout(() => {
            document.querySelectorAll(".select-menu")[0].classList.add("active");
            setTimeout(() => {
                document.querySelectorAll(".select-menu")[0].classList.remove("active");
            }, 1000);
        }, 2000);
    });
}

if (url == "order") {
    var order_banner = new Swiper(".order_banner", {
        loop: true,
        speed: 1000,
    })
}

let a_1 = document.querySelectorAll(".a_1");

a_1.forEach(function(el){
    if(el.querySelector("span").getBoundingClientRect().width >= el.getBoundingClientRect().width){
        let clone = document.createElement("span");
        clone.textContent = el.querySelector("span").textContent;
        el.appendChild(clone);
        el.classList.add("move");
    }
});

document.querySelector(".popup.menu-more .more").addEventListener("click",function(e){
    e.preventDefault();
    document.querySelector(".popup.menu-more .more").previousElementSibling.classList.add("active");
    document.querySelector(".popup.menu-more .more").remove();
});